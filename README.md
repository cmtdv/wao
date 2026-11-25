# 静态站点快照与一二级分类文档（v3.3）

本分支基于本地 `http://localhost:4341`（`feat/pillar-benchmark-upgrade @ 5de14ae`）完整导出，**仅保留两类产物**（不含 Astro 源码、EmDash 后台与 SQLite 数据库）：

1. **全站静态页面**：共导出 **2371** 个中/英文静态 HTML 页面（含首页、6 大一级频道、59 个二级专题、城市/景点档案、指南、互动工具、离线字卡与深度文章），配套全部静态样式、脚本、字体与本地化去重后的图片资源。
2. **一二级分类 Markdown 文档**：位于 [taxonomy/](./taxonomy/README.md)，共 **67** 个结构化 `.md` 文件（总览 + `navigation-v3.3.md` + 6 个一级支柱 + 59 个二级专题）。

## 一二级分类文档入口

- 总览索引：[taxonomy/README.md](./taxonomy/README.md)
- 导航规格书全文：[taxonomy/navigation-v3.3.md](./taxonomy/navigation-v3.3.md)
- 01 · **指南（Essentials）**：[taxonomy/01-essentials/README.md](./taxonomy/01-essentials/README.md)（6 个二级分类）
- 02 · **旅游（Travel）**：[taxonomy/02-travel/README.md](./taxonomy/02-travel/README.md)（14 个二级分类）
- 03 · **生活（Living）**：[taxonomy/03-living/README.md](./taxonomy/03-living/README.md)（10 个二级分类）
- 04 · **文化（Culture）**：[taxonomy/04-culture/README.md](./taxonomy/04-culture/README.md)（9 个二级分类）
- 05 · **读懂中国（China Explained）**：[taxonomy/05-china/README.md](./taxonomy/05-china/README.md)（9 个二级分类）
- 06 · **商务（Business）**：[taxonomy/06-business/README.md](./taxonomy/06-business/README.md)（11 个二级分类）

## 本地预览静态站点

仓库根目录即完整静态站点根目录（含 `.nojekyll`，可直接启用 GitHub Pages 或用任意静态服务器预览）：

```bash
npx serve .
# 英文首页: http://localhost:3000/
# 中文首页: http://localhost:3000/zh/
# 商务频道: http://localhost:3000/zh/business/
```
