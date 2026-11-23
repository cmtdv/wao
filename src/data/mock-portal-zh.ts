import {
  ATLAS_PILLARS,
  DIRECTORY_ENTRIES,
  FLASHCARDS,
  JOURNEY_STEPS,
  VISA_PROFILES,
  type AtlasPillar,
  type BilingualFlashcard,
  type DirectoryEntry,
  type JourneyStep,
  type VisaCountryProfile,
} from './mock-portal';
import { VISA_MATRIX_COLUMNS, VISA_MATRIX_ROWS } from './design-system-catalog';
import type { TableColumn, TableRow } from '@ui/data-display/DataTable.astro';
import { localePath, type Locale } from '@i18n/ui';

export const ATLAS_PILLAR_BLURBS_ZH: Record<string, string> = {
  "travel": "单方面与 240h 过境免签、支付宝/微信绑外卡、eSIM 与必备 App、高铁 12306、酒店住宿登记、门票预约、忌口字卡、应急图解与行程清单。",
  "live": "外籍工作许可 A/B/C 与 K 字签、五星卡永居与旅居、150 所高校留学、银行开户与个税、涉外就医医保、驾照换领、五险一金、租房物价与携宠。",
  "business": "外资负面清单与 WFOE 设立、外文 GB 国标与 3C 出口管制、百大产业带与验厂尽调、广交会展会、集运物流、发票税务外汇、知产仲裁与数据合规。",
  "places": "首访核心城市中枢、61 处世界遗产与博物馆、徒步骑行与 G318 自驾路线、夜市街区与年度盛事，以及覆盖 34 省市区的五大地理文化片区。",
  "culture": "八大菜系与茶酒零食、发音热词与 HSK、传统节庆与 24 节气、国民连锁新消费、棋牌武术与硬核民俗、诗词书画非遗、中医汤泉与影视游戏冰雪。",
  "atlas": "国家档案与常见误解破除、地形气候与熊猫生态、中西平行历史年表、AI 大模型与前沿科研、国家治理与法律体系、全产业链经济、超级基建与出海品牌。"
};

export function getAtlasPillars(locale: Locale): AtlasPillar[] {
  if (locale === 'en') return ATLAS_PILLARS;
  return ATLAS_PILLARS.map((p) => ({
    ...p,
    blurb: ATLAS_PILLAR_BLURBS_ZH[p.slug] ?? p.blurb,
  }));
}

