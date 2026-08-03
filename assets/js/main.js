// ItAssist Broadcast Solutions — Main JS

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Scroll animation (Intersection Observer) — defined BEFORE async functions
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

function observeCards(selector) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observer.observe(el);
  });
}

// ====== SVG Icons ======
const SVG = {
  play: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>',
  tag: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"/></svg>',
  cloud: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"/></svg>',
  server: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"/></svg>',
  wifi: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>',
  bolt: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>',
  checkmark: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.47.353-2.857.978-4.082"/></svg>',
  monitor: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"/></svg>',
  barChart: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>'
};

// Service card icons (matching original order)
const serviceIcons = [SVG.wifi, SVG.calendar, SVG.tag, SVG.play, SVG.cloud, SVG.wrench];
// Equipment card icons
const equipIcons = [SVG.wrench, SVG.play, SVG.wifi, SVG.server];
// OTT feature icons
const ottFeatureIcons = [SVG.bolt, SVG.shield, SVG.barChart];

// ====== Helper: set text of an element by ID ======
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// ====== Badge text setter (keeps SVG, replaces text) ======
function setBadgeText(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  const svg = el.querySelector('svg');
  el.textContent = '';
  if (svg) el.appendChild(svg);
  el.appendChild(document.createTextNode(' ' + text));
}

// ====== Section title setter ======
function setSectionTitle(id, before, highlight) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = before + '<span class="highlight">' + highlight + '</span>';
}

