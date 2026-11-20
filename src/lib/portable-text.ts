export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface PortableSpan {
  text?: unknown;
}

interface PortableBlock {
  _type?: unknown;
  style?: unknown;
  children?: unknown;
}

function blockPlainText(block: PortableBlock): string {
  if (!Array.isArray(block.children)) return '';
  return block.children
    .map((child) => {
      if (child && typeof child === 'object' && 'text' in child) {
        const text = (child as PortableSpan).text;
        return typeof text === 'string' ? text : '';
      }
      return '';
    })
    .join('')
    .trim();
}

export function slugifyHeading(text: string): string {
  const base = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/[\s_-]+/g, '-');
  return base || 'section';
}

export function extractToc(content: unknown): TocItem[] {
  if (!Array.isArray(content)) return [];
  const items: TocItem[] = [];
  const counts = new Map<string, number>();

  for (const node of content) {
    if (!node || typeof node !== 'object') continue;
    const block = node as PortableBlock;
    if (block._type !== 'block') continue;
    if (block.style !== 'h2' && block.style !== 'h3') continue;

    const text = blockPlainText(block);
    if (!text) continue;

    const baseId = slugifyHeading(text);
    const seen = counts.get(baseId) ?? 0;
    counts.set(baseId, seen + 1);
    const id = seen === 0 ? baseId : `${baseId}-${seen + 1}`;

    items.push({
      id,
      text,
      level: block.style === 'h2' ? 2 : 3,
    });
  }

  return items;
}

/**
 * Estimate reading time in minutes from PortableText blocks.
 * Supports Latin word counting plus CJK character density (~320 CJK chars/min, ~220 Latin words/min).
 */
export function estimateReadingMinutes(content: unknown): number | null {
  if (!Array.isArray(content) || content.length === 0) return null;
  let latinWords = 0;
  let cjkChars = 0;

  for (const node of content) {
    if (!node || typeof node !== 'object') continue;
    const text = blockPlainText(node as PortableBlock);
    if (!text) continue;

    const cjkMatches = text.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu);
    if (cjkMatches) cjkChars += cjkMatches.length;

    const withoutCjk = text.replace(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu, ' ');
    const words = withoutCjk.trim().split(/\s+/).filter(Boolean);
    latinWords += words.length;
  }

  const totalUnits = latinWords / 220 + cjkChars / 320;
  if (totalUnits <= 0) return null;
  return Math.max(1, Math.round(totalUnits));
}
