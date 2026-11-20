import type { APIRoute } from 'astro';
import { getEntity, type EntityCollection } from '@data/paradigm-e/entities';

export const GET: APIRoute = ({ params, url }) => {
  const collection = (params.collection || '') as EntityCollection;
  const slug = params.slug || '';
  const entity = getEntity(collection, slug);
  if (!entity) {
    return new Response('# 404 Entity Not Found\n', {
      status: 404,
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    });
  }

  const canonical = `${url.origin}/${entity.collection}/${entity.slug}/`;
  const lines: string[] = [
    '---',
    `collection: ${entity.collection}`,
    `title: "${entity.title}"`,
    `chinese_name: "${entity.chineseName}"`,
    `pinyin: "${entity.pinyin}"`,
    `last_verified: ${entity.lastVerified}`,
    `tier: "${entity.tier}"`,
    `canonical_url: ${canonical}`,
    '---',
    '',
    `# ${entity.title} (${entity.chineseName})`,
    '',
    entity.tagline,
    '',
    '## Deterministic Specs',
    ...entity.quickSpecs.map((s) => `- **${s.label}**: ${s.value}`),
    '',
    '## What Nobody Tells You',
    entity.whatNobodyTellsYou,
    '',
    '## Action Checklist',
    ...entity.checklist.map((c) => `- ${c}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
