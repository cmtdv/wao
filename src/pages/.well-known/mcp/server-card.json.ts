import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const card = {
    schema_version: '1.0',
    name: 'chinawao-read-only-mcp',
    display_name: 'ChinaWao Verified China Knowledge & Tools MCP',
    description:
      'Stateless read-only MCP endpoint serving ChinaWao 32 verified guides, programmatic China entities, deterministic 240h visa rules, and 848 audited Chinese government open-data portals.',
    homepage: origin,
    endpoint: `${origin}/mcp`,
    transport: 'streamable-http',
    read_only: true,
    authentication: 'none',
    llms_txt: `${origin}/llms.txt`,
    tools: [
      { name: 'search_chinawao', description: 'Search 32 guides and programmatic China entities by keyword.' },
      { name: 'get_guide', description: 'Fetch verified hard facts and canonical URL for a ChinaWao guide by slug.' },
      { name: 'check_visa_240h', description: 'Evaluate 30-day unilateral or 240-hour transit visa-free eligibility.' },
      { name: 'list_gov_portals', description: 'List audited Chinese government open-data portals (HTTP 200 direct vs WAF standby).' },
    ],
  };

  return new Response(JSON.stringify(card, null, 2), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
