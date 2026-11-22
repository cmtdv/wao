import type { APIRoute } from 'astro';
import { getEntity, type EntityCollection } from '@data/paradigm-e/entities';
import {
  SPATIAL_GRAPH_ANCHORS,
  formatProvenanceMarkdown,
  getEntityCitations,
} from '@lib/seo-geo';

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

  const origin = url.origin;
  const canonical = `${origin}/${entity.collection}/${entity.slug}/`;
  const canonicalZh = `${origin}/zh/${entity.collection}/${entity.slug}/`;
  const anchor = SPATIAL_GRAPH_ANCHORS[entity.slug];
  const citations = getEntityCitations(entity);

  const lines: string[] = [
    '---',
    `entity_id: "${origin}/${entity.collection}/${entity.slug}/#entity"`,
    `collection: ${entity.collection}`,
    `title: "${entity.title}"`,
    `chinese_name: "${entity.chineseName}"`,
    `pinyin: "${entity.pinyin}"`,
    ...(anchor ? [`wikidata: "${anchor.wikidata}"`, `geo_wgs84: "${anchor.lat}, ${anchor.lng}"`] : []),
    ...(anchor?.parentCitySlug ? [`parent_city: "${origin}/cities/${anchor.parentCitySlug}/#entity"`] : []),
    `last_verified: ${entity.lastVerified}`,
    `canonical_url: ${canonical}`,
    `alternate_zh_url: ${canonicalZh}`,
    '---',
    '',
    `# ${entity.title} (${entity.chineseName})`,
    '',
    entity.tagline,
    '',
    '## Key Specifications',
    ...entity.quickSpecs.map((s) => `- **${s.label}**: ${s.value}`),
    '',
    '## Multimodal & Spatial Signals',
    `- Mandarin Pronunciation (zh-CN): ${entity.chineseName} (${entity.pinyin})`,
    ...(entity.primaryAmapTerm ? [`- Amap Chinese Search Query: \`${entity.primaryAmapTerm}\``] : []),
    ...(anchor ? [`- WGS-84 Coordinates: \`${anchor.lat}, ${anchor.lng}\``, `- Wikidata Entity: ${anchor.wikidata}`] : []),
    ...(anchor?.parentCitySlug ? [`- Contained In City: ${origin}/cities/${anchor.parentCitySlug}/`] : []),
    '',
  ];

  if (entity.cardData) {
    lines.push(
      '## Show-to-Local Fullscreen Card Payload',
      `- Scenario: ${entity.cardData.scenario}`,
      `- Chinese Text: ${entity.cardData.largeHanzi}`,
      `- Pinyin: ${entity.cardData.pinyinLine}`,
      `- English (GB/T 30240): ${entity.cardData.gb30240En}`,
      `- Sub-Note: ${entity.cardData.subNoteChinese} (${entity.cardData.subNoteEn})`,
      '',
    );
  }

  if (entity.hotspotData) {
    lines.push(
      `## Visual Interface Annotations (${entity.hotspotData.canvasTitle})`,
      ...entity.hotspotData.hotspots.map(
        (h) => `- **${h.chineseText}**: ${h.englishInstruction}${h.warning ? ` (Warning: ${h.warning})` : ''}`,
      ),
      '',
    );
  }

  if (entity.attractionData?.nearbyMesh?.length) {
    lines.push(
      '## Nearby Spatial Graph (1–3km Walking Mesh)',
      ...entity.attractionData.nearbyMesh.map(
        (m) => `- [${m.category} · ${m.distance}] **${m.name}** (${m.chineseName} · Amap: \`${m.amapQuery}\`): ${m.note}`,
      ),
      '',
    );
  }

  lines.push(
    '## Field Notes',
    entity.whatNobodyTellsYou,
    '',
    '## Action Checklist',
    ...entity.checklist.map((c) => `- ${c}`),
    '',
    ...formatProvenanceMarkdown(citations, canonical),
  );

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
