/**
 * ChinaWao 导航与信息架构规格书 v3.2（6×59-v3.2）唯一前端数据底座
 * Auto-synced from F:/cnwao/taxonomy/chinawao-taxonomy.json (version 6x59-v3.2, updated 2026-11-23)
 */
import type { PersonaType } from './paradigm-e/pillars';

export type V32PillarId = 'travel' | 'live' | 'business' | 'places' | 'culture' | 'atlas';

export interface V32Section {
  code: string;
  pillarId: V32PillarId;
  slug: string;
  hubPath: string;
  navZh: string;
  navEn: string;
  inDropdown: boolean;
  priority: 'P0' | 'P1' | 'P2';
  phase: string;
  isFirewall: boolean;
  ssotRoutesDisplay: string;
  ssotRoutes: string[];
  scopeZh: string;
}

export interface V32Pillar {
  idx: string;
  id: V32PillarId;
  navZh: string;
  navEn: string;
  path: string;
  intentZh: string;
  persona: PersonaType;
  personaEn: string;
  personaZh: string;
  children: V32Section[];
}

export interface V32UtilityDockItem {
  code: string;
  slug: string;
  nameZh: string;
  nameEn: string;
  href: string;
  routes: string;
  embedTargets: string;
}

export const TAXONOMY_V32_META = {
  "version": "6x59-v3.2",
  "updated": "2026-11-23",
  "summary": {
    "pillars": 6,
    "second_level_total": 59,
    "dropdown_items": 54,
    "hub_only_items": 5,
    "max_dropdown_per_pillar": 9,
    "utility_dock_items": 4,
    "ssot_flat_routes": 66
  },
  "visibilityRules": {
    "second_level_min_published_pages": 5,
    "pillar_min_lit_children": 3,
    "single_pillar_flat_fallback_threshold": 3
  }
} as const;

