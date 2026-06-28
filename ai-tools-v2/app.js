const categories = [
  { id: "hot", name: "热门推荐", icon: "leaderboard", subs: [], isHot: true },
  { id: "ai-office", name: "AI办公工具", icon: "business_center", subs: ["AI语言翻译", "AI表格数据处理", "AI效率提升", "AI思维导图", "AI文档工具", "AI幻灯片和演示", "AI会议工具", "AI法律助手", "AI招聘求职"] },
  { id: "ai-video", name: "AI视频工具", icon: "movie", subs: ["AI视频生成", "AI视频剪辑", "数字人视频", "字幕翻译", "视频素材"] },
  { id: "ai-code", name: "AI编程工具", icon: "code_blocks", subs: ["代码生成", "代码审查", "IDE助手", "DevOps", "低代码"] },
  { id: "ai-chat", name: "AI聊天助手", icon: "forum", subs: ["通用助手", "国内助手", "企业助手", "多模态助手"] },
  { id: "ai-writing", name: "AI写作工具", icon: "edit_note", subs: ["营销文案", "长文写作", "论文写作", "自媒体写作"] },
  { id: "ai-learning", name: "AI学习网站", icon: "school", subs: ["语言学习", "在线课程", "学术研究", "知识问答"] },
  { id: "ai-image", name: "AI图像工具", icon: "image", subs: ["AI图片插画生成", "常用AI图像工具", "AI商品图生成", "AI图片背景移除", "AI图片无损放大", "AI图片优化修复", "AI 3D模型生成"] },
  { id: "ai-model", name: "AI训练模型", icon: "model_training", subs: ["大语言模型", "图像模型", "视频模型", "开源模型"] },
  { id: "ai-search", name: "AI搜索引擎", icon: "travel_explore", subs: ["AI搜索", "学术搜索", "网页总结", "知识库搜索"] },
  { id: "ai-platform", name: "AI开发平台", icon: "cloud", subs: ["模型API", "智能体平台", "工作流编排", "向量数据库"] },
  { id: "ai-audio", name: "AI音频工具", icon: "graphic_eq", subs: ["AI音乐", "语音合成", "音频转写", "声音克隆"] },
  { id: "ai-design", name: "AI设计工具", icon: "design_services", subs: ["UI设计", "品牌设计", "原型设计", "素材生成"] },
  { id: "ai-benchmark", name: "AI模型评测", icon: "leaderboard", subs: ["模型榜单", "性能评测", "安全评测", "成本对比"] },
  { id: "ai-prompt", name: "AI提示指令", icon: "tips_and_updates", subs: ["提示词库", "角色指令", "工作流模板", "企业模板"] },
  { id: "ai-detect", name: "AI内容检测", icon: "verified_user", subs: ["AI文本检测", "图片检测", "抄袭检查", "合规审核"] },
  { id: "ai-agent", name: "AI智能体", icon: "smart_toy", subs: ["个人智能体", "销售智能体", "客服智能体", "研究智能体"] }
];

const revenueOffers = [
  { goal: "免费提交工具", title: "提交工具", icon: "add_circle", desc: "开放基础收录入口，沉淀厂商资料和审核线索。" },
  { goal: "购买 Featured 推荐位", title: "Featured 推荐", icon: "workspace_premium", desc: "分类页、热门区和搜索结果中的高意向曝光位。" },
  { goal: "会员订阅", title: "会员工具库", icon: "card_membership", desc: "价格监控、深度评测、收藏夹和团队选型清单。" },
  { goal: "获取行业报告", title: "行业报告", icon: "summarize", desc: "按行业生成榜单、趋势和投放洞察，承接 B2B 线索。" },
  { goal: "加入社群", title: "加入社群", icon: "groups", desc: "运营用户社群、专家答疑、案例活动和工具折扣。" },
  { goal: "企业线索合作", title: "企业线索", icon: "handshake", desc: "把搜索意图、分类浏览和表单需求转化为销售线索。" }
];

const newsThumbs = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=640&q=80"
];

function news(id, title, summary, category, date, views, thumbIndex = 0) {
  return {
    id,
    title,
    summary,
    category,
    date,
    views,
    thumb: newsThumbs[thumbIndex % newsThumbs.length],
    url: `#news-${id}`
  };
}

