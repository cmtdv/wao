import type { APIRoute } from 'astro';
import { GUIDE_BY_SLUG } from '@data/paradigm-e/guides';
import {
  formatProvenanceMarkdown,
  getGuideCitations,
  resolveAuthoritySource,
  toAbsoluteUrl,
} from '@lib/seo-geo';

export const GET: APIRoute = ({ params, url }) => {
  const slug = params.slug || '';
  const guide = GUIDE_BY_SLUG[slug];
  if (!guide) {
    return new Response('# 404 Not Found\n', {
      status: 404,
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    });
  }

  const origin = url.origin;
  const canonical = `${origin}/guides/${guide.slug}/`;
  const canonicalZh = `${origin}/zh/guides/${guide.slug}/`;
  const citations = getGuideCitations(guide);
  const coverImage = toAbsoluteUrl(origin, guide.heroImage ?? '/images/hero.webp');

  const lines: string[] = [
    '---',
    `title: "${guide.title}"`,
    `title_zh: "${guide.titleZh}"`,
    `section: ${guide.pillar}`,
    `last_verified: ${guide.lastVerified}`,
    `canonical_url: ${canonical}`,
    `alternate_zh_url: ${canonicalZh}`,
    `cover_image: ${coverImage}`,
    `authority_kinds: [${Array.from(new Set(citations.map((c) => c.kind))).join(', ')}]`,
    '---',
    '',
    `# ${guide.title}`,
    '',
    guide.leadHook,
    '',
    '## Verified Facts & Citations',
    ...guide.hardFacts.map((f) => {
      const resolved = resolveAuthoritySource(f.source, f.verifiedDate);
      return `- **${f.label}**: ${f.value} — Source: [${resolved.name}](${resolved.url}) (\`${resolved.kind}\`, verified ${f.verifiedDate})`;
    }),
    '',
  ];

  if (guide.steps?.length) {
    lines.push('## Step-by-Step Playbook', '');
    for (const s of guide.steps) {
      lines.push(`### ${s.title}`, '', `> ${s.stopCheck}`, '', s.summary, '');
      for (const c of s.checklist) lines.push(`- ${c}`);
      lines.push('');
    }
  }

  if (guide.matrixRows?.length) {
    lines.push('## Scenario Comparison Matrix', '', '| Option | Best For | Avoid If | Typical Cost | Watch Out For |', '|---|---|---|---|---|');
    for (const r of guide.matrixRows) {
      lines.push(`| ${r.option} | ${r.bestFor} | ${r.avoidIf} | ${r.costRange} | ${r.hiddenTrap} |`);
    }
    lines.push('');
  }

  if (guide.rescueItems?.length) {
    lines.push('## Visual Rescue & Policy Updates', '');
    for (const item of guide.rescueItems) {
      lines.push(`- **[${item.appOrGroup}] ${item.title}** (${item.chineseSignal}): ${item.actionSummary} -> ${origin}${item.href}`);
    }
    lines.push('');
  }

  if (guide.galleryItems?.length) {
    lines.push('## Multimodal Field Coordinates (Amap Hanzi Terms)', '');
    for (const card of guide.galleryItems) {
      lines.push(`- **${card.title}** (${card.chineseName} · Amap query: \`${card.copyTerm}\`): ${card.summary}`);
    }
    lines.push('');
  }

  lines.push(
    '## Multimodal Assets',
    `- Cover Image: ${coverImage}`,
    `- Related Checklist Kit: ${origin}${guide.stackLink.href}`,
    '',
    '## Knowledge Graph Links',
    ...guide.relatedEntities.map((e) => `- ${e.label}: ${origin}${e.href}`),
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