export const V32_PILLARS: V32Pillar[] = [
  {
    "idx": "01",
    "id": "travel",
    "navZh": "旅行",
    "navEn": "Travel",
    "path": "/travel/",
    "intentZh": "怎么来与怎么玩",
    "persona": "safety",
    "personaEn": "Flight Safety Card",
    "personaZh": "航空安全卡",
    "children": [
      {
        "code": "T1",
        "pillarId": "travel",
        "slug": "visas-entry",
        "hubPath": "/travel/visas-entry/",
        "navZh": "签证与入境",
        "navEn": "Visas & Entry",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 1",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/visas/` `/visa-centers/` `/borders/` `/can-i-bring/` `/meds/`",
        "ssotRoutes": [
          "/visas/",
          "/visa-centers/",
          "/borders/",
          "/can-i-bring/",
          "/meds/"
        ],
        "scopeZh": "单方面免签、240h 过境免签及适用口岸、2027 延期追踪页、免费数字入境卡 CDAC、海关违禁品与充电宝 3C、常用西药、港澳台与陆路口岸通关规则。"
      },
      {
        "code": "T2",
        "pillarId": "travel",
        "slug": "payments-money",
        "hubPath": "/travel/payments-money/",
        "navZh": "支付与货币",
        "navEn": "Payments & Money",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 1",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/pay-with/` `/compare/`(支付)",
        "ssotRoutes": [
          "/pay-with/",
          "/compare/"
        ],
        "scopeZh": "支付宝/微信外卡实测限额、TenPayGo 与 Nihao China、Wise 跨境卡、现金与 ATM、扫码三态图解。"
      },
      {
        "code": "T3",
        "pillarId": "travel",
        "slug": "esim-apps-fixes",
        "hubPath": "/travel/esim-apps-fixes/",
        "navZh": "联网、App 与报错",
        "navEn": "eSIM, Apps & Fixes",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 1–2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/tech-check/` `/in-china/` `/apps/` `/errors/`",
        "ssotRoutes": [
          "/tech-check/",
          "/in-china/",
          "/apps/",
          "/errors/"
        ],
        "scopeZh": "eSIM 与无卡槽机型、西方工具映射（Google Maps/WhatsApp 能否用）、中国必备 App、App 报错弹窗与封号解封救火。"
      },
      {
        "code": "T4",
        "pillarId": "travel",
        "slug": "getting-around",
        "hubPath": "/travel/getting-around/",
        "navZh": "交通出行",
        "navEn": "Getting Around",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/routes/` `/airports/` `/airlines/`",
        "ssotRoutes": [
          "/routes/",
          "/airports/",
          "/airlines/"
        ],
        "scopeZh": "高铁与 12306、双城门到门比价、5 城地铁外卡直刷、机场过夜转机、中国及涉华航司实测、打车与共享单车。"
      },
      {
        "code": "T5",
        "pillarId": "travel",
        "slug": "hotels-stays",
        "hubPath": "/travel/hotels-stays/",
        "navZh": "酒店与住宿",
        "navEn": "Hotels & Stays",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/hotel-chains/`",
        "ssotRoutes": [
          "/hotel-chains/"
        ],
        "scopeZh": "本土外宾友好连锁酒店（亚朵/全季等）、境外人员 24h 住宿登记、Trip.com 预订避坑、民宿。"
      },
      {
        "code": "T6",
        "pillarId": "travel",
        "slug": "tickets-bookings",
        "hubPath": "/travel/tickets-bookings/",
        "navZh": "门票与预约",
        "navEn": "Tickets & Bookings",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/attractions/`(预约维) `/shows/`",
        "ssotRoutes": [
          "/attractions/",
          "/shows/"
        ],
        "scopeZh": "实名抢票与放票时间、博物馆与场馆预约动态（如上博东馆）、实景演出与乐园、节假日限流。"
      },
      {
        "code": "T7",
        "pillarId": "travel",
        "slug": "eating-out-dietary",
        "hubPath": "/travel/eating-out-dietary/",
        "navZh": "外出就餐与忌口",
        "navEn": "Eating Out & Dietary",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 1–2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cards/`(过敏卡) `/chains/`(点单)",
        "ssotRoutes": [
          "/cards/",
          "/chains/"
        ],
        "scopeZh": "过敏与忌口、扫码点餐、清真与素食、合餐礼仪、国民连锁点单暗号。"
      },
      {
        "code": "T8",
        "pillarId": "travel",
        "slug": "safety-forms-how-to",
        "hubPath": "/travel/safety-forms-how-to/",
        "navZh": "安全、单据与设备图解",
        "navEn": "Safety, Forms & How-To",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 1–2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/scams/` `/documents/` `/how-to-use/` `/cards/`(急救)",
        "ssotRoutes": [
          "/scams/",
          "/documents/",
          "/how-to-use/",
          "/cards/"
        ],
        "scopeZh": "紧急电话、常见骗局、官方表格红框标注、全中文设备按钮图解（洗衣机/快递柜/遥控器）、急诊速查与旅行保险。"
      },
      {
        "code": "T9",
        "pillarId": "travel",
        "slug": "trip-plans-stacks",
        "hubPath": "/travel/trip-plans-stacks/",
        "navZh": "行程、清单与横评",
        "navEn": "Trip Plans, Stacks & Comparisons",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 1–2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/stacks/` `/for/` `/compare/` `/guides/`",
        "ssotRoutes": [
          "/stacks/",
          "/for/",
          "/compare/",
          "/guides/"
        ],
        "scopeZh": "抄作业清单包（Stacks）、8 类特殊人群定制（女性独行/银发/无障碍等）、高意图横评、经典路线、最佳季节与法定调休。"
      },
      {
        "code": "T10",
        "pillarId": "travel",
        "slug": "shopping-tax-refund",
        "hubPath": "/travel/shopping-tax-refund/",
        "navZh": "购物、数码与退税",
        "navEn": "Shopping & Tax Refund",
        "inDropdown": false,
        "priority": "P1",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/buy-in-china/`",
        "ssotRoutes": [
          "/buy-in-china/"
        ],
        "scopeZh": "中国买数码/特产差价与红线（国行 iPhone/大疆）、离境即买即退、免税店、市场议价与邮寄。"
      },
      {
        "code": "T11",
        "pillarId": "travel",
        "slug": "medical-dental-trips",
        "hubPath": "/travel/medical-dental-trips/",
        "navZh": "入境医疗与体检旅游",
        "navEn": "Medical & Dental Trips",
        "inDropdown": false,
        "priority": "P2",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/institutions/`(医疗旅游维)",
        "ssotRoutes": [
          "/institutions/"
        ],
        "scopeZh": "博鳌乐城、跨境体检/牙科/眼科医疗旅游实战指南。"
      }
    ]
  },
  {
    "idx": "02",
    "id": "live",
    "navZh": "长居与工作",
    "navEn": "Live & Work",
    "path": "/live/",
    "intentZh": "怎么住下来",
    "persona": "legal",
    "personaEn": "Due Diligence & Safety Card",
    "personaZh": "律所尽调 × 安全卡",
    "children": [
      {
        "code": "L1",
        "pillarId": "live",
        "slug": "work-permits-visas",
        "hubPath": "/live/work-permits-visas/",
        "navZh": "工作许可与签证",
        "navEn": "Work Permits & Visas",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(工签)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "许可分类（A/B/C）、积分制、Z 签证、K 字青年科技签证、换雇主流程。"
      },
      {
        "code": "L2",
        "pillarId": "live",
        "slug": "residence-pr-nomads",
        "hubPath": "/live/residence-pr-nomads/",
        "navZh": "居留、永居与旅居",
        "navEn": "Residence, PR & Nomads",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(旅居)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "工作/学习/团聚居留续签、五星卡永居、数字游民与低成本旅居指南。"
      },
      {
        "code": "L3",
        "pillarId": "live",
        "slug": "study-in-china",
        "hubPath": "/live/study-in-china/",
        "navZh": "来华留学",
        "navEn": "Study in China",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/universities/` `/degrees/`",
        "ssotRoutes": [
          "/universities/",
          "/degrees/"
        ],
        "scopeZh": "150 所英文授课名校与高校名录、MBBS/MBA/CS 热门专业、CSC 奖学金、X 签、语言学校。"
      },
      {
        "code": "L4",
        "pillarId": "live",
        "slug": "banking-personal-tax",
        "hubPath": "/live/banking-personal-tax/",
        "navZh": "银行与个税",
        "navEn": "Banking & Personal Tax",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/banks/`",
        "ssotRoutes": [
          "/banks/"
        ],
        "scopeZh": "主流银行外籍开户评测、跨境汇款（≥¥5,000 核实新规）、183 天税务居民、八项津补贴与 2026.9 股息 20% 个税。"
      },
      {
        "code": "L5",
        "pillarId": "live",
        "slug": "healthcare",
        "hubPath": "/live/healthcare/",
        "navZh": "就医与医保",
        "navEn": "Healthcare",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/institutions/`(国际门诊)",
        "ssotRoutes": [
          "/institutions/"
        ],
        "scopeZh": "涉外医院与三甲国际部选择及挂号流程、商业医保、药店购药、常规体检。"
      },
      {
        "code": "L6",
        "pillarId": "live",
        "slug": "driving",
        "hubPath": "/live/driving/",
        "navZh": "驾照与用车",
        "navEn": "Driving",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(驾照)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "临时驾照与永久换证、科目一机考、交通规则、租车、买电车与充电。"
      },
      {
        "code": "L7",
        "pillarId": "live",
        "slug": "jobs-social-insurance",
        "hubPath": "/live/jobs-social-insurance/",
        "navZh": "就业与社保",
        "navEn": "Jobs & Social Insurance",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/jobs/`",
        "ssotRoutes": [
          "/jobs/"
        ],
        "scopeZh": "外籍典型职业薪资门槛、劳动合同、工时休假、五险一金与公积金、劳动争议。"
      },
      {
        "code": "L8",
        "pillarId": "live",
        "slug": "housing-cost-of-living",
        "hubPath": "/live/housing-cost-of-living/",
        "navZh": "租房、买房与生活成本",
        "navEn": "Housing & Cost of Living",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/prices/`",
        "ssotRoutes": [
          "/prices/"
        ],
        "scopeZh": "租房合同与中介避坑、水电网开通、70 年产权购房限制、50+ 城生活物价锚点。"
      },
      {
        "code": "L9",
        "pillarId": "live",
        "slug": "family-marriage-pets",
        "hubPath": "/live/family-marriage-pets/",
        "navZh": "家庭、婚恋与携宠",
        "navEn": "Family, Marriage & Pets",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/for/`(家庭/携宠)",
        "ssotRoutes": [
          "/for/"
        ],
        "scopeZh": "国际学校与公立入学、跨国婚恋登记与 Q1/Q2 探亲、带外籍伴侣回乡、宠物入境检疫。"
      },
      {
        "code": "L10",
        "pillarId": "live",
        "slug": "leaving-china",
        "hubPath": "/live/leaving-china/",
        "navZh": "离境收尾清单",
        "navEn": "Leaving China",
        "inDropdown": false,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(离境收尾)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "养老保险个人账户退保、税务清算、海牙认证无犯罪记录证明、注销居留/银行/手机号、宠物出境。"
      }
    ]
  },
  {
    "idx": "03",
    "id": "business",
    "navZh": "商务",
    "navEn": "Business",
    "path": "/business/",
    "intentZh": "怎么做生意",
    "persona": "legal",
    "personaEn": "Law Firm Due Diligence",
    "personaZh": "律所尽调",
    "children": [
      {
        "code": "B1",
        "pillarId": "business",
        "slug": "market-entry",
        "hubPath": "/business/market-entry/",
        "navZh": "外资准入与设立",
        "navEn": "Market Entry",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(设企)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "外资负面清单、鼓励目录、WFOE/代表处/合资、公司注册与企业开户。"
      },
      {
        "code": "B2",
        "pillarId": "business",
        "slug": "standards-compliance",
        "hubPath": "/business/standards-compliance/",
        "navZh": "标准、认证与出口管制",
        "navEn": "Standards & Compliance",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/compliance/` `/certifications/`",
        "ssotRoutes": [
          "/compliance/",
          "/certifications/"
        ],
        "scopeZh": "2,913 项外文 GB 国标、电池 3C 新标（GB 47372-2026）、海关 280 号令食品标准、NMPA、SRRC 12 位码、两用物项出口管制。"
      },
      {
        "code": "B3",
        "pillarId": "business",
        "slug": "sourcing-hubs-audits",
        "hubPath": "/business/sourcing-hubs-audits/",
        "navZh": "采购、产业带与验厂",
        "navEn": "Sourcing, Hubs & Audits",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/hubs/`(产业带)",
        "ssotRoutes": [
          "/hubs/"
        ],
        "scopeZh": "百大源头产业带地图、1688/B2B 平台、百件极小批量柔性打样、18 位 USCC 尽调、QIMA/V-Trust 验厂。"
      },
      {
        "code": "B4",
        "pillarId": "business",
        "slug": "trade-fairs",
        "hubPath": "/business/trade-fairs/",
        "navZh": "展会",
        "navEn": "Trade Fairs",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/hubs/`(展会)",
        "ssotRoutes": [
          "/hubs/"
        ],
        "scopeZh": "广交会、进博会、华交会、义博会、行业展日历与参展实操。"
      },
      {
        "code": "B5",
        "pillarId": "business",
        "slug": "trade-logistics-forwarding",
        "hubPath": "/business/trade-logistics-forwarding/",
        "navZh": "进出口、物流与集运",
        "navEn": "Trade, Logistics & Forwarding",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/couriers/`",
        "ssotRoutes": [
          "/couriers/"
        ],
        "scopeZh": "报关单证、原产地证、中欧班列、海运空运与海外仓、淘宝/1688/闲鱼个人反向海淘与集运商评测。"
      },
      {
        "code": "B6",
        "pillarId": "business",
        "slug": "tax-invoicing-fx",
        "hubPath": "/business/tax-invoicing-fx/",
        "navZh": "税务、发票与外汇",
        "navEn": "Tax, Invoicing & FX",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(财税)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "增值税、发票 Fapiao、企业所得税、跨境收付（含 Wise 企业账户）与结汇。"
      },
      {
        "code": "B7",
        "pillarId": "business",
        "slug": "cross-border-ecommerce",
        "hubPath": "/business/cross-border-ecommerce/",
        "navZh": "跨境电商",
        "navEn": "Cross-Border E-Commerce",
        "inDropdown": true,
        "priority": "P2",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(电商)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "平台入驻、保税进口、直邮模式、直播电商与平台合规。"
      },
      {
        "code": "B8",
        "pillarId": "business",
        "slug": "ip-dispute-resolution",
        "hubPath": "/business/ip-dispute-resolution/",
        "navZh": "知识产权与争议解决",
        "navEn": "IP & Dispute Resolution",
        "inDropdown": true,
        "priority": "P2",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(知产与争议)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "商标注册、专利、版权、海关备案、知产法院维权、合同纠纷与在线诉讼、CIETAC 国际商事仲裁。"
      },
      {
        "code": "B9",
        "pillarId": "business",
        "slug": "business-culture-travel",
        "hubPath": "/business/business-culture-travel/",
        "navZh": "商务礼仪与差旅",
        "navEn": "Business Culture & Travel",
        "inDropdown": true,
        "priority": "P2",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(商旅)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "商务礼仪、公章法律效力、合同签署、宴请规则、商务差旅与报销发票。"
      },
      {
        "code": "B10",
        "pillarId": "business",
        "slug": "data-cyber-compliance",
        "hubPath": "/business/data-cyber-compliance/",
        "navZh": "数据与网络合规",
        "navEn": "Data & Cyber Compliance",
        "inDropdown": false,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(数据合规)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "个人信息保护法（PIPL）、数据出境安全评估、网络安全法。"
      },
      {
        "code": "B11",
        "pillarId": "business",
        "slug": "zones-industrial-parks",
        "hubPath": "/business/zones-industrial-parks/",
        "navZh": "园区与自贸区",
        "navEn": "Zones & Industrial Parks",
        "inDropdown": false,
        "priority": "P2",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/hubs/`(园区)",
        "ssotRoutes": [
          "/hubs/"
        ],
        "scopeZh": "自贸试验区、海南自贸港、综保区、经开区、创业孵化器。"
      }
    ]
  },
  {
    "idx": "04",
    "id": "places",
    "navZh": "地点",
    "navEn": "Places",
    "path": "/places/",
    "intentZh": "去哪里",
    "persona": "editorial",
    "personaEn": "Field Facts × Editorial",
    "personaZh": "安全卡 × 舌尖语域",
    "children": [
      {
        "code": "G1",
        "pillarId": "places",
        "slug": "top-cities",
        "hubPath": "/places/top-cities/",
        "navZh": "热门城市",
        "navEn": "Top Cities",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/` `/cities/[city]/in-[month]/`",
        "ssotRoutes": [
          "/cities/",
          "/cities/[city]/in-[month]/"
        ],
        "scopeZh": "首访核心城市指南（北上广深成渝杭西等），涵盖口岸交通、街区漫步、四季气候与避峰出行建议。"
      },
      {
        "code": "G2",
        "pillarId": "places",
        "slug": "sights-unesco-museums",
        "hubPath": "/places/sights-unesco-museums/",
        "navZh": "景点、世遗与博物馆",
        "navEn": "Sights, UNESCO & Museums",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/attractions/`",
        "ssotRoutes": [
          "/attractions/"
        ],
        "scopeZh": "中国代表性热门景点、世界文化遗产名录、国家一级博物馆与历史古镇精选指南。"
      },
      {
        "code": "G3",
        "pillarId": "places",
        "slug": "trails-scenic-routes",
        "hubPath": "/places/trails-scenic-routes/",
        "navZh": "徒步、骑行与自驾路线",
        "navEn": "Trails & Scenic Routes",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/trails/`",
        "ssotRoutes": [
          "/trails/"
        ],
        "scopeZh": "虎跳峡、雨崩、长城徒步、千岛湖骑行、G318 公路自驾、露营地等实操路线。"
      },
      {
        "code": "G4",
        "pillarId": "places",
        "slug": "night-markets-events",
        "hubPath": "/places/night-markets-events/",
        "navZh": "夜市、街区与年度盛事",
        "navEn": "Night Markets & Events",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/night-markets/` `/events/`",
        "ssotRoutes": [
          "/night-markets/",
          "/events/"
        ],
        "scopeZh": "城市夜市美食街、City Walks 街区模块、年度 12 个月大型盛事（冰雪大世界/泼水节/F1 等）。"
      },
      {
        "code": "G5",
        "pillarId": "places",
        "slug": "east-south-china",
        "hubPath": "/places/east-south-china/",
        "navZh": "华东与华南",
        "navEn": "East & South China",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/`(区域聚合)",
        "ssotRoutes": [
          "/cities/"
        ],
        "scopeZh": "沪苏浙皖闽赣鲁 + 粤桂琼 10 省市，含江南/岭南地域文化导语。"
      },
      {
        "code": "G6",
        "pillarId": "places",
        "slug": "north-northeast-china",
        "hubPath": "/places/north-northeast-china/",
        "navZh": "华北与东北",
        "navEn": "North & Northeast China",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/`(区域聚合)",
        "ssotRoutes": [
          "/cities/"
        ],
        "scopeZh": "京津冀晋蒙 + 辽吉黑 8 省市区，含京津冀与东北冰雪地理导语。"
      },
      {
        "code": "G7",
        "pillarId": "places",
        "slug": "central-southwest-china",
        "hubPath": "/places/central-southwest-china/",
        "navZh": "华中与西南",
        "navEn": "Central & Southwest China",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/`(区域聚合)",
        "ssotRoutes": [
          "/cities/"
        ],
        "scopeZh": "豫鄂湘 + 渝川贵云藏 8 省市区，含巴蜀/中原/高原地理导语。"
      },
      {
        "code": "G8",
        "pillarId": "places",
        "slug": "northwest-silk-road",
        "hubPath": "/places/northwest-silk-road/",
        "navZh": "西北与丝路",
        "navEn": "Northwest & Silk Road",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/`(区域聚合)",
        "ssotRoutes": [
          "/cities/"
        ],
        "scopeZh": "陕甘青宁新 5 省区，含河西走廊与丝绸之路地理联动。"
      },
      {
        "code": "G9",
        "pillarId": "places",
        "slug": "hk-macao-taiwan",
        "hubPath": "/places/hk-macao-taiwan/",
        "navZh": "港澳台与跨境",
        "navEn": "HK, Macao & Taiwan",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/cities/` `/borders/`",
        "ssotRoutes": [
          "/cities/",
          "/borders/"
        ],
        "scopeZh": "香港、澳门、台湾目的地及内地联动跨境线路。"
      }
    ]
  },
  {
    "idx": "05",
    "id": "culture",
    "navZh": "文化与生活",
    "navEn": "Culture & Life",
    "path": "/culture/",
    "intentZh": "吃什么、玩什么、怎么懂文化",
    "persona": "editorial",
    "personaEn": "Sensory Editorial",
    "personaZh": "舌尖感官导读",
    "children": [
      {
        "code": "C1",
        "pillarId": "culture",
        "slug": "food-snacks-drinks",
        "hubPath": "/culture/food-snacks-drinks/",
        "navZh": "饮食、零食与茶酒",
        "navEn": "Food, Snacks & Drinks",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/dishes/` `/snacks/`",
        "ssotRoutes": [
          "/dishes/",
          "/snacks/"
        ],
        "scopeZh": "八大菜系与地方风味、火锅粉面、早茶点心、六大茶类、白酒与新茶饮、超市便利店国民零食。"
      },
      {
        "code": "C2",
        "pillarId": "culture",
        "slug": "language-pronunciation-slang",
        "hubPath": "/culture/language-pronunciation-slang/",
        "navZh": "语言、发音与热词",
        "navEn": "Language, Pronunciation & Slang",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 4*",
        "isFirewall": true,
        "ssotRoutesDisplay": "`/pronounce/` `/decode/` `/chengyu/`",
        "ssotRoutes": [
          "/pronounce/",
          "/decode/",
          "/chengyu/"
        ],
        "scopeZh": "汉字与拼音、学中文与 HSK、方言；难读地名/品牌真人发音、社会热词解码、成语故事卡。"
      },
      {
        "code": "C3",
        "pillarId": "culture",
        "slug": "festivals-seasons-beliefs",
        "hubPath": "/culture/festivals-seasons-beliefs/",
        "navZh": "节庆、节气与民间信仰",
        "navEn": "Festivals, Seasons & Beliefs",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 4*",
        "isFirewall": true,
        "ssotRoutesDisplay": "`/calendar/` `/solar-terms/` `/zodiac/` `/deities-myths/` `/symbols-omens/`",
        "ssotRoutes": [
          "/calendar/",
          "/solar-terms/",
          "/zodiac/",
          "/deities-myths/",
          "/symbols-omens/"
        ],
        "scopeZh": "传统节日习俗、24 节气、12 生肖、宗教寺观、民间神祇/《山海经》、数字与吉祥禁忌。"
      },
      {
        "code": "C4",
        "pillarId": "culture",
        "slug": "chains-retail-culture",
        "hubPath": "/culture/chains-retail-culture/",
        "navZh": "国民连锁与新消费",
        "navEn": "Chains & Retail Culture",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/chains/`",
        "ssotRoutes": [
          "/chains/"
        ],
        "scopeZh": "瑞幸、蜜雪冰城、霸王茶姬、海底捞、胖东来、盒马等本土连锁品牌档案与新零售文化。"
      },
      {
        "code": "C5",
        "pillarId": "culture",
        "slug": "games-martial-arts-folk",
        "hubPath": "/culture/games-martial-arts-folk/",
        "navZh": "棋牌、武术与硬核民俗",
        "navEn": "Games, Martial Arts & Folk",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 4*",
        "isFirewall": true,
        "ssotRoutesDisplay": "`/games/` `/martial-arts/` `/folk-spectacles/`",
        "ssotRoutes": [
          "/games/",
          "/martial-arts/",
          "/folk-spectacles/"
        ],
        "scopeZh": "麻将/掼蛋/象棋、功夫太极八段锦、打铁花/潮汕英歌舞/福建游神等活态民俗大秀。"
      },
      {
        "code": "C6",
        "pillarId": "culture",
        "slug": "arts-literature-crafts",
        "hubPath": "/culture/arts-literature-crafts/",
        "navZh": "文学、艺术与非遗",
        "navEn": "Arts, Literature & Crafts",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 4*",
        "isFirewall": true,
        "ssotRoutesDisplay": "`/hanfu-attire/` `/arch-elements/` `/instruments/` `/xianxia-wuxia/`",
        "ssotRoutes": [
          "/hanfu-attire/",
          "/arch-elements/",
          "/instruments/",
          "/xianxia-wuxia/"
        ],
        "scopeZh": "诗词名著与古典思想、书画、戏曲民乐、陶瓷丝绸非遗、当代艺术设计、汉服、古建构件、武侠修仙词典。"
      },
      {
        "code": "C7",
        "pillarId": "culture",
        "slug": "everyday-life-tcm-spas",
        "hubPath": "/culture/everyday-life-tcm-spas/",
        "navZh": "市井日常、中医与汤泉",
        "navEn": "Everyday Life, TCM & Spas",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3–4*",
        "isFirewall": true,
        "ssotRoutesDisplay": "`/tcm-therapies/` `/herbs-tonics/` `/chinese-objects/` `/rituals/`",
        "ssotRoutes": [
          "/tcm-therapies/",
          "/herbs-tonics/",
          "/chinese-objects/",
          "/rituals/"
        ],
        "scopeZh": "市井日常、中医理疗与药食同源、24h 豪华汤泉洗浴、夜生活、时尚美妆、中式国民器物与社交仪轨。"
      },
      {
        "code": "C8",
        "pillarId": "culture",
        "slug": "cinema-music-gaming",
        "hubPath": "/culture/cinema-music-gaming/",
        "navZh": "影视、音乐与游戏动漫",
        "navEn": "Cinema, Music & Gaming",
        "inDropdown": true,
        "priority": "P2",
        "phase": "Phase 3–4",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(泛娱乐)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "电影与作者影像、陆剧、当代独立音乐、国产 3A 游戏与国漫。"
      },
      {
        "code": "C9",
        "pillarId": "culture",
        "slug": "sports-winter-esports",
        "hubPath": "/culture/sports-winter-esports/",
        "navZh": "体育、冰雪与电竞",
        "navEn": "Sports, Winter & Esports",
        "inDropdown": true,
        "priority": "P2",
        "phase": "Phase 3–4",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(体育)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "748 座滑雪场与冰雪经济、现代体育、中国电竞生态。"
      }
    ]
  },
  {
    "idx": "06",
    "id": "atlas",
    "navZh": "读懂中国",
    "navEn": "China Atlas",
    "path": "/atlas/",
    "intentZh": "中国如何运转与硬核实力",
    "persona": "analyst",
    "personaEn": "Economist Briefing",
    "personaZh": "经济学人洞察",
    "children": [
      {
        "code": "A1",
        "pillarId": "atlas",
        "slug": "china-at-a-glance-myths",
        "hubPath": "/atlas/china-at-a-glance-myths/",
        "navZh": "国家概览与误解破除",
        "navEn": "China at a Glance & Myths",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(概览与误解，含 `/guides/misconceptions/`)",
        "ssotRoutes": [
          "/guides/",
          "/guides/misconceptions/"
        ],
        "scopeZh": "国家核心档案、《破除西方关于中国的十大常见误解》、当代中国阅读入口。"
      },
      {
        "code": "A2",
        "pillarId": "atlas",
        "slug": "geography-nature-wildlife",
        "hubPath": "/atlas/geography-nature-wildlife/",
        "navZh": "地理、自然与生态",
        "navEn": "Geography, Nature & Wildlife",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(地理自然)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "地形与气候带、江河湖海、山河奇观、国家公园、大熊猫与生物多样性、地质化石与海洋防灾。"
      },
      {
        "code": "A3",
        "pillarId": "atlas",
        "slug": "history-timeline-heritage",
        "hubPath": "/atlas/history-timeline-heritage/",
        "navZh": "历史年表与文化遗产",
        "navEn": "History, Timeline & Heritage",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 3–4",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/timeline/`",
        "ssotRoutes": [
          "/timeline/"
        ],
        "scopeZh": "五千年史与中西平行年表、近现代史、考古发现、历代人物谱、遗产与古建园林的历史解读、丝路与大运河。"
      },
      {
        "code": "A4",
        "pillarId": "atlas",
        "slug": "ai-frontier-tech-science",
        "hubPath": "/atlas/ai-frontier-tech-science/",
        "navZh": "AI、前沿科技与科研",
        "navEn": "AI, Frontier Tech & Science",
        "inDropdown": true,
        "priority": "P0",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/china-ai/`",
        "ssotRoutes": [
          "/china-ai/"
        ],
        "scopeZh": "中国 AI 模型与 API 全球接入（DeepSeek/Qwen/Kling 等）、机器人、半导体芯片、航天与大科学装置、基础科研体系、生物医药、云计算与开源。"
      },
      {
        "code": "A5",
        "pillarId": "atlas",
        "slug": "government-law-diplomacy",
        "hubPath": "/atlas/government-law-diplomacy/",
        "navZh": "国家治理、法治与外交",
        "navEn": "Government, Law & Diplomacy",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(治理法治)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "国家机构与“十五五”、五级政区、法律体系（民法典与四级法院）、税种概览、外交使领、国防维和与一带一路。"
      },
      {
        "code": "A6",
        "pillarId": "atlas",
        "slug": "society-public-systems",
        "hubPath": "/atlas/society-public-systems/",
        "navZh": "社会、人口与公共体制",
        "navEn": "Society & Public Systems",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(社会体制)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "人口数据与银发社会、56 民族、教育体制概览、公共医疗体制、户籍、社会治安、人情面子与侨乡寻根。"
      },
      {
        "code": "A7",
        "pillarId": "atlas",
        "slug": "economy-manufacturing",
        "hubPath": "/atlas/economy-manufacturing/",
        "navZh": "宏观经济与全产业链",
        "navEn": "Economy & Manufacturing",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(经济产业)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "宏观经济、制造业与全产业链、外贸大港、金融与人民币、县域经济与消费市场、现代农业、房地产与文旅经济。"
      },
      {
        "code": "A8",
        "pillarId": "atlas",
        "slug": "infrastructure-green-energy",
        "hubPath": "/atlas/infrastructure-green-energy/",
        "navZh": "超级基建与能源双碳",
        "navEn": "Infrastructure & Green Energy",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/guides/`(基建双碳)",
        "ssotRoutes": [
          "/guides/"
        ],
        "scopeZh": "超级基建（高铁网/大桥/特高压）、清洁能源与双碳路线图、智能电车（EV）产业、低空经济。"
      },
      {
        "code": "A9",
        "pillarId": "atlas",
        "slug": "digital-china-global-brands",
        "hubPath": "/atlas/digital-china-global-brands/",
        "navZh": "数字中国与出海品牌",
        "navEn": "Digital China & Global Brands",
        "inDropdown": true,
        "priority": "P1",
        "phase": "Phase 2–3",
        "isFirewall": false,
        "ssotRoutesDisplay": "`/chinese-brands/`",
        "ssotRoutes": [
          "/chinese-brands/"
        ],
        "scopeZh": "超级应用与数字生活、数字政务、传媒与互联网、全球出海中国品牌档案。"
      }
    ]
  }
];

