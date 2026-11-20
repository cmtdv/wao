# Web 前端工程

独立前端与 100% 原生 Route A 设计系统工程（Astro 7 + EmDash 1.5 + Node Standalone + SQLite）。

## 目录结构

```text
web/
├── astro.config.mjs                # Astro + EmDash + SQLite + Local Media 配置
├── package.json                    # 依赖与脚本 (dev / build / preview / start / check)
├── tsconfig.json                   # 路径别名 (@site/*, @ui/*, @blocks/*, @layouts/*, @lib/*, @data/*, @styles/*)
├── data.db                         # 本地 Mock CMS 数据（37 分类 / 14 标签 / 17 篇文章 / 5 页面）
├── uploads/                        # 本地媒体目录
├── seed/seed.json                  # 干净模板分发种子
├── public/images/                  # 本地实景配图
└── src/
    ├── components/
    │   ├── site/                   # 站点外壳与杂志组件 (Header, Footer, HeroShowcase, SearchDialog, Pagination...)
    │   ├── ui/                     # 100% 完整基础原语套件（覆盖 49 类基础交互原语）
    │   │   ├── actions/            # Button, ButtonGroup, CompactButton, FancyButton, LinkButton
    │   │   ├── data-display/       # Avatar, AvatarGroup, Badge, DataTable, Divider, Kbd, ProgressBar, ProgressCircle, Rating, Skeleton, Tag
    │   │   ├── feedback/           # Alert, Banner, NotificationCard, Tooltip (+ Layout 全局持久 Toast)
    │   │   ├── forms/              # Checkbox(+Switch), ColorPicker, DateInput, DigitInput, FileUpload, Input, RadioGroup, Select, Slider, Textarea
    │   │   ├── navigation/         # Accordion, Breadcrumb, SegmentedControl, Stepper, Tabs, VerticalTabs
    │   │   └── overlays/           # Drawer, DropdownMenu, Modal, PopoverCard
    │   └── blocks/                 # 全套 Pro 级门户与 SaaS 原生区块（覆盖 39 类业务区块）
    │       ├── marketing/          # AnnouncementBlock, HeroBlock, FeaturesBlock, CtaBlock, PricingBlock, TestimonialsBlock, TeamsBlock, CareersBlock, IntegrationsBlock, BrandSocialBlock
    │       ├── editorial/          # BlogGridBlock, FaqBlock, HowItWorksBlock, StatsStrip, NewsletterBlock, ContactBlock, FilterBarBlock
    │       └── application/        # AuthCardBlock, ProfileCardBlock, GroundPulseForm, NotificationFeedBlock
    ├── data/                       # 静态门户数据与设计系统目录映射
    ├── layouts/                    # 全局 Layout（主题脚本 + Toast 顶层容器）
    ├── lib/                        # EmDash CMS 查询、格式化与 Portable Text 渲染
    ├── pages/                      # 全站页面 + /design-system/ 与 /design-system/blocks/ 双规范展台
    ├── scripts/                    # 零依赖原生渐进增强交互脚本
    └── styles/                     # 严格 @layer 分层样式 (reset/tokens/base/layout/components/controls/ui-kit/blocks/pages)
```

## 常用命令

```bash
pnpm install      # 安装依赖
pnpm dev          # 开发服务器 (http://localhost:4341)
pnpm check        # Astro + TypeScript 全量类型检查
pnpm build        # 生产构建 (dist/server/entry.mjs)
pnpm start        # 启动 Node 生产服务
```

## 核心预览路由

- `/` — 首页（100% 满屏通透封面 + 右下三道 6 秒定时横杠 + 交互栏目）
- `/atlas/` — 12 × 97 China Atlas 全景图谱
- `/journeys/` — 首访中国 7 步清单
- `/directory/` — 公开官方服务与开放数据目录
- `/tools/` — 实用工具工作台（免签判定、双语字卡、放票日历、离境退税估算、现场实测流、免签矩阵表）
- `/design-system/` — 设计令牌、Local Styles 与 49 类基础原语交互展台
- `/design-system/blocks/` — 39 类 Pro 级区块交互展台与全量覆盖对照矩阵
