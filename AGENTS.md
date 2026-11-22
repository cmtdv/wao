# Web 工程与设计系统规范

## 1. 项目定位与目录架构

本仓库为独立网站与 **coss ui（原生 Astro 零水合版）** 设计系统工程（Astro 7 + EmDash 1.5 + 分层原生 CSS + 现代 HTML/DOM API，零第三方重型 UI 框架运行时）：

- `src/components/site/`：站点外壳与编辑部专有组件（页头、页脚、搜索命令框、全屏首图轮播、分页、目录、印章等）
- `src/components/ui/coss/`：完整移植自 `coss.com/ui` 的标志性原生 Astro 表面与组合原语（`Frame`、`FramePanel`、`Card`、`Field`、`InputGroup`、`Group`、`NumberField`、`Switch`、`Empty`、`Sheet`、`Collapsible`、`Spinner`、`Meter`、`Toolbar`）
- `src/components/ui/`：完整基础 UI 原语套件（按 `actions` / `data-display` / `feedback` / `forms` / `navigation` / `overlays` 组织，全面对齐 coss ui 质感）
- `src/components/blocks/`：全套页面区块套件（按 `marketing` / `editorial` / `application` 三大域组织，全面覆盖 39 类业务与营销区块）
- `src/styles/`：严格 CSS `@layer` 分层架构（`reset → tokens → base → layout → components → blocks → pages`）
- `src/pages/design-system/`：站内交互式设计系统规范与验收双展台（`/design-system/` coss 令牌与 56 项原生组件；`/design-system/blocks/` 39 类区块与完整覆盖对照表）

## 2. 浏览器支持基线（Browser Support Policy）

- **Browser Support**：现代浏览器基线（Chrome 135+ / Edge 135+ / Firefox 144+ / Safari 26.2+，Baseline Newly Available 2025+）。不引入第三方 polyfill，对有限支持特性（`<dialog closedby="any">`、`appearance: base-select`、`field-sizing: content`、`position-area`、`animation-timeline: scroll()`、`moveBefore()`）全部采用 `@supports` 与渐进增强优雅降级。

## 3. 视觉、字体与无障碍硬约束

1. **coss ui 纯净中立表面 + 单一 `#E43216` 品牌强调色（亮/暗双模态）**：
   - 主画布与浮层表面：`--background` / `--card` / `--popover`（亮色纯净白 `#FFFFFF` / 暗色深碳灰 `#141414` 与 `#1C1C1F`），摒弃旧版泛黄宣纸底纹与鎏金杂色；
   - 静音托盘与内切微高光：`--muted` / `--surface-sunken` 托盘（`Frame` `rounded-2xl p-1`）承载 `FramePanel`（`rounded-xl`），配合 `background-clip: padding-box` 与 `1px` 内切阴影；
   - 唯一品牌强调色：全站仅保留 `--brand: #E43216`（文字高对比 `--brand-text`）作为唯一品牌主强调色，严禁混入金色或次级花哨彩色装饰条。
2. **零商业版权字体**：
   - 仅使用自托管 SIL OFL 1.1 开源字体（`@fontsource/newsreader`、`@fontsource/dm-sans`、`@fontsource/jetbrains-mono`）及通用字体族回退（`serif` / `sans-serif` / `monospace`）；严禁出现商业字体名。
3. **几何、对比度与键盘红线**：
   - 遵循 coss ui 圆角层级：控件 `--radius-lg`（`0.625rem` / `10px`）、内嵌面板 `--radius-xl`（`0.75rem` / `12px`）、外层卡片/托盘/弹窗 `--radius-2xl`（`1rem` / `16px`），复选框保持 `5px` 微圆角以区分圆形单选框；
   - 正文、辅助文字、占位符对比度一律 ≥ `4.5:1`，控件边框与 `:focus-visible` 焦点环 ≥ `3.0:1`，亮/暗双态必检；
   - 每页/弹窗/独立卡片至多 1 个实心 `primary`（`#E43216`）主按钮；所有原语优先通过 `@ui/*`、`@ui/coss/*`、`@blocks/*`、`@site/*` 路径别名引入，禁止散写裸控件。
