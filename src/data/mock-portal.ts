/**
 * Self-contained Mock Portal Data for ChinaWao Specialty Pages
 * - ATLAS_PILLARS: Authoritative 12 x 97 taxonomy map (synced with taxonomy/chinawao-12x97.json)
 * - JOURNEY_STEPS: GOV.UK Step-by-Step inspired 7-step First Trip to China interactive workflow
 * - DIRECTORY_ENTRIES: Sift Directory inspired official public service & open-data registry (sourced from okf/entries/)
 * - VISA_PROFILES & FLASHCARDS: Interactive mock workbenches for Tools 12.1, 12.2 & 12.4
 */

export interface AtlasTopic {
  id: string;
  slug: string;
  navEn: string;
  navZh: string;
  scopeZh: string;
}

export interface AtlasPillar {
  id: string;
  slug: string;
  navEn: string;
  navZh: string;
  icon: string;
  blurb: string;
  children: AtlasTopic[];
}

export const ATLAS_PILLARS: AtlasPillar[] = [
  {
    "id": "1",
    "slug": "geography",
    "navEn": "Geography",
    "navZh": "地理版图",
    "icon": "topic-geography",
    "blurb": "Terrains, 34 provincial divisions, megacity portals, ancient towns, national parks, and giant panda habitats.",
    "children": [
      {
        "id": "1.1",
        "slug": "china-at-a-glance",
        "navEn": "China at a Glance",
        "navZh": "国家概览",
        "scopeZh": "国家名片、单一时区(UTC+8)、货币与法定节假日调休"
      },
      {
        "id": "1.2",
        "slug": "physical-geography",
        "navEn": "Physical Geography",
        "navZh": "地形气候",
        "scopeZh": "三级地形阶梯、大江大河与南北气候差异"
      },
      {
        "id": "1.3",
        "slug": "34-provinces",
        "navEn": "34 Provinces",
        "navZh": "省级政区",
        "scopeZh": "34个省级行政区全景档案（省/自治区/直辖市/特区）"
      },
      {
        "id": "1.4",
        "slug": "major-cities",
        "navEn": "Major Cities",
        "navZh": "重点城市",
        "scopeZh": "一线/新一线城市门户与四大国家级城市群"
      },
      {
        "id": "1.5",
        "slug": "cultural-regions",
        "navEn": "Cultural Regions",
        "navZh": "地域文化",
        "scopeZh": "地域文化版图（江南/巴蜀/岭南/东北/西北）与丝路走廊"
      },
      {
        "id": "1.6",
        "slug": "city-walks",
        "navEn": "City Walks",
        "navZh": "街区胡同",
        "scopeZh": "城市历史街区、胡同里弄与在地漫步路线"
      },
      {
        "id": "1.7",
        "slug": "ancient-towns",
        "navEn": "Ancient Towns",
        "navZh": "古镇古村",
        "scopeZh": "江南水乡古镇、传统古村落与特色民居"
      },
      {
        "id": "1.8",
        "slug": "natural-wonders",
        "navEn": "Natural Wonders",
        "navZh": "山河奇观",
        "scopeZh": "名山大川、五大国家公园与喀斯特丹霞奇观"
      },
      {
        "id": "1.9",
        "slug": "pandas-wildlife",
        "navEn": "Pandas & Wildlife",
        "navZh": "熊猫生态",
        "scopeZh": "大熊猫各大基地、珍稀野生动物与特有植物"
      }
    ]
  },
  {
    "id": "2",
    "slug": "history",
    "navEn": "History",
    "navZh": "历史文脉",
    "icon": "topic-history",
    "blurb": "Dynastic arcs, 59 UNESCO sites, national museums, classical philosophy, timber architecture, and seasonal festivals.",
    "children": [
      {
        "id": "2.1",
        "slug": "imperial-dynasties",
        "navEn": "Imperial Dynasties",
        "navZh": "五千年史",
        "scopeZh": "五千年文明起源与历代王朝更迭通史"
      },
      {
        "id": "2.2",
        "slug": "modern-china",
        "navEn": "Modern China",
        "navZh": "近现代史",
        "scopeZh": "近现代中国转型与1978改革开放巨变历程"
      },
      {
        "id": "2.3",
        "slug": "world-heritage",
        "navEn": "World Heritage",
        "navZh": "世界遗产",
        "scopeZh": "59项世界遗产名录与国家级历史地标全集"
      },
      {
        "id": "2.4",
        "slug": "national-museums",
        "navEn": "National Museums",
        "navZh": "博物国宝",
        "scopeZh": "国家一级博物馆导览与传世国宝文物图鉴"
      },
      {
        "id": "2.5",
        "slug": "classical-philosophy",
        "navEn": "Classical Philosophy",
        "navZh": "古典哲学",
        "scopeZh": "儒家、道家、兵家智慧与中国人价值观底座"
      },
      {
        "id": "2.6",
        "slug": "religions-temples",
        "navEn": "Religions & Temples",
        "navZh": "宗教寺观",
        "scopeZh": "佛道宗教、妈祖关公等民间信仰与寺观参观礼仪"
      },
      {
        "id": "2.7",
        "slug": "ancient-architecture",
        "navEn": "Ancient Architecture",
        "navZh": "古建园林",
        "scopeZh": "中国古建筑榫卯木构、屋顶等级与江南古典园林"
      },
      {
        "id": "2.8",
        "slug": "56-ethnic-groups",
        "navEn": "56 Ethnic Groups",
        "navZh": "多元民族",
        "scopeZh": "56个民族多元文化、服饰建筑与原生态节庆"
      },
      {
        "id": "2.9",
        "slug": "festivals-zodiac",
        "navEn": "Festivals & Zodiac",
        "navZh": "传统节庆",
        "scopeZh": "传统大节（春节/中秋/端午）、二十四节气与十二生肖"
      },
      {
        "id": "2.10",
        "slug": "chinese-diaspora",
        "navEn": "Chinese Diaspora",
        "navZh": "侨乡寻根",
        "scopeZh": "海外华人华侨史、广东福建侨乡与族谱寻根实操"
      }
    ]
  },
  {
    "id": "3",
    "slug": "society-law",
    "navEn": "Society & Law",
    "navZh": "制度社会",
    "icon": "topic-journal",
    "blurb": "Governance institutions, civil law, education, healthcare, public safety, and everyday social norms.",
    "children": [
      {
        "id": "3.1",
        "slug": "state-governance",
        "navEn": "State Governance",
        "navZh": "国家机构",
        "scopeZh": "国家机构运行机制、国务院部委与五年规划体系"
      },
      {
        "id": "3.2",
        "slug": "admin-divisions",
        "navEn": "Admin Divisions",
        "navZh": "五级政区",
        "scopeZh": "省市县乡村五级行政区划体制与特区制度"
      },
      {
        "id": "3.3",
        "slug": "legal-system",
        "navEn": "Legal System",
        "navZh": "法律体系",
        "scopeZh": "法律体系、《民法典》、法院制度与西方常见误解澄清"
      },
      {
        "id": "3.4",
        "slug": "foreign-relations",
        "navEn": "Foreign Relations",
        "navZh": "外交使领",
        "scopeZh": "外交布局、国际条约网络与驻华使领馆总表"
      },
      {
        "id": "3.5",
        "slug": "demographics",
        "navEn": "Demographics",
        "navZh": "人口家庭",
        "scopeZh": "人口结构变迁、户籍制度改革与当代婚恋家庭观"
      },
      {
        "id": "3.6",
        "slug": "education-gaokao",
        "navEn": "Education & Gaokao",
        "navZh": "教育高校",
        "scopeZh": "国民教育全学制、高考选拔机制与双一流大学图谱"
      },
      {
        "id": "3.7",
        "slug": "public-healthcare",
        "navEn": "Public Healthcare",
        "navZh": "医疗社保",
        "scopeZh": "医疗卫生体制、公立三甲医院效率与“五险一金”"
      },
      {
        "id": "3.8",
        "slug": "public-safety",
        "navEn": "Public Safety",
        "navZh": "社会治安",
        "scopeZh": "社会治安真实体验、枪支毒品零容忍与公共秩序规则"
      },
      {
        "id": "3.9",
        "slug": "guanxi-mianzi",
        "navEn": "Guanxi & Mianzi",
        "navZh": "人情面子",
        "scopeZh": "读懂中国人情社会：面子、关系、客套话与送礼禁忌"
      },
      {
        "id": "3.10",
        "slug": "local-communities",
        "navEn": "Local Communities",
        "navZh": "基层公益",
        "scopeZh": "基层社区治理、公益慈善组织与无障碍环境建设"
      }
    ]
  },
  {
    "id": "4",
    "slug": "economy",
    "navEn": "Economy",
    "navZh": "经济基建",
    "icon": "topic-rail",
    "blurb": "Industrial belts, container mega-ports, high-speed rail infrastructure, clean energy, and modern agriculture.",
    "children": [
      {
        "id": "4.1",
        "slug": "macroeconomy",
        "navEn": "Macroeconomy",
        "navZh": "宏观经济",
        "scopeZh": "宏观经济版图、唯一全工业门类体系与万亿GDP城市"
      },
      {
        "id": "4.2",
        "slug": "industrial-belts",
        "navEn": "Industrial Belts",
        "navZh": "百大产业",
        "scopeZh": "世界工厂真相：中国百大专业镇与源头产业带地图"
      },
      {
        "id": "4.3",
        "slug": "trade-mega-ports",
        "navEn": "Trade & Mega-Ports",
        "navZh": "外贸大港",
        "scopeZh": "对外贸易、无人集装箱大港、中欧班列与海南自贸港"
      },
      {
        "id": "4.4",
        "slug": "finance-rmb",
        "navEn": "Finance & RMB",
        "navZh": "金融货币",
        "scopeZh": "银行金融体系、人民币跨境支付与资本市场架构"
      },
      {
        "id": "4.5",
        "slug": "mega-infrastructure",
        "navEn": "Mega-Infrastructure",
        "navZh": "超级基建",
        "scopeZh": "4.5万公里高铁网、世界级跨海峡谷大桥与机场群"
      },
      {
        "id": "4.6",
        "slug": "clean-energy",
        "navEn": "Clean Energy",
        "navZh": "清洁能源",
        "scopeZh": "光伏风电绿能走廊、特高压电网与跨流域调水治沙"
      },
      {
        "id": "4.7",
        "slug": "modern-agriculture",
        "navEn": "Modern Agriculture",
        "navZh": "现代农业",
        "scopeZh": "现代农业科技、大国粮仓与2,500+地理标志风物"
      },
      {
        "id": "4.8",
        "slug": "green-transition",
        "navEn": "Green Transition",
        "navZh": "双碳生态",
        "scopeZh": "大气与水生态治理历程、“双碳”目标与循环经济"
      }
    ]
  },
  {
    "id": "5",
    "slug": "tech-digital",
    "navEn": "Tech & Digital",
    "navZh": "科技数字",
    "icon": "topic-lifestyle",
    "blurb": "Space science, AI robotics, smart electric vehicles, national GB standards, and super-app daily infrastructure.",
    "children": [
      {
        "id": "5.1",
        "slug": "space-big-science",
        "navEn": "Space & Big Science",
        "navZh": "航天科学",
        "scopeZh": "天宫空间站、嫦娥探月、北斗与国家大科学装置"
      },
      {
        "id": "5.2",
        "slug": "ai-robotics",
        "navEn": "AI & Robotics",
        "navZh": "人工智能",
        "scopeZh": "开源大模型、人形机器人集群与无人机低空经济"
      },
      {
        "id": "5.3",
        "slug": "smart-evs",
        "navEn": "Smart EVs",
        "navZh": "智能电车",
        "scopeZh": "智能新能源汽车、3分钟换电站与无人驾驶出租车"
      },
      {
        "id": "5.4",
        "slug": "biotech-gb-standards",
        "navEn": "Biotech & GB Standards",
        "navZh": "医药国标",
        "scopeZh": "创新药出海、高端医疗装备与中国国家标准(GB)体系"
      },
      {
        "id": "5.5",
        "slug": "super-apps",
        "navEn": "Super-Apps",
        "navZh": "超级应用",
        "scopeZh": "微信/支付宝超级App生态、无现金生活与30分钟万物到家"
      },
      {
        "id": "5.6",
        "slug": "social-platforms",
        "navEn": "Social Platforms",
        "navZh": "社交直播",
        "scopeZh": "中国社交平台矩阵（抖音/小红书/B站）与直播电商奇观"
      },
      {
        "id": "5.7",
        "slug": "media-data-laws",
        "navEn": "Media & Data Laws",
        "navZh": "传媒数据",
        "scopeZh": "主流新闻出版传媒、网络空间治理与数据安全合规"
      }
    ]
  },
  {
    "id": "6",
    "slug": "food-tea",
    "navEn": "Food & Tea",
    "navZh": "饮食茶酒",
    "icon": "topic-tea",
    "blurb": "Eight classical cuisines, regional street food, tea botany, baijiu traditions, dining etiquette, and dietary safety.",
    "children": [
      {
        "id": "6.1",
        "slug": "8-great-cuisines",
        "navEn": "8 Great Cuisines",
        "navZh": "八大菜系",
        "scopeZh": "正宗中餐全景：八大菜系与34省市风味版图"
      },
      {
        "id": "6.2",
        "slug": "street-food-hotpot",
        "navEn": "Street Food & Hotpot",
        "navZh": "火锅粉面",
        "scopeZh": "六大火锅流派、中华粉面宇宙、广式早茶与街头夜市"
      },
      {
        "id": "6.3",
        "slug": "culinary-craft",
        "navEn": "Culinary Craft",
        "navZh": "烹饪调味",
        "scopeZh": "中餐24种烹饪技法、“镬气”科学与调味香料辞典"
      },
      {
        "id": "6.4",
        "slug": "chinese-tea",
        "navEn": "Chinese Tea",
        "navZh": "六大茶类",
        "scopeZh": "中国六大茶类科学图谱、十大名茶与工夫茶道"
      },
      {
        "id": "6.5",
        "slug": "baijiu-drinks",
        "navEn": "Baijiu & Drinks",
        "navZh": "白酒茶饮",
        "scopeZh": "中国白酒香型入门、绍兴黄酒、宁夏葡萄酒与新茶饮浪潮"
      },
      {
        "id": "6.6",
        "slug": "dining-etiquette",
        "navEn": "Dining Etiquette",
        "navZh": "合餐老字号",
        "scopeZh": "中式合餐转盘礼仪、手机扫码点餐与1,422家中华老字号"
      },
      {
        "id": "6.7",
        "slug": "dietary-needs",
        "navEn": "Dietary Needs",
        "navZh": "过敏忌口",
        "scopeZh": "严重食物过敏（防花生油）、乳糜泻无麸质、纯素与清真指南"
      }
    ]
  },
  {
    "id": "7",
    "slug": "language-arts",
    "navEn": "Language & Arts",
    "navZh": "语言艺术",
    "icon": "book",
    "blurb": "Hanzi logic, Mandarin learning paths, literature, calligraphy, opera, contemporary art, and heritage crafts.",
    "children": [
      {
        "id": "7.1",
        "slug": "chinese-language",
        "navEn": "Chinese Language",
        "navZh": "汉字方言",
        "scopeZh": "汉字造字逻辑、普通话拼音四声、简繁对照与十大方言地图"
      },
      {
        "id": "7.2",
        "slug": "learn-mandarin",
        "navEn": "Learn Mandarin",
        "navZh": "学中文指南",
        "scopeZh": "外国人学中文高效路线、神器工具、HSK 3.0与非遗工坊"
      },
      {
        "id": "7.3",
        "slug": "chinese-literature",
        "navEn": "Chinese Literature",
        "navZh": "诗词名著",
        "scopeZh": "唐诗宋词意象、四大名著宇宙与《三体》科幻及网文出海"
      },
      {
        "id": "7.4",
        "slug": "calligraphy-ink",
        "navEn": "Calligraphy & Ink",
        "navZh": "书法水墨",
        "scopeZh": "汉字书法篆刻与水墨山水“留白”散点透视美学"
      },
      {
        "id": "7.5",
        "slug": "music-opera",
        "navEn": "Music & Opera",
        "navZh": "民乐戏曲",
        "scopeZh": "古琴编钟传统器乐与京剧、昆曲、川剧戏曲曲艺"
      },
      {
        "id": "7.6",
        "slug": "modern-arts",
        "navEn": "Modern Arts",
        "navZh": "当代艺建",
        "scopeZh": "当代先锋艺术生态、现代设计美学与当代地标建筑"
      },
      {
        "id": "7.7",
        "slug": "heritage-crafts",
        "navEn": "Heritage Crafts",
        "navZh": "瓷绸非遗",
        "scopeZh": "景德镇瓷器、丝绸四大名绣、和田玉文化与非遗百工"
      }
    ]
  },
  {
    "id": "8",
    "slug": "lifestyle",
    "navEn": "Lifestyle",
    "navZh": "当代生活",
    "icon": "topic-lifestyle",
    "blurb": "Everyday neighborhood rhythms, cinema, gaming, nightlife, TCM wellness, bathhouses, and martial arts.",
    "children": [
      {
        "id": "8.1",
        "slug": "everyday-life",
        "navEn": "Everyday Life",
        "navZh": "市井日常",
        "scopeZh": "真实中国百姓的一天：小区生活、晨练公园与菜市场"
      },
      {
        "id": "8.2",
        "slug": "cinema-c-dramas",
        "navEn": "Cinema & C-Dramas",
        "navZh": "电影陆剧",
        "scopeZh": "华语电影脉络、全球热播陆剧(C-Drama)与横店影视城"
      },
      {
        "id": "8.3",
        "slug": "gaming-donghua",
        "navEn": "Gaming & Donghua",
        "navZh": "游戏国漫",
        "scopeZh": "国产游戏崛起（《黑神话：悟空》古建巡礼）、国漫与二次元"
      },
      {
        "id": "8.4",
        "slug": "youth-nightlife",
        "navEn": "Youth & Nightlife",
        "navZh": "演出夜生活",
        "scopeZh": "强实名演唱会、城市夜生活、汉服新中式穿搭与国潮设计"
      },
      {
        "id": "8.5",
        "slug": "tcm-wellness",
        "navEn": "TCM Wellness",
        "navZh": "中医养生",
        "scopeZh": "中医文化解码：针灸推拿拔罐、药食同源与“多喝热水”"
      },
      {
        "id": "8.6",
        "slug": "bathhouses-spas",
        "navEn": "Bathhouses & Spas",
        "navZh": "汤泉头疗",
        "scopeZh": "24小时豪华汤泉洗浴中心、中式头疗采耳与足道文化"
      },
      {
        "id": "8.7",
        "slug": "martial-arts-sports",
        "navEn": "Martial Arts & Sports",
        "navZh": "武术休闲",
        "scopeZh": "中华武术、太极八段锦、国民麻将速成与当代体育热潮"
      }
    ]
  },
  {
    "id": "9",
    "slug": "visit-china",
    "navEn": "Visit China",
    "navZh": "来华旅行",
    "icon": "topic-visit",
    "blurb": "Actionable inbound essentials—visas, mobile payments, eSIM, 12306 rail, hotels, tax refunds, and customs rules.",
    "children": [
      {
        "id": "9.1",
        "slug": "visas-entry",
        "navEn": "Visas & Entry",
        "navZh": "签证免签",
        "scopeZh": "签证办理、50国单方面免签与57国240小时过境免签手册"
      },
      {
        "id": "9.2",
        "slug": "mobile-payments",
        "navEn": "Mobile Payments",
        "navZh": "移动支付",
        "scopeZh": "支付宝/微信绑海外银行卡、200元免手续费红线与现金"
      },
      {
        "id": "9.3",
        "slug": "internet-apps",
        "navEn": "Internet & Apps",
        "navZh": "联网与App",
        "scopeZh": "旅行eSIM、+86手机卡与地图打车翻译必备英文App配置"
      },
      {
        "id": "9.4",
        "slug": "high-speed-rail",
        "navEn": "High-Speed Rail",
        "navZh": "高铁出行",
        "scopeZh": "高铁12306抢票刷护照进站、同名车站防走错与民航地铁"
      },
      {
        "id": "9.5",
        "slug": "accommodation",
        "navEn": "Accommodation",
        "navZh": "酒店住宿",
        "scopeZh": "外宾订酒店技巧、禁拒客法规与24h临时住宿登记"
      },
      {
        "id": "9.6",
        "slug": "ticket-booking",
        "navEn": "Ticket Booking",
        "navZh": "景区预约",
        "scopeZh": "故宫/国博强实名预约抢票攻略、免预约清单与入藏函办理"
      },
      {
        "id": "9.7",
        "slug": "trip-itineraries",
        "navEn": "Trip Itineraries",
        "navZh": "经典路线",
        "scopeZh": "首访7–21天黄金路线、机场转机6–24h快闪与分档预算"
      },
      {
        "id": "9.8",
        "slug": "shopping-tax-free",
        "navEn": "Shopping & Tax-Free",
        "navZh": "购物退税",
        "scopeZh": "特色伴手礼与国货选购、淘宝寄酒店及离境退税“即买即退”"
      },
      {
        "id": "9.9",
        "slug": "customs-rules",
        "navEn": "Customs Rules",
        "navZh": "海关安检",
        "scopeZh": "海关申报、管制处方药红线、充电宝安检、无人机与携宠"
      },
      {
        "id": "9.10",
        "slug": "cross-border-trips",
        "navEn": "Cross-Border Trips",
        "navZh": "港澳台通行",
        "scopeZh": "内地与港澳台在签证、海关、货币、通讯及通行证上的实操衔接"
      },
      {
        "id": "9.11",
        "slug": "travel-safety",
        "navEn": "Travel Safety",
        "navZh": "应急防坑",
        "scopeZh": "经典旅游套路防坑、护照遗失补救、急诊就医与24h热线"
      }
    ]
  },
  {
    "id": "10",
    "slug": "live-study",
    "navEn": "Live & Study",
    "navZh": "留学长居",
    "icon": "topic-visit",
    "blurb": "Long-term study, A/B/C work permits, renting apartments, banking & tax rules, driving licenses, and family life.",
    "children": [
      {
        "id": "10.1",
        "slug": "study-in-china",
        "navEn": "Study in China",
        "navZh": "来华留学",
        "scopeZh": "中国高校留学申请、CSC政府奖学金、X1/X2签证与校园生活"
      },
      {
        "id": "10.2",
        "slug": "work-permits",
        "navEn": "Work Permits",
        "navZh": "工作许可",
        "scopeZh": "外国人来华工作许可(A/B/C分级)、Z签海牙认证与劳动法"
      },
      {
        "id": "10.3",
        "slug": "housing-renting",
        "navEn": "Housing & Renting",
        "navZh": "租房购房",
        "scopeZh": "长租公寓选房防坑、标准租赁合同条款与外籍购房限购规则"
      },
      {
        "id": "10.4",
        "slug": "banking-tax",
        "navEn": "Banking & Tax",
        "navZh": "银行个税",
        "scopeZh": "开立中国I类银行卡、外籍个税(183天/六年规则)与工资购汇"
      },
      {
        "id": "10.5",
        "slug": "drivers-license",
        "navEn": "Driver's License",
        "navZh": "驾照出行",
        "scopeZh": "免考换领临时驾照、考科目一换6年正式驾照与电动车上牌"
      },
      {
        "id": "10.6",
        "slug": "expat-family-life",
        "navEn": "Expat Family Life",
        "navZh": "学校永居",
        "scopeZh": "外籍子女学校择校、高端医疗直付保险与新版“五星卡”永居"
      }
    ]
  },
  {
    "id": "11",
    "slug": "business",
    "navEn": "Business",
    "navZh": "商务采购",
    "icon": "topic-journal",
    "blurb": "Business etiquette, company chops, trade fairs, factory sourcing, USCC due diligence, compliance, and WFOE setup.",
    "children": [
      {
        "id": "11.1",
        "slug": "business-etiquette",
        "navEn": "Business Etiquette",
        "navZh": "商务公章",
        "scopeZh": "中国商务谈判逻辑、微信办公习惯与“企业公章”法律效力"
      },
      {
        "id": "11.2",
        "slug": "trade-fairs",
        "navEn": "Trade Fairs",
        "navZh": "广交会验厂",
        "scopeZh": "广交会/进博会采购全攻略、涉外展会真伪查询与驻厂验货"
      },
      {
        "id": "11.3",
        "slug": "factory-sourcing",
        "navEn": "Factory Sourcing",
        "navZh": "源头采购",
        "scopeZh": "源头工厂 vs 贸易商甄别、1688/义乌采购、质检与跨境物流"
      },
      {
        "id": "11.4",
        "slug": "due-diligence",
        "navEn": "Due Diligence",
        "navZh": "供应商尽调",
        "scopeZh": "供应商背景自助尽调：18位统一社会信用代码与工商司法核验"
      },
      {
        "id": "11.5",
        "slug": "product-compliance",
        "navEn": "Product Compliance",
        "navZh": "国标管制",
        "scopeZh": "英文版国标(GB)与3C认证核验、商标NNN协议与两用物项管制"
      },
      {
        "id": "11.6",
        "slug": "wfoe-setup",
        "navEn": "WFOE Setup",
        "navZh": "外企设立",
        "scopeZh": "外商独资企业(WFOE)设立、31省市园区政策差异与跨境结算"
      }
    ]
  },
  {
    "id": "12",
    "slug": "tools-data",
    "navEn": "Tools & Data",
    "navZh": "实用工具",
    "icon": "list",
    "blurb": "Interactive eligibility checkers, bilingual taxi & SOS flashcards, open government databases, and live field reports.",
    "children": [
      {
        "id": "12.1",
        "slug": "visa-checker",
        "navEn": "Visa Checker",
        "navZh": "免签判定器",
        "scopeZh": "免签与240小时过境免签资格及停留期判定器"
      },
      {
        "id": "12.2",
        "slug": "station-taxi-cards",
        "navEn": "Station & Taxi Cards",
        "navZh": "车站字卡",
        "scopeZh": "同名高铁站/机场防走错查询与全屏出租车司机中文大字卡"
      },
      {
        "id": "12.3",
        "slug": "ticket-calendar",
        "navEn": "Ticket Calendar",
        "navZh": "放票日历",
        "scopeZh": "高铁/故宫放票跨时区换算器与法定调休节假日拥挤度日历"
      },
      {
        "id": "12.4",
        "slug": "medical-sos-cards",
        "navEn": "Medical SOS Cards",
        "navZh": "急救字卡",
        "scopeZh": "国标(GB/T 30240)严重过敏、无麸质、急诊与酒店入住字卡"
      },
      {
        "id": "12.5",
        "slug": "budget-calculator",
        "navEn": "Budget Calculator",
        "navZh": "预算退税算",
        "scopeZh": "36城旅行预算测算、外卡200元免手续费拆单与离境退税计算器"
      },
      {
        "id": "12.6",
        "slug": "tax-points-calc",
        "navEn": "Tax & Points Calc",
        "navZh": "积分个税算",
        "scopeZh": "外籍工作许可A/B/C积分自测器与183天/六年个税天数计算器"
      },
      {
        "id": "12.7",
        "slug": "uscc-gb-matcher",
        "navEn": "USCC & GB Matcher",
        "navZh": "信用国标查",
        "scopeZh": "供应商18位统一社会信用代码核验与英文国标/3C/两用物项匹配器"
      },
      {
        "id": "12.8",
        "slug": "gov-open-data",
        "navEn": "Gov Open Data",
        "navZh": "公开数据库",
        "scopeZh": "中国部委与省市免费公开数据库总导航（848源）与AI MCP接口"
      },
      {
        "id": "12.9",
        "slug": "ground-pulse",
        "navEn": "Ground Pulse",
        "navZh": "现场实测流",
        "scopeZh": "近期现场亲测回报流（Worked/Partial/Failed）、行程复盘与问答"
      }
    ]
  }
];

