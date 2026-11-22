#!/usr/bin/env node
/**
 * ChinaWao Markdown -> EmDash 1.5 CMS Publisher & Post Manager
 *
 * Usage:
 *   pnpm publish:md                         # Publish/sync all .md files in content/posts/ (excluding _template.md)
 *   pnpm publish:md path/to/article.md      # Publish/sync a specific Markdown file (supports --draft to save as draft)
 *   pnpm post:list                          # List all posts currently in data.db
 *   pnpm post:new my-article-slug           # Scaffold a new Markdown post in content/posts/my-article-slug.md
 *   node scripts/publish-md.mjs --clean-db  # Strip legacy "-mock" slug suffixes & test drafts from data.db
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { portableTextToProsemirror } from 'emdash';

const ROOT_DIR = process.cwd();
const DB_PATH = path.resolve(ROOT_DIR, 'data.db');
const POSTS_DIR = path.resolve(ROOT_DIR, 'content/posts');

function ulidLike(prefix = '01CWPOST') {
  const rand = crypto.randomBytes(12).toString('hex').toUpperCase().slice(0, 26 - prefix.length);
  return `${prefix}${rand}`;
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'untitled-post';
}

/**
 * Parse YAML-like frontmatter delimited by --- ... ---
 */
export function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { meta: {}, body: normalized.trim() };
  }
  const endIdx = normalized.indexOf('\n---\n', 4);
  if (endIdx === -1) {
    return { meta: {}, body: normalized.trim() };
  }
  const yamlBlock = normalized.slice(4, endIdx);
  const body = normalized.slice(endIdx + 5).trim();
  const meta = {};

  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    let val = trimmed.slice(colonIdx + 1).trim();

    // Strip inline comment if not inside quotes
    if (!val.startsWith('"') && !val.startsWith("'") && !val.startsWith('[')) {
      const hashIdx = val.indexOf(' #');
      if (hashIdx !== -1) val = val.slice(0, hashIdx).trim();
    }

    if (val.startsWith('[') && val.endsWith(']')) {
      const inner = val.slice(1, -1).trim();
      meta[key] = inner
        ? inner
            .split(',')
            .map((s) => s.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean)
        : [];
    } else {
      meta[key] = val.replace(/^["']|["']$/g, '');
    }
  }

  return { meta, body };
}

/**
 * Convert inline Markdown (**bold**, *italic*, `code`, [label](url)) into EmDash PortableText spans + markDefs
 */
export function parseInlineSpans(text, blockKey) {
  const spans = [];
  const markDefs = [];
  let spanIdx = 0;
  let linkIdx = 0;

  // Tokenize links, bold, code, italic
  const tokenRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;
  let lastIndex = 0;
  let match;

  const pushSpan = (str, marks = []) => {
    if (!str) return;
    const span = {
      _type: 'span',
      _key: `${blockKey}:s${spanIdx++}`,
      text: str,
    };
    if (marks.length > 0) span.marks = marks;
    spans.push(span);
  };

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pushSpan(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Link: [label](href) — also support **bold** inside link label
      const linkKey = `${blockKey}:lnk${linkIdx++}`;
      const href = match[2].trim();
      const isExternal = /^https?:\/\//i.test(href);
      markDefs.push({
        _key: linkKey,
        _type: 'link',
        href,
        ...(isExternal ? { blank: true } : {}),
      });
      const cleanLabel = match[1].replace(/^\*\*|\*\*$/g, '');
      const marks = match[1].startsWith('**') && match[1].endsWith('**') ? ['strong', linkKey] : [linkKey];
      pushSpan(cleanLabel, marks);
    } else if (match[3] !== undefined) {
      // **bold**
      pushSpan(match[3], ['strong']);
    } else if (match[4] !== undefined) {
      // `code`
      pushSpan(match[4], ['code']);
    } else if (match[5] !== undefined) {
      // *italic*
      pushSpan(match[5], ['em']);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    pushSpan(text.slice(lastIndex));
  }

  if (spans.length === 0) {
    pushSpan(text);
  }

  return { spans, markDefs };
}

/**
 * Convert Markdown body into EmDash 1.5 PortableText blocks
 */
