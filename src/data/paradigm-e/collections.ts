/**
 * Paradigm E — Mother Templates 5, 6 & 7 Data Collections
 *   - /compare/[slug]/ (Verdict + sticky comparison matrix)
 *   - /routes/[slug]/  (Door-to-door HSR vs Flight vs Sleeper + wrong-station traps)
 *   - /stacks/[slug]/  (Product Hunt style interactive trip/sourcing kits)
 *   - /for/[slug]/     (High-intent persona static landing pages)
 *   - /portals/        (848 Gov Open Data & MCP Center)
 *   - /pulse/          (Live Ground Pulse stream & weekly eSIM Top 5)
 *   - /explore/        (5 orthogonal facet chip groups across all 10 collections)
 */
import type { DisclaimerKind } from './guides';
import type { PillarId } from './pillars';

/* ===================== /compare/[slug]/ ===================== */
export interface ComparisonPage {
  slug: string;
  pillar: PillarId;
  title: string;
  titleZh: string;
  optionA: string;
  optionB: string;
  chooseAIf: string;
  chooseBIf: string;
  lastVerified: string;
  rows: { dimension: string; valueA: string; valueB: string; winner?: 'A' | 'B' | 'tie' }[];
  ctaNote: string;
  ctaHref: string;
  ctaLabel: string;
}

export const COMPARISONS: ComparisonPage[] = [
  {
    slug: 'badaling-vs-mutianyu',
    pillar: 'places',
    title: 'Badaling vs. Mutianyu Great Wall',
    titleZh: '八达岭 vs 慕田峪长城：真实决策横评',
    optionA: 'Badaling (八达岭)',
    optionB: 'Mutianyu (慕田峪)',
    chooseAIf: 'You only have 4 hours, need wheelchair/senior smooth ramps, or want a direct 20-min HSR from Qinghe Station.',
    chooseBIf: 'You want 60% fewer crowds, greener Ming-dynasty watchtowers, and the alpine toboggan descent (our #1 pick for 85% of travelers).',
    lastVerified: '2026-11-18',
    rows: [
      { dimension: 'Crowd Intensity', valueA: 'Very High (pack-in on weekends)', valueB: 'Moderate–Low before 10:00 AM', winner: 'B' },
      { dimension: 'Transit From Beijing', valueA: '20–32 min HSR from Qinghe Station (清河站)', valueB: '75–90 min direct Mubus or DiDi', winner: 'A' },
      { dimension: 'Wheelchair / Stroller', valueA: 'Accessible ramp & North cable car', valueB: 'Steep stairs between towers', winner: 'A' },
      { dimension: 'Descent Fun Factor', valueA: 'Standard cable car / slideway', valueB: 'Famous Tower 6 alpine toboggan', winner: 'B' },
      { dimension: 'Total Cost (Entry + Transport)', valueA: '¥140–¥220', valueB: '¥180–¥260', winner: 'tie' },
    ],
    ctaNote: 'Heading to Badaling by train? Save our Qinghe Station taxi card so you do not get dropped at Beijing North.',
    ctaHref: '/cards/taxi-beijing-qinghe/',
    ctaLabel: 'Open Qinghe Station Taxi Card →',
  },
  {
    slug: 'amap-vs-apple-maps',
    pillar: 'visit',
    title: 'Amap (高德地图) vs. Apple Maps in China',
    titleZh: '高德地图英文版 vs Apple Maps 在华实测横评',
    optionA: 'Amap English (高德地图)',
    optionB: 'Apple Maps (iOS)',
    chooseAIf: 'You use Android OR want built-in taxi comparison, exact mall floor exits, and live crowd alerts.',
    chooseBIf: 'You use iPhone and want zero extra app setup—Apple Maps automatically switches to AutoNavi data inside mainland China.',
    lastVerified: '2026-11-18',
    rows: [
      { dimension: 'GPS Accuracy (GCJ-02)', valueA: '100% Native GCJ-02 Pin Precision', valueB: '100% Native AutoNavi GCJ-02 Inside China', winner: 'tie' },
      { dimension: 'Platform Support', valueA: 'iOS & Android (Free, no +86 needed)', valueB: 'iOS / macOS only', winner: 'A' },
      { dimension: 'Subway Exit Guidance', valueA: 'Exact exit letter + car-door boarding hints', valueB: 'Clean English subway routing', winner: 'A' },
      { dimension: 'English Search Ease', valueA: 'Best when pasting Chinese names from ChinaWao', valueB: 'Strong native English POI search', winner: 'B' },
    ],
    ctaNote: 'Why does Google Maps fail even over VPN? Read the full GCJ-02 technical breakdown.',
    ctaHref: '/in-china/google-maps/',
    ctaLabel: 'Read Google Maps in China →',
  },
  {
    slug: 'alipay-vs-wechat-pay',
    pillar: 'visit',
    title: 'Alipay vs. WeChat Pay for Foreign Travelers',
    titleZh: '支付宝 vs 微信支付（外籍绑外卡横评）',
    optionA: 'Alipay (支付宝)',
    optionB: 'WeChat Pay (微信支付)',
    chooseAIf: 'You want the easiest 3-minute foreign Visa/Mastercard onboarding, built-in DiDi & metro QR, and near-zero account locks.',
    chooseBIf: 'You need to order from restaurant table QR mini-programs, message hotels/guides, and book museums.',
    lastVerified: '2026-11-18',
    rows: [
      { dimension: 'Fee-Free Threshold', valueA: '0% fee ≤ ¥200 · 3% above ¥200', valueB: '0% fee ≤ ¥200 · 3% above ¥200', winner: 'tie' },
      { dimension: 'New Account Lock Risk', valueA: 'Very Low', valueB: 'Moderate (new accounts + VPN IP jumps)', winner: 'A' },
      { dimension: 'Restaurant Table QR Ordering', valueA: 'Supported at ~75% of chains', valueB: 'Universal (~98% of venues)', winner: 'B' },
      { dimension: 'Built-In Translation & DiDi', valueA: 'Best-in-class integrated English mini-apps', valueB: 'Good mini-programs, chat-first UI', winner: 'A' },
    ],
    ctaNote: 'Our hard verdict: install BOTH before flying so one always backs up the other.',
    ctaHref: '/guides/cashless-super-apps/',
    ctaLabel: 'Open Cashless Super-Apps Guide →',
  },
  {
    slug: 'esim-vs-local-sim',
    pillar: 'visit',
    title: 'Roaming eSIM vs. Local +86 China SIM',
    titleZh: '境外漫游 eSIM vs 国内 +86 实体电话卡横评',
    optionA: 'HK/SG Roaming eSIM',
    optionB: 'Local +86 China Mobile / Unicom SIM',
    chooseAIf: 'You are visiting ≤ 30 days and want WhatsApp, Gmail, Instagram, and Slack working out of the box without configuring VPNs.',
    chooseBIf: 'You are staying > 30 days, opening a Chinese bank account, or ordering Meituan delivery requiring +86 SMS OTP.',
    lastVerified: '2026-11-18',
    rows: [
      { dimension: 'Western Apps (WhatsApp/Gmail)', valueA: 'Works natively via HK/SG breakout', valueB: 'Blocked unless running reliable VPN', winner: 'A' },
      { dimension: '+86 SMS Verification', valueA: 'None (data-only)', valueB: 'Full +86 voice & SMS', winner: 'B' },
      { dimension: 'Setup Friction', valueA: 'Scan QR at home in 2 mins', valueB: 'Airport passport counter (20–40 mins)', winner: 'A' },
      { dimension: 'Cost (15–30 Days)', valueA: '$14–$28 USD (10–20GB)', valueB: '¥100–¥150 RMB (~$14–$21)', winner: 'tie' },
    ],
    ctaNote: 'Check this week’s user-tested China eSIM stability rankings in Ground Pulse.',
    ctaHref: '/pulse/',
    ctaLabel: 'View Weekly eSIM Top 5 →',
  },
];

