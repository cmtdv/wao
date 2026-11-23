/**
 * Per-pillar visual editorial spotlight data for the 6 primary hub pages
 * (/travel/, /live/, /business/, /places/, /culture/, /atlas/)
 */
import type { V32PillarId } from './taxonomy-v32';

export interface PillarSpotlightCard {
  href: string;
  image: string;
  tagZh: string;
  tagEn: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

export interface PillarVisualConfig {
  heroImage: string;
  heroAltZh: string;
  heroAltEn: string;
  h1Zh: string;
  h1En: string;
  leadZh: string;
  leadEn: string;
  ctaZh: string;
  ctaEn: string;
  ctaHref: string;
  spotlights: PillarSpotlightCard[];
}

export const PILLAR_VISUALS: Record<V32PillarId, PillarVisualConfig> = {
  travel: {
    heroImage: '/images/rail.webp',
    heroAltZh: '中国高速铁路复兴号站台与出行门户',
    heroAltEn: 'China Fuxing high-speed trains at a major rail hub',
    h1Zh: '旅行',
    h1En: 'Travel',
    leadZh: '从 240 小时过境免签、支付宝与微信绑外卡，到高铁 12306、酒店入住与现场救火字卡的一站式行前与落地实操。',
    leadEn: 'Everything you need to arrive and move smoothly across China: 240-hour visa-free transit, cashless payments, high-speed rail, stays, and offline show cards.',
    ctaZh: '240h 免签判定器 →',
    ctaEn: '240h Visa Checker →',
    ctaHref: '/tools/visa-checker/',
    spotlights: [
      {
        href: '/guides/72h-pre-departure/',
        image: '/images/beijing.webp',
        tagZh: '行前准备',
        tagEn: 'Pre-Departure',
        titleZh: '首次来华 72 小时通关剧本',
        titleEn: '72-Hour Pre-Departure Playbook',
        descZh: '免签核对、外卡绑定、漫游 eSIM 与必备离线字卡四步倒计时。',
        descEn: 'Four-step countdown covering visas, cards, eSIM, and offline show cards.',
      },
      {
        href: '/guides/cashless-super-apps/',
        image: '/images/technology.webp',
        tagZh: '支付与通信',
        tagEn: 'Payments & Apps',
        titleZh: '无现金支付与超级应用实测决策',
        titleEn: 'Cashless Payments & Super-Apps',
        descZh: '单笔 ¥200 免手续费红线、支付宝与微信实测对比、高德英文版指南。',
        descEn: '¥200 fee-free threshold, Alipay vs. WeChat Pay, and eSIM benchmarks.',
      },
      {
        href: '/guides/rail-budget-tax-refund/',
        image: '/images/shanghai.webp',
        tagZh: '高铁与退税',
        tagEn: 'Rail & Tax Refund',
        titleZh: '高铁出行、预算与离境退税指南',
        titleEn: 'High-Speed Rail & Tax Refund',
        descZh: '护照直刷电子闸机、双城门到门比价与满 ¥200 即买即退流程。',
        descEn: 'Passport e-gates, intercity rail vs. air, and 9% net VAT refunds.',
      },
    ],
  },
  live: {
    heroImage: '/images/chengdu.webp',
    heroAltZh: '宜居城市生活与竹林生态',
    heroAltEn: 'Livable city life and bamboo sanctuary in Chengdu',
    h1Zh: '长居与工作',
    h1En: 'Live & Work',
    leadZh: '面向外籍雇员、留学生与数字游民的长期生活手册：工作许可积分、银行开户与个税、涉外就医、租房避坑与离境收尾。',
    leadEn: 'Practical guidance for expats, students, and digital nomads: work permit points, banking and IIT tax, international clinics, renting, and clean exit.',
    ctaZh: '工签积分与个税算 →',
    ctaEn: 'Work Points & IIT Calc →',
    ctaHref: '/tools/tax-points-calc/',
    spotlights: [
      {
        href: '/guides/study-work-residence/',
        image: '/images/beijing.webp',
        tagZh: '签证与居留',
        tagEn: 'Permits & Study',
        titleZh: '来华留学、工签与长期居留全流程',
        titleEn: 'Study, Work Permits & Residence',
        descZh: 'A/B/C 分类积分、Z 签换居留时间线与 24 小时住宿登记要点。',
        descEn: 'Category A/B/C scoring, Z-visa timelines, and police registration.',
      },
      {
        href: '/guides/digital-nomad-china/',
        image: '/images/town.webp',
        tagZh: '旅居生活',
        tagEn: 'Digital Nomads',
        titleZh: '数字游民旅居中国城市与成本指南',
        titleEn: 'Digital Nomad Living in China',
        descZh: '成都、大理、海南等高性价比旅居城市实测月开销与网络环境。',
        descEn: 'Monthly budgets, coworking hubs, and connectivity in Chengdu, Dali & Hainan.',
      },
      {
        href: '/guides/leaving-china-closeout/',
        image: '/images/shanghai.webp',
        tagZh: '离境收尾',
        tagEn: 'Clean Exit',
        titleZh: '离开中国收尾：退保、完税与关户',
        titleEn: 'Leaving China: Pension & Tax Closeout',
        descZh: '养老金个人账户退保、完税证明开具与合法购汇汇出清单。',
        descEn: 'Withdraw pension & housing fund balances, file final tax, and wire funds home.',
      },
    ],
  },
  business: {
    heroImage: '/images/shanghai.webp',
    heroAltZh: '中国国际金融与跨境商贸天际线',
    heroAltEn: 'Shanghai financial and international trade skyline',
    h1Zh: '商务',
    h1En: 'Business',
    leadZh: '面向全球买家与企业决策者的在华商贸实操：外资准入、18 位信用代码核验、广交会参展、百大产业带采购与财税合规。',
    leadEn: 'Source-verified business intelligence for global buyers and founders: supplier USCC due diligence, Canton Fair logistics, CCC/GB compliance, and WFOE setup.',
    ctaZh: '18 位信用代码核验 →',
    ctaEn: 'USCC Verification Desk →',
    ctaHref: '/compliance/uscc-gsxt-lookup/',
    spotlights: [
      {
        href: '/attractions/canton-fair/',
        image: '/images/technology.webp',
        tagZh: '旗舰展会',
        tagEn: 'Flagship Fair',
        titleZh: '广交会参展与琶洲展馆全档案',
        titleEn: 'Canton Fair Complete Buyer Dossier',
        descZh: '机场提前免费领证、三期展区地铁动线与周边商旅配套实测。',
        descEn: 'Airport badge pickup, Pazhou metro gates, and phase-by-phase logistics.',
      },
      {
        href: '/guides/factory-sourcing-due-diligence/',
        image: '/images/rail.webp',
        tagZh: '验厂尽调',
        tagEn: 'Due Diligence',
        titleZh: '工厂源头采购与供应商尽调手册',
        titleEn: 'Factory Sourcing & Due Diligence',
        descZh: '企信网核验、18 位 USCC 校验、公章效力与 QIMA 验厂实操。',
        descEn: 'Verify licenses on GSXT, validate company chops, and audit factories.',
      },
      {
        href: '/guides/flexible-sourcing-reverse-haul/',
        image: '/images/craft.webp',
        tagZh: '柔性打样',
        tagEn: 'Small-Batch',
        titleZh: '百件小批量柔性打样与跨境集运',
        titleEn: 'Small-Batch 100-Unit Sourcing',
        descZh: '直连中国源头产业带、1688 采购与海外集运避坑要点。',
        descEn: 'Connect with specialized industrial belts for low-MOQ prototyping.',
      },
    ],
  },
  places: {
    heroImage: '/images/hero.webp',
    heroAltZh: '中国喀斯特峰林与山水画卷',
    heroAltEn: 'Karst peaks and river landscape in Yangshuo, China',
    h1Zh: '地点',
    h1En: 'Places',
    leadZh: '按城市、世界遗产、户外路线与地域文化探索中国：每座城市聚合过境口岸、跨时区抢票提醒、街区漫步与涉外医院坐标。',
    leadEn: 'Explore China by flagship city hubs, UNESCO landmarks, scenic trails, and regional corridors—with real transit warnings and local neighborhood walks.',
    ctaZh: '跨时区放票日历 →',
    ctaEn: 'Ticket Drop Calendar →',
    ctaHref: '/tools/ticket-calendar/',
    spotlights: [
      {
        href: '/cities/beijing/',
        image: '/images/beijing.webp',
        tagZh: '首都中枢',
        tagEn: 'Capital Hub',
        titleZh: '北京城市完整指南',
        titleEn: 'Beijing Complete City Hub',
        descZh: '7 大火车站防走错提醒、故宫 7 天放票规律与外卡直刷地铁实测。',
        descEn: '7 rail station traps, Forbidden City drops, and contactless subway tap.',
      },
      {
        href: '/cities/shanghai/',
        image: '/images/shanghai.webp',
        tagZh: '国际门户',
        tagEn: 'Global Gateway',
        titleZh: '上海城市完整指南',
        titleEn: 'Shanghai Complete City Hub',
        descZh: '浦东/虹桥 240h 口岸换乘、梧桐街区漫步与上海博物馆东馆预约。',
        descEn: 'PVG/SHA transit timing, Art Deco walks, and Shanghai Museum East.',
      },
      {
        href: '/attractions/forbidden-city/',
        image: '/images/town.webp',
        tagZh: '顶流地标',
        tagEn: 'Flagship Sight',
        titleZh: '故宫博物院预约与东华门动线',
        titleEn: 'Forbidden City Entry Playbook',
        descZh: '绕开天安门安检长队的东华门步行路线、景山日落与周边老字号。',
        descEn: 'Bypass Tiananmen queues via Donghuamen moat path + Jingshan sunset.',
      },
    ],
  },
  culture: {
    heroImage: '/images/tea.webp',
    heroAltZh: '中华茶艺与传统生活美学',
    heroAltEn: 'Chinese gongfu tea ceremony and culinary craft',
    h1Zh: '文化与生活',
    h1En: 'Culture & Life',
    leadZh: '从八大菜系、六大茶类与国民新消费连锁，到活态民俗、24 小时汤泉、中文热词与当代影像，读懂热气腾腾的日常生活。',
    leadEn: 'Experience living China through eight regional cuisines, six tea categories, everyday retail chains, folk spectacles, 24-hour bathhouses, and contemporary arts.',
    ctaZh: '汉字纹身防雷工具 →',
    ctaEn: 'Hanzi Tattoo Checker →',
    ctaHref: '/tools/hanzi-tattoo-check/',
    spotlights: [
      {
        href: '/guides/chinese-tea-6-types/',
        image: '/images/tea.webp',
        tagZh: '饮食茶酒',
        tagEn: 'Food & Tea',
        titleZh: '中华饮食八大菜系与六大茶类全图鉴',
        titleEn: '8 Great Cuisines & 6 Tea Categories',
        descZh: '一片树叶的六种演化路径，配合八大菜系风味地图与地道点单公式。',
        descEn: 'Six canonical tea classes paired with regional flavor geography.',
      },
      {
        href: '/guides/tcm-wellness-bathhouses/',
        image: '/images/river.webp',
        tagZh: '中式养生',
        tagEn: 'Wellness & Spas',
        titleZh: '中式养生与 24 小时城市汤泉指南',
        titleEn: 'TCM Wellness & 24h Bathhouse Spas',
        descZh: '读懂「上火与祛湿」生活哲学，体验水果自由与过夜洗浴文化。',
        descEn: 'Decode everyday wellness norms and navigate 24-hour urban spas.',
      },
      {
        href: '/guides/dining-etiquette-old-brands/',
        image: '/images/food.webp',
        tagZh: '老字号与礼仪',
        tagEn: 'Dining & Heritage',
        titleZh: '合餐礼仪与中华老字号风味坐标',
        titleEn: 'Dining Etiquette & Heritage Brands',
        descZh: '圆桌转盘礼仪、敬酒细节与百年老字号招牌菜实测清单。',
        descEn: 'Lazy-Susan etiquette, toasting customs, and time-honored kitchens.',
      },
    ],
  },
  atlas: {
    heroImage: '/images/beijing.webp',
    heroAltZh: '中国历史古建与当代全景视野',
    heroAltEn: 'Historic imperial architecture and modern China overview',
    h1Zh: '读懂中国',
    h1En: 'China Atlas',
    leadZh: '以一手官方统计与公开档案为底座，客观梳理当代中国的地理生态、历史脉络、AI 与硬科技、治理法治、超级基建与出海品牌。',
    leadEn: 'Source-verified briefings on how modern China works: geography, history, frontier AI and science, governance, mega-infrastructure, and global brands.',
    ctaZh: '开放数据与 MCP →',
    ctaEn: 'Open Data & MCP →',
    ctaHref: '/portals/',
    spotlights: [
      {
        href: '/guides/modern-china-24h/',
        image: '/images/shanghai.webp',
        tagZh: '超级基建',
        tagEn: 'Infrastructure',
        titleZh: '当代中国 24 小时：高铁、港口与数字日常',
        titleEn: 'Modern China 24h: Mega-Infra & Tech',
        descZh: '4.5 万公里高铁网、自动化外贸大港与无现金数字底座全景实录。',
        descEn: '45,000 km HSR network, automated megaports, and digital daily systems.',
      },
      {
        href: '/guides/myths-vs-facts/',
        image: '/images/rice.webp',
        tagZh: '误解破除',
        tagEn: 'Fact Check',
        titleZh: '关于中国的十个常见误解与事实核查',
        titleEn: '10 Common Myths About China, Decoded',
        descZh: '用可溯源数据与实地体验逐条拆解海外访客最常遇到的认知偏差。',
        descEn: 'Evidence-backed answers to the most frequent misconceptions about China.',
      },
      {
        href: '/guides/hardware-open-ai-stack/',
        image: '/images/technology.webp',
        tagZh: 'AI 与硬科技',
        tagEn: 'AI & Frontier Tech',
        titleZh: '中国开源 AI 模型与硬件创新生态',
        titleEn: 'Open-Source China AI & Hardware Stack',
        descZh: 'DeepSeek、Qwen 全球接入指南与深圳华强北硬件原型生态实察。',
        descEn: 'DeepSeek & Qwen global access plus Shenzhen hardware prototyping.',
      },
    ],
  },
};
