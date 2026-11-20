/**
 * Paradigm E — Simplified Chinese (zh-CN) Localization Layer
 * Pairs with Astro native i18n (defaultLocale: 'en', secondary: 'zh' / 'zh-CN')
 * and EmDash 1.5 multi-locale Live Collections & Admin locales (['en', 'zh-CN']).
 */
import type { Locale } from '@i18n/ui';

export const ARCHETYPE_LABELS: Record<'en' | 'zh', Record<string, string>> = {
  en: {
    playbook: 'Playbook',
    matrix: 'Decision Matrix',
    rescue: 'Visual Rescue',
    editorial: 'Editorial Gallery',
  },
  zh: {
    playbook: '通关剧本',
    matrix: '决策矩阵',
    rescue: '救火日志',
    editorial: '人文画廊',
  },
};

export const PULSE_STATUS_LABELS: Record<'en' | 'zh', Record<'worked' | 'partial' | 'failed', string>> = {
  en: { worked: 'Worked', partial: 'Partial', failed: 'Failed' },
  zh: { worked: '实测可用', partial: '部分可用', failed: '受阻/失败' },
};

export const PULSE_ZH_MAP: Record<string, { passportOrCard: string; location: string; summary: string; timestamp: string; category: string }> = {
  p1: {
    category: '240h 口岸',
    passportOrCard: '美国护照',
    location: '上海浦东 PVG T2',
    summary: '凭打印版首尔联程机票，16 分钟顺畅签发 240 小时临时入境许可。',
    timestamp: '2 小时前',
  },
  p2: {
    category: '外卡支付',
    passportOrCard: 'Chase Visa 闪付',
    location: '成都地铁 1 号线',
    summary: '主闸机外卡直刷可用；高峰期换乘通道使用支付宝乘车码更快。',
    timestamp: '5 小时前',
  },
  p3: {
    category: '漫游 eSIM',
    passportOrCard: '3HK / Trip.com eSIM',
    location: '京沪复兴号高铁',
    summary: '350 km/h 全程 5G 不断连，WhatsApp 与 Gmail 无需 VPN 原生直连。',
    timestamp: '7 小时前',
  },
  p4: {
    category: '12306 高铁',
    passportOrCard: '英国护照',
    location: '北京南站',
    summary: '线上核验通过后直接刷实体护照过自动闸机，无需取纸质报销凭证。',
    timestamp: '11 小时前',
  },
  p5: {
    category: '国际医疗',
    passportOrCard: '澳大利亚护照',
    location: '上海华山医院国际医疗中心',
    summary: '抽血+彩超+胸部 CT 深度体检 3.5 小时全套完成，总计 ¥2,980。',
    timestamp: '1 天前',
  },
  p6: {
    category: '外卡支付',
    passportOrCard: '未实名微信',
    location: '西安夜市摊位',
    summary: '个人转账码不支持外卡，改扫支付宝商家收款码顺利付款。',
    timestamp: '1 天前',
  },
};

export const EXPLORER_FACET_ZH: Record<string, string> = {
  // Space
  national: '全国通用',
  '240h': '240h 免签覆盖区',
  '310000': '上海 (310000)',
  '110000': '北京 (110000)',
  '510100': '成都 (510100)',
  '440300': '深圳 (440300)',
  // Season
  'all-year': '全年适宜',
  spring: '春季 (3–5月)',
  autumn: '秋季 (9–11月)',
  winter: '冬季 (12–2月)',
  // Kind
  Guide: '32 深度主题页',
  City: '城市空间中枢',
  Attraction: '顶流景点',
  'In-China': '西方 App 映射',
  Error: 'App 报错救火',
  Card: '全屏亮屏字卡',
  Compliance: '合规 / WAF 引导',
  Compare: '红黑决策横评',
  Stack: '场景抄作业包',
  // Constraints
  'foreign-card': '外卡友好',
  'no-plus86': '免 +86 手机号',
  wheelchair: '无障碍 / 推车友好',
  'nut-allergy': '防花生油过敏',
  'remote-ok': '无需来华 / 行前可用',
  // Trust
  'tier-a': 'Tier-A 官方信源',
  'pulse-verified': '本周实测可用',
};

