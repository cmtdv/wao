import type { APIRoute } from 'astro';
import { getEntity } from '@data/paradigm-e/entities';

export const GET: APIRoute = ({ params, url }) => {
  const slug = params.slug || '';
  const city = getEntity('cities', slug);
  if (!city) {
    return new Response('# 404 City Not Found\n', {
      status: 404,
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    });
  }

  const canonical = `${url.origin}/cities/${city.slug}/`;
  const lines: string[] = [
    '---',
    `title: "${city.title} (${city.chineseName})"`,
    `mca_code: "${city.cityData?.mcaCode ?? ''}"`,
    `last_verified: ${city.lastVerified}`,
    `tier: "${city.tier}"`,
    `canonical_url: ${canonical}`,
    '---',
    '',
    `# ${city.title} (${city.chineseName} · ${city.pinyin})`,
    '',
    city.tagline,
    '',
    '## Quick Specs',
    ...city.quickSpecs.map((s) => `- **${s.label}**: ${s.value}`),
    '',
    '## What Nobody Tells You',
    city.whatNobodyTellsYou,
    '',
    '## Checklist',
    ...city.checklist.map((c) => `- ${c}`),
    '',
  ];

  if (city.cityData) {
    lines.push('## Top Universities (Decoupled)', ...city.cityData.universities.map((u) => `- **${u.name}** (${u.chineseName}): ${u.focus}`), '');
    lines.push('## International Hospitals (Decoupled)', ...city.cityData.intlHospitals.map((h) => `- **${h.name}** (${h.chineseName}): ${h.dept} · ${h.phone}`), '');
  }

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