export function markdownToPortableText(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let blockCounter = 1;
  let paragraphBuffer = [];
  let extractedTitle = null;

  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const text = paragraphBuffer.join(' ').trim();
    paragraphBuffer = [];
    if (!text) return;
    const bKey = `b${blockCounter++}`;
    const { spans, markDefs } = parseInlineSpans(text, bKey);
    const block = {
      _type: 'block',
      _key: bKey,
      style: 'normal',
      children: spans,
    };
    if (markDefs.length > 0) block.markDefs = markDefs;
    blocks.push(block);
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    // Top-level # H1 title (if placed in body)
    if (line.startsWith('# ') && blocks.length === 0 && !extractedTitle) {
      extractedTitle = line.slice(2).trim();
      continue;
    }

    // Headings ## / ### / ####
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      const style = level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
      const bKey = `h${blockCounter++}`;
      const { spans, markDefs } = parseInlineSpans(headingMatch[2].trim(), bKey);
      const block = {
        _type: 'block',
        _key: bKey,
        style,
        children: spans,
      };
      if (markDefs.length > 0) block.markDefs = markDefs;
      blocks.push(block);
      continue;
    }

    // Blockquote >
    if (line.startsWith('> ')) {
      flushParagraph();
      const bKey = `q${blockCounter++}`;
      const { spans, markDefs } = parseInlineSpans(line.replace(/^>\s+/, '').trim(), bKey);
      const block = {
        _type: 'block',
        _key: bKey,
        style: 'blockquote',
        children: spans,
      };
      if (markDefs.length > 0) block.markDefs = markDefs;
      blocks.push(block);
      continue;
    }

    // Bullet list item (- or *)
    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      const bKey = `l${blockCounter++}`;
      const { spans, markDefs } = parseInlineSpans(bulletMatch[1].trim(), bKey);
      const block = {
        _type: 'block',
        _key: bKey,
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: spans,
      };
      if (markDefs.length > 0) block.markDefs = markDefs;
      blocks.push(block);
      continue;
    }

    // Numbered list item (1. / 2.)
    const numMatch = line.match(/^\d+\.\s+(.+)$/);
    if (numMatch) {
      flushParagraph();
      const bKey = `n${blockCounter++}`;
      const { spans, markDefs } = parseInlineSpans(numMatch[1].trim(), bKey);
      const block = {
        _type: 'block',
        _key: bKey,
        style: 'normal',
        listItem: 'number',
        level: 1,
        children: spans,
      };
      if (markDefs.length > 0) block.markDefs = markDefs;
      blocks.push(block);
      continue;
    }

    // Horizontal rule ---
    if (/^-{3,}$/.test(line)) {
      flushParagraph();
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();

  // Validate against EmDash's native ProseMirror converter
  portableTextToProsemirror(blocks);

  return { blocks, extractedTitle };
}

function plainTextFromBlocks(blocks) {
  return blocks
    .map((b) => (b.children || []).map((c) => c.text || '').join(''))
    .join('\n')
    .trim();
}

function ensureTaxonomyTerm(db, kind, slugOrLabel, locale) {
  const cleanSlug = slugify(slugOrLabel);
  const existing = db
    .prepare('SELECT id, slug, label FROM taxonomies WHERE name = ? AND slug = ? AND locale = ?')
    .get(kind, cleanSlug, locale);
  if (existing) return existing.id;

  const fallbackAnyLocale = db
    .prepare('SELECT id, slug, label, translation_group FROM taxonomies WHERE name = ? AND slug = ? LIMIT 1')
    .get(kind, cleanSlug);

  const id = ulidLike(kind === 'category' ? '01CWCAT' : '01CWTAG');
  const label = slugOrLabel.includes(' ') || /[\u4e00-\u9fa5]/.test(slugOrLabel)
    ? slugOrLabel
    : cleanSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const tGroup = fallbackAnyLocale?.translation_group || id;

  db.prepare(
    `INSERT INTO taxonomies (id, name, slug, label, parent_id, data, locale, translation_group, sort_order)
     VALUES (?, ?, ?, ?, NULL, '{}', ?, ?, 99)`
  ).run(id, kind, cleanSlug, label, locale, tGroup);

  return id;
}

