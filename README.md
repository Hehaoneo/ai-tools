# AI工具雷达 MVP

一个面向中文用户的 AI 工具媒体化市场 MVP，覆盖精选工具、热榜、最新收录、工作流指南和厂商增长入口。

## 运行

直接打开 `index.html` 即可运行。为了更接近真实环境，也可以在项目目录启动本地静态服务：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 第一版能力

- 顶部搜索工具、场景或工作流
- 本周精选 AI 工具卡片
- 按场景找工具
- AI 工具热榜与最新收录
- 热门工作流指南
- 收藏、对比、工具详情预览
- 厂商提交、Featured 推广、企业线索、行业报告、会员订阅等商业转化模块
- 深色模式、移动端响应式、键盘焦点和 reduced-motion 支持

## 后续扩展建议

- 将 `app.js` 中的 `tools` 数据迁移到 CMS、数据库或 JSON API
- 增加工具详情页路由，强化 SEO 和投放承接
- 接入表单服务或 CRM，沉淀厂商线索
- 增加登录、会员收藏夹、价格监控、榜单报告
- 迁移到 React/Vite 后拆分为 SearchBar、ToolList、ToolDetail、RevenuePanel 等组件