const dailyNews = [
  news("0629-01", "AI日报：企业级智能体平台加速落地；国产视频模型开放长镜头生成；多模态搜索进入办公场景", "今日重点关注智能体编排、视频生成和企业知识检索三条主线。平台厂商开始把模型能力包装成可交付流程，内容团队则更关心稳定性、版权边界和成本结构。", "产品", "今天", "18.6K", 0),
  news("0629-02", "AI日报：开源推理模型刷新中文评测；云厂商下调长上下文价格；AI 浏览器插件迎来团队版", "模型侧继续围绕推理、长上下文和工具调用优化，应用侧则把浏览器、文档和表格作为高频入口，强调从个人效率走向团队协作。", "模型", "1 天前", "21.4K", 1),
  news("0629-03", "AI日报：代码助手转向全流程研发；设计工具推出品牌素材生成；客服机器人强化质检闭环", "开发、设计和客服三个成熟场景都在从单点能力升级为流程型产品。新的竞争点不再只是生成质量，而是权限、审计、协作和可复用模板。", "应用", "2 天前", "19.8K", 2),
  news("0629-04", "AI日报：教育平台上线个性化助教；医疗问答模型增加引用校验；电商素材生产进入批量化", "垂直行业正在把 AI 能力嵌入既有业务系统，重点解决可信来源、批量处理和人工复核。真正可落地的产品更强调可控和可追溯。", "行业", "3 天前", "16.2K", 3),
  news("0629-05", "AI日报：语音模型支持实时同传；音乐生成开放商用授权；播客剪辑工具补齐多语言字幕", "音频赛道从体验尝鲜转向生产工具。实时翻译、声音一致性和授权清晰度成为创作者和企业采购时最关心的三个因素。", "音频", "4 天前", "14.9K", 4),
  news("0629-06", "AI日报：图像生成平台升级商品图模板；3D 生成加入材质编辑；营销团队开始使用视觉工作流", "视觉 AI 的主流需求正在从单张惊艳图片转向稳定生产。商品图、海报、短视频封面和品牌模板成为商业化最明确的落点。", "图像", "5 天前", "17.3K", 5),
  news("0629-07", "AI日报：大模型 API 聚合服务增加成本面板；RAG 工具强化权限控制；向量数据库推出轻量套餐", "企业开发者关注点从接入模型转为持续运营，包括成本监控、权限隔离、检索质量和多模型切换。基础设施产品开始主动降低试用门槛。", "开发", "6 天前", "15.7K", 0),
  news("0629-08", "AI日报：办公套件集成会议纪要代理；表格 AI 支持自动建模；PPT 生成工具强化多人审阅", "办公 AI 正在进入更具体的日常流程。会议、表格、演示和文档之间的上下文流转，会决定工具能否真正提高团队效率。", "办公", "06-22", "22.1K", 1),
  news("0629-09", "AI日报：AI 搜索产品加入来源评分；学术检索支持批量摘要；知识库问答强调引用复核", "搜索类产品的差异化正在回到信任问题。来源评分、引用追踪和结果复核可以帮助用户把 AI 回答转化为可采纳结论。", "搜索", "06-21", "20.4K", 2),
  news("0629-10", "AI日报：视频生成模型开放角色一致性；数字人口播进入直播间；短剧团队测试脚本到成片流程", "视频 AI 的商业需求集中在稳定角色、可控镜头和快速改稿。内容团队更愿意采用能融入剪辑、配音和投放流程的工具。", "视频", "06-20", "18.8K", 3),
  news("0629-11", "AI日报：提示词平台转向工作流市场；智能体模板覆盖销售场景；低代码应用加入审批节点", "提示词正在从单条文本资产变成可售卖流程。销售、客服、运营和研究模板更容易体现业务价值，也更适合形成会员权益。", "智能体", "06-19", "13.5K", 4),
  news("0629-12", "AI日报：内容检测工具更新图片识别；版权合规服务增加训练数据声明；平台加强 AI 标识", "随着生成内容规模增加，检测、标识和授权成为平台治理基础能力。企业侧更需要一套可解释的审核流程，而不是单一分数。", "合规", "06-18", "12.7K", 5),
  news("0629-13", "AI日报：模型评测站加入真实任务榜；推理成本成为采购指标；开源社区关注小模型部署", "评测正在从通用分数走向真实任务表现。对于企业而言，速度、成本、稳定性和部署方式常常比单项榜单排名更重要。", "评测", "06-17", "15.2K", 0),
  news("0629-14", "AI日报：跨境营销工具支持多语种素材；独立站接入 AI 导购；广告平台测试自动创意组合", "营销 AI 的价值逐渐从文案生成扩展到素材组合、受众匹配和落地页优化。闭环数据会成为产品留存的关键。", "营销", "06-16", "16.9K", 1),
  news("0629-15", "AI日报：企业知识库支持部门空间；客服系统打通工单摘要；内部搜索开始接入权限图谱", "企业知识管理进入精细化阶段。权限、更新频率和答案来源会影响用户是否愿意把 AI 作为正式工作入口。", "企业", "06-15", "14.1K", 2),
  news("0629-16", "AI日报：编程智能体加入移动端任务看板；PR 审查工具支持风险解释；测试生成强调覆盖率", "研发 AI 正在覆盖需求拆解、编码、测试和审查。团队采用时会更看重变更可控性、上下文理解和现有流程兼容。", "编程", "06-14", "23.6K", 3),
  news("0629-17", "AI日报：AI 硬件厂商更新端侧助手；可穿戴设备强化语音交互；本地模型强调隐私卖点", "端侧 AI 的产品叙事正在从炫技转向陪伴、记录和隐私。真正的挑战是续航、响应速度和与手机生态的协同。", "硬件", "06-13", "11.8K", 4),
  news("0629-18", "AI日报：投融资关注行业 Agent；数据服务商推出合成数据方案；企业采购更重视 ROI", "资本与客户都在寻找更清晰的商业回报。能绑定行业流程、降低人力成本或提升成交效率的 AI 产品更容易获得预算。", "商业", "06-12", "19.5K", 5),
  news("0629-19", "AI日报：机器人公司展示多任务操作；仿真平台开放训练接口；具身智能仍等待成本拐点", "机器人和具身智能的进展仍以研发平台和试点场景为主。短期机会集中在数据、仿真、远程操作和垂直行业样板间。", "机器人", "06-11", "13.2K", 0),
  news("0629-20", "AI日报：浏览器助手开始理解网页流程；个人知识库支持自动归档；效率工具围绕任务闭环竞争", "个人效率产品从问答走向行动，浏览、记录、归档和提醒逐渐连成闭环。谁能减少用户在工具之间切换，谁就更有机会留住用户。", "效率", "06-10", "17.6K", 1)
];

const hotNews = [
  "企业智能体从演示走向交付，流程编排能力成为采购重点",
  "长上下文价格继续下探，中小团队开始重估知识库方案",
  "国产视频模型竞争升级，角色一致性和镜头可控性被反复比较",
  "AI 搜索进入引用复核阶段，来源可信度成为核心卖点",
  "代码助手产品转向任务看板，研发流程集成成为新战场",
  "电商商品图批量生成需求升温，品牌模板和审核流更受欢迎",
  "实时语音同传进入会议场景，多语言团队开始小范围试用",
  "行业 Agent 获得更多融资关注，垂直流程 ROI 成为关键词",
  "内容合规产品升级 AI 标识能力，平台治理需求持续增加",
  "办公 AI 从单点生成走向跨文档协作，会议和表格成为入口",
  "模型评测榜单增加真实任务维度，采购决策更关注成本曲线",
  "端侧助手强调隐私和低延迟，可穿戴设备继续探索高频场景"
].map((title, index) => ({
  id: `hot-${index + 1}`,
  title,
  url: `#news-hot-${index + 1}`
}));

