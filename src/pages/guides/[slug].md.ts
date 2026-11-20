import type { APIRoute } from 'astro';
import { GUIDE_BY_SLUG } from '@data/paradigm-e/guides';

export const GET: APIRoute = ({ params, url }) => {
  const slug = params.slug || '';
  const guide = GUIDE_BY_SLUG[slug];
  if (!guide) {
    return new Response('# 404 Not Found\n', {
      status: 404,
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    });
  }

  const canonical = `${url.origin}/guides/${guide.slug}/`;
  const lines: string[] = [
    '---',
    `title: "${guide.title}"`,
    `title_zh: "${guide.titleZh}"`,
    `pillar: ${guide.pillar}`,
    `archetype: ${guide.archetype}`,
    `persona: ${guide.persona}`,
    `last_verified: ${guide.lastVerified}`,
    `tier: "${guide.tier}"`,
    `canonical_url: ${canonical}`,
    '---',
    '',
    `# ${guide.title}`,
    '',
    guide.leadHook,
    '',
    '## Verified Hard Facts',
    ...guide.hardFacts.map((f) => `- **${f.label}**: ${f.value} _(Source: ${f.source}, ${f.verifiedDate})_`),
    '',
  ];

  if (guide.steps?.length) {
    lines.push('## Playbook Steps', '');
    for (const s of guide.steps) {
      lines.push(`### Step ${s.number}: ${s.title}`, '', `> ${s.stopCheck}`, '', s.summary, '');
      for (const c of s.checklist) lines.push(`- ${c}`);
      lines.push('');
    }
  }

  if (guide.matrixRows?.length) {
    lines.push('## Decision Matrix', '', '| Option | Best For | Avoid If | Real Cost | Hidden Trap |', '|---|---|---|---|---|');
    for (const r of guide.matrixRows) {
      lines.push(`| ${r.option} | ${r.bestFor} | ${r.avoidIf} | ${r.costRange} | ${r.hiddenTrap} |`);
    }
    lines.push('');
  }

  if (guide.rescueItems?.length) {
    lines.push('## Rescue & Feed Entries', '');
    for (const item of guide.rescueItems) {
      lines.push(`- **[${item.appOrGroup}] ${item.title}** (${item.chineseSignal}): ${item.actionSummary} -> ${url.origin}${item.href}`);
    }
    lines.push('');
  }

  if (guide.galleryItems?.length) {
    lines.push('## Field Coordinates', '');
    for (const card of guide.galleryItems) {
      lines.push(`- **${card.title}** (${card.chineseName} · Amap: \`${card.copyTerm}\`): ${card.summary}`);
    }
    lines.push('');
  }

  lines.push('## Connected Entities', ...guide.relatedEntities.map((e) => `- ${e.label}: ${url.origin}${e.href}`), '');

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