4. **EmDash 生产与模板分发边界**：
   - 公开路由必须经 `publicContext()` 读取已发布版本；保留 `decodeSlug()`、`queryPage()` 与 `EmDashHead/BodyStart/BodyEnd`；
   - `seed/seed.json` 保持纯净不混入本地 Mock 扩充数据，本地测试内容仅存 `data.db`。
5. **验收同步机制**：
   - 新增或修改任何组件/区块/令牌，必须同步维护 `/design-system/` 与 `/design-system/blocks/`，并通过 `pnpm check`、`pnpm build` 及实机亮/暗/移动端验证。


## 4. 前端文案与界面「去 AI 味」及 i18n 硬性规范

生成或修改任何页面、组件与交互文案时，必须无条件遵守以下红线：

1. **严禁暴露内部术语与原型身份**：前台界面禁止出现内部架构代号、分类表名、方案版本号或占位词（如 `12×97`、`OKF`、`版本 01`、`方向 03`、`第 09 支柱`、`Mock`），只写面向真实访客的业务文案。
2. **严禁自我解释式设计文案（Meta-copy）**：禁止在 Hero、副标题或区块说明中介绍或自夸本页的 CSS、排版、网格或配色设计（如“纯白画布、1px 网格、零圆角、告别传统横幅”）。
3. **严禁重复赘述标签与无意义计数器**：标题已说清的内容，禁止额外叠加重复眉标、编号前缀、操作说明拼接或无意义统计角标（如 `展厅 01–03`、`卷宗 01`、`7 个关键节点`、`12 / 12 项支柱`）；判定法则：**删掉它用户依然能看懂并操作，就必须删掉**。
4. **严守 i18n 单语纯净与跨语种视觉**：简中页纯简中、英文页纯英文，禁止在标题下硬配装饰性中英混排副标；禁止用巨幅单语文字水印或纯中文竖排充当视觉记忆点；客户端 JS 动态文案必须随当前 `locale` 输出，严禁覆盖 SSR 已本地化的文案。
5. **交互语义与场景准确**：站内弹窗/抽屉不得误用外链跳转箭头 `↗`；功能与文案必须符合当前语种用户的真实使用场景。

## 5. 视觉层级硬约束（Visual Hierarchy Hard Constraints）

所有页面与区块在排版和视觉呈现上必须严格遵守以下 6 条层级红线：

1. **首屏单主焦点**：每屏仅允许 1 个绝对视觉主焦点（如首页 H1 + 全局搜索、专题/详情页 H1），其余快捷入口与辅助控件必须主动退后（弱化边框、字重与底色），严禁与主焦点抢眼。
2. **字号与墨色四阶梯**：严格拉开 L1 页面主标题（Display 衬线大字，`--ink-primary`）、L2 区块与卡片标题（清晰大于正文 ≥ 1.25×，`--ink-primary`）、L3 正文与摘要（`--ink-secondary`）、L4 元信息与时间戳（最小字号 `--ink-tertiary` / mono）的视觉梯度，杜绝相邻层级字号与灰度趋同。
3. **拒绝「万物皆套框」**：非独立操作单元不得一律套粗边框白卡片；优先使用留白、`1px` 细横线与微弱底色区分层次，严禁框中套框（如大白框内再套边框小卡）或给每个普通卡片/列表项顶部硬加彩色粗装饰条。
4. **留白比例律**：严格维持 `区块间距 ≥ 2 × 组内间距 ≥ 2 × 元素间距`（大区块间留白显著大于组内元素间距），不靠边框也能一眼分辨信息归属。
5. **版式节奏交替**：相邻纵向区块禁止连续采用同构均分卡片网格（如 4 栏卡片紧接 4 栏卡片），必须交替使用开放式排版、扫描列表、不对称双栏（7:5 / 8:4）、浅底横向条带或图文视觉焦点。
6. **强调色与主按钮克制**：朱砂红/泥金强调色、粗装饰线与实心 `primary` 主按钮每屏只用于最关键的 1 处主动作或高危警示，禁止在次级列表、常规侧栏或并排步骤条上成排堆砌。
