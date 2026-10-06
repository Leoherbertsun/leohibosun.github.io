(() => {
  'use strict';
  const translations = {
    zh: {
      skip: '跳到正文', navAbout: '关于', navWork: '研究与作品',
      statement: '在 AI 时代，创与投。',
      intro: '我关注 AI 如何改变产业与投资，也用代码把研究方法和产品想法做成可用的工具。理解机会与亲手实践，是同一件事的两面。',
      background: '复旦大学金融学本科，继续在复旦管院学习 MiF，曾赴 UCD 交换。实践涉及 AI 算力研究、并购、指数与债券 ETF、权益量化和绩效归因。',
      credentials: 'CQF · 数模国家二等奖（队长） · 优秀毕业论文',
      browse: '浏览研究与作品', artCaption: '留一点空间，给下一个想法。',
      research: '研究', researchTitle: 'AI 产业与投资',
      researchDescription: '从产业变化、市场数据和公司基本面中理解机会，关注 AI 带来的结构性影响。',
      practice: '实践', practiceTitle: '工具与产品',
      practiceDescription: '用代码把研究方法落地为可用的工具，让信息、策略与验证形成闭环。',
      workTitle: '研究与作品',
      workIntro: '一些我长期关注的研究方向、正在进行的项目，以及从学习和实践中形成的阶段性成果。',
      boardTitle: 'AI 投研工作台 / Board',
      boardLead: '把信息、策略、流动性与事件放进同一个研究工作流。重点是让判断有依据，让更新有日期，也让后续验证有迹可循。',
      boardDescription: '围绕市场、行业与公司，把分散的数据和材料组织成可以持续更新、回看与验证的研究过程。',
      boardLink: '访问工作台', boardCaption: 'Board · 研究总览', boardStatus: '持续迭代中',
      thesisLead: '用稀疏注意力研究创业板日内领涨关系与交易策略。本科论文获评优秀毕业论文。',
      thesisDescription: '从数据处理与图结构出发，探索股票间的动态领先关系，并通过回测与稳健性检验审视模型的有效性。',
      thesisLink: '查看研究节选', thesisCaption: '本科论文 · 研究节选', thesisNote: '图中为理想化回测示例',
      skillsDescription: '面向投研的开源技能集，连接行情、信息检索、资料整理与报告，让研究流程更容易复用。',
      skillsLink: '查看开源项目',
      worthmatchDescription: '关于认识与连接的产品实验，探索 AI 对话、个人档案与活动的结合方式。目前是原型项目。',
      worthmatchLink: '查看产品原型', footerNote: '研究市场，把想法做出来。', backTop: '回到顶部', close: '关闭',
      dialogCaption: '本科论文研究节选。图中展示理想化回测示例，用于说明研究方法。',
      title: 'Haibo Sun · Finance × AI',
      description: 'Haibo Sun 的个人主页。AI 产业与投资研究，以及用代码把研究方法和产品想法做成工具的实践。',
      themeLight: '切换到浅色模式', themeDark: '切换到深色模式',
      brandLabel: 'Haibo Sun，回到首页', navLabel: '主导航', languageLabel: '语言',
      heroAlt: '浅色背景上的蓝色纸环和一颗橙色小球',
      boardAlt: 'Board 的研究总览页面，展示市场数据、研究回看与行情图表',
      thesisAlt: 'SparseLeadLag 本科论文的理想化回测节选，包含图表与模型公式',
      boardImageLabel: '打开 AI 投研工作台', thesisImageLabel: '查看 SparseLeadLag 研究节选'
    },
    en: {
      skip: 'Skip to content', navAbout: 'About', navWork: 'Research & work',
      statement: 'Building and investing in the AI era.',
      intro: 'I study how AI changes industries and investment, and build tools that turn research methods and product ideas into practice. Understanding an opportunity and working on it are two sides of the same pursuit.',
      background: 'I studied finance at Fudan University and am continuing with its School of Management’s MiF, following an exchange at UCD. My experience spans AI computing research, M&A, index and bond ETFs, equity quant research and performance attribution.',
      credentials: 'CQF · CUMCM national second prize, team leader · Outstanding thesis',
      browse: 'Explore research & work', artCaption: 'A little room for the next idea.',
      research: 'Research', researchTitle: 'AI industries & investment',
      researchDescription: 'Understanding opportunities through industry shifts, market data and company fundamentals, with a focus on AI’s structural impact.',
      practice: 'Practice', practiceTitle: 'Tools & products',
      practiceDescription: 'Turning research methods into useful tools, connecting information, strategies and validation.',
      workTitle: 'Research & work',
      workIntro: 'Research interests, ongoing projects, and work developed through study and practice.',
      boardTitle: 'AI Investment Research / Board',
      boardLead: 'Information, strategies, liquidity and events in one research workflow. The aim is to ground judgments in evidence, date each update and make later validation traceable.',
      boardDescription: 'A workspace for organizing market, industry and company data into a research process that can be updated, revisited and tested.',
      boardLink: 'Visit the research board', boardCaption: 'Board · Research overview', boardStatus: 'An ongoing project',
      thesisLead: 'Studying intraday lead–lag relationships and trading strategies in the ChiNext market with sparse attention. Awarded an outstanding undergraduate thesis.',
      thesisDescription: 'Starting with data preparation and graph structure, the research examines dynamic lead–lag relationships between stocks and tests the model through backtesting and robustness checks.',
      thesisLink: 'View a research excerpt', thesisCaption: 'Undergraduate thesis · Excerpt', thesisNote: 'An idealized backtest example',
      skillsDescription: 'Open-source skills connecting market data, information discovery, research materials and reports to make research workflows easier to reuse.',
      skillsLink: 'Explore the open-source project',
      worthmatchDescription: 'A product experiment in connection, exploring AI conversations, personal profiles and activities. Currently a prototype.',
      worthmatchLink: 'Explore the prototype', footerNote: 'Exploring markets. Making ideas real.', backTop: 'Back to top', close: 'Close',
      dialogCaption: 'An excerpt from the undergraduate thesis. The idealized backtest illustrates the research method.',
      title: 'Haibo Sun · Finance × AI',
      description: 'Haibo Sun: AI industry and investment research, and tools that put research methods and product ideas into practice.',
      themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode',
      brandLabel: 'Haibo Sun, back to home', navLabel: 'Main navigation', languageLabel: 'Language',
      heroAlt: 'A blue paper loop and a small orange sphere against a pale background',
      boardAlt: 'The Board research overview, showing market data, research notes and charts',
      thesisAlt: 'An idealized backtest excerpt from the SparseLeadLag undergraduate thesis, with a chart and model equations',
      boardImageLabel: 'Open the AI investment research board', thesisImageLabel: 'View the SparseLeadLag research excerpt'
    }
  };
  const root = document.documentElement;
  const languageButtons = document.querySelectorAll('[data-locale]');
  const themeToggle = document.querySelector('.theme-toggle');
  const researchDialog = document.querySelector('.research-dialog');
  let locale = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  let theme = 'light';
  try {
    const storedLanguage = localStorage.getItem('leo-home-language');
    const storedTheme = localStorage.getItem('haibo-home-theme-v2');
    if (storedLanguage === 'zh' || storedLanguage === 'en') locale = storedLanguage;
    if (storedTheme === 'light' || storedTheme === 'dark') theme = storedTheme;
  } catch { /* Browser language and the light default also work without storage. */ }
  function updateThemeLabel() {
    const dark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', translations[locale][dark ? 'themeLight' : 'themeDark']);
    themeToggle.querySelector('img').src = dark ? 'img/home-icons/moon.svg' : 'img/home-icons/sun.svg';
  }
  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f3f2eb' : '#222622';
    updateThemeLabel();
  }
  function applyLanguage(nextLocale) {
    locale = nextLocale;
    root.lang = locale === 'zh' ? 'zh-CN' : 'en';
    const copy = translations[locale];
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = copy[element.dataset.i18n];
    });
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('.brand').setAttribute('aria-label', copy.brandLabel);
    document.querySelector('.main-nav').setAttribute('aria-label', copy.navLabel);
    document.querySelector('.language-control').setAttribute('aria-label', copy.languageLabel);
    document.querySelector('.hero-image').alt = copy.heroAlt;
    document.querySelector('.project-board img:not(.ui-icon)').alt = copy.boardAlt;
    document.querySelectorAll('img[src="img/sparse-lead-lag.webp"]').forEach(image => { image.alt = copy.thesisAlt; });
    document.querySelector('.project-board .project-image-link').setAttribute('aria-label', copy.boardImageLabel);
    document.querySelector('.project-thesis .project-image-link').setAttribute('aria-label', copy.thesisImageLabel);
    languageButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.locale === locale));
      button.setAttribute('aria-label', button.dataset.locale === 'zh' ? '切换到中文' : 'Switch to English');
    });
    updateThemeLabel();
  }
  applyLanguage(locale);
  applyTheme(theme);
  languageButtons.forEach(button => button.addEventListener('click', () => {
    applyLanguage(button.dataset.locale);
    try { localStorage.setItem('leo-home-language', locale); } catch {}
  }));
  themeToggle.addEventListener('click', () => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
    try { localStorage.setItem('haibo-home-theme-v2', theme); } catch {}
  });
  if (typeof researchDialog.showModal === 'function') {
    document.querySelectorAll('.thesis-trigger').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      researchDialog.showModal();
    }));
    document.querySelector('.dialog-close').addEventListener('click', () => researchDialog.close());
    researchDialog.addEventListener('click', event => {
      if (event.target !== researchDialog) return;
      const box = researchDialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) researchDialog.close();
    });
  }
})();
