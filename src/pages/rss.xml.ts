import type { APIRoute } from 'astro';
import { getSiteSettings } from 'emdash';
import { getPublicPosts } from '../lib/cms';
import { postPath } from '../lib/format';

const XML_ESCAPE: ReadonlyArray<readonly [RegExp, string]> = [
  [/&/g, '&amp;'],
  [/</g, '&lt;'],
  [/>/g, '&gt;'],
  [/"/g, '&quot;'],
  [/'/g, '&apos;'],
];

function escapeXml(value: string): string {
  let out = value;
  for (const [pattern, replacement] of XML_ESCAPE) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

export const GET: APIRoute = async ({ site, url }) => {
  const siteUrl = site ?? new URL(url.origin);
  const [settings, postsResult] = await Promise.all([
    getSiteSettings(),
    getPublicPosts({ limit: 20 }),
  ]);

  if (postsResult.error) {
    return new Response('RSS feed is temporarily unavailable.', { status: 503 });
  }

  const siteTitle = settings.title || 'ChinaWao';
  const siteDescription = settings.tagline || 'Stories, guides, and field notes.';
  const feedUrl = new URL('/rss.xml', siteUrl).href;

  const items = postsResult.entries
    .filter((post) => post.data.status === 'published' && post.data.publishedAt)
    .map((post) => {
      const slug = post.data.slug || post.id;
      const itemUrl = new URL(postPath(slug), siteUrl).href;
      const pubDate = post.data.publishedAt!.toUTCString();
      const title = escapeXml(post.data.title || 'Untitled');
      const description = escapeXml(post.data.excerpt || '');
      const categories = (post.data.terms?.category ?? [])
        .map((term) => `      <category>${escapeXml(term.label)}</category>`)
        .join('\n');

      return [
        '    <item>',
        `      <title>${title}</title>`,
        `      <link>${escapeXml(itemUrl)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(itemUrl)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        description ? `      <description>${description}</description>` : '',
        categories,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const lastBuildDate =
    postsResult.entries[0]?.data.publishedAt?.toUTCString() ?? new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <description>${escapeXml(siteDescription)}</description>
    <link>${escapeXml(siteUrl.href)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