export interface JourneyStep {
  id: string;
  number: string;
  phase: string;
  title: string;
  summary: string;
  timing: string;
  checklist: string[];
  guideLinks: { label: string; href: string }[];
  officialLink: { label: string; href: string };
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'step-visa',
    number: '01',
    phase: 'Before Departure',
    title: 'Confirm Visa-Free Eligibility or Apply Early',
    summary: 'Check whether your passport qualifies for 30-day unilateral visa-free entry, 240-hour cross-province visa-free transit (Country A -> China -> Country C), or a standard tourist L-visa.',
    timing: '3–6 weeks ahead',
    checklist: [
      'Verify passport validity (at least 6 months remaining and 2 blank visa pages).',
      'If using 240-hour transit, book confirmed onward tickets to a third country or Hong Kong/Macao/Taiwan.',
      'Print hotel confirmations and onward flight itineraries for airline check-in inspection.',
    ],
    guideLinks: [
      { label: '240-Hour Visa-Free Transit Playbook', href: '/posts/240-hour-visa-free-transit-playbook-mock/' },
      { label: 'Run Quick Visa-Free Checker', href: '/tools/#visa-checker' },
    ],
    officialLink: { label: 'NIA 12367 Official Platform', href: 'https://s.nia.gov.cn' },
  },
  {
    id: 'step-pay-net',
    number: '02',
    phase: 'Before Departure',
    title: 'Bind Foreign Cards on Alipay & WeChat Pay + Prep Data',
    summary: 'Install Alipay and WeChat before boarding, complete passport identity verification, link a Visa/Mastercard, and arrange a travel eSIM so your maps and translation work immediately on landing.',
    timing: '1–2 weeks ahead',
    checklist: [
      'Bind at least two international bank cards (e.g., Visa + Mastercard) inside both Alipay and WeChat Pay.',
      'Remember single transactions up to 200 RMB incur 0% international card fee; keep 300–500 RMB backup cash.',
      'Pre-install Amap (English mode) or Apple Maps and download offline Mandarin translation packs.',
    ],
    guideLinks: [
      { label: 'Paying Like a Local: Foreign Cards Guide', href: '/posts/foreign-cards-alipay-wechat-pay-mock/' },
    ],
    officialLink: { label: 'PBOC Official Payment Guide for Foreigners', href: 'http://www.pbc.gov.cn/en/3688006/index.html' },
  },
  {
    id: 'step-rail-tickets',
    number: '03',
    phase: '2 Weeks Ahead',
    title: 'Verify Your Passport on 12306 & Book Anchor Museums',
    summary: 'China Railway tickets release 15 days in advance and flagship landmarks like the Palace Museum require passport real-name reservations 7 days out.',
    timing: '7–15 days ahead',
    checklist: [
      'Create an English account on Railway 12306 and submit passport photo-page verification online.',
      'Double-check exact station names (e.g., Beijing South vs. Beijing West) before booking.',
      'Reserve morning time slots for the Palace Museum, National Museum, or Chengdu Panda Base.',
    ],
    guideLinks: [
      { label: 'Using a Foreign Passport on Railway 12306', href: '/posts/using-a-foreign-passport-on-12306-mock/' },
      { label: 'Sichuan Giant Panda Bases Morning Guide', href: '/posts/sichuan-giant-panda-bases-morning-guide-mock/' },
    ],
    officialLink: { label: 'China Railway 12306 English Portal', href: 'https://www.12306.cn/en/index.html' },
  },
  {
    id: 'step-arrival-card',
    number: '04',
    phase: '48 Hours Before Landing',
    title: 'Complete the Official NIA Online Arrival Card',
    summary: 'Fill out the digital Foreigner Arrival Card before boarding or upon landing at major ports, saving the QR code screenshot for immigration inspection.',
    timing: '24–48 hours before landing',
    checklist: [
      'Prepare your first hotel name, street address in Chinese, and local contact phone number.',
      'Save the generated QR confirmation offline in your phone photo gallery.',
      'Keep physical paper arrival cards as fallback if flying into a smaller regional port.',
    ],
    guideLinks: [
      { label: 'China Arrival Card: Where to Find the Official Form', href: '/posts/china-arrival-card-official-guide-mock/' },
    ],
    officialLink: { label: 'NIA Online Arrival Card System', href: 'https://s.nia.gov.cn/ArrivalCardFillingPC/entry-registation-home' },
  },
  {
    id: 'step-registration',
    number: '05',
    phase: 'First 24 Hours',
    title: 'Complete 24-Hour Accommodation Registration',
    summary: 'Licensed hotels register foreign guests automatically at check-in. If staying at a friend’s apartment or private home, you must register within 24 hours online (in supported cities) or at the local police station.',
    timing: 'Within 24 hours of arrival',
    checklist: [
      'Confirm hotel front desk scans your passport entry stamp on check-in.',
      'For private apartments in Shanghai, submit via the official Self-Help Residence Registration portal.',
      'Save a digital copy of your Registration Form of Temporary Residence.',
    ],
    guideLinks: [
      { label: 'Staying in a Private Home in Shanghai', href: '/posts/staying-in-a-private-home-shanghai-mock/' },
    ],
    officialLink: { label: 'Shanghai Overseas Residence Self-Declaration', href: 'https://gaj.sh.gov.cn/crj/20200604/289b9d687b534df29384a02670ad13e2.html' },
  },
  {
    id: 'step-street-nav',
    number: '06',
    phase: 'On the Ground',
    title: 'Navigate Stations, Taxis & Neighborhood Dining Smoothly',
    summary: 'Scan your physical passport directly at high-speed rail e-gates, keep fullscreen Chinese address cards ready for taxi drivers, and learn twenty core wayfinding characters.',
    timing: 'Daily on the ground',
    checklist: [
      'Carry your physical passport every day—required for rail stations, museums, and major parks.',
      'Bookmark fullscreen Bilingual Show-to-Driver & Allergy SOS Flashcards for offline display.',
      'Tap into metro QR transit passes inside Alipay ("Transport") so you skip ticket machines.',
    ],
    guideLinks: [
      { label: 'Twenty Characters That Unlock Stations & Menus', href: '/posts/decoding-everyday-chinese-street-signs-mock/' },
      { label: 'Open Bilingual Driver & SOS Flashcards', href: '/tools/#flashcards' },
    ],
    officialLink: { label: 'Visit China — State Council Official Portal', href: 'https://english.www.gov.cn/services/visitchina/' },
  },
  {
    id: 'step-departure-tax',
    number: '07',
    phase: 'Before Flying Home',
    title: 'Claim Departure Tax Refund 2.0 & Clear Airport Customs',
    summary: 'Spend 200 RMB+ in a single tax-free store on the same day to qualify for an 11% VAT refund—either instantly in-store ("Ji Mai Ji Tui") or at the airport customs counter.',
    timing: 'Departure day (+30 min buffer)',
    checklist: [
      'Request the official Tax Refund Application Form and VAT invoice (fapiao) at checkout.',
      'Keep refunded items sealed and unused until Customs stamps your form prior to baggage drop.',
      'Arrive at the international terminal 30 minutes earlier if claiming cash or card refunds.',
    ],
    guideLinks: [
      { label: 'Departure Tax Refund 2.0 & Instant Refund Guide', href: '/posts/china-departure-tax-refund-instant-guide-mock/' },
    ],
    officialLink: { label: 'STA Official English Tax Refund Portal', href: 'https://www.chinatax.gov.cn/eng/' },
  },
];

