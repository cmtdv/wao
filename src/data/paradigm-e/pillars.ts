/**
 * Paradigm E — Global Navigation, 6 Pillars, 3-Column Mega Menu, Utility Dock & Command Palette Index
 */

export type PersonaType = 'editorial' | 'analyst' | 'safety' | 'legal';
export type PillarId = 'atlas' | 'places' | 'culture' | 'visit' | 'live' | 'business';

export interface NavLinkItem {
  label: string;
  labelZh: string;
  href: string;
  note?: string;
  noteZh?: string;
  badge?: string;
}

export interface PillarTopicGroup {
  number: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  links: NavLinkItem[];
}

export interface PillarConfig {
  id: PillarId;
  name: string;
  nameZh: string;
  shortDesc: string;
  shortDescZh: string;
  h1: string;
  h1Zh: string;
  lead: string;
  leadZh: string;
  persona: PersonaType;
  personaLabel: string;
  personaLabelZh: string;
  megaMenu: {
    coreTitle: string;
    coreTitleZh: string;
    coreLinks: NavLinkItem[];
    mostViewedTitle: string;
    mostViewedTitleZh: string;
    mostViewed: NavLinkItem[];
    routesTitle: string;
    routesTitleZh: string;
    programmaticChips: NavLinkItem[];
  };
  mostViewedTop: NavLinkItem[];
  topicGroups: PillarTopicGroup[];
  sidebarTool: {
    kicker: string;
    kickerZh: string;
    title: string;
    titleZh: string;
    desc: string;
    descZh: string;
    ctaLabel: string;
    ctaLabelZh: string;
    href: string;
  };
  sidebarStacks: NavLinkItem[];
  databases: NavLinkItem[];
}