function publishMarkdownFile(db, filePath, forceStatus) {
  const absPath = path.resolve(ROOT_DIR, filePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`File not found: ${absPath}`);
  }

  const raw = fs.readFileSync(absPath, 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const { blocks, extractedTitle } = markdownToPortableText(body);

  const baseName = path.basename(absPath, '.md').replace(/\.(en|zh)$/i, '');
  const inferredLocale = /\.zh\.md$/i.test(absPath) || /[\u4e00-\u9fa5]/.test(baseName) ? 'zh' : 'en';

  const locale = (meta.locale || inferredLocale) === 'zh' ? 'zh' : 'en';
  const title = meta.title || extractedTitle || baseName;
  const slug = meta.slug || slugify(baseName);
  const status = forceStatus || meta.status || 'published';
  const nowIso = new Date().toISOString();
  const publishedAt = meta.publishedAt || nowIso;

  // Auto-extract excerpt from first normal paragraph if not specified
  const firstParagraph = blocks.find((b) => b.style === 'normal' && !b.listItem);
  const autoExcerpt = firstParagraph
    ? (firstParagraph.children || []).map((c) => c.text).join('').slice(0, 200)
    : '';
  const excerpt = meta.excerpt || autoExcerpt;

  const authorRow = db.prepare('SELECT id FROM users ORDER BY created_at ASC LIMIT 1').get();
  const authorId = authorRow?.id || '01M7N3RXXQ0R0ZBGJ9Q2DVVTBD';

  const existing = db
    .prepare('SELECT id, live_revision_id, featured_image, translation_group, version, created_at FROM ec_posts WHERE slug = ? AND locale = ?')
    .get(slug, locale);

  // Also check if there is a legacy "-mock" entry for the same slug
  const existingMock = !existing
    ? db.prepare('SELECT id, live_revision_id, featured_image, translation_group, version, created_at FROM ec_posts WHERE slug = ? AND locale = ?')
        .get(`${slug}-mock`, locale)
    : null;

  const targetRow = existing || existingMock;
  const postId = targetRow?.id || ulidLike('01CWPOST');
  const revId = ulidLike('01CWREV');
  const translationGroup = meta.translationGroup || targetRow?.translation_group || postId;
  const featuredImageStr = targetRow?.featured_image || null;
  const featuredImageObj = featuredImageStr ? JSON.parse(featuredImageStr) : null;
  const contentJson = JSON.stringify(blocks);

  const revData = JSON.stringify({
    title,
    ...(featuredImageObj ? { featured_image: featuredImageObj } : {}),
    content: blocks,
    excerpt,
  });

  db.prepare(
    `INSERT INTO revisions (id, collection, entry_id, data, author_id, created_at, kind, edited_by)
     VALUES (?, 'posts', ?, ?, ?, ?, ?, ?)`
  ).run(revId, postId, revData, authorId, nowIso, status === 'published' ? 'publish' : 'draft', authorId);

  if (targetRow) {
    const nextVersion = (targetRow.version || 1) + 1;
    db.prepare(
      `UPDATE ec_posts
       SET slug = ?,
           status = ?,
           updated_at = ?,
           published_at = CASE WHEN ? = 'published' THEN COALESCE(published_at, ?) ELSE published_at END,
           version = ?,
           live_revision_id = CASE WHEN ? = 'published' THEN ? ELSE live_revision_id END,
           draft_revision_id = CASE WHEN ? = 'draft' THEN ? ELSE NULL END,
           translation_group = ?,
           title = ?,
           content = ?,
           excerpt = ?
       WHERE id = ?`
    ).run(
      slug,
      status,
      nowIso,
      status,
      publishedAt,
      nextVersion,
      status,
      revId,
      status,
      revId,
      translationGroup,
      title,
      contentJson,
      excerpt,
      postId
    );
  } else {
    db.prepare(
      `INSERT INTO ec_posts (
         id, slug, status, author_id, primary_byline_id,
         created_at, updated_at, published_at, scheduled_at, deleted_at,
         version, live_revision_id, draft_revision_id, locale, translation_group,
         title, featured_image, content, excerpt
       ) VALUES (?, ?, ?, ?, NULL, ?, ?, ?, NULL, NULL, 1, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      postId,
      slug,
      status,
      authorId,
      publishedAt,
      nowIso,
      status === 'published' ? publishedAt : null,
      status === 'published' ? revId : null,
      status === 'draft' ? revId : null,
      locale,
      translationGroup,
      title,
      featuredImageStr,
      contentJson,
      excerpt
    );
  }

  // Update FTS index
  const plainText = plainTextFromBlocks(blocks);
  db.prepare('DELETE FROM _emdash_fts_posts WHERE id = ? AND locale = ?').run(postId, locale);
  db.prepare('INSERT INTO _emdash_fts_posts (id, locale, title, content) VALUES (?, ?, ?, ?)').run(
    postId,
    locale,
    title,
    `${title}\n${excerpt}\n${plainText}`
  );

  // Sync categories & tags if provided in frontmatter
  const categories = Array.isArray(meta.categories)
    ? meta.categories
    : meta.category
      ? [meta.category]
      : [];
  const tags = Array.isArray(meta.tags) ? meta.tags : meta.tag ? [meta.tag] : [];

  if (categories.length > 0 || tags.length > 0) {
    db.prepare("DELETE FROM content_taxonomies WHERE collection = 'posts' AND entry_id = ?").run(postId);
    const insertTax = db.prepare(
      `INSERT OR IGNORE INTO content_taxonomies (collection, entry_id, taxonomy_id, status, locale, published_at, created_at)
       VALUES ('posts', ?, ?, ?, ?, ?, ?)`
    );
    for (const cat of categories) {
      const taxId = ensureTaxonomyTerm(db, 'category', cat, locale);
      insertTax.run(postId, taxId, status, locale, publishedAt, nowIso);
    }
    for (const tag of tags) {
      const taxId = ensureTaxonomyTerm(db, 'tag', tag, locale);
      insertTax.run(postId, taxId, status, locale, publishedAt, nowIso);
    }
  }

  const urlPrefix = locale === 'zh' ? '/zh' : '';
  console.log(
    `[OK] ${status.toUpperCase()} [${locale}] "${title}"\n     -> Slug: ${slug} | Blocks: ${blocks.length} | URL: http://localhost:4341${urlPrefix}/posts/${slug}`
  );
}

function cleanDatabase(db) {
  // 1. Remove unpublished smoke-test draft rows & smoke-test taxonomies
  const deletedDrafts = db
    .prepare("DELETE FROM ec_posts WHERE slug IN ('chinawao-theme-check', 'template-page-check')")
    .run();
  db.prepare(
    "DELETE FROM content_taxonomies WHERE taxonomy_id IN (SELECT id FROM taxonomies WHERE slug IN ('template-journal', 'template-validation'))"
  ).run();
  const deletedTax = db
    .prepare("DELETE FROM taxonomies WHERE slug IN ('template-journal', 'template-validation')")
    .run();

  // 2. Strip "-mock" suffix from all post slugs and clean "mock editorial cover" from featured_image captions
  const mockPosts = db.prepare("SELECT id, slug, featured_image FROM ec_posts WHERE slug LIKE '%-mock'").all();
  let cleanedSlugs = 0;
  for (const row of mockPosts) {
    const cleanSlug = row.slug.replace(/-mock$/, '');
    let cleanImg = row.featured_image;
    if (cleanImg && cleanImg.includes('mock editorial cover')) {
      cleanImg = cleanImg.replace(/\s*—\s*mock editorial cover[^"]*/gi, '');
    }
    db.prepare('UPDATE ec_posts SET slug = ?, featured_image = ? WHERE id = ?').run(cleanSlug, cleanImg, row.id);
    cleanedSlugs++;
  }

  console.log(
    `[CLEAN] Removed ${deletedDrafts.changes} test draft(s) and ${deletedTax.changes} test taxonomy row(s); normalized ${cleanedSlugs} post slug(s) (stripped "-mock").`
  );
}

function listPosts(db) {
  const rows = db
    .prepare('SELECT locale, status, slug, title, substr(published_at, 1, 10) as pub FROM ec_posts ORDER BY locale, published_at DESC')
    .all();
  console.log(`\nTotal articles in data.db: ${rows.length}\n`);
  for (const r of rows) {
    const prefix = r.locale === 'zh' ? '/zh' : '';
    console.log(`  [${r.locale}] (${r.status.padEnd(9)}) ${(prefix + '/posts/' + r.slug).padEnd(54)} ${r.title}`);
  }
}

function scaffoldNewPost(slugArg) {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
  const clean = slugify(slugArg || 'new-article');
  const target = path.join(POSTS_DIR, `${clean}.md`);
  if (fs.existsSync(target)) {
    console.error(`File already exists: ${target}`);
    process.exit(1);
  }
  const nowIso = new Date().toISOString();
  const template = `---
title: "Article Title Here"
slug: "${clean}"
locale: "en"
status: "published"
excerpt: "One-sentence summary shown on article cards and search results."
categories: ["visit-china"]
tags: ["first-trip"]
publishedAt: "${nowIso}"
---

Write your opening lead paragraph here. Give a clear, direct answer in the first two sentences.

## Key Steps & Practical Details

Explain the core procedure clearly with verified sources:

- **Step 1:** Detail here with an [official source link](https://www.12306.cn/en/index.html).
- **Step 2:** What to prepare and show on arrival.

> Practical tip: Include specific Chinese characters (**售票窗口**) that readers can show to local staff.
`;
  fs.writeFileSync(target, template, 'utf8');
  console.log(`[NEW] Created Markdown draft at: ${target}`);
  console.log(`      Edit the file, then run: pnpm publish:md content/posts/${clean}.md`);
}

// CLI Entrypoint
const args = process.argv.slice(2);
const db = new DatabaseSync(DB_PATH);

if (args.includes('--clean-db')) {
  cleanDatabase(db);
} else if (args.includes('--list')) {
  listPosts(db);
} else if (args[0] === '--new') {
  scaffoldNewPost(args[1]);
} else {
  const forceStatus = args.includes('--draft') ? 'draft' : undefined;
  const fileArgs = args.filter((a) => !a.startsWith('--'));

  if (fileArgs.length > 0) {
    for (const f of fileArgs) {
      publishMarkdownFile(db, f, forceStatus);
    }
  } else {
    if (!fs.existsSync(POSTS_DIR)) {
      console.log(`No content/posts directory found at ${POSTS_DIR}`);
      process.exit(0);
    }
    const files = fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
      .map((f) => path.join(POSTS_DIR, f));
    for (const f of files) {
      publishMarkdownFile(db, f, forceStatus);
    }
  }
}
