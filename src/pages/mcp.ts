import type { APIRoute } from 'astro';
import { GUIDES, GUIDE_BY_SLUG } from '@data/paradigm-e/guides';
import { ENTITIES, getEntity } from '@data/paradigm-e/entities';
import { GOV_PORTALS } from '@data/paradigm-e/collections';
import {
  SPATIAL_GRAPH_ANCHORS,
  getEntityCitations,
  getGuideCitations,
  resolveAuthoritySource,
} from '@lib/seo-geo';

/**
 * ChinaWao Stateless Read-Only MCP Endpoint (/mcp)
 * Zero write paths. Serves authoritative, multimodal, city-mapped, and source-traceable China data.
 */

const TOOLS = [
  {
    name: 'search_chinawao',
    description: 'Search ChinaWao verified guides, city graph nodes, multimodal show cards, and entities.',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string', description: 'Keyword or topic (e.g., 240h, USCC, Shanghai, WeChat, peanut)' } },
      required: ['query'],
    },
  },
  {
    name: 'get_guide',
    description: 'Get verified facts with traceable authority source URLs and canonical Markdown URL for a ChinaWao guide.',
    inputSchema: {
      type: 'object',
      properties: { slug: { type: 'string' } },
      required: ['slug'],
    },
  },
  {
    name: 'get_city_graph',
    description: 'Get structured City Knowledge Graph (GB/T 2260 MCA code, Wikidata, WGS-84, 240h ports, universities, hospitals, landmarks & sources).',
    inputSchema: {
      type: 'object',
      properties: { city: { type: 'string', description: 'City slug: shanghai, beijing, chengdu, xian, or shenzhen' } },
      required: ['city'],
    },
  },
  {
    name: 'check_visa_240h',
    description: 'Check unilateral 30-day or 240-hour cross-province visa-free transit eligibility with official NIA source.',
    inputSchema: {
      type: 'object',
      properties: {
        country_code: { type: 'string', description: 'ISO 2-letter code e.g. US, UK, DE, FR, AU, JP' },
        days: { type: 'number', description: 'Planned stay days in mainland China' },
        has_third_country_ticket: { type: 'boolean', description: 'Confirmed onward ticket to Country/Region C' },
      },
      required: ['country_code', 'days'],
    },
  },
  {
    name: 'list_gov_portals',
    description: 'List audited Chinese government open-data portals by access type (direct-200 or waf-standby).',
    inputSchema: {
      type: 'object',
      properties: {
        access: { type: 'string', enum: ['all', 'direct-200', 'waf-standby'] },
      },
    },
  },
];

export const GET: APIRoute = ({ url }) => {
  return new Response(
    JSON.stringify(
      {
        name: 'chinawao-read-only-mcp',
        status: 'ok',
        readOnly: true,
        protocol: 'JSON-RPC 2.0 (POST /mcp)',
        corpusAttributes: [
          'primary_gov_and_mainstream_media',
          'multimodal_assets',
          'curated_knowledge',
          'city_knowledge_graph',
          'fact_level_provenance',
        ],
        serverCard: `${url.origin}/.well-known/mcp/server-card.json`,
        llmsTxt: `${url.origin}/llms.txt`,
        llmsFullTxt: `${url.origin}/llms-full.txt`,
        sitemap: `${url.origin}/sitemap.xml`,
        tools: TOOLS.map((t) => t.name),
      },
      null,
      2,
    ),
    {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    },
  );
};

