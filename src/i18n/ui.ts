/**
 * ChinaWao Native Bilingual i18n Dictionary & Routing Helpers
 * Default locale: English ("en", unprefixed "/")
 * Secondary locale: Simplified Chinese ("zh", prefixed "/zh/")
 * Syncs with Astro i18n + EmDash 1.5 built-in multi-locale CMS
 */

export type Locale = 'en' | 'zh';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'zh'] as const;

export function normalizeLocale(raw?: string | null): Locale {
  if (!raw) return 'en';
  const lower = raw.toLowerCase();
  return lower === 'zh' || lower.startsWith('zh-') ? 'zh' : 'en';
}

export function getLocaleFromContext(astro: {
  locals?: { locale?: Locale };
  currentLocale?: string;
  url: URL;
}): Locale {
  if (astro.locals?.locale) return astro.locals.locale;
  if (astro.url.pathname === '/zh' || astro.url.pathname.startsWith('/zh/')) return 'zh';
  return normalizeLocale(astro.currentLocale);
}

/** Strip leading /zh prefix to obtain the canonical unprefixed path. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/zh' || pathname === '/zh/') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3);
  return pathname || '/';
}

/** Prefix an internal site path with /zh when locale === 'zh'; keep default English unprefixed. */
export function localePath(path: string, locale: Locale): string {
  if (!path || /^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const clean = stripLocalePrefix(path.startsWith('/') ? path : `/${path}`);
  if (locale === 'en') return clean;
  return clean === '/' ? '/zh/' : `/zh${clean}`;
}

/** Build the equivalent URL in the target locale while preserving query parameters. */
export function switchLocaleHref(url: URL, target: Locale, originalPathname?: string): string {
  const currentPath = originalPathname ?? url.pathname;
  const nextPath = localePath(currentPath, target);
  return `${nextPath}${url.search}`;
}

export function formatLocalizedDate(input: Date | string | number | null | undefined, locale: Locale): string {
  if (!input) return '';
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: locale === 'zh' ? 'short' : 'short',
    day: 'numeric',
  }).format(date);
}

export function formatReadTime(minutes: number, locale: Locale): string {
  return locale === 'zh' ? `约 ${minutes} 分钟阅读` : `${minutes} min read`;
}

