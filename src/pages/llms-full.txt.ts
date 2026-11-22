import type { APIRoute } from 'astro';
import { GUIDES } from '@data/paradigm-e/guides';
import { ENTITIES, getEntitiesByCollection } from '@data/paradigm-e/entities';
import { GOV_PORTALS, COMPARISONS, ROUTES } from '@data/paradigm-e/collections';
import {
  AUTHORITY_SOURCES,
  SPATIAL_GRAPH_ANCHORS,
  getGuideCitations,
  resolveAuthoritySource,
} from '@lib/seo-geo';

/**
 * Full Authoritative Corpus Digest (/llms-full.txt)
 * Single-fetch GEO/RAG knowledge bundle exposing all 5 Authoritative Corpus Attributes:
 *   1. Government & Mainstream Media Sources
 *   2. Multimodal Assets (Coordinates, Amap Hanzi Queries, Pinyin/Speech, Show Cards)
 *   3. Curated Facts & Decision Matrices
 *   4. City Knowledge Graph (Wikidata + GB/T 2260 MCA Codes + Hospitals/Universities/Ports)
 *   5. Fact-Level Traceable Provenance URLs
 */
export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const cities = getEntitiesByCollection('cities');
  const cards = getEntitiesByCollection('cards');

  const lines: string[] = [
    '# ChinaWao — Full Authoritative China Corpus (llms-full.txt)',
    '',
    '> Structured, bilingual, multimodal, city-mapped, and source-traceable China reference corpus.',
    `> Canonical Origin: ${origin} · MCP JSON-RPC: ${origin}/mcp · Sitemap: ${origin}/sitemap.xml`,
    '',
    '## 1. Primary Authority Sources Registry (Government & Mainstream Media)',
    ...Object.values(AUTHORITY_SOURCES).map(
      (s) => `- **${s.name}** (${s.nameZh}) [\`${s.kind}\`] — ${s.url}${s.sameAs ? ` (Wikidata: ${s.sameAs})` : ''}`,
    ),
    '',
    '## 2. City Knowledge Graph (GB/T 2260 MCA Codes · WGS-84 · Wikidata · Sub-Entities)',
    ...cities.flatMap((c) => {
      const anchor = SPATIAL_GRAPH_ANCHORS[c.slug];
      const cd = c.cityData;
      return [
        `### ${c.title} (${c.chineseName} · ${c.pinyin})`,
        `- Canonical: ${origin}/cities/${c.slug}/ · Markdown: ${origin}/cities/${c.slug}.md`,
        anchor
          ? `- Spatial Graph: MCA \`${anchor.mcaCode}\` · WGS-84 \`${anchor.lat}, ${anchor.lng}\` · Wikidata ${anchor.wikidata}`
          : '',
        cd ? `- 240h Entry Ports: ${cd.ports240h}` : '',
        cd ? `- Universities: ${cd.universities.map((u) => `${u.name} (${u.chineseName})`).join('; ')}` : '',
        cd ? `- International Hospitals: ${cd.intlHospitals.map((h) => `${h.name} [${h.phone}]`).join('; ')}` : '',
        `- Field Note: ${c.whatNobodyTellsYou}`,
        '',
      ].filter(Boolean);
    }),
    '## 3. Multimodal Show-to-Local Cards (Bilingual Hanzi + Pinyin + Speech + Offline PNG)',
    ...cards.map((c) => {
      const cd = c.cardData!;
      return `- **${c.title}** (${cd.titleZh}) -> ${origin}/cards/${c.slug}/\n  - Hanzi: ${cd.largeHanzi}\n  - Pinyin: ${cd.pinyinLine}\n  - English (GB/T 30240): ${cd.gb30240En}`;
    }),
    '',
    '## 4. Verified Guides & Fact-Level Provenance',
    ...GUIDES.flatMap((g) => {
      const citations = getGuideCitations(g);
      return [
        `### ${g.title} (${g.titleZh})`,
        `- Canonical: ${origin}/guides/${g.slug}/ · Markdown: ${origin}/guides/${g.slug}.md · Verified: ${g.lastVerified}`,
        `- Summary: ${g.leadHook}`,
        ...g.hardFacts.map((f) => {
          const resolved = resolveAuthoritySource(f.source, f.verifiedDate);
          return `  - **${f.label}**: ${f.value} — Source: [${resolved.name}](${resolved.url}) (\`${resolved.kind}\`, ${f.verifiedDate})`;
        }),
        `- Primary Citations: ${citations.map((c) => `${c.name} <${c.url}>`).join(' | ')}`,
        '',
      ];
    }),
    '## 5. Direct Decision Verdicts & Intercity Routes',
    ...COMPARISONS.map(
      (c) =>
        `- **${c.title}** (${origin}/compare/${c.slug}/): Choose ${c.optionA} if ${c.chooseAIf} Choose ${c.optionB} if ${c.chooseBIf}`,
    ),
    ...ROUTES.map(
      (r) =>
        `- **${r.title}** (${origin}/routes/${r.slug}/): ${r.verdict} Warning: ${r.wrongStationWarning}`,
    ),
    '',
    '## 6. Audited Government Open-Data Portals',
    ...GOV_PORTALS.map(
      (p) => `- **${p.name}** (${p.chineseName}) [${p.level} · ${p.domain} · ${p.access}] -> ${p.url}`,
    ),
    '',
    `## 7. Complete Programmatic Entities Index (${ENTITIES.length} records)`,
    ...ENTITIES.map(
      (e) =>
        `- [${e.collection}] ${e.title} (${e.chineseName}) -> ${origin}/${e.collection}/${e.slug}/ (md: ${
          e.collection === 'cities' ? `${origin}/cities/${e.slug}.md` : `${origin}/entities/${e.collection}/${e.slug}.md`
        })`,
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=600',
    },
  });
};