function tool(id, name, website, category, sub, summary, tags, price, flags = {}) {
  return {
    id,
    name,
    website,
    category,
    sub,
    summary,
    tags,
    price,
    featured: Boolean(flags.featured),
    latest: Boolean(flags.latest),
    sponsored: Boolean(flags.sponsored),
    score: flags.score || 8.4
  };
}

const tools = [
  tool("deepseek", "DeepSeek", "https://deepseek.com", "ai-chat", "通用助手", "推理、写作和代码任务表现均衡，适合个人和团队日常高频使用。", ["中文友好", "推理", "API"], "免费起", { featured: true, score: 9.6 }),
  tool("yuanbao", "腾讯元宝", "https://yuanbao.tencent.com", "ai-chat", "国内助手", "面向中文办公、阅读、搜索和创作的综合助手，适合资料整理。", ["国内可用", "搜索", "办公"], "免费起", { featured: true, score: 9.2 }),
  tool("chatgpt", "ChatGPT", "https://chatgpt.com", "ai-chat", "多模态助手", "通用型 AI 助手，覆盖写作、分析、编程、图像理解和语音对话。", ["多模态", "写作", "编程"], "$20/月起", { featured: true, score: 9.5 }),
  tool("claude", "Claude", "https://claude.ai", "ai-chat", "通用助手", "适合长文分析、复杂写作、知识整理和团队协作场景。", ["长上下文", "写作", "分析"], "$20/月起", { score: 9.1 }),
  tool("kimi", "Kimi", "https://kimi.moonshot.cn", "ai-chat", "国内助手", "长文本阅读和资料问答体验稳定，适合文档密集型工作。", ["长文档", "中文", "阅读"], "免费起", { latest: true, score: 9.0 }),
  tool("doubao", "豆包", "https://www.doubao.com", "ai-chat", "国内助手", "覆盖聊天、写作、图像和学习场景的中文 AI 助手。", ["中文", "创作", "学习"], "免费起", { score: 8.9 }),
  tool("poe", "Poe", "https://poe.com", "ai-chat", "多模态助手", "聚合多模型的聊天平台，便于对比不同模型输出。", ["多模型", "对比", "社区"], "$19.99/月起", { score: 8.6 }),

  tool("notion-ai", "Notion AI", "https://www.notion.so/product/ai", "ai-office", "AI文档工具", "嵌入文档和知识库的写作、总结、翻译和问答能力。", ["文档", "知识库", "团队"], "$10/月起", { featured: true, score: 8.8 }),
  tool("gamma", "Gamma", "https://gamma.app", "ai-office", "AI幻灯片和演示", "根据主题生成演示、网页和提案，适合快速表达想法。", ["PPT", "提案", "模板"], "$10/月起", { featured: true, score: 8.9 }),
  tool("aippt", "AiPPT", "https://www.aippt.cn", "ai-office", "AI幻灯片和演示", "面向中文用户的一键 PPT 生成和模板编辑工具。", ["PPT", "中文", "模板"], "免费起", { score: 8.4 }),
  tool("feishu-minutes", "飞书妙记", "https://www.feishu.cn/product/minutes", "ai-office", "AI会议工具", "会议录音转写、摘要和待办提取，适合团队复盘。", ["会议", "转写", "协作"], "免费起", { score: 8.5 }),
  tool("google-translate", "Google 翻译", "https://translate.google.com", "ai-office", "AI语言翻译", "覆盖多语言文本、网页和图片翻译的通用工具。", ["翻译", "多语言", "免费"], "免费", { score: 8.7 }),
  tool("deepl", "DeepL", "https://www.deepl.com", "ai-office", "AI语言翻译", "适合商务、论文和长文档翻译，输出风格自然。", ["翻译", "文档", "商务"], "免费起", { score: 8.8 }),
  tool("rows", "Rows AI", "https://rows.com/ai", "ai-office", "AI表格数据处理", "在表格中生成公式、清洗数据和分析业务指标。", ["表格", "数据", "分析"], "免费起", { latest: true, score: 8.2 }),
  tool("xmind-ai", "Xmind AI", "https://xmind.ai", "ai-office", "AI思维导图", "从文本或主题生成思维导图，适合学习和方案梳理。", ["思维导图", "学习", "梳理"], "免费起", { score: 8.1 }),

  tool("kling", "可灵AI", "https://klingai.com", "ai-video", "AI视频生成", "面向创作者的视频生成和编辑平台，适合广告和短视频素材。", ["视频生成", "中文", "创意"], "免费起", { featured: true, score: 9.1 }),
  tool("runway", "Runway", "https://runwayml.com", "ai-video", "AI视频生成", "支持文生视频、图生视频和视频编辑的创意生产平台。", ["视频生成", "剪辑", "创意"], "$15/月起", { score: 8.9 }),
  tool("pika", "Pika", "https://pika.art", "ai-video", "AI视频生成", "适合快速生成风格化短视频和社交媒体素材。", ["短视频", "动效", "社交"], "免费起", { score: 8.5 }),
  tool("capcut", "剪映", "https://www.capcut.cn", "ai-video", "AI视频剪辑", "剪辑、字幕、模板和智能包装能力完整，适合内容团队。", ["剪辑", "字幕", "模板"], "免费起", { score: 8.7 }),
  tool("heygen", "HeyGen", "https://www.heygen.com", "ai-video", "数字人视频", "数字人讲解、口播和翻译视频制作工具。", ["数字人", "口播", "翻译"], "$29/月起", { score: 8.4 }),
  tool("descript", "Descript", "https://www.descript.com", "ai-video", "字幕翻译", "以文本编辑视频和播客，适合转写、剪辑和字幕工作流。", ["转写", "剪辑", "播客"], "$12/月起", { latest: true, score: 8.3 }),

  tool("cursor", "Cursor", "https://www.cursor.com", "ai-code", "IDE助手", "AI 原生代码编辑器，适合理解项目、生成代码和重构。", ["IDE", "代码生成", "重构"], "$20/月起", { featured: true, score: 9.4 }),
  tool("github-copilot", "GitHub Copilot", "https://github.com/features/copilot", "ai-code", "代码生成", "主流代码补全和聊天助手，适合多语言开发团队。", ["补全", "团队", "GitHub"], "$10/月起", { score: 9.0 }),
  tool("codeium", "Windsurf", "https://windsurf.com", "ai-code", "IDE助手", "面向工程项目的智能 IDE，支持上下文理解和任务流。", ["IDE", "代理", "开发"], "免费起", { score: 8.6 }),
  tool("replit", "Replit Agent", "https://replit.com", "ai-code", "低代码", "从想法到应用原型的一站式在线开发环境。", ["在线开发", "原型", "部署"], "$20/月起", { latest: true, score: 8.5 }),
  tool("qodo", "Qodo", "https://www.qodo.ai", "ai-code", "代码审查", "聚焦测试生成、代码质量和 PR 审查的研发辅助工具。", ["测试", "审查", "质量"], "免费起", { score: 8.2 }),
  tool("snyk", "Snyk", "https://snyk.io", "ai-code", "DevOps", "开发安全平台，适合依赖、容器和代码风险扫描。", ["安全", "DevOps", "扫描"], "免费起", { score: 8.3 }),

  tool("copy-ai", "Copy.ai", "https://www.copy.ai", "ai-writing", "营销文案", "营销团队用来生成广告、邮件、销售话术和内容资产。", ["营销", "销售", "文案"], "$49/月起", { score: 8.2 }),
  tool("jasper", "Jasper", "https://www.jasper.ai", "ai-writing", "营销文案", "面向品牌团队的内容生成和语气一致性管理工具。", ["品牌", "营销", "团队"], "$39/月起", { score: 8.4 }),
  tool("grammarly", "Grammarly", "https://www.grammarly.com", "ai-writing", "长文写作", "英文写作润色、改写和语气检查工具。", ["英文", "润色", "改写"], "免费起", { score: 8.5 }),
  tool("writesonic", "Writesonic", "https://writesonic.com", "ai-writing", "自媒体写作", "用于博客、社媒和 SEO 内容生产的写作平台。", ["SEO", "博客", "社媒"], "$16/月起", { latest: true, score: 8.1 }),
  tool("scispace", "SciSpace", "https://typeset.io", "ai-writing", "论文写作", "学术论文阅读、解释和写作辅助平台。", ["论文", "阅读", "引用"], "免费起", { score: 8.3 }),
  tool("秘塔写作猫", "秘塔写作猫", "https://xiezuocat.com", "ai-writing", "长文写作", "中文写作纠错、润色和改写工具，适合日常文案。", ["中文", "润色", "纠错"], "免费起", { score: 8.0 }),

  tool("duolingo", "Duolingo Max", "https://www.duolingo.com", "ai-learning", "语言学习", "结合 AI 对话和解释的语言学习产品。", ["语言", "练习", "移动端"], "$29.99/月起", { score: 8.1 }),
  tool("coursera-coach", "Coursera Coach", "https://www.coursera.org", "ai-learning", "在线课程", "在课程学习中提供答疑、总结和学习建议。", ["课程", "学习", "答疑"], "免费起", { score: 8.0 }),
  tool("perplexity", "Perplexity", "https://www.perplexity.ai", "ai-learning", "知识问答", "带来源引用的问答搜索，适合快速理解新主题。", ["问答", "引用", "搜索"], "$20/月起", { featured: true, score: 9.0 }),
  tool("consensus", "Consensus", "https://consensus.app", "ai-learning", "学术研究", "面向论文证据检索和研究结论摘要的搜索工具。", ["论文", "证据", "研究"], "免费起", { score: 8.4 }),
  tool("elicit", "Elicit", "https://elicit.com", "ai-learning", "学术研究", "帮助研究者查找论文、提取变量和整理证据表。", ["研究", "论文", "表格"], "免费起", { latest: true, score: 8.2 }),

  tool("midjourney", "Midjourney", "https://www.midjourney.com", "ai-image", "AI图片插画生成", "高质量图像生成工具，适合视觉探索、广告和概念图。", ["图像", "插画", "创意"], "$10/月起", { featured: true, score: 9.0 }),
  tool("ideogram", "Ideogram", "https://ideogram.ai", "ai-image", "常用AI图像工具", "擅长生成带文字的海报、标志和社媒视觉。", ["海报", "文字", "设计"], "免费起", { score: 8.5 }),
  tool("liblib", "LiblibAI", "https://www.liblib.art", "ai-image", "常用AI图像工具", "中文创作者常用的模型、图片生成和工作流社区。", ["中文", "模型", "社区"], "免费起", { score: 8.4 }),
  tool("canva", "Canva AI", "https://www.canva.com", "ai-image", "AI商品图生成", "把 AI 图片、模板和批量设计整合进日常营销素材制作。", ["模板", "商品图", "营销"], "免费起", { score: 8.6 }),
  tool("removebg", "remove.bg", "https://www.remove.bg", "ai-image", "AI图片背景移除", "快速自动抠图，适合电商图和素材处理。", ["抠图", "电商", "自动化"], "免费起", { score: 8.2 }),
  tool("clipdrop", "Clipdrop", "https://clipdrop.co", "ai-image", "AI图片优化修复", "图片修复、扩图、去物体和背景处理工具箱。", ["修复", "扩图", "去物体"], "免费起", { latest: true, score: 8.1 }),
  tool("magnific", "Magnific", "https://magnific.ai", "ai-image", "AI图片无损放大", "高质量图片放大和细节增强，适合商业视觉。", ["放大", "增强", "细节"], "$39/月起", { score: 8.2 }),
  tool("spline", "Spline AI", "https://spline.design", "ai-image", "AI 3D模型生成", "用于 3D 场景、模型和网页交互视觉的设计工具。", ["3D", "网页", "交互"], "免费起", { score: 8.0 }),

  tool("huggingface", "Hugging Face", "https://huggingface.co", "ai-model", "开源模型", "模型、数据集和应用社区，适合研究和开发者探索。", ["开源", "模型", "社区"], "免费起", { score: 9.1 }),
  tool("openai-api", "OpenAI API", "https://platform.openai.com", "ai-model", "大语言模型", "面向开发者的大模型 API 平台，覆盖文本、多模态和工具调用。", ["API", "多模态", "开发"], "按量计费", { score: 9.0 }),
  tool("replicate", "Replicate", "https://replicate.com", "ai-model", "图像模型", "托管和调用开源模型的平台，适合快速实验。", ["模型调用", "开源", "原型"], "按量计费", { score: 8.3 }),
  tool("fal", "fal", "https://fal.ai", "ai-model", "视频模型", "面向生成式媒体的模型推理平台，适合图像和视频应用。", ["推理", "图像", "视频"], "按量计费", { latest: true, score: 8.2 }),

  tool("metaso", "秘塔AI搜索", "https://metaso.cn", "ai-search", "AI搜索", "中文搜索、资料总结和文献问答体验清爽。", ["中文", "搜索", "总结"], "免费起", { featured: true, score: 8.8 }),
  tool("genspark", "Genspark", "https://www.genspark.ai", "ai-search", "网页总结", "把搜索结果组织成主题页面，适合调研和比较。", ["搜索", "总结", "调研"], "免费起", { score: 8.3 }),
  tool("exa", "Exa", "https://exa.ai", "ai-search", "知识库搜索", "面向 AI 应用的语义搜索 API 和网页检索能力。", ["API", "语义", "检索"], "按量计费", { score: 8.2 }),
  tool("semantic-scholar", "Semantic Scholar", "https://www.semanticscholar.org", "ai-search", "学术搜索", "学术论文搜索和引用网络探索工具。", ["论文", "引用", "学术"], "免费", { score: 8.1 }),

  tool("coze", "Coze", "https://www.coze.com", "ai-platform", "智能体平台", "搭建聊天机器人、智能体和自动化流程的平台。", ["智能体", "工作流", "机器人"], "免费起", { score: 8.6 }),
  tool("dify", "Dify", "https://dify.ai", "ai-platform", "工作流编排", "开源 LLM 应用开发平台，支持工作流、知识库和模型接入。", ["开源", "工作流", "知识库"], "免费起", { featured: true, score: 8.9 }),
  tool("langchain", "LangChain", "https://www.langchain.com", "ai-platform", "模型API", "构建 LLM 应用和智能体的开发框架与平台。", ["开发", "智能体", "框架"], "免费起", { score: 8.5 }),
  tool("pinecone", "Pinecone", "https://www.pinecone.io", "ai-platform", "向量数据库", "面向语义检索和 RAG 应用的托管向量数据库。", ["向量", "RAG", "检索"], "免费起", { score: 8.3 }),

  tool("suno", "Suno", "https://suno.com", "ai-audio", "AI音乐", "根据文本生成歌曲和音乐片段，适合内容创作。", ["音乐", "歌曲", "创作"], "免费起", { featured: true, score: 8.8 }),
  tool("udio", "Udio", "https://www.udio.com", "ai-audio", "AI音乐", "生成不同风格的音乐作品，适合灵感探索和 Demo。", ["音乐", "风格", "Demo"], "免费起", { score: 8.4 }),
  tool("elevenlabs", "ElevenLabs", "https://elevenlabs.io", "ai-audio", "语音合成", "高质量语音合成、配音和声音克隆平台。", ["配音", "TTS", "声音克隆"], "$5/月起", { score: 8.7 }),
  tool("otter", "Otter.ai", "https://otter.ai", "ai-audio", "音频转写", "会议转写、摘要和协作记录工具。", ["转写", "会议", "摘要"], "免费起", { score: 8.1 }),

  tool("figma-ai", "Figma AI", "https://www.figma.com", "ai-design", "UI设计", "在设计工作流中辅助生成、改写、搜索和整理界面资产。", ["UI", "协作", "设计"], "免费起", { score: 8.7 }),
  tool("framer", "Framer", "https://www.framer.com", "ai-design", "原型设计", "面向网站设计和发布的可视化工具，支持 AI 生成页面。", ["网站", "原型", "发布"], "免费起", { score: 8.4 }),
  tool("looka", "Looka", "https://looka.com", "ai-design", "品牌设计", "生成品牌标识、配色和基础视觉资产。", ["Logo", "品牌", "视觉"], "付费下载", { score: 8.0 }),
  tool("uizard", "Uizard", "https://uizard.io", "ai-design", "原型设计", "从截图、草图或提示生成产品界面原型。", ["原型", "截图", "低保真"], "免费起", { latest: true, score: 8.1 }),

  tool("lmarena", "LMArena", "https://lmarena.ai", "ai-benchmark", "模型榜单", "通过匿名对战评估模型偏好和综合表现。", ["榜单", "模型", "对比"], "免费", { score: 8.6 }),
  tool("artificial-analysis", "Artificial Analysis", "https://artificialanalysis.ai", "ai-benchmark", "成本对比", "对比模型速度、价格、质量和上下文能力。", ["成本", "速度", "质量"], "免费", { score: 8.5 }),
  tool("helm", "HELM", "https://crfm.stanford.edu/helm", "ai-benchmark", "性能评测", "学术导向的模型评测框架和结果库。", ["学术", "评测", "基准"], "免费", { score: 8.2 }),

  tool("flowgpt", "FlowGPT", "https://flowgpt.com", "ai-prompt", "提示词库", "提示词和 AI 应用玩法社区，适合寻找灵感。", ["提示词", "社区", "模板"], "免费起", { score: 8.0 }),
  tool("promptbase", "PromptBase", "https://promptbase.com", "ai-prompt", "提示词库", "买卖和浏览提示词模板的市场。", ["市场", "模板", "提示词"], "付费模板", { score: 7.9 }),
  tool("learnprompting", "Learn Prompting", "https://learnprompting.org", "ai-prompt", "角色指令", "系统学习提示工程和模型交互方法的资料库。", ["教程", "提示工程", "学习"], "免费", { score: 8.1 }),

  tool("gptzero", "GPTZero", "https://gptzero.me", "ai-detect", "AI文本检测", "检测文本是否可能由 AI 生成，适合教育和内容审核。", ["文本检测", "教育", "审核"], "免费起", { score: 8.0 }),
  tool("originality", "Originality.ai", "https://originality.ai", "ai-detect", "抄袭检查", "面向内容团队的 AI 检测、抄袭检查和事实核查。", ["检测", "抄袭", "内容"], "按量计费", { score: 8.1 }),
  tool("hive", "Hive Moderation", "https://thehive.ai", "ai-detect", "图片检测", "图像、视频和文本审核 API，适合平台合规。", ["审核", "API", "图片"], "企业报价", { score: 8.0 }),

  tool("manus", "Manus", "https://manus.im", "ai-agent", "个人智能体", "面向复杂任务执行的通用智能体产品。", ["任务", "代理", "自动化"], "邀请制", { latest: true, score: 8.2 }),
  tool("zapier-agents", "Zapier Agents", "https://zapier.com/agents", "ai-agent", "个人智能体", "把智能体连接到 SaaS 工具和自动化流程中。", ["自动化", "SaaS", "流程"], "免费起", { score: 8.3 }),
  tool("intercom-fin", "Intercom Fin", "https://www.intercom.com/fin", "ai-agent", "客服智能体", "面向客户支持的 AI 客服和知识库问答助手。", ["客服", "知识库", "企业"], "企业报价", { score: 8.4 }),
  tool("clay", "Clay", "https://www.clay.com", "ai-agent", "销售智能体", "销售线索 enrichment、自动化外联和数据工作流平台。", ["销售", "线索", "自动化"], "$149/月起", { score: 8.2 })
].map((item, index) => ({ ...item, rank: index + 1 }));