/* ===================== /routes/[slug]/ ===================== */
export interface IntercityRoute {
  slug: string;
  pillar: PillarId;
  from: string;
  to: string;
  title: string;
  titleZh: string;
  distanceKm: number;
  lastVerified: string;
  verdict: string;
  wrongStationWarning: string;
  modes: {
    mode: string;
    doorToDoorMinutes: number;
    displayTime: string;
    costRange: string;
    highlight: string;
    recommended?: boolean;
  }[];
  bookingLinks: { label: string; href: string }[];
}

export const ROUTES: IntercityRoute[] = [
  {
    slug: 'beijing-to-shanghai',
    pillar: 'places',
    from: 'Beijing',
    to: 'Shanghai',
    title: 'Beijing to Shanghai: High-Speed Rail vs. Flight vs. Sleeper',
    titleZh: '北京到上海：复兴号高铁 vs 民航 vs 夕发朝至动卧全对比',
    distanceKm: 1318,
    lastVerified: '2026-11-18',
    verdict: 'Pick Fuxing G-Train (4h 18m) for 90% of trips: city-center to city-center beats flying once airport security and weather delays are counted.',
    wrongStationWarning: 'WRONG-STATION TRAP: Trains depart 北京南站 (Beijing South, NOT Beijing Station or Beijing West) and arrive 上海虹桥站 (Shanghai Hongqiao, 65 mins away from PVG Airport).',
    modes: [
      { mode: 'Fuxing 350 km/h HSR (G-Train)', doorToDoorMinutes: 310, displayTime: '5h 10m door-to-door (4h 18m on train)', costRange: '¥553–¥662 (2nd) · ¥1,998 (Business)', highlight: 'Fastest, immune to airspace delays, passport e-gate', recommended: true },
      { mode: 'Domestic Flight (PEK/PKX → SHA/PVG)', doorToDoorMinutes: 345, displayTime: '5h 45m door-to-door (2h 15m flight + 3.5h transfers/security)', costRange: '¥520–¥1,400', highlight: 'Only faster if departing right next to SHA/PEK with carry-on' },
      { mode: 'Overnight HSR Sleeper (D-Train)', doorToDoorMinutes: 720, displayTime: '12h overnight (20:00 → 08:00)', costRange: '¥490–¥760 (Soft Sleeper)', highlight: 'Saves one hotel night; arrives Shanghai Railway Station downtown' },
    ],
    bookingLinks: [
      { label: '12306 Release Calendar (15-Day)', href: '/tools/ticket-calendar/' },
      { label: '12306 Passport Error Fix', href: '/errors/12306-passport-failed/' },
    ],
  },
  {
    slug: 'hong-kong-to-guangzhou',
    pillar: 'places',
    from: 'Hong Kong',
    to: 'Guangzhou',
    title: 'Hong Kong West Kowloon to Guangzhou / Shenzhen HSR',
    titleZh: '香港西九龙 → 深圳福田 / 广州南 高铁通关实测',
    distanceKm: 142,
    lastVerified: '2026-11-18',
    verdict: 'High-speed rail from West Kowloon puts you in Shenzhen Futian in 14 mins and Guangzhou South/East in 47–90 mins with single-building dual immigration.',
    wrongStationWarning: 'STATION CHOICE: 广州东站 (Guangzhou East) is downtown near Tianhe & Canton Fair; 广州南站 (Guangzhou South) is faster (47m) but 45 mins south by metro.',
    modes: [
      { mode: 'West Kowloon → Guangzhou East HSR', doorToDoorMinutes: 145, displayTime: '2h 25m incl. 45m dual border clearance', costRange: 'HK$215–¥215', highlight: 'Drops directly in downtown Tianhe CBD', recommended: true },
      { mode: 'West Kowloon → Guangzhou South HSR', doorToDoorMinutes: 155, displayTime: '2h 35m (47m rail + metro downtown)', costRange: 'HK$215–¥215', highlight: 'High frequency every 20–30 mins' },
      { mode: 'Cross-Border Coach Bus', doorToDoorMinutes: 210, displayTime: '3h 30m incl. Shenzhen Bay transfer', costRange: 'HK$110–$140', highlight: 'Cheapest option with heavy luggage' },
    ],
    bookingLinks: [
      { label: 'HK/Macau/Taiwan Border Guide', href: '/guides/hk-macau-taiwan-border/' },
      { label: 'Check Visa Reset Rules', href: '/tools/visa-checker/' },
    ],
  },
  {
    slug: 'shanghai-to-hangzhou',
    pillar: 'places',
    from: 'Shanghai',
    to: 'Hangzhou',
    title: 'Shanghai to Hangzhou West Lake HSR',
    titleZh: '上海虹桥 → 杭州东 / 杭州站 45 分钟高铁直达',
    distanceKm: 175,
    lastVerified: '2026-11-17',
    verdict: '45-minute G-trains depart every 10 minutes—China’s easiest half-day or overnight Jiangnan escape.',
    wrongStationWarning: 'Arrive at 杭州站 (Hangzhou City Station) for a 10-min walk to West Lake, or 杭州东站 (Hangzhou East) for Metro Line 1.',
    modes: [
      { mode: 'Shanghai Hongqiao → Hangzhou East HSR', doorToDoorMinutes: 95, displayTime: '1h 35m door-to-door (45m train)', costRange: '¥73 (2nd Class)', highlight: 'Departures every 10 mins', recommended: true },
    ],
    bookingLinks: [{ label: 'Shanghai City Hub', href: '/cities/shanghai/' }],
  },
  {
    slug: 'chengdu-to-chongqing',
    pillar: 'places',
    from: 'Chengdu',
    to: 'Chongqing',
    title: 'Chengdu to Chongqing HSR',
    titleZh: '成都东 → 重庆北/沙坪坝 62 分钟成渝双城高铁',
    distanceKm: 308,
    lastVerified: '2026-11-17',
    verdict: '62 minutes at 350 km/h—pair Chengdu’s relaxed teahouses with Chongqing’s 8D cyberpunk hillside skyline in one loop.',
    wrongStationWarning: 'Pick 沙坪坝站 (Shapingba) or 重庆北站 (Chongqing North) for fastest metro transfer to Jiefangbei / Hongyadong; avoid 重庆西站 if short on time.',
    modes: [
      { mode: 'Chengdu East → Chongqing North HSR', doorToDoorMinutes: 115, displayTime: '1h 55m door-to-door (62m train)', costRange: '¥154 (2nd Class)', highlight: 'Frequent Fuxing trains all day', recommended: true },
    ],
    bookingLinks: [{ label: 'Chengdu City Hub', href: '/cities/chengdu/' }],
  },
];