const JOURNEY_STEPS_ZH: Record<string, Omit<JourneyStep, 'id' | 'number' | 'guideLinks' | 'officialLink'> & {
  guideLabels: string[];
  officialLabel: string;
}> = {
  'step-visa': {
    phase: '出发前',
    title: '核对免签资格或提前申请签证',
    summary: '确认所持护照是否适用 30 天单方面免签、240 小时跨省过境免签（国家 A → 中国内地 → 第三国/地区 C），或需提前办理常规旅游 L 签。',
    timing: '提前 3–6 周',
    checklist: [
      '核验护照有效期（剩余 6 个月以上并留有至少 2 页空白签证页）。',
      '如走 240 小时过境免签，须提前订妥前往第三国或港澳台地区、确定日期和座位的联程客票。',
      '打印首晚酒店确认单与联程机票行程单，方便值机柜台与边检查验。',
    ],
    guideLabels: ['240 小时过境免签全攻略', '使用免签与过境判定器'],
    officialLabel: '国家移民管理局 12367 官方平台',
  },
  'step-pay-net': {
    phase: '出发前',
    title: '支付宝/微信绑定境外卡并准备漫游网络',
    summary: '登机前安装支付宝与微信、完成护照实名认证并绑定 Visa/Mastercard，同时备好支持国际漫游或旅行 eSIM，确保落地即用地图与翻译。',
    timing: '提前 1–2 周',
    checklist: [
      '在支付宝与微信支付内各绑定至少两张国际银行卡（如 Visa + Mastercard）互为备份。',
      '单笔 200 元人民币以内免收 3% 外卡通道费；随身备 300–500 元人民币现金应急。',
      '预先安装高德地图（支持英文模式）或苹果地图，并下载离线中文翻译包。',
    ],
    guideLabels: ['支付宝与微信绑定境外银行卡全指南'],
    officialLabel: '中国人民银行外籍来华人员支付指南',
  },
  'step-rail-tickets': {
    phase: '提前两周',
    title: '完成 12306 护照认证并预约核心博物馆',
    summary: '中国高铁提前 15 天放票；故宫博物院、国家博物馆等热门地标需提前 7 天晚间实名抢票预约。',
    timing: '提前 7–15 天',
    checklist: [
      '注册官方铁路 12306 账号并在线提交护照信息页完成实名核验。',
      '订票前务必核对具体站名（如北京南站 vs 北京西站、上海虹桥站 vs 上海站）。',
      '尽早锁定故宫、国博或成都大熊猫基地上午首批入园时段。',
    ],
    guideLabels: ['外籍护照 12306 乘车实操指南', '四川大熊猫基地错峰早游攻略'],
    officialLabel: '中国铁路 12306 官方英文门户',
  },
  'step-arrival-card': {
    phase: '抵华前 48 小时',
    title: '在线填报国家移民管理局外国人入境卡',
    summary: '登机前或抵达口岸时通过官方系统在线填写电子入境卡，保存回执二维码截图以便边检现场快速核验或自助打印。',
    timing: '落地前 24–48 小时',
    checklist: [
      '提前备好首晚酒店中英文名称、详细街道地址与联系电话。',
      '将生成的电子申报二维码截图离线保存到手机相册。',
      '若飞抵中小口岸，仍可在边检大厅填表台领取纸质入境卡作为备用。',
    ],
    guideLabels: ['中国外国人入境卡官方填报指南'],
    officialLabel: '国家移民管理局外国人入境卡在线填报系统',
  },
  'step-registration': {
    phase: '抵华 24 小时内',
    title: '确认完成 24 小时临时住宿登记',
    summary: '正规涉外酒店会在办理入住时自动联网申报；若借宿亲友住宅或非联网民宿，须在 24 小时内线上自助申报或前往属地派出所登记。',
    timing: '抵达后 24 小时内',
    checklist: [
      '入住酒店时确认前台已扫描护照个人信息页及本次入境章页。',
      '在上海入住私宅或亲友家，可直接通过上海公安出入境线上自助申报系统办理。',
      '妥善保存《境外人员临时住宿登记单》电子回执或纸质复印件。',
    ],
    guideLabels: ['入住上海亲友私宅 24 小时住宿登记指引'],
    officialLabel: '上海境外人员住宿登记自助申报系统',
  },
  'step-street-nav': {
    phase: '在华期间',
    title: '高铁刷护照进站、打车字卡与日常点餐',
    summary: '随身携带护照原件即可直接刷证通过高铁电子闸机，备好全屏高对比中文地址与过敏忌口字卡，并认识 20 个高频路标汉字。',
    timing: '每日出行常备',
    checklist: [
      '每日外出随身携带护照原件（高铁站、博物馆与多数大型景区均需核验）。',
      '收藏本站全屏双语打车与急救过敏字卡，无网环境下也能直接展示给司机或店员。',
      '在支付宝「出行（Transport）」里一键开通城市地铁公交乘车码，免去排队购票。',
    ],
    guideLabels: ['看懂 20 个高频汉字通行车站与餐馆', '打开全屏双语打车与急救字卡'],
    officialLabel: '中国政府网 Visit China 官方英文门户',
  },
  'step-departure-tax': {
    phase: '离境返程前',
    title: '办理离境退税 2.0 并完成机场海关核验',
    summary: '同日同退税商店消费满 200 元人民币即可享 11% 增值税退税（扣除手续费后实得约 9%），支持市内「即买即退」或机场现场办理。',
    timing: '离境当日（预留 +30 分钟）',
    checklist: [
      '结账时主动向店员索取《境外旅客购物离境退税申请单》与增值税普通发票。',
      '退税商品须保持未启封、未使用状态，托运行李前先到机场海关退税柜台盖章核验。',
      '如在机场领取现金或银行卡退税，建议比常规国际航班再提前 30 分钟抵达航站楼。',
    ],
    guideLabels: ['离境退税 2.0 与即买即退全指南'],
    officialLabel: '国家税务总局英文离境退税门户',
  },
};

export function getJourneySteps(locale: Locale): JourneyStep[] {
  return JOURNEY_STEPS.map((step) => {
    const zh = locale === 'zh' ? JOURNEY_STEPS_ZH[step.id] : undefined;
    if (!zh) return step;
    return {
      ...step,
      phase: zh.phase,
      title: zh.title,
      summary: zh.summary,
      timing: zh.timing,
      checklist: zh.checklist,
      guideLinks: step.guideLinks.map((g, i) => ({
        label: zh.guideLabels[i] ?? g.label,
        href: localePath(g.href, 'zh'),
      })),
      officialLink: {
        ...step.officialLink,
        label: zh.officialLabel,
      },
    };
  });
}