export const EXPLORER_SUMMARY_ZH: Record<string, string> = {
  'ex-1': '起飞前 72 小时 4 步确定性通关：免签、绑外卡、eSIM 与离线亮屏字卡。',
  'ex-2': '浦东/虹桥 240h 口岸、梧桐漫步、复旦交大与华山医院国际医疗中心。',
  'ex-3': '7 座火车站防走错警示、外卡直刷地铁与故宫/长城核心规则。',
  'ex-4': '早 07:30 熊猫基地、盖碗茶馆、华西国际部与高性价比数字游民基地。',
  'ex-5': '华强北电子供应链、无人机公园空投及 14 分钟直达香港西九龙高铁。',
  'ex-6': '提前 7 天晚 20:00 放票、东华门免排天安门捷径与 1–3km 周边织网。',
  'ex-7': '解析 300–500 米 GCJ-02 偏移，一键切换高德地图英文版或 Apple Maps。',
  'ex-8': '中文报错界面红框热区标注，附自助解封与好友辅助验证步骤。',
  'ex-9': '纯黑底亮黄超大字后厨警示卡，明确禁用花生油并支持中文语音播报。',
  'ex-10': '本地校验 GB 32100-2015 校验码，配瑞数 WAF 企信网双栏核验引导。',
  'ex-11': '拒绝端水：从人流、无障碍坡道、清河高铁与滑道维度给出明确结论。',
  'ex-12': '可勾选独行清单：漫游 eSIM、滴滴行程分享、梯控酒店与救火字卡。',
  'ex-13': '对比三甲公立国际部、外资私立医院与齿科真实价格及预约流程。',
  'ex-14': '离华前提取 8% 个人养老金、100% 公积金与个税完税证明合法购汇。',
  'ex-15': '悬空寺、应县木塔（1056 年）与小西天高清路线、高铁站与中文坐标。',
  'ex-16': '丹阳配镜、广州中大面料与景德镇瓷器 50–200 件柔性打样与直邮。',
};

export const PORTAL_DOMAIN_ZH: Record<string, string> = {
  'Visas & Entry': '签证免签与出入境',
  Macroeconomy: '宏观经济与统计',
  'Society & Law': '国家法律法规',
  'Business & USCC': '企业信用与 USCC',
  'GB Standards (2,913 EN)': '国家标准（2,913 外文版）',
  'Product Compliance': '3C 强制产品认证',
  'Biotech & Meds': '药品、化妆品与器械',
  'Customs & Trade': '海关安检与外贸',
  'Aviation & Drones': '民航与无人机实名',
  'Food & Heritage': '中华老字号（1,422 家）',
  'Open Datasets': '城市公共数据开放',
};

export const PORTAL_ACCESS_ZH: Record<string, string> = {
  'HTTP 200 Direct': 'HTTP 200 官方直连',
  'WAF 412 / Ruishu Guided': '瑞数 412 · 官方备用引导',
  'WAF 521 / Interactive Guided': 'WAF 521 · 交互官网引导',
  'WAF Captcha Guided': '验证码防护 · 官网引导',
  'WAF 202 Token Guided': '动态令牌 202 · 官网引导',
};

export const PORTAL_LEVEL_ZH: Record<string, string> = {
  Ministry: '国家部委',
  Provincial: '省级政府',
  Municipal: '市级政府',
};

export const STACK_CAT_ZH: Record<string, string> = {
  Connectivity: '联网通信',
  App: '必备应用',
  Card: '亮屏字卡',
  'City Hub': '城市中枢',
  Tool: '交互工具',
  Compliance: '合规尽调',
};

export const ESIM_TOP5_ZH = [
  { rank: '01', provider: 'Trip.com 内地+港澳 5G 漫游 eSIM', breakout: '香港出口', priceRef: '约 ¥80 / 15GB (15天)', stability: '98% 可用 (142人)' },
  { rank: '02', provider: '3HK DIY 大湾区直连 eSIM', breakout: '香港直连', priceRef: 'HK$138 / 15GB', stability: '96% 可用 (98人)' },
  { rank: '03', provider: 'Nomad China / 亚太 5G eSIM', breakout: '新加坡出口', priceRef: '$18 / 10GB (30天)', stability: '95% 可用 (74人)' },
  { rank: '04', provider: 'Airalo Chinacom / Asialink eSIM', breakout: '新加坡出口', priceRef: '$16 / 10GB (30天)', stability: '93% 可用 (61人)' },
  { rank: '05', provider: 'Holafly 中国不限量 eSIM', breakout: '香港出口', priceRef: '$34 / 10天不限量', stability: '92% 可用 (53人)' },
];

export const RESCUE_FILTER_ZH: Record<string, string> = {
  All: '全部',
  WeChat: '微信',
  Alipay: '支付宝',
  '12306': '铁路 12306',
  Forms: '官方表格',
  Devices: '设备面板',
  Visa: '签证免签',
  'Tax & Pay': '退税与支付',
  Aviation: '民航安检',
  Business: '商旅尽调',
  'Winter (Dec–Feb)': '冬季 (12–2月)',
  'Spring (Mar–May)': '春季 (3–5月)',
  'Summer (Jun–Aug)': '夏季 (6–8月)',
  'Autumn (Sep–Nov)': '秋季 (9–11月)',
  'Red Alert': '拥挤红警',
  Moderate: '中度客流',
  'Hong Kong': '香港跨境',
  Macau: '澳门跨境',
  Taiwan: '台湾通行',
  Priority: '高优实操',
  Reference: '参考索引',
};

export const NEARBY_CAT_ZH: Record<string, string> = {
  'City Walk': '街区漫步',
  'Time-Honored Brand': '百年老字号',
  'Free Museum': '免费文博',
  '24h Bathhouse': '24h 汤泉',
  'Tax-Free Shop': '离境退税店',
};

export function tLocale<T>(locale: Locale, en: T, zh: T): T {
  return locale === 'zh' ? zh : en;
}