const state = {
  query: "",
  selectedId: "deepseek",
  drawerOpen: false,
  newsPage: 1,
  filters: {},
  saved: new Set(JSON.parse(localStorage.getItem("savedTools") || "[]")),
  compare: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const categoryNav = $("#categoryNav");
const mobileCategoryNav = $("#mobileCategoryNav");
const hotTools = $("#hotTools");
const categorySections = $("#categorySections");
const offerGrid = $("#offerGrid");
const newsPage = $("#newsPage");
const dailyNewsList = $("#dailyNewsList");
const hotNewsList = $("#hotNewsList");
const newsPagination = $("#newsPagination");
const toolDrawer = $("#toolDrawer");
const toast = $("#toast");
const leadModal = $("#leadModal");
const mobileMenu = $("#mobileMenu");
const mobileMenuBackdrop = $("#mobileMenuBackdrop");
const mobileSearchPanel = $("#mobileSearchPanel");
const globalSearch = $("#globalSearch");
const heroSearch = $("#heroSearch");
const mobileSearch = $("#mobileSearch");

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function getDomain(website) {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").split("/")[0];
  }
}

function favicon(website) {
  return `https://www.google.com/s2/favicons?domain=${getDomain(website)}&sz=96`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name, className = "") {
  return `<span class="iconfont icon-${escapeHtml(name)} ${className}" aria-hidden="true"></span>`;
}

