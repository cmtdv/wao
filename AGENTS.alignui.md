本文件复制自 `D:\alignui\AGENTS.md`（复制日期 2026-11-23）。能读到母版时，开工前先读母版；两者不一致时以母版为准，并用母版重新覆盖本文件。

# AlignUI 开发约定

适用于在本目录、以及基于 AlignUI 的新项目和迁移项目里工作的所有 AI 编程助手（Codex、Claude Code 等）和开发者。文中「你」指执行任务的一方，「用户」指项目负责人。

本目录存放已购买的 AlignUI Pro 设计系统（代码模板和 Figma 设计稿）。新功能、新页面和旧网站迁移都基于 AlignUI 来做：优先用它现成的组件和设计变量，不另起一套样式。

## 0. 这份约定怎样生效（先读）

- 母版是 `D:\alignui\AGENTS.md`。另有两份配套文件，做对应工作前**必须先完整读一遍**：
  - `D:\alignui\docs\migration.md`：把现有网站迁移到 AlignUI 的完整流程（迁移前的准备、盘点、设计定稿，迁移中，迁移后的上线检查）。
  - `D:\alignui\docs\porting-tailwind3.md`：从 finance / hr / marketing 三个 Tailwind 3 模板复制代码时的改法。
  - `D:\alignui\docs\component-swap.md`：轻量路线。用户只要求在测试网站上原地把组件换成 AlignUI、并做好视觉时，按这份做，不走 migration.md。
- Codex 只自动读取「Git 仓库根目录 → 当前目录」这条路径上的 AGENTS.md；Claude Code 自动读取当前目录及上级目录的 CLAUDE.md（`D:\alignui\CLAUDE.md` 用 `@AGENTS.md` 引入本文件）。所以在旧网站仓库或新项目里工作时，**本目录的文件不会被自动读到**。
- 每个要让 AI 干活的仓库（旧网站仓库、新项目），开工前先做：
  1. 把本文件复制到该仓库根目录，并在副本第一行加：「本文件复制自 `D:\alignui\AGENTS.md`（复制日期 YYYY-MM-DD）。能读到母版时，开工前先读母版；两者不一致时以母版为准，并用母版重新覆盖本文件。」那里已经有 AGENTS.md 时，先问用户是合并还是另放，不要覆盖。
  2. 在同一目录放 CLAUDE.md，写一行 `@AGENTS.md`；已经有 CLAUDE.md 的，往里加这一行（目录里有 CLAUDE.md 时，Claude Code 不会自动读 AGENTS.md）。
  3. 新项目复制好后先 `git init`，把原样模板提交一次作为基线。