export const V32_UTILITY_DOCK: V32UtilityDockItem[] = [
  {
    code: 'D1',
    slug: 'tools-cards',
    nameZh: '工具与字卡',
    nameEn: 'Tools & Cards',
    href: '/tools/',
    routes: '/tools/ · /cards/ · /tools/visa-checker/',
    embedTargets: 'T1 / T2 / T4 / T6 / T7 / T8 / T9 / T10 / L1 / L4 / B2 / B3',
  },
  {
    code: 'D2',
    slug: 'open-data-mcp',
    nameZh: '开放数据与 MCP',
    nameEn: 'Open Data & MCP',
    href: '/portals/',
    routes: '/portals/ · /mcp · /llms.txt',
    embedTargets: '全站事实槽位官方溯源锚点',
  },
  {
    code: 'D3',
    slug: 'ground-pulse',
    nameZh: '现场实测 Pulse',
    nameEn: 'Field Reports (Pulse)',
    href: '/pulse/',
    routes: '/pulse/ · /guides/policy-changelog/',
    embedTargets: '单页顶栏轻量挂载一键报错',
  },
  {
    code: 'D4',
    slug: 'global-search',
    nameZh: '全站检索 ⌘K / Ctrl+K',
    nameEn: 'Global Search ⌘K / Ctrl+K',
    href: '/search/',
    routes: '/search/',
    embedTargets: '全站任意页面快捷键呼出',
  },
];

