# 一二级导航规格书 v3.3

> **版本**：`6x59-v3.3` · **更新日期**：2026-11-24
> **体量**：6 个一级支柱 × 59 个二级专题（**50 个导航下拉 + 9 个枢纽页**）+ 4 个右侧常驻 Utility Dock
> **排序原则**：遵循「大众刚需生存 → 大众游玩 → 长期居住 → 深度人文 → 宏观认知 → 垂直商业」漏斗顺序：`指南 → 旅游 → 生活 → 文化 → 读懂中国 → 商务`。

---

## 一、六大一级支柱总览

| 序号 | 代码 ID | 中文导航 | 英文全称（顶栏紧凑态） | 主路由 | 核心意图 | 设计范式（锁定） | 二级体量（导航 / 枢纽） |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | `essentials` | 指南 | Essentials | `/essentials/` | 来华前后的通用生存实操（How） | Uber 行动台 + 方案 A 签证快检 | 6（6 / 0） |
| 02 | `travel` | 旅游 | Travel | `/travel/` | 目的地、路线、四季与地标（Where） | Lonely Planet 画报 + 十城地图 + Airbnb 经典路线 | 14（8 / 6） |
| 03 | `living` | 生活 | Living | `/living/` | 长期居留、工作、留学与安家 | Oura 田野生活志 + 6 城人像卡 + 预算工作室 | 10（9 / 1） |
| 04 | `culture` | 文化 | Culture | `/culture/` | 感官风味、语言、节气与民俗 | Monocle 杂志三栏 + 八大菜系声景 + 点单解码 | 9（9 / 0） |
| 05 | `china` | 读懂中国 | China Explained（`China`） | `/china/` | 数据、制度、历史与认知核查 | WIRED 封面网格 + Runway 纯黑五千年展馆 | 9（9 / 0） |
| 06 | `business` | 商务 | Business | `/business/` | 外资准入、产业带采购、展会与合规 | DJI 工业展厅 + Oracle 六阶色带 + USCC 校验 | 11（9 / 2） |

---

## 二、59 个二级专题清单

### 01 指南 Essentials `/essentials/`

> **边界说明**：
> - `E1 签证与入境` 仅涵盖短期免签/240h 过境、L/M/Q 签、数字入境卡 CDAC 与海关口岸；长期工作签证与居留许可归属 `L1 工作许可与签证`。
> - 通用工具横评（支付宝 vs 微信、漫游 eSIM vs 本地 +86 卡、高德 vs Apple Maps、高铁 vs 民航）托管于 `/compare/`，并挂载于本支柱页核心决策带。

| 代码 | 二级（中 / 英） | 位置 | 优先级 | 补充覆盖范围 |
| :--- | :--- | :--- | :--- | :--- |
| E1 | 签证与入境 Visas & Entry | 导航 | P0 | 单免、240h 过境、L/M/Q 短期签、CDAC、充电宝 3C 与海关口岸 |
| E2 | 支付与货币 Payments & Money | 导航 | P0 | 支付宝/微信外卡 ¥200 免手续费红线、TenPayGo、Wise、ATM 现金 |
| E3 | 联网、App 与报错 eSIM, Apps & Fixes | 导航 | P0 | 漫游 eSIM、海外 AI 与远程办公工具可用性（ChatGPT/Claude/GitHub/Notion/Zoom）、App 救火 |
| E4 | 交通出行 Getting Around | 导航 | P0 | 高铁 12306、双城比价、地铁外卡直刷、机场过夜、高铁/机场行李寄存 |
| E5 | 外出就餐与忌口 Eating Out & Dietary | 导航 | P0 | 严重过敏后厨亮屏字卡、扫码点餐、清真/素食、连锁点单暗号 |
| E6 | 安全、单据与设备图解 Safety, Forms & How-To | 导航 | P0 | 紧急电话、防骗、官方表格红框标注、洗衣机/空调等全中文设备图解 |

### 02 旅游 Travel `/travel/`

> **边界说明**：`T5 行程与人群清单` 专注路线规划与特殊人群玩法（7/10/14 天线路、240h 联程、亲子/独行/银发），不重复收录支付/联网/导航等基础生存工具横评。