export interface DirectoryEntry {
  id: string;
  name: string;
  operator: string;
  domain: 'entry-visa' | 'transport-pay' | 'city-culture' | 'business-legal' | 'open-data';
  domainLabel: string;
  accessType: 'english-portal' | 'bilingual-service' | 'open-dataset' | 'waf-standby';
  accessLabel: string;
  languages: string;
  url: string;
  verifiedOn: string;
  summary: string;
  guideHref?: string;
  guideLabel?: string;
}

export const DIRECTORY_ENTRIES: DirectoryEntry[] = [
  {
    id: 'nia-12367',
    name: 'NIA 12367 Immigration Service Platform',
    operator: 'National Immigration Administration',
    domain: 'entry-visa',
    domainLabel: 'Entry & Visa',
    accessType: 'bilingual-service',
    accessLabel: 'Web · App · 24h Hotline',
    languages: 'EN / ZH',
    url: 'https://s.nia.gov.cn',
    verifiedOn: '2026-11-15',
    summary: 'Unified national immigration portal and 7×24 multilingual hotline for visa policy, port queries, and online residence registration.',
    guideHref: '/posts/240-hour-visa-free-transit-playbook-mock/',
    guideLabel: '240h Transit Guide',
  },
  {
    id: 'nia-arrival-card',
    name: 'NIA Online Foreigner Arrival Card',
    operator: 'National Immigration Administration',
    domain: 'entry-visa',
    domainLabel: 'Entry & Visa',
    accessType: 'bilingual-service',
    accessLabel: 'Online Form · QR Pass',
    languages: 'EN / ZH / JA / KO / FR / ES / RU',
    url: 'https://s.nia.gov.cn/ArrivalCardFillingPC/entry-registation-home',
    verifiedOn: '2026-11-15',
    summary: 'Official pre-arrival digital declaration generating an immigration QR code prior to border inspection.',
    guideHref: '/posts/china-arrival-card-official-guide-mock/',
    guideLabel: 'Arrival Card Guide',
  },
  {
    id: 'cvasc-visa',
    name: 'Chinese Visa Application Service Center (CVASC)',
    operator: 'MFA Authorized Visa Centers',
    domain: 'entry-visa',
    domainLabel: 'Entry & Visa',
    accessType: 'english-portal',
    accessLabel: 'Online Application',
    languages: '10+ Languages',
    url: 'https://www.visaforchina.cn',
    verifiedOn: '2026-11-15',
    summary: 'Official visa application forms, appointment scheduling, and fee schedules across global consular centers.',
  },
  {
    id: 'shanghai-residence',
    name: 'Shanghai Overseas Residence Self-Declaration',
    operator: 'Shanghai Municipal Public Security Bureau',
    domain: 'entry-visa',
    domainLabel: 'Entry & Visa',
    accessType: 'bilingual-service',
    accessLabel: '24h Self-Registration',
    languages: 'EN / ZH',
    url: 'https://gaj.sh.gov.cn/crj/20200604/289b9d687b534df29384a02670ad13e2.html',
    verifiedOn: '2026-11-15',
    summary: 'Mandatory 24-hour temporary residence filing for foreign travelers staying in private apartments or non-hotel housing in Shanghai.',
    guideHref: '/posts/staying-in-a-private-home-shanghai-mock/',
    guideLabel: 'Private Home Guide',
  },
  {
    id: 'railway-12306',
    name: 'China Railway 12306 Official English Portal',
    operator: 'China State Railway Group',
    domain: 'transport-pay',
    domainLabel: 'Transport & Payments',
    accessType: 'english-portal',
    accessLabel: 'Direct Booking · Passport Verify',
    languages: 'EN / ZH',
    url: 'https://www.12306.cn/en/index.html',
    verifiedOn: '2026-11-15',
    summary: 'Sole official rail ticketing platform supporting foreign passport online verification, G/D/C bullet trains, and zero agency markups.',
    guideHref: '/posts/using-a-foreign-passport-on-12306-mock/',
    guideLabel: '12306 Passport Guide',
  },
  {
    id: 'pboc-payment-guide',
    name: 'PBOC Guide to Payment Services in China',
    operator: "People's Bank of China & SAFE",
    domain: 'transport-pay',
    domainLabel: 'Transport & Payments',
    accessType: 'english-portal',
    accessLabel: 'Official Policy Guide',
    languages: 'EN / ZH',
    url: 'http://www.pbc.gov.cn/en/3688006/index.html',
    verifiedOn: '2026-11-15',
    summary: 'Central bank handbook on binding foreign Visa/Mastercard to Alipay & WeChat Pay, cash exchange quotas, and ATM access.',
    guideHref: '/posts/foreign-cards-alipay-wechat-pay-mock/',
    guideLabel: 'Foreign Cards Guide',
  },
  {
    id: 'sta-tax-refund',
    name: 'STA Departure Tax Refund & 12366 Portal',
    operator: 'State Taxation Administration',
    domain: 'transport-pay',
    domainLabel: 'Transport & Payments',
    accessType: 'english-portal',
    accessLabel: 'Policy & 12366 Hotline',
    languages: 'EN / ZH',
    url: 'https://www.chinatax.gov.cn/eng/',
    verifiedOn: '2026-11-15',
    summary: 'Official statutory rules for Departure Tax Refund 2.0 (200 RMB minimum threshold, 11% VAT refund, and instant in-store refunds).',
    guideHref: '/posts/china-departure-tax-refund-instant-guide-mock/',
    guideLabel: 'Tax Refund Guide',
  },
  {
    id: 'caac-uom-drone',
    name: 'CAAC UOM Civil Drone Registration Platform',
    operator: 'Civil Aviation Administration of China',
    domain: 'transport-pay',
    domainLabel: 'Transport & Payments',
    accessType: 'bilingual-service',
    accessLabel: 'Mandatory Registry',
    languages: 'ZH',
    url: 'https://uom.caac.gov.cn',
    verifiedOn: '2026-11-15',
    summary: 'Mandatory real-name UAV registration, QR airframe labeling, and controlled airspace flight-plan approvals across mainland China.',
  },
  {
    id: 'gov-cn-visit-china',
    name: 'Visit China — State Council Official Portal',
    operator: 'General Office of the State Council',
    domain: 'city-culture',
    domainLabel: 'Cities & Culture',
    accessType: 'english-portal',
    accessLabel: 'National Gateway',
    languages: 'EN',
    url: 'https://english.www.gov.cn/services/visitchina/',
    verifiedOn: '2026-11-15',
    summary: 'Central government English service gateway aggregating national holiday schedules, visa announcements, and provincial guides.',
  },
  {
    id: 'palace-museum-intl',
    name: 'The Palace Museum Overseas Visitor Booking',
    operator: 'The Palace Museum (Forbidden City)',
    domain: 'city-culture',
    domainLabel: 'Cities & Culture',
    accessType: 'english-portal',
    accessLabel: 'Real-Name Ticketing',
    languages: 'EN / FR / ES / RU / JA / ZH',
    url: 'https://intl.dpm.org.cn/index.html',
    verifiedOn: '2026-11-15',
    summary: 'Official international portal for Forbidden City passport reservations, exhibition calendars, and closed-Monday schedules.',
    guideHref: '/posts/reading-beijing-courtyard-geometry-mock/',
    guideLabel: 'Beijing Axis Essay',
  },
  {
    id: 'shanghai-museum-en',
    name: 'Shanghai Museum Official English Portal',
    operator: 'Shanghai Museum (People’s Square & East)',
    domain: 'city-culture',
    domainLabel: 'Cities & Culture',
    accessType: 'english-portal',
    accessLabel: 'Free Entry · Booking',
    languages: 'EN',
    url: 'https://www.shanghaimuseum.net/mu/frontend/pg/en/index',
    verifiedOn: '2026-11-15',
    summary: 'Visitor hours, bronze & ceramic gallery maps, and overseas passport entry instructions for both Shanghai Museum campuses.',
  },
  {
    id: 'city-intl-beijing',
    name: 'Beijing, Shanghai & Chengdu Intl Portals',
    operator: 'Municipal Foreign Affairs Offices',
    domain: 'city-culture',
    domainLabel: 'Cities & Culture',
    accessType: 'english-portal',
    accessLabel: 'City Services · 12345',
    languages: 'EN + 8 Languages',
    url: 'https://english.beijing.gov.cn/',
    verifiedOn: '2026-11-15',
    summary: 'Official municipal gateways for subway cards, medical directories, heritage parks, and multilingual 12345 citizen hotlines.',
  },
  {
    id: 'canton-fair-portal',
    name: 'Canton Fair Overseas Buyer Portal',
    operator: 'China Foreign Trade Centre (MOFCOM)',
    domain: 'business-legal',
    domainLabel: 'Business & Legal',
    accessType: 'english-portal',
    accessLabel: 'Buyer Badge · Phases',
    languages: 'EN / ZH',
    url: 'https://www.cantonfair.org.cn/en-US',
    verifiedOn: '2026-11-15',
    summary: 'Official pre-registration for Guangzhou’s biennial three-phase export fair, exhibitor catalogs, and invitation letters.',
    guideHref: '/posts/canton-fair-guangzhou-buyer-badge-primer-mock/',
    guideLabel: 'Canton Fair Primer',
  },
  {
    id: 'most-work-permit',
    name: "Foreigner's Work Permit Service System",
    operator: 'Ministry of Human Resources / MOST',
    domain: 'business-legal',
    domainLabel: 'Business & Legal',
    accessType: 'bilingual-service',
    accessLabel: 'Tier A/B/C Filing',
    languages: 'ZH',
    url: 'https://fuwu.most.gov.cn/',
    verifiedOn: '2026-11-15',
    summary: 'National statutory platform for employer sponsorship, work permit notification letters, and A/B/C tier classification.',
  },
  {
    id: 'npc-national-laws',
    name: 'NPC National Laws & Regulations Database',
    operator: 'National People’s Congress',
    domain: 'business-legal',
    domainLabel: 'Business & Legal',
    accessType: 'open-dataset',
    accessLabel: '17,267 Statutory Texts',
    languages: 'ZH',
    url: 'https://flk.npc.gov.cn/',
    verifiedOn: '2026-11-15',
    summary: 'Authoritative free full-text repository of the Civil Code, administrative regulations, judicial interpretations, and local statutes.',
  },
  {
    id: 'mofcom-open-data',
    name: 'MOFCOM Public Commerce Open Data Center',
    operator: 'Ministry of Commerce (MOFCOM)',
    domain: 'open-data',
    domainLabel: 'Gov Open Data',
    accessType: 'open-dataset',
    accessLabel: 'Structured Datasets · NM012',
    languages: 'ZH',
    url: 'https://opendata.mofcom.gov.cn/front/data',
    verifiedOn: '2026-11-15',
    summary: 'Free downloadable catalogs including 1,422 China Time-Honored Brands (NM012), dual-use trade lists, and FTA tariff schedules.',
  },
  {
    id: 'beijing-open-data',
    name: 'Beijing Public Data Open Platform',
    operator: 'Beijing Municipal Data Administration',
    domain: 'open-data',
    domainLabel: 'Gov Open Data',
    accessType: 'open-dataset',
    accessLabel: 'CSV / JSON / API',
    languages: 'ZH',
    url: 'https://data.beijing.gov.cn/index.htm',
    verifiedOn: '2026-11-15',
    summary: 'Municipal open datasets covering cultural venues, Grade-A hospitals, transit stops, air quality, and registered organizations.',
  },
  {
    id: 'samr-openstd-standby',
    name: 'SAMR National Standards & Foreign-Language GB Portal',
    operator: 'State Administration for Market Regulation',
    domain: 'open-data',
    domainLabel: 'Gov Open Data',
    accessType: 'waf-standby',
    accessLabel: 'WAF-Protected Official Standby',
    languages: 'ZH / 2,913 Foreign-Lang GBs',
    url: 'https://std.samr.gov.cn/',
    verifiedOn: '2026-11-15',
    summary: 'Official full-text national standards (GB/T) & 2,913 foreign-language standards catalog. Marked waf-protected-standby per OKF policy (interactive browser access required).',
  },
];