export const V32_PILLAR_BY_ID: Record<V32PillarId, V32Pillar> = Object.fromEntries(
  V32_PILLARS.map((p) => [p.id, p]),
) as Record<V32PillarId, V32Pillar>;

export const V32_ALL_SECTIONS: V32Section[] = V32_PILLARS.flatMap((p) => p.children);

export function getV32Section(pillarId: string, sectionSlug: string): V32Section | undefined {
  const normalized = pillarId === 'visit' ? 'travel' : pillarId;
  return V32_ALL_SECTIONS.find((s) => s.pillarId === normalized && s.slug === sectionSlug);
}

/** Phase 1 single-pillar flat fallback codes (v3.2 Chapter 3) */
export const PHASE1_FLAT_CODES = ['T1', 'T2', 'T3', 'T7', 'T8', 'T9'] as const;

export function getPhase1FlatSections(): V32Section[] {
  const codeSet = new Set<string>(PHASE1_FLAT_CODES);
  return V32_PILLAR_BY_ID.travel.children.filter((c) => codeSet.has(c.code));
}

/** Contextual Utility Dock (D1) tool embedding map per v3.2 */
export interface SectionToolEmbed {
  href: string;
  kickerZh: string;
  kickerEn: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  ctaZh: string;
  ctaEn: string;
}