- 路径写法：以 `D:\` 开头的是绝对路径，在 Git Bash 里写成 `D:/alignui/...`；其余路径（如 `app/globals.css`、`components/ui/select.tsx`）都相对于你正在开发的项目根目录，不是 `D:\alignui\template\` 里的原始模板。
- 如果你的上下文里看不到本文件的正文，先用读文件工具完整读一遍 `D:\alignui\AGENTS.md`，再开始工作。
- 维护本约定时：本文件约 31KB，接近 Codex 默认的 32KiB 读取上限（超出部分会被截掉）。新增内容写进 `D:\alignui\docs\` 下的配套文件，在这里只加一行指向它；仓库里已有 AGENTS.md 要合并时，也要注意合并后的大小。

## 1. 目录里有什么

```
D:\alignui\
├─ AGENTS.md、CLAUDE.md                            # 本约定（母版）
├─ docs\                                            # 配套文件：migration.md、porting-tailwind3.md、component-swap.md，见第 0 节
├─ template\
│  ├─ ai-template\ai-template-main\                 # AI 聊天模板：Next 15.5 · React 19 · Tailwind 4（新项目的起点）
│  ├─ template-finance\template-finance-master\     # 财务/银行：Next 14.2 · React 18 · Tailwind 3.4
│  ├─ template-hr\template-hr-master\               # 人事管理：Next 14.2 · React 18 · Tailwind 3.4
│  ├─ template-marketing\marketing-template-master\ # 营销/销售：Next 14.2 · React 18 · Tailwind 3.4
│  └─ *.zip                                         # 上面四个模板的原始压缩包
├─ figma-file-V2\
│  ├─ Align UI ✦ Design System [2.0].fig            # 设计稿（只有设计，没有代码）
│  ├─ Font\                                          # Inter 4.1、DM Mono
│  └─ License Agreement.pdf                          # 授权目录页（没有条款正文，见第 6 节）
├─ figma-file-V2.zip                                 # 原始压缩包
├─ migration\                                        # 迁移盘点和截图（按站点分目录，见 docs\migration.md 8.0）
└─ eway\                                             # E-Way B2B/OEM 官网的需求清单和两份提示词
```

- `*.zip` 是已经解压过的原始下载包：不要修改、不要再解压、不要当作代码来源，搜索时排除它们。
- `eway\` 是另一个项目的需求文档，以及给通用网页生成工具写的提示词，不是 AlignUI 素材。它和当前任务有没有关系，先问用户。其中「输出纯 HTML/CSS」的要求不适用于用 AlignUI 做的页面。
- `D:\alignui\template\` 里的原始模板不修改。新项目复制一份后再开发（第 2 节）。
- 包管理器：AlignUI 模板和新项目用 pnpm（本机 pnpm 10、Node 24）。在旧网站仓库里用它自己的包管理器：有 `package-lock.json` 用 npm，有 `yarn.lock` 用 yarn，有 `pnpm-lock.yaml` 用 pnpm，不要混用。
- 组件底层用 Radix UI 做交互，样式用 Tailwind，变体写法用 `tailwind-variants`（`utils/tv.ts`），类名合并用 `utils/cn.ts`，图标用 `@remixicon/react`。
- AlignUI 没有组件 npm 包（官网有一个安装工具 `@alignui/cli`，本项目不用）。组件源码直接放在项目里（`components/ui/*.tsx`），可以改，但要按第 7 节的规则改。

## 2. 新项目：以 ai-template 为基础

技术栈统一到 ai-template：Next 15、React 19、**Tailwind 4**。依赖版本以 ai-template 为准（如 tailwind-variants ^3、tailwind-merge ^3），不要把三个 Tailwind 3 模板里的旧版本带进来，也不要降级 React。

**新建项目的步骤**

1. 把 `D:\alignui\template\ai-template\ai-template-main` 复制到用户指定的目录（没给路径就先问）。按第 0 节放好 AGENTS.md 和 CLAUDE.md，`git init` 并提交原样基线。
2. 运行 `pnpm install`。出现 "Ignored build scripts: …" 的提示可以不管，不要运行交互式的 `pnpm approve-builds`。
3. 在 `.gitignore` 里加 `lint-baseline.txt`、`lint-after-move.txt`、`build.log` 三行（Tailwind 4 会扫描项目里所有没被忽略的文本文件，这些日志文件会干扰它），然后运行 `pnpm lint > lint-baseline.txt` 留作 lint 基线（第 9 节）。
4. 修好模板自带的三处问题，并按第 7 节在改动的文件开头注明：
   - **补动画**：`select.tsx` 等组件用了 `animate-in`、`fade-in-0`、`zoom-in-95` 这类类名，但模板没装提供它们的包，现在没有开关动画，也不报错。执行 `pnpm add -D tw-animate-css`，在 `app/globals.css` 的 `@import "tailwindcss";` 下一行加 `@import "tw-animate-css";`。
   - **修下拉框高度**：`components/ui/select.tsx` 第 349、351 行的 `max-h-[--radix-select-content-available-height]`、`min-w-[--radix-select-trigger-width]` 是 Tailwind 3 写法，在 Tailwind 4 下不生效，下拉列表不受最大高度限制。改成 `max-h-(--radix-select-content-available-height)`、`min-w-(--radix-select-trigger-width)`。
   - **补全类名合并规则**：`utils/cn.ts` 的 twMergeConfig 只登记了字号类。给组件传 `className` 覆盖阴影或圆角时（如 `shadow-none`、`rounded-2xl`），两个类会同时保留，哪个生效看运气。在 `twMergeConfig.extend.classGroups` 里加：
     ```ts
     shadow: [{ shadow: ['regular-xs', 'regular-sm', 'regular-md', 'button-primary-focus', 'button-important-focus', 'button-error-focus', 'fancy-buttons-neutral', 'fancy-buttons-primary', 'fancy-buttons-error', 'fancy-buttons-stroke', 'toggle-switch', 'switch-thumb', 'tooltip', 'custom-xs', 'custom-sm', 'custom-md', 'custom-lg', 'complex', 'complex-2', 'complex-3', 'gray-shadow', 'gray-shadow-2', 'gray-shadow-4', 'custom-input'] }],
     rounded: [{ rounded: ['10', '20'] }],
     ```
     外面那层 `{ shadow: [...] }` 不能省，写成 `shadow: ['regular-xs']` 不报错但不起作用。以后在 `@theme` 里新增阴影或圆角，也同步加到这里。
5. 问用户两件事（迁移项目在盘点收尾时一起问，见 `docs\migration.md` 8.1）：
   - 基础组件用哪种外观（见下面「改过外观的 6 个组件」）。
   - 要不要深色模式（第 3 节）。

**ai-template 的配置要知道的几点**

- **纯静态导出**：`next.config.ts` 里有 `output: "export"`（`next build` 只产出 `out/` 里的静态文件，没有服务器）和 `images: { unoptimized: true }`。这种配置下不能用：读取请求的接口路由（Route Handler）、Server Actions、middleware、`cookies()` / `headers()`、redirects / rewrites / headers 配置、ISR、没有 `generateStaticParams` 的动态路由、next/image 的图片优化。旧网站用到其中任何一项时，不要自己删配置，也不要为了迁就静态导出去改业务逻辑：写进盘点的「待人工确认」，和用户确定部署方式后再改（见 `docs\migration.md`）。删 `output: "export"` 时，一并删掉 `app` 下 `chat/[id]`、`projects/[id]` 里写死的示例 `generateStaticParams`。`images: { unoptimized: true }` 默认保留；要恢复图片优化，先确认部署平台支持，用户同意后再删。
- **build 不检查类型和 lint**：`next.config.ts` 设了 `typescript.ignoreBuildErrors` 和 `eslint.ignoreDuringBuilds`。不要擅自删这两项（删了以后 build 会因为模板原有的 lint 错误而失败），验收时按第 9 节另跑类型检查。
- **不要运行 `npx @alignui/cli tailwind`**（官网安装页里的命令）：`app/globals.css` 已经包含全部设计变量和深色模式，这条命令会覆盖它，ai-template 组件用到的 `--shadow-custom-input` 等变量会丢失。缺变量时手工加进 `@theme`。
- **改过外观的 6 个组件**：ai-template 的 `components/ui/` 里，checkbox、radio、input、select、label、digit-input 是 AI 模板改过外观的版本：选中色写死成 `green-600`，不跟主色变；字号用 Tailwind 默认的 `text-sm font-medium`，不是 AlignUI 字号；阴影用模板专用的 `shadow-custom-input`。
  - 用户选「标准 AlignUI 外观（和 Figma 设计稿一致）」：用官网 `https://www.alignui.com/docs/v1.2/ui/<组件名>` 的代码替换这几个文件，导出名、size、variant 都相同，调用处不用改。注意官网的 select.tsx 也有上面那两处 `max-h-[--…]`、`min-w-[--…]` 写法，替换后按第 4 步重新改（用 `rg -n -- '-\[--' components/ui/select.tsx` 找位置）。
  - 用户选「保留 AI 模板外观」但换了主色：把这几个文件里的 `green-600` 改成主色变量（`primary-base` 或 `primary-darker`），否则选中色还是绿色。
- 要从 finance / hr / marketing 三个 Tailwind 3 模板复制任何代码，**先读 `D:\alignui\docs\porting-tailwind3.md`**。不按那份文件改，复制过来的颜色、动画、图标、依赖会失效，而且大多不报错。

## 3. 设计变量：只用现成的，不写死

| 类别 | 位置（`app/globals.css`） | 用法举例 |
|---|---|---|
| 颜色 | `@theme` 里是浅色值，`.dark { }` 里是深色值 | `bg-bg-white-0`、`text-text-strong-950`、`text-text-sub-600`、`border-stroke-soft-200`；主色变量 `--color-primary-base`（另有 `-dark`、`-darker`、`-alpha-24`、`-alpha-16`、`-alpha-10`），类名 `bg-primary-base`、`text-primary-base` |
| 字号 | `@theme` | `text-title-h1`…`h6`、`text-label-xl`…`xs`、`text-paragraph-xl`…`xs`（每档已含行高、字间距、字重） |
| 圆角、阴影 | `@theme` | `rounded-10`、`rounded-20`、`shadow-regular-xs` 等 |
| 间距 | Tailwind 默认刻度 | `p-4`、`gap-3` |
| 组件尺寸、状态、样式 | 各组件文件里的 `tv()` | `variant`、`mode`、`size` |

规则：

- **不写死**颜色、字号、间距、圆角、阴影，例如 `#6E3FF3`、`text-[13px]`、`p-[13px]`、`rounded-[14px]`、`style={{ color: ... }}`。直接用色板类（如 `text-gray-600`、`bg-green-600`）也算写死：`.dark` 没有重新定义原始色板，它们在深色模式下不会变，要改用语义变量（`primary-base`、`success-base`、`text-sub-600`、`bg-weak-50` 等）。布局用的宽高、百分比、`calc()`、Radix 提供的 CSS 变量可以用。从 AlignUI 模板、官网、Pro 区块原样带来的代码里已有的任意值不用改。
- **加新颜色**：浅色值写进 `@theme`，变量名用 `--color-<名称>`；深色值写进 `.dark { }`，用同名变量再定义一次。两处都写了才算加完。新字号只需要加在 `@theme`。
- **改全局风格**（换主色、整体放大字号、改圆角）时，只改变量定义这一处，不在各个页面里逐个改。但第 2 节那 6 个组件写死了 `green-600` 和默认字号，换主色前先按用户的选择处理它们。
- **主色**：ai-template 默认主色是 sky-500、中性灰是 gray（finance 是 blue 加 slate，hr 是 purple 加 slate，marketing 是 orange 加 gray）。换主色只改 `--color-primary-*` 这几个变量指向的色板。不要照搬 Tailwind 3 模板里的 `--primary-base`，那是旧写法，值是 HSL 三元组。换完检查主按钮上白字的对比度要 ≥ 4.5:1：默认的 sky-500 只有约 2.0:1，sky-700 约 3.3:1，都不够。
- **深色模式**：要不要做由用户决定。
  - 用户决定只做浅色：在 `app/layout.tsx` 的 ThemeProvider 加 `forcedTheme="light"`，并去掉侧栏和设置里的主题切换入口；本文其他地方的深色检查都跳过。
  - 用户决定提供深色：每个新页面都要在深色模式下检查。深色样式靠 `.dark` 下的颜色变量实现，不写 `dark:` 前缀。确实要用 `dark:`（例如深浅两种模式用不同图片）时，先在 `app/globals.css` 的 `@import "tailwindcss";` 后面加 `@custom-variant dark (&:where(.dark, .dark *));`，否则 Tailwind 4 的 `dark:` 跟随操作系统设置，和网站里的主题开关对不上。
- **中文网站**：模板是按英文设置的。
  1. `app/layout.tsx` 的 `<html lang="en">` 改成网站实际语言，中文用 `zh-CN`。
  2. `app/globals.css` 里 body 的字体栈，在 Inter 后面加中文字体：`"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif`。
  3. 字号变量自带 -0.01em 到 -0.015em 的负字间距，用在中文上偏挤；标题和标签用的 500 字重，Windows 的微软雅黑没有，会显示成常规粗细，标题和正文分不出层级。是否把字间距改成 0、字重改成 600，先问用户，同意后只改 `@theme` 里的变量。

组件写法示例：

```tsx
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';

<Button.Root variant='primary' mode='filled' size='medium'>保存</Button.Root>
<Input.Root>
  <Input.Wrapper>
    <Input.Input placeholder='搜索' />
  </Input.Wrapper>
</Input.Root>
```

## 4. 需要的组件，按这个顺序找

每一步先在本地或文档里查清楚，确认没有，再走下一步。本地搜索示例：`rg -il "<关键词>" D:/alignui/template --glob "*.{ts,tsx}"`。

1. **当前项目的 `components/` 和 `app/`**（新项目是 ai-template 的副本；原版在 `D:\alignui\template\ai-template\ai-template-main\`）。`components/ui/` 里有 12 个基础组件（另有头像占位图标 `avatar-empty-icons.tsx`），还有 `layout/`、`modals/`、`settings/`。`app/(auth)/` 下的 login、register、reset-password、verify-email 是现成的登录注册界面。
   - 注意：`modals/`、`settings/settings-modal.tsx` 和侧栏的手机端抽屉是手写的浮层，没有 `role="dialog"`，按 Esc 关不掉，焦点也不会留在弹窗里。只参考它们的版式；新做的弹窗和抽屉用下一步官网的 `modal`、`drawer`（基于 Radix Dialog）。
2. **官网免费基础组件**：`https://www.alignui.com/docs/v1.2/ui/<组件名>`。MIT 授权、Tailwind 4 写法（select 例外，见第 2 节）、不用登录，你自己去拿，不要问用户。`components/ui/` 这一级的基础组件优先从这里拿，不要从 Tailwind 3 模板复制再迁移。共 49 个：button、button-group、compact-button、fancy-button、link-button、avatar、avatar-group、avatar-group-compact、badge、banner、data-table、divider、kbd、progress-bar、progress-circle、rating、status-badge、tag、alert、notification、toast、tooltip、checkbox、color-picker、datepicker、digit-input、file-upload、hint、input、label、radio、select、slider、switch、textarea、accordion、breadcrumb、segmented-control、tab-menu-horizontal、tab-menu-vertical、dot-stepper、horizontal-stepper、vertical-stepper、pagination、command-menu、drawer、dropdown、modal、popover。
   - 用文档里 pnpm 那一条安装命令。某个依赖的 peer 范围不包含 React 19 时（例如文档固定的 `react-day-picker@8.10.1`），装同一大版本里支持 19 的版本（`8.10.2`），不要用 `--force` 或 `--legacy-peer-deps`，并在总结里注明。
   - 拿到代码后运行 `rg -n -- '-\[--|\[[a-z-]+:--' <文件>`，有输出就按 `docs\porting-tailwind3.md` 第 2 节第 2 条改。
3. **三个 Tailwind 3 模板里的业务组件**（`D:\alignui\template\template-*\`）。除了 `components/`，也要搜 `app/(main)/` 和 `hooks/`。复制前**必须先读 `D:\alignui\docs\porting-tailwind3.md`**。
   - finance：图表、卡片、转账流程、货币和电话号码输入
   - hr：大日历（`big-calendar.tsx`）、排班、评分、7 天横条日期切换（`day-picker.tsx`，不是日历弹层）
   - marketing：饼图、气泡图、进度图、产品管理、设置弹窗
   - 手机菜单在三个模板的 `app/(main)/mobile-menu.tsx`；手机顶栏在 finance、marketing 的 `components/header-mobile.tsx` 和 hr 的 `app/(main)/header-mobile.tsx`。
   - 其他可参考的实现：通知面板（三个模板的 `components/notification-button.tsx`）、拖拽上传（ai-template 的 `components/modals/upload-files-modal.tsx`）、折叠（hr 的 `components/widgets/widget-schedule.tsx` 和 `app/(main)/calendar/tabs.tsx` 直接用 Radix Accordion）。
4. **Pro 区块**（付费，用户已购买）：`https://pro.alignui.com/blocks/<分类>`，每个分类有多个版本（如 Date Picker 01–05）。分类页的预览公开可看，可以先看预览挑版本；拿代码（Get the code）需要登录。按 Pro 的 FAQ，区块代码是 Tailwind 4.1 写的；拿到后同样用第 2 步那条 `rg` 命令检查一遍。营销页区块（hero、pricing、footer 等）和成套业务区块（auth-card、profile-card、filter、stats-metrics 等）只在这里有。分类共 39 个：
   accordion、announcement、auth-card、blog、brand-social、breadcrumbs、careers、checkbox、color-picker、command-menu、contact、cta、datepicker、drawer、dropdown、faq、features、file-upload、filter、footer、hero、how-it-works、integrations、modal、navigation、newsletter、notification、pricing、profile-card、radio、rating、slider、stats-metrics、switch、table、teams、testimonials、text-input、tooltip。
   - 迁移盘点阶段：只把需要的分类和建议版本号记进盘点表，不停下来（见 `docs\migration.md`）。
   - 开发阶段需要盘点表以外的 Pro 区块时：**停下来问用户**，告诉用户地址和建议版本号（如 `pro.alignui.com/blocks/datepicker` 的 Date Picker 03），请用户复制代码过来。不要凭记忆写一个「AlignUI 风格」的版本冒充官方组件。拿到代码后，检查它引用了哪些 `components/ui/*` 基础组件，缺的按第 2 步从官网补。
5. **都没有**：按第 8 节的设计原则设计，用 Radix UI 加第 3 节的设计变量新写。写法照 `components/ui/button.tsx`：用 `tv()` 定义 variant / size，用复合组件导出（`Root`、`Icon` 等），支持 `asChild`。在总结里注明「这个组件是新写的，不是 AlignUI 官方组件」。

## 5. Figma

- Figma 文件只有设计稿，没有 React 代码。代码以本地模板和官网文档为准。
- 先确认当前会话有能读 Figma 的工具（Claude Code 有 Figma 连接器；本机 Codex 目前没配）。没有的话，不要只凭链接或印象去做：请用户导出那个画板的截图并标出关键尺寸，或者改用 Claude Code 做这一步。
- 用户的 Figma 是免费 Starter 计划：没有 Dev Mode；Figma MCP 每月最多 20 次读取类调用。所以：
  - 没有链接时不要主动去读 Figma。请用户发具体组件或区块的链接（带 `node-id`），不要发整页。
  - 每个链接先只调一次 `get_design_context`（默认已带截图，不要再单独调 `get_screenshot`）。返回内容不完整、需要再拆子节点时，先告诉用户还要调几次，等用户同意。
  - 不要用 `get_variable_defs` 读颜色和字号，它们已经在 `app/globals.css` 里。
- 按设计稿实现时，颜色、字号、间距映射到第 3 节的变量名，不照抄像素值。

## 6. 版权和授权

- 授权条款：Pro 区块和模板见 `https://pro.alignui.com/license`；Figma 文件见 `https://figma.alignui.com/license`；官网免费基础组件是 MIT 授权，见 `https://www.alignui.com/license`。`D:\alignui\figma-file-V2\License Agreement.pdf` 只是目录页，没有条款正文。
- 一份授权可以用于不限数量的项目，包括客户项目、商业项目和 SaaS。
- 不要把 Pro 区块、模板源码、照 Figma 稿写的组件，以及包含它们的项目代码（包括迁移后的网站）放到公开的地方：GitHub 公开仓库、npm、CodeSandbox、Figma Community 等。授权正文禁止衍生作品进公开仓库，FAQ 的说法更宽，两处不一致，由用户决定，你不要自己判断。
- Figma 授权还禁止把设计稿转成代码后分发给第三方。用户要把代码交给别人（外包、客户、其他公司）时，先提醒这一条，能不能交由用户决定。
- 推送代码前，用 `git remote -v` 看仓库托管在哪；在 GitHub 上的，用 `gh repo view --json visibility` 确认是私有仓库。是公开仓库或确认不了，停下来问用户。
- 授权禁止做让终端用户自己拼页面或换主题的功能（页面搭建器、主题编辑器）。旧网站有这类功能时，标 `⚠ 待人工确认`。

## 7. 组件功能不够时：在原组件上改，不重写

`components/ui/` 里基于 Radix 的组件已经做好了键盘操作、读屏支持、深色模式、各种状态样式，并且和 Figma 一一对应。重写会丢掉这些。按缺的程度处理：

| 情况 | 例子 | 做法 |
|---|---|---|
| 只差一个样式或尺寸 | 按钮要比 `xxsmall`（h-7）更小；标签（Tag）要紫色（现在只有 stroke 和 gray） | 在组件的 `tv()` 里**加一个** `size` / `variant` |
| 差一点行为 | 输入框一键清空；下拉框多选 | 在原组件上**加可选 prop**，不传时行为和原来完全一样 |
| 差一整块功能 | 可搜索、可多选、带标签的选择器 | **新建组件**，内部组合 `Select`、`Tag`、`Input` 等，不改它们 |
| 几乎没有共同点 | 原结构不适用，改动会超过一半 | 新写，沿用 Radix UI + `tv()` + 设计变量的写法 |

规则：

- 加之前先读组件的 `tv()` 定义，确认现有的 size、variant、color 里确实没有。例如 Button 已经有 `xsmall`、`xxsmall`，Badge 已经有 purple 等 10 种颜色。
- 只加不改：不删除、不改名、不改变已有 prop 和 variant 的默认行为。改之前先用 `rg` 查这个组件在哪些地方被用到。
- 动手前先看 `pro.alignui.com/blocks/<分类>` 有没有现成的（按第 4 节第 4 步处理）。
- 在被修改的组件文件开头加注释，写明在 AlignUI 原版基础上改了什么，以后合并官方更新时能对得上。
- 改完逐一检查默认、悬停、获得焦点、禁用、报错这几种状态，以及深色模式（如果用户决定提供）。

## 8. 设计原则：不合理的组件和排版要重新设计

旧网站有不少组件选型和排版不合理，迁移不是照原样换皮。

- **必须保留**：功能、数据和数字的含义、业务规则（校验、权限、计费）、流程的最终结果、URL。
- **可以重新设计**：用哪种组件、页面怎么排、信息的先后和主次、交互方式、文案的说法。

依据公认的规范来判断，不凭个人喜好，**每个设计决定都写出依据**。参考来源：WCAG 2.2（可访问性）、Nielsen Norman Group 的 10 条可用性原则和相关研究、Material Design 3 和 Apple Human Interface Guidelines 里各组件的使用说明、Baymard Institute 的研究（表单、搜索筛选、下单流程）。

常用规则（示例，不限于此）：

- 选项 2–5 个且只能选一个：用单选组或分段按钮，直接摊开；选项多时用下拉，超过约 10 个加搜索。
- 勾选框、单选框紧挨在文字左边，点文字也能选；只有开和关两种状态的设置用开关。
- 输入框要有看得见的标签，不能只靠框里的提示文字；表单单列排列，出错时在字段下方就地提示。
- 每页（或每个独立区域，如弹窗、抽屉、卡片）只有一个主要按钮，其余用次要样式；删除这类危险操作要二次确认。
- 同类信息用同一种样式（一张卡片里不出现三种标签样式）；相关的东西放在一起，不相关的拉开距离。
- 中文正文一行约 35–40 字；列表卡片里的简介最多 2 行，后面加「展开」。
- 只有图标的按钮要有文字提示和 `aria-label`；意思接近的图标不要并排放好几个。
- 每个列表、图表都要有加载中、没有数据、出错三种状态。
- 数字要带上下文：评分带评价数量，时间写清是发布时间还是截止时间，金额带货币符号和千分位。
- 访客、登录用户、管理员看到的内容和操作按身份区分，不给访客显示只有发布者能用的入口。
- 手机端：筛选侧栏收成「筛选（N）」按钮，点开从底部弹出；主要按钮固定在屏幕底部。

不由你决定的：页面上该放哪些信息、什么最重要（例如卡片上要不要显示价格、作品试听），这是业务问题，标 `⚠ 待人工确认`。

所有重新设计汇总成**设计调整清单**，每条写「页面和位置 → 旧做法 → 新做法 → 理由和依据」。用户确认后才动手，不允许不说就改。

设计稿用**代码原型**做：用 AlignUI 组件和假数据搭出能运行的页面，截图后先自己对照上面的规则挑问题、修改，再交给用户定稿（流程见 `docs\migration.md` 的 8.2）。AI 生成的图片只能用来做视觉方向参考和插画素材（首页大图、空状态插图），不能当作页面定稿。

用户不是设计师。给用户看方案时，用「任务」说明好坏，例如「找一个会配乐作曲的 PRO 女性工作者：旧版要点 7 下，新版要点 4 下」，不要只说「更美观」。

## 9. 验收

1. 新项目装好依赖后，先跑 `pnpm lint > lint-baseline.txt` 留作基线（第 2 节第 3 步）。ai-template 原样就有 29 个 lint 错误、12 个警告（都在 AlignUI 自带文件里），退出码 1 是正常的。
2. 完成后依次运行：
   - `pnpm exec tsc --noEmit`：必须 0 个错误（原样模板就是 0）。迁移项目里从旧仓库搬来的代码例外见下面第 3 条。
   - `pnpm lint`：和基线对比。你自己写的代码和改动过的行 0 个错误。从 AlignUI 模板、官网或 Pro 区块原样复制进来的文件，自带的错误（如 `as any` 触发的 no-explicit-any）不算新增，不要去改，在总结里按文件列出数量。错误总数不能超过「基线 + 这些复制文件自带的错误」。
   - `pnpm build 2>&1 | tee build.log`（PowerShell 和 Git Bash 都能用）。**退出码 0 还不够**：Tailwind 处理 CSS 出错时，构建照样显示 `✓ Compiled successfully`、退出码 0，但生成的 CSS 只剩约 2KB，整站没有样式。所以还要运行 `rg -n "Error" build.log`，必须没有输出；并确认构建产物里最大的 .css 文件超过 100KB（静态导出看 `out/_next/static/chunks/`，否则看 `.next/static/`；原样模板约 114KB）。`pnpm build` 不检查类型和 lint（第 2 节）。
3. 迁移项目里从旧仓库搬来的代码：做完框架适配（`docs\migration.md` 8.3）后，马上跑 `pnpm lint > lint-after-move.txt` 作为第二份基线，之后错误总数不超过这份。仍然报的类型错误，先在旧仓库用它自己的包管理器跑一次 `tsc --noEmit` 对照：旧仓库本来就有的，不计入 0 错误要求，在总结里逐条列出，不为了消除它们去改业务代码；其余的必须修到 0。
4. `pnpm dev` 用后台方式启动，以输出里打印的地址为准，检查完关掉。在浏览器里检查：电脑宽度、手机宽度、深色模式（如果用户决定提供），以及悬停、禁用、出错等状态。
5. **没有可用的浏览器工具时**（例如 `codex exec` 非交互运行），不要写「已在浏览器检查」，也不要编造截图。能从代码完成的部分照做；需要看页面的部分（检查、截图、设计稿自查），在总结里列出要用户手动打开的地址和每页要看的状态，或者建议用户改用带浏览器工具的会话（如 Claude Code）来做这一步。

## 10. 什么时候停下来等用户

**必须停下来，等用户回复后才继续**的情况：

- 旧网站不是 Next.js + React（`docs\migration.md` 8.1「技术栈」），这次是换技术栈，不只是换界面。
- 整体迁移（`docs\migration.md`）时，创建新项目目录、往任何仓库里复制模板文件之前，「新代码放在哪」还没定（8.0）。只读的盘点可以先做。轻量路线（`docs\component-swap.md`）在旧仓库的新分支上直接做，不受这一条限制。
- 迁移盘点写完时：等用户确认盘点、「待人工确认」各项、设计调整清单和要用的 Pro 区块。
- 设计定稿：每个需要出稿的页面，等用户选定方案。
- 上线检查的问题清单：等用户确认后再修。
- 开发阶段需要盘点表以外的 Pro 区块（第 4 节第 4 步）。
- 要改业务逻辑、数字的含义、URL，或者要删除功能和内容。
- 需要删 `output: "export"`、改部署方式。
- 部署到任何线上环境（包括预览地址）、切换正式域名或 DNS、修改线上环境变量。
- 仓库是公开的或确认不了（第 6 节）；分不清当前是不是生产环境。
- 正文里写了「先问用户」「等用户同意」的其他地方（第 0 节已有 AGENTS.md、第 2 节第 5 步、第 3 节中文字间距和字重、第 5 节 Figma 额外调用等）。

等待期间可以继续做不受影响的部分（例如别的页面），但不要动正在等待的那一项。

**不停下来，标注后继续**：任何阶段（盘点、设计、开发、检查）弄不清的地方，标 `⚠ 待人工确认`，写明查到哪一步、卡在哪里、你的推测、需要谁提供什么信息，然后继续下一项。迁移项目汇总进 `MIGRATION-INVENTORY.md` 的「待人工确认」一节；其他任务在本次总结末尾单列「待人工确认」。属于上面「必须停下来」的情况，仍然要停。
