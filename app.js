const tools = [
  {
    id: "kling",
    rank: 1,
    name: "可灵AI",
    domain: "klingai.com",
    category: "AI视频",
    desc: "高质量视频生成与编辑，适合短视频、广告片和商品素材。",
    price: "¥66/月起",
    rating: 9.3,
    trend: 98,
    tags: ["国内可用", "支持中文", "视频生成"],
    fit: ["视频生成", "短视频创作"],
    featured: true,
    latest: false
  },
  {
    id: "cursor",
    rank: 2,
    name: "Cursor",
    domain: "cursor.com",
    category: "AI编程",
    desc: "AI 原生代码编辑器，适合编写、调试、重构一体化。",
    price: "$20/月起",
    rating: 9.5,
    trend: 95,
    tags: ["AI编程", "代码生成", "团队效率"],
    fit: ["代码生成", "项目理解"],
    featured: true,
    latest: false
  },
  {
    id: "gamma",
    rank: 3,
    name: "Gamma",
    domain: "gamma.app",
    category: "AI办公",
    desc: "AI 驱动的演示文稿，一键生成精美 PPT 和网页。",
    price: "$10/月起",
    rating: 9.2,
    trend: 92,
    tags: ["演示文稿", "内容可视化"],
    fit: ["AI PPT", "提案制作"],
    featured: true,
    latest: false
  },
  {
    id: "kimi",
    rank: 4,
    name: "Kimi 智能助手",
    domain: "kimi.moonshot.cn",
    category: "AI搜索",
    desc: "长文本阅读、资料整理和写作助手，适合知识工作者。",
    price: "免费使用",
    rating: 9.1,
    trend: 89,
    tags: ["国内可用", "长文处理", "AI助手"],
    fit: ["资料整理", "写作提效"],
    featured: true,
    latest: false
  },
  {
    id: "chatgpt",
    rank: 5,
    name: "ChatGPT",
    domain: "openai.com",
    category: "AI办公",
    desc: "通用 AI 助手，适合写作、分析、编程和多模态任务。",
    price: "$20/月",
    rating: 9.2,
    trend: 96,
    tags: ["AI办公", "大模型"],
    fit: ["写作", "分析", "编程"],
    featured: false,
    latest: false
  },
  {
    id: "doubao",
    rank: 6,
    name: "豆包",
    domain: "doubao.com",
    category: "AI助手",
    desc: "中文体验稳定的 AI 助手，适合办公问答和内容创作。",
    price: "免费起",
    rating: 9.0,
    trend: 94,
    tags: ["国内可用", "中文写作"],
    fit: ["办公问答", "内容创作"],
    featured: false,
    latest: false
  },
  {
    id: "midjourney",
    rank: 7,
    name: "Midjourney",
    domain: "midjourney.com",
    category: "图像生成",
    desc: "高质量图像生成工具，适合广告创意和视觉探索。",
    price: "$10/月起",
    rating: 8.8,
    trend: 87,
    tags: ["图像生成", "创意设计"],
    fit: ["广告图", "概念图"],
    featured: false,
    latest: false
  },
  {
    id: "notion",
    rank: 8,
    name: "Notion AI",
    domain: "notion.so",
    category: "知识管理",
    desc: "内置在 Notion 的写作、总结和知识管理助手。",
    price: "$10/月起",
    rating: 8.6,
    trend: 82,
    tags: ["知识管理", "写作"],
    fit: ["团队知识库", "文档整理"],
    featured: false,
    latest: false
  },
  {
    id: "minimax",
    rank: 9,
    name: "MiniMax 海螺",
    domain: "minimax.io",
    category: "视频生成",
    desc: "新收录的视频生成工具，适合短视频和创意素材探索。",
    price: "免费起",
    rating: 8.4,
    trend: 80,
    tags: ["视频生成", "新收录"],
    fit: ["视频创意", "素材生成"],
    featured: false,
    latest: true
  },
  {
    id: "tianyan",
    rank: 10,
    name: "天工 AI 搜索",
    domain: "tiangong.cn",
    category: "AI搜索",
    desc: "面向中文资料检索和答案整理的 AI 搜索产品。",
    price: "免费",
    rating: 8.5,
    trend: 83,
    tags: ["AI搜索", "新收录"],
    fit: ["搜索问答", "资料整理"],
    featured: false,
    latest: true
  },
  {
    id: "flowith",
    rank: 11,
    name: "Flowith",
    domain: "flowith.io",
    category: "AI办公",
    desc: "画布式 AI 工作流工具，适合复杂任务拆解和协作。",
    price: "免费起",
    rating: 8.3,
    trend: 78,
    tags: ["AI办公", "新收录"],
    fit: ["工作流", "协作"],
    featured: false,
    latest: true
  },
  {
    id: "liblib",
    rank: 12,
    name: "LiblibAI",
    domain: "liblib.art",
    category: "图像生成",
    desc: "面向中文创作者的模型、图像生成和工作流社区。",
    price: "免费起",
    rating: 8.2,
    trend: 77,
    tags: ["图像生成", "新收录"],
    fit: ["模型社区", "图像创作"],
    featured: false,
    latest: true
  }
];

