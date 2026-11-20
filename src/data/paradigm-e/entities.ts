/**
 * Paradigm E — Programmatic Entity Profiles (Mother Template 4 · 5-Layer Architecture)
 * Covers:
 *   /cities/[slug]/        (Spatial City Hub with MCA 6-digit code & decoupled Universities vs Hospitals)
 *   /attractions/[slug]/   (Timezone ticket drop + 1-3km zero-maintenance mesh + Amap Chinese search terms)
 *   /in-china/[slug]/      (Western app/service/meds compatibility mapping)
 *   /errors/[slug]/        (App error red-box interactive hotspot rescue)
 *   /documents/[slug]/     (Official forms red-box interactive hotspot annotations)
 *   /how-to-use/[slug]/    (Daily device panel red-box visual walkthrough)
 *   /cards/[slug]/         (Fullscreen high-contrast show-to-local cards)
 *   /compliance/[slug]/    (Law-firm dual-column WAF official verification desks)
 */
import type { DisclaimerKind, GuidePulseItem } from './guides';
import type { PersonaType, PillarId } from './pillars';

export type EntityCollection =
  | 'cities'
  | 'attractions'
  | 'in-china'
  | 'errors'
  | 'documents'
  | 'how-to-use'
  | 'cards'
  | 'compliance';

export interface EntityStatusBadge {
  label: string;
  tone: 'verified' | 'standby' | 'danger' | 'editorial' | 'neutral';
}

export interface QuickSpecItem {
  label: string;
  value: string;
  mono?: boolean;
}

export interface NearbyMeshItem {
  category: 'City Walk' | 'Time-Honored Brand' | 'Free Museum' | '24h Bathhouse' | 'Tax-Free Shop';
  name: string;
  chineseName: string;
  distance: string;
  note: string;
  amapQuery: string;
}

export interface HotspotAnnotation {
  id: number;
  xPercent: number;
  yPercent: number;
  chineseText: string;
  englishInstruction: string;
  warning?: string;
}

export interface CityMashupSection {
  pillar: PillarId;
  categoryLabel: string;
  items: { name: string; chineseName: string; meta: string; href?: string }[];
}

export interface EntityProfile {
  collection: EntityCollection;
  slug: string;
  pillar: PillarId;
  persona: PersonaType;
  title: string;
  chineseName: string;
  pinyin: string;
  tagline: string;
  taglineZh: string;
  lastVerified: string;
  tier: string;
  statusBadges: EntityStatusBadge[];
  primaryAmapTerm?: string;
  officialUrl?: string;
  officialLabel?: string;
  cardSlug?: string;
  quickSpecs: QuickSpecItem[];
  whatNobodyTellsYou: string;
  checklist: string[];
  alternatives: { name: string; verdict: string; href?: string }[];
  pulseStats: { worked: number; partial: number; failed: number };
  pulseFeed: GuidePulseItem[];
  disclaimers: DisclaimerKind[];
  /* Collection-specific enhancements */
  cityData?: {
    mcaCode: string;
    cluster: string;
    ports240h: string;
    mapX: number;
    mapY: number;
    layers: ('terrain' | 'rail' | 'food' | 'industry' | 'heritage')[];
    quick12Summary: { label: string; value: string }[];
    mashup: CityMashupSection[];
    /* Explicitly decoupled cards: Universities vs International Hospitals */
    universities: { name: string; chineseName: string; focus: string }[];
    intlHospitals: { name: string; chineseName: string; dept: string; phone: string }[];
  };
  attractionData?: {
    releaseDaysAhead: number;
    releaseBjtHour: number;
    releaseBjtMinute: number;
    mondayClosed: boolean;
    wrongStationAlert: string;
    staminaRating: string;
    nearbyMesh: NearbyMeshItem[];
    amapSearchChips: { label: string; chineseQuery: string }[];
  };
  hotspotData?: {
    canvasTitle: string;
    screenHeaderChinese: string;
    screenLines: string[];
    hotspots: HotspotAnnotation[];
  };
  cardData?: {
    scenario: string;
    gb30240En: string;
    largeHanzi: string;
    pinyinLine: string;
    subNoteChinese: string;
    subNoteEn: string;
    theme: 'yellow-black' | 'white-black';
  };
  complianceData?: {
    wafStatus: string;
    portalName: string;
    portalUrl: string;
    sampleUscc?: string;
    termPresets: { en: string; zhQuery: string; gbCode: string }[];
    walkthroughSteps: { step: string; title: string; detail: string }[];
  };
}

