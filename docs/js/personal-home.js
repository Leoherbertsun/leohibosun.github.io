(() => {
  'use strict';
  const translations = {
    zh: {
      skip: '跳到正文', navAbout: '关于', navWork: '作品', greeting: 'Haibo Sun / FINANCE × AI',
      heroDescription: '研究市场，也把想法做出来。', github: '在 GitHub 找到我',
      artCaption: '留一点空间，给下一个想法。', heroBottom: '金融 · 人工智能 · 研究与创作', scroll: '认识一下',
      aboutHeading: '关于', aboutLead: '用研究理解市场。<br>用代码验证想法。',
      personalNote: '工作之外，喜欢篮球、台球，<br>和那些值得试一试的新东西。',
      aboutText: '在复旦读完金融学本科，继续在复旦管院学习金融。关注 AI 产业、投资研究与量化方法，也喜欢把研究工作流和产品想法做成可用的工具。',
      noteTitle: '研究与经历',
      researchText: '本科论文 SparseLeadLag：基于稀疏注意力机制，研究创业板日内领涨效应与交易策略，获评优秀毕业论文。',
      experienceText: '实践涉及 AI 算力研究、并购项目、指数与债券 ETF、权益量化及产品绩效归因。',
      modelingAward: '2024 · 全国大学生数学建模竞赛国家二等奖，队长', cqf: '2025 · CQF，量化金融专业学习',
      educationOne: '复旦大学', educationOneDetail: '金融学本科', educationTwoDetail: '2024 秋季 · 交换',
      educationThree: '复旦大学管理学院', educationThreeDetail: '金融硕士 · MiF', educationLabel: '学习经历',
      workHeading: '作品', boardTitle: 'AI 投研工作台',
      boardDescription: '把研究日常、策略追踪、流动性观察与事件日历放在一起。',
      skillsDescription: '面向投研的开源技能集，连接行情、信息检索、资料整理与报告。',
      worthmatchDescription: '关于认识与连接的产品实验，探索 AI 对话、个人档案与活动。',
      website: '网站', openSource: '开源', prototype: '原型',
      footerNote: '保持好奇，把想法做出来。', backTop: '回到顶部',
      title: 'Haibo Sun · 个人主页', description: 'Haibo Sun 的个人主页。金融与 AI、投资研究，以及把想法做出来的实践。',
      themeLight: '切换到浅色模式', themeDark: '切换到深色模式', brandLabel: 'Haibo Sun，回到首页', navLabel: '主导航',
      imageAlt: '浅色背景上的蓝色纸环和一颗橙色小球'
    },
    en: {
      skip: 'Skip to content', navAbout: 'About', navWork: 'Work', greeting: 'HAIBO SUN / FINANCE × AI',
      heroDescription: 'Exploring markets. Making ideas real.', github: 'Find me on GitHub',
      artCaption: 'A little room for the next idea.', heroBottom: 'Finance · AI · Research & making', scroll: 'A little about me',
      aboutHeading: 'About', aboutLead: 'Understand markets.<br>Test ideas in code.',
      personalNote: 'Off the clock: basketball, pool,<br>and something new to try.',
      aboutText: 'I studied finance at Fudan and am continuing at its School of Management. My interests span the AI industry, investment research and quantitative methods. I also build tools that bring research workflows and product ideas to life.',
      noteTitle: 'Research & experience',
      researchText: 'SparseLeadLag, my undergraduate thesis, explored intraday lead–lag effects and trading strategies in the ChiNext market using sparse attention. It received an outstanding thesis award.',
      experienceText: 'My practical experience spans AI computing research, M&A projects, index and bond ETFs, equity quant research and performance attribution.',
      modelingAward: '2024 · National second prize, CUMCM · Team leader', cqf: '2025 · CQF studies in quantitative finance',
      educationOne: 'Fudan University', educationOneDetail: 'Undergraduate · Finance', educationTwoDetail: 'Fall 2024 · Exchange',
      educationThree: 'Fudan School of Management', educationThreeDetail: 'Master of Finance · MiF', educationLabel: 'Education',
      workHeading: 'Work', boardTitle: 'AI Investment Research Board',
      boardDescription: 'Research notes, strategy tracking, liquidity observations and an event calendar in one place.',
      skillsDescription: 'Open-source skills connecting market data, information discovery, research materials and reports.',
      worthmatchDescription: 'A product experiment in connection, exploring AI conversations, personal profiles and activities.',
      website: 'Website', openSource: 'Open source', prototype: 'Prototype',
      footerNote: 'Stay curious. Make ideas real.', backTop: 'Back to top',
      title: 'Haibo Sun · Personal Website', description: 'Haibo Sun’s personal website. Finance, AI, investment research and ideas put into practice.',
      themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode', brandLabel: 'Haibo Sun, back to home', navLabel: 'Main navigation',
      imageAlt: 'A blue paper loop and a small orange sphere against a pale background'
    }
  };
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  let locale = 'zh';
  let theme = 'light';
  try {
    const storedLanguage = localStorage.getItem('leo-home-language');
    const storedTheme = localStorage.getItem('haibo-home-theme-v2');
    if (storedLanguage === 'zh' || storedLanguage === 'en') locale = storedLanguage;
    if (storedTheme === 'dark' || storedTheme === 'light') theme = storedTheme;
  } catch { /* The page also works without browser storage. */ }
  function updateThemeLabel() {
    const dark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', translations[locale][dark ? 'themeLight' : 'themeDark']);
  }
  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#181a19' : '#f3f2eb';
    updateThemeLabel();
  }
  function applyLanguage(nextLocale) {
    locale = nextLocale;
    root.lang = locale === 'zh' ? 'zh-CN' : 'en';
    const copy = translations[locale];
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = copy[element.dataset.i18n];
      // Only these static dictionary entries contain the intended line breaks.
      if (value.includes('<br>')) {
        const lines = value.split('<br>');
        element.replaceChildren();
        lines.forEach((line, index) => {
          if (index) element.append(document.createElement('br'));
          element.append(document.createTextNode(line));
        });
      } else element.textContent = value;
    });
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('.brand').setAttribute('aria-label', copy.brandLabel);
    document.querySelector('.main-nav').setAttribute('aria-label', copy.navLabel);
    document.querySelector('.education-path').setAttribute('aria-label', copy.educationLabel);
    document.querySelector('.hero-art img').alt = copy.imageAlt;
    languageToggle.textContent = locale === 'zh' ? 'EN' : '中文';
    languageToggle.lang = locale === 'zh' ? 'en' : 'zh-CN';
    languageToggle.setAttribute('aria-label', locale === 'zh' ? '切换到英文' : 'Switch to Chinese');
    updateThemeLabel();
  }
  applyLanguage(locale);
  applyTheme(theme);
  languageToggle.addEventListener('click', () => {
    applyLanguage(locale === 'zh' ? 'en' : 'zh');
    try { localStorage.setItem('leo-home-language', locale); } catch {}
  });
  themeToggle.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
    try { localStorage.setItem('haibo-home-theme-v2', theme); } catch {}
  });
})();