function matchTool(toolItem) {
  if (!state.query.trim()) return true;
  const category = categoryById(toolItem.category);
  const query = state.query.trim().toLowerCase();
  const haystack = [
    toolItem.name,
    toolItem.summary,
    toolItem.sub,
    toolItem.tags.join(" "),
    toolItem.price,
    category?.name,
    getDomain(toolItem.website)
  ].join(" ").toLowerCase();
  return query.split(/\s+/).every((part) => haystack.includes(part));
}

function isNewsView() {
  return window.location.hash === "#news";
}

function matchNews(newsItem) {
  if (!state.query.trim()) return true;
  const query = state.query.trim().toLowerCase();
  const haystack = [
    newsItem.title,
    newsItem.summary,
    newsItem.category,
    newsItem.date,
    newsItem.views
  ].join(" ").toLowerCase();
  return query.split(/\s+/).every((part) => haystack.includes(part));
}

function toolsForCategory(categoryId) {
  const activeSub = state.filters[categoryId];
  return tools
    .filter((toolItem) => toolItem.category === categoryId)
    .filter((toolItem) => !activeSub || toolItem.sub === activeSub)
    .filter(matchTool)
    .sort((a, b) => b.score - a.score);
}

function renderCategoryNav(target) {
  target.innerHTML = categories
    .map((category) => {
      const count = category.isHot
        ? tools.filter((toolItem) => toolItem.featured || toolItem.score >= 8.8).length
        : tools.filter((toolItem) => toolItem.category === category.id).length;
      const href = category.isHot ? "#hot" : `#category-${category.id}`;
      return `
        <a class="category-link" href="${href}" data-nav-category="${category.id}">
          <span class="category-icon">${icon(category.icon)}</span>
          <span>${category.name}</span>
          <span class="category-count">${count}</span>
        </a>
      `;
    })
    .join("");
}