const categories = [
  { id: "内容创作", desc: "写作、文案、图文生成", count: 128, tint: "green" },
  { id: "办公效率", desc: "文档、会议、协同办公", count: 95, tint: "blue" },
  { id: "电商营销", desc: "商品图、文案、运营增长", count: 86, tint: "orange" },
  { id: "编程开发", desc: "代码生成、调试、运维", count: 110, tint: "violet" },
  { id: "设计视频", desc: "设计、图片、视频制作", count: 142, tint: "rose" },
  { id: "教育科研", desc: "教学、科研、学术辅助", count: 72, tint: "cyan" },
  { id: "企业服务", desc: "CRM、HR、数据分析", count: 90, tint: "indigo" },
  { id: "模型/API", desc: "大模型、API、插件", count: 156, tint: "emerald" }
];

const workflows = [
  {
    title: "小红书矩阵号生产流程",
    desc: "从选题到发布的全链路自动化，批量生成爆款笔记。",
    tags: ["内容创作", "小红书", "自动化"],
    users: "12.3k 使用",
    maker: "AI 工具雷达",
    accent: "red"
  },
  {
    title: "跨境电商商品图工作流",
    desc: "AI 生成场景图 + 批量抠图 + 智能排版，提升转化率。",
    tags: ["电商营销", "商品图", "批量处理"],
    users: "8.7k 使用",
    maker: "跨境增长研究社",
    accent: "orange"
  },
  {
    title: "代码审查工具栈",
    desc: "AI 代码审查 + 安全扫描 + PR 评审，适合研发团队。",
    tags: ["编程开发", "代码审查", "DevOps"],
    users: "9.6k 使用",
    maker: "程序员小助手",
    accent: "dark"
  },
  {
    title: "AI PPT 工具选型",
    desc: "主流 AI PPT 工具横向对比与选型建议，帮你少走弯路。",
    tags: ["办公效率", "演示文稿", "选型对比"],
    users: "6.1k 使用",
    maker: "AI 工具雷达",
    accent: "purple"
  }
];

const state = {
  query: "",
  selectedId: "kling",
  drawerOpen: false,
  rankPeriod: "week",
  saved: new Set(JSON.parse(localStorage.getItem("savedTools") || "[]")),
  compare: []
};

const $ = (selector) => document.querySelector(selector);
const featuredTools = $("#featuredTools");
const categoryGrid = $("#categoryGrid");
const workflowGrid = $("#workflowGrid");
const rankingList = $("#rankingList");
const latestList = $("#latestList");
const toolDrawer = $("#toolDrawer");
const toast = $("#toast");
const vendorModal = $("#vendorModal");
const globalSearch = $("#globalSearch");