export const POST: APIRoute = async ({ request, url }) => {
  const origin = url.origin;
  let body: { jsonrpc?: string; id?: string | number | null; method?: string; params?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Invalid JSON' } }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const id = body.id ?? null;
  const method = body.method ?? '';

  if (method === 'initialize') {
    return new Response(
      JSON.stringify({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2025-03-26',
          capabilities: { tools: {} },
          serverInfo: { name: 'chinawao-read-only-mcp', version: '1.1.0' },
        },
      }),
      { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
    );
  }

  if (method === 'tools/list') {
    return new Response(
      JSON.stringify({ jsonrpc: '2.0', id, result: { tools: TOOLS } }),
      { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
    );
  }

  if (method === 'tools/call') {
    const params = (body.params ?? {}) as { name?: string; arguments?: Record<string, unknown> };
    const name = params.name ?? '';
    const args = params.arguments ?? {};

    if (name === 'search_chinawao') {
      const q = String(args.query ?? '').trim().toLowerCase();
      const matchedGuides = GUIDES.filter((g) => `${g.title} ${g.titleZh} ${g.leadHook}`.toLowerCase().includes(q)).slice(0, 5);
      const matchedEntities = ENTITIES.filter((e) => `${e.title} ${e.chineseName} ${e.tagline}`.toLowerCase().includes(q)).slice(0, 5);
      const text = [
        `Search results for "${q}":`,
        ...matchedGuides.map((g) => `- [Guide] ${g.title} -> ${origin}/guides/${g.slug}.md (Verified ${g.lastVerified})`),
        ...matchedEntities.map(
          (e) =>
            `- [${e.collection}] ${e.title} (${e.chineseName}) -> ${origin}/${e.collection}/${e.slug}/ (md: ${
              e.collection === 'cities' ? `${origin}/cities/${e.slug}.md` : `${origin}/entities/${e.collection}/${e.slug}.md`
            })`,
        ),
      ].join('\n');
      return new Response(JSON.stringify({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text }] } }), {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    if (name === 'get_guide') {
      const slug = String(args.slug ?? '');
      const guide = GUIDE_BY_SLUG[slug];
      if (!guide) {
        return new Response(JSON.stringify({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: `Guide "${slug}" not found.` }] } }), {
          status: 200,
          headers: { 'content-type': 'application/json; charset=utf-8' },
        });
      }
      const citations = getGuideCitations(guide);
      const text = [
        `# ${guide.title} (${guide.titleZh})`,
        `Verified: ${guide.lastVerified}`,
        `Canonical: ${origin}/guides/${guide.slug}/`,
        `Markdown: ${origin}/guides/${guide.slug}.md`,
        '',
        guide.leadHook,
        '',
        'Verified Facts:',
        ...guide.hardFacts.map((f) => {
          const r = resolveAuthoritySource(f.source, f.verifiedDate);
          return `- ${f.label}: ${f.value} [Source: ${r.name} <${r.url}>, ${r.kind}, ${f.verifiedDate}]`;
        }),
        '',
        'Primary Sources:',
        ...citations.map((c) => `- ${c.name} (${c.kind}): ${c.url}`),
      ].join('\n');
      return new Response(JSON.stringify({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text }] } }), {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    if (name === 'get_city_graph') {
      const slug = String(args.city ?? '').trim().toLowerCase();
      const city = getEntity('cities', slug);
      if (!city || !city.cityData) {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id,
            result: { content: [{ type: 'text', text: `City "${slug}" not found. Available: shanghai, beijing, chengdu, xian, shenzhen.` }] },
          }),
          { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
        );
      }
      const anchor = SPATIAL_GRAPH_ANCHORS[city.slug];
      const citations = getEntityCitations(city);
      const graphPayload = {
        entity_id: `${origin}/cities/${city.slug}/#entity`,
        name: city.title,
        chinese_name: city.chineseName,
        pinyin: city.pinyin,
        mca_code_gbt2260: anchor?.mcaCode ?? city.cityData.mcaCode,
        wikidata: anchor?.wikidata ?? null,
        geo_wgs84: anchor ? { lat: anchor.lat, lng: anchor.lng } : null,
        ports_240h: city.cityData.ports240h,
        universities: city.cityData.universities,
        international_hospitals: city.cityData.intlHospitals,
        contained_places: city.cityData.mashup,
        canonical_url: `${origin}/cities/${city.slug}/`,
        markdown_url: `${origin}/cities/${city.slug}.md`,
        provenance: citations.map((c) => ({ name: c.name, kind: c.kind, url: c.url, verified_date: c.verifiedDate })),
      };
      return new Response(
        JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: { content: [{ type: 'text', text: JSON.stringify(graphPayload, null, 2) }] },
        }),
        { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
      );
    }

    if (name === 'check_visa_240h') {
      const cc = String(args.country_code ?? '').toUpperCase();
      const days = Number(args.days ?? 10);
      const hasTicket = Boolean(args.has_third_country_ticket ?? true);
      const unilateral30 = new Set(['FR', 'DE', 'IT', 'NL', 'ES', 'MY', 'CH', 'IE', 'HU', 'AT', 'BE', 'LU', 'NZ', 'AU', 'PL', 'PT', 'GR', 'KR', 'JP', 'SG']);
      const transit55 = new Set([...unilateral30, 'US', 'UK', 'GB', 'CA', 'SE', 'NO', 'DK', 'FI', 'CZ', 'BR', 'MX', 'AR']);
      let verdict = 'Standard L/M Visa Required';
      if (unilateral30.has(cc) && days <= 30) {
        verdict = `30-Day Unilateral Visa-Free Eligible (${cc}, ${days} days).`;
      } else if (transit55.has(cc) && days <= 10 && hasTicket) {
        verdict = `240-Hour (10-Day) Cross-Province Visa-Free Transit Eligible across 60 ports (${cc}, confirmed A->China->C onward ticket required).`;
      }
      const text = [
        verdict,
        `Guide: ${origin}/guides/240h-visa-free-transit/`,
        'Primary Authority: National Immigration Administration (NIA 12367) <https://en.nia.gov.cn/> (gov_official)',
      ].join('\n');
      return new Response(JSON.stringify({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text }] } }), {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    if (name === 'list_gov_portals') {
      const access = String(args.access ?? 'all');
      const list = GOV_PORTALS.filter((p) => access === 'all' || p.access === access);
      const text = list.map((p) => `- ${p.name} (${p.chineseName}) [${p.level} · ${p.domain} · ${p.access}] -> ${p.url}`).join('\n');
      return new Response(JSON.stringify({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text }] } }), {
        status: 200,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }

    return new Response(JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32601, message: `Unknown tool: ${name}` } }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  return new Response(JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32601, message: `Unsupported method: ${method}` } }), {
    status: 400,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
