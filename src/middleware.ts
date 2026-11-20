import { defineMiddleware } from 'astro:middleware';
import { getRequestContext, runWithContext } from 'emdash';

/**
 * ChinaWao Native Bilingual Middleware (en default + zh prefixed /zh/*)
 * - Binds resolved locale into Astro.locals and EmDash ALS request context
 * - Transparently rewrites /zh/* requests to canonical routes while preserving locale='zh'
 */
export const onRequest = defineMiddleware((context, next) => {
  const { pathname, search } = context.url;

  // Never intercept EmDash internal/admin/API routes, static assets, or machine-readable endpoints
  if (
    pathname.startsWith('/_emdash') ||
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/.well-known/') ||
    pathname === '/mcp' ||
    pathname === '/mcp/' ||
    pathname === '/llms.txt' ||
    pathname.endsWith('.md') ||
    pathname === '/rss.xml' ||
    pathname === '/favicon.svg' ||
    pathname === '/manifest.webmanifest'
  ) {
    return next();
  }

  // Rewritten pass: preserve locale already resolved on the initial /zh/* request
  if (context.locals.locale) {
    const activeLocale = context.locals.locale;
    const parent = getRequestContext();
    return runWithContext(
      parent ? { ...parent, locale: activeLocale } : { editMode: false, locale: activeLocale },
      () => next(),
    );
  }

  // Normalize /zh-cn or /zh-CN prefix to canonical /zh/* path
  if (/^\/zh-cn(\/|$)/i.test(pathname)) {
    const normalized = pathname.replace(/^\/zh-cn/i, '/zh') || '/zh/';
    return context.redirect(`${normalized}${search}`, 302);
  }

  // Initial /zh or /zh/* request -> rewrite to canonical page with locale='zh'
  if (pathname === '/zh' || pathname === '/zh/' || pathname.startsWith('/zh/')) {
    context.locals.locale = 'zh';
    context.locals.originalPathname = pathname;
    const stripped = pathname === '/zh' || pathname === '/zh/' ? '/' : pathname.slice(3);
    const parent = getRequestContext();
    return runWithContext(
      parent ? { ...parent, locale: 'zh' } : { editMode: false, locale: 'zh' },
      () => context.rewrite(`${stripped}${search}`),
    );
  }

  // Default unprefixed English route
  context.locals.locale = 'en';
  context.locals.originalPathname = pathname;
  const parent = getRequestContext();
  return runWithContext(
    parent ? { ...parent, locale: 'en' } : { editMode: false, locale: 'en' },
    () => next(),
  );
});
