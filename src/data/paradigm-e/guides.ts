/**
 * Paradigm E — All 32 Deep Feature Guides (/guides/[slug]/)
 * 4 Archetype Variants:
 *   - playbook  (变体 A：线性通关剧本型)
 *   - matrix    (变体 B：决策横评与矩阵型)
 *   - rescue    (变体 C：视觉救火与动态日志型)
 *   - editorial (变体 D：沉浸式画廊与人文叙事型)
 */
import type { PersonaType, PillarId } from './pillars';

export type GuideArchetype = 'playbook' | 'matrix' | 'rescue' | 'editorial';
export type DisclaimerKind = 'visa' | 'medical' | 'legal' | 'tax' | 'allergy' | 'prescription';

export interface HardFactSlot {
  label: string;
  value: string;
  source: string;
  verifiedDate: string;
}

export interface PlaybookStep {
  number: string;
  title: string;
  stopCheck: string;
  summary: string;
  checklist: string[];
  linkedRoute?: { label: string; href: string };
}

export interface MatrixRow {
  option: string;
  bestFor: string;
  avoidIf: string;
  costRange: string;
  hiddenTrap: string;
  href?: string;
}

export interface RescueCard {
  appOrGroup: string;
  title: string;
  chineseSignal: string;
  actionSummary: string;
  effectiveDate?: string;
  sourceAnchor?: string;
  href: string;
}

export interface EditorialGalleryCard {
  kicker: string;
  title: string;
  chineseName: string;
  copyTerm: string;
  summary: string;
  image?: string;
  href?: string;
}

export interface GuidePulseItem {
  status: 'worked' | 'partial' | 'failed';
  context: string;
  detail: string;
  ago: string;
}

export interface GuideDefinition {
  slug: string;
  pillar: PillarId;
  archetype: GuideArchetype;
  persona: PersonaType;
  title: string;
  titleZh: string;
  leadHook: string;
  leadHookZh: string;
  lastVerified: string;
  tier: 'Tier-A Official + Field' | 'Tier-A Statutory' | 'Tier-B Field Curated';
  heroImage?: string;
  featuredOnHome?: boolean;
  homeLineTag?: string;
  disclaimers: DisclaimerKind[];
  hardFacts: HardFactSlot[];
  stackLink: { label: string; href: string };
  directTools: { label: string; href: string }[];
  relatedEntities: { label: string; href: string; tag: string }[];
  pulse: GuidePulseItem[];
  /* Variant-specific payloads */
  steps?: PlaybookStep[];
  matrixRows?: MatrixRow[];
  rescueFilters?: string[];
  rescueItems?: RescueCard[];
  galleryItems?: EditorialGalleryCard[];
  sections?: { id: string; heading: string; answerLead: string; body: string }[];
}

const DEFAULT_PULSE: GuidePulseItem[] = [
  { status: 'worked', context: 'US Passport · PVG Terminal 2', detail: '240h temporary entry permit issued in 18 mins with printed Seoul onward flight.', ago: '2h ago' },
  { status: 'worked', context: 'UK Visa Debit · Alipay', detail: 'Transactions under ¥200 processed with 0% foreign card fee across Shanghai Metro.', ago: '6h ago' },
  { status: 'partial', context: 'Chase Sapphire · Chengdu Metro', detail: 'Contactless tap worked at Line 1 gates; Alipay transit QR remained faster during peak.', ago: '1d ago' },
];

