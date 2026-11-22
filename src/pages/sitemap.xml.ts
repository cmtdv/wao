import type { APIRoute } from 'astro';
import { PILLARS, UTILITY_TOOLS } from '@data/paradigm-e/pillars';
import { GUIDES } from '@data/paradigm-e/guides';
import { ENTITIES } from '@data/paradigm-e/entities';
import { COMPARISONS, PERSONA_LANDINGS, ROUTES, STACKS } from '@data/paradigm-e/collections';
import { getPublicPosts } from '@lib/cms';
import { postPath } from '@lib/format';

/**
 * Dynamic Bilingual XML Sitemap (/sitemap.xml)
 * Emits canonical EN & /zh/ routes with xhtml:link hreflang alternates and lastmod dates.
 */
function xmlEscape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

interface SitemapItem {
  path: string;
  lastmod?: string;
  priority: string;
}

export const GET: APIRoute = async ({ url }) => {
  const origin = url.origin;
  const today = '2026-11-22';

  const items: SitemapItem[] = [
    { path: '/', lastmod: today, priority: '1.0' },
    { path: '/guides/', lastmod: today, priority: '0.9' },
    { path: '/cards/', lastmod: today, priority: '0.9' },
    { path: '/tools/', lastmod: today, priority: '0.9' },
    { path: '/portals/', lastmod: today, priority: '0.9' },
    { path: '/pulse/', lastmod: today, priority: '0.8' },
    { path: '/explore/', lastmod: today, priority: '0.8' },
    { path: '/posts/', lastmod: today, priority: '0.8' },
    ...PILLARS.map((p) => ({ path: `/${p.id}/`, lastmod: today, priority: '0.9' })),
    ...GUIDES.map((g) => ({ path: `/guides/${g.slug}/`, lastmod: g.lastVerified, priority: '0.85' })),
    ...ENTITIES.map((e) => ({
      path: `/${e.collection}/${e.slug}/`,
      lastmod: e.lastVerified,
      priority: e.collection === 'cities' || e.collection === 'cards' ? '0.85' : '0.8',
    })),
    ...COMPARISONS.map((c) => ({ path: `/compare/${c.slug}/`, lastmod: c.lastVerified, priority: '0.8' })),
    ...ROUTES.map((r) => ({ path: `/routes/${r.slug}/`, lastmod: r.lastVerified, priority: '0.8' })),
    ...STACKS.map((s) => ({ path: `/stacks/${s.slug}/`, lastmod: s.lastVerified, priority: '0.75' })),
    ...PERSONA_LANDINGS.map((f) => ({ path: `/for/${f.slug}/`, lastmod: today, priority: '0.8' })),
    ...UTILITY_TOOLS.map((t) => ({ path: t.href, lastmod: today, priority: '0.8' })),
  ];

  // Append live published CMS posts
  const cmsFeed = await getPublicPosts({ limit: 100, locale: 'en' }).catch(() => ({ entries: [] as never[] }));
  for (const entry of cmsFeed.entries ?? []) {
    const slug = entry.data.slug || entry.id;
    const rawDate = entry.data.publishedAt ? new Date(entry.data.publishedAt).toISOString().slice(0, 10) : today;
    items.push({ path: postPath(slug), lastmod: rawDate, priority: '0.75' });
  }

  const seen = new Set<string>();
  const urlBlocks: string[] = [];

  for (const item of items) {
    const cleanPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
    if (seen.has(cleanPath)) continue;
    seen.add(cleanPath);

    const enLoc = `${origin}${cleanPath}`;
    const zhLoc = cleanPath === '/' ? `${origin}/zh/` : `${origin}/zh${cleanPath}`;

    for (const loc of [enLoc, zhLoc]) {
      urlBlocks.push(
        [
          '  <url>',
          `    <loc>${xmlEscape(loc)}</loc>`,
          item.lastmod ? `    <lastmod>${xmlEscape(item.lastmod)}</lastmod>` : '',
          `    <priority>${item.priority}</priority>`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(enLoc)}" />`,
          `    <xhtml:link rel="alternate" hreflang="zh-CN" href="${xmlEscape(zhLoc)}" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(enLoc)}" />`,
          '  </url>',
        ]
          .filter(Boolean)
          .join('\n'),
      );
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlBlocks,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=600',
    },
  });
};