/* ===================== /stacks/[slug]/ ===================== */
export interface ScenarioStack {
  slug: string;
  pillar: PillarId;
  title: string;
  titleZh: string;
  audience: string;
  tagline: string;
  lastVerified: string;
  items: {
    id: string;
    category: 'Connectivity' | 'App' | 'Card' | 'City Hub' | 'Tool' | 'Compliance';
    title: string;
    summary: string;
    href: string;
  }[];
}

export const STACKS: ScenarioStack[] = [
  {
    slug: 'first-time-china-10-day',
    pillar: 'visit',
    title: 'First-Time China 10-Day Starter Stack',
    titleZh: '首次来华 10 天抄作业完整清单包',
    audience: 'First-time independent visitors (Beijing → Xi’an → Shanghai)',
    tagline: '1 roaming eSIM + 4 essential apps + 2 show-to-local cards + 3 city hubs. Tick items off or export offline before boarding.',
    lastVerified: '2026-11-18',
    items: [
      { id: 's1', category: 'Tool', title: 'Run 240h / 30-Day Visa-Free Checker', summary: 'Verify passport eligibility & printed onward A→China→C flight.', href: '/tools/visa-checker/' },
      { id: 's2', category: 'Connectivity', title: 'Activate 15GB HK/SG Roaming eSIM', summary: 'Keeps WhatsApp, Gmail & Instagram working natively without VPN.', href: '/compare/esim-vs-local-sim/' },
      { id: 's3', category: 'App', title: 'Alipay + WeChat Pay (Foreign Visa/MC Bound)', summary: '0% fee ≤ ¥200; verify passport before departure.', href: '/compare/alipay-vs-wechat-pay/' },
      { id: 's4', category: 'App', title: 'Amap English (高德) + Railway 12306 Verified', summary: 'Zero GCJ-02 GPS offset + direct passport e-gate boarding.', href: '/compare/amap-vs-apple-maps/' },
      { id: 's5', category: 'Card', title: 'Beijing Qinghe Taxi Card & Hotel Check-In Card', summary: 'Fullscreen high-contrast show-to-local safety net.', href: '/cards/taxi-beijing-qinghe/' },
      { id: 's6', category: 'City Hub', title: 'Beijing (110000) · Xi’an (610100) · Shanghai (310000)', summary: 'Core 10-day golden triangle linked by 4h Fuxing HSR.', href: '/cities/shanghai/' },
    ],
  },
  {
    slug: 'solo-female-10-day',
    pillar: 'visit',
    title: 'Solo Female 10-Day China Safety Stack',
    titleZh: '女性独行中国 10 天安全抄作业清单包',
    audience: 'Solo female travelers navigating late-night cities, trains & hotels',
    tagline: 'Curated from verified solo female field reports: safety settings, keycard-elevator hotel picks, and rescue cards.',
    lastVerified: '2026-11-18',
    items: [
      { id: 'sf1', category: 'Connectivity', title: 'Always-On Roaming eSIM (Disable Hotel Wi-Fi Auto-Join)', summary: 'Ensures uninterrupted live location sharing via WhatsApp / Find My.', href: '/in-china/whatsapp/' },
      { id: 'sf2', category: 'App', title: 'Alipay Built-In DiDi (Enable Trip Share & Audio Recording)', summary: 'Verified licensed drivers with real-time route tracking.', href: '/guides/solo-female-china/' },
      { id: 'sf3', category: 'Card', title: 'Hotel Check-In Card + Medical / Allergy SOS Card', summary: 'Smooth front-desk registration and instant dietary clarity.', href: '/cards/hotel-checkin-passport/' },
      { id: 'sf4', category: 'Card', title: 'WeChat Restricted Visual Rescue Bookmark', summary: 'Instant offline fallback if risk-control locks your messaging.', href: '/errors/wechat-restricted/' },
      { id: 'sf5', category: 'City Hub', title: 'Shanghai · Chengdu · Beijing Safe Base Hubs', summary: 'Brightly lit metro corridors, solo-friendly noodle bars & 24h spas.', href: '/cities/chengdu/' },
    ],
  },
  {
    slug: 'canton-fair-buyer-kit',
    pillar: 'business',
    title: 'Canton Fair & Factory Sourcing Buyer Stack',
    titleZh: '广交会买手与工厂验厂工具包',
    audience: 'Global importers, Amazon/Shopify founders & hardware buyers',
    tagline: 'Verify every supplier’s 18-digit USCC before wiring deposits—paired with Shenzhen/Guangzhou rail & compliance desks.',
    lastVerified: '2026-11-18',
    items: [
      { id: 'cf1', category: 'Compliance', title: '18-Digit USCC Validator & GSXT Dual-Column Desk', summary: 'Confirm active legal entity & real manufacturing scope.', href: '/compliance/uscc-gsxt-lookup/' },
      { id: 'cf2', category: 'Compliance', title: 'CCC (3C) Compulsory Certification Lookup', summary: 'Verify certificate validity on CNCA before shipping electronics.', href: '/compliance/ccc-3c-certification/' },
      { id: 'cf3', category: 'Tool', title: 'Wan / Yi Quote Converter (M2)', summary: 'Avoid 10× translation mistakes when negotiating ¥ quotes in 万/亿.', href: '/tools/wan-yi-converter/' },
      { id: 'cf4', category: 'City Hub', title: 'Shenzhen (440300) + HK West Kowloon HSR', summary: '14-min link between HK, Huaqiangbei & Guangzhou Pazhou.', href: '/routes/hong-kong-to-guangzhou/' },
    ],
  },
  {
    slug: 'digital-nomad-30-day',
    pillar: 'live',
    title: 'Digital Nomad 30-Day China Stack',
    titleZh: '数字游民 30 天旅居中国清单包',
    audience: 'Remote engineers, designers & creators working across timezones',
    tagline: 'Low-burn cities, fiber/eSIM redundancy, 24h police registration, and tax-residency boundaries.',
    lastVerified: '2026-11-17',
    items: [
      { id: 'dn1', category: 'Tool', title: 'Verify 30-Day Visa-Free vs. Work Permit Rules', summary: 'Stay compliant with 183-day tax residency thresholds.', href: '/guides/digital-nomad-china/' },
      { id: 'dn2', category: 'Compliance', title: '24-Hour Temporary Residence Filing Guide', summary: 'Mandatory within 24h when renting monthly apartments.', href: '/documents/temp-residence-reg/' },
      { id: 'dn3', category: 'City Hub', title: 'Chengdu (510100) · Shanghai (310000) Nomad Hubs', summary: 'Cafe workspaces, affordable rent & instant airport access.', href: '/cities/chengdu/' },
    ],
  },
];