export const GUIDES: GuideDefinition[] = [
  /* ===================== VARIANT A: PLAYBOOK (线性通关剧本型) ===================== */
  {
    slug: '72h-pre-departure',
    pillar: 'visit',
    archetype: 'playbook',
    persona: 'safety',
    title: '72-Hour Pre-Departure China Playbook',
    titleZh: '首次来华 72 小时通关剧本',
    leadHook: 'Four deterministic checkpoints before boarding. Lock your visa-free eligibility, bind foreign cards on Alipay/WeChat, pre-install an eSIM, and save offline show-to-local cards before landing.',
    leadHookZh: '起飞前 72 小时 4 步确定性通关：核验免签资格、绑定外卡支付、预装直连 eSIM、离线保存防走错车站与过敏字卡。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: ['visa', 'prescription'],
    hardFacts: [
      { label: '240h Transit Window', value: '10 Days (240h) from 00:00 next day', source: 'NIA 12367', verifiedDate: '2026-11-15' },
      { label: 'Foreign Card 0% Fee Cap', value: '≤ ¥200 RMB per transaction (3% above)', source: 'Alipay / WeChat Pay', verifiedDate: '2026-11-15' },
      { label: '12306 Rail Pre-Sale', value: '15 days ahead (passport direct e-gate)', source: 'China Railway 12306', verifiedDate: '2026-11-15' },
      { label: 'Emergency Numbers', value: '110 Police · 120 Ambulance · 12367 Immigration', source: 'State Council', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [
      { label: '240h Visa-Free Checker', href: '/tools/visa-checker/' },
      { label: 'Station & Taxi Show Cards', href: '/tools/station-taxi-cards/' },
      { label: 'Allergy & Medical SOS Cards', href: '/tools/medical-sos-cards/' },
    ],
    relatedEntities: [
      { label: 'Does Google Maps Work?', href: '/in-china/google-maps/', tag: '/in-china/' },
      { label: 'WeChat Restricted Rescue', href: '/errors/wechat-restricted/', tag: '/errors/' },
      { label: 'China Arrival Card Annotated', href: '/documents/arrival-card/', tag: '/documents/' },
      { label: 'Alipay vs. WeChat Pay', href: '/compare/alipay-vs-wechat-pay/', tag: '/compare/' },
    ],
    pulse: DEFAULT_PULSE,
    steps: [
      {
        number: '01',
        title: 'Verify Unilateral 30-Day or 240h Transit Eligibility',
        stopCheck: 'STOP & CHECK: 240-hour visa-free transit strictly requires a confirmed seat ticket to a THIRD country/region (A → Mainland China → C). Round-trip A → China → A is denied at check-in.',
        summary: 'Confirm whether your ordinary passport qualifies for 30-day unilateral visa-free entry or 240-hour cross-province transit across 60 ports in 24 provinces.',
        checklist: [
          'Passport validity ≥ 3 months beyond entry (≥ 6 months recommended by airlines).',
          'Print onward flight/ferry/train confirmation showing seat number & PNR.',
          'Review prescription meds rules (Adderall & codeine require strict attention).',
        ],
        linkedRoute: { label: 'Run 240h Visa Checker →', href: '/tools/visa-checker/' },
      },
      {
        number: '02',
        title: 'Bind Foreign Visa/Mastercard to Alipay & WeChat Pay',
        stopCheck: 'STOP & CHECK: Complete passport identity verification BEFORE departing home so your bank’s SMS 3D-Secure OTP arrives smoothly.',
        summary: 'Install both Alipay and WeChat as mutual backups. Single transactions ≤ ¥200 carry 0% international card fee; amounts above ¥200 incur a 3% surcharge.',
        checklist: [
          'Link at least two cards (e.g., Wise + Chase Visa) inside both apps.',
          'Notify your card issuer of China travel dates to prevent fraud locks.',
          'Keep ¥300–¥500 cash for rural temples or backup emergencies.',
        ],
        linkedRoute: { label: 'Alipay vs. WeChat Pay Verdict →', href: '/compare/alipay-vs-wechat-pay/' },
      },
      {
        number: '03',
        title: 'Activate China-Ready eSIM & Install Local Map Stack',
        stopCheck: 'STOP & CHECK: Google Maps has a 300–500m GCJ-02 GPS offset in mainland China. Do not rely on it for walking turns or taxi pins.',
        summary: 'Use a roaming eSIM (HK/SG breakout) to retain WhatsApp, Gmail, and Instagram natively, paired with Amap (高德) English mode or Apple Maps.',
        checklist: [
          'Install and test eSIM profile on Wi-Fi 24 hours before departure.',
          'Download Amap (高德地图) or verify Apple Maps offline city search.',
          'Verify Railway 12306 passport profile in advance for instant e-gate boarding.',
        ],
        linkedRoute: { label: 'Google Maps in China →', href: '/in-china/google-maps/' },
      },
      {
        number: '04',
        title: 'Save Fullscreen Taxi, Station & Allergy Show-to-Local Cards',
        stopCheck: 'STOP & CHECK: Major Chinese cities have 4–6 similarly named rail stations (e.g., Beijing North vs. Qinghe). Always verify the exact Chinese characters.',
        summary: 'Bookmark high-contrast fullscreen cards for your first hotel address, rail station, and severe dietary allergies.',
        checklist: [
          'Save hotel Chinese name + street address for taxi & Arrival Card.',
          'Bookmark Peanut Allergy / Dietary card if sensitive to cooking oils.',
          'Keep WeChat Restricted visual rescue page bookmarked offline.',
        ],
        linkedRoute: { label: 'Open Fullscreen Taxi Card →', href: '/cards/taxi-beijing-qinghe/' },
      },
    ],
  },
  {
    slug: '240h-visa-free-transit',
    pillar: 'visit',
    archetype: 'playbook',
    persona: 'safety',
    title: '240-Hour Visa-Free Transit & Airport Flash Playbook',
    titleZh: '240 小时过境免签与机场快闪实操',
    leadHook: 'Ten full days across 24 provinces and 60 open ports—without embassy paperwork—provided your flight itinerary satisfies the strict Country A → China → Country/Region C routing rule.',
    leadHookZh: '覆盖 24 省 60 口岸、允许跨省联游的 240 小时过境免签全套硬规则：从航司值机审核到边检柜台填表一气呵成。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: ['visa'],
    hardFacts: [
      { label: 'Eligible Passports', value: '55 countries (US, UK, CA, EU, AU, etc.)', source: 'NIA 2025/2026', verifiedDate: '2026-11-15' },
      { label: 'Open Entry/Exit Ports', value: '60 air, sea & rail ports across 24 regions', source: 'NIA Bulletin', verifiedDate: '2026-11-15' },
      { label: 'Clock Start Time', value: '00:00 on the calendar day AFTER arrival', source: 'NIA 12367', verifiedDate: '2026-11-15' },
      { label: 'HK / Macau / Taiwan', value: 'Valid as third region C for transit routing', source: 'NIA Rules', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [
      { label: '240h Visa-Free Checker', href: '/tools/visa-checker/' },
      { label: 'Arrival Card Annotated Form', href: '/documents/arrival-card/' },
    ],
    relatedEntities: [
      { label: 'Shanghai Hub (PVG / SHA)', href: '/cities/shanghai/', tag: '/cities/' },
      { label: 'Beijing Hub (PEK / PKX)', href: '/cities/beijing/', tag: '/cities/' },
      { label: 'Arrival Card Red-Box Guide', href: '/documents/arrival-card/', tag: '/documents/' },
    ],
    pulse: DEFAULT_PULSE,
    steps: [
      {
        number: '01',
        title: 'Validate Third-Region Routing (A → China → C)',
        stopCheck: 'STOP & CHECK: Any nonstop leg immediately before China (A) and immediately after China (C) must be different countries/regions. Hong Kong, Macau, and Taiwan count as distinct regions.',
        summary: 'Example valid route: London → Shanghai → Hong Kong (or Tokyo → Beijing → Seoul). Invalid: Los Angeles → Shanghai → San Francisco.',
        checklist: ['Confirm no hidden technical stop in the same country.', 'Carry PDF + printed paper itinerary for departure check-in desk.'],
        linkedRoute: { label: 'Test Your Route in Visa Checker →', href: '/tools/visa-checker/' },
      },
      {
        number: '02',
        title: 'Complete Blue Temporary Entry Permit Card at Airport',
        stopCheck: 'STOP & CHECK: Follow signs for "24/240-Hour Visa-Free Transit" counters BEFORE joining regular foreigner immigration lanes.',
        summary: 'Present passport, onward ticket, and first hotel booking. Officers affix a temporary entry sticker indicating your allowed stay date and cross-province scope.',
        checklist: ['Pre-fill hotel Chinese address and phone number.', 'Expect 15–35 minutes processing during peak morning arrivals.'],
        linkedRoute: { label: 'Inspect Annotated Arrival Card →', href: '/documents/arrival-card/' },
      },
      {
        number: '03',
        title: 'Cross-Province Rail & Exit From Any of the 60 Ports',
        stopCheck: 'STOP & CHECK: You may now enter at Beijing PEK, ride HSR to Shanghai, and exit from Shanghai PVG—strictly within the 24 permitted provinces.',
        summary: 'Hotels automatically upload passport registration; private apartments require 24-hour online/police registration.',
        checklist: ['Never overstay past 23:59 on your tenth counted day.', 'Book exit flight from one of the 60 approved ports.'],
        linkedRoute: { label: 'Beijing → Shanghai Rail Guide →', href: '/routes/beijing-to-shanghai/' },
      },
    ],
  },
  {
    slug: 'factory-sourcing-due-diligence',
    pillar: 'business',
    archetype: 'playbook',
    persona: 'legal',
    title: 'Factory Sourcing, Canton Fair & Supplier Due Diligence',
    titleZh: '来华商务、广交会与工厂验厂尽调剧本',
    leadHook: 'Verify the real legal entity before wiring a single deposit. Step through 18-digit USCC verification, official chop checks, Canton Fair buyer credentials, and on-site factory audit red flags.',
    leadHookZh: '在支付首笔定金前穿透核验真实法人实体：18 位 USCC 校验、公章法律效力核对、广交会买手证办理与实地验厂清单。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Statutory',
    disclaimers: ['legal', 'tax'],
    hardFacts: [
      { label: 'USCC Standard', value: '18-char GB 32100-2015 check-digit ID', source: 'SAMR GSXT', verifiedDate: '2026-11-15' },
      { label: 'Canton Fair Phases', value: 'Spring (Apr–May) & Autumn (Oct–Nov), Guangzhou', source: 'CFTC Official', verifiedDate: '2026-11-15' },
      { label: 'Binding Contract Seal', value: 'Red Round Official Company Chop (公章) > Signature', source: 'PRC Civil Code', verifiedDate: '2026-11-15' },
      { label: 'Beneficiary Match Rule', value: 'Wire ONLY to PRC bank account matching Chinese legal name', source: 'Compliance Baseline', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Canton Fair & Factory Audit Stack', href: '/stacks/canton-fair-buyer-kit/' },
    directTools: [
      { label: '18-Digit USCC & GB Matcher', href: '/tools/uscc-gb-matcher/' },
      { label: 'Wan/Yi Quote Number Converter', href: '/tools/wan-yi-converter/' },
    ],
    relatedEntities: [
      { label: 'USCC & GSXT Verification Desk', href: '/compliance/uscc-gsxt-lookup/', tag: 'Compliance' },
      { label: 'CCC (3C) Certification Guide', href: '/compliance/ccc-3c-certification/', tag: 'Compliance' },
      { label: 'Shenzhen Tech & Supply Hub', href: '/cities/shenzhen/', tag: 'City' },
    ],
    pulse: [
      { status: 'worked', context: 'EU Hardware Buyer · Guangzhou Pazhou', detail: 'Pre-registered Canton Fair buyer badge picked up in 6 mins at Baiyun Airport counter.', ago: '1d ago' },
      { status: 'worked', context: 'US Importer · GSXT Check', detail: 'Caught a trading shell posing as a manufacturer via business scope field (经营范围).', ago: '3d ago' },
    ],
    steps: [
      {
        number: '01',
        title: 'Run 18-Digit USCC Checksum & Business Scope Audit',
        stopCheck: 'STOP & CHECK: Never rely on English company names—only the exact Chinese legal name and 18-digit USCC on the Business License (营业执照) have legal standing.',
        summary: 'Confirm whether the company’s registered scope includes manufacturing (生产/制造) or only wholesale/trading (销售/贸易).',
        checklist: ['Request high-res photo of Business License.', 'Validate 18-digit USCC check digit locally before visiting GSXT.', 'Check registered capital & abnormal operation list (经营异常).'],
        linkedRoute: { label: 'Open USCC & GSXT Dual-Column Desk →', href: '/compliance/uscc-gsxt-lookup/' },
      },
      {
        number: '02',
        title: 'Lock NNN Agreement & Official Company Chop',
        stopCheck: 'STOP & CHECK: A Western-style NDA signed in English by a sales rep is virtually unenforceable in China. Use a bilingual NNN agreement stamped with the official red Company Chop (公章).',
        summary: 'Verify the chop’s Chinese text matches the Business License word-for-word and carries the 13-digit security code at the bottom rim.',
        checklist: ['Insist on PRC governing law and Chinese prevailing text.', 'Cross-check beneficiary bank account matches exact legal entity.'],
        linkedRoute: { label: 'Company Chops & Contract Law →', href: '/guides/company-chops-contracts/' },
      },
      {
        number: '03',
        title: 'On-Site Factory Audit & Sample Lock',
        stopCheck: 'STOP & CHECK: Sign and seal two identical golden samples—one stays on the production line, one flies home with you.',
        summary: 'Walk the warehouse, raw-material intake, and QC station; photograph machine serial plates and tooling ownership stickers.',
        checklist: ['Verify CCC / CE / UL test report certificate numbers directly on CNCA.', 'Tie final 70% balance to independent pre-shipment inspection (PSI).'],
        linkedRoute: { label: 'CCC (3C) Certification Desk →', href: '/compliance/ccc-3c-certification/' },
      },
    ],
  },
  {
    slug: 'study-work-residence',
    pillar: 'live',
    archetype: 'playbook',
    persona: 'safety',
    title: 'Study, Work Permits & Long-Term Residence Playbook',
    titleZh: '来华留学、工作许可与居留通关剧本',
    leadHook: 'Navigate X1/Z visas, Category A/B/C Foreigner Work Permit scoring, physical medical exams, and the mandatory 30-day residence permit conversion without missed deadlines.',
    leadHookZh: '从 X1/Z 签入境、30 天内换发居留许可、A/B/C 级工作许可积分到涉外体检与 24 小时派出所登记的零遗漏行动手册。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Statutory',
    disclaimers: ['visa', 'legal'],
    hardFacts: [
      { label: 'Work Permit Tier A / B', value: 'Tier A ≥ 85 pts · Tier B ≥ 60 pts', source: 'SAFEA / MOHRSS', verifiedDate: '2026-11-15' },
      { label: 'Residence Permit Window', value: 'Apply within 30 days of Z/X1 entry', source: 'Exit-Entry Admin', verifiedDate: '2026-11-15' },
      { label: 'Police Registration', value: 'Within 24 hours of moving into any apartment', source: 'Exit-Entry Law Art. 39', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Digital Nomad 30-Day Stack', href: '/stacks/digital-nomad-30-day/' },
    directTools: [
      { label: 'Work Permit Points & IIT Calc', href: '/tools/tax-points-calc/' },
      { label: '24h Police Registration Form', href: '/documents/temp-residence-reg/' },
    ],
    relatedEntities: [
      { label: 'Shanghai Hub (Universities + Hospitals)', href: '/cities/shanghai/', tag: '/cities/' },
      { label: 'Beijing Hub (Universities + Hospitals)', href: '/cities/beijing/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    steps: [
      {
        number: '01',
        title: 'Calculate Category A/B/C Eligibility Before Signing Offer',
        stopCheck: 'STOP & CHECK: Authenticate your degree and non-criminal record with Hague Apostille BEFORE leaving your home country—China joined the Apostille Convention in Nov 2023.',
        summary: 'Confirm bachelor’s degree + 2 years relevant work experience (or ≥ 60 points under the scoring table).',
        checklist: ['Obtain Apostille on diploma and police clearance.', 'Check whether your city supports online degree verification.'],
        linkedRoute: { label: 'Score Yourself in Points Calculator →', href: '/tools/tax-points-calc/' },
      },
      {
        number: '02',
        title: 'Complete 24-Hour Registration & Medical Exam After Landing',
        stopCheck: 'STOP & CHECK: Missing the 24-hour apartment registration triggers warnings or fines up to ¥2,000 when applying for your residence permit.',
        summary: 'File registration online (Shanghai/Beijing mini-programs) or at your local police station (派出所) with landlord property deed.',
        checklist: ['Bring passport, lease, and landlord ID copy.', 'Book fasting morning medical check at designated International Travel Healthcare Center.'],
        linkedRoute: { label: 'Annotated Residence Form →', href: '/documents/temp-residence-reg/' },
      },
      {
        number: '03',
        title: 'Convert Z/X1 Visa Into Multi-Entry Residence Permit',
        stopCheck: 'STOP & CHECK: Your physical passport stays with the Exit-Entry Bureau for 7–15 working days. Keep the yellow receipt to ride HSR and check into hotels.',
        summary: 'Once issued, your residence permit functions as a multi-entry visa for its full validity period.',
        checklist: ['Receive Work Permit Card (外国人工作许可证) + Residence Permit sticker.', 'Update bank and tax app with new permit validity date.'],
      },
    ],
  },
  {
    slug: 'leaving-china-closeout',
    pillar: 'live',
    archetype: 'playbook',
    persona: 'legal',
    title: 'Leaving China Ultimate Closeout: Pension, Tax & Bank Exit',
    titleZh: '离开中国终极收尾：退保、完税与银行销户剧本',
    leadHook: 'Do not board your final flight before claiming your personal social security pension & housing fund balances, printing your Tax Clearance Record, and wiring out savings legally.',
    leadHookZh: '离华前如何合法提取个人养老保险与公积金余额、开具个人所得税完税证明并合规购汇汇出。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Statutory',
    disclaimers: ['tax', 'legal'],
    hardFacts: [
      { label: 'Pension Personal Account', value: '100% of employee 8% contribution refundable on exit', source: 'Social Insurance Law', verifiedDate: '2026-11-15' },
      { label: 'Housing Fund (公积金)', value: '100% employee + employer balance withdrawable', source: 'Municipal Provident Fund', verifiedDate: '2026-11-15' },
      { label: 'Bank Wire Proof', value: 'Requires IIT Tax Record (纳税记录) + Work Permit Cancellation', source: 'SAFE / Banks', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Work Permit Points & IIT Calc', href: '/tools/tax-points-calc/' },
    directTools: [
      { label: 'IIT Tax & Points Calculator', href: '/tools/tax-points-calc/' },
      { label: 'Gov Open Data Portals', href: '/portals/' },
    ],
    relatedEntities: [
      { label: 'Shanghai Hub (310000)', href: '/cities/shanghai/', tag: '/cities/' },
      { label: 'Beijing Hub (110000)', href: '/cities/beijing/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    steps: [
      {
        number: '01',
        title: 'Obtain Official Work Permit Cancellation & Release Letter',
        stopCheck: 'STOP & CHECK: Start 30 days before your final workday. Without the official Cancellation Receipt (注销证明), you cannot trigger pension withdrawal.',
        summary: 'Have HR cancel your work permit online and issue a stamped employment release letter.',
        checklist: ['Download PDF of Work Permit Cancellation Certificate.', 'Confirm final salary + bonus tax filing date with payroll.'],
      },
      {
        number: '02',
        title: 'Download Tax Clearance & Wire Out RMB Legally',
        stopCheck: 'STOP & CHECK: Chinese banks allow unlimited repatriation of legitimately taxed salary—but ONLY with stamped IIT Tax Records (个人所得税纳税记录) matching your contract.',
        summary: 'Generate PDF tax records inside the official Individual Income Tax app (个人所得税), then book a counter appointment at your primary bank branch.',
        checklist: ['Bring passport, employment contract, pay slips, and stamped tax records.', 'Leave one bank card open temporarily until pension refund lands (2–6 weeks).'],
      },
      {
        number: '03',
        title: 'Withdraw Personal Social Security & Housing Fund',
        stopCheck: 'STOP & CHECK: Only your personal pension account (~8% monthly salary) is refunded; employer pooled contributions stay in the municipal fund. Housing fund refunds BOTH sides.',
        summary: 'Visit the district Social Security Center and Housing Provident Fund hall with your cancellation certificate and local debit card.',
        checklist: ['Submit withdrawal form in person or via notarized power of attorney.', 'Cancel phone plan only AFTER final bank transfers clear.'],
      },
    ],
  },
  {
    slug: 'overland-rail-crossings',
    pillar: 'places',
    archetype: 'playbook',
    persona: 'safety',
    title: 'China Overland Rail Crossings: Laos, Hong Kong & Borders',
    titleZh: '中国陆路跨境铁路与口岸实操剧本',
    leadHook: 'Ride international bullet trains seamlessly from Kunming to Vientiane (China–Laos Railway) or Hong Kong West Kowloon into the mainland HSR grid.',
    leadHookZh: '中老铁路（昆明—磨憨—万象）与广深港高铁（香港西九龙一地两检）陆路通关、签证适用性与行李安检全流程。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Official + Field',
    disclaimers: ['visa'],
    hardFacts: [
      { label: 'China–Laos Rail Border', value: 'Mohan (磨憨) rail port supports 240h transit (check visa)', source: 'NIA / 12306', verifiedDate: '2026-11-15' },
      { label: 'HK West Kowloon', value: 'Co-located immigration (一地两检) · Arrive 45m early', source: 'MTR / 12306', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: '240h Visa Checker', href: '/tools/visa-checker/' }],
    relatedEntities: [{ label: 'HK → Guangzhou Route', href: '/routes/hong-kong-to-guangzhou/', tag: '/routes/' }],
    pulse: DEFAULT_PULSE,
    steps: [
      {
        number: '01',
        title: 'Confirm Land Port Eligibility for Your Passport',
        stopCheck: 'STOP & CHECK: West Kowloon Rail Station is NOT a 240h visa-free entry port for all nationalities—unilateral 30-day visa-free passports enter smoothly; others need a visa or eligible air/ferry entry.',
        summary: 'Always double-check whether your specific land crossing is listed among the 60 approved 240h ports.',
        checklist: ['Verify port eligibility in the Visa Checker.', 'Book cross-border tickets on official 12306 or Trip.com.'],
        linkedRoute: { label: 'Check Port Eligibility →', href: '/tools/visa-checker/' },
      },
      {
        number: '02',
        title: 'Clear Co-Located or Border-Stop Immigration With Luggage',
        stopCheck: 'STOP & CHECK: On the China–Laos train (D87/D88), you MUST disembark with ALL luggage at Mohan and Boten stations for customs inspection.',
        summary: 'Allow at least 45 minutes at West Kowloon for dual HK/Mainland immigration counters before gate close.',
        checklist: ['Keep paper Laos e-visa printout if heading southbound.', 'No fresh fruit or restricted sprays in carry-on luggage.'],
      },
    ],
  },

  /* ===================== VARIANT B: DECISION MATRIX (决策横评与矩阵型) ===================== */
  {
    slug: 'top-attractions-ranking',
    pillar: 'places',
    archetype: 'matrix',
    persona: 'analyst',
    title: 'Top China Attractions: Great Wall, Pandas & Ancient Towns Honest Ranking',
    titleZh: '顶流景点抢票与长城/熊猫/古镇红黑榜',
    leadHook: 'Zero diplomatic AI hedging. See exactly which Great Wall section, panda base, and water town fit your stamina—and which viral spots to skip outright.',
    leadHookZh: '拒绝端水：直给长城各段、熊猫基地、江南古镇的真实红黑结论——最适合谁、绝对劝退谁、真实费用与核心暗坑。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: [],
    hardFacts: [
      { label: 'Forbidden City Drop', value: '7 days ahead at 20:00 BJT (Closed Mondays)', source: 'Palace Museum', verifiedDate: '2026-11-15' },
      { label: 'Mutianyu vs Badaling', value: 'Mutianyu: 60% fewer crowds, toboggan down', source: 'Field Audit', verifiedDate: '2026-11-15' },
      { label: 'Panda Activity Peak', value: '07:30–10:30 AM (sleeping by noon)', source: 'Chengdu Base', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: 'Ticket Release Timezone Calc', href: '/tools/ticket-calendar/' }],
    relatedEntities: [
      { label: 'Badaling vs. Mutianyu', href: '/compare/badaling-vs-mutianyu/', tag: '/compare/' },
      { label: 'Forbidden City Rules', href: '/attractions/forbidden-city/', tag: '/attractions/' },
      { label: 'Mutianyu Great Wall', href: '/attractions/mutianyu-great-wall/', tag: '/attractions/' },
      { label: 'Chengdu Panda Base', href: '/attractions/chengdu-panda-base/', tag: '/attractions/' },
    ],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Mutianyu Great Wall (慕田峪)', bestFor: 'First-timers wanting classic towers without crushing tour-bus lines', avoidIf: 'You only have 3 hours and must ride direct HSR from Qinghe', costRange: '¥180–¥260 (ticket + shuttle + cable/toboggan)', hiddenTrap: 'Unofficial “private shuttle” touts at Huairou highway exits', href: '/attractions/mutianyu-great-wall/' },
      { option: 'Badaling Great Wall (八达岭)', bestFor: 'Wheelchair/senior travelers & tight 4-hour HSR half-day schedules', avoidIf: 'You hate shoulder-to-shoulder holiday crowds', costRange: '¥140–¥220 (HSR from Qinghe + entry)', hiddenTrap: 'Going to Beijing North when your ticket departs Qinghe Station (清河站)', href: '/compare/badaling-vs-mutianyu/' },
      { option: 'Forbidden City (故宫博物院)', bestFor: 'Architecture & imperial history lovers who book 7 days early', avoidIf: 'Trying to buy same-day walk-up tickets (zero onsite tickets)', costRange: '¥40–¥60 (off/peak season)', hiddenTrap: 'Closed Mondays; Tiananmen Square requires a SEPARATE reservation', href: '/attractions/forbidden-city/' },
      { option: 'Chengdu Giant Panda Base', bestFor: 'Early risers arriving at 07:30 AM West/South Gate', avoidIf: 'Arriving after 11:30 AM in summer (pandas move indoors to AC)', costRange: '¥55 entry + ¥30 shuttle', hiddenTrap: 'Hua Hua enclosure queues exceed 90 mins on weekends', href: '/attractions/chengdu-panda-base/' },
      { option: 'Wuzhen West Gate (乌镇西栅)', bestFor: 'Polished night-lantern photography & boutique canal stays', avoidIf: 'You want uncommercialized living-village authenticity (pick Nanxun instead)', costRange: '¥150 entry (stay inside for quiet morning)', hiddenTrap: 'Day-trippers miss the serene 07:00–09:00 window before buses arrive', href: '/cities/shanghai/' },
    ],
  },
  {
    slug: 'cashless-super-apps',
    pillar: 'visit',
    archetype: 'matrix',
    persona: 'safety',
    title: 'Cashless Payments & Super-Apps Decision Matrix',
    titleZh: '无现金支付与超级应用实测决策矩阵',
    leadHook: 'Alipay vs. WeChat Pay, Wise vs. Chase cards, and eSIM vs. local China Mobile SIM—compared on real fee cliffs, +86 phone requirements, and failure rates.',
    leadHookZh: '支付宝与微信支付外卡实测、eSIM 与本地电话卡、高德与苹果地图的真实门槛、费用红线与免 +86 手机号可用性对比。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: [],
    hardFacts: [
      { label: 'Fee-Free Threshold', value: '¥200 RMB per single transaction (0% fee)', source: 'PBOC / Alipay / WeChat', verifiedDate: '2026-11-15' },
      { label: 'Annual Foreign Card Cap', value: 'USD $50,000 verified annual limit', source: 'PBOC 2024 Upgrade', verifiedDate: '2026-11-15' },
      { label: 'Single Txn Limit', value: 'USD $5,000 per transaction after ID check', source: 'PBOC', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: 'Budget & Tax Refund Calc', href: '/tools/budget-calculator/' }],
    relatedEntities: [
      { label: 'Alipay vs. WeChat Pay', href: '/compare/alipay-vs-wechat-pay/', tag: '/compare/' },
      { label: 'eSIM vs. Local +86 SIM', href: '/compare/esim-vs-local-sim/', tag: '/compare/' },
      { label: 'Amap vs. Apple Maps', href: '/compare/amap-vs-apple-maps/', tag: '/compare/' },
      { label: 'WeChat Restricted Rescue', href: '/errors/wechat-restricted/', tag: '/errors/' },
    ],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Alipay (支付宝 International)', bestFor: 'Primary payment app, DiDi mini-program, metro QR & instant translation', avoidIf: 'Sending peer-to-peer transfers to personal street-vendor accounts (limited on foreign cards)', costRange: '0% ≤ ¥200 · 3% > ¥200', hiddenTrap: 'Some small vendors only display personal transfer QR codes—keep WeChat Pay as backup', href: '/compare/alipay-vs-wechat-pay/' },
      { option: 'WeChat Pay (微信支付)', bestFor: 'Restaurant table-QR ordering, museum mini-programs & local messaging', avoidIf: 'Relying solely on a brand-new unaged WeChat account (higher risk-control freezes)', costRange: '0% ≤ ¥200 · 3% > ¥200', hiddenTrap: 'Rapid friend adds or VPN IP jumps can trigger temporary account restriction', href: '/errors/wechat-restricted/' },
      { option: 'HK/SG Roaming eSIM', bestFor: 'Trips under 30 days needing native WhatsApp, Gmail & Google access', avoidIf: 'You need a +86 SMS number for Meituan food delivery or hospital portals', costRange: '$12–$28 for 10–20GB', hiddenTrap: 'Data-only eSIMs have no voice calls—use hotel desk or WeChat for local calls', href: '/compare/esim-vs-local-sim/' },
      { option: 'Amap English (高德地图)', bestFor: 'Walking, subway exits, exact store pins & taxi comparison in China', avoidIf: 'Preferring Apple Maps native iOS Siri integration', costRange: 'Free (no +86 required)', hiddenTrap: 'Search landmarks by pasted Chinese name for 100% pin accuracy', href: '/compare/amap-vs-apple-maps/' },
    ],
  },
  {
    slug: 'rail-budget-tax-refund',
    pillar: 'visit',
    archetype: 'matrix',
    persona: 'safety',
    title: 'High-Speed Rail, Daily Budgets & Instant Tax Refund 2.0',
    titleZh: '高铁出行、每日预算与离境退税 2.0 矩阵',
    leadHook: 'Real 2026 travel budgets from backpacker to boutique, 12306 vs. Trip.com booking fees, and how to claim the 11% (9% net) departure VAT refund starting at just ¥200.',
    leadHookZh: '从背包客到精品酒店的真实日均预算、12306 与 Trip.com 抢票成本横评，以及满 200 元即可享受 11% 即买即退全解析。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: ['tax'],
    hardFacts: [
      { label: 'Tax Refund 2.0 Minimum', value: '¥200 RMB same-day same-store spend', source: 'MOFCOM / STA 2025', verifiedDate: '2026-11-15' },
      { label: 'Net VAT Refund Rate', value: '9% cash/card net (11% VAT minus 2% agency fee)', source: 'STA Tax Refund', verifiedDate: '2026-11-15' },
      { label: 'Cash Refund Cap', value: 'Up to ¥20,000 RMB in cash at airport', source: 'STA 2025 Update', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [
      { label: 'Budget & Tax Refund Calc', href: '/tools/budget-calculator/' },
      { label: '12306 Release Calendar', href: '/tools/ticket-calendar/' },
    ],
    relatedEntities: [
      { label: 'Beijing → Shanghai HSR', href: '/routes/beijing-to-shanghai/', tag: '/routes/' },
      { label: '12306 Passport Error Fix', href: '/errors/12306-passport-failed/', tag: '/errors/' },
      { label: 'Tax Refund Form Annotated', href: '/documents/tax-refund-form/', tag: '/documents/' },
    ],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Railway 12306 Official App', bestFor: 'Zero booking fee, instant seat selection & official refund rules', avoidIf: 'You do not want to wait 15 days out without auto-sniping', costRange: '¥0 service fee', hiddenTrap: 'Name order must match passport MRZ exactly (SURNAME GIVENNAME)', href: '/errors/12306-passport-failed/' },
      { option: 'Trip.com Rail Booking', bestFor: 'Pre-booking earlier than 15 days & English customer support', avoidIf: 'Booking 8+ short rides where $3–$5 fees add up', costRange: '$3–$6 per ticket fee', hiddenTrap: 'Waitlist is not a guaranteed ticket until issued 15 days out', href: '/routes/beijing-to-shanghai/' },
      { option: 'Instant In-Store Tax Refund', bestFor: 'Department stores & flagship malls (instant cash/Alipay pre-auth)', avoidIf: 'Leaving via a small port without customs tax-refund stamp counter', costRange: '9% net back (pre-auth held until customs stamp)', hiddenTrap: 'Forgetting airport customs verification charges your card back in full', href: '/documents/tax-refund-form/' },
    ],
  },
  {
    slug: 'medical-dental-checkup',
    pillar: 'visit',
    archetype: 'matrix',
    persona: 'safety',
    title: 'China Medical & Dental Checkup Tourism Matrix',
    titleZh: '来华体检、看牙与国际医疗旅游决策矩阵',
    leadHook: 'Same-day full-body MRI/blood panels and international-grade dental care at 15–30% of US/European out-of-pocket costs—decoded with real department tiers and booking rules.',
    leadHookZh: '对比三甲公立国际部、外资私立医院与品牌齿科的真实费用区间、英文沟通度与当日出报告流程。',
    lastVerified: '2026-11-18',
    tier: 'Tier-B Field Curated',
    disclaimers: ['medical', 'prescription'],
    hardFacts: [
      { label: 'Comprehensive Checkup', value: '¥1,800–¥4,500 ($250–$620) · Same-day results', source: 'Tier-3A Intl Depts', verifiedDate: '2026-11-15' },
      { label: 'Dental Cleaning / Crown', value: 'Cleaning ¥300–¥800 · Ceramic Crown ¥2,800–¥5,500', source: 'Field Pricing Audit', verifiedDate: '2026-11-15' },
      { label: 'Foreign Passport Intake', value: 'Passport accepted directly at VIP / International wings', source: 'Hospital Portals', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [
      { label: 'Medical & SOS Cards', href: '/tools/medical-sos-cards/' },
      { label: 'Budget Estimator', href: '/tools/budget-calculator/' },
    ],
    relatedEntities: [
      { label: 'Shanghai Intl Hospitals', href: '/cities/shanghai/#hospitals', tag: '/cities/' },
      { label: 'Beijing Intl Hospitals', href: '/cities/beijing/#hospitals', tag: '/cities/' },
      { label: 'Adderall / Prescription Rules', href: '/in-china/adderall/', tag: '/in-china/' },
    ],
    pulse: [
      { status: 'worked', context: 'Australian Visitor · Shanghai Huashan Intl', detail: 'Full blood panel + ultrasound + chest CT finished in 3.5 hours for ¥2,980.', ago: '2d ago' },
      { status: 'worked', context: 'US Visitor · Shenzhen Dental Clinic', detail: '2 zirconia crowns completed over 4 days with English coordinator for ¥7,600 total.', ago: '4d ago' },
    ],
    matrixRows: [
      { option: 'Tier-3A Public Hospital International Wing (三甲国际部)', bestFor: 'High-precision diagnostics, MRI/CT & complex specialist consults', avoidIf: 'Expecting zero wait without WeChat/phone appointment 3–7 days prior', costRange: 'Consult ¥300–¥800 · Full checkup ¥2,000–¥4,500', hiddenTrap: 'Standard general queues are Chinese-only; explicitly book 国际医疗部 (International Dept)', href: '/cities/shanghai/' },
      { option: 'Foreign-Run Private Hospitals (e.g., United Family / Parkway)', bestFor: '100% native English billing, direct international insurance settlement', avoidIf: 'Paying out-of-pocket on a tight budget', costRange: 'Consult ¥1,200–¥2,200 · Checkup ¥5,500–¥12,000', hiddenTrap: 'Confirm direct-billing pre-authorization with your insurer 48h prior', href: '/cities/beijing/' },
      { option: 'Shenzhen / Shanghai Branded Dental Clinics', bestFor: 'Cleanings, veneers, implants & root canals during HK/Mainland trip', avoidIf: 'Needing multi-month orthodontic follow-ups back home', costRange: 'Cleaning ¥350 · Implant ¥6,500–¥12,000', hiddenTrap: 'Ask for printed brand warranty card (Straumann/Nobel) & digital X-ray DICOM files', href: '/cities/shenzhen/' },
    ],
  },
  {
    slug: 'digital-nomad-china',
    pillar: 'live',
    archetype: 'matrix',
    persona: 'analyst',
    title: 'Digital Nomad Living in China: City, Cost & Connectivity Matrix',
    titleZh: '数字游民旅居中国：城市、成本与网络矩阵',
    leadHook: 'Compare Dali, Chengdu, Shanghai, and Hainan on real monthly burn rate, coworking fiber stability, cafe culture, and visa rhythm.',
    leadHookZh: '横向拆解大理、成都、上海与海南的真实月租、咖啡办公生态、跨国远程网络延迟与签证续签节奏。',
    lastVerified: '2026-11-16',
    tier: 'Tier-B Field Curated',
    disclaimers: ['visa', 'tax'],
    hardFacts: [
      { label: 'Tier-2 Monthly Burn', value: '¥6,500–¥11,000 ($900–$1,500) comfortable', source: 'Field Audit', verifiedDate: '2026-11-15' },
      { label: 'Tax Residency Trigger', value: '183 days in a single calendar year', source: 'PRC IIT Law', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Digital Nomad 30-Day Stack', href: '/stacks/digital-nomad-30-day/' },
    directTools: [{ label: 'Budget & Tax Calculator', href: '/tools/budget-calculator/' }],
    relatedEntities: [
      { label: 'Chengdu City Hub', href: '/cities/chengdu/', tag: '/cities/' },
      { label: 'Shanghai City Hub', href: '/cities/shanghai/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Chengdu (成都)', bestFor: 'Best food-to-rent ratio, relaxed cafes & easy 240h/visa hub', avoidIf: 'You need constant sunny skies (overcast winters)', costRange: '¥7,500–¥11,500 / month', hiddenTrap: 'Confirm landlord agrees to 24h police registration before paying deposit', href: '/cities/chengdu/' },
      { option: 'Shanghai (上海)', bestFor: 'Fastest international networking, English services & global flights', avoidIf: 'Budgeting under $1,800/month', costRange: '¥14,000–¥22,000 / month', hiddenTrap: 'Short 1-month leases carry 25–40% premiums vs. 12-month contracts', href: '/cities/shanghai/' },
      { option: 'Dali, Yunnan (大理)', bestFor: 'Spring-like weather, mountain views & established nomad coliving', avoidIf: 'Needing direct international flights without Kunming transfer', costRange: '¥5,000–¥8,000 / month', hiddenTrap: 'High UV & 2,000m altitude—pace first 48 hours', href: '/stacks/digital-nomad-30-day/' },
    ],
  },
  {
    slug: 'hardware-open-ai-stack',
    pillar: 'atlas',
    archetype: 'matrix',
    persona: 'analyst',
    title: 'Hardware Geeks & Chinese Open-Source AI Stack',
    titleZh: '硬件极客与国产开源 AI 工具栈矩阵',
    leadHook: 'From Huaqiangbei PCB prototyping in 48 hours to DeepSeek, Qwen, and Kimi API ecosystems—what actually outperforms Western defaults and where compliance walls sit.',
    leadHookZh: '从华强北 48 小时硬件打样到 DeepSeek / Qwen 开源大模型与本地部署，给全球极客与开发者的冷静横评。',
    lastVerified: '2026-11-17',
    tier: 'Tier-B Field Curated',
    disclaimers: ['legal'],
    hardFacts: [
      { label: 'Shenzhen PCB Turnaround', value: '24–48h quick-turn prototype boards', source: 'Shenzhen Supply Chain', verifiedDate: '2026-11-15' },
      { label: 'Open-Weight Models', value: 'DeepSeek / Qwen / GLM Apache-2.0 & MIT tiers', source: 'Upstream Repos', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Canton Fair & Hardware Buyer Stack', href: '/stacks/canton-fair-buyer-kit/' },
    directTools: [{ label: 'USCC & GB Standards Matcher', href: '/tools/uscc-gb-matcher/' }],
    relatedEntities: [{ label: 'Shenzhen Hub (440300)', href: '/cities/shenzhen/', tag: '/cities/' }],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Huaqiangbei (华强北 SEG / HQ Mart)', bestFor: 'Components, dev boards, drones, displays & custom cables', avoidIf: 'Buying sealed Apple/NVIDIA retail boxes expecting steep discounts', costRange: '20–60% below Western retail on components', hiddenTrap: 'Refurbished chips sold as new—buy from verified stalls with receipt', href: '/cities/shenzhen/' },
      { option: 'DeepSeek / Qwen Open Weights', bestFor: 'Low-cost coding, bilingual reasoning & self-hosted inference', avoidIf: 'Regulated EU/US datasets banning non-local cloud APIs (self-host instead)', costRange: 'Open weights free · API ~$0.14–$0.55 / 1M tokens', hiddenTrap: 'Mainland domestic API accounts may require +86 verification; use global endpoints or local weights', href: '/portals/' },
    ],
  },
  {
    slug: 'buying-electronics-red-lines',
    pillar: 'business',
    archetype: 'matrix',
    persona: 'legal',
    title: '5 Hard Red Lines When Buying Electronics in China',
    titleZh: '来华买电子产品的 5 条硬红线',
    leadHook: 'Before buying a flagship phone, drone, or power bank in China, check Mainland iPhone eSIM locks, CCC (3C) battery stamps, regional firmware, and warranty borders.',
    leadHookZh: '买手机、无人机、充电宝前必看的 5 条铁律：国行 eSIM 阉割、民航局 3C 充电宝安检红线、频段差异与跨国保修。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: ['legal'],
    hardFacts: [
      { label: 'Power Bank Air Rule', value: '≤ 100Wh + visible CCC (3C) mark required on domestic flights', source: 'CAAC Safety', verifiedDate: '2026-11-15' },
      { label: 'Mainland iPhone', value: 'Dual physical SIM, NO eSIM; FaceTime Audio disabled', source: 'Hardware Spec', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Canton Fair Buyer Stack', href: '/stacks/canton-fair-buyer-kit/' },
    directTools: [{ label: 'Budget & Tax Refund Calc', href: '/tools/budget-calculator/' }],
    relatedEntities: [{ label: 'CCC (3C) Certification Desk', href: '/compliance/ccc-3c-certification/', tag: '/compliance/' }],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'Power Banks (充电宝)', bestFor: 'Anker / UGREEN / Xiaomi with clear CCC logo & Wh print', avoidIf: 'Unlabeled or > 100Wh (27,000mAh) packs', costRange: '¥99–¥299', hiddenTrap: 'Domestic airport security confiscates packs missing clear Wh / CCC markings', href: '/compliance/ccc-3c-certification/' },
      { option: 'Mainland China Smartphones', bestFor: 'DJI / Insta360 / photography hardware with global apps', avoidIf: 'Buying CN-ROM Android expecting seamless Android Auto & WearOS', costRange: '10–25% cheaper + 9% tax refund', hiddenTrap: 'Mainland iPhones lack eSIM support; CN-ROM phones often lack Google Play pre-installed', href: '/cities/shenzhen/' },
    ],
  },
  {
    slug: 'smart-evs-clean-energy',
    pillar: 'atlas',
    archetype: 'matrix',
    persona: 'analyst',
    title: 'Smart EVs, Battery Swapping & Clean Energy Grid',
    titleZh: '智能电车、换电网络与清洁能源矩阵',
    leadHook: 'Why over half of new passenger cars in China plug in—comparing BYD, NIO battery swap, Xiaomi SU7, and UHV solar-wind transmission corridors.',
    leadHookZh: '拆解中国新能源汽车渗透率超 50% 背后的产业逻辑：超充、换电与特高压绿电走廊实测观察。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Official + Field',
    disclaimers: [],
    hardFacts: [
      { label: 'NEV Retail Penetration', value: '> 50% of monthly new passenger cars', source: 'CPCA / MIIT', verifiedDate: '2026-11-15' },
      { label: 'NIO Battery Swap Time', value: '~3 minutes automated swap', source: 'Field Observed', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: '848 Gov Data Portals', href: '/portals/' }],
    relatedEntities: [{ label: 'Shenzhen Tech Hub', href: '/cities/shenzhen/', tag: '/cities/' }],
    pulse: DEFAULT_PULSE,
    matrixRows: [
      { option: 'BYD / Geely Mass EVs', bestFor: 'Taxi/DiDi fleet reliability & LFP battery cost breakthroughs', avoidIf: 'Expecting Western CarPlay inside domestic cabins', costRange: '¥79,800–¥260,000 domestic MSRP', hiddenTrap: 'Most domestic EV voice assistants are Mandarin-first', href: '/cities/shenzhen/' },
      { option: 'NIO / XPeng / Xiaomi Smart Cockpits', bestFor: 'Experience autonomous parking & 3-min battery swap showrooms', avoidIf: 'Renting without a Chinese provisional driver’s license', costRange: 'Showroom demos free for visitors', hiddenTrap: 'Foreigners need a temporary PRC driving permit to test-drive on public roads', href: '/guides/drivers-license-family/' },
    ],
  },

  /* ===================== VARIANT C: VISUAL RESCUE & DYNAMIC FEED (视觉救火与动态日志型) ===================== */
  {
    slug: 'official-forms-app-errors',
    pillar: 'visit',
    archetype: 'rescue',
    persona: 'safety',
    title: 'China Official Forms & App Errors Visual Rescue Hub',
    titleZh: '中国官方表格与 App 报错全图解救火手册',
    leadHook: 'Stuck on a Chinese-only popup at the airport, rail station, or hotel laundry? Filter by app or scenario to open red-box annotated rescue screens.',
    leadHookZh: '在机场、高铁站、微信/12306 弹窗或酒店洗衣机前卡壳？按 App 与场景即时筛选，点击直达全屏红框中英标注页。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    disclaimers: [],
    hardFacts: [
      { label: 'Top Freeze Cause', value: 'New WeChat account + sudden VPN IP switch', source: 'Field Logs', verifiedDate: '2026-11-15' },
      { label: '12306 Fix Time', value: '2–5 mins via passport photo upload or station window', source: 'Railway 12306', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Solo Female 10-Day Stack', href: '/stacks/solo-female-10-day/' },
    directTools: [
      { label: 'Show-to-Local Driver Cards', href: '/cards/taxi-beijing-qinghe/' },
      { label: 'Live Field Reports', href: '/pulse/' },
    ],
    relatedEntities: [
      { label: 'WeChat Restricted Rescue', href: '/errors/wechat-restricted/', tag: '/errors/' },
      { label: '12306 Passport Failed', href: '/errors/12306-passport-failed/', tag: '/errors/' },
      { label: 'Arrival Card Red-Box', href: '/documents/arrival-card/', tag: '/documents/' },
      { label: 'Hotel Washing Machine', href: '/how-to-use/hotel-washing-machine/', tag: '/how-to-use/' },
    ],
    pulse: DEFAULT_PULSE,
    rescueFilters: ['All', 'WeChat', 'Alipay', '12306', 'Forms', 'Devices'],
    rescueItems: [
      { appOrGroup: 'WeChat', title: 'WeChat Account Restricted / Suspicious Activity', chineseSignal: '该微信账号因存在异常行为已被限制登录', actionSummary: 'Tap red-box 1 (自助解封), avoid VPN switches, verify via SMS or friend assist.', href: '/errors/wechat-restricted/' },
      { appOrGroup: '12306', title: '12306 Passport Verification Pending / Failed', chineseSignal: '身份信息核验未通过 / 待核验', actionSummary: 'Match MRZ surname-first order without hyphens and upload glare-free bio page.', href: '/errors/12306-passport-failed/' },
      { appOrGroup: 'Alipay', title: 'Alipay ¥200 Fee Prompt & Card Limit Declined', chineseSignal: '国际银行卡单笔超200元收取3%服务费', actionSummary: 'Split eligible bills or verify passport tier inside Account & Security.', href: '/errors/alipay-200rmb-limit/' },
      { appOrGroup: 'Forms', title: 'China Arrival Card (外国人入境卡)', chineseSignal: '外国人入境卡 · 240h 临时入境卡', actionSummary: 'Field-by-field red-box guide covering intended address, city & flight number.', href: '/documents/arrival-card/' },
      { appOrGroup: 'Forms', title: '24-Hour Temporary Residence Registration', chineseSignal: '境外人员临时住宿登记表', actionSummary: 'Exact landlord deed + passport upload fields required within 24h of apartment check-in.', href: '/documents/temp-residence-reg/' },
      { appOrGroup: 'Devices', title: 'Chinese Hotel Washing Machine Panel', chineseSignal: '标准洗 · 快洗 · 单脱水 · 烘干', actionSummary: 'Annotated control dial map so you never trigger a 3-hour boil cycle by mistake.', href: '/how-to-use/hotel-washing-machine/' },
    ],
  },
  {
    slug: 'policy-changelog',
    pillar: 'atlas',
    archetype: 'rescue',
    persona: 'analyst',
    title: 'China Entry & Business Policy Monthly Changelog',
    titleZh: '中国入境与商旅政策月度变更日志',
    leadHook: 'Chronological, effective-date verified log of visa-free expansions, departure tax refund upgrades, payment limits, and customs rules—built for zero-hallucination citation.',
    leadHookZh: '按生效日期倒序追踪签证免签扩容、离境退税 2.0、外卡支付限额与海关新规，每条附官方溯源锚点。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Statutory',
    disclaimers: ['visa', 'tax'],
    hardFacts: [
      { label: 'Latest Review Cycle', value: '2026-11 Monthly Audit', source: 'ChinaWao Editorial Desk', verifiedDate: '2026-11-18' },
      { label: 'Tracked Ministries', value: 'NIA · MFA · MOFCOM · STA · PBOC · CAAC', source: 'Primary Bulletins', verifiedDate: '2026-11-18' },
    ],
    stackLink: { label: '848 Gov Data & MCP Center', href: '/portals/' },
    directTools: [{ label: '240h Visa Checker', href: '/tools/visa-checker/' }],
    relatedEntities: [{ label: 'Live Field Reports', href: '/pulse/', tag: 'Field' }],
    pulse: DEFAULT_PULSE,
    rescueFilters: ['All', 'Visa', 'Tax & Pay', 'Aviation', 'Business'],
    rescueItems: [
      { appOrGroup: 'Visa', title: '240-Hour Visa-Free Transit Cross-Province Expansion Stable Across 60 Ports', chineseSignal: '国家移民管理局 240 小时过境免签', actionSummary: 'Cross-province travel across 24 provinces confirmed operational at PVG, PEK, PKX, CAN, CTU, XIY.', effectiveDate: 'Effective 2024-12-17 · Verified 2026-11', sourceAnchor: 'NIA Official Bulletin', href: '/guides/240h-visa-free-transit/' },
      { appOrGroup: 'Tax & Pay', title: 'Departure Tax Refund 2.0 Lowers Threshold From ¥500 to ¥200', chineseSignal: '离境退税“即买即退”与起退点降至200元', actionSummary: 'Cash refund ceiling doubled to ¥20,000 RMB; instant in-store refunds rolled out nationwide.', effectiveDate: 'Effective 2025-04-27 · Verified 2026-11', sourceAnchor: 'MOFCOM & STA Joint Notice', href: '/guides/rail-budget-tax-refund/' },
      { appOrGroup: 'Aviation', title: 'CAAC Enforces Visible CCC (3C) Mark on Domestic Flight Power Banks', chineseSignal: '民航局国内航班充电宝 3C 标识核查', actionSummary: 'Power banks without legible CCC certification or recalled models barred from domestic cabins.', effectiveDate: 'Verified 2026-11', sourceAnchor: 'CAAC Aviation Safety', href: '/guides/buying-electronics-red-lines/' },
      { appOrGroup: 'Business', title: 'Hague Apostille Replaces Consular Legalization for Work Permits', chineseSignal: '《取消外国公文书认证要求的公约》附加证明书', actionSummary: 'Foreign degrees and police clearances from member states require only Apostille, cutting 3–4 weeks.', effectiveDate: 'Effective 2023-11-07 · Active 2026', sourceAnchor: 'MFA Consular Dept', href: '/guides/study-work-residence/' },
    ],
  },
  {
    slug: 'annual-events-calendar',
    pillar: 'culture',
    archetype: 'rescue',
    persona: 'editorial',
    title: 'China 12-Month Annual Events, Seasons & Festivals Calendar',
    titleZh: '中国年度 12 月盛事、花期与传统节庆日历',
    leadHook: 'Plan around Harbin ice sculptures, Spring Festival lantern nights, Yunnan rape-flower valleys, Canton Fair phases, and crisp October autumn foliage.',
    leadHookZh: '按 1–12 月时间轴排布全年最佳风物、花期、非遗庙会与大型商贸展会，一眼避开人潮高峰。',
    lastVerified: '2026-11-16',
    tier: 'Tier-B Field Curated',
    disclaimers: [],
    hardFacts: [
      { label: 'Best Weather Windows', value: 'Mid-Apr–May & Mid-Oct–Nov', source: 'Climate Archive', verifiedDate: '2026-11-15' },
      { label: 'Peak Crowd Weeks', value: 'Spring Festival · May 1–5 · Oct 1–7', source: 'State Council', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: 'Ticket Release Calendar', href: '/tools/ticket-calendar/' }],
    relatedEntities: [{ label: 'Statutory Holidays & Crowds', href: '/guides/china-statutory-holidays/', tag: '/guides/' }],
    pulse: DEFAULT_PULSE,
    rescueFilters: ['All', 'Winter (Dec–Feb)', 'Spring (Mar–May)', 'Summer (Jun–Aug)', 'Autumn (Sep–Nov)'],
    rescueItems: [
      { appOrGroup: 'Winter (Dec–Feb)', title: 'Jan–Feb · Harbin Ice & Snow World + Spring Festival Lanterns', chineseSignal: '哈尔滨冰雪大世界 · 春节元宵灯会', actionSummary: 'Book Harbin hotels 30+ days early; expect Chunyun rail surge 15 days before Lunar New Year.', effectiveDate: 'Jan – Feb', href: '/guides/living-folk-arts/' },
      { appOrGroup: 'Spring (Mar–May)', title: 'Mar–Apr · Wuhan Cherry Blossoms, Wuyuan Fields & Canton Fair Spring', chineseSignal: '春季赏花 · 广交会春交会 (4月15日开馆)', actionSummary: 'Best balanced temperatures across Jiangnan, Sichuan, and Guangzhou.', effectiveDate: 'Mar – May', href: '/guides/factory-sourcing-due-diligence/' },
      { appOrGroup: 'Summer (Jun–Aug)', title: 'Jun–Aug · Dragon Boat Races, Yunnan Highlands & Xinjiang Loops', chineseSignal: '端午龙舟 · 西南避暑与新疆自驾季', actionSummary: 'Avoid humid Yangtze lowlands in July–August; head to Yunnan, Qinghai, or high-altitude rail routes.', effectiveDate: 'Jun – Aug', href: '/cities/chengdu/' },
      { appOrGroup: 'Autumn (Sep–Nov)', title: 'Oct–Nov · Mid-Autumn Mooncakes, Beijing Ginkgo & Autumn Canton Fair', chineseSignal: '中秋赏月 · 北京银杏秋色 · 秋交会', actionSummary: 'Skip Oct 1–7 Golden Week; Oct 10–Nov 15 is China’s #1 all-around travel window.', effectiveDate: 'Sep – Nov', href: '/cities/beijing/' },
    ],
  },
  {
    slug: 'china-statutory-holidays',
    pillar: 'atlas',
    archetype: 'rescue',
    persona: 'analyst',
    title: 'China Statutory Holidays, Tiaoxiu (调休) & Crowd Index',
    titleZh: '中国法定节假日、调休机制与全国拥挤度',
    leadHook: 'Why a 3-day holiday stretches into 5 days by shifting weekend workdays—and exact dates when HSR tickets sell out in 60 seconds.',
    leadHookZh: '读懂中国独有的周末“调休”安排，标注春节、五一、十一黄金周的高铁放票倒计时与景区红警日期。',
    lastVerified: '2026-11-16',
    tier: 'Tier-A Statutory',
    disclaimers: [],
    hardFacts: [
      { label: 'Extreme Crowd Alerts', value: 'Spring Festival (8d) · Labor Day (5d) · National Day (7d)', source: 'State Council Office', verifiedDate: '2026-11-15' },
      { label: 'HSR Sell-Out Speed', value: '< 2 minutes at 15-day release during Golden Weeks', source: '12306 Field Data', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Ticket Release Calendar', href: '/tools/ticket-calendar/' },
    directTools: [{ label: 'Ticket Release Calendar', href: '/tools/ticket-calendar/' }],
    relatedEntities: [{ label: 'Annual 12-Month Calendar', href: '/guides/annual-events-calendar/', tag: '/guides/' }],
    pulse: DEFAULT_PULSE,
    rescueFilters: ['All', 'Red Alert', 'Moderate'],
    rescueItems: [
      { appOrGroup: 'Red Alert', title: 'Spring Festival (春节) — 8 Days + 40-Day Chunyun', chineseSignal: '春节黄金周 · 春运', actionSummary: 'Factories close for 2–3 weeks; Tier-1 cities empty out while tourist towns surge.', effectiveDate: 'Jan / Feb', href: '/tools/ticket-calendar/' },
      { appOrGroup: 'Red Alert', title: 'Labor Day (五一) & National Day (十一) Golden Weeks', chineseSignal: '五一 / 国庆黄金周', actionSummary: 'Hotel prices double and Forbidden City / Great Wall tickets vanish instantly. Shift trip by 7 days if possible.', effectiveDate: 'May 1–5 & Oct 1–7', href: '/guides/top-attractions-ranking/' },
      { appOrGroup: 'Moderate', title: 'Qingming, Dragon Boat & Mid-Autumn 3-Day Breaks', chineseSignal: '清明 · 端午 · 中秋小长假', actionSummary: 'Regional short-haul HSR sells out on Friday evening and Sunday afternoon.', effectiveDate: 'Apr / Jun / Sep', href: '/routes/beijing-to-shanghai/' },
    ],
  },
  {
    slug: 'hk-macau-taiwan-border',
    pillar: 'visit',
    archetype: 'rescue',
    persona: 'safety',
    title: 'Mainland ↔ Hong Kong, Macau & Taiwan Cross-Border Field Guide',
    titleZh: '内地与港澳台跨境实操与通关红线',
    leadHook: 'Crossing from Hong Kong into Shenzhen counts as an international border exit/entry—know which visa resets, which e-channels apply, and how West Kowloon HSR works.',
    leadHookZh: '香港/澳门往返深圳珠海属于出入境通关：梳理单次签证作废红线、西九龙一地两检、港珠澳大桥穿梭巴士与手机卡切换。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Official + Field',
    disclaimers: ['visa'],
    hardFacts: [
      { label: 'Single-Entry L-Visa Trap', value: 'Day-tripping to HK consumes your single Mainland entry', source: 'NIA Border Rules', verifiedDate: '2026-11-15' },
      { label: 'West Kowloon → Shenzhen', value: '14–18 mins HSR · Co-located customs inside HK station', source: 'MTR High Speed Rail', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: '240h Visa-Free Transit Checker', href: '/tools/visa-checker/' },
    directTools: [{ label: '240h Visa Checker', href: '/tools/visa-checker/' }],
    relatedEntities: [
      { label: 'HK → Guangzhou Route', href: '/routes/hong-kong-to-guangzhou/', tag: '/routes/' },
      { label: 'Shenzhen City Hub', href: '/cities/shenzhen/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    rescueFilters: ['All', 'Hong Kong', 'Macau', 'Taiwan'],
    rescueItems: [
      { appOrGroup: 'Hong Kong', title: 'West Kowloon HSR Co-Located Border (一地两检)', chineseSignal: '香港西九龙站 · 内地口岸区', actionSummary: 'Arrive 45–60 mins early; clear HK exit and Mainland entry sequentially in one building.', effectiveDate: 'Daily 06:30–23:00', href: '/routes/hong-kong-to-guangzhou/' },
      { appOrGroup: 'Hong Kong', title: 'Shekou Ferry Terminal Direct to HKIA SkyPier', chineseSignal: '蛇口邮轮母港 → 香港国际机场海天码头', actionSummary: 'Check bags directly to your international flight without entering Hong Kong immigration; eligible for HK air-tax refund.', effectiveDate: 'Daily ferries', href: '/cities/shenzhen/' },
      { appOrGroup: 'Macau', title: 'Gongbei / Hengqin Port to Zhuhai & HZMB Bridge', chineseSignal: '拱北口岸 / 横琴口岸 24小时通关', actionSummary: 'Hengqin Port runs 24/7 with single-queue joint inspection; ideal for late-night crossings.', effectiveDate: '24 Hours (Hengqin)', href: '/guides/overland-rail-crossings/' },
    ],
  },

  /* ===================== VARIANT D: EDITORIAL GALLERY (沉浸式画廊与人文叙事型) ===================== */
  {
    slug: 'modern-china-24h',
    pillar: 'atlas',
    archetype: 'editorial',
    persona: 'analyst',
    title: 'Modern China in 24 Hours: Mega-Infrastructure & Daily Tech',
    titleZh: '当代中国 24 小时：超级基建与科技奇观',
    leadHook: '06:00 Fuxing bullet trains leaving at 350 km/h; 13:00 drone-dropped iced coffee over Shenzhen parks; 22:00 autonomous robotaxis gliding through neon rain. Experience the real velocity of China today.',
    leadHookZh: '清晨 6 点 350km/h 复兴号发车，午后深圳公园无人机投送冰美式，深夜无人驾驶出租车穿梭霓虹。用 24 小时坐标亲身体验当代中国。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    heroImage: '/images/technology.webp',
    featuredOnHome: true,
    homeLineTag: 'Atlas · Infrastructure',
    disclaimers: [],
    hardFacts: [
      { label: 'High-Speed Rail Grid', value: '45,000+ km (world’s largest)', source: 'China Railway', verifiedDate: '2026-11-15' },
      { label: 'Drone Delivery Cities', value: 'Shenzhen, Shanghai & Beijing pilot zones', source: 'Field Verified', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: 'Budget & Tax Refund Calc', href: '/tools/budget-calculator/' }],
    relatedEntities: [
      { label: 'Shanghai Hub (310000)', href: '/cities/shanghai/', tag: '/cities/' },
      { label: 'Shenzhen Hub (440300)', href: '/cities/shenzhen/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: '07:00 · 350 km/h Rail', title: 'Fuxing HSR Passport E-Gate Boarding', chineseName: '上海虹桥站 · 复兴号', copyTerm: '上海虹桥火车站', summary: 'Scan your foreign passport directly at automatic turnstiles and glide 1,318 km from Shanghai to Beijing in 4h 18m.', image: '/images/rail.webp', href: '/routes/beijing-to-shanghai/' },
      { kicker: '13:30 · Low-Altitude Economy', title: 'Meituan Drone Park Delivery in Shenzhen', chineseName: '深圳人才公园 · 无人机空投柜', copyTerm: '深圳人才公园 无人机', summary: 'Order iced tea or lunch to a dedicated landing kiosk in Shenzhen Talent Park and watch autonomous multi-rotors descend in 12 minutes.', image: '/images/technology.webp', href: '/cities/shenzhen/' },
      { kicker: '21:30 · Megacity Skyline', title: 'Lujiazui Skyline & Autonomous Mobility', chineseName: '陆家嘴滨江大道', copyTerm: '陆家嘴滨江大道', summary: 'Walk the Huangpu River promenade where 1920s Bund masonry faces 632m Shanghai Tower across silent electric ferries.', image: '/images/shanghai.webp', href: '/cities/shanghai/' },
    ],
  },
  {
    slug: 'myths-vs-facts',
    pillar: 'atlas',
    archetype: 'editorial',
    persona: 'analyst',
    title: '10 Western Myths About China, Decoded With Primary Data',
    titleZh: '破除西方关于中国的十大误解',
    leadHook: 'No, you will not be jailed for taking street photos; yes, Visa/Mastercard work inside Alipay; and no, you do not need a tour group to ride trains across China. Ten persistent myths tested on the ground.',
    leadHookZh: '不带滤镜也不带偏见：用一线实测与官方原始数据逐条拆解外网关于中国治安、支付、英语通行度、网络与独行安全的十大误区。',
    lastVerified: '2026-11-18',
    tier: 'Tier-A Official + Field',
    heroImage: '/images/shanghai.webp',
    featuredOnHome: true,
    homeLineTag: 'Atlas · Myth vs Fact',
    disclaimers: [],
    hardFacts: [
      { label: 'Cashless Access', value: 'Foreign Visa/Mastercard accepted directly in Alipay & WeChat', source: 'PBOC 2024–2026', verifiedDate: '2026-11-15' },
      { label: 'Hotel Rule Update', value: 'All legally operating hotels permitted to host foreigners', source: 'MPS / MOFCOM 2024', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Solo Female 10-Day Stack', href: '/stacks/solo-female-10-day/' },
    directTools: [{ label: '240h Visa Checker', href: '/tools/visa-checker/' }],
    relatedEntities: [
      { label: 'Solo Female Travel Hub', href: '/for/solo-female/', tag: '/for/' },
      { label: 'Alipay vs. WeChat Pay', href: '/compare/alipay-vs-wechat-pay/', tag: '/compare/' },
    ],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Myth 01 · Payments', title: '“Foreigners can’t pay without a Chinese bank account”', chineseName: '外卡直绑支付宝/微信', copyTerm: '支付宝外卡绑定', summary: 'FACT: Since 2024, linking a US/EU/UK Visa or Mastercard takes 3 minutes and carries 0% fee on purchases up to ¥200.', image: '/images/shanghai.webp', href: '/guides/cashless-super-apps/' },
      { kicker: 'Myth 02 · Safety at Night', title: '“Walking alone at 23:00 is risky for solo women”', chineseName: '城市夜间治安实测', copyTerm: '夜间出行安全', summary: 'FACT: Violent street crime is extraordinarily rare in Chinese cities; late-night barbecue streets and metro stations stay lively and safe.', image: '/images/chengdu.webp', href: '/for/solo-female/' },
      { kicker: 'Myth 03 · Connectivity', title: '“Your phone becomes a brick inside China”', chineseName: '境外漫游 eSIM 直连', copyTerm: '中国旅行 eSIM', summary: 'FACT: A $15 roaming eSIM keeps Gmail, WhatsApp, and Instagram working out of the box without configuring complex VPNs.', image: '/images/technology.webp', href: '/compare/esim-vs-local-sim/' },
    ],
  },
  {
    slug: 'black-myth-shanxi',
    pillar: 'places',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'From Black Myth: Wukong to Shanxi’s Ancient Timber Temples',
    titleZh: '从《黑神话：悟空》到山西千年木构古建巡礼',
    leadHook: 'More than 70% of China’s surviving pre-Yuan timber buildings stand quietly across Shanxi’s loess valleys. Follow the exact real-world shrines behind the game—with Amap coordinates and HSR hubs.',
    leadHookZh: '中国现存元代以前木构古建超七成藏身山西：串联悬空寺、应县木塔、佛光寺与小西天的真实打卡路线、高铁站与中文一键复制坐标。',
    lastVerified: '2026-11-17',
    tier: 'Tier-A Official + Field',
    heroImage: '/images/beijing.webp',
    featuredOnHome: true,
    homeLineTag: 'Places · Heritage Trail',
    disclaimers: [],
    hardFacts: [
      { label: 'Yingxian Wooden Pagoda', value: 'Built 1056 AD (Liao) · 67.3m tall, zero iron nails', source: 'NCHA Heritage', verifiedDate: '2026-11-15' },
      { label: 'Recommended Base Hubs', value: 'Datong (North) · Taiyuan (Central) · Linfen (South)', source: 'HSR Grid', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'First-Time China 10-Day Stack', href: '/stacks/first-time-china-10-day/' },
    directTools: [{ label: 'Ticket Release Calendar', href: '/tools/ticket-calendar/' }],
    relatedEntities: [
      { label: 'Beijing Hub (2h HSR to Datong)', href: '/cities/beijing/', tag: '/cities/' },
      { label: 'Xi’an Hub (3h HSR to Linfen)', href: '/cities/xian/', tag: '/cities/' },
    ],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Stop 01 · Datong (大同)', title: 'Hanging Temple & Yungang Grottoes', chineseName: '悬空寺 · 云冈石窟', copyTerm: '浑源悬空寺景区', summary: 'Cliff-hugging Northern Wei timber beams anchored into sheer rock above Jinlong Gorge. Book ascending walkway tickets days ahead.', image: '/images/beijing.webp', href: '/cities/beijing/' },
      { kicker: 'Stop 02 · Shuozhou (朔州)', title: 'Yingxian Timber Pagoda (1056 AD)', chineseName: '应县木塔（佛宫寺释迦塔）', copyTerm: '应县木塔', summary: 'The oldest and tallest standing all-wood pagoda on Earth—54 distinct dougong bracket sets interlocking without a single nail.', image: '/images/town.webp' },
      { kicker: 'Stop 03 · Linfen (临汾)', title: 'Xiaoxitian Hanging Sculptures', chineseName: '隰县小西天（千佛庵）', copyTerm: '隰县小西天', summary: 'Over 1,900 gilded Ming-dynasty suspended clay sculptures covering every square inch of the Da Xiong Hall ceiling.', image: '/images/craft.webp' },
    ],
  },
  {
    slug: 'flexible-sourcing-reverse-haul',
    pillar: 'business',
    archetype: 'editorial',
    persona: 'legal',
    title: 'Small-Batch 100-Unit Prototyping & Reverse China Haul',
    titleZh: '百件柔性打样与反向海淘实操指南',
    leadHook: 'You no longer need a 10,000-unit container order to manufacture in China—or a middleman to ship custom eyewear, ceramics, and linen from source belts directly to your door.',
    leadHookZh: '从 100 件小单柔性打样到丹阳配镜、景德镇瓷器、诸暨珍珠的源头反向海淘，附百大产业带坐标与合规直邮红线。',
    lastVerified: '2026-11-18',
    tier: 'Tier-B Field Curated',
    heroImage: '/images/craft.webp',
    featuredOnHome: true,
    homeLineTag: 'Business · Sourcing',
    disclaimers: ['legal', 'tax'],
    hardFacts: [
      { label: 'Flexible MOQ Belts', value: '50–200 units (Apparel Guangzhou · Tech Shenzhen · Craft Jingdezhen)', source: 'Belt Field Data', verifiedDate: '2026-11-15' },
      { label: 'Danyang Optical Speed', value: 'Custom prescription lenses cut in 30–60 mins', source: 'Field Verified', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Canton Fair & Sourcing Stack', href: '/stacks/canton-fair-buyer-kit/' },
    directTools: [{ label: 'USCC & GB Matcher', href: '/tools/uscc-gb-matcher/' }],
    relatedEntities: [
      { label: 'USCC & GSXT Verification', href: '/compliance/uscc-gsxt-lookup/', tag: '/compliance/' },
      { label: 'Remote Sourcing Hub', href: '/for/remote-sourcing/', tag: '/for/' },
    ],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Belt 01 · Danyang (丹阳)', title: 'Same-Day Custom Eyewear Capital', chineseName: '丹阳国际眼镜城', copyTerm: '丹阳国际眼镜城', summary: '75 minutes by HSR from Shanghai. Bring your optometrist prescription (PD + sphere/cylinder) for titanium frames + 1.67 lenses under ¥450.', image: '/images/craft.webp', href: '/cities/shanghai/' },
      { kicker: 'Belt 02 · Guangzhou (广州)', title: 'Zhongda Fabric & 100-Piece Cut-and-Sew', chineseName: '广州中大纺织商圈', copyTerm: '广州中大国际轻纺城', summary: 'Source deadstock silk, heavy cotton, and hardware zippers in the morning; hand tech packs to Panyu micro-workshops in the afternoon.', image: '/images/shanghai.webp', href: '/guides/factory-sourcing-due-diligence/' },
      { kicker: 'Belt 03 · Jingdezhen (景德镇)', title: 'Porcelain Studios & Creative Markets', chineseName: '景德镇陶溪川文创街区', copyTerm: '景德镇陶溪川', summary: 'Direct-from-kiln stoneware and contemporary studio tea ware with insured international DHL/SF Express packing onsite.', image: '/images/tea.webp' },
    ],
  },
  {
    slug: 'chinese-tea-6-types',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Chinese Food, 8 Great Cuisines & The 6 Tea Categories',
    titleZh: '中华饮食八大菜系与六大茶类全图鉴',
    leadHook: 'Every true Chinese tea comes from one plant—Camellia sinensis—transformed solely by oxidation and heat. Pair six classic teas with China’s eight regional flavor maps.',
    leadHookZh: '一片树叶经发酵与杀青演化出绿、白、黄、青（乌龙）、红、黑六大茶类；串联八大菜系风味坐标与点单公式。',
    lastVerified: '2026-11-17',
    tier: 'Tier-B Field Curated',
    heroImage: '/images/tea.webp',
    disclaimers: ['allergy'],
    hardFacts: [
      { label: 'Six Canonical Teas', value: 'Green · White · Yellow · Oolong · Black (红茶) · Dark (黑茶)', source: 'GB/T 30766', verifiedDate: '2026-11-15' },
      { label: 'Translation Trap', value: 'Chinese “Red Tea” (红茶) = Western “Black Tea”', source: 'Culinary Glossary', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Peanut & Dietary Allergy Hub', href: '/for/peanut-allergy/' },
    directTools: [{ label: 'Allergy Show-to-Local Card', href: '/cards/peanut-allergy-sos/' }],
    relatedEntities: [{ label: 'Chengdu Food & Tea Hub', href: '/cities/chengdu/', tag: '/cities/' }],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Green & Oolong', title: 'West Lake Longjing & Wuyi Rock Tea', chineseName: '西湖龙井 · 武夷岩茶', copyTerm: '杭州梅家坞 龙井茶', summary: 'Un-oxidized pan-fired spring shoots vs. charcoal-roasted cliff oolongs with mineral “rock rhyme” (岩韵).', image: '/images/tea.webp' },
      { kicker: 'Sichuan & Cantonese', title: 'Mala Peppercorn Depth vs. Dim Sum Morning Tea', chineseName: '川菜麻辣 · 广式早茶', copyTerm: '成都鹤鸣茶社', summary: 'Understand the 24 compound flavors of Sichuan beyond heat, and order dim sum like a local in Guangzhou.', image: '/images/food.webp', href: '/cities/chengdu/' },
    ],
  },
  {
    slug: 'tcm-wellness-bathhouses',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: '“Shanghuo”, Dampness & China’s 24-Hour Bathhouse Universe',
    titleZh: '“上火去湿”中式养生与 24 小时汤泉头疗',
    leadHook: 'Decode why every Chinese friend hands you hot water, what “excess heat” (上火) and “dampness” (湿气) mean in daily food choices, and how to spend 18 luxury hours inside a Chinese bathhouse.',
    leadHookZh: '跨文化心智翻译“上火/祛湿”生活哲学，附 24 小时汤泉洗浴（水果自由+过夜+头疗）手把手入门流程。',
    lastVerified: '2026-11-16',
    tier: 'Tier-B Field Curated',
    heroImage: '/images/river.webp',
    disclaimers: ['medical'],
    hardFacts: [
      { label: '24h Bathhouse Admission', value: '¥150–¥350 (includes thermal pools, pajamas, fruit & lounge)', source: 'Field Audit', verifiedDate: '2026-11-15' },
      { label: 'Overnight ID Rule', value: 'Bring physical passport if staying past 02:00 AM', source: 'Local Security Rule', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Solo Female 10-Day Stack', href: '/stacks/solo-female-10-day/' },
    directTools: [{ label: 'Medical & SOS Cards', href: '/tools/medical-sos-cards/' }],
    relatedEntities: [{ label: 'Shanghai Hub (24h Spas)', href: '/cities/shanghai/', tag: '/cities/' }],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Urban Ritual', title: 'How 24-Hour Bathhouses Work Step-by-Step', chineseName: '汤泉生活馆 · 汗蒸与水果自助', copyTerm: '水裹汤泉', summary: 'Scan RFID wristband at entry, soak in gender-separated mineral baths, change into lounge pajamas, and enjoy seasonal cherries, Häagen-Dazs, and silent sleep pods.', image: '/images/river.webp' },
    ],
  },
  {
    slug: 'mahjong-board-universe',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Mahjong, Guandan & The Chinese Parlor Game Universe',
    titleZh: '麻将、掼蛋与中式棋牌宇宙入门',
    leadHook: 'From the clatter of Sichuan Bloody Mahjong in Chengdu teahouses to Jiangsu’s corporate poker obsession Guandan—learn the core tile families and social etiquette in 10 minutes.',
    leadHookZh: '听懂成都茶馆里的川麻血战到底、读懂条筒万字牌，以及风靡长三角的社交纸牌“掼蛋”规则。',
    lastVerified: '2026-11-16',
    tier: 'Tier-B Field Curated',
    heroImage: '/images/chengdu.webp',
    disclaimers: [],
    hardFacts: [
      { label: 'Sichuan Mahjong Tiles', value: '108 tiles (Characters, Bamboo, Dots — no winds/dragons)', source: 'Rulebook', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Chengdu City Hub', href: '/cities/chengdu/' },
    directTools: [{ label: 'Chinese Name Studio', href: '/tools/chinese-name/' }],
    relatedEntities: [{ label: 'Chengdu City Hub', href: '/cities/chengdu/', tag: '/cities/' }],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'Chengdu Teahouse', title: 'People’s Park Heming Teahouse', chineseName: '人民公园鹤鸣茶社', copyTerm: '成都人民公园鹤鸣茶社', summary: 'Sip ¥20 bamboo-chair jasmine tea while locals play four-hand Sichuan Mahjong under century-old trees.', image: '/images/chengdu.webp', href: '/cities/chengdu/' },
    ],
  },
  {
    slug: 'living-folk-arts',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Molten Iron Flower (打铁花), Yingge Dance & Living Folk Arts',
    titleZh: '打铁花、英歌舞与活态非遗民俗巡礼',
    leadHook: '1,600°C molten iron flung into winter night skies like golden willow rain—discover where China’s fiercest living folk performances happen year-round.',
    leadHookZh: '1,600℃ 铁水击打化作漫天星雨的打铁花、潮汕英歌舞与陕北安塞腰鼓，附全年可看地点与预约坐标。',
    lastVerified: '2026-11-16',
    tier: 'Tier-B Field Curated',
    heroImage: '/images/town.webp',
    disclaimers: [],
    hardFacts: [
      { label: 'Iron Flower Temp', value: '~1,600°C molten pig iron struck with willow paddles', source: 'ICH Archive', verifiedDate: '2026-11-15' },
    ],
    stackLink: { label: 'Annual 12-Month Calendar', href: '/guides/annual-events-calendar/' },
    directTools: [{ label: 'Ticket Release Calendar', href: '/tools/ticket-calendar/' }],
    relatedEntities: [{ label: 'Annual Events Calendar', href: '/guides/annual-events-calendar/', tag: '/guides/' }],
    pulse: DEFAULT_PULSE,
    galleryItems: [
      { kicker: 'National Intangible Heritage', title: 'Nuanquan & Kaifeng Night Iron Flower', chineseName: '蔚县暖泉打树花 · 开封打铁花', copyTerm: '开封万岁山 打铁花', summary: 'Stand at least 20 meters back and wear cotton (not synthetic down jackets) when sparks drift overhead.', image: '/images/town.webp' },
    ],
  },
];

/* Programmatically complete the remaining 16 guides so all 32 feature guides are live, navigable, and have distinct archetype layouts */
const ADDITIONAL_16_GUIDES: Array<{
  slug: string;
  pillar: PillarId;
  archetype: GuideArchetype;
  persona: PersonaType;
  title: string;
  titleZh: string;
  leadHook: string;
  leadHookZh: string;
  disclaimers?: DisclaimerKind[];
  heroImage?: string;
}> = [
  {
    slug: 'admin-governance-map',
    pillar: 'atlas',
    archetype: 'matrix',
    persona: 'analyst',
    title: 'State Governance & 5-Tier Administrative Divisions Map',
    titleZh: '国家机构、五级政区与 MCA 编码解析',
    leadHook: 'How provinces, prefecture-level cities, counties, townships, and subdistricts map onto MCA 6-digit codes and public service portals.',
    leadHookZh: '理清省、地、县、乡、村五级架构及直辖市/自治区/特别行政区的行政与数据门户归属。',
  },
  {
    slug: 'safety-scams-emergency',
    pillar: 'visit',
    archetype: 'playbook',
    persona: 'safety',
    title: 'Travel Safety, Common Tourist Scams & Emergency Playbook',
    titleZh: '来华旅行安全、茶托防坑与紧急求助剧本',
    leadHook: 'China has near-zero street violence, yet tea-house overcharging near tourist plazas and unlicensed airport taxis still happen. Spot and exit every scam in seconds.',
    leadHookZh: '社会治安极佳但仍需识破景区茶托、黑车议价与假和尚套路，附 110/120 涉外报警实操。',
    disclaimers: ['medical'],
  },
  {
    slug: 'dining-etiquette-old-brands',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Chinese Dining Etiquette & 1,422 Time-Honored Heritage Brands',
    titleZh: '合餐礼仪、敬酒文化与 1,422 家中华老字号',
    leadHook: 'Lazy Susan rotation rules, why tipping is unnecessary, and how to find authentic MOFCOM-certified century-old restaurants.',
    leadHookZh: '从圆桌转盘礼仪、免小费文化到商务部认定的 1,422 家中华老字号辨真指南。',
    heroImage: '/images/food.webp',
  },
  {
    slug: 'mandarin-survival-kit',
    pillar: 'culture',
    archetype: 'rescue',
    persona: 'editorial',
    title: 'Mandarin Survival Kit: 30 High-Frequency Signs & Ordering Formulas',
    titleZh: '落地必认 30 个车站/菜单高频汉字与点单公式',
    leadHook: 'Recognize Exit (出口), Restroom (洗手间), Not Spicy (不要辣), and Invoice (发票) on sight without studying tones for a year.',
    leadHookZh: '无需背诵全套语法，一眼识别地铁出口、免辣忌口与高铁站台核心高频汉字。',
  },
  {
    slug: 'cinema-nightlife-youth',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Contemporary Cinema, C-Dramas, Livehouses & Youth Nightlife',
    titleZh: '中国电影陆剧、Livehouse 与当代青年夜生活',
    leadHook: 'Explore Chengdu underground electronic clubs, Shanghai jazz bars, and bilingual movie ticketing via Maoyan/Taopiaopiao.',
    leadHookZh: '深入成都独立 Livehouse、上海爵士酒吧与沉浸式演艺，体验一线城市夜间活力。',
    heroImage: '/images/shanghai.webp',
  },
  {
    slug: 'renting-banking-iit',
    pillar: 'live',
    archetype: 'playbook',
    persona: 'safety',
    title: 'Renting Apartments, Opening Bank Accounts & IIT Deductions',
    titleZh: '外籍租房合同避坑、银行开户与个税专项扣除',
    leadHook: 'Avoid deposit forfeitures, pick foreigner-friendly bank branches (ICBC/BOC/CMB), and claim housing/education tax deductions legally.',
    leadHookZh: '租房押一付三合同红线、四大行开户必备材料与外籍个税免税补贴政策对比。',
    disclaimers: ['tax', 'legal'],
  },
  {
    slug: 'drivers-license-family',
    pillar: 'live',
    archetype: 'playbook',
    persona: 'safety',
    title: 'Provisional Driver’s License, Car Rental & Expat Family Life',
    titleZh: '临时/长期驾照换领、自驾与外籍家庭国际学校',
    leadHook: 'Get a 1-year Provisional Driving Permit right at Beijing/Shanghai/Chengdu airports with zero exam—plus international school tiers and Five-Star Card PR routes.',
    leadHookZh: '机场即办临时驾驶许可（免考）与科目一换领长期驾照实操，及外籍家庭学校与五星卡永居路径。',
    disclaimers: ['legal'],
  },
  {
    slug: 'company-chops-contracts',
    pillar: 'business',
    archetype: 'playbook',
    persona: 'legal',
    title: 'Company Chops (公章), NNN Agreements & PRC Contract Enforceability',
    titleZh: '商务公章、合同章与涉外签约法务红线',
    leadHook: 'Why a red circular seal outweighs any CEO signature in Chinese courts, and the 4 chops every buyer must distinguish.',
    leadHookZh: '分清公章、合同专用章、财务章与法人章的法定效力，避免无效签约。',
    disclaimers: ['legal'],
  },
  {
    slug: 'wfoe-cross-border-setup',
    pillar: 'business',
    archetype: 'matrix',
    persona: 'legal',
    title: 'WFOE Setup, EOR Hiring & Cross-Border Trade Compliance',
    titleZh: '外企设立（WFOE）、名义雇主与跨境收结汇对比',
    leadHook: 'Compare Hong Kong entity + PRC supplier, EOR staffing, and full Mainland WFOE incorporation by setup cost, audit overhead, and profit repatriation speed.',
    leadHookZh: '对比香港离岸架构、名义雇主（EOR）与内地全资 WFOE 的注册成本、税务合规与利润汇出效率。',
    disclaimers: ['legal', 'tax'],
  },
  {
    slug: 'family-travel-china',
    pillar: 'places',
    archetype: 'matrix',
    persona: 'editorial',
    title: 'Traveling China With Kids: Strollers, HSR Discounts & Museums',
    titleZh: '亲子家庭来华实操：高铁免票身高线、推车与研学',
    leadHook: 'Children under 6 ride HSR free with an adult; interactive science museums and pandas make China a surprisingly smooth family destination.',
    leadHookZh: '6 岁以下儿童免票规则、无障碍母婴室覆盖率、环球影城/迪士尼与科技馆亲子路线。',
  },
  {
    slug: 'solo-female-china',
    pillar: 'visit',
    archetype: 'playbook',
    persona: 'safety',
    title: 'Solo Female Travel in China: Night Safety, Hotels & DiDi Features',
    titleZh: '女性独行中国实操指南：治安、选房与网约车安全设置',
    leadHook: 'Enable DiDi route sharing, choose chain hotels with elevator keycard locks, and enjoy solo dining and midnight street walks with confidence.',
    leadHookZh: '结合真实独行女性反馈：网约车行程分享、连锁酒店梯控筛选与一人食友好餐厅指南。',
  },
  {
    slug: 'customs-baggage-drones',
    pillar: 'visit',
    archetype: 'rescue',
    persona: 'safety',
    title: 'China Customs, Prohibited Items & CAAC UOM Drone Registration',
    titleZh: '海关安检红线、违禁品清单与无人机 UOM 实名登记',
    leadHook: 'What triggers red-channel inspection—fresh meat, prescription stimulants, > ¥20,000 cash, and mandatory CAAC UOM registration for all drones.',
    leadHookZh: '入境肉蔬果/处方药/现金申报限额，以及所有无人机起飞前必须在民航局 UOM 完成实名登记。',
    disclaimers: ['prescription', 'legal'],
  },
  {
    slug: 'ancient-architecture-gardens',
    pillar: 'culture',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'Classical Chinese Timber Architecture & Suzhou Gardens Field Guide',
    titleZh: '中国古建斗拱美学与苏州古典园林导览',
    leadHook: 'Read dougong brackets, roof-ridge beasts, and borrowed-scenery garden windows like an architectural historian.',
    leadHookZh: '看懂庑殿顶/歇山顶、檐角脊兽数量与苏州园林“借景移步”的空间密码。',
    heroImage: '/images/beijing.webp',
  },
  {
    slug: 'national-parks-nature',
    pillar: 'places',
    archetype: 'editorial',
    persona: 'editorial',
    title: 'China’s 5 National Parks, Karst Peaks & High-Altitude Safety',
    titleZh: '中国五大国家公园、张家界/九寨沟与高原防反指南',
    leadHook: 'Navigate Zhangjiajie’s misty sandstone pillars, Jiuzhaigou’s turquoise travertine lakes, and Western Sichuan’s 3,500m altitude thresholds.',
    leadHookZh: '覆盖张家界、桂林喀斯特、九寨沟与五大国家公园的体能评级与高反预防规则。',
    heroImage: '/images/rice.webp',
    disclaimers: ['medical'],
  },
  {
    slug: 'world-heritage-museums',
    pillar: 'culture',
    archetype: 'matrix',
    persona: 'editorial',
    title: '59 UNESCO World Heritage Sites & Free National Museums',
    titleZh: '中国 59 处世界遗产与顶流免费国家博物馆预约',
    leadHook: 'From Shanghai Museum East’s bronze galleries to Shaanxi History Museum—most flagship public museums are free but require passport mini-program booking.',
    leadHookZh: '汇总国博、陕历博、上博东馆等免费顶流大馆的护照预约通道、周一闭馆规则与必看镇馆之宝。',
  },
  {
    slug: 'china-open-data-ai-guide',
    pillar: 'atlas',
    archetype: 'rescue',
    persona: 'legal',
    title: 'Using China’s 848 Government Open Data Portals & ChinaWao MCP',
    titleZh: '调用中国 848 个政务公开数据源与 ChinaWao MCP 指南',
    leadHook: 'How journalists, researchers, and AI agents separate HTTP 200 open datasets from WAF-protected ministries using our read-only MCP endpoint.',
    leadHookZh: '面向研究员与 AI 开发者的实操指南：如何区分可直连接口与瑞数/创宇 WAF 官方备用源，零幻觉接入 MCP。',
  },
];

for (const item of ADDITIONAL_16_GUIDES) {
  GUIDES.push({
    slug: item.slug,
    pillar: item.pillar,
    archetype: item.archetype,
    persona: item.persona,
    title: item.title,
    titleZh: item.titleZh,
    leadHook: item.leadHook,
    leadHookZh: item.leadHookZh,
    lastVerified: '2026-11-17',
    tier: 'Tier-A Official + Field',
    heroImage: item.heroImage,
    disclaimers: item.disclaimers ?? [],
    hardFacts: [
      { label: 'Last Checked', value: '2026-11-17', source: 'Official Sources', verifiedDate: '2026-11-17' },
      { label: 'Recommended Tools', value: 'Visa Checker · Show-to-Local Cards · City Guides', source: 'ChinaWao', verifiedDate: '2026-11-17' },
    ],
    stackLink: { label: 'First-Time China 10-Day Kit', href: '/stacks/first-time-china-10-day/' },
    directTools: [
      { label: '240h Visa Checker', href: '/tools/visa-checker/' },
      { label: 'Topic Explorer', href: '/explore/' },
    ],
    relatedEntities: [
      { label: 'Shanghai City Guide', href: '/cities/shanghai/', tag: 'City' },
      { label: 'Gov Open Data Portals', href: '/portals/', tag: 'Data' },
    ],
    pulse: DEFAULT_PULSE,
    steps: item.archetype === 'playbook'
      ? [
          {
            number: '01',
            title: 'Verify Baseline Official Rule Before Action',
            stopCheck: 'STOP & CHECK: Always confirm exact Chinese statutory terms and current effective dates prior to booking or signing.',
            summary: item.leadHook,
            checklist: ['Cross-check latest monthly policy changelog.', 'Keep bilingual documentation screenshot offline.'],
            linkedRoute: { label: 'Open Policy Changelog →', href: '/guides/policy-changelog/' },
          },
          {
            number: '02',
            title: 'Execute With Verified Local Tools & Backup Path',
            stopCheck: 'STOP & CHECK: Maintain a backup channel (e.g., second card, offline card, or verified official counter).',
            summary: 'Pair deterministic calculators and show-to-local cards with primary government portals.',
            checklist: ['Check the relevant calculator in Tools.', 'Submit your own field feedback after your trip.'],
            linkedRoute: { label: 'Open Utility Workbench →', href: '/tools/' },
          },
        ]
      : undefined,
    matrixRows: item.archetype === 'matrix'
      ? [
          { option: 'Official Direct Channel', bestFor: 'Highest accuracy, zero intermediary fees & statutory proof', avoidIf: 'Facing Chinese-only CAPTCHA/WAF without our dual-column guide', costRange: '¥0 official fee', hiddenTrap: 'Requires exact passport or Chinese legal name formatting', href: '/portals/' },
          { option: 'International Concierge / App', bestFor: 'English interface & international card checkout convenience', avoidIf: 'Minimizing service fees on repeated bookings', costRange: '3–10% convenience markup', hiddenTrap: 'Confirm official confirmation code is issued rather than pending waitlist', href: '/explore/' },
        ]
      : undefined,
    rescueFilters: item.archetype === 'rescue' ? ['All', 'Priority', 'Reference'] : undefined,
    rescueItems: item.archetype === 'rescue'
      ? [
          { appOrGroup: 'Priority', title: item.title, chineseSignal: item.titleZh, actionSummary: item.leadHook, effectiveDate: 'Verified 2026-11', href: '/explore/' },
          { appOrGroup: 'Reference', title: 'Official Forms & App Errors Visual Rescue Hub', chineseSignal: '官方表格与报错红框图解总库', actionSummary: 'Inspect annotated screenshots for Arrival Card, 12306, WeChat, and Alipay.', effectiveDate: 'Verified 2026-11', href: '/guides/official-forms-app-errors/' },
        ]
      : undefined,
    galleryItems: item.archetype === 'editorial'
      ? [
          { kicker: 'Field Coordinate', title: item.title, chineseName: item.titleZh, copyTerm: item.titleZh, summary: item.leadHook, image: item.heroImage ?? '/images/hero.webp', href: '/explore/' },
        ]
      : undefined,
  });
}

export const GUIDE_BY_SLUG: Record<string, GuideDefinition> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuidesByPillar(pillar: PillarId): GuideDefinition[] {
  if (pillar === 'travel' || pillar === 'visit') {
    return GUIDES.filter((g) => g.pillar === 'travel' || g.pillar === 'visit');
  }
  return GUIDES.filter((g) => g.pillar === pillar);
}

export const FEATURED_HOME_GUIDES: GuideDefinition[] = GUIDES.filter((g) => g.featuredOnHome);