| 代码 | 二级（中 / 英） | 位置 | 优先级 |
| :--- | :--- | :--- | :--- |
| T1 | 热门城市 Top Cities | 导航 | P0 |
| T2 | 景点、世遗与博物馆 Sights, UNESCO & Museums | 导航 | P0 |
| T3 | 酒店与住宿 Hotels & Stays | 导航 | P0 |
| T4 | 门票与预约 Tickets & Bookings | 导航 | P0 |
| T5 | 行程、清单与人群玩法 Trip Plans & Stacks | 导航 | P1 |
| T6 | 徒步、骑行与自驾 Trails & Scenic Routes | 导航 | P1 |
| T7 | 夜市、街区与年度盛事 Night Markets & Events | 导航 | P1 |
| T8 | 购物、数码、退税与寄件 Shopping & Tax Refund | 导航 | P1 |
| T9 | 华东与华南 East & South China | 枢纽页 | P1 |
| T10 | 华北与东北 North & Northeast China | 枢纽页 | P1 |
| T11 | 华中与西南 Central & Southwest China | 枢纽页 | P1 |
| T12 | 西北与丝路 Northwest & Silk Road | 枢纽页 | P1 |
| T13 | 港澳台与跨境 HK, Macao & Taiwan | 枢纽页 | P1 |
| T14 | 入境医疗与体检旅游 Medical & Dental Trips | 枢纽页 | P2 |

### 03 生活 Living `/living/`

| 代码 | 二级（中 / 英） | 位置 | 优先级 |
| :--- | :--- | :--- | :--- |
| L1 | 工作许可与签证 Work Permits & Visas | 导航 | P0 |
| L2 | 居留、永居与旅居 Residence, PR & Nomads | 导航 | P0 |
| L3 | 来华留学 Study in China | 导航 | P0 |
| L4 | 银行与个税 Banking & Personal Tax | 导航 | P0 |
| L5 | 就医与医保 Healthcare | 导航 | P0 |
| L6 | 驾照与用车 Driving | 导航 | P0 |
| L7 | 就业与社保 Jobs & Social Insurance | 导航 | P1 |
| L8 | 租房、买房与生活成本 Housing & Cost of Living | 导航 | P1 |
| L9 | 家庭、婚恋与携宠 Family, Marriage & Pets | 导航 | P1 |
| L10 | 离境收尾清单 Leaving China | 枢纽页 | P1 |

### 04 文化 Culture `/culture/`

| 代码 | 二级（中 / 英） | 位置 | 优先级 |
| :--- | :--- | :--- | :--- |
| C1 | 饮食、零食与茶酒 Food, Snacks & Drinks | 导航 | P0 |
| C2 | 语言、发音与热词 Language, Pronunciation & Slang | 导航 | P0 |
| C3 | 节庆、节气与民间信仰 Festivals, Seasons & Beliefs | 导航 | P0 |
| C4 | 国民连锁与新消费 Chains & Retail Culture | 导航 | P1 |
| C5 | 棋牌、武术与民俗 Games, Martial Arts & Folk | 导航 | P1 |
| C6 | 文学、艺术与非遗 Arts, Literature & Crafts | 导航 | P1 |
| C7 | 市井日常、中医与汤泉 Everyday Life, TCM & Spas | 导航 | P1 |
| C8 | 影视、音乐与游戏动漫 Cinema, Music & Gaming | 导航 | P2 |
| C9 | 体育、冰雪与电竞 Sports, Winter & Esports | 导航 | P2 |

### 05 读懂中国 China Explained `/china/`

| 代码 | 二级（中 / 英） | 位置 | 优先级 |
| :--- | :--- | :--- | :--- |
| X1 | 国家概览与误解破除 China at a Glance & Myths | 导航 | P0 |
| X2 | 地理、自然与生态 Geography, Nature & Wildlife | 导航 | P0 |
| X3 | 历史年表与文化遗产 History, Timeline & Heritage | 导航 | P0 |
| X4 | AI、前沿科技与科研 AI, Frontier Tech & Science | 导航 | P0 |
| X5 | 国家治理、法治与外交 Government, Law & Diplomacy | 导航 | P1 |
| X6 | 社会、人口与公共体制 Society & Public Systems | 导航 | P1 |
| X7 | 宏观经济与全产业链 Economy & Manufacturing | 导航 | P1 |
| X8 | 超级基建与能源双碳 Infrastructure & Green Energy | 导航 | P1 |
| X9 | 数字中国与出海品牌 Digital China & Global Brands | 导航 | P1 |