/* ===================== /for/[slug]/ ===================== */
export interface PersonaLanding {
  slug: string;
  pillar: PillarId;
  title: string;
  titleZh: string;
  lead: string;
  disclaimers: DisclaimerKind[];
  highlights: { label: string; value: string }[];
  recommendedGuides: { title: string; href: string; note: string }[];
  recommendedEntities: { title: string; href: string; tag: string }[];
  stackHref: string;
  stackLabel: string;
}

export const PERSONA_LANDINGS: PersonaLanding[] = [
  {
    slug: 'solo-female',
    pillar: 'visit',
    title: 'China for Solo Female Travelers',
    titleZh: '女性独行中国专题指南',
    lead: 'Evidence-backed safety norms, night-transit comfort, elevator-keycard hotel chains, and instant show-to-local cards.',
    disclaimers: [],
    highlights: [
      { label: 'Street Safety', value: 'High urban night safety · CCTV & lively late streets' },
      { label: 'Ride-Hail Guard', value: 'DiDi inside Alipay with live route sharing' },
      { label: 'Hotel Pick', value: 'Atour / Ji Hotel (keycard lifts + free laundry)' },
    ],
    recommendedGuides: [
      { title: 'Solo Female Travel Playbook', href: '/guides/solo-female-china/', note: 'Night safety, hotels & solo dining etiquette' },
      { title: '72-Hour Pre-Departure Playbook', href: '/guides/72h-pre-departure/', note: 'Pre-flight payment & eSIM checklist' },
    ],
    recommendedEntities: [
      { title: 'Hotel Check-In Passport Card', href: '/cards/hotel-checkin-passport/', tag: '/cards/' },
      { title: 'Hotel Washing Machine Panel', href: '/how-to-use/hotel-washing-machine/', tag: '/how-to-use/' },
      { title: 'Chengdu City Hub', href: '/cities/chengdu/', tag: '/cities/' },
    ],
    stackHref: '/stacks/solo-female-10-day/',
    stackLabel: 'Open Solo Female 10-Day Checklist Stack →',
  },
  {
    slug: 'peanut-allergy',
    pillar: 'culture',
    title: 'Traveling China With Severe Peanut & Nut Allergies',
    titleZh: '花生与坚果过敏人群来华饮食安全专题',
    lead: 'Navigate hidden peanut oil (花生油) in Southern kitchens, pick safer regional cuisines, and carry our fullscreen black-and-yellow kitchen card.',
    disclaimers: ['allergy', 'medical'],
    highlights: [
      { label: 'Highest Risk Oil', value: 'Cantonese / Guangdong & Shandong (frequent peanut oil)' },
      { label: 'Lower Risk Oils', value: 'Sichuan (rapeseed oil) · Northeast (soybean oil)' },
      { label: 'Emergency Number', value: '120 Ambulance + Intl Hospital ER' },
    ],
    recommendedGuides: [
      { title: 'Chinese Food & 6 Tea Categories', href: '/guides/chinese-tea-6-types/', note: 'Regional cooking oils & dish ingredients decoded' },
      { title: 'China Medical & Dental Checkup', href: '/guides/medical-dental-checkup/', note: 'International hospital wings in major cities' },
    ],
    recommendedEntities: [
      { title: 'Fullscreen Peanut Allergy Kitchen Card', href: '/cards/peanut-allergy-sos/', tag: '/cards/' },
      { title: 'Shanghai Intl Hospitals', href: '/cities/shanghai/#hospitals', tag: '/cities/' },
    ],
    stackHref: '/cards/peanut-allergy-sos/',
    stackLabel: 'Launch Fullscreen Peanut Allergy Card →',
  },
  {
    slug: 'remote-sourcing',
    pillar: 'business',
    title: 'Remote China Sourcing & Supplier Audit (Without Flying)',
    titleZh: '无需来华：远程供应商尽调与小单打样专题',
    lead: 'Vet Chinese factories from your desk using 18-digit USCC checksums, GSXT WAF walkthroughs, CCC lookup, and 100-unit prototyping belts.',
    disclaimers: ['legal', 'tax'],
    highlights: [
      { label: 'Entity Check', value: '18-Digit USCC + GSXT Business Scope Audit' },
      { label: 'Product Compliance', value: 'CNCA 3C / NMPA / 2,913 English GB Standards' },
      { label: 'Small-Batch MOQ', value: '50–200 units across Guangzhou & Shenzhen' },
    ],
    recommendedGuides: [
      { title: 'Factory Sourcing & Due Diligence', href: '/guides/factory-sourcing-due-diligence/', note: 'Step-by-step verification & NNN chop rules' },
      { title: 'Small-Batch 100-Unit & Reverse Haul', href: '/guides/flexible-sourcing-reverse-haul/', note: 'Low-MOQ manufacturing belts' },
    ],
    recommendedEntities: [
      { title: 'USCC & GSXT Dual-Column Desk', href: '/compliance/uscc-gsxt-lookup/', tag: '/compliance/' },
      { title: 'CCC (3C) Verification Desk', href: '/compliance/ccc-3c-certification/', tag: '/compliance/' },
    ],
    stackHref: '/stacks/canton-fair-buyer-kit/',
    stackLabel: 'Open Buyer & Sourcing Stack →',
  },
  {
    slug: 'family-with-kids',
    pillar: 'places',
    title: 'China With Kids & Multi-Generation Families',
    titleZh: '亲子家庭与带长辈来华出行专题',
    lead: 'Free HSR rides under age 6, stroller-friendly modern malls, panda morning slots, and wheelchair-ready Great Wall choices.',
    disclaimers: [],
    highlights: [
      { label: 'HSR Kids Policy', value: 'Under 6 free (no seat) · Ages 6–13 50% off' },
      { label: 'Best Wall Pick', value: 'Badaling (ramps) or Mutianyu (cable car)' },
      { label: 'Family Favorites', value: 'Chengdu Pandas · Shanghai Disneyland · Science Museums' },
    ],
    recommendedGuides: [
      { title: 'Traveling China With Kids Matrix', href: '/guides/family-travel-china/', note: 'Strollers, rail discounts & pacing' },
      { title: 'Top Attractions Honest Ranking', href: '/guides/top-attractions-ranking/', note: 'Skip exhausting queues with kids' },
    ],
    recommendedEntities: [
      { title: 'Chengdu Giant Panda Base', href: '/attractions/chengdu-panda-base/', tag: '/attractions/' },
      { title: 'Badaling vs. Mutianyu', href: '/compare/badaling-vs-mutianyu/', tag: '/compare/' },
    ],
    stackHref: '/stacks/first-time-china-10-day/',
    stackLabel: 'Open 10-Day Family-Ready Stack →',
  },
];