export interface VisaCountryProfile {
  code: string;
  country: string;
  unilateralDays: number;
  mutualDays: number;
  transit240h: boolean;
  note: string;
}

export const VISA_PROFILES: VisaCountryProfile[] = [
  { code: 'FR', country: 'France', unilateralDays: 30, mutualDays: 0, transit240h: true, note: '30-day unilateral visa-free entry for tourism, business, family visits, and transit.' },
  { code: 'DE', country: 'Germany', unilateralDays: 30, mutualDays: 0, transit240h: true, note: '30-day unilateral visa-free entry plus 240-hour cross-province transit eligibility.' },
  { code: 'JP', country: 'Japan', unilateralDays: 30, mutualDays: 0, transit240h: true, note: '30-day unilateral visa-free entry for ordinary passport holders.' },
  { code: 'KR', country: 'South Korea', unilateralDays: 30, mutualDays: 0, transit240h: true, note: '30-day unilateral visa-free entry plus 240-hour transit.' },
  { code: 'AU', country: 'Australia', unilateralDays: 30, mutualDays: 0, transit240h: true, note: '30-day unilateral visa-free entry for ordinary passports.' },
  { code: 'SG', country: 'Singapore', unilateralDays: 0, mutualDays: 30, transit240h: true, note: 'Permanent 30-day mutual visa-free agreement between China and Singapore.' },
  { code: 'MY', country: 'Malaysia', unilateralDays: 0, mutualDays: 30, transit240h: true, note: '30-day mutual visa exemption for ordinary passports.' },
  { code: 'TH', country: 'Thailand', unilateralDays: 0, mutualDays: 30, transit240h: true, note: 'Permanent 30-day mutual visa-free entry (up to 90 days per 180-day period).' },
  { code: 'US', country: 'United States', unilateralDays: 0, mutualDays: 0, transit240h: true, note: 'Not on unilateral list; eligible for 240-hour (10-day) transit with confirmed third-country onward ticket, or standard L/M visa.' },
  { code: 'GB', country: 'United Kingdom', unilateralDays: 0, mutualDays: 0, transit240h: true, note: 'Eligible for 240-hour (10-day) visa-free transit with onward ticket to a third country/region, or apply via CVASC.' },
  { code: 'CA', country: 'Canada', unilateralDays: 0, mutualDays: 0, transit240h: true, note: 'Eligible for 240-hour (10-day) visa-free transit across 24 provinces, or standard visa.' },
  { code: 'BR', country: 'Brazil', unilateralDays: 30, mutualDays: 0, transit240h: true, note: 'Eligible for unilateral short-stay exemption (verify active validity window on NIA 12367 before travel).' },
  { code: 'IN', country: 'India', unilateralDays: 0, mutualDays: 0, transit240h: false, note: 'Standard visa required prior to departure via Chinese Embassy or CVASC (24-hour direct airside transit rules still apply).' },
];

