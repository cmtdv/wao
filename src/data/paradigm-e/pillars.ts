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
  badgeZh?: string;
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
    h1: 'China Atlas — Systems, Economy & Modern Reality',
    h1Zh: '中国全景图谱 — 制度、经济与科技基建',
    lead: 'Source-verified briefings on how China is governed, built, and digitized, with official statistics and practical context.',
    leadZh: '基于官方数据与公开档案，系统梳理现代中国的治理结构、基础设施、产业带与科技生态。',
    persona: 'analyst',
    personaLabel: 'Fact Briefings',
    personaLabelZh: '国情与数据',
    megaMenu: {
      coreTitle: 'Core Topics',
      coreTitleZh: '核心主题',
      coreLinks: [
        { label: 'China at a Glance & Holidays', labelZh: '国家概览与法定调休', href: '/guides/china-statutory-holidays/' },
        { label: 'Modern China 24h Infrastructure', labelZh: '当代中国 24 小时科技奇观', href: '/guides/modern-china-24h/' },
        { label: 'Myths vs. Verified Facts', labelZh: '关于中国的常见误解与事实', href: '/guides/myths-vs-facts/' },
        { label: 'AI, Robotics & Open-Source Stack', labelZh: '硬件极客与开源 AI 工具栈', href: '/guides/hardware-open-ai-stack/' },
        { label: 'Full Topic Index', labelZh: '全站主题索引', href: '/atlas/#taxonomy-12x97' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '常看内容',
      mostViewed: [
        { label: 'Monthly Policy Changelog', labelZh: '入境与商旅政策月度变更', href: '/guides/policy-changelog/', badge: 'Updated', badgeZh: '已更新' },
        { label: 'How China Admin Divisions Work', labelZh: '五级行政区划与地市编码', href: '/guides/admin-governance-map/' },
        { label: 'Smart EVs & Clean Energy Grid', labelZh: '智能电车与清洁能源网络', href: '/guides/smart-evs-clean-energy/' },
        { label: 'Official Statistics & Laws', labelZh: '统计局与国家法律法规库', href: '/portals/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'Gov Open Data', labelZh: '政务公开数据', href: '/portals/' },
        { label: 'Topic Explorer', labelZh: '多维筛选', href: '/explore/' },
        { label: 'All Guides', labelZh: '全部深度指南', href: '/guides/' },
        { label: 'Dispatches', labelZh: '深度文章', href: '/posts/' },
        { label: 'AI Data API', labelZh: 'AI 数据接入', href: '/portals/#mcp-setup' },
      ],
    },
    mostViewedTop: [
      { label: 'Modern China 24h: Mega-Infra & Tech', labelZh: '当代中国 24 小时：基建与科技', href: '/guides/modern-china-24h/' },
      { label: '10 Western Myths About China, Decoded', labelZh: '关于中国的十个常见误解', href: '/guides/myths-vs-facts/' },
      { label: 'Monthly Entry & Business Policy Log', labelZh: '中国入境与商旅政策月度变更', href: '/guides/policy-changelog/' },
      { label: 'Hardware Geeks & Open-Source China AI', labelZh: '硬件极客与开源 AI 生态', href: '/guides/hardware-open-ai-stack/' },
      { label: 'Statutory Holidays & Crowd Calendar', labelZh: '法定节假日调休与拥挤度日历', href: '/guides/china-statutory-holidays/' },
      { label: 'Verified Gov Open Data Portals', labelZh: '实测政务公开数据源目录', href: '/portals/' },
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
      kicker: 'Open Data',
      kickerZh: '开放数据',
      title: 'Connect ChinaWao MCP Server',
      titleZh: '接入官方公开数据服务',
      desc: 'Query 848 government portals, verified guides, and visa rules directly from Claude, Cursor, or ChatGPT.',
      descZh: '在 Claude、Cursor 或 ChatGPT 中直接查询 848 个政务数据源、实用指南与免签规则。',
      ctaLabel: 'Open Data Hub',
      ctaLabelZh: '进入数据中心',
      href: '/portals/',
    },
    sidebarStacks: [
      { label: 'China Fact-Checkers & Journalists Kit', labelZh: '涉华研究与核查清单', href: '/stacks/canton-fair-buyer-kit/' },
      { label: 'First-Time China 10-Day Kit', labelZh: '首次来华 10 天行程清单', href: '/stacks/first-time-china-10-day/' },
    ],
    databases: [
      { label: 'Gov Open Data Portals', labelZh: '政务公开数据源', href: '/portals/' },
      { label: 'Topic Explorer', labelZh: '多维筛选', href: '/explore/' },
      { label: 'City Guides', labelZh: '城市指南', href: '/cities/shanghai/' },
      { label: 'Field Reports', labelZh: '现场实测', href: '/pulse/' },
      { label: 'Dispatches', labelZh: '深度文章', href: '/posts/' },
    ],
  },
  {
    id: 'places',
    name: 'Places',
    nameZh: '山河城市',
    shortDesc: 'Cities, UNESCO sites, routes & local walks',
    shortDescZh: '城市指南、热门景点、高铁双城与周边步行',
    h1: 'Places — Cities, Landmarks & Intercity Routes',
    h1Zh: '山河城市 — 重点城市、景点预约与双城交通',
    lead: 'Practical city guides with local ticket release times, station warnings, and walkable neighborhoods.',
    leadZh: '汇总重点城市的口岸信息、景区跨时区放票时间、同名火车站防走错提醒与周边老字号步行路线。',
    persona: 'editorial',
    personaLabel: 'Destinations',
    personaLabelZh: '目的地',
    megaMenu: {
      coreTitle: 'Cities',
      coreTitleZh: '重点城市',
      coreLinks: [
        { label: 'Shanghai City Guide', labelZh: '上海城市指南', href: '/cities/shanghai/' },
        { label: 'Beijing City Guide', labelZh: '北京城市指南', href: '/cities/beijing/' },
        { label: 'Chengdu City Guide', labelZh: '成都城市指南', href: '/cities/chengdu/' },
        { label: 'Xi’an City Guide', labelZh: '西安城市指南', href: '/cities/xian/' },
        { label: 'Shenzhen City Guide', labelZh: '深圳城市指南', href: '/cities/shenzhen/' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '常看内容',
      mostViewed: [
        { label: 'Top Attractions, Great Wall & Panda Ranking', labelZh: '热门景点、长城与熊猫基地对比', href: '/guides/top-attractions-ranking/', badge: 'Popular', badgeZh: '热门' },
        { label: 'Black Myth: Wukong Shanxi Architecture Trail', labelZh: '从《黑神话》到山西古建巡礼', href: '/guides/black-myth-shanxi/' },
        { label: 'Badaling vs. Mutianyu Great Wall', labelZh: '八达岭与慕田峪长城对比', href: '/compare/badaling-vs-mutianyu/' },
        { label: 'Beijing → Shanghai HSR vs Flight', labelZh: '北京到上海：高铁与民航对比', href: '/routes/beijing-to-shanghai/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'Cities', labelZh: '城市指南', href: '/cities/shanghai/' },
        { label: 'Attractions', labelZh: '热门景点', href: '/attractions/forbidden-city/' },
        { label: 'Intercity Routes', labelZh: '双城交通', href: '/routes/beijing-to-shanghai/' },
        { label: 'Comparisons', labelZh: '景点对比', href: '/compare/badaling-vs-mutianyu/' },
      ],
    },
    mostViewedTop: [
      { label: 'Forbidden City Ticket Drop & Entry Rules', labelZh: '故宫博物院：提前 7 天 20:00 放票攻略', href: '/attractions/forbidden-city/' },
      { label: 'Top Attractions, Great Wall & Ancient Towns', labelZh: '热门景点抢票与长城、熊猫、古镇对比', href: '/guides/top-attractions-ranking/' },
      { label: 'Shanghai Complete City Guide', labelZh: '上海完整城市指南', href: '/cities/shanghai/' },
      { label: 'Black Myth: Wukong Shanxi Timber Trail', labelZh: '从《黑神话》到山西古建巡礼', href: '/guides/black-myth-shanxi/' },
      { label: 'Badaling vs. Mutianyu Great Wall Verdict', labelZh: '八达岭与慕田峪长城怎么选', href: '/compare/badaling-vs-mutianyu/' },
      { label: 'Beijing to Shanghai: HSR vs. Flight vs. Sleeper', labelZh: '北京到上海：高铁、民航与动卧全对比', href: '/routes/beijing-to-shanghai/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Major City Guides',
        titleZh: '重点城市指南',
        summary: 'Each city page brings together 240h ports, city walks, heritage eateries, universities, and international hospitals.',
        summaryZh: '一城聚合过境口岸、街区漫步、百年老字号、高校与涉外医院实用信息。',
        links: [
          { label: 'Shanghai', labelZh: '上海', href: '/cities/shanghai/' },
          { label: 'Beijing', labelZh: '北京', href: '/cities/beijing/' },
          { label: 'Chengdu', labelZh: '成都', href: '/cities/chengdu/' },
          { label: 'Xi’an', labelZh: '西安', href: '/cities/xian/' },
          { label: 'Shenzhen', labelZh: '深圳', href: '/cities/shenzhen/' },
        ],
      },
      {
        number: '02',
        title: 'Flagship Attractions & Nearby Walks',
        titleZh: '热门景点预约与周边步行',
        summary: 'Timezone-converted booking timers, Monday closure alerts, wrong-station traps, and verified Amap Chinese search terms.',
        summaryZh: '跨时区放票换算、周一闭馆提醒、同名防走错车站提示与高德中文搜索词一键复制。',
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
        titleZh: '经典路线与高铁跨境走廊',
        summary: 'Door-to-door city comparisons and overland rail crossings across Hong Kong, Laos, and Greater Bay Area.',
        summaryZh: '市中心到市中心门到门耗时对比，以及西九龙、中老铁路等陆路跨境实操。',
        links: [
          { label: 'Beijing → Shanghai Rail vs. Air', labelZh: '北京到上海交通对比', href: '/routes/beijing-to-shanghai/' },
          { label: 'Hong Kong → Guangzhou Express', labelZh: '香港西九龙到广州南', href: '/routes/hong-kong-to-guangzhou/' },
          { label: 'China Overland Rail Crossings', labelZh: '中国陆路跨境铁路与口岸', href: '/guides/overland-rail-crossings/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Release Timer',
      kickerZh: '放票换算',
      title: 'Ticket Release & Timezone Converter',
      titleZh: '景区与 12306 跨时区放票日历',
      desc: 'Convert Beijing 20:00 Forbidden City drops and 15-day Railway 12306 windows to your exact local timezone.',
      descZh: '将故宫提前 7 天 20:00 与高铁 15 天预售期自动换算为您所在地的本地抢票时刻。',
      ctaLabel: 'Open Ticket Calendar',
      ctaLabelZh: '打开放票日历',
      href: '/tools/ticket-calendar/',
    },
    sidebarStacks: [
      { label: 'First-Time China 10-Day Kit', labelZh: '首次来华 10 天行程清单', href: '/stacks/first-time-china-10-day/' },
      { label: 'Family With Kids China Guide', labelZh: '亲子家庭来华精选指南', href: '/for/family-with-kids/' },
    ],
    databases: [
      { label: 'City Guides', labelZh: '城市指南', href: '/cities/shanghai/' },
      { label: 'Attractions', labelZh: '热门景点', href: '/attractions/forbidden-city/' },
      { label: 'Intercity Routes', labelZh: '双城交通', href: '/routes/beijing-to-shanghai/' },
      { label: 'Comparisons', labelZh: '对比评测', href: '/compare/badaling-vs-mutianyu/' },
    ],
  },
  {
    id: 'culture',
    name: 'Culture',
    nameZh: '饮食人文',
    shortDesc: 'Food, 6 teas, heritage, wellness & living arts',
    shortDescZh: '饮食六大茶类、非遗民俗、中医养生与当代生活',
    h1: 'Culture & Living China — Food, Tea, Folk Arts & Everyday Rituals',
    h1Zh: '饮食与人文 — 八大菜系、六大茶类、民俗与当代生活',
    lead: 'Practical guides to Chinese kitchens, gongfu tea tables, 24-hour bathhouses, mahjong rooms, iron-flower performances, and everyday social norms.',
    leadZh: '结合实用点单公式与常见礼仪，带您了解八大菜系、六大茶类、打铁花、麻将棋牌与中式养生日常。',
    persona: 'editorial',
    personaLabel: 'Food & Culture',
    personaLabelZh: '饮食与人文',
    megaMenu: {
      coreTitle: 'Culinary & Heritage Guides',
      coreTitleZh: '饮食与人文主题',
      coreLinks: [
        { label: 'Chinese Food & Six Tea Categories', labelZh: '中华饮食地图与六大茶类', href: '/guides/chinese-tea-6-types/' },
        { label: 'Iron Flower & Living Folk Arts', labelZh: '打铁花、英歌舞与活态民俗', href: '/guides/living-folk-arts/' },
        { label: 'Mahjong & Chinese Board Universe', labelZh: '麻将、掼蛋与中式棋牌', href: '/guides/mahjong-board-universe/' },
        { label: 'Shanghuo, Dampness & TCM Wellness', labelZh: '中式养生与城市汤泉指南', href: '/guides/tcm-wellness-bathhouses/' },
        { label: 'Annual 12-Month Festival Calendar', labelZh: '中国年度 12 月节庆日历', href: '/guides/annual-events-calendar/' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '常看内容',
      mostViewed: [
        { label: 'Peanut Allergy & Dietary SOS Cards', labelZh: '防花生油与过敏后厨亮屏卡', href: '/cards/peanut-allergy-sos/', badge: 'SOS', badgeZh: '急救' },
        { label: 'Chinese Tattoo & Hanzi Red-Flag Checker', labelZh: '汉字纹身防雷与中文起名', href: '/tools/hanzi-tattoo-check/' },
        { label: 'Dining Etiquette & 1,422 Time-Honored Brands', labelZh: '合餐礼仪与中华老字号', href: '/guides/dining-etiquette-old-brands/' },
        { label: 'Mandarin Survival Phrases & Pinyin Audio', labelZh: '落地必认汉字与点单短语', href: '/guides/mandarin-survival-kit/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'Dietary Cards', labelZh: '饮食过敏字卡', href: '/cards/peanut-allergy-sos/' },
        { label: 'Peanut Allergy Guide', labelZh: '花生过敏专题', href: '/for/peanut-allergy/' },
        { label: 'Hanzi Tattoo Check', labelZh: '汉字纹身防雷', href: '/tools/hanzi-tattoo-check/' },
        { label: 'Chinese Name Studio', labelZh: '中文起名工坊', href: '/tools/chinese-name/' },
      ],
    },
    mostViewedTop: [
      { label: 'Chinese Food, 8 Cuisines & 6 Tea Types', labelZh: '中华饮食八大菜系与六大茶类全图鉴', href: '/guides/chinese-tea-6-types/' },
      { label: 'Peanut Oil & Severe Allergy Kitchen Card', labelZh: '防花生油与重度过敏后厨亮屏字卡', href: '/cards/peanut-allergy-sos/' },
      { label: '“Shanghuo”, Dampness & 24h Bathhouse Spas', labelZh: '中式养生观念与 24 小时汤泉洗浴', href: '/guides/tcm-wellness-bathhouses/' },
      { label: 'Iron Flower, Yingge Dance & Living Folk Arts', labelZh: '打铁花、社火与活态民俗日历', href: '/guides/living-folk-arts/' },
      { label: 'Mahjong & Chinese Parlor Game Universe', labelZh: '麻将与中式棋牌入门', href: '/guides/mahjong-board-universe/' },
      { label: 'Annual 12-Month Events & Harvest Calendar', labelZh: '中国年度 12 月节庆与赏花日历', href: '/guides/annual-events-calendar/' },
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
        summaryZh: '中式养生观念、24 小时汤泉洗浴流程、生存中文与汉字纹身防雷。',
        links: [
          { label: 'Shanghuo, TCM & 24h Bathhouses', labelZh: '中式养生与 24 小时汤泉', href: '/guides/tcm-wellness-bathhouses/' },
          { label: 'Mahjong & Parlor Games', labelZh: '麻将与中式棋牌入门', href: '/guides/mahjong-board-universe/' },
          { label: 'Mandarin Survival & Menu Hanzi', labelZh: '学中文与餐厅车站必认汉字', href: '/guides/mandarin-survival-kit/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Culture Tools',
      kickerZh: '文化小工具',
      title: 'Hanzi Tattoo Check & Chinese Name Studio',
      titleZh: '汉字纹身防雷与中文起名器',
      desc: 'Catch awkward transliterations, broken idioms, and tone traps before ink hits skin—or craft a culturally natural Chinese name.',
      descZh: '一键检测中文纹身词义雷区与生造词，或按音义偏好生成自然得体的中文名。',
      ctaLabel: 'Open Hanzi Tools',
      ctaLabelZh: '打开汉字工具',
      href: '/tools/hanzi-tattoo-check/',
    },
    sidebarStacks: [
      { label: 'Peanut & Nut Allergy Survival Kit', labelZh: '防花生油与过敏饮食清单', href: '/for/peanut-allergy/' },
      { label: 'All Show-to-Local Fullscreen Cards', labelZh: '全部全屏亮屏字卡', href: '/cards/' },
    ],
    databases: [
      { label: 'Show-to-Local Cards', labelZh: '亮屏字卡库', href: '/cards/' },
      { label: 'Allergy Guide', labelZh: '过敏人群专题', href: '/for/peanut-allergy/' },
      { label: 'Tattoo Checker', labelZh: '汉字纹身防雷', href: '/tools/hanzi-tattoo-check/' },
      { label: 'Chinese Naming', labelZh: '中文起名工坊', href: '/tools/chinese-name/' },
    ],
  },
  {
    id: 'visit',
    name: 'Visit',
    nameZh: '来华旅行',
    shortDesc: '240h visa, payments, eSIM, 12306 & app rescue',
    shortDescZh: '240h 免签、支付绑卡、高铁抢票与现场报错救火',
    h1: 'Visit China — Pre-Flight Checklist & On-the-Ground Playbook',
    h1Zh: '来华旅行 — 行前准备与落地实操手册',
    lead: 'Clear, step-by-step guidance for every travel hurdle: 240-hour visa-free transit rules, Alipay/WeChat foreign card limits, blocked-app substitutes, Railway 12306, and instant error fixes.',
    leadZh: '涵盖 240 小时过境免签、外卡 200 元免手续费红线、高铁防走错站、体检看牙与常见应用报错图解处理。',
    persona: 'safety',
    personaLabel: 'Travel Playbook',
    personaLabelZh: '出行实操',
    megaMenu: {
      coreTitle: 'Pre-Flight & Arrival',
      coreTitleZh: '行前与落地',
      coreLinks: [
        { label: '72-Hour Pre-Departure Playbook', labelZh: '首次来华 72 小时准备清单', href: '/guides/72h-pre-departure/' },
        { label: '240h Visa-Free Transit & Airport Flash', labelZh: '240h 过境免签与机场快闪', href: '/guides/240h-visa-free-transit/' },
        { label: 'Cashless Payments & Super-Apps', labelZh: '无现金支付与常用应用', href: '/guides/cashless-super-apps/' },
        { label: 'High-Speed Rail, Budget & Tax Refund', labelZh: '高铁出行、预算与离境退税', href: '/guides/rail-budget-tax-refund/' },
        { label: 'Mainland ↔ HK/Macau/Taiwan Border', labelZh: '内地与港澳台跨境实操', href: '/guides/hk-macau-taiwan-border/' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '常看与救火',
      mostViewed: [
        { label: 'WeChat Restricted? Step-by-Step Rescue', labelZh: '微信受限或封号解封图解', href: '/errors/wechat-restricted/', badge: 'Rescue', badgeZh: '救火' },
        { label: 'Does Google Maps Work in China?', labelZh: 'Google Maps 在中国能用吗？', href: '/in-china/google-maps/' },
        { label: 'China Medical & Dental Checkup Guide', labelZh: '来华体检看牙与国际医疗', href: '/guides/medical-dental-checkup/', badge: 'New', badgeZh: '新增' },
        { label: 'Official Forms & App Errors Visual Hub', labelZh: '官方表格与常见报错图解', href: '/guides/official-forms-app-errors/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'App Compatibility', labelZh: '西方应用替代', href: '/in-china/google-maps/' },
        { label: 'Error Rescue', labelZh: '应用报错救火', href: '/errors/wechat-restricted/' },
        { label: 'Official Forms', labelZh: '表格填写图解', href: '/documents/arrival-card/' },
        { label: 'Device Panels', labelZh: '酒店设备图解', href: '/how-to-use/hotel-washing-machine/' },
        { label: 'Show-to-Local Cards', labelZh: '亮屏字卡库', href: '/cards/' },
        { label: 'Comparisons', labelZh: '方案对比', href: '/compare/amap-vs-apple-maps/' },
        { label: 'Trip Kits', labelZh: '行程清单包', href: '/stacks/first-time-china-10-day/' },
      ],
    },
    mostViewedTop: [
      { label: '240-Hour Visa-Free Transit Checker & Ports', labelZh: '240h 过境免签判定与 60 个口岸', href: '/tools/visa-checker/' },
      { label: 'Alipay & WeChat Pay Foreign Card Setup', labelZh: '支付宝与微信绑外卡及 200 元规则', href: '/guides/cashless-super-apps/' },
      { label: 'Does Google Maps / WhatsApp Work in China?', labelZh: 'Google Maps 与 WhatsApp 在华可用性', href: '/in-china/google-maps/' },
      { label: '12306 Train Tickets & Wrong-Station Traps', labelZh: '12306 外籍购票与同名车站提醒', href: '/guides/rail-budget-tax-refund/' },
      { label: 'WeChat Restricted? Visual Rescue Steps', labelZh: '微信账号受限图解解封步骤', href: '/errors/wechat-restricted/' },
      { label: 'China Medical & Dental Checkup Tourism', labelZh: '来华体检看牙与国际医疗指南', href: '/guides/medical-dental-checkup/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Entry, Visas & Cross-Border Rules',
        titleZh: '签证免签、240h 过境与港澳台跨境',
        summary: '30-day unilateral visa-free list, 240h A→China→C ticket proof, arrival card fill-in, and HK/Macau/Laos crossings.',
        summaryZh: '单免互免名单、240h 联程票规则、入境卡逐格图解与港澳台、中老铁路通关。',
        links: [
          { label: '72-Hour Pre-Departure Playbook', labelZh: '72 小时行前准备清单', href: '/guides/72h-pre-departure/' },
          { label: '240h Transit & Airport Flash Trips', labelZh: '240h 过境免签与机场快闪', href: '/guides/240h-visa-free-transit/' },
          { label: 'Arrival Card Annotated Form', labelZh: '入境卡逐栏中英标注', href: '/documents/arrival-card/' },
          { label: 'Mainland ↔ HK / Macau / Taiwan', labelZh: '内地与港澳台跨境实操', href: '/guides/hk-macau-taiwan-border/' },
        ],
      },
      {
        number: '02',
        title: 'Cashless Payments, Connectivity & App Error Rescue',
        titleZh: '无现金支付、联网通信与报错救火',
        summary: '200 RMB fee-free rule, eSIM benchmarks, Western app substitutes, and red-box annotated Chinese error screens.',
        summaryZh: '外卡 200 元红线、实测稳定 eSIM、西方应用替代方案与报错界面标注。',
        links: [
          { label: 'Cashless Payments & Super-Apps', labelZh: '无现金支付与常用应用', href: '/guides/cashless-super-apps/' },
          { label: 'Alipay vs. WeChat Pay Verdict', labelZh: '支付宝与微信支付对比', href: '/compare/alipay-vs-wechat-pay/' },
          { label: 'WeChat Restricted Visual Rescue', labelZh: '微信受限图解解封', href: '/errors/wechat-restricted/' },
          { label: '12306 Passport Verification Fix', labelZh: '12306 护照核验失败处理', href: '/errors/12306-passport-failed/' },
        ],
      },
      {
        number: '03',
        title: 'Rail, Hotels, Tax Refund, Medical & Safety',
        titleZh: '高铁住宿、离境退税、来华体检与安全',
        summary: 'Passport e-gate boarding, hotel registration rules, 11% instant tax refunds, dental checkups, and solo safety.',
        summaryZh: '护照直刷电子闸机、涉外酒店登记、11% 即买即退、体检看牙与独行安全。',
        links: [
          { label: 'High-Speed Rail & Budget Guide', labelZh: '高铁出行与预算退税指南', href: '/guides/rail-budget-tax-refund/' },
          { label: 'China Medical & Dental Checkup', labelZh: '来华体检看牙医疗指南', href: '/guides/medical-dental-checkup/' },
          { label: 'Solo Female 10-Day Trip Kit', labelZh: '女性独行 10 天安全清单', href: '/stacks/solo-female-10-day/' },
          { label: 'Prescription Meds (Adderall) Rules', labelZh: '处方药入境合规提醒', href: '/in-china/adderall/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Quick Check',
      kickerZh: '快速测算',
      title: '240-Hour Visa-Free Transit Checker',
      titleZh: '240 小时过境免签测算',
      desc: 'Check unilateral 30-day eligibility or 240h cross-province transit rules by passport and onward third-country ticket.',
      descZh: '输入护照国籍、停留天数与第三国联程票信息，即时核对适用的免签规则。',
      ctaLabel: 'Run Visa Checker',
      ctaLabelZh: '开始测算免签资格',
      href: '/tools/visa-checker/',
    },
    sidebarStacks: [
      { label: 'First-Time China 10-Day Kit', labelZh: '首次来华 10 天行程清单', href: '/stacks/first-time-china-10-day/' },
      { label: 'Solo Female 10-Day Safety Kit', labelZh: '女性独行 10 天安全清单', href: '/stacks/solo-female-10-day/' },
    ],
    databases: [
      { label: 'Western App Map', labelZh: '西方应用替代', href: '/in-china/google-maps/' },
      { label: 'App Error Rescue', labelZh: '报错救火指南', href: '/errors/wechat-restricted/' },
      { label: 'Official Forms', labelZh: '官方表格图解', href: '/documents/arrival-card/' },
      { label: 'Device Panels', labelZh: '酒店设备图解', href: '/how-to-use/hotel-washing-machine/' },
      { label: 'Show-to-Local Cards', labelZh: '亮屏字卡库', href: '/cards/' },
      { label: 'Comparisons', labelZh: '方案对比', href: '/compare/amap-vs-apple-maps/' },
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
    lead: 'Practical legal and administrative guides for expats, students, and digital nomads: Category A/B/C work permit points, apartment registration, IIT tax rules, and closing out pensions when leaving China.',
    leadZh: '面向留学生、外籍雇员与数字游民的实用政务手册，涵盖工签打分、24 小时住宿登记、个税抵扣、驾照换领与离华退保。',
    persona: 'safety',
    personaLabel: 'Living in China',
    personaLabelZh: '长居实务',
    megaMenu: {
      coreTitle: 'Long-Term Guides',
      coreTitleZh: '长居主题',
      coreLinks: [
        { label: 'Study, Work Permits & Residence', labelZh: '留学、工签与长居全流程', href: '/guides/study-work-residence/' },
        { label: 'Digital Nomad Living in China', labelZh: '数字游民旅居中国实操', href: '/guides/digital-nomad-china/' },
        { label: 'Leaving China: Pension & Tax Closeout', labelZh: '离开中国收尾：退保、销卡与完税', href: '/guides/leaving-china-closeout/' },
        { label: 'Renting, Banking & IIT Tax', labelZh: '租房避坑、银行开户与个税专项', href: '/guides/renting-banking-iit/' },
        { label: 'Driver’s License & Expat Family Life', labelZh: '临时与长期驾照换领及家庭生活', href: '/guides/drivers-license-family/' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '常看内容',
      mostViewed: [
        { label: 'Work Permit Points & IIT Tax Calc', labelZh: '工签积分与个税计算器', href: '/tools/tax-points-calc/', badge: 'Tool', badgeZh: '工具' },
        { label: '24-Hour Police Residence Form', labelZh: '24 小时境外人员住宿登记表图解', href: '/documents/temp-residence-reg/' },
        { label: 'Leaving China Social Security Refund', labelZh: '离境社保退保与税务清缴清单', href: '/guides/leaving-china-closeout/', badge: 'Essential', badgeZh: '必看' },
        { label: 'Digital Nomad 30-Day Kit', labelZh: '数字游民 30 天旅居清单', href: '/stacks/digital-nomad-30-day/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'Points & Tax Calc', labelZh: '积分个税算', href: '/tools/tax-points-calc/' },
        { label: 'Residence Form', labelZh: '住宿登记表', href: '/documents/temp-residence-reg/' },
        { label: 'Nomad Kit', labelZh: '游民旅居清单', href: '/stacks/digital-nomad-30-day/' },
        { label: 'Chengdu City Guide', labelZh: '成都宜居指南', href: '/cities/chengdu/' },
      ],
    },
    mostViewedTop: [
      { label: 'Work Permit Points & IIT Tax Calculator', labelZh: '外籍工签积分与个税速算器', href: '/tools/tax-points-calc/' },
      { label: 'Leaving China: Social Security & Bank Closeout', labelZh: '离开中国收尾：退保、完税与关户', href: '/guides/leaving-china-closeout/' },
      { label: 'Study, Work Permits & Residence Playbook', labelZh: '留学、工签与居留许可流程', href: '/guides/study-work-residence/' },
      { label: 'Digital Nomad Cities & Connectivity Matrix', labelZh: '数字游民旅居城市与成本对比', href: '/guides/digital-nomad-china/' },
      { label: '24-Hour Temporary Residence Registration', labelZh: '境外人员临时住宿登记图解', href: '/documents/temp-residence-reg/' },
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
          { label: 'Study, Work Permits & Long-Term Stay', labelZh: '留学工签长居流程', href: '/guides/study-work-residence/' },
          { label: 'Temporary Residence Registration Form', labelZh: '住宿登记表图解', href: '/documents/temp-residence-reg/' },
          { label: 'Work Permit Points Calculator', labelZh: '工签积分与个税算', href: '/tools/tax-points-calc/' },
        ],
      },
      {
        number: '02',
        title: 'Renting, Banking, Tax & Digital Nomads',
        titleZh: '租房合同、银行购汇、个税与数字游民',
        summary: 'Standard lease red flags, bank branch setup, IIT deductions, and coworking-friendly Tier-2 hubs.',
        summaryZh: '租房合同排雷、银行开户与境外汇款、个税专项扣除及大理、成都、海南旅居对比。',
        links: [
          { label: 'Renting, Banking & IIT Tax Guide', labelZh: '租房购房、银行与个税指南', href: '/guides/renting-banking-iit/' },
          { label: 'Digital Nomad Living Guide', labelZh: '数字游民旅居中国指南', href: '/guides/digital-nomad-china/' },
          { label: 'Digital Nomad 30-Day Kit', labelZh: '数字游民 30 天清单', href: '/stacks/digital-nomad-30-day/' },
        ],
      },
      {
        number: '03',
        title: 'Driver’s License, Family & Clean Exit Closeout',
        titleZh: '驾照换领、随迁家庭与离境收尾',
        summary: 'Airport provisional permits, Subject-1 exam conversion, international schools, and pension/housing-fund withdrawal.',
        summaryZh: '临时驾驶许可与科目一换证、国际学校与永居，以及离华前退社保与公积金实操。',
        links: [
          { label: 'Leaving China Ultimate Closeout', labelZh: '离开中国收尾清单', href: '/guides/leaving-china-closeout/' },
          { label: 'Driver’s License & Expat Family', labelZh: '驾照换领与外籍家庭生活', href: '/guides/drivers-license-family/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Calculator',
      kickerZh: '在线测算',
      title: 'Work Permit Points & IIT Tax Calculator',
      titleZh: '工签积分与个人所得税速算',
      desc: 'Estimate Foreigner Work Permit tier (A ≥ 85, B ≥ 60) and monthly mainland China IIT withholding.',
      descZh: '即时测算来华工作许可 A/B/C 分类积分与月度综合所得个人所得税。',
      ctaLabel: 'Open Points & Tax Calc',
      ctaLabelZh: '打开积分个税计算器',
      href: '/tools/tax-points-calc/',
    },
    sidebarStacks: [
      { label: 'Digital Nomad 30-Day China Kit', labelZh: '数字游民 30 天旅居清单', href: '/stacks/digital-nomad-30-day/' },
      { label: 'First-Time China 10-Day Kit', labelZh: '首次来华 10 天行程清单', href: '/stacks/first-time-china-10-day/' },
    ],
    databases: [
      { label: 'Points & Tax Calc', labelZh: '积分个税计算器', href: '/tools/tax-points-calc/' },
      { label: 'Registration Forms', labelZh: '住宿登记表图解', href: '/documents/temp-residence-reg/' },
      { label: 'Nomad Kit', labelZh: '游民旅居清单', href: '/stacks/digital-nomad-30-day/' },
      { label: 'Chengdu City Guide', labelZh: '成都宜居指南', href: '/cities/chengdu/' },
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
    lead: 'Practical due diligence tools and sourcing playbooks for global buyers and founders: verify 18-digit USCC numbers on GSXT, decode company chops, navigate Canton Fair and Yiwu, and check CCC / GB product compliance.',
    leadZh: '提供 18 位统一社会信用代码校验与国家企信网查询指引、公章签约红线、广交会验厂与百件柔性打样实操。',
    persona: 'legal',
    personaLabel: 'Due Diligence',
    personaLabelZh: '商务与合规',
    megaMenu: {
      coreTitle: 'Sourcing & Compliance',
      coreTitleZh: '商务与合规主题',
      coreLinks: [
        { label: 'Factory Sourcing & Due Diligence', labelZh: '来华商务、广交会与验厂尽调', href: '/guides/factory-sourcing-due-diligence/' },
        { label: 'Small-Batch 100-Unit & Reverse Sourcing', labelZh: '百件柔性打样与反向海淘指南', href: '/guides/flexible-sourcing-reverse-haul/' },
        { label: 'Company Chops & Contract Law Traps', labelZh: '商务公章、合同签约与法务红线', href: '/guides/company-chops-contracts/' },
        { label: 'Buying Electronics: 5 Hard Red Lines', labelZh: '华强北与买电子产品 5 条红线', href: '/guides/buying-electronics-red-lines/' },
        { label: 'WFOE Setup & Cross-Border Trade', labelZh: '外企设立（WFOE）与跨境收结汇', href: '/guides/wfoe-cross-border-setup/' },
      ],
      mostViewedTitle: 'Most Viewed',
      mostViewedTitleZh: '高频尽调与核验',
      mostViewed: [
        { label: '18-Digit USCC & GSXT Verification Guide', labelZh: '18 位 USCC 校验与企信网查询', href: '/compliance/uscc-gsxt-lookup/', badge: 'Official Check', badgeZh: '官网核验' },
        { label: 'CCC (3C) Compulsory Certification Lookup', labelZh: 'CNCA 3C 强制认证核验指引', href: '/compliance/ccc-3c-certification/' },
        { label: 'NMPA Cosmetics & Medical Device Registry', labelZh: 'NMPA 药监局器械与化妆品查询', href: '/compliance/nmpa-cosmetics-medical/' },
        { label: 'Remote Sourcing Without Flying to China', labelZh: '无需来华：远程验厂与尽调专题', href: '/for/remote-sourcing/' },
      ],
      routesTitle: 'Quick Access',
      routesTitleZh: '快捷直达',
      programmaticChips: [
        { label: 'Compliance Lookup', labelZh: '官方合规核验', href: '/compliance/uscc-gsxt-lookup/' },
        { label: 'USCC & GB Matcher', labelZh: '信用国标查询', href: '/tools/uscc-gb-matcher/' },
        { label: 'Canton Fair Kit', labelZh: '广交会买手清单', href: '/stacks/canton-fair-buyer-kit/' },
        { label: 'Remote Sourcing', labelZh: '远程采购专题', href: '/for/remote-sourcing/' },
        { label: 'Gov Open Data', labelZh: '政务公开数据', href: '/portals/' },
      ],
    },
    mostViewedTop: [
      { label: '18-Digit USCC Checksum & GSXT Guide', labelZh: '18 位 USCC 校验与国家企信网查询指引', href: '/compliance/uscc-gsxt-lookup/' },
      { label: 'Factory Sourcing & Canton Fair Playbook', labelZh: '来华商务、广交会与验厂尽调', href: '/guides/factory-sourcing-due-diligence/' },
      { label: 'Small-Batch 100-Unit & Reverse Haul Guide', labelZh: '百件柔性打样与反向海淘实操', href: '/guides/flexible-sourcing-reverse-haul/' },
      { label: 'Company Chops (公章) & Contract Enforceability', labelZh: '公司公章、合同章与签约法务红线', href: '/guides/company-chops-contracts/' },
      { label: 'CCC (3C) & GB Standards Compliance Desk', labelZh: 'CCC 强制认证与外文国标核验', href: '/compliance/ccc-3c-certification/' },
      { label: 'Remote Supplier Due Diligence Hub', labelZh: '无需来华：远程供应商尽调专题', href: '/for/remote-sourcing/' },
    ],
    topicGroups: [
      {
        number: '01',
        title: 'Supplier Due Diligence & Official Registries',
        titleZh: '供应商尽调与官方查询入口',
        summary: 'Validate 18-digit USCC check digits locally and follow step-by-step walkthroughs for official GSXT, CNCA, and NMPA portals.',
        summaryZh: '本地校验 18 位统一社会信用代码，配套中文检索词转换与国家企信网、认监委、药监局查询指引。',
        links: [
          { label: 'USCC & GSXT Official Verification Desk', labelZh: 'USCC 与国家企信网核验指引', href: '/compliance/uscc-gsxt-lookup/' },
          { label: 'CCC (3C) Certification Verification', labelZh: '3C 强制认证核验指引', href: '/compliance/ccc-3c-certification/' },
          { label: 'NMPA Medical & Cosmetics Lookup', labelZh: 'NMPA 器械与化妆品查询', href: '/compliance/nmpa-cosmetics-medical/' },
        ],
      },
      {
        number: '02',
        title: 'Trade Fairs, Industrial Belts & Small-Batch OEM',
        titleZh: '广交会、百大产业带与小单柔性打样',
        summary: 'Canton Fair buyer badges, Shenzhen electronics sourcing, Yiwu markets, and 100-unit prototyping workflows.',
        summaryZh: '广交会采购商证办理、华强北采购红线、义乌与百件柔性打样对接流程。',
        links: [
          { label: 'Factory Sourcing & Canton Fair Playbook', labelZh: '广交会与工厂实地验厂', href: '/guides/factory-sourcing-due-diligence/' },
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
          { label: 'Canton Fair Buyer Kit', labelZh: '广交会买手行前清单', href: '/stacks/canton-fair-buyer-kit/' },
        ],
      },
    ],
    sidebarTool: {
      kicker: 'Verification Tool',
      kickerZh: '核验工具',
      title: 'USCC Validator & GB Standards Matcher',
      titleZh: '18 位 USCC 校验与国标检索词生成',
      desc: 'Verify GB 32100-2015 check digits on any Chinese supplier license and translate English product terms into standard Chinese regulatory queries.',
      descZh: '按 GB 32100-2015 实时校验 18 位信用代码，并将英文品名转换为标准中文监管检索词。',
      ctaLabel: 'Open USCC & GB Matcher',
      ctaLabelZh: '打开信用国标校验台',
      href: '/tools/uscc-gb-matcher/',
    },
    sidebarStacks: [
      { label: 'Canton Fair & Factory Audit Kit', labelZh: '广交会与验厂买手清单', href: '/stacks/canton-fair-buyer-kit/' },
      { label: 'Remote Sourcing Without Flying', labelZh: '无需来华远程采购专题', href: '/for/remote-sourcing/' },
    ],
    databases: [
      { label: 'USCC & GSXT Lookup', labelZh: '企业信用尽调', href: '/compliance/uscc-gsxt-lookup/' },
      { label: '3C Certification Lookup', labelZh: '3C 认证核验', href: '/compliance/ccc-3c-certification/' },
      { label: 'USCC & GB Matcher', labelZh: '信用国标查询', href: '/tools/uscc-gb-matcher/' },
      { label: 'Gov Open Data', labelZh: '政务公开数据', href: '/portals/' },
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
    title: 'Multi-Facet Explorer',
    titleZh: '多维内容筛选',
    subtitle: 'Filter by city, season, foreign-card friendly & no +86 phone',
    subtitleZh: '按城市、季节、外卡友好与免 +86 手机号筛选指南与工具',
    kind: 'Data',
    href: '/explore/',
    keywords: 'explore filter facets no +86 foreign card wheelchair',
  },
  {
    title: 'Live Field Reports',
    titleZh: '现场实测动态',
    subtitle: 'Worked / Partial / Failed field status & 10-second submission',
    subtitleZh: '近期口岸、刷卡与通信实测反馈及快速提交',
    kind: 'Data',
    href: '/pulse/',
    keywords: 'ground pulse worked failed live status esim pvg metro',
  },
];
