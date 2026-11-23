/**
 * Simplified Chinese localization overlays for flagship guides (/zh/guides/[slug]/)
 * Preserves English source in guides.ts while rendering 100% native Simplified Chinese on /zh/*
 */
import type { Locale } from '@i18n/ui';
import type { GuideDefinition } from './guides';

type GuideZhOverlay = Partial<
  Pick<
    GuideDefinition,
    'hardFacts' | 'matrixRows' | 'steps' | 'stackLink' | 'directTools' | 'relatedEntities' | 'pulse'
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