### 06 商务 Business `/business/`

| 代码 | 二级（中 / 英） | 位置 | 优先级 |
| :--- | :--- | :--- | :--- |
| B1 | 外资准入与设立 Market Entry | 导航 | P0 |
| B2 | 标准、认证与出口管制 Standards & Compliance | 导航 | P0 |
| B3 | 采购、产业带与验厂 Sourcing, Hubs & Audits | 导航 | P1 |
| B4 | 展会 Trade Fairs | 导航 | P1 |
| B5 | 进出口、物流与集运 Trade, Logistics & Forwarding | 导航 | P1 |
| B6 | 税务、发票与外汇 Tax, Invoicing & FX | 导航 | P1 |
| B7 | 跨境电商 Cross-Border E-Commerce | 导航 | P2 |
| B8 | 知识产权与争议解决 IP & Dispute Resolution | 导航 | P2 |
| B9 | 商务礼仪与差旅 Business Culture & Travel | 导航 | P2 |
| B10 | 园区与自贸区 Zones & Industrial Parks | 枢纽页 | P2 |
| B11 | 数据与网络合规 Data & Cyber Compliance | 枢纽页 | P2 |

---

## 三、右侧常驻 Utility Dock（D1–D4）与回嵌映射

| 代码 | 名称 | 主入口 | 挂载与回嵌目标 |
| :--- | :--- | :--- | :--- |
| D1 | 工具与字卡 Tools & Cards | `/tools/` · `/cards/` | `E1` 免签判定、`E2` 费率测算、`E4`/`T4` 放票日历、`E5`/`E6` 亮屏字卡、`T8` 退税计算、`L1`/`L4` 工签与个税、`B2`/`B3` USCC 核验、`C2` 汉字起名/纹身 |
| D2 | 开放数据与 MCP Open Data & MCP | `/portals/` · `/mcp` | `05 读懂中国` 与全站事实槽位官方溯源 |
| D3 | 口岸与支付实测 Field Reports | `/pulse/` | 全站顶栏与单页实时反馈 |
| D4 | 全站检索 Global Search | `/search/` (`⌘K`) | 全站任意页面快捷键呼出 |

---

## 四、v3.2 → v3.3 路由迁移与 301 永久重定向表

> 以下规则对默认英文（`/`）与简体中文（`/zh/`）双前缀均生效，由 `src/middleware.ts` 统一执行 301 重定向：

| 旧路径（v3.2） | 新路径（v3.3） | 状态码 | 说明 |
| :--- | :--- | :--- | :--- |
| `/travel/visas-entry/` | `/essentials/visas-entry/` | 301 | E1 迁入指南 |
| `/travel/payments-money/` | `/essentials/payments-money/` | 301 | E2 迁入指南 |
| `/travel/esim-apps-fixes/` | `/essentials/esim-apps-fixes/` | 301 | E3 迁入指南 |
| `/travel/getting-around/` | `/essentials/getting-around/` | 301 | E4 迁入指南 |
| `/travel/eating-out-dietary/` | `/essentials/eating-out-dietary/` | 301 | E5 迁入指南 |
| `/travel/safety-forms-how-to/` | `/essentials/safety-forms-how-to/` | 301 | E6 迁入指南 |
| `/places/` 及 `/places/*` | `/travel/` 及 `/travel/*` | 301 | 原「地点」全量迁入新「旅游」 |
| `/live/` 及 `/live/*` | `/living/` 及 `/living/*` | 301 | 原「长居与工作」升级为「生活」 |
| `/atlas/` 及 `/atlas/*` | `/china/` 及 `/china/*` | 301 | 原「读懂中国 /atlas/」迁至 `/china/` |
| `/visit/` 及 `/visit/*` | `/essentials/` 及 `/essentials/*` | 301 | 历史别名统一归一 |