function renderToolCard(toolItem) {
  const category = categoryById(toolItem.category);
  const saved = state.saved.has(toolItem.id) ? "已收藏" : "收藏";
  const compared = state.compare.includes(toolItem.id) ? "已对比" : "对比";
  const badges = [
    toolItem.featured ? "热门" : "",
    toolItem.latest ? "新收录" : "",
    toolItem.sponsored ? "推广" : ""
  ].filter(Boolean);
  return `
    <article class="tool-card" data-preview="${toolItem.id}" tabindex="0">
      <div class="card-head">
        <img class="tool-logo" src="${favicon(toolItem.website)}" alt="${escapeHtml(toolItem.name)} 标识" loading="lazy" />
        <div>
          <h3>${escapeHtml(toolItem.name)}</h3>
          <span>${escapeHtml(category?.name || "")} · ${escapeHtml(toolItem.sub)}</span>
        </div>
      </div>
      <p>${escapeHtml(toolItem.summary)}</p>
      <div class="tool-tags">
        ${[...badges, ...toolItem.tags].slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a class="mini-button mini-primary" href="${toolItem.website}" target="_blank" rel="noopener noreferrer">${icon("open_in_new", "mini-icon")}访问</a>
        <button class="mini-button" type="button" data-save="${toolItem.id}">${icon(state.saved.has(toolItem.id) ? "bookmark_added" : "bookmark", "mini-icon")}${saved}</button>
        <button class="mini-button" type="button" data-compare="${toolItem.id}">${icon(state.compare.includes(toolItem.id) ? "checklist" : "compare_arrows", "mini-icon")}${compared}</button>
        <button class="mini-button mini-revenue" type="button" data-plan="购买 Featured 推荐位">${icon("campaign", "mini-icon")}推广</button>
      </div>
    </article>
  `;
}