export const UI_STRINGS = {
  en: {
    htmlLang: 'en',
    skipToContent: 'Skip to content',
    langLabel: 'Switch language',
    nav: {
      journal: 'Journal',
      topics: 'Topics',
      atlas: 'Atlas',
      journeys: 'Journeys',
      directory: 'Directory',
      tools: 'Tools',
      search: 'Search',
      allTopics: 'All topics →',
      exploreAll: 'Explore the China Atlas →',
      editorialPages: 'Editorial Pages',
      designSystem: 'Design System',
    },
    home: {
      editionBadge: 'ChinaWao Edition',
      editionTagline: 'Source-verified dispatches, structured reference guides, and practical tools for navigating modern China.',
      editionCount: 'dispatches',
      desksEyebrow: 'Interactive Desks',
      desksTitle: 'Structured China Reference & Field Utilities',
      desksLink: 'Open China Atlas',
      desks: [
        { kicker: 'Topic Atlas', title: 'China Atlas', desc: 'Explore every major pillar and topic across China with live dispatch coverage.', href: '/atlas/' },
        { kicker: '7-Step Playbook', title: 'Arrival Journey', desc: 'Step-by-step checklist from visa check and payments to rail boarding.', href: '/journeys/' },
        { kicker: 'Verified Portals', title: 'Official Directory', desc: '18 primary Chinese government, rail, and open-data portals with WAF transparency.', href: '/directory/' },
        { kicker: 'Field Utilities', title: 'Practical Tools', desc: 'Visa-free checker, fullscreen bilingual flashcards, ticket calendar & tax refund estimator.', href: '/tools/' },
      ],
      palaceEyebrow: 'Editorial Pillars',
      palaceTitle: 'Explore Modern China by Subject',
      palaceCta: 'View full China Atlas',
      recentEyebrow: 'Latest Field Notes',
      recentTitle: 'Recent Dispatches',
      recentMore: 'All dispatches →',
      browseAll: 'Browse all dispatches',
    },
    atlas: {
      crumb: 'China Atlas',
      kicker: 'Complete Topic Directory',
      title: 'China Atlas',
      lead: 'Every ChinaWao guide, verified official service entry, and practical tool organized by subject. Filter topics in real time.',
      searchPlaceholder: 'Filter topics (e.g. panda, visa, rail, tea)...',
    },
    journeys: {
      crumb: 'First-Trip Journey',
      kicker: 'Step-by-Step Arrival Playbook',
      title: 'First Trip to China: 7-Step Arrival Journey',
      lead: 'From 240-hour visa-free verification and foreign card binding to Railway 12306 boarding and departure tax refunds. Progress saves locally in your browser.',
    },
    directory: {
      crumb: 'Official Directory',
      kicker: 'Verified Primary Sources · OKF Public Service Ledger',
      title: 'Official Services & Gov Open Data Directory',
      lead: 'Direct links to verified Chinese ministry, immigration, rail, museum, and open-data portals — transparently distinguishing live portals from WAF-Protected Official Standby sources.',
    },
    tools: {
      crumb: 'Practical Tools',
      kicker: 'Tools & Data · Pillar 12 Workbench',
      title: 'Practical China Tools & Bilingual Field Cards',
      lead: 'Zero-reload visa & 240-hour transit checker, fullscreen bilingual show-to-driver flashcards, 12306 ticket release calendar, departure tax refund estimator, and live Ground Pulse reports.',
    },
    posts: {
      crumb: 'Journal',
      title: 'All Dispatches',
      lead: 'Source-verified essays, field playbooks, and cultural notes across ChinaWao.',
      fallbackNoticeTitle: 'English original shown',
      fallbackNoticeBody: 'A Simplified Chinese translation of this dispatch is not published yet; showing the verified English edition.',
    },
    footer: {
      explore: 'Explore',
      topics: 'Topics',
      pages: 'Pages',
      powered: 'Powered by EmDash · Bilingual EN / 简中',
      links: {
        posts: 'Latest dispatches',
        atlas: 'China Atlas',
        journeys: 'First-trip 7-step journey',
        directory: 'Official service directory',
        tools: 'Practical tools workbench',
        dsKit: 'Design system (49 UI Kit)',
        dsBlocks: 'Design system (39 Pro Blocks)',
        topics: 'Topics directory',
        tags: 'Tags index',
        search: 'Archive search',
        rss: 'RSS feed',
      },
    },
  },
  zh: {
    htmlLang: 'zh-CN',
    skipToContent: '跳至正文内容',
    langLabel: '切换语言',
    nav: {
      journal: '志刊',
      topics: '栏目',
      atlas: '知识图谱',
      journeys: '首访行程',
      directory: '官方目录',
      tools: '实用工具',
      search: '搜索',
      allTopics: '全部栏目 →',
      exploreAll: '浏览完整中国图谱 →',
      editorialPages: '编辑部页面',
      designSystem: '设计系统',
    },
    home: {
      editionBadge: 'ChinaWao 简中版',
      editionTagline: '面向全球读者的中国实证志刊、专题知识图谱与高可靠实用工具。',
      editionCount: '篇实录',
      desksEyebrow: '交互工作台',
      desksTitle: '结构化中国指南与现场工具矩阵',
      desksLink: '打开中国知识图谱',
      desks: [
        { kicker: '全景主题图谱', title: '中国知识图谱', desc: '按核心专题即时检索，直观查看全站内容与工具覆盖。', href: '/atlas/' },
        { kicker: '7 步抵华清单', title: '首访中国行程', desc: '从免签判定、外卡绑定移动支付到 12306 高铁乘车的分步实操清单。', href: '/journeys/' },
        { kicker: '官方源直达', title: '公共服务目录', desc: '精选 18 个经核验的中国部委、铁路、文旅与开放数据入口，透明标注反爬备用态。', href: '/directory/' },
        { kicker: '实用工具箱', title: '实用工具工作台', desc: '免签/240小时过境判定、全屏双语字卡、12306 放票日历与离境退税估算。', href: '/tools/' },
      ],
      palaceEyebrow: '核心栏目',
      palaceTitle: '多维视角立体读懂当代中国',
      palaceCta: '查看完整中国图谱',
      recentEyebrow: '近期田野实录',
      recentTitle: '最新实证文章',
      recentMore: '查看全部志刊 →',
      browseAll: '浏览全部文章',
    },
    atlas: {
      crumb: '中国知识图谱',
      kicker: '全景主题目录',
      title: '中国知识图谱',
      lead: '汇集全站深度文章、官方服务入口与实用工具的专题目录，支持按关键词实时筛选。',
      searchPlaceholder: '搜索主题关键词（如：熊猫、免签、高铁、古镇）...',
    },
    journeys: {
      crumb: '首访行程清单',
      kicker: '分步抵华实操手册',
      title: '首次来华 7 步通关清单',
      lead: '覆盖 240 小时过境免签核验、支付宝/微信外卡绑定、12306 护照认证及离境退税，勾选进度自动保存在本地浏览器。',
    },
    directory: {
      crumb: '官方服务目录',
      kicker: '一手官方来源 · OKF 公共服务台账',
      title: '官方公共服务与政府开放数据目录',
      lead: '直连经核验的移民局、12306、文旅及开放数据官方网站，并对触发反爬的国家级门户透明标注 WAF 官方备用态。',
    },
    tools: {
      crumb: '实用工具箱',
      kicker: '工具与数据 · 第 12 支柱工作台',
      title: '实用工具与双语现场字卡',
      lead: '零刷新免签与 240 小时过境判定器、全屏高对比双语大字卡、12306/故宫放票日历、离境退税 2.0 估算器与现场实测流。',
    },
    posts: {
      crumb: '志刊归档',
      title: '全部实证志刊',
      lead: '优先呈现已发布的简体中文译稿，未翻译文章自动回退显示经核验的英文原版。',
      fallbackNoticeTitle: '当前展示英文原文（自动回退）',
      fallbackNoticeBody: '本篇志刊尚未发布简体中文译稿，系统按 EmDash 多语言回退链自动为您展示经核验的英文原版。',
    },
    footer: {
      explore: '全站导航',
      topics: '核心栏目',
      pages: '说明页面',
      powered: '由 EmDash 驱动 · 原生 EN / 简中双语',
      links: {
        posts: '最新志刊',
        atlas: '中国知识图谱',
        journeys: '首访 7 步清单',
        directory: '官方服务目录',
        tools: '实用工具工作台',
        dsKit: '设计系统（49 基础原语）',
        dsBlocks: '设计系统（39 Pro 区块）',
        topics: '全部栏目索引',
        tags: '标签索引',
        search: '全站检索',
        rss: 'RSS 订阅',
      },
    },
  },
} as const;

export function getStrings(locale: Locale) {
  return UI_STRINGS[locale];
}
