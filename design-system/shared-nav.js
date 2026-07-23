// shared-nav.js — Shared Navigation, Dark Mode Toggle & Interactions
// Designed according to Academic Chic UI/UX Specifications for DFCL
// Device Fabrication and Characterization Lab (DFCL)

(function() {
  'use strict';

  // Apply dark mode theme immediately to prevent flicker
  function initTheme() {
    try {
      var savedTheme = localStorage.getItem('dfcl_theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = savedTheme ? (savedTheme === 'dark') : prefersDark;
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
      }
    } catch(e) {
      console.warn('Theme initialization fallback:', e);
    }
  }

  initTheme();

  function getBasePath() {
    var path = window.location.pathname;
    var depth = 0;
    if (path.indexOf('/pages/') !== -1) {
      depth = 2;
    }
    var base = '';
    for (var i = 0; i < depth; i++) { base += '../'; }
    return base || './';
  }

  var BASE = getBasePath();

  var PAGES = [
    { label: 'Home',                 href: BASE + 'pages/home/index.html' },
    { label: 'Members',              href: BASE + 'pages/members/index.html' },
    { label: 'Research',             href: BASE + 'pages/research/index.html' },
    { label: 'Projects & Grants',    href: BASE + 'pages/projectsandfundings/index.html' },
    { label: 'Publications',         href: BASE + 'pages/publications/index.html' },
    { label: 'Gallery',              href: BASE + 'pages/gallery/index.html' },
  ];

  function getCurrentPage() {
    var path = window.location.pathname.toLowerCase();
    if (path.includes('/members/'))              return 'Members';
    if (path.includes('/research/'))             return 'Research';
    if (path.includes('/projectsandfundings/'))  return 'Projects & Grants';
    if (path.includes('/publications/'))         return 'Publications';
    if (path.includes('/gallery/'))              return 'Gallery';
    return 'Home';
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function injectSkipLink() {
    if (document.getElementById('skip-to-content')) return;
    var skip = document.createElement('a');
    skip.id = 'skip-to-content';
    skip.href = '#main-content';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);
    var main = document.querySelector('main');
    if (main && !main.id) { main.id = 'main-content'; }
  }

  function renderHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    var activePage = getCurrentPage();
    var joinHref = BASE + 'pages/members/index.html#open-positions';
    var isDarkMode = document.body.classList.contains('dark-mode');

    var desktopNavLinks = PAGES.map(function(p) {
      var isActive = p.label === activePage;
      return '<a href="' + escapeHtml(p.href) + '" class="nav-link' + (isActive ? ' active' : '') + '">' + escapeHtml(p.label) + '</a>';
    }).join('');

    var mobileNavLinks = PAGES.map(function(p) {
      var isActive = p.label === activePage;
      return '<a href="' + escapeHtml(p.href) + '" class="nav-link mobile-nav-link' + (isActive ? ' active' : '') + '" style="font-size:1.05rem;padding:0.5rem 0;">' + escapeHtml(p.label) + '</a>';
    }).join('');

    header.className = 'header-nav';
    header.setAttribute('role', 'banner');
    header.innerHTML =
      '<div class="container">' +
        '<div class="nav-container">' +
          '<a href="' + escapeHtml(BASE + 'pages/home/index.html') + '" class="brand-logo" aria-label="Device Fabrication and Characterization Lab Home">' +
            '<span class="brand-badge">DFCL</span> Device Fabrication &amp; Characterization Lab' +
          '</a>' +
          '<nav class="nav-links-desktop" aria-label="Primary navigation">' +
            desktopNavLinks +
            '<button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark mode">' +
              '<span class="material-symbols-outlined" style="font-size:20px;">' + (isDarkMode ? 'light_mode' : 'dark_mode') + '</span>' +
            '</button>' +
            '<a href="' + escapeHtml(joinHref) + '" class="btn-nav-action">Join DFCL</a>' +
          '</nav>' +
          '<div style="display:flex;align-items:center;gap:0.5rem;" class="mobile-actions">' +
            '<button class="theme-toggle-btn" id="theme-toggle-btn-mobile" aria-label="Toggle dark mode" title="Toggle dark mode">' +
              '<span class="material-symbols-outlined" style="font-size:20px;">' + (isDarkMode ? 'light_mode' : 'dark_mode') + '</span>' +
            '</button>' +
            '<button class="mobile-menu-btn" id="mobile-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-drawer">' +
              '<span class="material-symbols-outlined" style="font-size:28px;">menu</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-drawer" id="mobile-drawer" role="navigation" aria-label="Mobile navigation">' +
        mobileNavLinks +
        '<a href="' + escapeHtml(joinHref) + '" class="btn-nav-action mobile-nav-link" style="text-align:center;margin-top:0.5rem;">Join DFCL</a>' +
      '</div>';

    function toggleTheme() {
      var currentlyDark = document.body.classList.toggle('dark-mode');
      var theme = currentlyDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      try { localStorage.setItem('dfcl_theme', theme); } catch(e) {}

      var icons = document.querySelectorAll('.theme-toggle-btn .material-symbols-outlined');
      icons.forEach(function(icon) {
        icon.textContent = currentlyDark ? 'light_mode' : 'dark_mode';
      });
    }

    var themeBtnDesktop = document.getElementById('theme-toggle-btn');
    var themeBtnMobile  = document.getElementById('theme-toggle-btn-mobile');
    if (themeBtnDesktop) themeBtnDesktop.addEventListener('click', toggleTheme);
    if (themeBtnMobile)  themeBtnMobile.addEventListener('click', toggleTheme);

    var toggleBtn = document.getElementById('mobile-toggle');
    var drawer = document.getElementById('mobile-drawer');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', function() {
        var isOpen = drawer.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', String(isOpen));
        var icon = toggleBtn.querySelector('.material-symbols-outlined');
        if (icon) { icon.textContent = isOpen ? 'close' : 'menu'; }
      });

      drawer.querySelectorAll('.mobile-nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
          drawer.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          var icon = toggleBtn.querySelector('.material-symbols-outlined');
          if (icon) { icon.textContent = 'menu'; }
        });
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          drawer.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          var icon = toggleBtn.querySelector('.material-symbols-outlined');
          if (icon) { icon.textContent = 'menu'; }
          toggleBtn.focus();
        }
      });
    }

    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function injectScrollToTop() {
    if (document.getElementById('scroll-to-top-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'scroll-to-top-btn';
    btn.className = 'scroll-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function renderFooter() {
    var footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.className = 'site-footer';
    footer.setAttribute('role', 'contentinfo');
    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="brand-logo" style="margin-bottom:0.75rem;"><span class="brand-badge">DFCL</span> Device Fabrication &amp; Characterization Lab</div>' +
            '<p style="font-size:0.875rem;color:var(--on-surface-variant);max-width:280px;line-height:1.6;">' +
              'Pioneering Advanced Materials for Energy Storage, Microfabricated Devices, and Next-Generation Smart Sensors.' +
            '</p>' +
          '</div>' +
          '<div>' +
            '<div class="footer-title">Navigation</div>' +
            '<ul class="footer-links">' +
              '<li><a href="' + escapeHtml(BASE + 'pages/home/index.html') + '">Home</a></li>' +
              '<li><a href="' + escapeHtml(BASE + 'pages/research/index.html') + '">Research Frontiers</a></li>' +
              '<li><a href="' + escapeHtml(BASE + 'pages/publications/index.html') + '">Publications</a></li>' +
              '<li><a href="' + escapeHtml(BASE + 'pages/members/index.html') + '">Our Team</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<div class="footer-title">Resources</div>' +
            '<ul class="footer-links">' +
              '<li><a href="' + escapeHtml(BASE + 'pages/members/index.html#open-positions') + '">Open Positions</a></li>' +
              '<li><a href="' + escapeHtml(BASE + 'pages/projectsandfundings/index.html') + '">Projects &amp; Grants</a></li>' +
              '<li><a href="' + escapeHtml(BASE + 'pages/gallery/index.html') + '">Photo Gallery</a></li>' +
              '<li><a href="mailto:dfcl.lab@manipal.edu">Contact DFCL</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<div class="footer-title">Contact &amp; Location</div>' +
            '<p style="font-size:0.85rem;color:var(--on-surface-variant);margin-bottom:0.5rem;line-height:1.5;">' +
              '<strong>Device Fabrication and Characterization Lab (DFCL)</strong><br>' +
              'Department of Physics &amp; Materials Science<br>' +
              'MIT Manipal, MAHE, Karnataka, India - 576104' +
            '</p>' +
            '<p style="font-size:0.85rem;color:var(--secondary);font-weight:600;">' +
              'dfcl.lab@manipal.edu' +
            '</p>' +
          '</div>' +
        '</div>' +
        '<div style="border-top:1px solid var(--subtle-border);padding-top:1.5rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;font-size:0.8rem;color:var(--on-surface-variant);">' +
          '<p>&copy; 2026 Device Fabrication and Characterization Lab (DFCL). MAHE.</p>' +
          '<p>Advanced Materials for Energy Storage and Sensors</p>' +
        '</div>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function() {
    injectSkipLink();
    renderHeader();
    renderFooter();
    injectScrollToTop();
  });
})();