const DIRECTORY_ZH: Record<string, { name: string; operator: string; domainLabel: string; accessLabel: string; summary: string; guideLabel?: string }> = {
  'nia-12367': {
    name: '国家移民管理局 12367 出入境服务平台',
    operator: '国家移民管理局（NIA）',
    domainLabel: '签证与入境',
    accessLabel: '网页 · App · 24小时热线',
    summary: '国家统一出入境政务平台与 7×24 小时多语种热线，覆盖免签政策、口岸查询与在线居留业务。',
    guideLabel: '240h 过境攻略',
  },
  'nia-arrival-card': {
    name: '外国人入境卡在线自助填报系统',
    operator: '国家移民管理局（NIA）',
    domainLabel: '签证与入境',
    accessLabel: '在线填报 · 二维码凭证',
    summary: '抵华前或口岸现场在线申报外国人入境卡，生成二维码用于边检核验与自助打印。',
    guideLabel: '入境卡指南',
  },
  'cvasc-visa': {
    name: '中国签证申请服务中心（CVASC）',
    operator: '外交部授权驻外签证中心',
    domainLabel: '签证与入境',
    accessLabel: '在线填表与预约',
    summary: '全球驻外签证中心官方在线填表、递交预约与各领区签证费用标准查询。',
  },
  'shanghai-residence': {
    name: '上海境外人员住宿登记自助申报系统',
    operator: '上海市公安局出入境管理局',
    domainLabel: '签证与入境',
    accessLabel: '24小时线上自助登记',
    summary: '入住上海亲友私宅或非联网民宿时，用于 24 小时内线上完成临时住宿登记并下载电子回执。',
    guideLabel: '上海私宅登记指引',
  },
  'railway-12306': {
    name: '中国铁路 12306 官方英文购票门户',
    operator: '中国国家铁路集团',
    domainLabel: '交通与支付',
    accessLabel: '官方直购 · 护照核验',
    summary: '唯一官方铁路售票平台，支持外籍护照在线认证、复兴号高铁直购且零代理加价。',
    guideLabel: '12306 护照攻略',
  },
  'pboc-payment-guide': {
    name: '中国人民银行《外籍来华人员支付指南》',
    operator: '中国人民银行 / 国家外汇管理局',
    domainLabel: '交通与支付',
    accessLabel: '官方政策手册',
    summary: '权威解读支付宝与微信绑定境外银行卡、现金兑换额度及 ATM 取现指引。',
    guideLabel: '外卡绑卡指南',
  },
  'sta-tax-refund': {
    name: '国家税务总局离境退税与 12366 门户',
    operator: '国家税务总局（STA）',
    domainLabel: '交通与支付',
    accessLabel: '法定规则与 12366 热线',
    summary: '离境退税 2.0 官方条款汇总：200 元起退门槛、11% 退税率与「即买即退」试点说明。',
    guideLabel: '离境退税攻略',
  },
  'caac-uom-drone': {
    name: '民航局 UOM 民用无人驾驶航空器综合管理平台',
    operator: '中国民用航空局（CAAC）',
    domainLabel: '交通与支付',
    accessLabel: '法定实名登记',
    summary: '中国内地航拍无人机法定实名登记、二维码机身粘贴及管制空域飞行报备官方入口。',
  },
  'gov-cn-visit-china': {
    name: '中国政府网 Visit China 官方服务门户',
    operator: '国务院办公厅',
    domainLabel: '城市与文旅',
    accessLabel: '国家级英文总入口',
    summary: '中央政府英文服务总站，汇聚法定节假日安排、免签新政公告与各省市指南。',
  },
  'palace-museum-intl': {
    name: '故宫博物院境外观众官方购票门户',
    operator: '故宫博物院',
    domainLabel: '城市与文旅',
    accessLabel: '护照实名预约',
    summary: '故宫官方国际站，提供外籍护照提前 7 天实名预约门票、特展日历与周一闭馆提示。',
    guideLabel: '北京中轴线实录',
  },
  'shanghai-museum-en': {
    name: '上海博物馆官方英文门户',
    operator: '上海博物馆（人民广场馆 & 东馆）',
    domainLabel: '城市与文旅',
    accessLabel: '免费开放 · 预约入馆',
    summary: '两馆开放时间、青铜器与陶瓷常设展馆导览及外籍护照入馆指引。',
  },
  'city-intl-beijing': {
    name: '北京 / 上海 / 成都国际版城市服务门户',
    operator: '各市政府外事办公室',
    domainLabel: '城市与文旅',
    accessLabel: '城市服务 · 12345 热线',
    summary: '提供城市交通卡、国际医疗名录、公园预约及多语种 12345 市民热线官方指引。',
  },
  'canton-fair-portal': {
    name: '中国进出口商品交易会（广交会）境外采购商门户',
    operator: '中国对外贸易中心（商务部）',
    domainLabel: '商务与法律',
    accessLabel: '买家证预注册 · 分期展区',
    summary: '春秋两季三期广交会官方预注册通道、展商目录查询与签证邀请函申请。',
    guideLabel: '广交会采购入门',
  },
  'most-work-permit': {
    name: '外国人来华工作管理服务系统',
    operator: '人力资源社会保障部 / 科技部',
    domainLabel: '商务与法律',
    accessLabel: 'A/B/C 类许可申报',
    summary: '用人单位线上办理《外国人工作许可通知》与 A/B/C 积分分级核验的国家法定系统。',
  },
  'npc-national-laws': {
    name: '国家法律法规数据库',
    operator: '全国人民代表大会常务委员会',
    domainLabel: '商务与法律',
    accessLabel: '17,267 件权威法律全文',
    summary: '免费开放《民法典》、行政法规、司法解释与地方性法规官方权威全文检索。',
  },
  'mofcom-open-data': {
    name: '商务部公共商务信息开放数据中心',
    operator: '中华人民共和国商务部（MOFCOM）',
    domainLabel: '政府开放数据',
    accessLabel: '结构化数据集 · NM012',
    summary: '免费开放下载 1,422 家中华老字号名录（NM012）、两用物项清单及自贸协定税率表。',
  },
  'beijing-open-data': {
    name: '北京市公共数据开放平台',
    operator: '北京市政务服务和数据管理局',
    domainLabel: '政府开放数据',
    accessLabel: 'CSV / JSON / API 免费下载',
    summary: '开放全市文旅场馆、三甲医院、交通站点、空气质量与社会组织登记等结构化数据集。',
  },
  'samr-openstd-standby': {
    name: '全国标准信息公共服务平台（含外文版国标）',
    operator: '国家市场监督管理总局（SAMR）',
    domainLabel: '政府开放数据',
    accessLabel: 'WAF 官方反爬备用源',
    summary: '官方强制性/推荐性国标（GB/T）及 2,913 项外文版国标目录。按 OKF 规则标注为 WAF 官方备用源，请在常规浏览器中直接打开。',
  },
};

