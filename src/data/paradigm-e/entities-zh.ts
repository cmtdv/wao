import type { EntityProfile } from './entities';

interface EntityZhOverride {
  tier?: string;
  quickSpecs?: { label: string; value: string; mono?: boolean }[];
  whatNobodyTellsYou?: string;
  checklist?: string[];
  alternatives?: { name: string; verdict: string; href?: string }[];
  pulseFeed?: { status: 'worked' | 'partial' | 'failed'; context: string; detail: string; ago: string }[];
  attractionData?: {
    wrongStationAlert?: string;
    staminaRating?: string;
    nearbyMesh?: { distance: string; note: string }[];
  };
  cityData?: {
    mashup?: { categoryLabel: string; items: { meta: string }[] }[];
    universities?: { focus: string }[];
    intlHospitals?: { dept: string }[];
  };
}

export const ENTITY_ZH_OVERRIDES: Record<string, EntityZhOverride> = {
  'forbidden-city': {
    tier: '官方一手信源 + 实地核验',
    quickSpecs: [
      { label: '门票价格', value: '旺季 ¥60（4–10 月）· 淡季 ¥40' },
      { label: '放票时间', value: '提前 7 天晚 20:00（北京时间）', mono: true },
      { label: '唯一入口', value: '午门（南门，不可从神武门进入）' },
      { label: '唯一出口', value: '神武门（北门）或东华门' },
      { label: '所属城市', value: '北京（110000）', mono: true },
    ],
    whatNobodyTellsYou: '故宫无现场售票且只能从午门（南门）单向进入；走天安门广场去午门还需单独预约天安门广场。最省时间的走法是打车或地铁到东华门，沿筒子河步道直接走到午门检票口，可避开天安门广场安检长队。',
    checklist: [
      '提前 7 天晚 20:00 在官方预约站（bookingticket.dpm.org.cn）下单，外籍游客可直接用英文邮箱通道预约。',
      '务必携带预约时使用的护照或身份证原件，现场直接刷证件入园，无需换纸质票。',
      '强烈建议顺手加购 ¥10 珍宝馆与钟表馆，是宫内展陈最精华的区域。',
    ],
    alternatives: [
      { name: '景山公园（万春亭）', verdict: '出神武门过街即达，¥2 俯瞰故宫全景与中轴线日落', href: '/cities/beijing/' },
      { name: '慕田峪长城', verdict: '北京次日经典搭配，比八达岭人少且可滑道下山', href: '/attractions/mutianyu-great-wall/' },
    ],
    pulseFeed: [
      { status: 'worked', context: '英国游客 · 英文官网预约', detail: '提前 7 天在英文站顺利订票，按指引从东华门绕行直接进午门，完全避开了天安门广场排队。', ago: '1 天前' },
    ],
    attractionData: {
      wrongStationAlert: '切勿直接打车定位「天安门」（周边禁停限行）。请将高德/滴滴落客点设为「东华门」或乘地铁至王府井站 C 口步行前往。',
      staminaRating: '中等 · 全程平路石板约 1.2–1.6 万步（3.5–5 小时）',
      nearbyMesh: [
        { distance: '神武门北 300 米', note: '门票 ¥2 · 拍摄故宫金色屋顶全景与中轴线日落最佳机位。' },
        { distance: '东华门外 500 米', note: '建议出园前 60 分钟在大众点评提前取号，免去现场久等。' },
        { distance: '东北方向 1.6 公里', note: '持证件免费预约参观 · 周一闭馆。' },
        { distance: '向东 1.4 公里', note: '支持离境退税 2.0 市内「即买即退」专柜。' },
      ],
    },
  },

  'canton-fair': {
    tier: '官方一手信源 + 实地核验',
    quickSpecs: [
      { label: '春秋展期', value: '春交会 4/15–5/5 · 秋交会 10/15–11/4（分三期）', mono: true },
      { label: '举办展馆', value: '广州琶洲广交会展馆 A / B / C / D 区' },
      { label: '地铁直达', value: '8 号线新港东站（A 区）/ 琶洲站（B、C 区）' },
      { label: '境外采购商证', value: '线上预登记免费办理，跨届长期有效' },
      { label: '所属城市', value: '广州（440100）', mono: true },
    ],
    whatNobodyTellsYou: '千万不要等到开展第一天上午去琶洲展馆现场排长队打印采购商证（高峰常超 90 分钟）。最省心的做法是提前线上预登记，落地广州白云机场（T1/T2）柜台或入住指定合作酒店时免费秒打实体证。',
    checklist: [
      '至少提前 3 天在广交会官网（buyer.cantonfair.org.cn）完成预登记并保存邀请函二维码，免现场制证费。',
      '随身携带护照原件与名片；领到的境外采购商证请妥善保管，后续届次可直接复用无需重办。',
      '琶洲与珠江新城酒店建议提前 60 天以上锁定，或住广州东站沿线兼顾地铁通勤与深港高铁。',
    ],
    alternatives: [
      { name: '广交会买手与验厂工具包', verdict: '含企业信用代码核验、工厂背景排查与跨境支付限额清单', href: '/stacks/canton-fair-buyer-kit/' },
      { name: '香港 → 广州高铁路线', verdict: '西九龙 47 分钟直达广州南，或直达市中心广州东站', href: '/routes/hong-kong-to-guangzhou/' },
      { name: '深圳城市档案', verdict: '高铁 1 小时南下，串联华强北与珠三角硬件工厂验厂', href: '/cities/shenzhen/' },
    ],
    pulseFeed: [
      { status: 'worked', context: '欧洲采购商 · 第一期', detail: '落地白云机场 T2 航站楼 6 分钟打完采购商证，次日早 09:15 从新港东站直接丝滑进 A 区展馆。', ago: '2 天前' },
    ],
    attractionData: {
      wrongStationAlert: '每天 17:30–19:00 闭馆高峰期，展馆门口网约车严重拥堵。建议先乘地铁 8 号线（新港东/琶洲）坐 1–2 站到客村或珠江新城再叫车。',
      staminaRating: '高强度 · 展馆步行日均 1.8–2.5 万步',
      nearbyMesh: [
        { distance: '距 A 区 120 米', note: '第一期机电与电子家电展区最快入馆口。' },
        { distance: '距 B 区 150 米', note: '地下通道直连 B、C 区办证大厅与中平台。' },
        { distance: '向西 2.1 公里', note: '18:00 闭馆后江边餐饮与外商晚间会面集中区。' },
        { distance: '西北 8.5 公里', note: '前往深圳与香港城际动车的最便捷枢纽站。' },
      ],
    },
  },

  beijing: {
    tier: '官方一手信源 + 实地核验',
    quickSpecs: [
      { label: '行政区划码', value: '110000（直辖市）', mono: true },
      { label: '240h 免签口岸', value: '首都国际机场（PEK）· 大兴国际机场（PKX）' },
      { label: '城市坐标', value: '39.9042°N, 116.4074°E', mono: true },
      { label: '高铁站避坑', value: '7 大火车站（乘车前务必核对具体站名）' },
      { label: '外卡刷地铁', value: '支持境外 Visa / Mastercard 实体卡直拍过闸' },
    ],
    whatNobodyTellsYou: '北京最容易踩的坑是走错火车站——全市有 7 个主要客运站，去八达岭长城的高铁多从「清河站」发车而非北京北站，去上海走「北京南站」，去西安走「北京西站」，打车前务必看清票面站名。',
    checklist: [
      '故宫需提前 7 天晚 20:00 预约；若计划经过天安门广场，需单独预约广场时段。',
      '北京地铁与大兴机场线已支持境外 Visa / Mastercard 芯片卡直接拍卡过闸，无需额外绑码。',
      '游览长城首选慕田峪（人少景美、可坐滑道），除非需要无障碍通道或极限半日往返再选八达岭。',
    ],
    alternatives: [
      { name: '故宫博物院档案', verdict: '提前 7 天放票规则 + 东华门免排队路线 + 1–3km 周边联动', href: '/attractions/forbidden-city/' },
      { name: '慕田峪长城', verdict: '明长城精华段，人流较八达岭少约 60%', href: '/attractions/mutianyu-great-wall/' },
      { name: '北京 → 上海京沪高铁', verdict: '最快 4 小时 18 分市中心直达，门到门优于飞机', href: '/routes/beijing-to-shanghai/' },
    ],
    pulseFeed: [
      { status: 'worked', context: '英国 Mastercard · 北京地铁', detail: '直接拿境外实体非接卡在 1 号线与大兴机场线拍卡进出站，全程零阻碍。', ago: '4 小时前' },
    ],
    cityData: {
      mashup: [
        {
          categoryLabel: '核心地标与长城',
          items: [
            { meta: '提前 7 天预约 · 周一闭馆' },
            { meta: '滑道下山 · 人流较少' },
          ],
        },
        {
          categoryLabel: '老字号烤鸭与国家博物馆',
          items: [
            { meta: '600 年焖炉烤鸭代表' },
            { meta: '免费参观 · 提前 7 天实名预约' },
          ],
        },
      ],
      universities: [
        { focus: 'C9 联盟 · 计算机、建筑与工程学科顶尖' },
        { focus: 'C9 联盟 · 基础理学、法学与燕京学堂' },
      ],
      intlHospitals: [
        { dept: '三甲公立国际医疗部 · 综合诊疗与疑难重症' },
        { dept: '私立国际医院 · 24 小时急诊与商保直付' },
      ],
    },
  },

  shanghai: {
    tier: '官方一手信源 + 实地核验',
    quickSpecs: [
      { label: '行政区划码', value: '310000（直辖市）', mono: true },
      { label: '240h 免签口岸', value: '浦东（PVG）· 虹桥（SHA）· 吴淞口邮轮港' },
      { label: '城市坐标', value: '31.2304°N, 121.4737°E', mono: true },
      { label: '地铁支付', value: '支付宝乘车码 & 境外 Visa / Mastercard 直拍' },
      { label: '京沪高铁耗时', value: '4 小时 18 分（上海虹桥 → 北京南）' },
    ],
    whatNobodyTellsYou: '上海虹桥火车站与虹桥机场（SHA）无缝衔接，但与浦东国际机场（PVG）相隔整座城市（地铁或打车需 65–80 分钟）。浦东落地转虹桥高铁，至少预留 3.5 小时以上缓冲时间。',
    checklist: [
      '浦东机场 430 km/h 磁悬浮（8 分钟，¥50）仅适合去浦东/龙阳路换乘 2 号线，去浦西市中心直乘地铁或打车更省事。',
      '武康路与安福路历史街区建议上午 10:00 前步行游览，避开午后打卡人潮。',
      '上海博物馆东馆（浦东）青铜与陶瓷馆藏全国一流，持护照免费预约即可入馆。',
    ],
    alternatives: [
      { name: '北京（110000）', verdict: '古都中轴线、故宫与万里长城', href: '/cities/beijing/' },
      { name: '深圳（440300）', verdict: '硬件供应链中心与深港陆路口岸', href: '/cities/shenzhen/' },
      { name: '上海 → 杭州高铁', verdict: '45 分钟直达西湖，最轻松的一日往返', href: '/routes/shanghai-to-hangzhou/' },
    ],
    pulseFeed: [
      { status: 'worked', context: '美国护照 · 浦东机场 T2', detail: '持打印好的东京联程机票走 240 小时过境免签通道，16 分钟顺利通关。', ago: '2 小时前' },
      { status: 'worked', context: 'Wise Visa · 上海地铁 2 号线', detail: '支付宝乘车码在全线闸机扫码顺畅，无延迟。', ago: '9 小时前' },
    ],
    cityData: {
      mashup: [
        {
          categoryLabel: '城市漫步与地标',
          items: [
            { meta: '免费开放 · 19:00–22:00 灯光最佳' },
            { meta: '1930 年代装饰艺术历史风貌与咖啡馆' },
          ],
        },
        {
          categoryLabel: '博物馆与中华老字号',
          items: [
            { meta: '免费预约 · 周二闭馆' },
            { meta: '豫园核心 · 百年小笼包' },
          ],
        },
        {
          categoryLabel: '国际展会与开放数据',
          items: [
            { meta: '虹桥商务区 · 每年 11 月举办' },
            { meta: 'HTTP 200 直连开放数据集' },
          ],
        },
      ],
      universities: [
        { focus: 'C9 联盟 · 人文社科、经济与医学见长' },
        { focus: 'C9 联盟 · 工科、人工智能与安泰经管' },
        { focus: '中美合办 · 博雅教育与数据科学' },
      ],
      intlHospitals: [
        { dept: '三甲公立国际医疗中心 · 神经科与全科体检' },
        { dept: '私立国际医院 · 24 小时急诊与商保直付' },
      ],
    },
  },
};

