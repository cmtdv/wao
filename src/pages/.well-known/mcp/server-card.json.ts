import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  const card = {
    schema_version: '1.0',
    name: 'chinawao-read-only-mcp',
    display_name: 'ChinaWao Authoritative China Knowledge & City Graph MCP',
    description:
      'Stateless read-only MCP endpoint serving ChinaWao verified guides, GB/T 2260 + Wikidata City Knowledge Graph, multimodal show cards, 240h visa rules, and audited Chinese government open-data portals with fact-level provenance.',
    homepage: origin,
    endpoint: `${origin}/mcp`,
    transport: 'streamable-http',
    read_only: true,
    authentication: 'none',
    llms_txt: `${origin}/llms.txt`,
    llms_full_txt: `${origin}/llms-full.txt`,
    sitemap: `${origin}/sitemap.xml`,
    corpus_attributes: [
      'primary_gov_and_mainstream_media',
      'multimodal_assets',
      'curated_knowledge',
      'city_knowledge_graph',
      'fact_level_provenance',
    ],
    tools: [
      { name: 'search_chinawao', description: 'Search verified China guides, city graph nodes, and multimodal field entities.' },
      { name: 'get_guide', description: 'Fetch verified facts with traceable authority source URLs and canonical Markdown URL.' },
      { name: 'get_city_graph', description: 'Fetch structured City Knowledge Graph (MCA GB/T 2260, Wikidata, WGS-84, ports, universities, hospitals).' },
      { name: 'check_visa_240h', description: 'Evaluate 30-day unilateral or 240-hour transit visa-free eligibility with NIA provenance.' },
      { name: 'list_gov_portals', description: 'List audited Chinese government open-data portals.' },
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