export interface BilingualFlashcard {
  id: string;
  category: 'Taxi & Station' | 'Medical & Allergy' | 'Hotel & Daily';
  title: string;
  hanzi: string;
  pinyin: string;
  english: string;
  tip: string;
}

export const FLASHCARDS: BilingualFlashcard[] = [
  {
    id: 'card-bj-south',
    category: 'Taxi & Station',
    title: 'Beijing South High-Speed Rail',
    hanzi: '请带我去北京南站（高铁出发层）',
    pinyin: 'Qǐng dài wǒ qù Běijīng Nánzhàn (gāotiě chūfā céng)',
    english: 'Please take me to Beijing South Railway Station (High-Speed Departures).',
    tip: 'Verify Beijing South vs. Beijing West or Chaoyang on your 12306 ticket before getting in the cab.',
  },
  {
    id: 'card-sh-hongqiao',
    category: 'Taxi & Station',
    title: 'Shanghai Hongqiao Rail Hub',
    hanzi: '请去上海虹桥火车站，不是机场航站楼',
    pinyin: 'Qǐng qù Shànghǎi Hóngqiáo Huǒchēzhàn, búshì jīchǎng hángzhànlóu',
    english: 'Please go to Shanghai Hongqiao Railway Station (not the airport terminal).',
    tip: 'Hongqiao Airport T2 and Hongqiao Railway Station sit side-by-side—specify the train station drop-off.',
  },
  {
    id: 'card-meter',
    category: 'Taxi & Station',
    title: 'Use Meter & Receipt',
    hanzi: '请打表，下车时请给我一张发票，谢谢',
    pinyin: 'Qǐng dǎbiǎo, xiàchē shí qǐng gěi wǒ yì zhāng fāpiào, xièxie',
    english: 'Please use the meter, and may I have a printed receipt when we arrive? Thank you.',
    tip: 'A taxi receipt (fapiao) prints the vehicle license plate—essential if you accidentally leave an item behind.',
  },
  {
    id: 'card-peanut-allergy',
    category: 'Medical & Allergy',
    title: 'Severe Peanut & Nut Allergy',
    hanzi: '我对花生和坚果严重过敏！请不要使用花生油、芝麻酱或坚果，非常感谢。',
    pinyin: 'Wǒ duì huāshēng hé jiānguǒ yánzhòng guòmǐn! Qǐng búyào shǐyòng huāshēngyóu, zhīmajìang huò jiānguǒ.',
    english: 'I have a SEVERE peanut and tree-nut allergy! Please do not use peanut oil, sesame paste, or nuts.',
    tip: 'Especially important in southern & Cantonese kitchens where fragrant peanut oil is commonly used.',
  },
  {
    id: 'card-gluten-free',
    category: 'Medical & Allergy',
    title: 'Strict Gluten-Free (Celiac)',
    hanzi: '我不能吃麸质（小麦、面粉、普通酱油）。请问这道菜可以只用盐、蒜和纯油清炒吗？',
    pinyin: 'Wǒ bùnéng chī fūzhì (xiǎomài, miànfěn, pǔtōng jiàngyóu). Kěyǐ zhǐ yòng yán, suàn hé chúnyóu qīngchǎo ma?',
    english: 'I cannot eat gluten (wheat, flour, regular soy sauce). Can this dish be stir-fried with only salt, garlic, and plain oil?',
    tip: 'Standard Chinese soy sauce and dark vinegar usually contain wheat—request salt-only stir-fries or steamed rice.',
  },
  {
    id: 'card-er-hospital',
    category: 'Medical & Allergy',
    title: 'Emergency Hospital Request',
    hanzi: '我需要去最近的三甲医院急诊科（或国际医疗部），请帮我叫救护车 120 或出租车。',
    pinyin: 'Wǒ xūyào qù zuìjìn de sānjiǎ yīyuàn jízhěnkē, qǐng bāng wǒ jiào jiùhùchē 120 huò chūzūchē.',
    english: 'I need the nearest Grade-A hospital Emergency Room (or International Clinic). Please help call 120 or a taxi.',
    tip: 'Dial 120 for medical ambulance (110 police, 119 fire). Bring your physical passport to hospital registration.',
  },
  {
    id: 'card-hotel-reg',
    category: 'Hotel & Daily',
    title: 'Passport Registration Receipt',
    hanzi: '您好，请帮我办理外宾入住登记，请问可以打印一份临时住宿登记表吗？',
    pinyin: 'Nínhǎo, qǐng bāng wǒ bànlǐ wàibīn rùzhù dēngjì, kěyǐ dǎyìn yí fèn línshí zhùsù dēngjìbiǎo ma?',
    english: 'Hello, please process my foreign guest check-in registration. May I have a printed copy of the registration slip?',
    tip: 'Useful if you need proof of registration for banking, SIM cards, or multi-city administrative steps.',
  },
  {
    id: 'card-tax-refund',
    category: 'Hotel & Daily',
    title: 'Tax Refund Form Request',
    hanzi: '您好，我想办理境外旅客离境退税，请帮我开具退税申请单和增值税发票。',
    pinyin: 'Nínhǎo, wǒ xiǎng bànlǐ jìngwài lǚkè líjìng tuìshuì, qǐng bāng wǒ kāijù tuìshuì shēnqǐngdān hé zēngzhíshuì fāpiào.',
    english: 'Hello, I would like to apply for Departure Tax Refund. Please issue the Tax Refund Form and VAT invoice.',
    tip: 'Show your physical passport at checkout on the same day when spending 200 RMB or more in a Tax-Free store.',
  },
];
