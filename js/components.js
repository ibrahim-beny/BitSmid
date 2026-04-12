(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(key) {
    if (key === 'portfolio') return page === 'portfolio.html' || page === 'project.html';
    if (key === 'contact')   return page === 'contact.html';
    if (key === 'offerte')   return page === 'offerte.html';
    return false;
  }

  function navLink(href, label, key) {
    var cls = isActive(key)
      ? 'text-primary font-semibold transition-colors'
      : 'text-gray-600 hover:text-primary transition-colors';
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }

  function mobileNavLink(href, label, key) {
    var cls = isActive(key)
      ? 'block px-3 py-2 text-base font-medium rounded-md text-primary bg-gray-50'
      : 'block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:text-primary hover:bg-gray-50';
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }

  var offerteRing = isActive('offerte') ? ' ring-2 ring-primary ring-offset-2' : '';

  var LOGO_SVG = '<svg class="w-5 h-5 text-accent group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none"><path d="M7 8l-4 4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="17" x2="13" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 8l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var BOLT_SM  = '<svg class="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none"><path d="M7 8l-4 4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="17" x2="13" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 8l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var IG_SVG   = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  var LI_SVG   = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';

  // ── Header ──────────────────────────────────────────────────────────────────
  var headerEl = document.getElementById('site-header');
  if (headerEl) {
    var headerHTML = [
      '<header class="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">',
          '<a href="index.html" class="flex items-center gap-2 font-display font-bold text-2xl tracking-tight group">',
            '<div class="bg-primary p-2 rounded-xl group-hover:bg-accent transition-colors">' + LOGO_SVG + '</div>',
            '<span class="text-body">B<svg xmlns="http://www.w3.org/2000/svg" height="0.88em" viewBox="0 0 7 22" style="display:inline-block;vertical-align:baseline;overflow:visible;"><rect x="2" y="9" width="3" height="13" rx="1.5" fill="currentColor"/><circle cx="3.5" cy="4" r="3" fill="#F59E0B"/></svg>t<span class="text-accent">Smid</span></span>',
          '</a>',
          '<div class="hidden md:flex items-center space-x-8">',
            '<nav class="flex space-x-6 text-sm font-medium">',
              navLink('index.html#about',   'Over ons', 'about'),
              navLink('index.html#pricing', 'Prijzen',  'pricing'),
              navLink('portfolio.html',     'Portfolio','portfolio'),
              navLink('contact.html',       'Contact',  'contact'),
            '</nav>',
            '<a href="offerte.html" class="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accentHover transition-colors' + offerteRing + '">Offerte aanvragen</a>',
          '</div>',
          '<button id="mobile-menu-btn" class="md:hidden text-primary p-2" aria-label="Menu">',
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',
          '</button>',
        '</div>',
        '<div id="mobile-menu" class="md:hidden bg-white border-b border-gray-100 max-h-0 overflow-hidden transition-all duration-300 ease-in-out">',
          '<div class="px-4 pt-2 pb-6 space-y-2 flex flex-col">',
            mobileNavLink('index.html#about',   'Over ons', 'about'),
            mobileNavLink('index.html#pricing', 'Prijzen',  'pricing'),
            mobileNavLink('portfolio.html',     'Portfolio','portfolio'),
            mobileNavLink('contact.html',       'Contact',  'contact'),
            '<a href="offerte.html" class="mt-4 block text-center bg-primary text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-accentHover transition-colors">Offerte aanvragen</a>',
          '</div>',
        '</div>',
      '</header>'
    ].join('');

    headerEl.outerHTML = headerHTML;

    var btn  = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', function () {
        menu.style.maxHeight = menu.style.maxHeight ? null : menu.scrollHeight + 'px';
      });
    }
  }

  // ── Footer ──────────────────────────────────────────────────────────────────
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    var footerHTML = [
      '<footer class="bg-sectionAlt border-t border-gray-200 py-12">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">',
          '<div class="text-center md:text-left">',
            '<div class="flex items-center gap-2 font-display font-bold text-xl mb-2 tracking-tight opacity-80">',
              '<div class="bg-dark p-1.5 rounded-lg">' + BOLT_SM + '</div>',
              '<span>B<svg xmlns="http://www.w3.org/2000/svg" height="0.88em" viewBox="0 0 7 22" style="display:inline-block;vertical-align:baseline;overflow:visible;"><rect x="2" y="9" width="3" height="13" rx="1.5" fill="currentColor"/><circle cx="3.5" cy="4" r="3" fill="#F59E0B"/></svg>t<span class="text-accent">Smid</span></span>',
            '</div>',
            '<p class="text-gray-500 text-sm">© 2026 BitSmid. Alle rechten voorbehouden.</p>',
            '<address class="not-italic text-gray-400 text-xs mt-1">Nederland &mdash; <a href="mailto:info@bitsmid.nl" class="hover:text-dark transition-colors">info@bitsmid.nl</a></address>',
          '</div>',
          '<div class="flex flex-wrap justify-center gap-x-6 gap-y-2">',
            '<a href="index.html#about"   class="text-gray-500 hover:text-dark text-sm">Over ons</a>',
            '<a href="index.html#pricing" class="text-gray-500 hover:text-dark text-sm">Prijzen</a>',
            '<a href="portfolio.html"     class="text-gray-500 hover:text-dark text-sm">Portfolio</a>',
            '<a href="contact.html"       class="text-gray-500 hover:text-dark text-sm">Contact</a>',
            '<a href="privacy.html"       class="text-gray-500 hover:text-dark text-sm">Privacy</a>',
          '</div>',
          '<div class="flex items-center gap-4">',
            '<a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-500">' + IG_SVG + '</a>',
            '<a href="#" aria-label="LinkedIn"  class="w-9 h-9 rounded-full bg-gray-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-gray-500">' + LI_SVG + '</a>',
          '</div>',
          '<div class="text-gray-500 text-sm">',
            '<a href="mailto:info@bitsmid.nl" class="hover:text-dark">info@bitsmid.nl</a>',
          '</div>',
        '</div>',
      '</footer>'
    ].join('');

    footerEl.outerHTML = footerHTML;
  }

  // ── Scroll-to-top ────────────────────────────────────────────────────────────
  var scrollBtn = document.createElement('button');
  scrollBtn.setAttribute('aria-label', 'Naar boven');
  scrollBtn.className = 'fixed bottom-24 left-6 z-50 bg-primary text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:bg-accent transition-all duration-300 opacity-0 pointer-events-none';
  scrollBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
      scrollBtn.classList.add('opacity-100');
    } else {
      scrollBtn.classList.add('opacity-0', 'pointer-events-none');
      scrollBtn.classList.remove('opacity-100');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── WhatsApp floating button (voeg toe als nog niet aanwezig) ───────────────
  if (!document.querySelector('[aria-label="WhatsApp"]')) {
    var wa = document.createElement('a');
    wa.href = 'https://wa.me/31612345678';
    wa.target = '_blank';
    wa.setAttribute('aria-label', 'WhatsApp');
    wa.className = 'fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform';
    wa.innerHTML = '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
    document.body.appendChild(wa);
  }

  // ── Cookie banner ─────────────────────────────────────────────────────────────
  if (!localStorage.getItem('bb-cookies')) {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = [
      'position:fixed',
      'bottom:1.5rem',
      'left:1rem',
      'right:1rem',
      'margin:0 auto',
      'max-width:44rem',
      'z-index:9999',
      'transform:translateY(24px)',
      'opacity:0',
      'transition:transform 0.4s cubic-bezier(.22,.68,0,1.2),opacity 0.35s ease'
    ].join(';');

    banner.innerHTML = [
      '<div style="background:#fff;border-radius:1.25rem;box-shadow:0 24px 64px rgba(30,45,61,0.18);border:1px solid #e5e7eb;padding:1.5rem 1.75rem;">',
        '<div style="display:flex;align-items:flex-start;gap:1rem;">',
          '<div style="flex-shrink:0;width:2.75rem;height:2.75rem;background:#F5F6F8;border-radius:0.875rem;display:flex;align-items:center;justify-content:center;">',
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
              '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="#D97706" opacity=".25"/>',
              '<circle cx="8.5" cy="13.5" r="1.5" fill="#D97706"/>',
              '<circle cx="13" cy="17" r="1.25" fill="#1E2D3D"/>',
              '<circle cx="15.5" cy="10.5" r="1.5" fill="#D97706"/>',
              '<circle cx="10" cy="9" r="1" fill="#1E2D3D"/>',
            '</svg>',
          '</div>',
          '<div style="flex:1;min-width:0;">',
            '<p style="font-family:Syne,sans-serif;font-weight:700;font-size:1rem;color:#1E2D3D;margin:0 0 0.375rem;line-height:1.3;">Wij gebruiken cookies</p>',
            '<p style="font-size:0.8125rem;color:#6b7280;margin:0;line-height:1.6;">',
              'We plaatsen functionele cookies voor een goede werking van de site. Met jouw toestemming plaatsen we ook analytische cookies. ',
              'Lees meer in onze <a href="privacy.html" style="color:#D97706;text-decoration:underline;font-weight:500;">privacyverklaring</a>.',
            '</p>',
          '</div>',
        '</div>',
        '<div style="display:flex;gap:0.625rem;margin-top:1.25rem;flex-wrap:wrap;">',
          '<button id="bb-accept" style="flex:1;min-width:9rem;background:#1E2D3D;color:#fff;border:none;border-radius:9999px;padding:0.7rem 1.25rem;font-family:Inter,sans-serif;font-weight:700;font-size:0.8125rem;cursor:pointer;transition:background 0.2s;">Accepteren</button>',
          '<button id="bb-reject" style="flex:1;min-width:9rem;background:#fff;color:#4b5563;border:1.5px solid #e5e7eb;border-radius:9999px;padding:0.7rem 1.25rem;font-family:Inter,sans-serif;font-weight:600;font-size:0.8125rem;cursor:pointer;transition:border-color 0.2s,color 0.2s;">Alleen noodzakelijk</button>',
        '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(banner);

    // Slide in after paint
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.style.transform = 'translateY(0)';
        banner.style.opacity  = '1';
      });
    });

    function dismissBanner(choice) {
      localStorage.setItem('bb-cookies', choice);
      banner.style.transform = 'translateY(24px)';
      banner.style.opacity   = '0';
      setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
    }

    var acceptBtn = document.getElementById('bb-accept');
    var rejectBtn = document.getElementById('bb-reject');

    acceptBtn.addEventListener('click', function () { dismissBanner('accepted'); });
    rejectBtn.addEventListener('click', function () { dismissBanner('rejected'); });

    acceptBtn.addEventListener('mouseover', function () { this.style.background = '#D97706'; });
    acceptBtn.addEventListener('mouseout',  function () { this.style.background = '#1E2D3D'; });
    rejectBtn.addEventListener('mouseover', function () { this.style.borderColor = '#1E2D3D'; this.style.color = '#1E2D3D'; });
    rejectBtn.addEventListener('mouseout',  function () { this.style.borderColor = '#e5e7eb'; this.style.color  = '#4b5563'; });
  }

  // ── AOS init ─────────────────────────────────────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, offset: 50 });
  }
})();
