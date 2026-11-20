import { getEmDashCollection, getEmDashEntry, getRequestContext, runWithContext, InvalidCursorError } from 'emdash';

function isInvalidCursor(error: unknown): boolean {
  return error instanceof InvalidCursorError ||
    (error instanceof Error && (
      // EmDash 1.5's live loader preserves this exact fingerprint but drops the error class/cause.
      error.message.startsWith('Failed to load collection: Invalid pagination cursor:') ||
      (error.cause !== undefined && isInvalidCursor(error.cause))
    ));
}

/** Keep malformed user cursors distinct from genuine query failures, including Astro loader wrappers. */
export async function queryPage<T>(query: () => Promise<T>) {
  try {
    const result = await query();
    const error = result && typeof result === 'object' && 'error' in result ? result.error : undefined;
    return { result, invalidCursor: isInvalidCursor(error) };
  } catch (error) {
    return { result: null, invalidCursor: isInvalidCursor(error) };
  }
}

/** All public queries ignore editor and preview state, including when an editor is signed in. */
export function publicContext<T>(query: () => T): T {
  const context = getRequestContext();
  return context?.editMode || context?.preview
    ? runWithContext({ ...context, editMode: false, preview: undefined }, query)
    : query();
}

export type PostFilter = {
  limit?: number;
  cursor?: string;
  locale?: string;
  where?: Record<string, string | string[]>;
};

/**
 * Fetch published posts respecting EmDash native i18n locale.
 * When active locale is 'zh' and fewer than `limit` zh translations exist (and no cursor is active),
 * seamlessly appends untranslated 'en' fallback posts deduplicated by translation_group so feeds stay full.
 */
export async function getPublicPosts(options: PostFilter = {}) {
  const activeLocale = options.locale ?? getRequestContext()?.locale ?? 'en';
  const primary = await publicContext(() =>
    getEmDashCollection('posts', {
      status: 'published',
      orderBy: { published_at: 'desc' },
      ...options,
      locale: activeLocale,
    }),
  );

  if (primary.error || activeLocale === 'en' || options.cursor) {
    return primary;
  }

  const targetLimit = options.limit ?? 20;
  if (primary.entries.length >= targetLimit) {
    return primary;
  }

  const fallback = await publicContext(() =>
    getEmDashCollection('posts', {
      status: 'published',
      orderBy: { published_at: 'desc' },
      ...options,
      locale: 'en',
    }),
  );

  if (fallback.error || fallback.entries.length === 0) {
    return primary;
  }

  const seenGroups = new Set<string>();
  const seenSlugs = new Set<string>();
  for (const entry of primary.entries) {
    const raw = entry.data as unknown as Record<string, unknown>;
    if (typeof raw.translationGroup === 'string') seenGroups.add(raw.translationGroup);
    if (typeof raw.translation_group === 'string') seenGroups.add(raw.translation_group);
    if (entry.data.slug) seenSlugs.add(entry.data.slug);
    seenSlugs.add(entry.id);
  }

  const merged = [...primary.entries];
  for (const entry of fallback.entries) {
    if (merged.length >= targetLimit) break;
    const raw = entry.data as unknown as Record<string, unknown>;
    const grp = (raw.translationGroup ?? raw.translation_group ?? entry.id) as string;
    if (seenGroups.has(grp) || (entry.data.slug && seenSlugs.has(entry.data.slug))) {
      continue;
    }
    merged.push(entry);
  }

  return {
    ...primary,
    entries: merged,
    hasMore: primary.hasMore || fallback.hasMore,
    nextCursor: primary.nextCursor ?? fallback.nextCursor,
  };
}

export function getPublicPost(slug: string, locale?: string) {
  const activeLocale = locale ?? getRequestContext()?.locale;
  return publicContext(() =>
    getEmDashEntry('posts', slug, activeLocale ? { locale: activeLocale } : undefined),
  );
}

export function getPublicPage(slug: string, locale?: string) {
  const activeLocale = locale ?? getRequestContext()?.locale;
  return publicContext(() =>
    getEmDashEntry('pages', slug, activeLocale ? { locale: activeLocale } : undefined),
  );
}