/* ===================== /portals/ (848 Gov Open Data & MCP Center) ===================== */
export interface GovPortalRecord {
  id: string;
  name: string;
  chineseName: string;
  level: 'Ministry' | 'Provincial' | 'Municipal';
  region: string;
  domain: string;
  access: 'direct-200' | 'waf-standby';
  accessDetail: string;
  url: string;
  guideHref?: string;
}

export const GOV_PORTALS: GovPortalRecord[] = [
  { id: 'nia-12367', name: 'National Immigration Administration (NIA)', chineseName: '国家移民管理局政务服务平台', level: 'Ministry', region: 'National', domain: 'Visas & Entry', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://en.nia.gov.cn/', guideHref: '/guides/240h-visa-free-transit/' },
  { id: 'stats-gov', name: 'National Bureau of Statistics Open Data', chineseName: '国家统计局国家数据', level: 'Ministry', region: 'National', domain: 'Macroeconomy', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://data.stats.gov.cn/english/', guideHref: '/atlas/' },
  { id: 'npc-flk', name: 'National Laws & Regulations Database (NPC)', chineseName: '国家法律法规数据库', level: 'Ministry', region: 'National', domain: 'Society & Law', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://flk.npc.gov.cn/', guideHref: '/guides/company-chops-contracts/' },
  { id: 'samr-gsxt', name: 'National Enterprise Credit System (GSXT)', chineseName: '国家企业信用信息公示系统', level: 'Ministry', region: 'National', domain: 'Business & USCC', access: 'waf-standby', accessDetail: 'WAF 412 / Ruishu Guided', url: 'https://www.gsxt.gov.cn/', guideHref: '/compliance/uscc-gsxt-lookup/' },
  { id: 'samr-openstd', name: 'National Public Service Platform for Standards (GB)', chineseName: '全国标准信息公共服务平台', level: 'Ministry', region: 'National', domain: 'GB Standards (2,913 EN)', access: 'waf-standby', accessDetail: 'WAF 521 / Interactive Guided', url: 'https://openstd.samr.gov.cn/', guideHref: '/tools/uscc-gb-matcher/' },
  { id: 'cnca-ccc', name: 'CNCA Compulsory Certification (CCC / 3C)', chineseName: '国家认监委强制性产品认证查询', level: 'Ministry', region: 'National', domain: 'Product Compliance', access: 'waf-standby', accessDetail: 'WAF Captcha Guided', url: 'http://cx.cnca.cn/', guideHref: '/compliance/ccc-3c-certification/' },
  { id: 'nmpa-data', name: 'NMPA Drugs, Cosmetics & Medical Devices', chineseName: '国家药监局数据查询中心', level: 'Ministry', region: 'National', domain: 'Biotech & Meds', access: 'waf-standby', accessDetail: 'WAF 202 Token Guided', url: 'https://www.nmpa.gov.cn/datasearch/home-index.html', guideHref: '/compliance/nmpa-cosmetics-medical/' },
  { id: 'gacc-12360', name: 'General Administration of Customs (GACC)', chineseName: '中华人民共和国海关总署', level: 'Ministry', region: 'National', domain: 'Customs & Trade', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'http://english.customs.gov.cn/', guideHref: '/guides/customs-baggage-drones/' },
  { id: 'caac-uom', name: 'CAAC Civil Unmanned Aircraft Registry (UOM)', chineseName: '民用无人驾驶航空器综合管理平台', level: 'Ministry', region: 'National', domain: 'Aviation & Drones', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://uom.caac.gov.cn/', guideHref: '/guides/customs-baggage-drones/' },
  { id: 'mofcom-laozihao', name: 'MOFCOM China Time-Honored Brands Registry (1,422)', chineseName: '商务部中华老字号信息管理', level: 'Ministry', region: 'National', domain: 'Food & Heritage', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://zhlzh.mofcom.gov.cn/', guideHref: '/guides/dining-etiquette-old-brands/' },
  { id: 'sh-opendata', name: 'Shanghai Municipal Open Data Platform', chineseName: '上海市公共数据开放平台', level: 'Municipal', region: 'Shanghai (310000)', domain: 'Open Datasets', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://data.sh.gov.cn/', guideHref: '/cities/shanghai/' },
  { id: 'bj-opendata', name: 'Beijing Municipal Public Data Open Platform', chineseName: '北京市公共数据开放平台', level: 'Municipal', region: 'Beijing (110000)', domain: 'Open Datasets', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://data.beijing.gov.cn/', guideHref: '/cities/beijing/' },
  { id: 'gd-opendata', name: 'Guangdong Open Data Portal (Canton & GBA)', chineseName: '广东省公共数据开放平台', level: 'Provincial', region: 'Guangdong (440000)', domain: 'Open Datasets', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://gddata.gd.gov.cn/', guideHref: '/cities/shenzhen/' },
  { id: 'sc-opendata', name: 'Sichuan & Chengdu Open Data Portal', chineseName: '成都市公共数据开放平台', level: 'Municipal', region: 'Chengdu (510100)', domain: 'Open Datasets', access: 'direct-200', accessDetail: 'HTTP 200 Direct', url: 'https://www.cddata.gov.cn/', guideHref: '/cities/chengdu/' },
];

/* ===================== /pulse/ Live Ground Pulse & Weekly eSIM Top 5 ===================== */
export interface PulseReport {
  id: string;
  status: 'worked' | 'partial' | 'failed';
  category: '240h Port' | 'Payment' | 'eSIM' | 'Rail 12306' | 'Medical' | 'Compliance';
  passportOrCard: string;
  location: string;
  summary: string;
  timestamp: string;
  relatedHref: string;
}

export const LIVE_PULSE_REPORTS: PulseReport[] = [
  { id: 'p1', status: 'worked', category: '240h Port', passportOrCard: 'US Passport', location: 'Shanghai PVG T2', summary: '240h temporary permit issued in 16 mins with printed Seoul onward flight.', timestamp: '2h ago', relatedHref: '/guides/240h-visa-free-transit/' },
  { id: 'p2', status: 'partial', category: 'Payment', passportOrCard: 'Chase Visa Tap', location: 'Chengdu Metro Line 1', summary: 'Contactless tap worked at main gate; Alipay transport QR was faster at transfer gates.', timestamp: '5h ago', relatedHref: '/guides/cashless-super-apps/' },
  { id: 'p3', status: 'worked', category: 'eSIM', passportOrCard: '3HK / Trip.com eSIM', location: 'Beijing → Shanghai HSR', summary: 'Continuous 5G at 350 km/h; WhatsApp & Gmail ran natively with zero VPN.', timestamp: '7h ago', relatedHref: '/compare/esim-vs-local-sim/' },
  { id: 'p4', status: 'worked', category: 'Rail 12306', passportOrCard: 'UK Passport', location: 'Beijing South Station', summary: 'Scanned physical passport directly at automatic e-gate without paper ticket.', timestamp: '11h ago', relatedHref: '/routes/beijing-to-shanghai/' },
  { id: 'p5', status: 'worked', category: 'Medical', passportOrCard: 'AU Passport', location: 'Shanghai Huashan Intl Wing', summary: 'Comprehensive blood + ultrasound + chest CT finished in 3.5h for ¥2,980.', timestamp: '1d ago', relatedHref: '/guides/medical-dental-checkup/' },
  { id: 'p6', status: 'failed', category: 'Payment', passportOrCard: 'Unverified WeChat', location: 'Xi’an Street Stall', summary: 'Personal vendor QR rejected foreign card; switched to Alipay merchant scan smoothly.', timestamp: '1d ago', relatedHref: '/errors/alipay-200rmb-limit/' },
];

export const WEEKLY_ESIM_TOP5 = [
  { rank: '01', provider: 'Trip.com Mainland + HK/Macau 5G eSIM', breakout: 'HK Breakout', priceRef: '$11 / 15GB (15d)', stability: '98% Worked (142)' },
  { rank: '02', provider: '3HK DIY Greater Bay Area eSIM', breakout: 'HK Direct', priceRef: 'HK$138 / 15GB', stability: '96% Worked (98)' },
  { rank: '03', provider: 'Nomad China / APAC 5G eSIM', breakout: 'SG Breakout', priceRef: '$18 / 10GB (30d)', stability: '95% Worked (74)' },
  { rank: '04', provider: 'Airalo Chinacom / Asialink eSIM', breakout: 'SG Breakout', priceRef: '$16 / 10GB (30d)', stability: '93% Worked (61)' },
  { rank: '05', provider: 'Holafly Unlimited China eSIM', breakout: 'HK Breakout', priceRef: '$34 / 10d Unlim.', stability: '92% Worked (53)' },
];

/* ===================== /explore/ Multi-Facet Explorer ===================== */
export interface ExplorerRecord {
  id: string;
  title: string;
  titleZh: string;
  summary: string;
  href: string;
  kind: 'Guide' | 'City' | 'Attraction' | 'In-China' | 'Error' | 'Document' | 'Card' | 'Compliance' | 'Compare' | 'Stack';
  space: string[];      // e.g. 'national', '310000', '110000', '510100', '440300', '240h'
  season: string[];     // e.g. 'all-year', 'spring', 'autumn', 'winter'
  constraints: string[]; // 'foreign-card', 'no-plus86', 'wheelchair', 'nut-allergy', 'remote-ok'
  trust: 'tier-a' | 'pulse-verified';
}

export const EXPLORER_FACETS = {
  space: [
    { value: 'national', label: 'All Mainland' },
    { value: '240h', label: '240h Visa Zone' },
    { value: '310000', label: 'Shanghai (310000)' },
    { value: '110000', label: 'Beijing (110000)' },
    { value: '510100', label: 'Chengdu (510100)' },
    { value: '440300', label: 'Shenzhen (440300)' },
  ],
  season: [
    { value: 'all-year', label: 'Year-Round' },
    { value: 'spring', label: 'Spring (Mar–May)' },
    { value: 'autumn', label: 'Autumn (Sep–Nov)' },
    { value: 'winter', label: 'Winter (Dec–Feb)' },
  ],
  kind: [
    { value: 'Guide', label: '32 Guides' },
    { value: 'City', label: 'Cities' },
    { value: 'Attraction', label: 'Attractions' },
    { value: 'In-China', label: 'Western App Map' },
    { value: 'Error', label: 'App Rescue' },
    { value: 'Card', label: 'Show Cards' },
    { value: 'Compliance', label: 'Compliance / WAF' },
    { value: 'Compare', label: 'Comparisons' },
    { value: 'Stack', label: 'Stacks' },
  ],
  constraints: [
    { value: 'foreign-card', label: 'Foreign Card OK' },
    { value: 'no-plus86', label: 'No +86 Phone Needed' },
    { value: 'wheelchair', label: 'Accessible / Step-Free' },
    { value: 'nut-allergy', label: 'Peanut Allergy Safe' },
    { value: 'remote-ok', label: 'Remote / Pre-Arrival OK' },
  ],
  trust: [
    { value: 'tier-a', label: 'Tier-A Official Source' },
    { value: 'pulse-verified', label: 'Verified This Week' },
  ],
};

export const EXPLORER_ITEMS: ExplorerRecord[] = [
  { id: 'ex-1', title: '72-Hour Pre-Departure Playbook', titleZh: '首次来华 72h 通关剧本', summary: '4-step visa, Alipay/WeChat, eSIM & offline card checklist.', href: '/guides/72h-pre-departure/', kind: 'Guide', space: ['national', '240h'], season: ['all-year'], constraints: ['foreign-card', 'no-plus86', 'remote-ok'], trust: 'tier-a' },
  { id: 'ex-2', title: 'Shanghai City Hub (MCA 310000)', titleZh: '上海城市空间中枢', summary: 'PVG/SHA 240h ports, Art Deco walks, Fudan & Huashan Intl Hospital.', href: '/cities/shanghai/', kind: 'City', space: ['310000', '240h'], season: ['spring', 'autumn', 'all-year'], constraints: ['foreign-card', 'no-plus86', 'wheelchair'], trust: 'pulse-verified' },
  { id: 'ex-3', title: 'Beijing City Hub (MCA 110000)', titleZh: '北京城市空间中枢', summary: '7 rail station traps, direct Visa subway tap & imperial landmarks.', href: '/cities/beijing/', kind: 'City', space: ['110000', '240h'], season: ['spring', 'autumn'], constraints: ['foreign-card', 'no-plus86'], trust: 'pulse-verified' },
  { id: 'ex-4', title: 'Chengdu City Hub (MCA 510100)', titleZh: '成都城市空间中枢', summary: '07:30 AM Panda Base, teahouses, West China Intl Clinic & nomad hub.', href: '/cities/chengdu/', kind: 'City', space: ['510100', '240h'], season: ['spring', 'autumn', 'all-year'], constraints: ['foreign-card', 'no-plus86', 'nut-allergy'], trust: 'pulse-verified' },
  { id: 'ex-5', title: 'Shenzhen Tech & Hardware Hub (440300)', titleZh: '深圳科创与硬件中枢', summary: 'Huaqiangbei, drone parks & 14-min HSR to Hong Kong.', href: '/cities/shenzhen/', kind: 'City', space: ['440300', '240h'], season: ['winter', 'autumn', 'all-year'], constraints: ['foreign-card', 'no-plus86', 'wheelchair'], trust: 'pulse-verified' },
  { id: 'ex-6', title: 'Forbidden City (Palace Museum)', titleZh: '故宫博物院', summary: '7-day 20:00 BJT drop, Donghuamen shortcut & 1–3km nearby mesh.', href: '/attractions/forbidden-city/', kind: 'Attraction', space: ['110000'], season: ['spring', 'autumn'], constraints: ['no-plus86'], trust: 'tier-a' },
  { id: 'ex-7', title: 'Does Google Maps Work in China?', titleZh: 'Google Maps 在华实测', summary: '300–500m GCJ-02 offset explained—use Amap English or Apple Maps.', href: '/in-china/google-maps/', kind: 'In-China', space: ['national'], season: ['all-year'], constraints: ['no-plus86', 'remote-ok'], trust: 'pulse-verified' },
  { id: 'ex-8', title: 'WeChat Restricted Visual Rescue', titleZh: '微信受限红框救火', summary: 'Annotated Chinese unblock screens + helper verification guide.', href: '/errors/wechat-restricted/', kind: 'Error', space: ['national'], season: ['all-year'], constraints: ['no-plus86', 'remote-ok'], trust: 'pulse-verified' },
  { id: 'ex-9', title: 'Severe Peanut & Nut Oil Allergy Card', titleZh: '重度花生油过敏亮屏卡', summary: 'Fullscreen black-and-yellow kitchen warning with pinyin & speech.', href: '/cards/peanut-allergy-sos/', kind: 'Card', space: ['national'], season: ['all-year'], constraints: ['no-plus86', 'nut-allergy', 'remote-ok'], trust: 'tier-a' },
  { id: 'ex-10', title: '18-Digit USCC & GSXT Official Desk', titleZh: '18 位 USCC 与企信网双栏台', summary: 'Offline checksum validator + WAF-protected GSXT walkthrough.', href: '/compliance/uscc-gsxt-lookup/', kind: 'Compliance', space: ['national', '440300'], season: ['all-year'], constraints: ['no-plus86', 'remote-ok'], trust: 'tier-a' },
  { id: 'ex-11', title: 'Badaling vs. Mutianyu Great Wall', titleZh: '八达岭 vs 慕田峪横评', summary: 'Direct verdict on crowds, wheelchair ramps, Qinghe HSR & toboggan.', href: '/compare/badaling-vs-mutianyu/', kind: 'Compare', space: ['110000'], season: ['spring', 'autumn'], constraints: ['wheelchair', 'remote-ok'], trust: 'pulse-verified' },
  { id: 'ex-12', title: 'Solo Female 10-Day Safety Stack', titleZh: '女性独行 10 天清单包', summary: 'Tickable checklist: eSIM, DiDi trip share, keycard chains & cards.', href: '/stacks/solo-female-10-day/', kind: 'Stack', space: ['national', '310000', '510100'], season: ['all-year'], constraints: ['foreign-card', 'no-plus86', 'remote-ok'], trust: 'pulse-verified' },
  { id: 'ex-13', title: 'China Medical & Dental Checkup Guide', titleZh: '来华体检看牙医疗旅游', summary: 'Tier-3A public international wings vs. private hospitals & real prices.', href: '/guides/medical-dental-checkup/', kind: 'Guide', space: ['310000', '110000', '440300'], season: ['all-year'], constraints: ['foreign-card', 'no-plus86'], trust: 'pulse-verified' },
  { id: 'ex-14', title: 'Leaving China Ultimate Closeout', titleZh: '离开中国退保完税收尾', summary: 'Withdraw 8% personal pension, 100% housing fund & tax-cleared wires.', href: '/guides/leaving-china-closeout/', kind: 'Guide', space: ['national'], season: ['all-year'], constraints: ['remote-ok'], trust: 'tier-a' },
  { id: 'ex-15', title: 'Black Myth: Wukong Shanxi Trail', titleZh: '《黑神话》山西古建巡礼', summary: 'Hanging Temple, Yingxian Pagoda (1056 AD) & Xiaoxitian HSR loop.', href: '/guides/black-myth-shanxi/', kind: 'Guide', space: ['national', '110000'], season: ['spring', 'autumn'], constraints: ['no-plus86'], trust: 'tier-a' },
  { id: 'ex-16', title: 'Small-Batch 100-Unit & Reverse Haul', titleZh: '百件柔性打样与反向海淘', summary: 'Danyang eyewear, Guangzhou Zhongda fabrics & Jingdezhen ceramics.', href: '/guides/flexible-sourcing-reverse-haul/', kind: 'Guide', space: ['national', '310000', '440300'], season: ['all-year'], constraints: ['foreign-card', 'remote-ok'], trust: 'pulse-verified' },
];
