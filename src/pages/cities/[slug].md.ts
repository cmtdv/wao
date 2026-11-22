import type { APIRoute } from 'astro';
import { getEntity } from '@data/paradigm-e/entities';
import {
  SPATIAL_GRAPH_ANCHORS,
  formatProvenanceMarkdown,
  getEntityCitations,
} from '@lib/seo-geo';

export const GET: APIRoute = ({ params, url }) => {
  const slug = params.slug || '';
  const city = getEntity('cities', slug);
  if (!city) {
    return new Response('# 404 City Not Found\n', {
      status: 404,
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    });
  }

  const origin = url.origin;
  const canonical = `${origin}/cities/${city.slug}/`;
  const canonicalZh = `${origin}/zh/cities/${city.slug}/`;
  const anchor = SPATIAL_GRAPH_ANCHORS[city.slug];
  const citations = getEntityCitations(city);

  const lines: string[] = [
    '---',
    `entity_id: "${origin}/cities/${city.slug}/#entity"`,
    `title: "${city.title} (${city.chineseName})"`,
    `pinyin: "${city.pinyin}"`,
    `mca_code_gbt2260: "${anchor?.mcaCode ?? city.cityData?.mcaCode ?? ''}"`,
    `wikidata: "${anchor?.wikidata ?? ''}"`,
    `geo_wgs84: "${anchor ? `${anchor.lat}, ${anchor.lng}` : ''}"`,
    `last_verified: ${city.lastVerified}`,
    `canonical_url: ${canonical}`,
    `alternate_zh_url: ${canonicalZh}`,
    '---',
    '',
    `# ${city.title} (${city.chineseName} · ${city.pinyin})`,
    '',
    city.tagline,
    '',
    '## Key City Specifications',
    ...city.quickSpecs.map((s) => `- **${s.label}**: ${s.value}`),
    '',
    '## Multimodal & Spatial Anchor',
    `- Mandarin Pronunciation (zh-CN): ${city.chineseName} (${city.pinyin})`,
    ...(anchor ? [`- WGS-84 Coordinates: \`${anchor.lat}, ${anchor.lng}\``, `- Wikidata Entity: ${anchor.wikidata}`, `- Administrative Code (GB/T 2260): \`${anchor.mcaCode}\``] : []),
    ...(city.cityData?.ports240h ? [`- 240h Transit Entry Ports: ${city.cityData.ports240h}`] : []),
    '',
    '## Field Reality',
    city.whatNobodyTellsYou,
    '',
    '## Checklist',
    ...city.checklist.map((c) => `- ${c}`),
    '',
  ];

  if (city.cityData) {
    lines.push(
      '## City Knowledge Graph — Contained Places & Institutions',
      '',
      '### Universities',
      ...city.cityData.universities.map((u) => `- **${u.name}** (${u.chineseName}): ${u.focus}`),
      '',
      '### International Hospitals',
      ...city.cityData.intlHospitals.map((h) => `- **${h.name}** (${h.chineseName}): ${h.dept} · Tel: \`${h.phone}\``),
      '',
      '### Landmarks, Heritage Brands & Hubs',
      ...city.cityData.mashup.flatMap((sec) =>
        sec.items.map(
          (it) => `- [${sec.categoryLabel}] **${it.name}** (${it.chineseName}): ${it.meta}${it.href ? ` -> ${origin}${it.href}` : ''}`,
        ),
      ),
      '',
    );
  }

  lines.push(...formatProvenanceMarkdown(citations, canonical));

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