// ====== Load all content from content.json ======
async function loadContent() {
  try {
    const res = await fetch('content.json');
    if (!res.ok) return;
    const d = await res.json();

    // --- SEO ---
    if (d.seo) {
      setText('seo-title', d.seo.title);
      const descEl = document.getElementById('seo-description');
      if (descEl) descEl.setAttribute('content', d.seo.description);
      const kwEl = document.getElementById('seo-keywords');
      if (kwEl) kwEl.setAttribute('content', d.seo.keywords);
    }

    // --- Header ---
    if (d.header) {
      const logoEl = document.getElementById('header-logo');
      if (logoEl) {
        const name = d.header.logoText || 'ItAssist';
        const parts = name.split(/(?=[A-Z])/);
        if (parts.length >= 2) {
          logoEl.innerHTML = parts[0] + '<span>' + parts.slice(1).join('') + '</span>';
        } else {
          logoEl.textContent = name;
        }
      }
      setText('header-tagline', d.header.tagline);
      if (d.header.navLinks) {
        const nav = document.getElementById('nav-links');
        if (nav) {
          nav.innerHTML = d.header.navLinks.map(l => '<a href="' + l.href + '">' + l.label + '</a>').join('');
        }
      }
      if (d.header.ctaText) {
        const ctaEl = document.getElementById('header-cta');
        if (ctaEl) {
          const svg = ctaEl.querySelector('svg');
          ctaEl.textContent = d.header.ctaText + ' ';
          if (svg) ctaEl.appendChild(svg);
        }
      }
    }

    // --- Hero ---
    if (d.hero) {
      setBadgeText('hero-badge', d.hero.badge);
      const titleEl = document.getElementById('hero-title');
      if (titleEl) {
        titleEl.innerHTML = (d.hero.titleLine1 || '') + '<span class="gradient-text">' + (d.hero.titleHighlight || '') + '</span><br>' + (d.hero.titleLine2 || '');
      }
      setText('hero-desc', d.hero.description);
      if (d.hero.btnPrimary) {
        const btn = document.getElementById('hero-btn-primary');
        if (btn) {
          const svg = btn.querySelector('svg');
          btn.textContent = d.hero.btnPrimary + ' ';
          if (svg) btn.appendChild(svg);
        }
      }
      setText('hero-btn-secondary', d.hero.btnSecondary);
      const liveEl = document.getElementById('hero-live');
      if (liveEl && d.hero.liveText && d.hero.liveBold) {
        liveEl.innerHTML = '<span class="live-dot"></span><span class="hero-live-text">' + d.hero.liveText + '</span><strong>' + d.hero.liveBold + '</strong>';
      }
    }

    // --- Stats ---
    if (d.stats && d.stats.items) {
      const grid = document.getElementById('stats-grid');
      if (grid) {
        grid.innerHTML = d.stats.items.map(s =>
          '<div class="stat-item"><div class="stat-value">' + s.value + '</div><div class="stat-label">' + s.label + '</div></div>'
        ).join('');
      }
    }

    // --- Services ---
    if (d.services) {
      setBadgeText('services-badge', d.services.badge);
      if (d.services.title && d.services.titleHighlight) {
        setSectionTitle('services-title', d.services.title, d.services.titleHighlight);
      }
      setText('services-desc', d.services.description);
      if (d.services.items) {
        const grid = document.getElementById('services-grid');
        if (grid) {
          grid.innerHTML = d.services.items.map((s, i) =>
            '<div class="service-card"><div class="service-icon">' + (serviceIcons[i] || SVG.play) + '</div><h3>' + s.title + '</h3><p>' + s.description + '</p></div>'
          ).join('');
        }
      }
    }

    // --- OTT ---
    if (d.ott) {
      setBadgeText('ott-badge', d.ott.badge);
      if (d.ott.title && d.ott.titleHighlight) {
        const ottTitle = document.getElementById('ott-title');
        if (ottTitle) {
          ottTitle.innerHTML = (d.ott.title || '') + '<span class="highlight">' + d.ott.titleHighlight + '</span> ' + (d.ott.titleRest || '');
        }
      }
      setText('ott-desc', d.ott.description);

      // OTT Features
      if (d.ott.features) {
        const featEl = document.getElementById('ott-features');
        if (featEl) {
          featEl.innerHTML = d.ott.features.map((f, i) =>
            '<div class="ott-feature"><div class="ott-feature-icon">' + (ottFeatureIcons[i] || SVG.bolt) + '</div><div><h4>' + f.title + '</h4><p>' + f.description + '</p></div></div>'
          ).join('');
        }
      }

      // Dashboard stats
      if (d.ott.dashboardStats) {
        const statsEl = document.getElementById('ott-dash-stats');
        if (statsEl) {
          statsEl.innerHTML = d.ott.dashboardStats.map(s =>
            '<div class="ov-stat"><div class="num">' + s.value + '</div><div class="lbl">' + s.label + '</div></div>'
          ).join('');
        }
      }

      // Dashboard feeds
      if (d.ott.dashboardFeeds) {
        const feedsEl = document.getElementById('ott-dash-feeds');
        if (feedsEl) {
          feedsEl.innerHTML = d.ott.dashboardFeeds.map(f =>
            '<div class="ov-feed"><span class="dot"></span><span class="ch">' + f.channel + '</span><span class="tag">' + f.tag + '</span></div>'
          ).join('');
        }
      }
    }

    // --- SCTE ---
    if (d.scte) {
      setBadgeText('scte-badge', d.scte.badge);
      if (d.scte.title && d.scte.titleHighlight) {
        setSectionTitle('scte-title', d.scte.title, d.scte.titleHighlight);
      }
      setText('scte-desc', d.scte.description);
      if (d.scte.listItems) {
        const listEl = document.getElementById('scte-list');
        if (listEl) {
          listEl.innerHTML = d.scte.listItems.map(item =>
            '<div class="scte-item"><div class="check">' + SVG.checkmark + '</div><span>' + item + '</span></div>'
          ).join('');
        }
      }
    }

    // --- Platforms ---
    if (d.platforms) {
      setBadgeText('platforms-badge', d.platforms.badge);
      if (d.platforms.title && d.platforms.titleHighlight) {
        setSectionTitle('platforms-title', d.platforms.title, d.platforms.titleHighlight);
      }
      setText('platforms-desc', d.platforms.description);
      setText('platforms-note-text', d.platforms.note);
      if (d.platforms.items) {
        const grid = document.getElementById('platforms-grid');
        if (grid) {
          grid.innerHTML = d.platforms.items.map(p => {
            const inner = p.logo
              ? '<img src="' + p.logo + '" alt="' + p.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
              : '';
            return '<div class="platform-card"><div class="p-icon" style="' + (p.logo ? '' : '') + '">' + inner + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="' + (p.logo ? 'display:none' : 'display:flex') + '"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"/></svg></div><span class="p-name">' + p.name + '</span></div>';
          }).join('');
        }
      }
    }

    // --- Genres ---
    if (d.genres) {
      setBadgeText('genres-badge', d.genres.badge);
      if (d.genres.title && d.genres.titleHighlight) {
        setSectionTitle('genres-title', d.genres.title, d.genres.titleHighlight);
      }
      setText('genres-desc', d.genres.description);
      if (d.genres.items) {
        const grid = document.getElementById('genres-grid');
        if (grid) {
          grid.innerHTML = d.genres.items.map(g =>
            '<div class="genre-card ' + (g.class || '') + '"><h3>' + g.title + '</h3><p>' + g.description + '</p></div>'
          ).join('');
        }
      }
    }

    // --- Equipment ---
    if (d.equipment) {
      setBadgeText('equipment-badge', d.equipment.badge);
      if (d.equipment.title && d.equipment.titleHighlight) {
        setSectionTitle('equipment-title', d.equipment.title, d.equipment.titleHighlight);
      }
      setText('equipment-desc', d.equipment.description);
      if (d.equipment.items) {
        const grid = document.getElementById('equipment-grid');
        if (grid) {
          grid.innerHTML = d.equipment.items.map((e, i) =>
            '<div class="equip-card"><div class="equip-icon">' + (equipIcons[i] || SVG.wrench) + '</div><div><h3>' + e.title + '</h3><p>' + e.description + '</p></div></div>'
          ).join('');
        }
      }
    }

    // --- Why Us ---
    if (d.whyUs) {
      setBadgeText('whyus-badge', d.whyUs.badge);
      if (d.whyUs.title && d.whyUs.titleHighlight) {
        setSectionTitle('whyus-title', d.whyUs.title, d.whyUs.titleHighlight);
      }
      setText('whyus-desc', d.whyUs.description);
      if (d.whyUs.items) {
        const grid = document.getElementById('whyus-grid');
        if (grid) {
          grid.innerHTML = d.whyUs.items.map(w =>
            '<div class="why-card"><div class="why-icon">' + SVG.shield + '</div><h3>' + w.title + '</h3><p>' + w.description + '</p></div>'
          ).join('');
        }
      }
      if (d.whyUs.trustItems) {
        const trustEl = document.getElementById('whyus-trust');
        if (trustEl) {
          trustEl.innerHTML = d.whyUs.trustItems.map(t =>
            '<div class="trust-item">' + SVG.checkmark + ' ' + t + '</div>'
          ).join('');
        }
      }
    }

    // --- CTA ---
    if (d.cta) {
      const ctaTitle = document.getElementById('cta-title');
      if (ctaTitle) {
        ctaTitle.innerHTML = (d.cta.title || '') + '<span>' + (d.cta.titleHighlight || '') + '</span>';
      }
      setText('cta-desc', d.cta.description);
      if (d.cta.btnPrimary) {
        const btn = document.getElementById('cta-btn-primary');
        if (btn) {
          const svg = btn.querySelector('svg');
          btn.textContent = d.cta.btnPrimary + ' ';
          if (svg) btn.appendChild(svg);
        }
      }
      if (d.cta.btnSecondary) {
        const btn2 = document.getElementById('cta-btn-secondary');
        if (btn2) {
          btn2.textContent = d.cta.btnSecondary;
          if (d.cta.btnSecondaryHref) btn2.href = d.cta.btnSecondaryHref;
        }
      }
    }

    // --- Contact ---
    if (d.contact) {
      setBadgeText('contact-badge', d.contact.badge);
      if (d.contact.title && d.contact.titleHighlight) {
        setSectionTitle('contact-title', d.contact.title, d.contact.titleHighlight);
      }
      setText('contact-desc', d.contact.description);

      // Contact info
      if (d.contact.email) {
        const emailEl = document.getElementById('contact-email');
        if (emailEl) {
          emailEl.textContent = d.contact.email;
          emailEl.href = 'mailto:' + d.contact.email;
        }
      }
      if (d.contact.phone) {
        const phoneEl = document.getElementById('contact-phone');
        if (phoneEl) {
          phoneEl.textContent = d.contact.phone;
          phoneEl.href = 'tel:' + d.contact.phone.replace(/\s/g, '');
        }
      }
      if (d.contact.website) {
        const webEl = document.getElementById('contact-website');
        if (webEl) {
          webEl.textContent = d.contact.website;
          webEl.href = d.contact.websiteUrl || ('https://' + d.contact.website);
        }
      }
      if (d.contact.location) {
        setText('contact-location', d.contact.location);
      }

      // Form labels
      if (d.contact.formLabels) {
        const fl = d.contact.formLabels;
        setText('form-name-label', fl.name);
        setText('form-company-label', fl.company);
        setText('form-email-label', fl.email);
        setText('form-phone-label', fl.phone);
        setText('form-message-label', fl.message);
        if (fl.submit) {
          const subEl = document.getElementById('form-submit');
          if (subEl) {
            const svg = subEl.querySelector('svg');
            subEl.textContent = fl.submit + ' ';
            if (svg) subEl.appendChild(svg);
          }
        }
      }
    }

    // --- Footer ---
    if (d.footer) {
      setText('footer-desc', d.footer.description);

      if (d.footer.servicesLinks) {
        const col = document.getElementById('footer-services');
        if (col) {
          col.innerHTML = '<h4>Services</h4>' + d.footer.servicesLinks.map(l => '<a href="' + l.href + '">' + l.label + '</a>').join('');
        }
      }
      if (d.footer.platformsLinks) {
        const col = document.getElementById('footer-platforms');
        if (col) {
          col.innerHTML = '<h4>Platforms</h4>' + d.footer.platformsLinks.map(l => '<a href="' + l.href + '">' + l.label + '</a>').join('');
        }
      }
      if (d.footer.companyLinks) {
        const col = document.getElementById('footer-company');
        if (col) {
          col.innerHTML = '<h4>Company</h4>' + d.footer.companyLinks.map(l =>
            '<a href="' + l.href + '"' + (l.href.startsWith('http') ? ' target="_blank"' : '') + '>' + l.label + '</a>'
          ).join('');
        }
      }
      setText('footer-copyright', d.footer.copyright);
      setText('footer-bottom-right', d.footer.bottomRight);
    }

    // --- WhatsApp ---
    if (d.whatsapp) {
      const waEl = document.getElementById('whatsapp-link');
      if (waEl && d.whatsapp.link) {
        waEl.href = d.whatsapp.link;
      }
    }

    // Apply scroll animations to dynamically loaded cards
    observeCards('.service-card, .platform-card, .genre-card, .equip-card, .why-card, .ott-feature, .scte-item');

  } catch (err) {
    console.error('Error loading content.json:', err);
  }
}

// Contact form handling
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const card = form.closest('.contact-form-card');
  // Try to get success text from content, fallback to defaults
  const successTitle = document.getElementById('form-submit')?.dataset?.successTitle || 'Thank You!';
  const successMsg = document.getElementById('form-submit')?.dataset?.successMsg || "We'll get back to you within 24 hours.";
  card.innerHTML =
    '<div class="form-success">' +
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>' +
    '<h3>' + successTitle + '</h3>' +
    '<p>' + successMsg + '</p>' +
    '</div>';
});

// Initialize
loadContent();