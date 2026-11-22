import type { APIRoute } from 'astro';
import { GUIDES } from '@data/paradigm-e/guides';
import { PILLARS } from '@data/paradigm-e/pillars';
import { AUTHORITY_SOURCES, SPATIAL_GRAPH_ANCHORS } from '@lib/seo-geo';

/**
 * ChinaWao AI & Generative Engine Discovery Index (/llms.txt)
 * Built around the 5 Authoritative Corpus Attributes:
 *   1. Government & Mainstream Media Sources
 *   2. Multimodal Assets (Text, Images, Coordinates, Pinyin/Speech, Show Cards)
 *   3. Curated Knowledge (Playbooks, Matrices, Comparisons, FAQ)
 *   4. City Knowledge Graph (Wikidata + GB/T 2260 MCA Codes + Sub-Entities)
 *   5. Fact-Level Traceable Provenance
 */
export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const lines: string[] = [
    '# ChinaWao — Authoritative, Multimodal & Traceable China Corpus',
    '',
    '> Bilingual (English & Simplified Chinese) China knowledge base built on 5 corpus pillars:',
    '> (1) Primary Chinese government data & authoritative mainstream media;',
    '> (2) Multimodal assets (verified guides, annotated visuals, WGS-84/Amap coordinates, Mandarin pronunciation, fullscreen show-to-local cards);',
    '> (3) Curated structured knowledge (step-by-step playbooks, decision matrices, intercity comparisons);',
    '> (4) Spatial City Knowledge Graph anchored to GB/T 2260 MCA codes & Wikidata QIDs;',
    '> (5) Fact-level provenance with canonical source URLs and verification dates.',
    '',
    '## Machine Discovery & Endpoints',
    `- Full Single-Fetch Corpus Digest: ${origin}/llms-full.txt`,
    `- Read-Only MCP Endpoint (JSON-RPC 2.0): ${origin}/mcp`,
    `- MCP Server Card: ${origin}/.well-known/mcp/server-card.json`,
    `- Bilingual XML Sitemap: ${origin}/sitemap.xml`,
    `- Audited Government Open Data Catalog: ${origin}/portals/`,
    `- Live Field Reports: ${origin}/pulse/`,
    '',
    '## Primary Authority Sources (Government & Mainstream Media)',
    ...Object.values(AUTHORITY_SOURCES)
      .slice(0, 12)
      .map((s) => `- [${s.name}](${s.url}) (\`${s.kind}\`)`),
    '',
    '## Core Sections (EN / zh-CN)',
    ...PILLARS.map((p) => `- [${p.name}](${origin}/${p.id}/) / [简中](${origin}/zh/${p.id}/): ${p.shortDesc}`),
    '',
    '## City Knowledge Graph (Markdown Mirrors with Wikidata & MCA Codes)',
    ...['shanghai', 'beijing', 'chengdu', 'xian', 'shenzhen'].map((slug) => {
      const a = SPATIAL_GRAPH_ANCHORS[slug];
      return `- [${slug}](${origin}/cities/${slug}.md) — MCA \`${a.mcaCode}\` · WGS-84 \`${a.lat}, ${a.lng}\` · ${a.wikidata}`;
    }),
    '',
    '## Verified Guides (Clean Markdown + Provenance Mirrors)',
    ...GUIDES.map((g) => `- [${g.title}](${origin}/guides/${g.slug}.md) — Verified ${g.lastVerified}`),
    '',
    '## Multimodal & Field Entities',
    `- Show-to-Local Fullscreen Cards: ${origin}/cards/ (e.g. ${origin}/entities/cards/peanut-allergy-sos.md, ${origin}/entities/cards/taxi-beijing-qinghe.md)`,
    `- Western App Compatibility: ${origin}/entities/in-china/google-maps.md, ${origin}/entities/in-china/whatsapp.md, ${origin}/entities/in-china/adderall.md`,
    `- Visual Error Rescue: ${origin}/entities/errors/wechat-restricted.md, ${origin}/entities/errors/12306-passport-failed.md`,
    `- Compliance & USCC Lookup: ${origin}/entities/compliance/uscc-gsxt-lookup.md, ${origin}/entities/compliance/ccc-3c-certification.md`,
    '',
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