export function getDirectoryEntries(locale: Locale): DirectoryEntry[] {
  if (locale === 'en') return DIRECTORY_ENTRIES;
  return DIRECTORY_ENTRIES.map((e) => {
    const zh = DIRECTORY_ZH[e.id];
    if (!zh) return e;
    return {
      ...e,
      name: zh.name,
      operator: zh.operator,
      domainLabel: zh.domainLabel,
      accessLabel: zh.accessLabel,
      summary: zh.summary,
      guideHref: e.guideHref ? localePath(e.guideHref, 'zh') : undefined,
      guideLabel: zh.guideLabel ?? e.guideLabel,
    };
  });
}

const VISA_ZH: Record<string, { country: string; note: string }> = {
  FR: { country: '法国（France）', note: '持普通护照可享 30 天单方面免签入境（适用于旅游、商贸、探亲访友及过境）。' },
  DE: { country: '德国（Germany）', note: '持普通护照可享 30 天单方面免签入境，并同步适用 240 小时跨省过境免签。' },
  JP: { country: '日本（Japan）', note: '持普通护照可享 30 天单方面免签入境。' },
  KR: { country: '韩国（South Korea）', note: '持普通护照可享 30 天单方面免签入境，并适用 240 小时过境免签。' },
  AU: { country: '澳大利亚（Australia）', note: '持普通护照可享 30 天单方面免签入境。' },
  SG: { country: '新加坡（Singapore）', note: '中新永久互免签证协议，持普通护照可免签停留 30 天。' },
  MY: { country: '马来西亚（Malaysia）', note: '中马互免签证安排，持普通护照可免签停留 30 天。' },
  TH: { country: '泰国（Thailand）', note: '中泰永久互免签证协议，单次停留不超过 30 天（每 180 天累计不超过 90 天）。' },
  US: { country: '美国（United States）', note: '不在单方面免签名单内；持第三国/地区联程客票可享 240 小时（10 天）过境免签，或提前申请常规 L/M 签证。' },
  GB: { country: '英国（United Kingdom）', note: '持前往第三国/地区联程客票可享 240 小时（10 天）过境免签，或通过驻外签证中心申办常规签证。' },
  CA: { country: '加拿大（Canada）', note: '适用 24 省 60 口岸 240 小时（10 天）跨省过境免签，或提前办理常规签证。' },
  BR: { country: '巴西（Brazil）', note: '适用短期单方面免签政策（出行前请在国家移民管理局 12367 核验当前有效窗口）。' },
  IN: { country: '印度（India）', note: '入境需提前向中国驻外使领馆或签证中心申请签证（24 小时机场直接过境政策仍适用）。' },
};