export const SECTION_TOOL_EMBEDS: Record<string, SectionToolEmbed> = {
  T1: {
    href: '/tools/visa-checker/',
    kickerZh: '免费工具 · 本地测算',
    kickerEn: 'FREE TOOL · LOCAL ONLY',
    titleZh: '240 小时过境免签与适用口岸判定器',
    titleEn: '240-Hour Visa-Free Transit & Port Checker',
    descZh: '按护照国籍、停留天数与第三国联程票即时判定单免/240h 过境资格，不上传个人信息。',
    descEn: 'Check unilateral 30-day or 240h cross-province transit eligibility by passport and onward ticket.',
    ctaZh: '立即测算资格 →',
    ctaEn: 'Run Visa Check →',
  },
  T2: {
    href: '/tools/pay-fee-calc/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '3% 外卡拆单与 Wise 跨境汇率测算',
    titleEn: '3% Foreign Card Split & Wise Fee Calculator',
    descZh: '测算支付宝/微信单笔超 ¥200 的 3% 手续费红线，对比 Wise 跨境换汇成本。',
    descEn: 'Calculate Alipay/WeChat 3% surcharge thresholds above ¥200 and compare Wise FX rates.',
    ctaZh: '打开费率计算器 →',
    ctaEn: 'Open Fee Calculator →',
  },
  T4: {
    href: '/tools/ticket-calendar/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '12306 高铁 15 天预售期换算日历',
    titleEn: 'Railway 12306 15-Day Release Calendar',
    descZh: '将 12306 放票时间自动换算为您所在时区的本地抢票时刻。',
    descEn: 'Convert 12306 15-day rail ticket drops into your exact local timezone.',
    ctaZh: '打开放票日历 →',
    ctaEn: 'Open Release Calendar →',
  },
  T6: {
    href: '/tools/ticket-calendar/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '故宫与顶流场馆跨时区放票日历',
    titleEn: 'Forbidden City & Museum Ticket Drop Timer',
    descZh: '故宫提前 7 天 20:00 BJT、国博及上博东馆放票时间一键换算本地时区。',
    descEn: 'Convert Beijing 20:00 museum drops into your local time with Monday closure alerts.',
    ctaZh: '打开放票日历 →',
    ctaEn: 'Open Drop Calendar →',
  },
  T7: {
    href: '/cards/peanut-allergy-sos/',
    kickerZh: '离线亮屏字卡',
    kickerEn: 'OFFLINE SHOW CARD',
    titleZh: '防花生油与重度过敏后厨亮屏卡',
    titleEn: 'Fullscreen Kitchen Allergy & Dietary SOS Card',
    descZh: '高对比全屏中文出示给后厨与服务员，附普通话语音播报与高清图保存。',
    descEn: 'High-contrast fullscreen Chinese card for restaurant staff with Mandarin audio.',
    ctaZh: '打开亮屏字卡 →',
    ctaEn: 'Open Show Card →',
  },
  T8: {
    href: '/cards/',
    kickerZh: '离线亮屏字卡',
    kickerEn: 'OFFLINE SHOW CARDS',
    titleZh: '打车定位、酒店登记与急救全屏字卡库',
    titleEn: 'Taxi, Hotel Check-In & Emergency Show Cards',
    descZh: '覆盖清河站防走错、护照住宿登记、120 急诊沟通等高频现场沟通场景。',
    descEn: 'Ready-to-show fullscreen Chinese cards for taxis, hotel registration, and emergencies.',
    ctaZh: '浏览全部字卡 →',
    ctaEn: 'Browse All Cards →',
  },
  T10: {
    href: '/tools/tax-refund-calc/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '离境即买即退（11%）与旅行预算计算器',
    titleEn: 'Departure Tax Refund (11%) & Budget Calc',
    descZh: '快速测算 9% 实际到手退税额（11% 税率扣 2% 代理费）与购数码价差。',
    descEn: 'Estimate net 9% departure tax refund and shopping budget in seconds.',
    ctaZh: '打开退税计算器 →',
    ctaEn: 'Open Tax Refund Calc →',
  },
  L1: {
    href: '/tools/tax-points-calc/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '来华工作许可 A/B/C 分类积分测算器',
    titleEn: 'Work Permit Category A/B/C Points Calculator',
    descZh: '即时核对学历、薪资、工作年限与 HSK 积分，评估 A 类（≥85）或 B 类（≥60）资格。',
    descEn: 'Score your salary, degree, experience, and HSK level for Category A/B/C eligibility.',
    ctaZh: '测算工签积分 →',
    ctaEn: 'Run Points Calc →',
  },
  L4: {
    href: '/tools/tax-points-calc/',
    kickerZh: '实用工具 · 本地测算',
    kickerEn: 'UTILITY · LOCAL ONLY',
    titleZh: '183 天税务居民与综合所得个税速算器',
    titleEn: '183-Day Resident & China IIT Tax Calculator',
    descZh: '测算外籍八项津补贴免税额度与月度综合所得个人所得税预扣额。',
    descEn: 'Estimate monthly mainland China IIT withholding and tax-exempt expat allowances.',
    ctaZh: '打开个税计算器 →',
    ctaEn: 'Open IIT Calculator →',
  },
  B2: {
    href: '/compliance/uscc-gsxt-lookup/',
    kickerZh: '官方合规核验',
    kickerEn: 'COMPLIANCE DESK',
    titleZh: '18 位统一社会信用代码校验与 3C 认证查询',
    titleEn: '18-Digit USCC Checksum & CCC / GB Lookup',
    descZh: '本地校验 18 位统一社会信用代码校验位，一键复制企信网与 CNCA 官方检索词。',
    descEn: 'Validate 18-digit USCC checksums locally and access GSXT & CNCA verification guides.',
    ctaZh: '进入核验台 →',
    ctaEn: 'Open Verification Desk →',
  },
  B3: {
    href: '/compliance/uscc-gsxt-lookup/',
    kickerZh: '供应商核验',
    kickerEn: 'SUPPLIER VERIFICATION',
    titleZh: '工厂 18 位统一社会信用代码尽调与验厂清单',
    titleEn: 'Factory 18-Digit USCC & Audit Verification',
    descZh: '下单打样前核验工厂营业执照、实缴资本与司法诉讼记录。',
    descEn: 'Verify factory legal registration and litigation records before wiring deposits.',
    ctaZh: '核验供应商 →',
    ctaEn: 'Verify Supplier →',
  },
  C2: {
    href: '/tools/hanzi-tattoo-check/',
    kickerZh: '汉字与文化工具',
    kickerEn: 'CULTURAL UTILITY',
    titleZh: '汉字纹身防雷检测 & 中文起名工坊',
    titleEn: 'Hanzi Tattoo Red-Flag Check & Name Studio',
    descZh: '排查生造词、谐音雷区与文化误译，生成自然得体的中文名。',
    descEn: 'Catch broken idioms and awkward transliterations or craft a natural Chinese name.',
    ctaZh: '打开汉字工具 →',
    ctaEn: 'Open Hanzi Tools →',
  },
};