function renderHotTools() {
  const list = tools
    .filter((toolItem) => toolItem.featured || toolItem.score >= 8.8)
    .filter(matchTool)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
  hotTools.innerHTML = list.length ? list.map(renderToolCard).join("") : `<div class="section-empty">没有找到匹配的热门工具</div>`;
}

function renderCategorySections() {
  categorySections.innerHTML = categories
    .filter((category) => !category.isHot)
    .map((category) => {
      const list = toolsForCategory(category.id);
      const activeSub = state.filters[category.id] || "";
      const chips = ["", ...category.subs].map((sub) => {
        const active = activeSub === sub ? " is-active" : "";
        return `<button class="chip-button${active}" type="button" data-filter-cat="${category.id}" data-filter-sub="${escapeHtml(sub)}">${sub || "全部"}</button>`;
      }).join("");
      const cards = list.length
        ? `<div class="tool-grid">${list.map(renderToolCard).join("")}</div>`
        : `<div class="section-empty">当前筛选没有匹配工具，可以清空搜索或切换子分类</div>`;
      return `
        <section class="category-section" id="category-${category.id}" aria-labelledby="title-${category.id}">
          <div class="section-heading">
            <h2 id="title-${category.id}">${escapeHtml(category.name)}</h2>
            <button class="text-button" type="button" data-plan="${escapeHtml(category.name)} 分类合作">查看更多 ${icon("arrow_forward", "inline-icon")}</button>
          </div>
          <div class="subfilters" aria-label="${escapeHtml(category.name)} 子分类筛选">
            ${chips}
          </div>
          ${cards}
        </section>
      `;
    })
    .join("");
}

function renderOffers() {
  offerGrid.innerHTML = revenueOffers
    .map((offer) => `
      <article class="offer-card">
        <span class="offer-icon">${icon(offer.icon)}</span>
        <strong>${escapeHtml(offer.title)}</strong>
        <p>${escapeHtml(offer.desc)}</p>
        <button class="mini-button mini-primary" type="button" data-plan="${escapeHtml(offer.goal)}">${icon("send", "mini-icon")}立即咨询</button>
      </article>
    `)
    .join("");
}

function renderNews() {
  const filtered = dailyNews.filter(matchNews);
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  state.newsPage = Math.min(state.newsPage, pageCount);
  const start = (state.newsPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  dailyNewsList.innerHTML = pageItems.length
    ? pageItems.map((item) => `
      <a class="news-card" href="${item.url}" data-news-open="${item.id}">
        <div class="news-thumb">
          <img src="${item.thumb}" alt="${escapeHtml(item.category)} 资讯封面" loading="lazy" />
          <span class="news-badge">${escapeHtml(item.category)}</span>
        </div>
        <div class="news-card-body">
          <h2>${escapeHtml(item.title)}</h2>
          <p>${escapeHtml(item.summary)}</p>
          <div class="news-meta">
            <span>${icon("schedule", "inline-icon")}${escapeHtml(item.date)}</span>
            <span>${icon("leaderboard", "inline-icon")}${escapeHtml(item.views)}</span>
          </div>
        </div>
      </a>
    `).join("")
    : `<div class="section-empty">没有找到匹配的 AI 日报，换个关键词试试</div>`;

  hotNewsList.innerHTML = hotNews
    .filter((item) => {
      if (!state.query.trim()) return true;
      return item.title.toLowerCase().includes(state.query.trim().toLowerCase());
    })
    .slice(0, 12)
    .map((item, index) => `
      <a class="news-rank-item" href="${item.url}" data-news-open="${item.id}">
        <span class="news-rank-index">#${index + 1}</span>
        <span>${escapeHtml(item.title)}</span>
      </a>
    `)
    .join("") || `<div class="section-empty">暂无匹配热点</div>`;

  newsPagination.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const active = page === state.newsPage ? " is-active" : "";
    return `<button class="news-page-button${active}" type="button" data-news-page="${page}" aria-label="第 ${page} 页">${page}</button>`;
  }).join("");
}

function updateViewMode() {
  const newsActive = isNewsView();
  document.querySelector(".app-shell")?.classList.toggle("is-news", newsActive);
  newsPage.hidden = !newsActive;
  if (newsActive) {
    state.drawerOpen = false;
    renderDrawer();
  }
}

function renderDrawer() {
  if (!state.drawerOpen) {
    toolDrawer.classList.remove("is-open");
    toolDrawer.innerHTML = "";
    return;
  }

  const toolItem = tools.find((item) => item.id === state.selectedId) || tools[0];
  const category = categoryById(toolItem.category);
  const saved = state.saved.has(toolItem.id) ? "已收藏" : "收藏";
  const compared = state.compare.includes(toolItem.id) ? "已加入对比" : "加入对比";
  toolDrawer.classList.add("is-open");
  toolDrawer.innerHTML = `
    <div class="drawer-inner">
      <div class="drawer-brand">
        <img src="${favicon(toolItem.website)}" alt="${escapeHtml(toolItem.name)} 标识" />
        <div>
          <p>${escapeHtml(category?.name || "")} · ${escapeHtml(toolItem.sub)}</p>
          <h2>${escapeHtml(toolItem.name)}</h2>
        </div>
      </div>
      <p class="drawer-desc">${escapeHtml(toolItem.summary)}</p>
      <div class="drawer-metrics">
        <span><b>${toolItem.score.toFixed(1)}</b>综合评分</span>
        <span><b>${escapeHtml(toolItem.price)}</b>价格</span>
        <span><b>${escapeHtml(getDomain(toolItem.website))}</b>官网</span>
      </div>
      <div class="tool-tags">
        ${toolItem.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="drawer-actions">
        <a class="button button-primary" href="${toolItem.website}" target="_blank" rel="noopener noreferrer">${icon("open_in_new", "button-icon")}访问官网</a>
        <button class="button button-outline" type="button" data-save="${toolItem.id}">${icon(state.saved.has(toolItem.id) ? "bookmark_added" : "bookmark", "button-icon")}${saved}</button>
        <button class="button button-outline" type="button" data-compare="${toolItem.id}">${icon(state.compare.includes(toolItem.id) ? "checklist" : "compare_arrows", "button-icon")}${compared}</button>
        <button class="button button-outline" type="button" data-plan="购买 Featured 推荐位">${icon("campaign", "button-icon")}咨询推广</button>
        <button class="button button-outline" type="button" data-close-drawer>${icon("close", "button-icon")}关闭</button>
      </div>
    </div>
  `;
}