export function localizeEntity(entity: EntityProfile, locale: 'en' | 'zh'): EntityProfile {
  if (locale !== 'zh') return entity;
  const ov = ENTITY_ZH_OVERRIDES[entity.slug];
  if (!ov) return entity;

  return {
    ...entity,
    tier: ov.tier ?? entity.tier,
    quickSpecs: ov.quickSpecs ?? entity.quickSpecs,
    whatNobodyTellsYou: ov.whatNobodyTellsYou ?? entity.whatNobodyTellsYou,
    checklist: ov.checklist ?? entity.checklist,
    alternatives: ov.alternatives ?? entity.alternatives,
    pulseFeed: ov.pulseFeed ?? entity.pulseFeed,
    attractionData: entity.attractionData
      ? {
          ...entity.attractionData,
          wrongStationAlert: ov.attractionData?.wrongStationAlert ?? entity.attractionData.wrongStationAlert,
          staminaRating: ov.attractionData?.staminaRating ?? entity.attractionData.staminaRating,
          nearbyMesh: entity.attractionData.nearbyMesh.map((item, idx) => ({
            ...item,
            distance: ov.attractionData?.nearbyMesh?.[idx]?.distance ?? item.distance,
            note: ov.attractionData?.nearbyMesh?.[idx]?.note ?? item.note,
          })),
        }
      : undefined,
    cityData: entity.cityData
      ? {
          ...entity.cityData,
          mashup: entity.cityData.mashup.map((sec, sIdx) => ({
            ...sec,
            categoryLabel: ov.cityData?.mashup?.[sIdx]?.categoryLabel ?? sec.categoryLabel,
            items: sec.items.map((item, iIdx) => ({
              ...item,
              meta: ov.cityData?.mashup?.[sIdx]?.items?.[iIdx]?.meta ?? item.meta,
            })),
          })),
          universities: entity.cityData.universities.map((u, idx) => ({
            ...u,
            focus: ov.cityData?.universities?.[idx]?.focus ?? u.focus,
          })),
          intlHospitals: entity.cityData.intlHospitals.map((h, idx) => ({
            ...h,
            dept: ov.cityData?.intlHospitals?.[idx]?.dept ?? h.dept,
          })),
        }
      : undefined,
  };
}
