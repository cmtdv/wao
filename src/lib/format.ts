const LONG_DATE = new Intl.DateTimeFormat('en', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

const SHORT_DATE = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatLongDate(date: Date | null | undefined): string | null {
  return date ? LONG_DATE.format(date) : null;
}

export function formatShortDate(date: Date | null | undefined): string | null {
  return date ? SHORT_DATE.format(date) : null;
}

export function cleanSearchQuery(raw: string | null): string {
  return (raw || '').replace(/\p{Cc}/gu, ' ').trim().slice(0, 200);
}

export function postPath(slugOrId: string): string {
  return `/posts/${encodeURIComponent(slugOrId)}/`;
}

export function pagePath(slugOrId: string): string {
  return `/pages/${encodeURIComponent(slugOrId)}/`;
}

export function categoryPath(slug: string): string {
  return `/category/${encodeURIComponent(slug)}/`;
}

export function tagPath(slug: string): string {
  return `/tag/${encodeURIComponent(slug)}/`;
}

/** Map ChinaWao 12x97 category/subtopic slugs to contemporary Chinese cultural line icons. */
export function topicIconName(slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes('rail') || s.includes('train') || s.includes('transport') || s.includes('driver')) {
    return 'topic-rail';
  }
  if (s.includes('visit') || s.includes('visa') || s.includes('arrival') || s.includes('accommodat') || s.includes('pay') || s.includes('customs') || s.includes('travel')) {
    return 'topic-visit';
  }
  if (s.includes('geo') || s.includes('cit') || s.includes('town') || s.includes('wonder') || s.includes('province') || s.includes('panda') || s.includes('walk')) {
    return 'topic-geography';
  }
  if (s.includes('hist') || s.includes('herit') || s.includes('arch') || s.includes('museum') || s.includes('dynast') || s.includes('temple') || s.includes('philos')) {
    return 'topic-history';
  }
  if (s.includes('food') || s.includes('tea') || s.includes('cuisine') || s.includes('hotpot') || s.includes('drink') || s.includes('dining')) {
    return 'topic-tea';
  }
  if (s.includes('life') || s.includes('craft') || s.includes('art') || s.includes('tcm') || s.includes('spa') || s.includes('cinema') || s.includes('music')) {
    return 'topic-lifestyle';
  }
  return 'topic-journal';
}

export function topicPreviewMedia(
  slug: string,
  locale: 'en' | 'zh' = 'en',
): { src: string; alt: string; caption: string } {
  const s = slug.toLowerCase();
  const zh = locale === 'zh';
  if (s.includes('visit') || s.includes('rail') || s.includes('visa') || s.includes('pay') || s.includes('accommodat')) {
    return {
      src: '/images/rail.webp',
      alt: zh ? '停靠在中国铁路枢纽站台的两列复兴号高铁动车组' : 'Two Fuxing high-speed trains at a Chinese railway hub',
      caption: zh ? '来华旅行 · 高铁与出行实录' : 'Visit China · Rail & Logistics',
    };
  }
  if (s.includes('panda')) {
    return {
      src: '/images/chengdu.webp',
      alt: zh ? '四川竹林中休憩的大熊猫' : 'Giant panda resting amid bamboo in Sichuan',
      caption: zh ? '地理版图 · 熊猫生态' : 'Geography · Pandas & Wildlife',
    };
  }
  if (s.includes('geo') || s.includes('town') || s.includes('cit') || s.includes('wonder')) {
    return {
      src: '/images/town.webp',
      alt: zh ? '江南水乡古镇的石拱桥与临水民居' : 'Stone bridges and canal houses in a Jiangnan water town',
      caption: zh ? '地理版图 · 地域风貌与古镇' : 'Geography · Regions & Towns',
    };
  }
  if (s.includes('hist') || s.includes('arch') || s.includes('herit') || s.includes('museum')) {
    return {
      src: '/images/beijing.webp',
      alt: zh ? '晨光映照下的北京故宫古建屋脊' : 'Morning light across Beijing historic palace roofs',
      caption: zh ? '历史文脉 · 古建园林与世界遗产' : 'History · Architecture & Heritage',
    };
  }
  if (s.includes('cuisine') || s.includes('hotpot')) {
    return {
      src: '/images/food.webp',
      alt: zh ? '热气腾腾的中国地方风味粉面' : 'Steaming bowls of regional Chinese noodles',
      caption: zh ? '饮食茶酒 · 地域风味厨房' : 'Food & Tea · Regional Kitchens',
    };
  }
  if (s.includes('food') || s.includes('tea')) {
    return {
      src: '/images/tea.webp',
      alt: zh ? '杭州层叠起伏的龙井茶园山坡' : 'Longjing green tea hills in Hangzhou',
      caption: zh ? '饮食茶酒 · 六大茶类与饮食传统' : 'Food & Tea · Culinary Traditions',
    };
  }
  if (s.includes('tech') || s.includes('ev') || s.includes('super-app')) {
    return {
      src: '/images/technology.webp',
      alt: zh ? '当代中国城市交通与智能电动汽车' : 'Modern urban transit and electric vehicles in China',
      caption: zh ? '科技数字 · 智能出行与数字生态' : 'Tech & Digital · Smart Mobility',
    };
  }
  if (s.includes('econ') || s.includes('agri') || s.includes('belt')) {
    return {
      src: '/images/rice.webp',
      alt: zh ? '滇南层层叠叠的山地水稻梯田' : 'Terraced mountain rice fields in southern Yunnan',
      caption: zh ? '经济基建 · 产业与农耕丰收' : 'Economy · Infrastructure & Harvest',
    };
  }
  if (s.includes('busi') || s.includes('trade')) {
    return {
      src: '/images/river.webp',
      alt: zh ? '中国南方云雾缭绕的江河峡谷梯田' : 'Mist over terraced river gorges in southern China',
      caption: zh ? '商务采购 · 外贸与源头寻源' : 'Business · Trade & Sourcing',
    };
  }
  if (s.includes('life') || s.includes('craft') || s.includes('art')) {
    return {
      src: '/images/craft.webp',
      alt: zh ? '景德镇匠人手工为瓷碗施釉' : 'Artisan glazing porcelain bowls in Jingdezhen',
      caption: zh ? '当代生活 · 器物工艺与非遗' : 'Lifestyle · Contemporary Craft',
    };
  }
  return {
    src: '/images/hero.webp',
    alt: zh ? '桂林阳朔漓江喀斯特峰林日出' : 'Sunrise over the Li River limestone peaks in Yangshuo',
    caption: zh ? 'ChinaWao · 田野志刊' : 'ChinaWao · Field Journal',
  };
}