function favicon(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=96`;
}

function matchTool(tool) {
  if (!state.query.trim()) return true;
  const q = state.query.trim().toLowerCase();
  const haystack = `${tool.name} ${tool.category} ${tool.desc} ${tool.tags.join(" ")} ${tool.fit.join(" ")}`.toLowerCase();
  return haystack.includes(q) || q.split(/\s+/).some((part) => part && haystack.includes(part));
}

function filteredTools() {
  return tools.filter(matchTool);
}

function renderFeatured() {
  const list = filteredTools().filter((tool) => tool.featured).slice(0, 4);
  featuredTools.innerHTML = list
    .map((tool) => {
      const saved = state.saved.has(tool.id) ? "已收藏" : "收藏";
      return `
        <article class="featured-card" data-select="${tool.id}" tabindex="0">
          <span class="rank-badge">${tool.rank}</span>
          <div class="tool-head">
            <img class="tool-logo" src="${favicon(tool.domain)}" alt="${tool.name} 标识" loading="lazy" />
            <div>
              <h3>${tool.name}</h3>
              <p>${tool.desc}</p>
            </div>
          </div>
          <div class="tag-row">
            ${tool.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="price-line">${tool.price}</div>
          <div class="card-footer">
            <span class="rating">★ ${tool.rating.toFixed(1)}</span>
            <button class="mini-button" type="button" data-save="${tool.id}">${saved}</button>
            <a class="mini-button mini-primary" href="https://${tool.domain}" target="_blank" rel="noopener noreferrer">访问</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map((category) => `
      <button class="category-card tint-${category.tint}" type="button" data-query="${category.id}">
        <span class="category-mark">${category.id.slice(0, 2)}</span>
        <strong>${category.id}</strong>
        <p>${category.desc}</p>
        <small>${category.count}+ 工具</small>
      </button>
    `)
    .join("");
}

function renderWorkflows() {
  workflowGrid.innerHTML = workflows
    .map((item) => `
      <article class="workflow-card accent-${item.accent}">
        <div class="workflow-cover">
          <span>${item.title.slice(0, 4)}</span>
        </div>
        <div class="workflow-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="tag-row">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <div class="workflow-footer">
          <span>${item.maker}</span>
          <strong>${item.users}</strong>
        </div>
      </article>
    `)
    .join("");
}

function renderRanking() {
  const multiplier = state.rankPeriod === "month" ? 0.96 : state.rankPeriod === "all" ? 0.92 : 1;
  rankingList.innerHTML = [...tools]
    .sort((a, b) => b.rating * multiplier + b.trend / 100 - (a.rating * multiplier + a.trend / 100))
    .slice(0, 8)
    .map((tool, index) => `
      <button class="ranking-item" type="button" data-select="${tool.id}">
        <span class="rank-number">${index + 1}</span>
        <img src="${favicon(tool.domain)}" alt="${tool.name} 标识" loading="lazy" />
        <strong>${tool.name}</strong>
        <small>${tool.category}</small>
        <b>${tool.rating.toFixed(1)}</b>
      </button>
    `)
    .join("");
}

function renderLatest() {
  latestList.innerHTML = tools
    .filter((tool) => tool.latest)
    .map((tool) => `
      <button class="latest-item" type="button" data-select="${tool.id}">
        <img src="${favicon(tool.domain)}" alt="${tool.name} 标识" loading="lazy" />
        <strong>${tool.name}</strong>
        <span>${tool.category}</span>
        <small>新收录</small>
      </button>
    `)
    .join("");
}

function renderDrawer() {
  if (!state.drawerOpen) {
    toolDrawer.classList.remove("is-open");
    toolDrawer.innerHTML = "";
    return;
  }
  const tool = tools.find((item) => item.id === state.selectedId) || tools[0];
  const saved = state.saved.has(tool.id) ? "已收藏" : "收藏";
  const compared = state.compare.includes(tool.id) ? "已加入对比" : "加入对比";
  toolDrawer.classList.add("is-open");
  toolDrawer.innerHTML = `
    <div class="drawer-inner">
      <div class="drawer-brand">
        <img src="${favicon(tool.domain)}" alt="${tool.name} 标识" />
        <div>
          <p>${tool.category}</p>
          <h2>${tool.name}</h2>
        </div>
      </div>
      <p class="drawer-desc">${tool.desc}</p>
      <div class="drawer-metrics">
        <span><b>${tool.rating.toFixed(1)}</b>评分</span>
        <span><b>${tool.trend}</b>热度</span>
        <span><b>${tool.price}</b>价格</span>
      </div>
      <div class="tag-row">
        ${tool.fit.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="drawer-actions">
        <a class="button button-primary" href="https://${tool.domain}" target="_blank" rel="noopener noreferrer">访问官网</a>
        <button class="button button-outline" type="button" data-save="${tool.id}">${saved}</button>
        <button class="button button-outline" type="button" data-compare="${tool.id}">${compared}</button>
        <button class="button button-outline" type="button" data-close-drawer>关闭</button>
      </div>
    </div>
  `;
}

function renderAll() {
  renderFeatured();
  renderCategories();
  renderWorkflows();
  renderRanking();
  renderLatest();
  renderDrawer();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function toggleSave(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
    showToast("已从收藏移除");
  } else {
    state.saved.add(id);
    showToast("已收藏，后续可接会员工具夹");
  }
  localStorage.setItem("savedTools", JSON.stringify([...state.saved]));
  renderAll();
}

function toggleCompare(id) {
  if (state.compare.includes(id)) {
    state.compare = state.compare.filter((item) => item !== id);
    showToast("已移出对比清单");
  } else if (state.compare.length >= 3) {
    showToast("最多同时对比 3 个工具");
  } else {
    state.compare.push(id);
    showToast(`已加入对比清单 (${state.compare.length}/3)`);
  }
  renderAll();
}

function openVendorModal(goal = "Featured 推广") {
  $("#leadGoal").value = goal;
  if (typeof vendorModal.showModal === "function") {
    vendorModal.showModal();
  } else {
    showToast("当前浏览器不支持弹窗，请升级浏览器");
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, article.featured-card");
  if (!target) return;

  if (target.dataset.select) {
    state.selectedId = target.dataset.select;
    state.drawerOpen = true;
    renderDrawer();
    document.querySelectorAll("[data-select]").forEach((item) => {
      item.classList.toggle("is-selected", item.dataset.select === state.selectedId);
    });
    return;
  }
  if (target.dataset.query) {
    state.query = target.dataset.query;
    globalSearch.value = state.query;
    renderAll();
    showToast(`已筛选：${state.query}`);
    return;
  }
  if (target.dataset.save) {
    event.stopPropagation();
    toggleSave(target.dataset.save);
    return;
  }
  if (target.dataset.compare) {
    event.stopPropagation();
    toggleCompare(target.dataset.compare);
    return;
  }
  if (target.dataset.rankPeriod) {
    state.rankPeriod = target.dataset.rankPeriod;
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab === target));
    renderRanking();
    return;
  }
  if (target.dataset.closeDrawer !== undefined) {
    state.drawerOpen = false;
    renderDrawer();
    return;
  }
  if (target.dataset.plan) {
    openVendorModal(target.dataset.plan);
  }
});

document.addEventListener("keydown", (event) => {
  const selectable = event.target.closest("[data-select]");
  if (selectable && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    state.selectedId = selectable.dataset.select;
    state.drawerOpen = true;
    renderDrawer();
  }
});

globalSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  window.clearTimeout(globalSearch.timer);
  globalSearch.timer = window.setTimeout(renderAll, 140);
});

$("#themeToggle").addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

$("#openSubmit").addEventListener("click", () => openVendorModal("付费收录"));
$("#openSponsor").addEventListener("click", () => openVendorModal("Featured 推广"));
$("#joinButton").addEventListener("click", () => showToast("账号系统可在下一版接入，当前已预留入口"));
$("#submitLead").addEventListener("click", () => showToast("合作需求已记录，后续可接 CRM 或表单服务"));

const storedTheme = localStorage.getItem("theme");
if (storedTheme) document.documentElement.dataset.theme = storedTheme;

renderAll();