export const PILLARS: PillarConfig[] = [
  {
    id: 'atlas',
    name: 'Atlas',
    nameZh: '全景图谱',
    shortDesc: 'State, economy, tech, infrastructure & facts',
    shortDescZh: '国情、政经、基建、科技与权威数据',
    h1: 'China Atlas — Decoded Systems, Economy & Modern Reality',
    h1Zh: '中国全景图谱 — 制度、经济、科技与基建拆解',
    lead: 'Calm, source-verified briefings on how China is governed, built, and digitized—paired with 12×97 taxonomy depth, Tier-A official statistics, and parallel East-West timelines.',
    leadZh: '以《经济学人》式冷静客观视角拆解现代中国的治理结构、超级基建、百大产业带与科技栈，内置 12×97 权威分类全景与 Tier-A 溯源。',
    persona: 'analyst',
    personaLabel: 'Economist Brief · Analyst Tone',
    personaLabelZh: '《经济学人》冷静洞察体',
    megaMenu: {
      coreTitle: 'Core Architecture',
      coreTitleZh: '核心脉络',
      coreLinks: [
        { label: 'China at a Glance & Holidays', labelZh: '国家概览与法定调休', href: '/guides/china-statutory-holidays/' },
        { label: 'Modern China 24h Infrastructure', labelZh: '当代中国 24 小时科技奇观', href: '/guides/modern-china-24h/' },
        { label: 'Myths vs. Verified Facts', labelZh: '破除西方十大常见误解', href: '/guides/myths-vs-facts/' },
        { label: 'AI, Robotics & Open-Source Stack', labelZh: '硬件极客与开源 AI 工具栈', href: '/guides/hardware-open-ai-stack/' },
        { label: '12 × 97 Master Taxonomy', labelZh: '12 × 97 完整知识图谱', href: '/atlas/#taxonomy-12x97' },
      ],
      mostViewedTitle: 'Most Viewed & 360° Gaps',
      mostViewedTitleZh: '高频查看与重点盲区',
      mostViewed: [
        { label: '2026 Monthly Policy Changelog', labelZh: '入境与商旅政策月度变更日志', href: '/guides/policy-changelog/', badge: 'Updated' },
        { label: 'How China Admin Divisions Work', labelZh: '五级行政区划与 MCA 编码解析', href: '/guides/admin-governance-map/' },
        { label: 'Smart EVs & Clean Energy Grid', labelZh: '智能电车与特高压能源网络', href: '/guides/smart-evs-clean-energy/' },
        { label: 'Western Media vs. Primary Data', labelZh: '一手统计局与人大法律库溯源', href: '/portals/' },
      ],
      routesTitle: 'Structured Collections',
      routesTitleZh: '程序化实体直达',
      programmaticChips: [
        { label: '/portals/ 848 Gov Data', labelZh: '/portals/ 848政务源', href: '/portals/' },
        { label: '/explore/ Multi-Facet', labelZh: '/explore/ 多维探索', href: '/explore/' },
        { label: '/guides/ 32 Guides', labelZh: '/guides/ 32深度主题', href: '/guides/' },
        { label: '/posts/ Dispatches', labelZh: '/posts/ 深度志刊', href: '/posts/' },
        { label: '/mcp AI Endpoint', labelZh: '/mcp AI接口', href: '/portals/#mcp-setup' },
      ],
    },
    mostViewedTop: [
      { label: 'Modern China 24h: Mega-Infra & Tech', labelZh: '当代中国 24 小时：超级基建与科技奇观', href: '/guides/modern-china-24h/' },
      { label: '10 Western Myths About China, Decoded', labelZh: '破除西方关于中国的十大误解', href: '/guides/myths-vs-facts/' },
      { label: 'Monthly Entry & Business Policy Log', labelZh: '中国入境与商旅政策月度变更日志', href: '/guides/policy-changelog/' },
      { label: 'Hardware Geeks & Open-Source China AI', labelZh: '硬件极客与开源 AI 工具栈', href: '/guides/hardware-open-ai-stack/' },
      { label: 'Statutory Holidays & Crowd Calendar', labelZh: '法定节假日调休与全国拥挤度日历', href: '/guides/china-statutory-holidays/' },
      { label: '848 Verified Gov Open Data Portals', labelZh: '848 个实测政务公开数据源目录', href: '/portals/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Governance, Law & Social Fabric',
        titleZh: '国家治理、法律体系与社会运行',
        summary: 'Five-tier administrative codes, legal registries, demographics, healthcare, and public safety baselines.',
        summaryZh: '五级行政区划、全国人大法律库、人口医疗与社会治安基线。',
        links: [
          { label: 'Governance & 5-Tier Admin Map', labelZh: '国家机构与五级政区图谱', href: '/guides/admin-governance-map/' },
          { label: 'Public Safety & Emergency Rules', labelZh: '社会治安与外籍紧急救助机制', href: '/guides/safety-scams-emergency/' },
          { label: 'Statutory Holidays & Tiaoxiu', labelZh: '法定节假日与调休避峰规则', href: '/guides/china-statutory-holidays/' },
        ],
      },
      {
        number: '02',
        title: 'Economy, Mega-Infrastructure & Industrial Belts',
        titleZh: '宏观经济、超级基建与百大产业带',
        summary: '45,000 km HSR network, container megaports, clean energy corridors, and specialized manufacturing towns.',
        summaryZh: '4.5 万公里高铁网、世界级外贸大港、新能源走廊与百大专业产业带。',
        links: [
          { label: 'Modern China 24h Infrastructure', labelZh: '当代中国 24 小时基建奇观', href: '/guides/modern-china-24h/' },
          { label: 'Industrial Belts & Sourcing Map', labelZh: '百大产业带与柔性打样地图', href: '/guides/flexible-sourcing-reverse-haul/' },
          { label: 'Smart EVs & Clean Energy Grid', labelZh: '智能电车与清洁能源转型', href: '/guides/smart-evs-clean-energy/' },
        ],
      },
      {
        number: '03',
        title: 'Tech Ecosystem, Super-Apps & Open AI',
        titleZh: '科技生态、超级应用与开源 AI',
        summary: 'How WeChat, Alipay, DeepSeek/Qwen, and hardware supply chains shape everyday digital life.',
        summaryZh: '微信/支付宝超级生态、国产开源模型、华强北硬件与数据合规法规。',
        links: [
          { label: 'Hardware & Open-Source AI Stack', labelZh: '硬件极客与开源 AI 工具栈', href: '/guides/hardware-open-ai-stack/' },
          { label: '5 Red Lines Buying Electronics', labelZh: '来华买电子产品的 5 条红线', href: '/guides/buying-electronics-red-lines/' },
          { label: 'Western Tools in China Matrix', labelZh: '西方工具中国兼容性映射', href: '/in-china/google-maps/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Open Data & AI',
      kickerZh: '开放数据与 AI',
      title: 'Connect ChinaWao MCP Server',
      titleZh: '一键接入 ChinaWao MCP 服务',
      desc: 'Query 848 government portals, 32 verified guides, and deterministic visa rules directly from Claude, Cursor, or ChatGPT.',
      descZh: '直接将 848 政务数据源、32 专题核验事实与免签判定器接入 Claude / Cursor / ChatGPT。',
      ctaLabel: 'Open MCP & Portals Hub',
      ctaLabelZh: '进入数据与 MCP 中心',
      href: '/portals/',
    },
    sidebarStacks: [
      { label: 'China Fact-Checkers & Journalists Kit', labelZh: '涉华研究与核查工具包', href: '/stacks/canton-fair-buyer-kit/' },
      { label: 'First-Time China 10-Day Stack', labelZh: '首次来华 10 天抄作业清单包', href: '/stacks/first-time-china-10-day/' },
    ],
    databases: [
      { label: '848 Gov Portals /portals/', labelZh: '848政务源 /portals/', href: '/portals/' },
      { label: 'Multi-Facet Explorer /explore/', labelZh: '多维探索器 /explore/', href: '/explore/' },
      { label: 'City Hubs /cities/', labelZh: '城市中枢 /cities/shanghai/', href: '/cities/shanghai/' },
      { label: 'Ground Pulse /pulse/', labelZh: '现场实测流 /pulse/', href: '/pulse/' },
      { label: 'Editorial Dispatches /posts/', labelZh: '深度志刊 /posts/', href: '/posts/' },
    ],
  },
  {
    id: 'places',
    name: 'Places',
    nameZh: '山河城市',
    shortDesc: 'Cities, UNESCO sites, routes & 1–3km meshes',
    shortDescZh: '城市中枢、顶流景点、高铁双城与周边织网',
    h1: 'Places — Cities, Landscapes, Heritage & Real-Time Crowd Rules',
    h1Zh: '山河城市 — 城市空间中枢、顶流景点与零维护周边织网',
    lead: 'Explore China through verified city hubs (MCA 6-digit codes), timezone-converted attraction ticket drops, anti-wrong-station warnings, and 1–3km neighborhood walking meshes.',
    leadZh: '以 MCA 6 位行政区划代码锚定城市中枢，整合跨时区放票换算、同名防走错车站标红与 1–3km 周边老字号/胡同零维护推荐。',
    persona: 'editorial',
    personaLabel: 'A Bite of China · Sensory Editorial',
    personaLabelZh: '《舌尖》感官人文体',
    megaMenu: {
      coreTitle: 'Destinations & Hubs',
      coreTitleZh: '核心目的地',
      coreLinks: [
        { label: 'Shanghai City Hub (310000)', labelZh: '上海城市中枢 (310000)', href: '/cities/shanghai/' },
        { label: 'Beijing City Hub (110000)', labelZh: '北京城市中枢 (110000)', href: '/cities/beijing/' },
        { label: 'Chengdu City Hub (510100)', labelZh: '成都城市中枢 (510100)', href: '/cities/chengdu/' },
        { label: 'Xi’an City Hub (610100)', labelZh: '西安城市中枢 (610100)', href: '/cities/xian/' },
        { label: 'Shenzhen Tech Hub (440300)', labelZh: '深圳科创中枢 (440300)', href: '/cities/shenzhen/' },
      ],
      mostViewedTitle: 'Most Viewed & Must-Avoid Traps',
      mostViewedTitleZh: '高频决策与红黑榜',
      mostViewed: [
        { label: 'Top Attractions, Great Wall & Panda Ranking', labelZh: '顶流景点、长城/熊猫/古镇红黑榜', href: '/guides/top-attractions-ranking/', badge: 'Hot' },
        { label: 'Black Myth: Wukong Shanxi Architecture Trail', labelZh: '从《黑神话》到山西古建巡礼', href: '/guides/black-myth-shanxi/' },
        { label: 'Badaling vs. Mutianyu Great Wall', labelZh: '八达岭 vs 慕田峪长城横评', href: '/compare/badaling-vs-mutianyu/' },
        { label: 'Beijing → Shanghai HSR vs Flight', labelZh: '北京到上海：高铁 vs 民航耗时对比', href: '/routes/beijing-to-shanghai/' },
      ],
      routesTitle: 'Spatial Entity Routes',
      routesTitleZh: '空间实体直达',
      programmaticChips: [
        { label: '/cities/ City Hubs', labelZh: '/cities/ 城市中枢', href: '/cities/shanghai/' },
        { label: '/attractions/ Landmarks', labelZh: '/attractions/ 顶流景点', href: '/attractions/forbidden-city/' },
        { label: '/routes/ City-to-City', labelZh: '/routes/ 双城交通', href: '/routes/beijing-to-shanghai/' },
        { label: '/compare/ Side-by-Side', labelZh: '/compare/ 景点横评', href: '/compare/badaling-vs-mutianyu/' },
      ],
    },
    mostViewedTop: [
      { label: 'Forbidden City Ticket Drop & Entry Rules', labelZh: '故宫博物院：提前 7 天 20:00 放票攻略', href: '/attractions/forbidden-city/' },
      { label: 'Top Attractions, Great Wall & Ancient Towns', labelZh: '顶流景点抢票与长城/熊猫/古镇红黑榜', href: '/guides/top-attractions-ranking/' },
      { label: 'Shanghai 310000 Complete City Hub', labelZh: '上海 (310000) 全维城市空间中枢', href: '/cities/shanghai/' },
      { label: 'Black Myth: Wukong Shanxi Timber Trail', labelZh: '从《黑神话》到山西古建巡礼', href: '/guides/black-myth-shanxi/' },
      { label: 'Badaling vs. Mutianyu Great Wall Verdict', labelZh: '八达岭 vs 慕田峪：长城段位真实结论', href: '/compare/badaling-vs-mutianyu/' },
      { label: 'Beijing to Shanghai: HSR vs. Flight vs. Sleeper', labelZh: '北京到上海：高铁、民航与动卧全对比', href: '/routes/beijing-to-shanghai/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Megacity Hubs (MCA 6-Digit Anchors)',
        titleZh: '核心城市中枢（MCA 6 位码多维拼装）',
        summary: 'Each city page pulls 240h ports, city walks, time-honored eateries, universities, international hospitals, and open data.',
        summaryZh: '一城聚合 240h 口岸、街区漫步、百年老字号、留学名校与涉外医院（独立卡片彻底解耦）。',
        links: [
          { label: 'Shanghai (310000)', labelZh: '上海 (310000)', href: '/cities/shanghai/' },
          { label: 'Beijing (110000)', labelZh: '北京 (110000)', href: '/cities/beijing/' },
          { label: 'Chengdu (510100)', labelZh: '成都 (510100)', href: '/cities/chengdu/' },
          { label: 'Xi’an (610100)', labelZh: '西安 (610100)', href: '/cities/xian/' },
          { label: 'Shenzhen (440300)', labelZh: '深圳 (440300)', href: '/cities/shenzhen/' },
        ],
      },
      {
        number: '02',
        title: 'Flagship Attractions & Zero-Maintenance 1–3km Mesh',
        titleZh: '顶流景点放票规则与 1–3km 周边织网',
        summary: 'Timezone-converted booking timers, Monday closure alerts, wrong-station traps, and verified Amap Chinese search terms.',
        summaryZh: '跨时区放票胶囊、周一闭馆提醒、同名防走错车站标红与高德/大众点评中文搜索词一键复制。',
        links: [
          { label: 'Forbidden City (Palace Museum)', labelZh: '故宫博物院', href: '/attractions/forbidden-city/' },
          { label: 'Mutianyu Great Wall', labelZh: '慕田峪长城', href: '/attractions/mutianyu-great-wall/' },
          { label: 'Chengdu Giant Panda Base', labelZh: '成都大熊猫繁育研究基地', href: '/attractions/chengdu-panda-base/' },
          { label: 'Terracotta Warriors Museum', labelZh: '秦始皇帝陵博物院', href: '/attractions/terracotta-warriors/' },
        ],
      },
      {
        number: '03',
        title: 'Classic Routes & Cross-Border Corridors',
        titleZh: '经典路线与高铁/陆路跨境走廊',
        summary: 'Door-to-door city comparisons and overland rail crossings across Hong Kong, Laos, and Greater Bay Area.',
        summaryZh: '市中心到市中心门到门耗时横评，以及西九龙、中老铁路等陆路跨境实操。',
        links: [
          { label: 'Beijing → Shanghai Rail vs. Air', labelZh: '北京 → 上海 交通横评', href: '/routes/beijing-to-shanghai/' },
          { label: 'Hong Kong → Guangzhou Express', labelZh: '香港西九龙 → 广州南', href: '/routes/hong-kong-to-guangzhou/' },
          { label: 'China Overland Rail Crossings', labelZh: '中国陆路跨境铁路与口岸', href: '/guides/overland-rail-crossings/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Tool 12.3 · Release Timer',
      kickerZh: '工具 12.3 · 放票换算',
      title: 'Ticket Release & Timezone Converter',
      titleZh: '景区与 12306 跨时区放票日历',
      desc: 'Convert Beijing 20:00 Forbidden City drops and 15-day Railway 12306 windows to your exact local timezone.',
      descZh: '将故宫提前 7 天 20:00（北京时间）与高铁 15 天预售期自动换算为您所在地的本地抢票时刻。',
      ctaLabel: 'Open Ticket Calendar',
      ctaLabelZh: '打开放票日历',
      href: '/tools/ticket-calendar/',
    },
    sidebarStacks: [
      { label: 'First-Time China 10-Day Stack', labelZh: '首次来华 10 天行程工具包', href: '/stacks/first-time-china-10-day/' },
      { label: 'Family With Kids China Guide', labelZh: '亲子家庭来华精选指南', href: '/for/family-with-kids/' },
    ],
    databases: [
      { label: 'Cities /cities/', labelZh: '城市中枢 /cities/', href: '/cities/shanghai/' },
      { label: 'Attractions /attractions/', labelZh: '顶流景点 /attractions/', href: '/attractions/forbidden-city/' },
      { label: 'Intercity Routes /routes/', labelZh: '双城交通 /routes/', href: '/routes/beijing-to-shanghai/' },
      { label: 'Comparisons /compare/', labelZh: '红黑横评 /compare/', href: '/compare/badaling-vs-mutianyu/' },
    ],
  },
  {
    id: 'culture',
    name: 'Culture',
    nameZh: '饮食人文',
    shortDesc: 'Food, 6 teas, heritage, wellness & living arts',
    shortDescZh: '饮食六大茶类、非遗民俗、中医养生与当代生活',
    h1: 'Culture & Living China — Food, Tea, Folk Arts & Everyday Rituals',
    h1Zh: '饮食与活态人文 — 八大菜系、六大茶类、民俗奇观与中式养生',
    lead: 'Sensory field guides into Chinese kitchens, gongfu tea tables, 24-hour bathhouses, mahjong rooms, iron-flower sparks, and the unspoken rhythms of everyday life.',
    leadZh: '以《舌尖》感官叙事结合 90% 可落地的点单公式与坐标字卡，解码八大菜系、六大茶类、打铁花、麻将宇宙与“上火去湿”养生观。',
    persona: 'editorial',
    personaLabel: 'A Bite of China · Sensory Editorial',
    personaLabelZh: '《舌尖》感官人文体',
    megaMenu: {
      coreTitle: 'Culinary & Heritage Guides',
      coreTitleZh: '饮食与人文主题',
      coreLinks: [
        { label: 'Chinese Food & Six Tea Categories', labelZh: '中华饮食地图与六大茶类', href: '/guides/chinese-tea-6-types/' },
        { label: 'Iron Flower & Living Folk Arts', labelZh: '打铁花、英歌舞与活态民俗', href: '/guides/living-folk-arts/' },
        { label: 'Mahjong & Chinese Board Universe', labelZh: '麻将、掼蛋与中式棋牌宇宙', href: '/guides/mahjong-board-universe/' },
        { label: 'Shanghuo, Dampness & TCM Wellness', labelZh: '“上火去湿”中式养生与汤泉', href: '/guides/tcm-wellness-bathhouses/' },
        { label: 'Annual 12-Month Festival Calendar', labelZh: '中国年度 12 月盛事与节庆日历', href: '/guides/annual-events-calendar/' },
      ],
      mostViewedTitle: 'Most Viewed & Ordering Help',
      mostViewedTitleZh: '高频实操与防雷',
      mostViewed: [
        { label: 'Peanut Allergy & Dietary SOS Cards', labelZh: '防花生油/清真/过敏后厨亮屏卡', href: '/cards/peanut-allergy-sos/', badge: 'SOS' },
        { label: 'Chinese Tattoo & Hanzi Red-Flag Checker', labelZh: '汉字纹身防雷与中文起名工坊', href: '/tools/hanzi-tattoo-check/' },
        { label: 'Dining Etiquette & 1,422 Time-Honored Brands', labelZh: '合餐礼仪与 1,422 家中华老字号', href: '/guides/dining-etiquette-old-brands/' },
        { label: 'Mandarin Survival Phrases & Pinyin Audio', labelZh: '落地必认汉字与场景点单公式', href: '/guides/mandarin-survival-kit/' },
      ],
      routesTitle: 'Culture & Card Routes',
      routesTitleZh: '字卡与工具直达',
      programmaticChips: [
        { label: '/cards/ Dietary Cards', labelZh: '/cards/ 饮食过敏字卡', href: '/cards/peanut-allergy-sos/' },
        { label: '/for/peanut-allergy/', labelZh: '/for/ 花生过敏人群', href: '/for/peanut-allergy/' },
        { label: '/tools/hanzi-tattoo-check/', labelZh: '/tools/ 汉字纹身防雷', href: '/tools/hanzi-tattoo-check/' },
        { label: '/tools/chinese-name/', labelZh: '/tools/ 中文起名器', href: '/tools/chinese-name/' },
      ],
    },
    mostViewedTop: [
      { label: 'Chinese Food, 8 Cuisines & 6 Tea Types', labelZh: '中华饮食八大菜系与六大茶类全图鉴', href: '/guides/chinese-tea-6-types/' },
      { label: 'Peanut Oil & Severe Allergy Kitchen Card', labelZh: '防花生油与重度过敏后厨亮屏字卡', href: '/cards/peanut-allergy-sos/' },
      { label: '“Shanghuo”, Dampness & 24h Bathhouse Spas', labelZh: '“上火去湿”中式养生与 24h 汤泉头疗', href: '/guides/tcm-wellness-bathhouses/' },
      { label: 'Iron Flower, Yingge Dance & Living Folk Arts', labelZh: '打铁花、社火与活态民俗日历', href: '/guides/living-folk-arts/' },
      { label: 'Mahjong & Chinese Parlor Game Universe', labelZh: '麻将与中式棋牌宇宙入门', href: '/guides/mahjong-board-universe/' },
      { label: 'Annual 12-Month Events & Harvest Calendar', labelZh: '中国年度 12 月盛事与花期日历', href: '/guides/annual-events-calendar/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Food, Tea, Baijiu & Dietary Safety',
        titleZh: '八大菜系、六大茶类与忌口防线',
        summary: 'Flavor geography, ordering formulas, 1,422 heritage brands, and kitchen-ready allergy show-to-local cards.',
        summaryZh: '风味版图、老字号坐标、点单公式与后厨高对比亮屏过敏卡。',
        links: [
          { label: '8 Cuisines & 6 Tea Types Guide', labelZh: '八大菜系与六大茶类图鉴', href: '/guides/chinese-tea-6-types/' },
          { label: 'Dining Etiquette & Time-Honored Brands', labelZh: '合餐礼仪与百年老字号指南', href: '/guides/dining-etiquette-old-brands/' },
          { label: 'Peanut & Dietary Allergy Hub', labelZh: '花生油过敏与特殊饮食专题', href: '/for/peanut-allergy/' },
        ],
      },
      {
        number: '02',
        title: 'Living Folk Arts, Architecture & Aesthetics',
        titleZh: '活态民俗、古建美学与游戏国漫',
        summary: 'Timber-frame temples from Black Myth: Wukong, molten iron-flower nights, ceramics, and contemporary youth scenes.',
        summaryZh: '山西木构古建巡礼、非遗打铁花、景德镇瓷器与当代演艺夜生活。',
        links: [
          { label: 'Black Myth Shanxi Timber Trail', labelZh: '从《黑神话》到山西古建巡礼', href: '/guides/black-myth-shanxi/' },
          { label: 'Iron Flower & Living Folk Arts', labelZh: '打铁花与活态民俗日历', href: '/guides/living-folk-arts/' },
          { label: 'Cinema, C-Dramas & Youth Nightlife', labelZh: '电影陆剧、演出与当代夜生活', href: '/guides/cinema-nightlife-youth/' },
        ],
      },
      {
        number: '03',
        title: 'Wellness, Bathhouses & Language',
        titleZh: '中式养生、汤泉文化与汉字语言',
        summary: 'Why hot water matters, how 24-hour urban spas work, Mandarin survival phrases, and Hanzi tattoo red-flag checks.',
        summaryZh: '中式养生心智翻译、24 小时汤泉洗浴流程、生存中文与汉字纹身防雷。',
        links: [
          { label: 'Shanghuo, TCM & 24h Bathhouses', labelZh: '“上火去湿”养生与 24h 汤泉', href: '/guides/tcm-wellness-bathhouses/' },
          { label: 'Mahjong & Parlor Games', labelZh: '麻将与中式棋牌宇宙', href: '/guides/mahjong-board-universe/' },
          { label: 'Mandarin Survival & Menu Hanzi', labelZh: '学中文与餐厅车站必认汉字', href: '/guides/mandarin-survival-kit/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Evergreen Micro-Tools',
      kickerZh: '常青文化微工具',
      title: 'Hanzi Tattoo Check & Chinese Name Studio',
      titleZh: '汉字纹身防雷与中文起名器',
      desc: 'Catch awkward transliterations, broken idioms, and tone traps before ink hits skin—or craft a culturally natural Chinese name.',
      descZh: '一键检测中文纹身词义雷区与生造词，或按音义偏好生成自然得体的中文名。',
      ctaLabel: 'Open Hanzi Tools',
      ctaLabelZh: '打开汉字微工具',
      href: '/tools/hanzi-tattoo-check/',
    },
    sidebarStacks: [
      { label: 'Peanut & Nut Allergy Survival Kit', labelZh: '防花生油与过敏饮食生存包', href: '/for/peanut-allergy/' },
      { label: 'All Show-to-Local Fullscreen Cards', labelZh: '全部全屏亮屏出示字卡库', href: '/cards/peanut-allergy-sos/' },
    ],
    databases: [
      { label: 'Show-to-Local Cards /cards/', labelZh: '亮屏出示字卡 /cards/', href: '/cards/peanut-allergy-sos/' },
      { label: 'Allergy Hub /for/peanut-allergy/', labelZh: '过敏人群专题 /for/', href: '/for/peanut-allergy/' },
      { label: 'Tattoo Checker /tools/', labelZh: '汉字纹身防雷 /tools/', href: '/tools/hanzi-tattoo-check/' },
      { label: 'Chinese Naming /tools/', labelZh: '中文起名 /tools/', href: '/tools/chinese-name/' },
    ],
  },
  {
    id: 'visit',
    name: 'Visit',
    nameZh: '来华旅行',
    shortDesc: '240h visa, payments, eSIM, 12306 & app rescue',
    shortDescZh: '240h 免签、支付绑卡、高铁抢票与现场报错救火',
    h1: 'Visit China — Deterministic Playbook & Field Survival Rules',
    h1Zh: '来华旅行 — 确定性行前通关与现场救火手册',
    lead: 'Airline safety-card clarity for every friction point: 240-hour visa-free transit rules, Alipay/WeChat foreign card limits, blocked-app substitutes, Railway 12306, and instant error rescue.',
    leadZh: '《航空安全卡》极简指令风：覆盖 240h 过境免签、外卡 200 元红线、高铁防走错站、入境体检看牙与全图解 App 报错救火。',
    persona: 'safety',
    personaLabel: 'Safety Card · Deterministic Playbook',
    personaLabelZh: '《航空安全卡》极简指令体',
    megaMenu: {
      coreTitle: 'Pre-Flight & Survival',
      coreTitleZh: '行前与落地脉络',
      coreLinks: [
        { label: '72-Hour Pre-Departure Playbook', labelZh: '首次来华 72 小时通关剧本', href: '/guides/72h-pre-departure/' },
        { label: '240h Visa-Free Transit & Airport Flash', labelZh: '240h 过境免签与机场快闪', href: '/guides/240h-visa-free-transit/' },
        { label: 'Cashless Payments & Super-Apps', labelZh: '无现金支付与超级应用矩阵', href: '/guides/cashless-super-apps/' },
        { label: 'High-Speed Rail, Budget & Tax Refund', labelZh: '高铁出行、预算与离境退税 2.0', href: '/guides/rail-budget-tax-refund/' },
        { label: 'Mainland ↔ HK/Macau/Taiwan Border', labelZh: '内地与港澳台跨境实操', href: '/guides/hk-macau-taiwan-border/' },
      ],
      mostViewedTitle: 'Most Viewed & 360° Rescue',
      mostViewedTitleZh: '高频刚需与现场救火',
      mostViewed: [
        { label: 'WeChat Restricted? Step-by-Step Rescue', labelZh: '微信受限/封号全图解救火', href: '/errors/wechat-restricted/', badge: 'Rescue' },
        { label: 'Does Google Maps Work in China?', labelZh: 'Google Maps 在中国能用吗？', href: '/in-china/google-maps/' },
        { label: 'China Medical & Dental Checkup Guide', labelZh: '来华体检看牙与医疗旅游指南', href: '/guides/medical-dental-checkup/', badge: 'New' },
        { label: 'Official Forms & App Errors Visual Hub', labelZh: '中国官方表格与 App 报错全图解', href: '/guides/official-forms-app-errors/' },
      ],
      routesTitle: 'High-Conversion Routes',
      routesTitleZh: '高转化实体路由',
      programmaticChips: [
        { label: '/in-china/ App Map', labelZh: '/in-china/ 西方映射', href: '/in-china/google-maps/' },
        { label: '/errors/ App Rescue', labelZh: '/errors/ 报错救火', href: '/errors/wechat-restricted/' },
        { label: '/documents/ Forms', labelZh: '/documents/ 表格图解', href: '/documents/arrival-card/' },
        { label: '/how-to-use/ Devices', labelZh: '/how-to-use/ 设备图解', href: '/how-to-use/hotel-washing-machine/' },
        { label: '/cards/ Show-to-Local', labelZh: '/cards/ 亮屏字卡大厅', href: '/cards/' },
        { label: '/compare/ Verdicts', labelZh: '/compare/ 决策横评', href: '/compare/amap-vs-apple-maps/' },
        { label: '/stacks/ Trip Kits', labelZh: '/stacks/ 抄作业包', href: '/stacks/first-time-china-10-day/' },
      ],
    },
    mostViewedTop: [
      { label: '240-Hour Visa-Free Transit Checker & Ports', labelZh: '240h 过境免签实时判定器与 60 口岸', href: '/tools/visa-checker/' },
      { label: 'Alipay & WeChat Pay Foreign Card Setup', labelZh: '支付宝/微信绑外卡与 200 元免手续费红线', href: '/guides/cashless-super-apps/' },
      { label: 'Does Google Maps / WhatsApp Work in China?', labelZh: 'Google Maps / WhatsApp 中国兼容映射', href: '/in-china/google-maps/' },
      { label: '12306 Train Tickets & Wrong-Station Traps', labelZh: '12306 外籍购票与同名防走错车站', href: '/guides/rail-budget-tax-refund/' },
      { label: 'WeChat Restricted? Visual Rescue Steps', labelZh: '微信账号受限全图解解封流程', href: '/errors/wechat-restricted/' },
      { label: 'China Medical & Dental Checkup Tourism', labelZh: '来华体检看牙与国际医疗旅游指南', href: '/guides/medical-dental-checkup/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Entry, Visas & Cross-Border Rules',
        titleZh: '签证免签、240h 过境与港澳台/陆路跨境',
        summary: '30-day unilateral visa-free list, 240h A→China→C ticket proof, arrival card fill-in, and HK/Macau/Laos crossings.',
        summaryZh: '单免/互免名单、240h 联程票铁律、入境卡逐格图解与港澳台/中老铁路通关。',
        links: [
          { label: '72-Hour Pre-Departure Playbook', labelZh: '72 小时行前通关剧本', href: '/guides/72h-pre-departure/' },
          { label: '240h Transit & Airport Flash Trips', labelZh: '240h 过境免签与机场快闪', href: '/guides/240h-visa-free-transit/' },
          { label: 'Arrival Card Annotated Form', labelZh: '入境卡全红框中英标注', href: '/documents/arrival-card/' },
          { label: 'Mainland ↔ HK / Macau / Taiwan', labelZh: '内地与港澳台跨境实操', href: '/guides/hk-macau-taiwan-border/' },
        ],
      },
      {
        number: '02',
        title: 'Cashless Payments, Connectivity & App Error Rescue',
        titleZh: '无现金支付、联网 eSIM 与 App 报错救火',
        summary: '200 RMB fee-free rule, eSIM benchmarks, Western app substitutes, and red-box annotated Chinese error screens.',
        summaryZh: '外卡 200 元红线、实测最稳 eSIM、西方工具替代映射与报错红框图解。',
        links: [
          { label: 'Cashless Payments & Super-Apps', labelZh: '无现金支付与超级应用', href: '/guides/cashless-super-apps/' },
          { label: 'Alipay vs. WeChat Pay Verdict', labelZh: '支付宝 vs 微信支付横评', href: '/compare/alipay-vs-wechat-pay/' },
          { label: 'WeChat Restricted Visual Rescue', labelZh: '微信受限救火图解', href: '/errors/wechat-restricted/' },
          { label: '12306 Passport Verification Fix', labelZh: '12306 护照核验失败救火', href: '/errors/12306-passport-failed/' },
        ],
      },
      {
        number: '03',
        title: 'Rail, Hotels, Tax Refund, Medical & Safety',
        titleZh: '高铁住宿、离境退税、来华体检与安全防坑',
        summary: 'Passport e-gate boarding, hotel registration rules, 11% instant tax refunds, dental checkups, and solo safety.',
        summaryZh: '护照直刷电子闸机、涉外酒店登记、11% 即买即退、体检看牙与独行安全。',
        links: [
          { label: 'High-Speed Rail & Budget Guide', labelZh: '高铁出行与预算退税指南', href: '/guides/rail-budget-tax-refund/' },
          { label: 'China Medical & Dental Checkup', labelZh: '来华体检看牙医疗旅游', href: '/guides/medical-dental-checkup/' },
          { label: 'Solo Female 10-Day Trip Stack', labelZh: '女性独行 10 天安全清单包', href: '/stacks/solo-female-10-day/' },
          { label: 'Prescription Meds (Adderall) Rules', labelZh: '处方药（Adderall 等）入境合规', href: '/in-china/adderall/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Tool 12.1 · Deterministic Rule',
      kickerZh: '工具 12.1 · 确定性判定',
      title: '240-Hour Visa-Free Transit Checker',
      titleZh: '240 小时过境免签快速测算',
      desc: 'Check unilateral 30-day eligibility or 240h cross-province transit rules by passport and onward third-country ticket.',
      descZh: '输入护照国籍、停留天数与第三国联程票状态，零刷新输出确定性入境规则。',
      ctaLabel: 'Run Visa Checker',
      ctaLabelZh: '立即测算免签资格',
      href: '/tools/visa-checker/',
    },
    sidebarStacks: [
      { label: 'First-Time China 10-Day Stack', labelZh: '首次来华 10 天工具包', href: '/stacks/first-time-china-10-day/' },
      { label: 'Solo Female 10-Day Safety Stack', labelZh: '女性独行 10 天安全清单包', href: '/stacks/solo-female-10-day/' },
    ],
    databases: [
      { label: 'Western App Map /in-china/', labelZh: '西方App映射 /in-china/', href: '/in-china/google-maps/' },
      { label: 'App Error Rescue /errors/', labelZh: '报错救火 /errors/', href: '/errors/wechat-restricted/' },
      { label: 'Official Forms /documents/', labelZh: '表格图解 /documents/', href: '/documents/arrival-card/' },
      { label: 'Device Panels /how-to-use/', labelZh: '设备图解 /how-to-use/', href: '/how-to-use/hotel-washing-machine/' },
      { label: 'Show-to-Local Cards /cards/', labelZh: '亮屏字卡 /cards/', href: '/cards/taxi-beijing-qinghe/' },
      { label: 'Comparisons /compare/', labelZh: '决策横评 /compare/', href: '/compare/amap-vs-apple-maps/' },
    ],
  },
  {
    id: 'live',
    name: 'Live',
    nameZh: '留学长居',
    shortDesc: 'Work permits, study, renting, banking & exit',
    shortDescZh: '工签积分、来华留学、租房个税与离境退保',
    h1: 'Live & Study in China — Permits, Renting, Tax & Clean Exit',
    h1Zh: '留学长居 — 工签积分、租房银行、数字游民与离境退保',
    lead: 'Practical legal and administrative playbooks for expats, students, and digital nomads: Category A/B/C work permit points, apartment registration, IIT tax rules, and closing out pensions when leaving China.',
    leadZh: '面向留学生、外籍雇员与数字游民的确定性政务手册：覆盖 A/B/C 工签打分、24 小时住宿登记、个税抵扣、驾照换领与离开中国终极退保收尾。',
    persona: 'safety',
    personaLabel: 'Safety Card · Statutory Checklist',
    personaLabelZh: '《航空安全卡》政务清单体',
    megaMenu: {
      coreTitle: 'Long-Term Playbooks',
      coreTitleZh: '长居核心脉络',
      coreLinks: [
        { label: 'Study, Work Permits & Residence', labelZh: '留学、工签与长居全流程', href: '/guides/study-work-residence/' },
        { label: 'Digital Nomad Living in China', labelZh: '数字游民旅居中国实操矩阵', href: '/guides/digital-nomad-china/' },
        { label: 'Leaving China: Pension & Tax Closeout', labelZh: '离开中国终极收尾（退保/销卡/完税）', href: '/guides/leaving-china-closeout/' },
        { label: 'Renting, Banking & IIT Tax', labelZh: '租房避坑、银行开户与个税专项', href: '/guides/renting-banking-iit/' },
        { label: 'Driver’s License & Expat Family Life', labelZh: '临时/长期驾照换领与国际学校', href: '/guides/drivers-license-family/' },
      ],
      mostViewedTitle: 'Most Viewed & Expat Gaps',
      mostViewedTitleZh: '高频痛点与离境盲区',
      mostViewed: [
        { label: 'Work Permit Points & IIT Tax Calc', labelZh: '工签 A/B/C 积分与个税计算器', href: '/tools/tax-points-calc/', badge: 'Tool' },
        { label: '24-Hour Police Residence Form', labelZh: '24 小时境外人员住宿登记表图解', href: '/documents/temp-residence-reg/' },
        { label: 'Leaving China Social Security Refund', labelZh: '离境社保退保与税务清缴清单', href: '/guides/leaving-china-closeout/', badge: 'Gap' },
        { label: 'Digital Nomad 30-Day Stack', labelZh: '数字游民 30 天旅居工具包', href: '/stacks/digital-nomad-30-day/' },
      ],
      routesTitle: 'Live & Study Routes',
      routesTitleZh: '长居工具与路由',
      programmaticChips: [
        { label: '/tools/tax-points-calc/', labelZh: '/tools/ 积分个税算', href: '/tools/tax-points-calc/' },
        { label: '/documents/temp-residence-reg/', labelZh: '/documents/ 住宿登记表', href: '/documents/temp-residence-reg/' },
        { label: '/stacks/digital-nomad-30-day/', labelZh: '/stacks/ 游民清单包', href: '/stacks/digital-nomad-30-day/' },
        { label: '/cities/chengdu/', labelZh: '/cities/ 宜居城市中枢', href: '/cities/chengdu/' },
      ],
    },
    mostViewedTop: [
      { label: 'Work Permit Points & IIT Tax Calculator', labelZh: '外籍工签积分与个税速算器', href: '/tools/tax-points-calc/' },
      { label: 'Leaving China: Social Security & Bank Closeout', labelZh: '离开中国终极收尾：退保、完税与关户', href: '/guides/leaving-china-closeout/' },
      { label: 'Study, Work Permits & Residence Playbook', labelZh: '留学、工签与居留许可通关剧本', href: '/guides/study-work-residence/' },
      { label: 'Digital Nomad Cities & Connectivity Matrix', labelZh: '数字游民旅居城市与成本矩阵', href: '/guides/digital-nomad-china/' },
      { label: '24-Hour Temporary Residence Registration', labelZh: '境外人员临时住宿登记红框图解', href: '/documents/temp-residence-reg/' },
      { label: 'Renting Deposits, Banking & Remittance', labelZh: '租房押金合同、银行卡与购汇汇出', href: '/guides/renting-banking-iit/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Work Permits, Universities & Residence',
        titleZh: '来华留学、工作许可与居留登记',
        summary: 'CSC scholarships, Z-visa to residence permit timeline, Category A/B/C scoring, and 24-hour police filing.',
        summaryZh: '高校留学申请、Z 签换居留时间线、工签积分制与 24 小时派出所登记。',
        links: [
          { label: 'Study, Work Permits & Long-Term Stay', labelZh: '留学工签长居通关剧本', href: '/guides/study-work-residence/' },
          { label: 'Temporary Residence Registration Form', labelZh: '住宿登记表全图解', href: '/documents/temp-residence-reg/' },
          { label: 'Work Permit Points Calculator', labelZh: '工签积分与个税算', href: '/tools/tax-points-calc/' },
        ],
      },
      {
        number: '02',
        title: 'Renting, Banking, Tax & Digital Nomads',
        titleZh: '租房合同、银行购汇、个税与数字游民',
        summary: 'Standard lease red flags, bank branch setup, IIT deductions, and coworking-friendly Tier-2 hubs.',
        summaryZh: '租房合同排雷、银行开户与境外汇款、个税专项扣除及大理/成都/海南旅居对比。',
        links: [
          { label: 'Renting, Banking & IIT Tax Guide', labelZh: '租房购房、银行与个税指南', href: '/guides/renting-banking-iit/' },
          { label: 'Digital Nomad Living Matrix', labelZh: '数字游民旅居中国矩阵', href: '/guides/digital-nomad-china/' },
          { label: 'Digital Nomad 30-Day Stack', labelZh: '数字游民 30 天抄作业包', href: '/stacks/digital-nomad-30-day/' },
        ],
      },
      {
        number: '03',
        title: 'Driver’s License, Family & Clean Exit Closeout',
        titleZh: '驾照换领、随迁家庭与离境终极收尾',
        summary: 'Airport provisional permits, Subject-1 exam conversion, international schools, and pension/housing-fund withdrawal.',
        summaryZh: '临时驾驶许可与科目一换证、国际学校与永居、以及离华前退社保与公积金实操。',
        links: [
          { label: 'Leaving China Ultimate Closeout', labelZh: '离开中国终极收尾剧本', href: '/guides/leaving-china-closeout/' },
          { label: 'Driver’s License & Expat Family', labelZh: '驾照换领与外籍家庭生活', href: '/guides/drivers-license-family/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Tool 12.6 · Statutory Calc',
      kickerZh: '工具 12.6 · 规则测算',
      title: 'Work Permit Points & IIT Tax Calculator',
      titleZh: '工签积分与个人所得税速算',
      desc: 'Estimate Foreigner Work Permit tier (A ≥ 85, B ≥ 60) and monthly mainland China IIT withholding.',
      descZh: '即时测算来华工作许可 A/B/C 分类积分与月度综合所得个人所得税。',
      ctaLabel: 'Open Points & Tax Calc',
      ctaLabelZh: '打开积分个税计算器',
      href: '/tools/tax-points-calc/',
    },
    sidebarStacks: [
      { label: 'Digital Nomad 30-Day China Stack', labelZh: '数字游民 30 天旅居包', href: '/stacks/digital-nomad-30-day/' },
      { label: 'First-Time China 10-Day Stack', labelZh: '首次来华 10 天工具包', href: '/stacks/first-time-china-10-day/' },
    ],
    databases: [
      { label: 'Points & Tax Calc /tools/', labelZh: '积分个税算 /tools/', href: '/tools/tax-points-calc/' },
      { label: 'Registration Forms /documents/', labelZh: '登记表格 /documents/', href: '/documents/temp-residence-reg/' },
      { label: 'Nomad Stack /stacks/', labelZh: '游民清单包 /stacks/', href: '/stacks/digital-nomad-30-day/' },
      { label: 'City Hubs /cities/', labelZh: '宜居城市 /cities/chengdu/', href: '/cities/chengdu/' },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    nameZh: '商务采购',
    shortDesc: 'USCC due diligence, Canton Fair, GB & sourcing',
    shortDescZh: '18 位 USCC 尽调、广交会验厂、国标合规与源头打样',
    h1: 'Business & Sourcing — Supplier Due Diligence, GB Standards & Trade Fairs',
    h1Zh: '商务采购 — 供应商尽调、广交会验厂、国标合规与柔性打样',
    lead: 'Law-firm due diligence precision for global buyers and founders: verify 18-digit USCC numbers on GSXT, decode company chops, navigate Canton Fair & Yiwu, and check CCC / GB product compliance.',
    leadZh: '《律所尽调》专业条款体：提供 18 位统一社会信用代码（USCC）校验与 WAF 官网双栏引导、公章法务红线、广交会验厂与百件柔性打样实操。',
    persona: 'legal',
    personaLabel: 'Law-Firm Due Diligence · Compliance',
    personaLabelZh: '《律所尽调》专业条款体',
    megaMenu: {
      coreTitle: 'Sourcing & Compliance',
      coreTitleZh: '商务与合规脉络',
      coreLinks: [
        { label: 'Factory Sourcing & Due Diligence', labelZh: '来华商务、广交会与验厂尽调', href: '/guides/factory-sourcing-due-diligence/' },
        { label: 'Small-Batch 100-Unit & Reverse Sourcing', labelZh: '百件柔性打样与反向海淘指南', href: '/guides/flexible-sourcing-reverse-haul/' },
        { label: 'Company Chops & Contract Law Traps', labelZh: '商务公章、合同签约与法务红线', href: '/guides/company-chops-contracts/' },
        { label: 'Buying Electronics: 5 Hard Red Lines', labelZh: '华强北与买电子产品 5 条红线', href: '/guides/buying-electronics-red-lines/' },
        { label: 'WFOE Setup & Cross-Border Trade', labelZh: '外企设立（WFOE）与跨境收结汇', href: '/guides/wfoe-cross-border-setup/' },
      ],
      mostViewedTitle: 'Most Viewed & WAF Verification',
      mostViewedTitleZh: '高频尽调与官方核验',
      mostViewed: [
        { label: '18-Digit USCC & GSXT Verification Guide', labelZh: '18 位 USCC 校验与 GSXT 官网核验', href: '/compliance/uscc-gsxt-lookup/', badge: 'WAF Guide' },
        { label: 'CCC (3C) Compulsory Certification Lookup', labelZh: 'CNCA 3C 强制认证双栏引导台', href: '/compliance/ccc-3c-certification/' },
        { label: 'NMPA Cosmetics & Medical Device Registry', labelZh: 'NMPA 药监局器械/化妆品核验', href: '/compliance/nmpa-cosmetics-medical/' },
        { label: 'Remote Sourcing Without Flying to China', labelZh: '无需来华：远程验厂与尽调专题', href: '/for/remote-sourcing/' },
      ],
      routesTitle: 'Compliance & Data Routes',
      routesTitleZh: '尽调与工具直达',
      programmaticChips: [
        { label: '/compliance/ WAF Guides', labelZh: '/compliance/ 合规核验', href: '/compliance/uscc-gsxt-lookup/' },
        { label: '/tools/uscc-gb-matcher/', labelZh: '/tools/ USCC国标查', href: '/tools/uscc-gb-matcher/' },
        { label: '/stacks/canton-fair-buyer-kit/', labelZh: '/stacks/ 广交会买手包', href: '/stacks/canton-fair-buyer-kit/' },
        { label: '/for/remote-sourcing/', labelZh: '/for/ 远程采购专题', href: '/for/remote-sourcing/' },
        { label: '/portals/ 848 Gov Data', labelZh: '/portals/ 848政务源', href: '/portals/' },
      ],
    },
    mostViewedTop: [
      { label: '18-Digit USCC Checksum & GSXT WAF Guide', labelZh: '18 位 USCC 校验器与国家企信网引导', href: '/compliance/uscc-gsxt-lookup/' },
      { label: 'Factory Sourcing & Canton Fair Playbook', labelZh: '来华商务、广交会与验厂尽调剧本', href: '/guides/factory-sourcing-due-diligence/' },
      { label: 'Small-Batch 100-Unit & Reverse Haul Guide', labelZh: '百件柔性打样与反向海淘实操', href: '/guides/flexible-sourcing-reverse-haul/' },
      { label: 'Company Chops (公章) & Contract Enforceability', labelZh: '公司公章、合同章与签约法务红线', href: '/guides/company-chops-contracts/' },
      { label: 'CCC (3C) & GB Standards Compliance Desk', labelZh: 'CCC 强制认证与 2,913 外文国标核验', href: '/compliance/ccc-3c-certification/' },
      { label: 'Remote Supplier Due Diligence Hub', labelZh: '无需来华：远程供应商尽调专题', href: '/for/remote-sourcing/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Supplier Due Diligence & Official WAF Registries',
        titleZh: '供应商尽调与国家部委双栏核验台',
        summary: 'Validate 18-digit USCC check digits locally and follow annotated walkthroughs for WAF-protected GSXT, CNCA, and NMPA portals.',
        summaryZh: '本地实时校验 18 位 USCC 校验码，配双栏中文检索词转换与 GSXT/CNCA/NMPA 官网图文指引。',
        links: [
          { label: 'USCC & GSXT Official Verification Desk', labelZh: 'USCC 与国家企信网双栏引导', href: '/compliance/uscc-gsxt-lookup/' },
          { label: 'CCC (3C) Certification Verification', labelZh: '3C 强制认证核验引导', href: '/compliance/ccc-3c-certification/' },
          { label: 'NMPA Medical & Cosmetics Lookup', labelZh: 'NMPA 器械与化妆品核验', href: '/compliance/nmpa-cosmetics-medical/' },
        ],
      },
      {
        number: '02',
        title: 'Trade Fairs, Industrial Belts & Small-Batch OEM',
        titleZh: '广交会、百大产业带与小单柔性打样',
        summary: 'Canton Fair buyer badges, Shenzhen electronics sourcing, Yiwu markets, and 100-unit prototyping workflows.',
        summaryZh: '广交会采购商证办理、华强北采购红线、义乌与百件柔性打样对接流程。',
        links: [
          { label: 'Factory Sourcing & Canton Fair Playbook', labelZh: '广交会与工厂实地验厂剧本', href: '/guides/factory-sourcing-due-diligence/' },
          { label: 'Small-Batch 100-Unit & Reverse Haul', labelZh: '百件柔性打样与反向海淘', href: '/guides/flexible-sourcing-reverse-haul/' },
          { label: '5 Red Lines Buying Electronics', labelZh: '买电子产品 5 条硬红线', href: '/guides/buying-electronics-red-lines/' },
        ],
      },
      {
        number: '03',
        title: 'Company Chops, Contracts & WFOE Setup',
        titleZh: '商务公章、中英合同与外企设立',
        summary: 'Why the red round official chop beats signatures in PRC courts, NNN agreements, and WFOE registration basics.',
        summaryZh: '公章高于签字的法律效力、NNN 保密协议要点与外商独资企业设立路径。',
        links: [
          { label: 'Company Chops & Contract Law', labelZh: '商务公章与合同防坑指南', href: '/guides/company-chops-contracts/' },
          { label: 'WFOE Setup & Cross-Border Payments', labelZh: '外企设立与跨境收付合规', href: '/guides/wfoe-cross-border-setup/' },
          { label: 'Canton Fair Buyer Stack', labelZh: '广交会买手行前工具包', href: '/stacks/canton-fair-buyer-kit/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Tool 12.7 · Checksum + GB',
      kickerZh: '工具 12.7 · 信用国标查',
      title: 'USCC Validator & GB Standards Matcher',
      titleZh: '18 位 USCC 校验与国标检索词生成',
      desc: 'Verify GB 32100-2015 check digits on any Chinese supplier license and translate English product terms into standard Chinese regulatory queries.',
      descZh: '按 GB 32100-2015 实时校验 18 位信用代码，并将英文品名转换为标准中文监管检索词。',
      ctaLabel: 'Open USCC & GB Matcher',
      ctaLabelZh: '打开信用国标校验台',
      href: '/tools/uscc-gb-matcher/',
    },
    sidebarStacks: [
      { label: 'Canton Fair & Factory Audit Stack', labelZh: '广交会与验厂买手工具包', href: '/stacks/canton-fair-buyer-kit/' },
      { label: 'Remote Sourcing Without Flying', labelZh: '无需来华远程采购尽调包', href: '/for/remote-sourcing/' },
    ],
    databases: [
      { label: 'USCC & GSXT /compliance/', labelZh: 'USCC尽调 /compliance/', href: '/compliance/uscc-gsxt-lookup/' },
      { label: '3C Cert /compliance/', labelZh: '3C认证 /compliance/', href: '/compliance/ccc-3c-certification/' },
      { label: 'USCC Matcher /tools/', labelZh: '信用国标查 /tools/', href: '/tools/uscc-gb-matcher/' },
      { label: '848 Gov Portals /portals/', labelZh: '848政务源 /portals/', href: '/portals/' },
    ],
  },
];

export const PILLAR_BY_ID: Record<PillarId, PillarConfig> = Object.fromEntries(
  PILLARS.map((p) => [p.id, p]),
) as Record<PillarId, PillarConfig>;

export interface ToolDockItem {
  slug: string;
  code: string;
  group: 'deterministic' | 'micro';
  name: string;
  nameZh: string;
  shortDesc: string;
  shortDescZh: string;
  href: string;
}

export const UTILITY_TOOLS: ToolDockItem[] = [
  {
    slug: 'visa-checker',
    code: '12.1',
    group: 'deterministic',
    name: '240h Visa-Free Checker',
    nameZh: '240h 免签判定器',
    shortDesc: 'Unilateral 30-day & 240h cross-province transit eligibility by passport.',
    shortDescZh: '按护照与联程票实时判定 30 天免签或 240h 过境资格。',
    href: '/tools/visa-checker/',
  },
  {
    slug: 'station-taxi-cards',
    code: '12.2',
    group: 'deterministic',
    name: 'Station & Taxi Cards',
    nameZh: '防走错车站与打车字卡',
    shortDesc: 'Fullscreen high-contrast show-to-driver cards with wrong-station alerts.',
    shortDescZh: '全屏高对比出租车出示卡，标红同名防走错车站。',
    href: '/tools/station-taxi-cards/',
  },
  {
    slug: 'ticket-calendar',
    code: '12.3',
    group: 'deterministic',
    name: 'Ticket Release Calendar',
    nameZh: '放票时区换算日历',
    shortDesc: 'Convert 12306 15-day & Forbidden City 7-day BJT drops to your local time.',
    shortDescZh: '高铁 15 天 / 故宫 7 天北京时间放票窗口一键转本地时区。',
    href: '/tools/ticket-calendar/',
  },
  {
    slug: 'medical-sos-cards',
    code: '12.4',
    group: 'deterministic',
    name: 'Medical & Allergy SOS Cards',
    nameZh: '过敏与急救亮屏字卡',
    shortDesc: 'Kitchen-ready peanut oil allergy, dietary, and 120 emergency show cards.',
    shortDescZh: '防花生油过敏、清真忌口与 120 急救超大字亮屏卡。',
    href: '/tools/medical-sos-cards/',
  },
  {
    slug: 'budget-calculator',
    code: '12.5',
    group: 'deterministic',
    name: 'Budget & Tax Refund Calc',
    nameZh: '预算与离境退税 2.0 算',
    shortDesc: 'Trip budget breakdown plus 11% / 9% departure VAT refund estimator.',
    shortDescZh: '估算日均旅行预算与满 200 元 11% / 9% 离境退税净额。',
    href: '/tools/budget-calculator/',
  },
  {
    slug: 'tax-points-calc',
    code: '12.6',
    group: 'deterministic',
    name: 'Work Permit Points & IIT Calc',
    nameZh: '工签积分与个税计算器',
    shortDesc: 'Foreigner Work Permit A/B/C score & mainland monthly IIT estimate.',
    shortDescZh: '外籍工作许可 A/B/C 积分测算与月度综合所得个税估算。',
    href: '/tools/tax-points-calc/',
  },
  {
    slug: 'uscc-gb-matcher',
    code: '12.7',
    group: 'deterministic',
    name: 'USCC & GB Matcher',
    nameZh: '18 位信用码与国标检索',
    shortDesc: 'Validate GB 32100-2015 supplier USCC digits & map Chinese GB queries.',
    shortDescZh: '实时校验供应商 18 位 USCC 并生成中文监管国标检索词。',
    href: '/tools/uscc-gb-matcher/',
  },
  {
    slug: 'jin-size-converter',
    code: 'M1',
    group: 'micro',
    name: 'Jin / Liang & Size Converter',
    nameZh: '斤两、码数与鞋码换算',
    shortDesc: 'Convert 斤 (500g), 两 (50g), CN shoe/apparel sizes, and °C/°F instantly.',
    shortDescZh: '市斤/两、中国男女装尺码、鞋码与摄氏度即时换算。',
    href: '/tools/jin-size-converter/',
  },
  {
    slug: 'wan-yi-converter',
    code: 'M2',
    group: 'micro',
    name: 'Wan / Yi Number Converter',
    nameZh: '万 / 亿中英大数换算',
    shortDesc: 'Never misread 万 (10k) or 亿 (100M) on Chinese real estate & supplier quotes.',
    shortDescZh: '一眼转换中文“万/亿”与英文 Thousand / Million / Billion。',
    href: '/tools/wan-yi-converter/',
  },
  {
    slug: 'hanzi-tattoo-check',
    code: 'M3',
    group: 'micro',
    name: 'Hanzi Tattoo Red-Flag Check',
    nameZh: '汉字纹身防雷检测',
    shortDesc: 'Check common English-to-Hanzi tattoo pitfalls, broken idioms & tone traps.',
    shortDescZh: '排查常见错误直译、词义倒挂与生造汉字纹身雷区。',
    href: '/tools/hanzi-tattoo-check/',
  },
  {
    slug: 'chinese-name',
    code: 'M4',
    group: 'micro',
    name: 'Chinese Name Studio',
    nameZh: '中文起名工坊',
    shortDesc: 'Generate natural 2–3 character Chinese names with pinyin & cultural meaning.',
    shortDescZh: '根据音韵与寓意偏好生成自然地道的 2–3 字中文名。',
    href: '/tools/chinese-name/',
  },
];

export interface CommandIndexItem {
  title: string;
  titleZh: string;
  subtitle: string;
  subtitleZh: string;
  kind: 'Guide' | 'Entity' | 'Tool' | 'Card' | 'Rescue' | 'Compare' | 'Data';
  href: string;
  keywords: string;
}

export const COMMAND_PALETTE_INDEX: CommandIndexItem[] = [
  {
    title: 'Does Google Maps Work in China?',
    titleZh: 'Google Maps 在中国能用吗？替代方案',
    subtitle: 'GCJ-02 offset explained · Use Amap (高德) or Apple Maps',
    subtitleZh: 'GCJ-02 偏移解析 · 推荐高德地图英文版或 Apple Maps',
    kind: 'Entity',
    href: '/in-china/google-maps/',
    keywords: 'google maps amap gaode apple maps gcj-02 navigation gps blocked',
  },
  {
    title: 'Adderall & Prescription Meds Entry Rules',
    titleZh: 'Adderall 与处方药入境合规红线',
    subtitle: 'Controlled psychotropics · Customs declaration & doctor letter rules',
    subtitleZh: '精神管制类药物严查提醒 · 申报与替代方案',
    kind: 'Entity',
    href: '/in-china/adderall/',
    keywords: 'adderall ritalin adhd prescription medicine customs drug illegal',
  },
  {
    title: 'Beijing Qinghe Station Taxi Card (清河站)',
    titleZh: '北京清河站防走错亮屏司机卡',
    subtitle: 'Fullscreen high-contrast card · High-speed train to Badaling Great Wall',
    subtitleZh: '去八达岭长城动车始发站 · 全屏超大字出示司机',
    kind: 'Card',
    href: '/cards/taxi-beijing-qinghe/',
    keywords: '清河站 qinghe station taxi driver card badaling great wall beijing',
  },
  {
    title: '18-Digit USCC Validator & GSXT Guide',
    titleZh: '18 位 USCC 校验器与国家企信网尽调',
    subtitle: 'Check supplier license checksum & bypass WAF confusion safely',
    subtitleZh: '校验供应商统一社会信用代码 · 双栏官网核验台',
    kind: 'Tool',
    href: '/tools/uscc-gb-matcher/',
    keywords: 'uscc gsxt supplier factory due diligence business license 18 digit gb',
  },
  {
    title: 'WeChat Account Restricted? Visual Rescue',
    titleZh: '微信账号受限/封号全图解救火',
    subtitle: 'Red-box annotated Chinese screens & unblock checklist',
    subtitleZh: '中文报错截图红框标注 · 分步申诉解封指南',
    kind: 'Rescue',
    href: '/errors/wechat-restricted/',
    keywords: 'wechat restricted blocked frozen error rescue friend verify',
  },
  {
    title: '240-Hour Visa-Free Transit Checker',
    titleZh: '240 小时过境免签实时判定器',
    subtitle: 'Check 30-day unilateral & 240h A→China→C transit eligibility',
    subtitleZh: '按护照与联程票 10 秒测算免签与过境规则',
    kind: 'Tool',
    href: '/tools/visa-checker/',
    keywords: '240h visa free transit checker passport ports 30 day nia',
  },
  {
    title: 'Peanut Oil & Severe Allergy Kitchen Card',
    titleZh: '防花生油与重度过敏后厨亮屏字卡',
    subtitle: 'Fullscreen yellow-on-black Chinese warning + audio pronunciation',
    subtitleZh: '纯黑底亮黄超大字 · 餐厅后厨出示防误用花生油',
    kind: 'Card',
    href: '/cards/peanut-allergy-sos/',
    keywords: 'peanut allergy nut oil restaurant kitchen sos card medical',
  },
  {
    title: 'Shanghai City Hub (MCA 310000)',
    titleZh: '上海城市空间中枢 (310000)',
    subtitle: 'PVG/SHA 240h ports, city walks, universities & international hospitals',
    subtitleZh: '浦东/虹桥 240h 口岸、街区老字号、高校与涉外国际医院',
    kind: 'Entity',
    href: '/cities/shanghai/',
    keywords: 'shanghai 310000 pvg pudong bund city hub hospitals universities',
  },
  {
    title: '72-Hour Pre-Departure Playbook',
    titleZh: '首次来华 72 小时行前通关剧本',
    subtitle: 'Step-by-step countdown: visa, Alipay/WeChat, eSIM, 12306 & cards',
    subtitleZh: '4 步倒计时剧本：免签、绑外卡、eSIM 与生存字卡',
    kind: 'Guide',
    href: '/guides/72h-pre-departure/',
    keywords: '72h pre departure checklist first time trip china playbook',
  },
  {
    title: 'Alipay vs. WeChat Pay for Foreigners',
    titleZh: '支付宝 vs 微信支付（外卡实测横评）',
    subtitle: '200 RMB fee-free limit, Wise/Chase card acceptance & verdict',
    subtitleZh: '200 元免手续费红线、Chase/Wise 外卡绑定实测结论',
    kind: 'Compare',
    href: '/compare/alipay-vs-wechat-pay/',
    keywords: 'alipay wechat pay chase wise visa mastercard 200 rmb cashless',
  },
  {
    title: '848 Government Open Data & MCP Center',
    titleZh: '848 政务公开数据源与 MCP 接入中心',
    subtitle: 'Copy Claude/Cursor MCP config & browse HTTP 200 vs WAF portals',
    subtitleZh: '一键复制 MCP 配置 · 检索部委直连与 WAF 备用官方源',
    kind: 'Data',
    href: '/portals/',
    keywords: 'mcp 848 gov open data api portals claude cursor waf',
  },
  {
    title: 'China Medical & Dental Checkup Guide',
    titleZh: '来华体检、看牙与国际医疗旅游指南',
    subtitle: 'Real pricing, international clinic departments & booking flow',
    subtitleZh: '三甲国际部体检/看牙真实费用区间与预约流程',
    kind: 'Guide',
    href: '/guides/medical-dental-checkup/',
    keywords: 'medical dental checkup hospital teeth health tourism china',
  },
  {
    title: 'Multi-Facet Explorer (All 10 Collections)',
    titleZh: '多维分面探索器（全站 10 集合聚合）',
    subtitle: 'Filter by province, season, foreign-card friendly & no +86 phone',
    subtitleZh: '按空间、时令、外卡友好、免 +86 手机号与 Tier-A 正交筛选',
    kind: 'Data',
    href: '/explore/',
    keywords: 'explore filter facets no +86 foreign card wheelchair',
  },
  {
    title: 'Ground Pulse Live Field Reports',
    titleZh: '全站现场实测流（Ground Pulse）',
    subtitle: 'Worked / Partial / Failed field status & 10-second submission',
    subtitleZh: '近期口岸、刷卡、eSIM 实测反馈与 10 秒提交',
    kind: 'Data',
    href: '/pulse/',
    keywords: 'ground pulse worked failed live status esim pvg metro',
  },
];