export const ENTITIES: EntityProfile[] = [
  /* ===================== CITIES (/cities/[slug]/) ===================== */
  {
    collection: 'cities',
    slug: 'shanghai',
    pillar: 'places',
    persona: 'editorial',
    title: 'Shanghai',
    chineseName: '上海',
    pinyin: 'Shànghǎi',
    tagline: 'China’s most frictionless international gateway—240h air & cruise ports, Art Deco laneways, and global finance.',
    taglineZh: '中国外卡与英文最友好的国际门户：浦东/虹桥 240h 口岸、梧桐街区与现代天际线。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '240h Air & Cruise Port', tone: 'verified' },
      { label: 'Foreign Card Friendly', tone: 'verified' },
      { label: 'MCA 310000', tone: 'editorial' },
    ],
    primaryAmapTerm: '上海外滩',
    officialUrl: 'https://english.shanghai.gov.cn/',
    officialLabel: 'Shanghai International Portal',
    cardSlug: 'hotel-checkin-passport',
    quickSpecs: [
      { label: 'MCA Admin Code', value: '310000 (Municipality)', mono: true },
      { label: '240h Ports', value: 'PVG · SHA · Wusongkou Cruise' },
      { label: 'Coordinates (WGS/GCJ)', value: '31.2304°N, 121.4737°E', mono: true },
      { label: 'Metro Foreign Tap', value: 'Alipay QR & Intl Visa/MC Tap' },
      { label: 'HSR to Beijing', value: '4h 18m (Hongqiao → Beijing South)' },
    ],
    whatNobodyTellsYou: 'Shanghai Hongqiao (虹桥站) connects seamlessly to Hongqiao Airport (SHA), but Pudong Airport (PVG) is 65–80 minutes away across the river. Never book a tight PVG-to-Hongqiao train transfer under 3.5 hours.',
    checklist: [
      'Take the 430 km/h Maglev from PVG to Longyang Rd (8 mins, ¥50) only if heading to Pudong/Line 2.',
      'Walk Former French Concession (Anfu Rd / Wukang Rd) before 10:00 AM to skip influencer queues.',
      'Visit Shanghai Museum East (Pudong) for China’s best bronze & ceramic galleries (free with passport booking).',
    ],
    alternatives: [
      { name: 'Beijing (110000)', verdict: 'Imperial history & Great Wall', href: '/cities/beijing/' },
      { name: 'Shenzhen (440300)', verdict: 'Hardware supply chain & HK border', href: '/cities/shenzhen/' },
      { name: 'Shanghai → Hangzhou HSR', verdict: '45-min West Lake day trip', href: '/routes/shanghai-to-hangzhou/' },
    ],
    pulseStats: { worked: 64, partial: 4, failed: 1 },
    pulseFeed: [
      { status: 'worked', context: 'US Passport · PVG Terminal 2', detail: '240h transit lane took 16 minutes with printed Tokyo flight.', ago: '2h ago' },
      { status: 'worked', context: 'Wise Visa · Shanghai Metro Line 2', detail: 'Direct Alipay Transport QR scanned smoothly at every turnstile.', ago: '9h ago' },
    ],
    disclaimers: [],
    cityData: {
      mcaCode: '310000',
      cluster: 'Yangtze River Delta Megalopolis',
      ports240h: 'Pudong (PVG) · Hongqiao (SHA) · Shanghai Cruise Port',
      mapX: 79,
      mapY: 57,
      layers: ['rail', 'food', 'industry', 'heritage'],
      quick12Summary: [
        { label: '240h Visa', value: 'PVG/SHA/Cruise Open' },
        { label: 'Top Walk', value: 'Wukang & Anfu Rd' },
        { label: 'Signature Bite', value: 'Shengjian & Xiaolongbao' },
        { label: 'Data Portal', value: 'data.sh.gov.cn (HTTP 200)' },
      ],
      mashup: [
        {
          pillar: 'places',
          categoryLabel: 'City Walks & Landmarks',
          items: [
            { name: 'The Bund & Waitanyuan', chineseName: '外滩与外滩源', meta: 'Free · Best 19:00–22:00 lights' },
            { name: 'Wukang Road & Anfu Road', chineseName: '武康路—安福路历史街区', meta: '1930s Art Deco · Cafes' },
          ],
        },
        {
          pillar: 'culture',
          categoryLabel: 'Museums & NM012 Heritage Brands',
          items: [
            { name: 'Shanghai Museum East', chineseName: '上海博物馆东馆', meta: 'Free · Closed Tuesdays' },
            { name: 'Nanxiang Steamed Bun (1900)', chineseName: '南翔馒头店（中华老字号）', meta: 'Yuyuan · Xiaolongbao' },
          ],
        },
        {
          pillar: 'business',
          categoryLabel: 'Trade Fairs & Open Data',
          items: [
            { name: 'CIIE National Exhibition Center', chineseName: '国家会展中心（进博会）', meta: 'Hongqiao Hub · Nov' },
            { name: 'Shanghai Open Data Portal', chineseName: '上海市公共数据开放平台', meta: 'HTTP 200 Direct', href: '/portals/' },
          ],
        },
      ],
      universities: [
        { name: 'Fudan University', chineseName: '复旦大学', focus: 'C9 League · Humanities, Economics & Medicine' },
        { name: 'Shanghai Jiao Tong University', chineseName: '上海交通大学', focus: 'C9 League · Engineering, AI & Antai Business' },
        { name: 'NYU Shanghai', chineseName: '上海纽约大学', focus: 'Sino-US Joint Liberal Arts & Data Science' },
      ],
      intlHospitals: [
        { name: 'Huashan Hospital Worldwide Medical Center', chineseName: '复旦大学附属华山医院国际医疗中心', dept: 'Tier-3A Public Intl Wing · Neurology & Full Checkup', phone: '+86-21-5288-9999' },
        { name: 'Shanghai United Family Hospital', chineseName: '上海和睦家医院', dept: 'Private Intl · 24h ER & Direct Insurance Billing', phone: '+86-21-2216-3900' },
      ],
    },
  },
  {
    collection: 'cities',
    slug: 'beijing',
    pillar: 'places',
    persona: 'editorial',
    title: 'Beijing',
    chineseName: '北京',
    pinyin: 'Běijīng',
    tagline: 'Eight centuries of imperial axes, Great Wall passes, hutong courtyards, and China’s national policy & museum core.',
    taglineZh: '中轴线古都、万里长城门户、胡同肌理与国家顶流博物馆核心。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '240h PEK & PKX Ports', tone: 'verified' },
      { label: '7-Day Ticket Booking', tone: 'standby' },
      { label: 'MCA 110000', tone: 'editorial' },
    ],
    primaryAmapTerm: '故宫博物院',
    officialUrl: 'https://english.beijing.gov.cn/',
    officialLabel: 'Beijing International Portal',
    cardSlug: 'taxi-beijing-qinghe',
    quickSpecs: [
      { label: 'MCA Admin Code', value: '110000 (Capital)', mono: true },
      { label: '240h Airports', value: 'Capital (PEK) · Daxing (PKX)' },
      { label: 'Coordinates (WGS/GCJ)', value: '39.9042°N, 116.4074°E', mono: true },
      { label: 'Station Trap Count', value: '7 Major Rail Stations (Check Exact Name!)' },
      { label: 'Metro Foreign Tap', value: 'Direct Visa/MC Tap Enabled' },
    ],
    whatNobodyTellsYou: 'Beijing’s #1 visitor mistake is confusing its 7 rail stations—especially going to Beijing North when Great Wall HSR trains depart from Qinghe (清河站), or mixing up Beijing South (Shanghai HSR) with Beijing West (Xi’an HSR).',
    checklist: [
      'Book Forbidden City 7 days ahead at 20:00 BJT; book Tiananmen Square separately.',
      'Tap a contactless Visa/Mastercard directly on Beijing Subway gates (works without Alipay).',
      'Pick Mutianyu Great Wall over Badaling unless you need wheelchair access or a 4-hour rush.',
    ],
    alternatives: [
      { name: 'Forbidden City Rules', verdict: '7-day drop + 1–3km nearby mesh', href: '/attractions/forbidden-city/' },
      { name: 'Mutianyu Great Wall', verdict: 'Less crowded classic ramparts', href: '/attractions/mutianyu-great-wall/' },
      { name: 'Beijing → Shanghai HSR', verdict: '4h 18m door-to-door winner', href: '/routes/beijing-to-shanghai/' },
    ],
    pulseStats: { worked: 52, partial: 5, failed: 1 },
    pulseFeed: [
      { status: 'worked', context: 'UK Mastercard · Beijing Subway', detail: 'Tapped physical contactless card directly on Line 1 & Daxing Airport Express.', ago: '4h ago' },
    ],
    disclaimers: [],
    cityData: {
      mcaCode: '110000',
      cluster: 'Beijing-Tianjin-Hebei (Jing-Jin-Ji)',
      ports240h: 'Capital Intl (PEK) · Daxing Intl (PKX)',
      mapX: 69,
      mapY: 34,
      layers: ['terrain', 'rail', 'food', 'heritage'],
      quick12Summary: [
        { label: '240h Visa', value: 'PEK / PKX Open' },
        { label: 'Rail Trap', value: '7 Stations — Verify Name' },
        { label: 'UNESCO Sites', value: '7 World Heritage Sites' },
        { label: 'Subway Tap', value: 'Direct Foreign Visa/MC' },
      ],
      mashup: [
        {
          pillar: 'places',
          categoryLabel: 'Flagship Attractions & Hutongs',
          items: [
            { name: 'Forbidden City (Palace Museum)', chineseName: '故宫博物院', meta: '7-day booking · Closed Mon', href: '/attractions/forbidden-city/' },
            { name: 'Mutianyu Great Wall', chineseName: '慕田峪长城', meta: 'Toboggan · Low crowd', href: '/attractions/mutianyu-great-wall/' },
          ],
        },
        {
          pillar: 'culture',
          categoryLabel: 'Time-Honored Roast Duck & Museums',
          items: [
            { name: 'Bianyifang Roast Duck (1416)', chineseName: '便宜坊烤鸭（中华老字号）', meta: 'Closed-oven Peking Duck' },
            { name: 'National Museum of China', chineseName: '中国国家博物馆', meta: 'Free · Passport booking 7d' },
          ],
        },
      ],
      universities: [
        { name: 'Tsinghua University', chineseName: '清华大学', focus: 'C9 League · Computer Science, Architecture & Engineering' },
        { name: 'Peking University', chineseName: '北京大学', focus: 'C9 League · Sciences, Law & Yenching Academy' },
      ],
      intlHospitals: [
        { name: 'PUMCH International Medical Services', chineseName: '北京协和医院国际医疗部', dept: 'China #1 Tier-3A Public Intl Wing', phone: '+86-10-6915-6699' },
        { name: 'Beijing United Family Hospital', chineseName: '北京和睦家医院', dept: 'Private Intl · 24h Bilingual ER & Pediatrics', phone: '+86-10-5927-7000' },
      ],
    },
  },
  {
    collection: 'cities',
    slug: 'chengdu',
    pillar: 'places',
    persona: 'editorial',
    title: 'Chengdu',
    chineseName: '成都',
    pinyin: 'Chéngdū',
    tagline: 'Giant pandas, bamboo-chair teahouses, Sichuan culinary depth, and China’s most livable Tier-1.5 digital nomad hub.',
    taglineZh: '大熊猫故乡、盖碗茶馆、川菜之都与高性价比数字游民宜居之城。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '240h TFU & CTU Ports', tone: 'verified' },
      { label: 'Top Nomad Value', tone: 'editorial' },
      { label: 'MCA 510100', tone: 'neutral' },
    ],
    primaryAmapTerm: '成都大熊猫繁育研究基地',
    officialUrl: 'https://www.gochengdu.cn/',
    officialLabel: 'GoChengdu Official Portal',
    quickSpecs: [
      { label: 'MCA Admin Code', value: '510100 (Sichuan Capital)', mono: true },
      { label: '240h Airports', value: 'Tianfu (TFU) · Shuangliu (CTU)' },
      { label: 'Coordinates (WGS/GCJ)', value: '30.5728°N, 104.0668°E', mono: true },
      { label: 'TFU Airport Distance', value: '60 km SE · 40 min Metro Line 18 Express' },
    ],
    whatNobodyTellsYou: 'Chengdu Tianfu Airport (TFU) is 60 km outside downtown—always take Metro Line 18 Express (40 mins, ¥11) instead of a ¥220 traffic-jam taxi during rush hour.',
    checklist: [
      'Reach Giant Panda Base by 07:30 AM before morning bamboo feeding ends.',
      'Say “微辣 (wēi là)” for mild spice—local “medium” will overwhelm most foreign palates.',
    ],
    alternatives: [
      { name: 'Chengdu Panda Base Rules', verdict: 'Morning feeding schedule & gate choice', href: '/attractions/chengdu-panda-base/' },
      { name: 'Chengdu → Chongqing HSR', verdict: '62-min cyber-mountain city hop', href: '/routes/chengdu-to-chongqing/' },
    ],
    pulseStats: { worked: 39, partial: 3, failed: 0 },
    pulseFeed: [
      { status: 'worked', context: 'Canadian Visitor · TFU 240h', detail: 'Smooth entry at Tianfu; Metro Line 18 Express took Alipay QR right out of Terminal 1.', ago: '1d ago' },
    ],
    disclaimers: [],
    cityData: {
      mcaCode: '510100',
      cluster: 'Chengdu-Chongqing Economic Circle',
      ports240h: 'Tianfu Intl (TFU) · Shuangliu (CTU)',
      mapX: 46,
      mapY: 60,
      layers: ['terrain', 'rail', 'food', 'heritage'],
      quick12Summary: [
        { label: '240h Visa', value: 'TFU & CTU Open' },
        { label: 'Must-Do', value: '07:30 AM Panda Base' },
        { label: 'Nomad Burn', value: '¥7,500–¥11,500/mo' },
        { label: 'Gateway To', value: 'Jiuzhaigou & Western Sichuan' },
      ],
      mashup: [
        {
          pillar: 'places',
          categoryLabel: 'Pandas & Teahouse Walks',
          items: [
            { name: 'Chengdu Giant Panda Base', chineseName: '成都大熊猫繁育研究基地', meta: '07:30 AM Peak', href: '/attractions/chengdu-panda-base/' },
            { name: 'People’s Park Heming Teahouse', chineseName: '人民公园鹤鸣茶社', meta: '¥20 Bamboo-Chair Tea' },
          ],
        },
        {
          pillar: 'culture',
          categoryLabel: 'Sichuan Heritage & Museums',
          items: [
            { name: 'Sanxingdui Museum (Guanghan)', chineseName: '三星堆博物馆', meta: '18m HSR from Chengdu East' },
            { name: 'Chen Mapo Tofu (1862)', chineseName: '陈麻婆豆腐（中华老字号）', meta: 'Original Sichuan Classic' },
          ],
        },
      ],
      universities: [
        { name: 'Sichuan University', chineseName: '四川大学', focus: 'Double First-Class · Stomatology (Dental #1) & Humanities' },
        { name: 'UESTC (Electronic Science)', chineseName: '电子科技大学', focus: 'Telecom, AI & Semiconductor Engineering' },
      ],
      intlHospitals: [
        { name: 'West China Hospital Intl Clinic', chineseName: '四川大学华西医院国际医疗中心', dept: 'Southwest #1 Tier-3A Public Intl Wing', phone: '+86-28-8542-2114' },
        { name: 'Chengdu Parkway Clinic', chineseName: '成都百汇医疗', dept: 'Private Bilingual Family Medicine', phone: '+86-28-8531-0333' },
      ],
    },
  },
  {
    collection: 'cities',
    slug: 'xian',
    pillar: 'places',
    persona: 'editorial',
    title: 'Xi’an',
    chineseName: '西安',
    pinyin: 'Xī’ān',
    tagline: 'Eastern terminus of the Silk Road—Terracotta Warriors, intact Ming city walls, and biangbiang noodle alleys.',
    taglineZh: '十三朝古都与丝绸之路起点：兵马俑、明城墙骑行与碳水江湖。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '240h XIY Port', tone: 'verified' },
      { label: 'MCA 610100', tone: 'editorial' },
    ],
    primaryAmapTerm: '西安城墙南门永宁门',
    quickSpecs: [
      { label: 'MCA Admin Code', value: '610100 (Shaanxi Capital)', mono: true },
      { label: '240h Airport', value: 'Xi’an Xianyang Intl (XIY)' },
      { label: 'Coordinates (WGS/GCJ)', value: '34.3416°N, 108.9398°E', mono: true },
      { label: 'HSR From Beijing', value: '4h 15m (Beijing West → Xi’an North)' },
    ],
    whatNobodyTellsYou: 'Skip the crowded central Beiyuanmen lane of the Muslim Quarter and walk two blocks west to Sajinqiao (洒金桥) for authentic local lamb paomo and persimmon cakes at half the price.',
    checklist: ['Cycle the 13.7 km Ming City Wall starting at South Gate (永宁门) 90 mins before sunset.', 'Book Shaanxi History Museum 5 days ahead on WeChat with passport.'],
    alternatives: [{ name: 'Terracotta Warriors Rules', verdict: 'Beat tour groups via Metro Line 9 + 08:30 entry', href: '/attractions/terracotta-warriors/' }],
    pulseStats: { worked: 28, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'German Visitor · Xi’an North HSR', detail: 'Passport e-gate worked smoothly; Metro Line 2 goes straight to Bell Tower.', ago: '2d ago' }],
    disclaimers: [],
    cityData: {
      mcaCode: '610100',
      cluster: 'Guanzhong Plain City Cluster',
      ports240h: 'Xianyang Intl (XIY)',
      mapX: 54,
      mapY: 49,
      layers: ['terrain', 'rail', 'food', 'heritage'],
      quick12Summary: [
        { label: '240h Visa', value: 'XIY Airport Open' },
        { label: 'Top Heritage', value: 'Terracotta & Ming Wall' },
        { label: 'Local Alley', value: 'Sajinqiao (洒金桥)' },
        { label: 'Museum Rule', value: 'Shaanxi History 5d Book' },
      ],
      mashup: [
        {
          pillar: 'places',
          categoryLabel: 'Imperial Heritage',
          items: [
            { name: 'Terracotta Warriors Museum', chineseName: '秦始皇帝陵博物院', meta: '08:30 Entry Best', href: '/attractions/terracotta-warriors/' },
            { name: 'Xi’an Ming City Wall', chineseName: '西安明城墙', meta: '13.7 km Sunset Cycling' },
          ],
        },
      ],
      universities: [
        { name: 'Xi’an Jiaotong University', chineseName: '西安交通大学', focus: 'C9 League · Energy, Mechanics & Management' },
      ],
      intlHospitals: [
        { name: 'Xijing Hospital Intl Dept', chineseName: '西京医院国际医疗部', dept: 'Northwest Leading Tier-3A Public Hospital', phone: '+86-29-8477-5507' },
      ],
    },
  },
  {
    collection: 'cities',
    slug: 'shenzhen',
    pillar: 'business',
    persona: 'legal',
    title: 'Shenzhen',
    chineseName: '深圳',
    pinyin: 'Shēnzhèn',
    tagline: 'World’s hardware prototyping capital—Huaqiangbei electronics, drone delivery parks, and 14-min HSR link to Hong Kong.',
    taglineZh: '全球硬件创新与跨境贸易引擎：华强北供应链、无人机公园与 14 分钟直达香港西九龙。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '240h SZX & Shekou Ports', tone: 'verified' },
      { label: 'Hardware Belt Core', tone: 'editorial' },
      { label: 'MCA 440300', tone: 'neutral' },
    ],
    primaryAmapTerm: '华强北赛格广场',
    quickSpecs: [
      { label: 'MCA Admin Code', value: '440300 (Special Economic Zone)', mono: true },
      { label: '240h Ports', value: 'Bao’an Intl (SZX) · Shekou Ferry' },
      { label: 'Coordinates (WGS/GCJ)', value: '22.5431°N, 114.0579°E', mono: true },
      { label: 'To Hong Kong', value: '14 mins HSR (Futian → West Kowloon)' },
    ],
    whatNobodyTellsYou: 'Futian Station (福田站) sits right in Shenzhen’s CBD and puts you inside Hong Kong West Kowloon in 14 minutes—faster than riding the subway across Manhattan.',
    checklist: ['Visit SEG Electronics Market (赛格广场) Floors 1–6 for components and maker kits.', 'Try Meituan drone food delivery at Shenzhen Talent Park (深圳人才公园).'],
    alternatives: [{ name: 'HK → Guangzhou / Shenzhen HSR', verdict: 'Cross-border rail breakdown', href: '/routes/hong-kong-to-guangzhou/' }],
    pulseStats: { worked: 41, partial: 1, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'Hardware Founder · Futian → HK', detail: 'Cleared Futian HSR to HK West Kowloon in 32 mins total including dual customs.', ago: '12h ago' }],
    disclaimers: [],
    cityData: {
      mcaCode: '440300',
      cluster: 'Guangdong-Hong Kong-Macau Greater Bay Area',
      ports240h: 'Bao’an Intl (SZX) · Shekou Cruise/Ferry Port',
      mapX: 69,
      mapY: 79,
      layers: ['rail', 'industry'],
      quick12Summary: [
        { label: '240h Visa', value: 'SZX & Shekou Port' },
        { label: 'To HK CBD', value: '14 min HSR (Futian)' },
        { label: 'Industry Core', value: 'Huaqiangbei & EV/Drone' },
        { label: 'Dental Value', value: 'Top HK/Intl Dental Hub' },
      ],
      mashup: [
        {
          pillar: 'business',
          categoryLabel: 'Hardware & Sourcing Hubs',
          items: [
            { name: 'Huaqiangbei SEG Electronics', chineseName: '华强北赛格电子市场', meta: 'Components & Prototyping' },
            { name: 'Shekou Sea World & Ferry Port', chineseName: '蛇口海上世界与邮轮母港', meta: 'Direct to HKIA SkyPier' },
          ],
        },
      ],
      universities: [
        { name: 'SUSTech (Southern Univ. of Science & Tech)', chineseName: '南方科技大学', focus: 'English-taught STEM Research & AI' },
        { name: 'CUHK-Shenzhen', chineseName: '香港中文大学（深圳）', focus: 'Bilingual Finance, Data Science & Medicine' },
      ],
      intlHospitals: [
        { name: 'HKU-Shenzhen Hospital IMC', chineseName: '香港大学深圳医院国际医疗中心', dept: 'Hong Kong-Managed Evidence-Based Intl Wing', phone: '+86-755-8691-3388' },
      ],
    },
  },

  /* ===================== ATTRACTIONS (/attractions/[slug]/) ===================== */
  {
    collection: 'attractions',
    slug: 'forbidden-city',
    pillar: 'places',
    persona: 'editorial',
    title: 'Forbidden City (Palace Museum)',
    chineseName: '故宫博物院',
    pinyin: 'Gùgōng Bówùyuàn',
    tagline: 'The world’s largest preserved imperial wooden palace complex—zero onsite ticket sales, strict 7-day 20:00 BJT drop.',
    taglineZh: '明清皇家紫禁城：无现场售票、严格提前 7 天晚 20:00 放票、逢周一闭馆。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: 'Passport Required', tone: 'verified' },
      { label: 'Closed Mondays', tone: 'danger' },
      { label: '7-Day 20:00 BJT Drop', tone: 'standby' },
    ],
    primaryAmapTerm: '故宫博物院午门',
    officialUrl: 'https://bookingticket.dpm.org.cn/',
    officialLabel: 'Palace Museum English Booking',
    cardSlug: 'taxi-beijing-qinghe',
    quickSpecs: [
      { label: 'Admission Fee', value: '¥60 Peak (Apr–Oct) · ¥40 Off-Peak' },
      { label: 'Ticket Drop Window', value: '7 days prior at 20:00 Beijing Time', mono: true },
      { label: 'Entry Gate ONLY', value: 'Meridian Gate (午门 · South)' },
      { label: 'Exit Gate', value: 'Gate of Divine Prowess (神武门 · North)' },
      { label: 'City Hub', value: 'Beijing (110000)', mono: true },
    ],
    whatNobodyTellsYou: 'You CANNOT enter from the north gate or buy walk-up tickets—and walking through Tiananmen Square to reach Meridian Gate requires a separate square reservation. Bypass Tiananmen Square queues by walking along Donghuamen (东华门) moat path directly to Meridian Gate.',
    checklist: [
      'Book on bookingticket.dpm.org.cn at 20:00 BJT exactly 7 days ahead (foreigners get an English email portal).',
      'Bring your physical passport—it IS your ticket at the security turnstiles.',
      'Add the ¥10 Treasure Gallery (珍宝馆) & Clock Gallery—best rooms inside the palace.',
    ],
    alternatives: [
      { name: 'Jingshan Park (景山公园)', verdict: '¥2 panoramic view overlooking Forbidden City right across North Gate', href: '/cities/beijing/' },
      { name: 'Mutianyu Great Wall', verdict: 'Pair for Day 2 of Beijing itinerary', href: '/attractions/mutianyu-great-wall/' },
    ],
    pulseStats: { worked: 44, partial: 6, failed: 2 },
    pulseFeed: [
      { status: 'worked', context: 'UK Visitor · English Portal', detail: 'Booked via official English site 7 days out; walked via Donghuamen to skip Tiananmen line.', ago: '1d ago' },
    ],
    disclaimers: [],
    attractionData: {
      releaseDaysAhead: 7,
      releaseBjtHour: 20,
      releaseBjtMinute: 0,
      mondayClosed: true,
      wrongStationAlert: 'Do NOT take a taxi to "Tiananmen" (drop-off blocked). Set pin to Donghuamen (东华门) or Wangfujing Metro Exit C.',
      staminaRating: 'Moderate · 12,000–16,000 flat stone steps (3.5–5 hours)',
      nearbyMesh: [
        { category: 'City Walk', name: 'Jingshan Park & Coal Hill Sunset', chineseName: '景山公园万春亭', distance: '300m North of Exit', note: '¥2 ticket · Best aerial photo of golden palace roofs.', amapQuery: '景山公园南门' },
        { category: 'Time-Honored Brand', name: 'Siji Minfu / Bianyifang Roast Duck', chineseName: '四季民福故宫店 / 便宜坊', distance: '500m East Moat', note: 'Pull queue number on Dianping 60 mins before exiting.', amapQuery: '故宫东华门 烤鸭' },
        { category: 'Free Museum', name: 'National Art Museum of China', chineseName: '中国美术馆', distance: '1.6km NE', note: 'Free with passport · Closed Mondays.', amapQuery: '中国美术馆' },
        { category: 'Tax-Free Shop', name: 'Wangfujing Department Store', chineseName: '王府井百货大楼', distance: '1.4km East', note: 'Departure Tax Refund 2.0 instant counter onsite.', amapQuery: '王府井百货大楼' },
      ],
      amapSearchChips: [
        { label: 'Jingshan Luzhu Stew', chineseQuery: '景山 卤煮' },
        { label: 'Donghuamen Roast Duck', chineseQuery: '东华门 烤鸭' },
        { label: 'Hutong Specialty Coffee', chineseQuery: '五道营胡同 咖啡' },
        { label: '24h Spa Near Wangfujing', chineseQuery: '东城区 汤泉 24小时' },
      ],
    },
  },
  {
    collection: 'attractions',
    slug: 'mutianyu-great-wall',
    pillar: 'places',
    persona: 'editorial',
    title: 'Mutianyu Great Wall',
    chineseName: '慕田峪长城',
    pinyin: 'Mùtiányù Chángchéng',
    tagline: 'Lush Ming-dynasty watchtowers, 60% fewer crowds than Badaling, and a thrilling alpine toboggan descent.',
    taglineZh: '风景与体验最佳的明长城精华段：人流比八达岭少六成，支持缆车上山与滑道下山。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: 'Open Daily (Incl. Mon)', tone: 'verified' },
      { label: 'Toboggan Descent', tone: 'editorial' },
    ],
    primaryAmapTerm: '慕田峪长城景区游客中心',
    quickSpecs: [
      { label: 'Entry + Shuttle + Lift', value: '¥40 Entry + ¥15 Shuttle + ¥140 RT Lift/Toboggan' },
      { label: 'Ticket Drop', value: 'Same-day available (book 1–3d ahead in Oct)' },
      { label: 'Best Tower Loop', value: 'Cable up Tower 14 → Walk to 20 → Toboggan from Tower 6' },
      { label: 'Drive From Downtown', value: '75–90 mins (Mubus / DiDi)' },
    ],
    whatNobodyTellsYou: 'Tower 14 cable car (closed gondola) and Tower 6 chairlift/toboggan are run by TWO different operators—do not accidentally buy a round-trip gondola if you want to ride the toboggan down from Tower 6!',
    checklist: ['Take direct Mubus from Dongzhimen (¥80 RT) or hire a round-trip DiDi/private car (~¥550).', 'Start at 08:30 AM to walk Tower 14–20 nearly alone.'],
    alternatives: [{ name: 'Badaling vs. Mutianyu Verdict', verdict: 'Full side-by-side comparison', href: '/compare/badaling-vs-mutianyu/' }],
    pulseStats: { worked: 38, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'US Couple · Mubus Dongzhimen', detail: 'Paid Alipay onboard; toboggan from Tower 6 was the highlight of our week.', ago: '1d ago' }],
    disclaimers: [],
    attractionData: {
      releaseDaysAhead: 3,
      releaseBjtHour: 8,
      releaseBjtMinute: 0,
      mondayClosed: false,
      wrongStationAlert: 'Mutianyu has NO direct HSR station! If someone tells you to go to Qinghe Station, that train goes to BADALING, not Mutianyu.',
      staminaRating: 'Moderate to Steep (Tower 19–20 “Hero Slope” has 45° stairs)',
      nearbyMesh: [
        { category: 'City Walk', name: 'Beigou Brickyard Village', chineseName: '北沟村瓦厂片区', distance: '2.4km South', note: 'Quiet Great Wall view cafes & glazed-tile heritage courtyard.', amapQuery: '怀柔北沟村' },
        { category: 'Time-Honored Brand', name: 'Huairou Rainbow Trout Farm', chineseName: '怀柔虹鳟鱼农家院', distance: '2.8km', note: 'Local specialty grilled cold-water trout after hiking.', amapQuery: '慕田峪 虹鳟鱼' },
      ],
      amapSearchChips: [
        { label: 'Mutianyu Mubus Pickup', chineseQuery: '东直门 慕巴士' },
        { label: 'Huairou Grilled Trout', chineseQuery: '慕田峪 虹鳟鱼' },
      ],
    },
  },
  {
    collection: 'attractions',
    slug: 'chengdu-panda-base',
    pillar: 'places',
    persona: 'editorial',
    title: 'Chengdu Giant Panda Research Base',
    chineseName: '成都大熊猫繁育研究基地',
    pinyin: 'Chéngdū Dàxióngmāo Jīdì',
    tagline: 'World’s premier giant & red panda breeding sanctuary—arrive at 07:30 AM sharp before nap time begins.',
    taglineZh: '全球最大大熊猫繁育基地：务必早 07:30 赶上晨间投喂，避开午间室内午睡。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: 'Open Daily', tone: 'verified' },
      { label: '07:30 AM Peak Window', tone: 'standby' },
    ],
    primaryAmapTerm: '成都大熊猫繁育研究基地南大门',
    quickSpecs: [
      { label: 'Entry Fee', value: '¥55 Adult · ¥30 Electric Shuttle' },
      { label: 'Ticket Drop', value: '7 days prior (AM vs PM timed slots)', mono: true },
      { label: 'City Hub', value: 'Chengdu (510100)', mono: true },
    ],
    whatNobodyTellsYou: 'Enter at the WEST Gate if you want the newer open valley enclosures with shorter lines, or SOUTH Gate for classic Sunshine Nursery & red panda trails—and NEVER skip the ¥30 shuttle inside because the expanded park covers 3.5 sq km.',
    checklist: ['Book the Morning (07:30–12:00) slot online with passport.', 'Head straight to Sunshine/Moon Delivery Houses first.'],
    alternatives: [{ name: 'Chengdu City Hub', verdict: 'Combine with Heming Teahouse & hotpot', href: '/cities/chengdu/' }],
    pulseStats: { worked: 31, partial: 4, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'EU Family · South Gate 07:45', detail: 'Saw 14 active pandas munching bamboo before 09:30.', ago: '2d ago' }],
    disclaimers: [],
    attractionData: {
      releaseDaysAhead: 7,
      releaseBjtHour: 10,
      releaseBjtMinute: 0,
      mondayClosed: false,
      wrongStationAlert: 'Metro Line 3 “Panda Avenue (熊猫大道)” still requires a 10-min shuttle bus or ¥12 taxi to South Gate.',
      staminaRating: 'Easy–Moderate · Hilly paved paths (shuttle recommended)',
      nearbyMesh: [
        { category: 'City Walk', name: 'Eastern Suburb Memory Creative Park', chineseName: '东郊记忆工业遗址', distance: '8km South', note: 'Converted Soviet-era radio factory full of indie cafes & streetwear.', amapQuery: '东郊记忆' },
        { category: 'Time-Honored Brand', name: 'Longchaoshou / Sichuan Hotpot', chineseName: '成都老火锅', distance: 'Downtown', note: 'Order yuan-yang half-mild broth pot.', amapQuery: '成都 社区老火锅' },
      ],
      amapSearchChips: [
        { label: 'Neighborhood Hotpot', chineseQuery: '成都 社区老火锅' },
        { label: 'Bamboo Teahouse', chineseQuery: '人民公园 鹤鸣茶社' },
      ],
    },
  },
  {
    collection: 'attractions',
    slug: 'terracotta-warriors',
    pillar: 'places',
    persona: 'editorial',
    title: 'Terracotta Warriors (Emperor Qinshihuang’s Mausoleum)',
    chineseName: '秦始皇帝陵博物院',
    pinyin: 'Qínshǐhuáng Bīngmǎyǒng',
    tagline: '8,000 life-sized 210 BC clay soldiers—beat 10:30 AM tour coaches by riding Metro Line 9 early.',
    taglineZh: '世界第八大奇迹秦兵马俑：坐地铁 9 号线早 08:30 入园避开旅游大巴峰值。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: 'Open Daily', tone: 'verified' }, { label: 'Passport Entry', tone: 'verified' }],
    primaryAmapTerm: '秦始皇帝陵博物院售票处',
    quickSpecs: [
      { label: 'Entry Fee', value: '¥120 (Includes Pit 1, 2, 3 & Lishan Garden shuttle)' },
      { label: 'Transit', value: 'Metro Line 9 → Huaqing Pool → 15m Bus 613 / DiDi' },
    ],
    whatNobodyTellsYou: 'Start with Pit 3 → Pit 2 → Pit 1 if arriving after 09:30 AM, and DO NOT skip the free shuttle to Lishan Garden (丽山园) included in your ¥120 ticket to see the Bronze Chariots Museum.',
    checklist: ['Ignore unofficial “fake Terracotta Army” buses near Xi’an Railway Station.', 'Book official English guide onsite inside the ticket hall (~¥150–¥200).'],
    alternatives: [{ name: 'Xi’an City Hub', verdict: 'Ming Wall & Sajinqiao night food', href: '/cities/xian/' }],
    pulseStats: { worked: 22, partial: 1, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'AU Solo · Metro Line 9', detail: 'Metro + ¥15 DiDi from Huaqing Pool beat every tour bus.', ago: '3d ago' }],
    disclaimers: [],
    attractionData: {
      releaseDaysAhead: 7,
      releaseBjtHour: 8,
      releaseBjtMinute: 30,
      mondayClosed: false,
      wrongStationAlert: 'Beware fake blue buses outside Xi’an Station promising “direct to Warriors” that divert to private wax museums.',
      staminaRating: 'Easy · Flat paved paths (3–4 hours)',
      nearbyMesh: [
        { category: 'Free Museum', name: 'Bronze Chariots Museum (Lishan Garden)', chineseName: '铜车马博物馆', distance: '2.2km West (Free Shuttle)', note: 'Included in your ¥120 ticket—90% of tourists miss it.', amapQuery: '秦始皇帝陵丽山园' },
      ],
      amapSearchChips: [{ label: 'Biangbiang Noodles', chineseQuery: '西安 洒金桥 裤带面' }],
    },
  },

  /* ===================== IN-CHINA WESTERN APP / MEDS MAP (/in-china/[slug]/) ===================== */
  {
    collection: 'in-china',
    slug: 'google-maps',
    pillar: 'visit',
    persona: 'safety',
    title: 'Google Maps in China',
    chineseName: '谷歌地图在华实测与替代',
    pinyin: 'Gǔgē Dìtú',
    tagline: 'Blocked on local Wi-Fi AND broken by 300–500m GCJ-02 GPS offset even with a VPN/eSIM. Switch to Amap or Apple Maps.',
    taglineZh: '即使翻墙/漫游也存在 300–500 米 GCJ-02 坐标偏移且POI老旧，务必切换高德地图英文版或 Apple Maps。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '🚫 Blocked on Local Net', tone: 'danger' },
      { label: '⚠️ GCJ-02 Offset Even on VPN', tone: 'standby' },
      { label: 'Use Amap / Apple Maps', tone: 'verified' },
    ],
    quickSpecs: [
      { label: 'Local Wi-Fi / SIM', value: 'Blocked (Timeout)' },
      { label: 'Roaming eSIM / VPN', value: 'Loads, but road layer shifts 300–500m' },
      { label: 'Best iOS Substitute', value: 'Apple Maps (Auto-switches to AutoNavi data)' },
      { label: 'Best Android / Cross', value: 'Amap English (高德地图 · Free, no +86)' },
    ],
    whatNobodyTellsYou: 'Even when Google Maps loads over your roaming eSIM, satellite tiles (WGS-84) and Chinese street overlays (GCJ-02) do not align—plus most restaurants and metro exits opened since 2018 are missing.',
    checklist: [
      'iPhone users: Open native Apple Maps—once in China it automatically pulls real-time AutoNavi transit & walking data in English.',
      'Android & power users: Install Amap (高德地图), toggle English UI in Settings, and paste Chinese names from ChinaWao.',
    ],
    alternatives: [
      { name: 'Amap vs. Apple Maps Comparison', verdict: 'Detailed accuracy & ride-hail verdict', href: '/compare/amap-vs-apple-maps/' },
      { name: 'WhatsApp in China', verdict: 'Works natively on roaming eSIM', href: '/in-china/whatsapp/' },
    ],
    pulseStats: { worked: 4, partial: 11, failed: 62 },
    pulseFeed: [
      { status: 'failed', context: 'Pixel 9 · Roaming eSIM Shanghai', detail: 'Google Maps showed our hotel in the middle of the Huangpu River; Amap English nailed every exit.', ago: '5h ago' },
    ],
    disclaimers: [],
  },
  {
    collection: 'in-china',
    slug: 'whatsapp',
    pillar: 'visit',
    persona: 'safety',
    title: 'WhatsApp in China',
    chineseName: 'WhatsApp 在华联网实测',
    pinyin: 'WhatsApp',
    tagline: 'Blocked on hotel Wi-Fi and local +86 SIMs, but works 100% natively over HK/SG roaming eSIMs without VPN.',
    taglineZh: '本地 Wi-Fi 与 +86 卡屏蔽，但使用境外漫游 eSIM 可零配置原生直连收发消息与语音通话。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: '✅ Works on Roaming eSIM', tone: 'verified' },
      { label: '🚫 Blocked on Hotel Wi-Fi', tone: 'danger' },
    ],
    quickSpecs: [
      { label: 'Roaming eSIM', value: 'Works natively (no VPN needed)' },
      { label: 'Hotel / Cafe Wi-Fi', value: 'Blocked unless VPN active' },
      { label: 'Local Equivalent', value: 'WeChat (微信) for hotels, drivers & factories' },
    ],
    whatNobodyTellsYou: 'Turn OFF Wi-Fi auto-join on hotel networks when relying on a roaming eSIM—if your phone silently hops onto hotel Wi-Fi, WhatsApp notifications instantly stop arriving.',
    checklist: ['Buy a 10–20GB HK/SG breakout eSIM before flying.', 'Install WeChat to contact Chinese hotels, guides, and suppliers.'],
    alternatives: [{ name: 'eSIM vs. Local +86 SIM', verdict: 'Full connectivity comparison', href: '/compare/esim-vs-local-sim/' }],
    pulseStats: { worked: 58, partial: 5, failed: 3 },
    pulseFeed: [{ status: 'worked', context: 'iPhone 16 · HK Roaming eSIM', detail: 'WhatsApp video calls to London ran crisp on 5G across Beijing & Xi’an.', ago: '3h ago' }],
    disclaimers: [],
  },
  {
    collection: 'in-china',
    slug: 'adderall',
    pillar: 'visit',
    persona: 'safety',
    title: 'Adderall & Controlled Prescription Meds in China',
    chineseName: 'Adderall 与精神类处方药入境红线',
    pinyin: 'Chǔfāngyào Rùjìng',
    tagline: 'HIGH-RISK CONTROLLED SUBSTANCE: Amphetamine salts (Adderall) are Class-I psychotropics in China. Do NOT bring without prior verification.',
    taglineZh: '高危管制警示：Adderall 含苯丙胺盐，在中国属严格管制的第一类精神药品，切勿未经核实直接携带入境。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Statutory',
    statusBadges: [
      { label: '🚫 Strictly Controlled', tone: 'danger' },
      { label: 'Customs Red Channel', tone: 'standby' },
      { label: 'Consult Embassy / Doctor', tone: 'neutral' },
    ],
    officialUrl: 'http://english.customs.gov.cn/',
    officialLabel: 'China Customs (GACC)',
    quickSpecs: [
      { label: 'Legal Classification', value: 'Amphetamine · Class-I Psychotropic (NMPA/MPS)' },
      { label: 'Personal Allowance', value: 'Strictly prohibited / requires special permit' },
      { label: 'Legal Alternative (ADHD)', value: 'Methylphenidate (Concerta) w/ strict Rx + Red Channel' },
      { label: 'Customs Hotline', value: '12360 (China Customs)', mono: true },
    ],
    whatNobodyTellsYou: 'A US doctor’s prescription bottle does NOT exempt Adderall at Chinese Customs. Travelers with ADHD typically consult their physician before flying to pause or switch to an approved alternative, carrying an original signed physician letter, pharmacy label, and only the exact trip-length supply declared at the Red Channel.',
    checklist: [
      'Do NOT pack amphetamine-based stimulants (Adderall, Vyvanse, Dexedrine) in luggage.',
      'For permitted non-narcotic prescriptions, keep original pharmacy bottles + English/Chinese doctor letter.',
      'Check NMPA / China Customs 12360 before packing codeine, tramadol, or sleeping pills.',
    ],
    alternatives: [{ name: 'Customs & Baggage Rules Guide', verdict: 'Full prohibited & declaration list', href: '/guides/customs-baggage-drones/' }],
    pulseStats: { worked: 2, partial: 4, failed: 19 },
    pulseFeed: [{ status: 'partial', context: 'US Traveler · Concerta + Doctor Letter', detail: 'Declared 14-day Concerta supply at PVG Red Channel with hospital letter; cleared after 15-min review.', ago: '5d ago' }],
    disclaimers: ['prescription', 'medical', 'legal'],
  },

  /* ===================== APP ERRORS VISUAL RESCUE (/errors/[slug]/) ===================== */
  {
    collection: 'errors',
    slug: 'wechat-restricted',
    pillar: 'visit',
    persona: 'safety',
    title: 'WeChat Account Restricted / Blocked Rescue',
    chineseName: '微信账号受限/封号全图解救火',
    pinyin: 'Wēixìn Zhànghào Shòuxiàn',
    tagline: 'Red-box annotated Chinese unblock screens—recover your account without losing payment access mid-trip.',
    taglineZh: '中文报错弹窗红框热区标注：教你一步步完成自助解封或好友辅助验证。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: 'Visual Red-Box Rescue', tone: 'danger' },
      { label: 'No +86 Required', tone: 'verified' },
    ],
    quickSpecs: [
      { label: 'Trigger Cause #1', value: 'Brand-new account + sudden VPN IP jump' },
      { label: 'Recovery Path', value: 'Self-unblock (自助解封) → SMS or Helper Verify' },
      { label: 'Helper Requirement', value: 'Any WeChat user active > 6 months (not necessarily your friend)' },
      { label: 'Immediate Backup', value: 'Switch to Alipay immediately while unblocking' },
    ],
    whatNobodyTellsYou: 'If WeChat asks for “Friend Verification” (好友辅助验证), the helper does NOT always need to be on your contacts list—a hotel receptionist or local friend with a mainland WeChat Pay account > 6 months old can often scan or approve via WeChat Team.',
    checklist: [
      'Disconnect unstable VPN before tapping “Determine / Unblock” (确定).',
      'Tap the interactive red hotspots below to map every Chinese button to English.',
      'If stuck on SMS loop, use Alipay for all payments and contact WeChat Help Center online.',
    ],
    alternatives: [
      { name: '12306 Passport Verification Fix', verdict: 'Fix rail identity mismatch', href: '/errors/12306-passport-failed/' },
      { name: 'Alipay ¥200 Limit Explained', verdict: 'Resolve foreign card cap popups', href: '/errors/alipay-200rmb-limit/' },
    ],
    pulseStats: { worked: 48, partial: 14, failed: 5 },
    pulseFeed: [{ status: 'worked', context: 'UK Traveler · Beijing Hotel Desk', detail: 'Followed red-box hotspot #2 and hotel staff helped verify via WeChat Team in 3 mins.', ago: '1d ago' }],
    disclaimers: [],
    hotspotData: {
      canvasTitle: 'WeChat Restriction Popup (Interactive Annotated Screen)',
      screenHeaderChinese: '安全提示 · 账号限制登录',
      screenLines: [
        '当前账号因存在异常操作（新设备/高频切换网络），已被临时限制登录。',
        '请点击下方【确定】进入自助解封流程，或联系客服。',
      ],
      hotspots: [
        { id: 1, xPercent: 22, yPercent: 28, chineseText: '异常操作 / 临时限制', englishInstruction: 'Temporary lock (NOT permanent ban). Usually triggered by new signup + IP change.', warning: 'Turn OFF VPN before proceeding.' },
        { id: 2, xPercent: 72, yPercent: 66, chineseText: '确定 → 自助解封', englishInstruction: 'Tap this green/primary button to enter Self-Unblock flow.' },
        { id: 3, xPercent: 48, yPercent: 82, chineseText: '发送短信 / 好友辅助验证', englishInstruction: 'Send SMS from your registered phone OR enter a helper’s phone number active > 6 months.' },
      ],
    },
  },
  {
    collection: 'errors',
    slug: '12306-passport-failed',
    pillar: 'visit',
    persona: 'safety',
    title: 'Railway 12306 Passport Verification Failed',
    chineseName: '12306 外籍护照核验失败救火',
    pinyin: '12306 Hùzhào Héyàn',
    tagline: 'Fix the #1 foreign rail error: MRZ surname-first order, hyphen stripping, and glare-free bio-page upload.',
    taglineZh: '解决外籍游客 12306 核验失败的三大根因：姓前名后格式、去掉连字符与强反光拍照。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: 'Visual Red-Box Rescue', tone: 'standby' }, { label: '2–5 Min Fix', tone: 'verified' }],
    quickSpecs: [
      { label: 'Name Format', value: 'SURNAME GIVENNAME (Exact MRZ bottom line)', mono: true },
      { label: 'Review Wait', value: '2–15 mins online (or instant at any rail station window)' },
    ],
    whatNobodyTellsYou: 'Do NOT enter middle-name punctuation or hyphens—copy the exact uppercase Latin string from the machine-readable zone (<<<) at the bottom of your passport photo page.',
    checklist: ['Switch 12306 app language to English in bottom-right Profile → Settings.', 'Upload passport photo on dark matte background with zero flash glare.'],
    alternatives: [{ name: 'Beijing → Shanghai Route', verdict: 'Check stations & schedules', href: '/routes/beijing-to-shanghai/' }],
    pulseStats: { worked: 36, partial: 4, failed: 1 },
    pulseFeed: [{ status: 'worked', context: 'US Traveler · 12306 App', detail: 'Putting SURNAME first fixed my rejection within 4 minutes.', ago: '6h ago' }],
    disclaimers: [],
    hotspotData: {
      canvasTitle: '12306 Identity Verification Form (Annotated)',
      screenHeaderChinese: '铁路12306 · 乘车人身份核验',
      screenLines: [
        '证件类型：护照 (Passport) · 状态：核验未通过',
        '请核对姓名顺序与护照底部机读码一致，并重新上传清晰照片。',
      ],
      hotspots: [
        { id: 1, xPercent: 25, yPercent: 32, chineseText: '姓名 (Name)', englishInstruction: 'Enter SURNAME space GIVENNAME in ALL CAPS matching bottom MRZ line.' },
        { id: 2, xPercent: 70, yPercent: 54, chineseText: '核验状态：待核验', englishInstruction: 'Tap here to upload bio-page photo + selfie holding passport.' },
        { id: 3, xPercent: 50, yPercent: 80, chineseText: '人工窗口核验', englishInstruction: 'Fallback: Show physical passport at any mainland rail ticket window for 60-second instant verification.' },
      ],
    },
  },
  {
    collection: 'errors',
    slug: 'alipay-200rmb-limit',
    pillar: 'visit',
    persona: 'safety',
    title: 'Alipay Foreign Card Declined / ¥200 Fee Prompt',
    chineseName: '支付宝外卡超额/3%手续费弹窗解析',
    pinyin: 'Zhīfùbǎo Wàikǎ Xiàn’é',
    tagline: 'Why payments over ¥200 trigger a 3% prompt or bank decline—and how to raise your verified annual cap to $50,000.',
    taglineZh: '看懂单笔 200 元手续费提示、个人收款码拒付原因与护照实名提额步骤。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: '0% Fee ≤ ¥200', tone: 'verified' }, { label: '3% Fee > ¥200', tone: 'standby' }],
    quickSpecs: [
      { label: '0% Fee Cap', value: '≤ ¥200 RMB per transaction' },
      { label: 'Verified Cap', value: 'Single $5,000 · Annual $50,000 USD' },
    ],
    whatNobodyTellsYou: 'If a payment fails with “Merchant does not support international cards,” the seller is displaying a personal peer-to-peer transfer QR rather than a merchant QR. Switch to WeChat Pay or ask for their commercial QR (商家收款码).',
    checklist: ['Complete passport verification in Me → Settings → Account & Security.', 'Split hotel or shopping bills ≤ ¥200 only when merchants allow; otherwise pay 3% or tap card directly.'],
    alternatives: [{ name: 'Alipay vs. WeChat Pay', verdict: 'Side-by-side payment comparison', href: '/compare/alipay-vs-wechat-pay/' }],
    pulseStats: { worked: 42, partial: 5, failed: 2 },
    pulseFeed: [{ status: 'worked', context: 'EU Cardholder · Alipay', detail: 'Uploading passport lifted my ¥15,000 cap immediately.', ago: '1d ago' }],
    disclaimers: [],
    hotspotData: {
      canvasTitle: 'Alipay Payment Prompt (Annotated)',
      screenHeaderChinese: '支付宝 · 国际银行卡支付确认',
      screenLines: [
        '当前订单金额 ¥260.00，单笔超过 ¥200 将收取 3% 国际卡服务费（¥7.80）。',
        '若提示不支持外卡，请向商家确认是否为【商家收款码】。',
      ],
      hotspots: [
        { id: 1, xPercent: 28, yPercent: 35, chineseText: '单笔超 ¥200 收 3%', englishInstruction: 'Standard international card network fee applies only on single bills above ¥200.' },
        { id: 2, xPercent: 72, yPercent: 74, chineseText: '立即付款 (Pay Now)', englishInstruction: 'Confirm payment in RMB—always reject dynamic currency conversion (DCC).' },
      ],
    },
  },

  /* ===================== OFFICIAL FORMS (/documents/[slug]/) ===================== */
  {
    collection: 'documents',
    slug: 'arrival-card',
    pillar: 'visit',
    persona: 'safety',
    title: 'China Arrival Card (外国人入境卡) Annotated',
    chineseName: '外国人入境卡 / 240h 临时入境卡',
    pinyin: 'Wàiguórén Rùjìngkǎ',
    tagline: 'Red-box field-by-field guide for both the yellow regular Arrival Card and the blue 240-Hour Transit Card.',
    taglineZh: '入境前提前照抄：区分常规黄色入境卡与 240h 蓝色临时入境卡，逐栏红框标注。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: 'Airport Required', tone: 'verified' }, { label: 'Yellow vs Blue Card', tone: 'standby' }],
    quickSpecs: [
      { label: 'Regular / 30d Free', value: 'Yellow Arrival Card (or Airport Kiosk QR)' },
      { label: '240h Transit Entry', value: 'Blue Temporary Entry Permit Card' },
    ],
    whatNobodyTellsYou: 'Save your FIRST hotel’s full address and phone number in your phone notes BEFORE landing—immigration officers will send you back to the desk if the “Address in China” line only says “Shanghai.”',
    checklist: ['Carry a black pen in your carry-on bag.', 'Keep your departure stub safely tucked inside your passport.'],
    alternatives: [{ name: '240h Transit Playbook', verdict: 'Full airport arrival steps', href: '/guides/240h-visa-free-transit/' }],
    pulseStats: { worked: 71, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'PVG Terminal 2', detail: 'Filled the blue card right before the 240h desk—zero questions asked.', ago: '3h ago' }],
    disclaimers: ['visa'],
    hotspotData: {
      canvasTitle: 'China Arrival Card — Field-by-Field Red-Box Map',
      screenHeaderChinese: '外国人入境卡 / ARRIVAL CARD (NIA)',
      screenLines: [
        '姓 Family Name · 名 Given Names · 国籍 Nationality · 护照号 Passport No.',
        '在华住址 Address in China · 航班号 Flight No. · 邀请单位/联系人 Inviter',
      ],
      hotspots: [
        { id: 1, xPercent: 20, yPercent: 30, chineseText: '在华住址 (Address)', englishInstruction: 'Write full hotel name + street + city (e.g., Grand Hyatt, 88 Century Ave, Shanghai).' },
        { id: 2, xPercent: 55, yPercent: 52, chineseText: '签证号码 (Visa No.)', englishInstruction: 'Write "VISA FREE" or "240H TRANSIT" if entering without a sticker visa.' },
        { id: 3, xPercent: 78, yPercent: 75, chineseText: '联程离境航班 (Onward)', englishInstruction: 'On Blue 240h Card: write exact onward flight number & third country/region C.' },
      ],
    },
  },
  {
    collection: 'documents',
    slug: 'temp-residence-reg',
    pillar: 'live',
    persona: 'safety',
    title: '24-Hour Temporary Residence Registration Form',
    chineseName: '境外人员临时住宿登记表',
    pinyin: 'Línshí Zhùsù Dēngjìbiǎo',
    tagline: 'Mandatory within 24 hours whenever staying at a private apartment or friend’s home (hotels file automatically).',
    taglineZh: '住民宿、朋友家或长租公寓必须在入住 24 小时内申报（正规酒店前台会自动上报）。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Statutory',
    statusBadges: [{ label: 'Mandatory 24h Window', tone: 'danger' }, { label: 'Hotels Auto-File', tone: 'verified' }],
    quickSpecs: [
      { label: 'Deadline', value: '24h urban · 72h rural (Exit-Entry Law Art. 39)' },
      { label: 'Online Cities', value: 'Shanghai, Beijing, Guangzhou, Shenzhen, Hangzhou' },
    ],
    whatNobodyTellsYou: 'Every time you re-enter China from a weekend trip to Hong Kong or Japan—even returning to your OWN leased apartment—you must re-register within 24 hours.',
    checklist: ['Keep a PDF of your stamped registration slip for bank accounts and work permits.'],
    alternatives: [{ name: 'Study & Work Permit Playbook', verdict: '30-day residence permit flow', href: '/guides/study-work-residence/' }],
    pulseStats: { worked: 29, partial: 3, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'Shanghai Self-Service Portal', detail: 'Uploaded passport stamp + lease online and received PDF slip in 10 minutes.', ago: '2d ago' }],
    disclaimers: ['visa', 'legal'],
    hotspotData: {
      canvasTitle: 'Temporary Residence Registration Upload Fields',
      screenHeaderChinese: '境外人员临时住宿线上申报',
      screenLines: [
        '1. 护照首页与最新入境章页 · 2. 详细门牌地址与房东手机号 · 3. 租房合同/房产证',
      ],
      hotspots: [
        { id: 1, xPercent: 25, yPercent: 38, chineseText: '入境章页上传', englishInstruction: 'Upload both passport bio page AND latest immigration entry stamp.' },
        { id: 2, xPercent: 72, yPercent: 68, chineseText: '下载电子回执', englishInstruction: 'Save the stamped PDF receipt—required for Work Permits & bank opening.' },
      ],
    },
  },
  {
    collection: 'documents',
    slug: 'tax-refund-form',
    pillar: 'visit',
    persona: 'safety',
    title: 'Departure Tax Refund 2.0 Application Form',
    chineseName: '境外旅客购物离境退税申请单',
    pinyin: 'Líjìng Tuìshuì Shēnqǐngdān',
    tagline: 'Claim 9% net VAT back on same-day store purchases ≥ ¥200 RMB—follow the 3-step airport stamp flow.',
    taglineZh: '单店单日满 ¥200 起退（实退 9%），机场安检前海关核验签章三步图解。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Statutory',
    statusBadges: [{ label: '≥ ¥200 Threshold', tone: 'verified' }, { label: '9% Net Refund', tone: 'editorial' }],
    quickSpecs: [
      { label: 'Minimum Spend', value: '¥200 RMB same store / same day' },
      { label: 'Net Refund', value: '9% (11% VAT − 2% agency fee)' },
    ],
    whatNobodyTellsYou: 'Go to the Airport Customs Tax Refund Counter BEFORE checking your suitcase—officers must inspect unopened goods before stamping your form.',
    checklist: ['Keep fapiao (发票) + Tax Refund Form + unopened goods in accessible luggage.'],
    alternatives: [{ name: 'Budget & Tax Refund Calc', verdict: 'Compute exact refund in RMB', href: '/tools/budget-calculator/' }],
    pulseStats: { worked: 26, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'PVG Terminal 2 Tax Counter', detail: 'Instant Alipay refund landed in 30 seconds after Customs stamp.', ago: '1d ago' }],
    disclaimers: ['tax'],
    hotspotData: {
      canvasTitle: 'Departure Tax Refund Form Key Fields',
      screenHeaderChinese: '离境退税申请单（满 ¥200 起退）',
      screenLines: [
        '发票号码 Fapiao No. · 退税金额 9% · 海关验核签章栏 Customs Stamp Box',
      ],
      hotspots: [
        { id: 1, xPercent: 28, yPercent: 36, chineseText: '核对护照号与姓名', englishInstruction: 'Check passport number at store counter before leaving the mall.' },
        { id: 2, xPercent: 70, yPercent: 72, chineseText: '海关验核章', englishInstruction: 'MUST be stamped by Airport Customs BEFORE luggage drop-off.' },
      ],
    },
  },

  /* ===================== HOW-TO-USE DEVICES (/how-to-use/[slug]/) ===================== */
  {
    collection: 'how-to-use',
    slug: 'hotel-washing-machine',
    pillar: 'visit',
    persona: 'safety',
    title: 'How to Use a Chinese Hotel Washing Machine',
    chineseName: '酒店自助洗衣机/烘干机中文面板图解',
    pinyin: 'Xǐyījī Miànbǎn',
    tagline: 'Decode the 6 universal Chinese laundry buttons so you get a 30-min wash instead of a 3-hour 90°C boil.',
    taglineZh: '一眼看懂国产酒店洗衣房最常见的 6 个中文按键，告别误选 90℃ 煮洗。',
    lastVerified: '2026-11-17',
    tier: 'Tier-B Field Curated',
    statusBadges: [{ label: 'Visual Panel Guide', tone: 'verified' }, { label: 'Free at Most Chains', tone: 'editorial' }],
    quickSpecs: [
      { label: 'Quick Wash', value: '快洗 / 速洗 (15–30 mins)' },
      { label: 'Standard Mix', value: '混合洗 / 标准洗 (45–55 mins)' },
      { label: 'Dryer Cycle', value: '烘干 / 定时烘 (60 mins)' },
    ],
    whatNobodyTellsYou: 'Mid-range Chinese chains (Atour 亚朵, Ji Hotel 全季, Orange 桔子) offer FREE self-service washers, dryers, and auto-dispensed detergent—many will even collect and return your clothes via hotel WeChat.',
    checklist: ['Press 电源 (Power) → select 快洗 (Quick) or 混合 (Mix) → press 启动/暂停 (Start).'],
    alternatives: [{ name: 'Official Forms & Rescue Hub', verdict: 'All visual rescue screens', href: '/guides/official-forms-app-errors/' }],
    pulseStats: { worked: 34, partial: 1, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'Atour Hotel Shanghai', detail: 'Used hotspot #2 for 30-min wash + dryer—saved $60 in laundry fees.', ago: '1d ago' }],
    disclaimers: [],
    hotspotData: {
      canvasTitle: 'Standard Chinese Hotel Washer/Dryer Control Panel',
      screenHeaderChinese: '自助洗衣房 · 滚筒洗烘一体机面板',
      screenLines: [
        '[电源]   [快洗 15′]   [混合/标准]   [洗+烘]   [单脱水]   [启动/暂停]',
      ],
      hotspots: [
        { id: 1, xPercent: 18, yPercent: 52, chineseText: '快洗 (Quick Wash)', englishInstruction: '15–30 min cool wash—safest default for travel clothes.' },
        { id: 2, xPercent: 50, yPercent: 52, chineseText: '洗+烘 (Wash & Dry)', englishInstruction: 'All-in-one wash + dry (2.5–3 hours). Do not overload drum.' },
        { id: 3, xPercent: 82, yPercent: 52, chineseText: '启动/暂停 (Start)', englishInstruction: 'Tap to begin; hold 3s to unlock child lock (童锁) if locked.' },
      ],
    },
  },

  /* ===================== FULLSCREEN SHOW-TO-LOCAL CARDS (/cards/[slug]/) ===================== */
  {
    collection: 'cards',
    slug: 'peanut-allergy-sos',
    pillar: 'culture',
    persona: 'safety',
    title: 'Severe Peanut & Nut Oil Allergy Kitchen Card',
    chineseName: '重度花生与坚果油过敏后厨字卡',
    pinyin: 'Huāshēng Guòmǐn',
    tagline: 'One-tap fullscreen black-and-yellow kitchen warning with GB/T 30240 phrasing and Mandarin speech playback.',
    taglineZh: '一键切换纯黑底亮黄超大字模式，专治中餐后厨常用花生油与坚果碎风险。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [
      { label: 'Fullscreen Show Mode', tone: 'danger' },
      { label: 'Kitchen Safe Phrasing', tone: 'verified' },
    ],
    quickSpecs: [
      { label: 'Critical Risk', value: 'Peanut oil (花生油) is common in Cantonese/Southern kitchens' },
      { label: 'Safe Oil Ask', value: 'Soybean (大豆油) / Corn (玉米油) / Rapeseed (菜籽油)' },
      { label: 'Emergency Dial', value: '120 Ambulance', mono: true },
    ],
    whatNobodyTellsYou: 'Simply saying “no peanuts” (不要花生) only removes whole nuts—many kitchens still fry with peanut oil (花生油). Our fullscreen card explicitly asks the chef to check cooking oil, sauces, and wok cross-contamination.',
    checklist: ['Show fullscreen mode to BOTH server and kitchen lead before ordering.', 'Carry your EpiPen in carry-on with doctor note.'],
    alternatives: [
      { name: 'Peanut Allergy Traveler Hub', verdict: 'Safe cuisines & restaurant guide', href: '/for/peanut-allergy/' },
      { name: 'Beijing Qinghe Taxi Card', verdict: 'Anti-wrong-station driver card', href: '/cards/taxi-beijing-qinghe/' },
    ],
    pulseStats: { worked: 51, partial: 3, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'UK Traveler · Guangzhou', detail: 'Waiter immediately took my phone to the chef and switched our wok to corn oil.', ago: '8h ago' }],
    disclaimers: ['allergy', 'medical'],
    cardData: {
      scenario: 'RESTAURANT KITCHEN · SEVERE ALLERGY',
      gb30240En: 'I have a life-threatening allergy to peanuts and peanut oil. Please do NOT use peanuts, peanut oil, or nut sauces, and please clean the wok before cooking.',
      largeHanzi: '我对花生和花生油严重过敏（会危及生命）！请千万不要放花生、坚果或用花生油炒菜，请帮忙刷锅。非常感谢！',
      pinyinLine: 'Wǒ duì huāshēng hé huāshēngyóu yánzhòng guòmǐn! Qǐng qiānwàn búyào yòng huāshēngyóu, qǐng shuāguō. Xièxie!',
      subNoteChinese: '可使用：玉米油 / 大豆油 / 菜籽油 / 橄榄油',
      subNoteEn: 'Safe oils: Corn oil · Soybean oil · Rapeseed oil · Olive oil',
      theme: 'yellow-black',
    },
  },
  {
    collection: 'cards',
    slug: 'taxi-beijing-qinghe',
    pillar: 'visit',
    persona: 'safety',
    title: 'Beijing Qinghe HSR Station Taxi Card (清河站)',
    chineseName: '北京清河高铁站防走错司机卡',
    pinyin: 'Běijīng Qīnghé Zhàn',
    tagline: 'Show your driver the exact Great Wall HSR station—prevents being dropped at Beijing North Station by mistake.',
    taglineZh: '去八达岭长城动车高频始发站：全屏超大字出示司机，严防错送北京北站。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: 'Wrong-Station Guard', tone: 'danger' }, { label: 'Fullscreen Show Mode', tone: 'verified' }],
    primaryAmapTerm: '清河站',
    quickSpecs: [
      { label: 'Station Name', value: '清河站 (Qinghe Railway Station · Haidian)', mono: true },
      { label: 'Metro Direct', value: 'Line 13 & Changping Line (Inside Station)' },
      { label: 'Common Mix-Up', value: 'NOT 北京北站 (Beijing North, 11 km away!)' },
    ],
    whatNobodyTellsYou: 'Over 60% of Badaling Great Wall bullet trains depart from Qinghe Station (清河站), not Beijing North. Always verify the 3 characters on your 12306 confirmation.',
    checklist: ['Arrive 35 minutes before train departure for passport security.', 'Tap “Fullscreen Show-to-Driver Mode” below when boarding taxi.'],
    alternatives: [{ name: 'Badaling vs. Mutianyu', verdict: 'Compare wall access options', href: '/compare/badaling-vs-mutianyu/' }],
    pulseStats: { worked: 33, partial: 1, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'US Visitor · Beijing Taxi', detail: 'Driver smiled and drove straight to Qinghe West drop-off.', ago: '1d ago' }],
    disclaimers: [],
    cardData: {
      scenario: 'TAXI DRIVER · ANTI-WRONG-STATION CARD',
      gb30240En: 'Please take me to Qinghe Railway Station (Haidian District — NOT Beijing North Station). Thank you!',
      largeHanzi: '师傅您好，请送我去【海淀区 · 清河高铁站】送客落客区（不是北京北站）。谢谢！',
      pinyinLine: 'Shīfu nínhǎo, qǐng sòng wǒ qù Hǎidiànqū Qīnghé Gāotiězhàn (bú shì Běijīng Běizhàn). Xièxie!',
      subNoteChinese: '导航搜索词：清河站-西落客平台',
      subNoteEn: 'Amap Pin: Qinghe Railway Station West Drop-off',
      theme: 'white-black',
    },
  },
  {
    collection: 'cards',
    slug: 'hotel-checkin-passport',
    pillar: 'visit',
    persona: 'safety',
    title: 'Hotel Foreign Passport Check-In Card',
    chineseName: '外籍护照酒店入住登记出示卡',
    pinyin: 'Hùzhào Rùzhù Dēngjì',
    tagline: 'Polite Chinese front-desk note referencing the 2024 MPS/MOFCOM circular confirming foreign guest check-in.',
    taglineZh: '礼貌出示前台：协助快速完成外籍护照扫描与公安住宿登记系统录入。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    statusBadges: [{ label: 'Fullscreen Show Mode', tone: 'verified' }],
    quickSpecs: [{ label: 'Policy Basis', value: '2024 MPS / MOFCOM Joint Notice on Foreign Hotel Reception' }],
    whatNobodyTellsYou: 'Small local hotels rarely refuse foreigners out of malice—often a new night clerk simply hasn’t used the passport scanner tab in their police registration software yet.',
    checklist: ['Show booking confirmation + passport entry stamp calmly.'],
    alternatives: [{ name: '24h Police Registration Form', verdict: 'If staying at an apartment', href: '/documents/temp-residence-reg/' }],
    pulseStats: { worked: 27, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'French Traveler · Suzhou', detail: 'Receptionist read the card, smiled, and checked us in within 3 minutes.', ago: '2d ago' }],
    disclaimers: [],
    cardData: {
      scenario: 'HOTEL FRONT DESK · CHECK-IN HELP',
      gb30240En: 'Hello, I have a confirmed reservation. Here is my passport and entry stamp for registration. Thank you for your help!',
      largeHanzi: '您好，我已预订房间。这是我的护照原件和本次入境章页，麻烦您帮忙办理外籍入住登记。非常感谢！',
      pinyinLine: 'Nínhǎo, wǒ yǐ yùdìng fángjiān. Zhè shì wǒ de hùzhào hé rùjìngzhāng, máfan bànlǐ rùzhù dēngjì. Xièxie!',
      subNoteChinese: '如需帮忙核对信息，请随时告诉我',
      subNoteEn: 'Passport bio page + latest entry stamp ready',
      theme: 'white-black',
    },
  },

  /* ===================== COMPLIANCE & WAF GUIDES (/compliance/[slug]/) ===================== */
  {
    collection: 'compliance',
    slug: 'uscc-gsxt-lookup',
    pillar: 'business',
    persona: 'legal',
    title: '18-Digit USCC & SAMR GSXT Official Verification Desk',
    chineseName: '18 位统一社会信用代码与国家企信网核验台',
    pinyin: 'Guójiā Qǐxìnwǎng Héyàn',
    tagline: 'Dual-column due diligence desk: validate GB 32100-2015 check digits locally, then follow annotated steps on WAF-protected GSXT.',
    taglineZh: '《律所尽调》双栏核验台：左栏本地校验 18 位 USCC 与生成中文检索词，右栏引导直达瑞数 WAF 保护的官网查验。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Statutory',
    statusBadges: [
      { label: 'WAF-Protected Official Standby', tone: 'standby' },
      { label: 'GB 32100-2015 Local Check', tone: 'verified' },
    ],
    officialUrl: 'https://www.gsxt.gov.cn/',
    officialLabel: 'Open SAMR GSXT Official Portal',
    quickSpecs: [
      { label: 'Legal Standard', value: 'GB 32100-2015 (18-Char USCC)', mono: true },
      { label: 'Portal Access', value: 'WAF-Protected (Interactive Browser Required)' },
      { label: 'Authority', value: 'SAMR (State Admin for Market Regulation)' },
      { label: 'Key Red Flags', value: '经营异常 (Abnormal) · 严重违法 (Blacklist)' },
    ],
    whatNobodyTellsYou: 'Because China’s official GSXT registry uses dynamic anti-bot WAF (412/521) to block automated scrapers, ChinaWao NEVER violates official access rules—instead, we validate checksums offline and hand you exact Chinese queries and slide-captcha field walkthroughs.',
    checklist: [
      'Validate the supplier’s 18-digit USCC check digit on the left panel before spending time on quotes.',
      'Check “Registration Status” (登记状态) reads 存续 (Active) and “Business Scope” (经营范围) includes manufacturing if they claim to be a factory.',
    ],
    alternatives: [
      { name: 'CCC (3C) Certification Desk', verdict: 'Verify product safety certificates', href: '/compliance/ccc-3c-certification/' },
      { name: 'Full USCC & GB Matcher Tool', verdict: 'Standalone interactive workbench', href: '/tools/uscc-gb-matcher/' },
    ],
    pulseStats: { worked: 45, partial: 7, failed: 1 },
    pulseFeed: [{ status: 'worked', context: 'EU Importer · Shenzhen Supplier', detail: 'Verified active status & legal rep name directly on GSXT in 4 minutes.', ago: '1d ago' }],
    disclaimers: ['legal'],
    complianceData: {
      wafStatus: 'waf-protected-standby (Ruishu 412 / Dynamic Captcha)',
      portalName: 'National Enterprise Credit Information Publicity System (GSXT)',
      portalUrl: 'https://www.gsxt.gov.cn/',
      sampleUscc: '914403001922038216',
      termPresets: [
        { en: 'Lithium Battery Pack', zhQuery: '锂离子电池 便携式电子产品', gbCode: 'GB 31241-2022' },
        { en: 'USB-C Power Adapter', zhQuery: '电源适配器 信息技术设备', gbCode: 'GB 4943.1-2022' },
        { en: 'Children Plastic Toys', zhQuery: '儿童塑胶玩具 机械物理性能', gbCode: 'GB 6675.2-2014' },
      ],
      walkthroughSteps: [
        { step: '01', title: 'Paste 18-Digit USCC (No Spaces)', detail: 'Paste the validated 18-character code into the central GSXT search bar rather than an English name.' },
        { step: '02', title: 'Complete Chinese Character-Order Captcha', detail: 'Click the 2–3 matching Chinese characters shown in the top prompt banner in order.' },
        { step: '03', title: 'Inspect 3 Statutory Fields', detail: 'Verify 法定代表人 (Legal Rep), 登记状态 (存续/在业 = Active), and 经营范围 (Manufacturing vs. Trading).' },
      ],
    },
  },
  {
    collection: 'compliance',
    slug: 'ccc-3c-certification',
    pillar: 'business',
    persona: 'legal',
    title: 'CCC (3C) Compulsory Certification Verification Desk',
    chineseName: 'CNCA 国家认监委 3C 强制认证核验台',
    pinyin: '3C Qiángzhì Rènzhèng',
    tagline: 'Verify authentic 16-digit CCC certificate numbers for electronics, power banks, adapters, and toys directly via CNCA.',
    taglineZh: '针对电源适配器、充电宝、儿童玩具与家用电器：校验 16 位 CCC 证书真实性与有效状态。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Statutory',
    statusBadges: [{ label: 'WAF-Protected Standby', tone: 'standby' }, { label: 'CNCA Official', tone: 'verified' }],
    officialUrl: 'http://cx.cnca.cn/',
    officialLabel: 'Open CNCA Official Lookup',
    quickSpecs: [
      { label: 'Authority', value: 'CNCA (Certification & Accreditation Admin)' },
      { label: 'Certificate Status', value: '有效 (Valid) vs 暂停 (Suspended) / 撤销 (Revoked)' },
    ],
    whatNobodyTellsYou: 'Suppliers occasionally send a valid CCC PDF whose certificate was later SUSPENDED (暂停) after a factory spot-check failure. Always verify live status on cx.cnca.cn.',
    checklist: ['Copy the 16-digit certificate number from the supplier PDF.', 'Confirm model number (型号) matches your exact SKU.'],
    alternatives: [{ name: 'USCC & GSXT Verification', verdict: 'Audit the supplier entity first', href: '/compliance/uscc-gsxt-lookup/' }],
    pulseStats: { worked: 21, partial: 3, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'UK Buyer · Power Bank SKU', detail: 'Confirmed CCC cert active & matched factory address in Dongguan.', ago: '2d ago' }],
    disclaimers: ['legal'],
    complianceData: {
      wafStatus: 'waf-protected-standby (Dynamic Captcha)',
      portalName: 'CNCA National Certification Information Public Service',
      portalUrl: 'http://cx.cnca.cn/',
      termPresets: [
        { en: 'Power Bank / Portable Charger', zhQuery: '移动电源 锂离子电池', gbCode: 'GB 31241 / CCC' },
        { en: 'AC Power Cord & Plug', zhQuery: '电源线组件 插头插座', gbCode: 'GB/T 2099 / CCC' },
      ],
      walkthroughSteps: [
        { step: '01', title: 'Select “强制性产品认证” (CCC)', detail: 'On cx.cnca.cn, pick the Compulsory Product Certification query tab.' },
        { step: '02', title: 'Enter 16-Digit Certificate No.', detail: 'Paste the exact digits from the supplier’s CCC sheet and solve the visual captcha.' },
        { step: '03', title: 'Check Status & Expiry Date', detail: 'Ensure status displays 有效 (Valid) and the manufacturer name matches your audited factory.' },
      ],
    },
  },
  {
    collection: 'compliance',
    slug: 'nmpa-cosmetics-medical',
    pillar: 'business',
    persona: 'legal',
    title: 'NMPA Cosmetics & Medical Device Registry Guide',
    chineseName: 'NMPA 国家药监局化妆品与医疗器械核验台',
    pinyin: 'Guójiā Yàojiānjú Héyàn',
    tagline: 'Check legal registration numbers (国妆特字 / 械注准) for beauty, skincare, and medical devices before importing or exporting.',
    taglineZh: '查询国产/进口特殊化妆品、普通备案与医疗器械注册证真实状态。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Statutory',
    statusBadges: [{ label: 'WAF-Protected Standby', tone: 'standby' }, { label: 'NMPA Official', tone: 'verified' }],
    officialUrl: 'https://www.nmpa.gov.cn/datasearch/home-index.html',
    officialLabel: 'Open NMPA Data Search',
    quickSpecs: [{ label: 'Authority', value: 'NMPA (National Medical Products Admin)' }],
    whatNobodyTellsYou: 'Sunscreens, whitening creams, and anti-hair-loss products are “Special Cosmetics” (特殊化妆品) requiring full pre-market approval—ordinary filing numbers do not cover them.',
    checklist: ['Match the filing number on outer packaging against NMPA Data Search.'],
    alternatives: [{ name: 'USCC & GSXT Desk', verdict: 'Verify factory business license', href: '/compliance/uscc-gsxt-lookup/' }],
    pulseStats: { worked: 16, partial: 2, failed: 0 },
    pulseFeed: [{ status: 'worked', context: 'Cosmetics Buyer · Guangzhou', detail: 'Confirmed filing status on NMPA before placing sample PO.', ago: '4d ago' }],
    disclaimers: ['legal', 'medical'],
    complianceData: {
      wafStatus: 'waf-protected-standby (Dynamic Token 202/412)',
      portalName: 'NMPA Official Data Search',
      portalUrl: 'https://www.nmpa.gov.cn/datasearch/home-index.html',
      termPresets: [
        { en: 'Sunscreen / Special Cosmetics', zhQuery: '国妆特字 防晒', gbCode: 'CSAR / NMPA' },
        { en: 'Class II Medical Device', zhQuery: '械注准 二类医疗器械', gbCode: 'NMPA Order 739' },
      ],
      walkthroughSteps: [
        { step: '01', title: 'Pick Category (化妆品 / 医疗器械)', detail: 'Choose Cosmetics or Medical Devices from the NMPA data search grid.' },
        { step: '02', title: 'Query by Registration Code', detail: 'Search the exact 国妆网备进字 / 械注准 number printed on the label.' },
      ],
    },
  },
];

export function getEntity(collection: EntityCollection, slug: string): EntityProfile | undefined {
  return ENTITIES.find((e) => e.collection === collection && e.slug === slug);
}

export function getEntitiesByCollection(collection: EntityCollection): EntityProfile[] {
  return ENTITIES.filter((e) => e.collection === collection);
}
