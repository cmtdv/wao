/**
 * Simplified Chinese localization overlays for flagship guides (/zh/guides/[slug]/)
 * Preserves English source in guides.ts while rendering 100% native Simplified Chinese on /zh/*
 */
import type { Locale } from '@i18n/ui';
import type { GuideDefinition } from './guides';

type GuideZhOverlay = Partial<
  Pick<
    GuideDefinition,
    'hardFacts' | 'matrixRows' | 'steps' | 'galleryItems' | 'stackLink' | 'directTools' | 'relatedEntities' | 'pulse'
  >
>;

const GUIDE_ZH_OVERLAYS: Record<string, GuideZhOverlay> = {
  'cashless-super-apps': {
    hardFacts: [
      {
        label: '单笔免手续费红线',
        value: '≤ ¥200 免收（超额收 3%）',
        source: '人民银行 / 支付宝 / 微信支付',
        verifiedDate: '2026-11-15',
      },
      {
        label: '外卡年度交易上限',
        value: '5 万美元（实名认证后）',
        source: '人民银行外籍支付便利化指引',
        verifiedDate: '2026-11-15',
      },
      {
        label: '单笔交易限额',
        value: '5,000 美元（护照认证后）',
        source: '人民银行',
        verifiedDate: '2026-11-15',
      },
    ],
    stackLink: {
      label: '首次来华 10 天行前清单',
      href: '/stacks/first-time-china-10-day/',
    },
    directTools: [
      { label: '预算与离境退税计算器', href: '/tools/budget-calculator/' },
      { label: '240h 免签判定器', href: '/tools/visa-checker/' },
    ],
    relatedEntities: [
      { label: '支付宝 vs 微信支付横评', href: '/compare/alipay-vs-wechat-pay/', tag: '支付对比' },
      { label: '漫游 eSIM vs 本地 +86 电话卡', href: '/compare/esim-vs-local-sim/', tag: '通信对比' },
      { label: '高德地图 vs 苹果地图实测', href: '/compare/amap-vs-apple-maps/', tag: '地图对比' },
      { label: '微信账号受限解封图解', href: '/errors/wechat-restricted/', tag: '报错救火' },
    ],
    matrixRows: [
      {
        option: '支付宝（国际版）',
        bestFor: '主力支付、内置滴滴打车、地铁乘车码与实时翻译',
        avoidIf: '向街边小摊个人收款码大额转账（外卡受限）',
        costRange: '≤ ¥200 免手续费 · 超额 3%',
        hiddenTrap: '部分个体摊贩仅支持个人收款码，建议同时备好微信支付兜底',
        href: '/compare/alipay-vs-wechat-pay/',
      },
      {
        option: '微信支付（WeChat Pay）',
        bestFor: '餐厅桌角扫码点餐、博物馆小程序预约与日常联系',
        avoidIf: '刚注册且未养号的新账号直接高频大额消费（易触发风控）',
        costRange: '≤ ¥200 免手续费 · 超额 3%',
        hiddenTrap: '短时间频繁加好友或频繁切换代理 IP 可能导致临时受限',
        href: '/errors/wechat-restricted/',
      },
      {
        option: '港澳/新加坡漫游 eSIM',
        bestFor: '30 天内短期行程，原生直连 WhatsApp、Gmail 与 Google 服务',
        avoidIf: '需要 +86 短信验证码注册美团外卖或三甲医院挂号系统',
        costRange: '$12–$28（10–20GB 流量）',
        hiddenTrap: '纯流量 eSIM 无语音通话功能，联系酒店或司机需用微信或前台代拨',
        href: '/compare/esim-vs-local-sim/',
      },
      {
        option: '高德地图（英文版）',
        bestFor: '步行导航、地铁出入口定位、精准商铺与打车比价',
        avoidIf: '习惯 iOS 原生苹果地图与 Siri 语音联动',
        costRange: '免费（无需 +86 手机号）',
        hiddenTrap: '检索冷门地标时直接粘贴中文名，定位准确度 100%',
        href: '/compare/amap-vs-apple-maps/',
      },
    ],
    pulse: [
      {
        status: 'worked',
        context: '美国 Chase Visa · 上海地铁 2 号线',
        detail: '支付宝乘车码全程秒刷进出站，单笔均在 ¥200 以内零手续费。',
        ago: '3 小时前',
      },
      {
        status: 'worked',
        context: '英国 Wise 万事达 · 微信桌码点餐',
        detail: '北京和成都餐厅扫码点单全部顺利通过，未要求绑定内地银行卡。',
        ago: '9 小时前',
      },
      {
        status: 'partial',
        context: '新注册微信号 · 首次绑外卡',
        detail: '连续添加 5 位好友后触发临时安全提示，经好友辅助验证 10 分钟恢复。',
        ago: '1 天前',
      },
    ],
  },
  'chinese-tea-6-types': {
    hardFacts: [
      {
        label: '六大标准茶类',
        value: '绿茶 · 白茶 · 黄茶 · 青茶（乌龙）· 红茶 · 黑茶',
        source: 'GB/T 30766 茶叶分类标准',
        verifiedDate: '2026-11-15',
      },
      {
        label: '中英翻译避坑',
        value: '中文「红茶」= 英文 Black Tea（全发酵）',
        source: '茶饮双语词表',
        verifiedDate: '2026-11-15',
      },
    ],
    stackLink: {
      label: '防花生油与忌口指南',
      href: '/for/peanut-allergy/',
    },
    directTools: [
      { label: '防过敏后厨亮屏字卡', href: '/cards/peanut-allergy-sos/' },
      { label: '不要辣不要香菜字卡', href: '/cards/no-spicy-no-cilantro/' },
    ],
    relatedEntities: [
      { label: '成都城市与茶馆指南', href: '/cities/chengdu/', tag: '城市' },
      { label: '北京老字号与胡同风味', href: '/cities/beijing/', tag: '城市' },
    ],
    galleryItems: [
      {
        kicker: '绿茶与乌龙',
        title: '西湖龙井与武夷岩茶',
        chineseName: '西湖龙井 · 武夷大红袍',
        copyTerm: '杭州梅家坞 龙井茶',
        summary: '不发酵的明前炒青绿茶鲜爽回甘，对比半发酵炭焙乌龙自带矿物质「岩韵」，是体验中国茶艺的最佳起点。',
        image: '/images/tea.webp',
      },
      {
        kicker: '川菜与早茶',
        title: '巴蜀二十四味与广式一盅两件',
        chineseName: '川菜麻辣 · 广式早茶',
        copyTerm: '成都鹤鸣茶社',
        summary: '拆解川菜超越辣度的鱼香、怪味、糊辣复合味型，以及广府早茶「叩指礼」与点心下单节奏。',
        image: '/images/food.webp',
        href: '/cities/chengdu/',
      },
      {
        kicker: '江南时令',
        title: '淮扬刀工与稻米风物',
        chineseName: '淮扬菜 · 江南时鲜',
        copyTerm: '扬州趣园茶社',
        summary: '讲求「不时不食」与清鲜本味，极少重油重辣，非常适合首次来华且偏爱清淡口味的国际访客。',
        image: '/images/rice.webp',
      },
      {
        kicker: '市井茶馆',
        title: '成都竹椅盖碗茶与慢生活',
        chineseName: '人民公园鹤鸣茶社',
        copyTerm: '人民公园 鹤鸣茶社',
        summary: '花 ¥20 点一杯茉莉花茶或竹叶青，坐在百年竹椅里听采耳响钳与邻桌龙门阵，感受最松弛的中国午后。',
        image: '/images/chengdu.webp',
        href: '/cities/chengdu/',
      },
    ],
    pulse: [
      {
        status: 'worked',
        context: '杭州梅家坞 · 清明新茶季',
        detail: '直接用高德搜中文茶农店名，免费品鉴三泡后再决定是否购买散装春茶。',
        ago: '6 小时前',
      },
      {
        status: 'worked',
        context: '成都人民公园 · 鹤鸣茶社',
        detail: '支持支付宝扫码点茶，早 09:00 前到座无需排队。',
        ago: '1 天前',
      },
    ],
  },
};

export function localizeGuide(guide: GuideDefinition, locale: Locale): GuideDefinition {
  if (locale !== 'zh') return guide;
  const overlay = GUIDE_ZH_OVERLAYS[guide.slug];
  if (!overlay) return guide;
  return {
    ...guide,
    ...overlay,
  };
}
