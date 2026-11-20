import type { APIRoute } from 'astro';
import { GUIDES } from '@data/paradigm-e/guides';
import { PILLARS } from '@data/paradigm-e/pillars';

export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const lines: string[] = [
    '# ChinaWao — Everything About China, Decoded & Verified',
    '',
    '> Source-verified China knowledge portal & deterministic utility platform (Paradigm E: Dual-Track Human/AI Delivery).',
    '> Clean Markdown mirrors are available via `.md` endpoints and our stateless read-only MCP Server.',
    '',
    '## Machine Discovery & MCP Endpoints',
    `- MCP Endpoint (Read-Only JSON-RPC): ${origin}/mcp`,
    `- MCP Server Card: ${origin}/.well-known/mcp/server-card.json`,
    `- 848 Government Open Data Portals: ${origin}/portals/`,
    `- Multi-Facet Explorer: ${origin}/explore/`,
    `- Live Ground Pulse: ${origin}/pulse/`,
    '',
    '## 6 Core Pillars',
    ...PILLARS.map((p) => `- [${p.name} (${p.nameZh})](${origin}/${p.id}/): ${p.shortDesc}`),
    '',
    '## 32 Verified Deep Feature Guides (Markdown Mirrors)',
    ...GUIDES.map((g) => `- [${g.title}](${origin}/guides/${g.slug}.md) — ${g.archetype} · Verified ${g.lastVerified}`),
    '',
    '## Programmatic Entity Hubs',
    `- Cities (MCA 6-digit): ${origin}/cities/shanghai.md, ${origin}/cities/beijing.md, ${origin}/cities/chengdu.md, ${origin}/cities/xian.md, ${origin}/cities/shenzhen.md`,
    `- Western App Compatibility: ${origin}/entities/in-china/google-maps.md, ${origin}/entities/in-china/whatsapp.md, ${origin}/entities/in-china/adderall.md`,
    `- Visual Error Rescue: ${origin}/entities/errors/wechat-restricted.md, ${origin}/entities/errors/12306-passport-failed.md`,
    `- Compliance & USCC WAF Desks: ${origin}/entities/compliance/uscc-gsxt-lookup.md, ${origin}/entities/compliance/ccc-3c-certification.md`,
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
