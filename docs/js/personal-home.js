(() => {
  'use strict';
  const translations = {
    zh: {
      skip: '跳到正文', navAbout: '关于', navWork: '作品', greeting: '你好，很高兴你来。',
      heroDescription: '想法，作品，与日常。', github: '在 GitHub 找到我',
      artCaption: '留一点空间，给下一个想法。', heroBottom: '把值得留下的东西，慢慢整理到这里。', scroll: '往下看看 ↓',
      aboutHeading: '关于', aboutLead: '保持好奇。<br>把想法做出来。',
      aboutText: '这里是我的个人空间，用来整理项目、记录想法，也为下一次尝试留一点位置。',
      noteTitle: '一条开始的记录', noteText: '先开始，再慢慢整理。不必一次填满这个地方，让它随着新的作品和经历一起生长。',
      workHeading: '作品', projectTitle: '个人主页', projectDescription: '一个用来安放想法、作品与记录的小站。', projectStatus: '持续整理',
      footerNote: '少一点，但认真一点。', backTop: '回到顶部 ↑',
      title: 'Haibo Sun · 个人主页', description: 'Haibo Sun 的个人主页。项目、想法，以及值得留下的日常。',
      themeLight: '切换到浅色模式', themeDark: '切换到深色模式', brandLabel: 'Haibo Sun，回到首页', navLabel: '主导航',
      imageAlt: '浅色背景上的蓝色纸环和一颗橙色小球'
    },
    en: {
      skip: 'Skip to content', navAbout: 'About', navWork: 'Work', greeting: 'Hello. Glad you’re here.',
      heroDescription: 'Thoughts, work & everyday life.', github: 'Find me on GitHub',
      artCaption: 'A little room for the next idea.', heroBottom: 'A home for the things worth keeping.', scroll: 'Take a look ↓',
      aboutHeading: 'About', aboutLead: 'Stay curious. <br>Make ideas real.',
      aboutText: 'A personal space for my projects and thoughts, with room for whatever I try next.',
      noteTitle: 'A note on beginning', noteText: 'Start now. Organize as you go. This space doesn’t need to be full on day one; it can grow with new work and experiences.',
      workHeading: 'Work', projectTitle: 'Personal website', projectDescription: 'A small home for ideas, projects and notes.', projectStatus: 'In progress',
      footerNote: 'A little less. A little more care.', backTop: 'Back to top ↑',
      title: 'Haibo Sun · Personal Website', description: 'Haibo Sun’s personal website. Projects, thoughts and everyday things worth keeping.',
      themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode', brandLabel: 'Haibo Sun, back to home', navLabel: 'Main navigation',
      imageAlt: 'A blue paper loop and a small orange sphere against a pale background'
    }
  };
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const languageToggle = document.querySelector('.language-toggle');
  let locale = 'zh';
  let theme = 'dark';
  try {
    const storedLanguage = localStorage.getItem('leo-home-language');
    const storedTheme = localStorage.getItem('leo-home-theme');
    if (storedLanguage === 'zh' || storedLanguage === 'en') locale = storedLanguage;
    if (storedTheme === 'dark' || storedTheme === 'light') theme = storedTheme;
  } catch { /* The page still works when browser storage is unavailable. */ }
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
    // The only HTML in these trusted dictionaries is the deliberate line break.
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.innerHTML = copy[element.dataset.i18n];
    });
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('.brand').setAttribute('aria-label', copy.brandLabel);
    document.querySelector('.main-nav').setAttribute('aria-label', copy.navLabel);
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
    try { localStorage.setItem('leo-home-theme', theme); } catch {}
  });
})();