function renderAll() {
  updateViewMode();
  renderHotTools();
  renderCategorySections();
  renderNews();
  renderDrawer();
  setActiveNav();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function syncSearchInputs(value) {
  [globalSearch, heroSearch, mobileSearch].forEach((input) => {
    if (input && input.value !== value) input.value = value;
  });
}

function setQuery(value) {
  state.query = value;
  state.newsPage = 1;
  syncSearchInputs(value);
  window.clearTimeout(setQuery.timer);
  setQuery.timer = window.setTimeout(renderAll, 120);
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

function openLeadModal(goal = "购买 Featured 推荐位", name = "") {
  $("#leadGoal").value = goal;
  $("#leadName").value = name;
  if (typeof leadModal.showModal === "function") {
    leadModal.showModal();
  } else {
    showToast("当前浏览器不支持弹窗，请升级浏览器");
  }
}

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  mobileMenuBackdrop.hidden = false;
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileMenuBackdrop.hidden = true;
}

function setActiveNav() {
  const hash = window.location.hash;
  const categoryId = hash === "#hot" ? "hot" : hash.replace("#category-", "");
  $$(".category-link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navCategory === categoryId);
  });
  $$("[data-top-nav]").forEach((link) => {
    const nav = link.dataset.topNav;
    const active =
      (nav === "news" && hash === "#news") ||
      (nav === "tools" && (hash === "#hot" || hash.startsWith("#category-"))) ||
      (nav === "home" && (!hash || hash === "#main" || hash === "#"));
    link.classList.toggle("is-active", active);
  });
}

document.addEventListener("click", (event) => {
  const newsPageButton = event.target.closest("[data-news-page]");
  if (newsPageButton) {
    state.newsPage = Number(newsPageButton.dataset.newsPage);
    renderNews();
    newsPage?.scrollIntoView({ block: "start" });
    return;
  }

  const newsOpen = event.target.closest("[data-news-open]");
  if (newsOpen) {
    event.preventDefault();
    showToast("资讯详情页已预留，下一版可接 CMS 或原创长文页");
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    toggleSave(saveButton.dataset.save);
    return;
  }

  const compareButton = event.target.closest("[data-compare]");
  if (compareButton) {
    event.stopPropagation();
    toggleCompare(compareButton.dataset.compare);
    return;
  }

  const planButton = event.target.closest("[data-plan]");
  if (planButton) {
    event.preventDefault();
    event.stopPropagation();
    const card = planButton.closest("[data-preview]");
    const selected = card ? tools.find((item) => item.id === card.dataset.preview) : null;
    openLeadModal(planButton.dataset.plan, selected?.name || "");
    return;
  }

  const filterButton = event.target.closest("[data-filter-cat]");
  if (filterButton) {
    const categoryId = filterButton.dataset.filterCat;
    const sub = filterButton.dataset.filterSub;
    if (sub) state.filters[categoryId] = sub;
    else delete state.filters[categoryId];
    renderAll();
    document.querySelector(`#category-${categoryId}`)?.scrollIntoView({ block: "start" });
    return;
  }

  const drawerClose = event.target.closest("[data-close-drawer]");
  if (drawerClose) {
    state.drawerOpen = false;
    renderDrawer();
    return;
  }

  const preview = event.target.closest("[data-preview]");
  if (preview && !event.target.closest("a, button")) {
    state.selectedId = preview.dataset.preview;
    state.drawerOpen = true;
    renderAll();
  }

  const categoryLink = event.target.closest("[data-nav-category]");
  if (categoryLink) {
    closeMobileMenu();
    window.setTimeout(setActiveNav, 80);
  }
});

document.addEventListener("keydown", (event) => {
  const selectable = event.target.closest("[data-preview]");
  if (selectable && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    state.selectedId = selectable.dataset.preview;
    state.drawerOpen = true;
    renderAll();
  }

  if (event.key === "Escape") {
    closeMobileMenu();
    state.drawerOpen = false;
    renderDrawer();
  }
});

[globalSearch, heroSearch, mobileSearch].forEach((input) => {
  input?.addEventListener("input", (event) => setQuery(event.target.value));
});

$("#heroSearchButton").addEventListener("click", () => {
  renderAll();
  (isNewsView() ? newsPage : $("#hot"))?.scrollIntoView({ block: "start" });
});

$("#openSubmit").addEventListener("click", () => openLeadModal("免费提交工具"));
$("#joinButton").addEventListener("click", () => openLeadModal("会员订阅"));
$("#mobileMenuToggle").addEventListener("click", openMobileMenu);
$("#closeMobileMenu").addEventListener("click", closeMobileMenu);
mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
$("#mobileSearchToggle").addEventListener("click", () => {
  mobileSearchPanel.classList.toggle("is-open");
  if (mobileSearchPanel.classList.contains("is-open")) mobileSearch.focus();
});
$("#submitLead").addEventListener("click", () => showToast("合作需求已记录，下一版可接入 CRM、支付或表单服务"));
window.addEventListener("hashchange", renderAll);

renderCategoryNav(categoryNav);
renderCategoryNav(mobileCategoryNav);
renderOffers();
renderAll();
