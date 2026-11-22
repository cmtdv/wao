import type { APIRoute } from 'astro';

/**
 * Search Engine + Answer Engine + Generative AI Crawler Policy (/robots.txt)
 * Explicitly welcomes major search & AI crawlers and advertises sitemap.xml + llms.txt.
 */
export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const lines = [
    '# ChinaWao — Authoritative, Multimodal, City-Mapped & Traceable China Corpus',
    `# AI Corpus Index: ${origin}/llms.txt`,
    `# Full AI Digest: ${origin}/llms-full.txt`,
    `# Read-Only MCP: ${origin}/mcp`,
    '',
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    'Disallow: /_emdash/',
    'Disallow: /api/',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