export function getVisaProfiles(locale: Locale): VisaCountryProfile[] {
  if (locale === 'en') return VISA_PROFILES;
  return VISA_PROFILES.map((p) => {
    const zh = VISA_ZH[p.code];
    return zh ? { ...p, country: zh.country, note: zh.note } : p;
  });
}

const FLASHCARD_ZH: Record<string, { title: string; tip: string }> = {
  'card-bj-south': { title: '去北京南站（高铁出发层）', tip: '上车前请核对 12306 车票上的站名（北京南站 / 北京西站 / 北京朝阳站）。' },
  'card-sh-hongqiao': { title: '去上海虹桥火车站（非航站楼）', tip: '虹桥机场 T2 与虹桥火车站紧邻，务必向司机强调去火车站落客区。' },
  'card-meter': { title: '请打表并开发票', tip: '出租车机打发票上印有车牌号，若不慎遗落物品可凭发票快速联系车队找回。' },
  'card-peanut-allergy': { title: '严重花生与坚果过敏', tip: '在广东、福建等南方餐馆尤为重要，当地烹饪高频使用香浓花生油。' },
  'card-gluten-free': { title: '严格无麸质（乳糜泻忌口）', tip: '传统酿造酱油与陈醋常含小麦成分，建议点仅用盐、蒜与纯油清炒的菜品或白米饭。' },
  'card-er-hospital': { title: '紧急就医 / 三甲医院急诊', tip: '中国急救电话 120（报警 110、火警 119）。就医挂号请随身携带护照原件。' },
  'card-hotel-reg': { title: '外宾入住与住宿登记单', tip: '办理银行卡、手机卡或跨城政务时常需出示酒店打印的临时住宿登记凭证。' },
  'card-tax-refund': { title: '申请境外旅客离境退税', tip: '在退税商店同日消费满 200 元人民币结账时，请当场出示护照原件开单。' },
};

export function getFlashcards(locale: Locale): BilingualFlashcard[] {
  if (locale === 'en') return FLASHCARDS;
  return FLASHCARDS.map((c) => {
    const zh = FLASHCARD_ZH[c.id];
    return zh ? { ...c, title: zh.title, tip: zh.tip } : c;
  });
}

export function getVisaMatrixTable(locale: Locale): { columns: TableColumn[]; rows: TableRow[] } {
  if (locale === 'en') {
    return { columns: VISA_MATRIX_COLUMNS, rows: VISA_MATRIX_ROWS };
  }
  return {
    columns: [
      { key: 'country', label: '护照国家 / 地区', type: 'string', rowHeader: true },
      { key: 'policy', label: '主要免签政策', type: 'string' },
      { key: 'maxDays', label: '最长天数', type: 'number', align: 'end' },
      { key: 'transit240', label: '240h 过境免签', type: 'string' },
      { key: 'status', label: '核验状态', type: 'string' },
    ],
    rows: [
      { country: '法国 / 德国 / 意大利 / 西班牙', policy: '单方面免签入境', maxDays: { text: '30 天', value: 30 }, transit240: '适用（60 口岸）', status: { text: '2026 已核验', badgeTone: 'verified' } },
      { country: '新加坡 / 马来西亚 / 泰国', policy: '双边互免签证', maxDays: { text: '30 天', value: 30 }, transit240: '适用（60 口岸）', status: { text: '2026 已核验', badgeTone: 'verified' } },
      { country: '澳大利亚 / 新西兰', policy: '单方面免签入境', maxDays: { text: '30 天', value: 30 }, transit240: '适用（60 口岸）', status: { text: '2026 已核验', badgeTone: 'verified' } },
      { country: '日本 / 韩国', policy: '单方面免签入境', maxDays: { text: '30 天', value: 30 }, transit240: '适用（60 口岸）', status: { text: '2026 已核验', badgeTone: 'verified' } },
      { country: '美国 / 英国 / 加拿大', policy: '240 小时过境免签（需第三国联程票）', maxDays: { text: '10 天', value: 10 }, transit240: '适用（24 省跨省）', status: { text: '仅限过境免签', badgeTone: 'editorial' } },
      { country: '巴西 / 阿根廷 / 智利', policy: '常规 L/M 签证或过境免签', maxDays: { text: '10 天', value: 10 }, transit240: '适用（部分口岸）', status: { text: '出行前核验', badgeTone: 'standby' } },
    ],
  };
}
