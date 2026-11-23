export {};

type SchemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'color-scheme';
const colorSchemeMeta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
const isZhPage = (): boolean => document.documentElement.lang.toLowerCase().startsWith('zh');

function readStoredPreference(): SchemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // Storage may be unavailable in restricted contexts; fall back to system.
  }
  return 'system';
}

function getSystemScheme(): 'light' | 'dark' {
  return darkMedia.matches ? 'dark' : 'light';
}

function getEffectiveScheme(pref: SchemePreference): 'light' | 'dark' {
  return pref === 'system' ? getSystemScheme() : pref;
}

function applyScheme(pref: SchemePreference, persist: boolean): void {
  if (colorSchemeMeta) {
    colorSchemeMeta.content = pref === 'system' ? 'light dark' : pref;
  }

  if (persist) {
    try {
      if (pref === 'system') {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, pref);
      }
    } catch {
      // Theme is still applied to the document even if persistence fails.
    }
  }

  syncThemeControls(pref);
}

function syncThemeControls(pref: SchemePreference): void {
  const effective = getEffectiveScheme(pref);
  document.documentElement.classList.toggle('dark', effective === 'dark');
  const systemScheme = getSystemScheme();
  const zh = isZhPage();

  document.querySelectorAll<HTMLButtonElement>('[data-theme-choice]').forEach((btn) => {
    const choice = btn.dataset.themeChoice as SchemePreference | undefined;
    const isActive = String(choice === pref);
    btn.setAttribute('aria-pressed', isActive);
    btn.setAttribute('aria-checked', isActive);
    if (choice === 'system') {
      btn.setAttribute(
        'title',
        zh
          ? `跟随系统（当前为${systemScheme === 'dark' ? '深色' : '浅色'}）`
          : `System (currently ${systemScheme})`,
      );
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-theme-menu-trigger]').forEach((btn) => {
    btn.dataset.currentPref = pref;
    const modeLabel = zh
      ? pref === 'light'
        ? '浅色模式'
        : pref === 'dark'
          ? '深色模式'
          : `跟随系统（当前${systemScheme === 'dark' ? '深色' : '浅色'}）`
      : pref === 'light'
        ? 'Light'
        : pref === 'dark'
          ? 'Dark'
          : `System (${systemScheme})`;
    const label = zh ? `主题模式：${modeLabel}` : `Color theme: ${modeLabel}`;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-theme-quick-toggle]').forEach((btn) => {
    const nextLabel = zh
      ? effective === 'dark'
        ? '切换为浅色主题'
        : '切换为深色主题'
      : effective === 'dark'
        ? 'Switch to light theme'
        : 'Switch to dark theme';
    btn.setAttribute('aria-label', nextLabel);
    btn.setAttribute('title', nextLabel);
  });
}

// Header 2-state comfort toggle (fallback if used standalone)
document.querySelectorAll<HTMLButtonElement>('[data-theme-quick-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentEffective = getEffectiveScheme(readStoredPreference());
    const target: 'light' | 'dark' = currentEffective === 'dark' ? 'light' : 'dark';
    const nextPref: SchemePreference = target === getSystemScheme() ? 'system' : target;
    applyScheme(nextPref, true);
  });
});

// Explicit 3-state theme menu: Light / Dark / System
document.querySelectorAll<HTMLButtonElement>('[data-theme-choice]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const choice = btn.dataset.themeChoice;
    if (choice === 'light' || choice === 'dark' || choice === 'system') {
      applyScheme(choice, true);
      const pop = btn.closest<HTMLElement & { hidePopover?: () => void }>('[popover]');
      try {
        pop?.hidePopover?.();
      } catch {
        // Ignore if not open
      }
    }
  });
});

// Keep tabs in sync when theme changes elsewhere
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) {
    applyScheme(readStoredPreference(), false);
  }
});

// Update labels when OS preference flips — NEVER retroactively erase stored override
darkMedia.addEventListener('change', () => {
  syncThemeControls(readStoredPreference());
});

syncThemeControls(readStoredPreference());

// ⌘K / Ctrl+K shortcut for native modal search dialog
const searchDialog = document.querySelector<HTMLDialogElement>('#search-dialog');
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    if (!searchDialog) return;
    event.preventDefault();
    if (!searchDialog.open) {
      searchDialog.showModal();
    }
  }
});

// Synchronize Table of Contents heading IDs & active scroll indicator
function initArticleToc(): void {
  const prose = document.querySelector<HTMLElement>('[data-article-prose]');
  const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]'));
  if (!prose || tocLinks.length === 0) return;

  const headings = Array.from(prose.querySelectorAll<HTMLHeadingElement>('h2, h3'));
  const expectedIds = Array.from(
    new Set(tocLinks.map((link) => link.getAttribute('href')?.slice(1)).filter(Boolean) as string[]),
  );

  // Assign deterministic IDs to rendered PortableText headings when not already present
  headings.forEach((heading, idx) => {
    if (!heading.id && expectedIds[idx]) {
      heading.id = expectedIds[idx];
    }
  });

  const observed = headings.filter((heading) => heading.id);
  if (observed.length === 0) return;

  const setActive = (id: string) => {
    tocLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: '-12% 0px -72% 0px', threshold: 0 },
  );

  observed.forEach((heading) => observer.observe(heading));
}

initArticleToc();

// Wayfare-inspired live multi-facet Finder Bar on /posts/ (URL-synced)
function initJournalFinder(): void {
  const form = document.querySelector<HTMLFormElement>('[data-journal-finder]');
  if (!form) return;

  const qInput = form.querySelector<HTMLInputElement>('input[name="q"]');
  const topicSelect = form.querySelector<HTMLSelectElement>('select[name="topic"]');
  const tagSelect = form.querySelector<HTMLSelectElement>('select[name="tag"]');
  const clearBtn = form.querySelector<HTMLButtonElement>('[data-finder-clear]');
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-filter-card]'));
  const statusEl = document.querySelector<HTMLElement>('[data-finder-count]');
  const emptyEl = document.querySelector<HTMLElement>('[data-finder-empty]');
  if (cards.length === 0) return;

  const applyFilter = (syncUrl: boolean) => {
    const q = (qInput?.value ?? '').trim().toLowerCase();
    const topic = (topicSelect?.value ?? '').trim();
    const tag = (tagSelect?.value ?? '').trim();

    let visible = 0;
    for (const card of cards) {
      const cardCats = (card.dataset.cats ?? '').split(',').filter(Boolean);
      const cardTags = (card.dataset.tags ?? '').split(',').filter(Boolean);
      const hay = card.dataset.search ?? '';

      const matchQ = !q || hay.includes(q);
      const matchTopic = !topic || cardCats.includes(topic);
      const matchTag = !tag || cardTags.includes(tag);
      const show = matchQ && matchTopic && matchTag;

      card.hidden = !show;
      if (show) visible += 1;
    }

    if (statusEl) {
      const total = cards.length;
      const filtered = Boolean(q || topic || tag);
      statusEl.textContent = isZhPage()
        ? filtered
          ? `筛选出 ${visible} / ${total} 篇实录`
          : `共 ${total} 篇实录`
        : filtered
          ? `Showing ${visible} of ${total} ${total === 1 ? 'dispatch' : 'dispatches'}`
          : `${total} ${total === 1 ? 'dispatch' : 'dispatches'}`;
    }

    if (emptyEl) {
      emptyEl.hidden = visible > 0;
    }

    if (clearBtn) {
      clearBtn.hidden = !(q || topic || tag);
    }

    if (syncUrl) {
      const url = new URL(window.location.href);
      if (q) url.searchParams.set('q', q);
      else url.searchParams.delete('q');
      if (topic) url.searchParams.set('topic', topic);
      else url.searchParams.delete('topic');
      if (tag) url.searchParams.set('tag', tag);
      else url.searchParams.delete('tag');
      history.replaceState(null, '', url.toString());
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilter(true);
  });

  qInput?.addEventListener('input', () => applyFilter(true));
  topicSelect?.addEventListener('change', () => applyFilter(true));
  tagSelect?.addEventListener('change', () => applyFilter(true));

  clearBtn?.addEventListener('click', () => {
    if (qInput) qInput.value = '';
    if (topicSelect) topicSelect.value = '';
    if (tagSelect) tagSelect.value = '';
    applyFilter(true);
    qInput?.focus();
  });

  applyFilter(false);
}

initJournalFinder();

// Wayfare-inspired interactive Palace Wall chapter visual preview switcher
function initPalaceChapter(): void {
  const previewImg = document.querySelector<HTMLImageElement>('[data-palace-preview-img]');
  const previewCaption = document.querySelector<HTMLElement>('[data-palace-preview-caption]');
  const rows = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-palace-row]'));
  if (!previewImg || rows.length === 0) return;

  const activate = (row: HTMLAnchorElement) => {
    const src = row.dataset.previewSrc;
    const alt = row.dataset.previewAlt;
    const caption = row.dataset.previewCaption;
    if (src && previewImg.getAttribute('src') !== src) {
      previewImg.src = src;
      if (alt) previewImg.alt = alt;
    }
    if (previewCaption && caption) {
      previewCaption.textContent = caption;
    }
    rows.forEach((r) => r.setAttribute('data-active', String(r === row)));
  };

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => activate(row));
    row.addEventListener('focus', () => activate(row));
  });
}

initPalaceChapter();

// 12 x 97 Atlas live topic filter (/atlas/)
function initAtlasFilter(): void {
  const input = document.querySelector<HTMLInputElement>('[data-atlas-filter]');
  const pillars = Array.from(document.querySelectorAll<HTMLElement>('[data-atlas-pillar]'));
  const countEl = document.querySelector<HTMLElement>('[data-atlas-count]');
  const emptyEl = document.querySelector<HTMLElement>('[data-atlas-empty]');
  if (!input || pillars.length === 0) return;

  const allTopics = Array.from(document.querySelectorAll<HTMLElement>('[data-atlas-topic]'));
  const totalTopics = allTopics.length;

  const apply = () => {
    const q = input.value.trim().toLowerCase();
    let visibleTopics = 0;
    let visiblePillars = 0;

    for (const pillar of pillars) {
      const topics = Array.from(pillar.querySelectorAll<HTMLElement>('[data-atlas-topic]'));
      let pillarMatches = 0;
      for (const topic of topics) {
        const hay = topic.dataset.search ?? '';
        const show = !q || hay.includes(q);
        topic.hidden = !show;
        if (show) {
          pillarMatches += 1;
          visibleTopics += 1;
        }
      }
      pillar.hidden = pillarMatches === 0;
      if (pillarMatches > 0) visiblePillars += 1;
    }

    if (countEl) {
      countEl.textContent = isZhPage()
        ? q
          ? `当前展示 ${visibleTopics} / ${totalTopics} 项主题（涵盖 ${visiblePillars} 个支柱）`
          : `当前展示 ${totalTopics} / ${totalTopics} 项主题（涵盖 ${pillars.length} 个支柱）`
        : q
          ? `Showing ${visibleTopics} of ${totalTopics} topics across ${visiblePillars} ${visiblePillars === 1 ? 'pillar' : 'pillars'}`
          : `Showing ${totalTopics} of ${totalTopics} topics across ${pillars.length} pillars`;
    }
    if (emptyEl) {
      emptyEl.hidden = visibleTopics > 0;
    }
  };

  input.addEventListener('input', apply);
}

initAtlasFilter();

// GOV.UK Step-by-Step interactive Journey Playbook (/journeys/)
// Uses native Invoker Commands (--toggle-all) + capture listeners (modern-web-guidance: accordion)
function initJourneyPlaybook(): void {
  const accordion = document.querySelector<HTMLElement>('[data-journey-accordion]');
  if (!accordion) return;

  const STORAGE = 'chinawao-first-trip-progress-v1';
  const steps = Array.from(accordion.querySelectorAll<HTMLDetailsElement>(':scope > details'));
  const checks = Array.from(accordion.querySelectorAll<HTMLInputElement>('[data-journey-check]'));
  const statusEl = document.querySelector<HTMLElement>('[data-journey-status]');
  const barEl = document.querySelector<HTMLElement>('[data-journey-bar]');
  const resetBtn = document.querySelector<HTMLButtonElement>('[data-journey-reset]');
  const toggleAllBtn = document.querySelector<HTMLButtonElement>(
    '[commandfor="journey-accordion"][command="--toggle-all"]',
  );

  const loadDone = (): Set<string> => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) return new Set();
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? new Set(parsed.filter((x) => typeof x === 'string')) : new Set();
    } catch {
      return new Set();
    }
  };

  const saveDone = (set: Set<string>) => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(Array.from(set)));
    } catch {
      // Ignore storage quota / privacy restrictions
    }
  };

  const syncProgress = () => {
    const done = new Set<string>();
    for (const input of checks) {
      const stepId = input.dataset.journeyCheck;
      const parent = input.closest<HTMLDetailsElement>('[data-journey-step]');
      if (input.checked && stepId) {
        done.add(stepId);
        if (parent) parent.dataset.done = 'true';
      } else if (parent) {
        parent.dataset.done = 'false';
      }
    }
    saveDone(done);
    const total = checks.length;
    const completed = done.size;
    if (statusEl) {
      statusEl.textContent = isZhPage()
        ? `已完成 ${completed} / ${total} 步`
        : `${completed} of ${total} steps completed`;
    }
    if (barEl) {
      barEl.style.width = `${total > 0 ? Math.round((completed / total) * 100) : 0}%`;
    }
  };

  const initial = loadDone();
  for (const input of checks) {
    const stepId = input.dataset.journeyCheck;
    if (stepId && initial.has(stepId)) {
      input.checked = true;
    }
    input.addEventListener('change', syncProgress);
  }
  syncProgress();

  resetBtn?.addEventListener('click', () => {
    for (const input of checks) {
      input.checked = false;
    }
    syncProgress();
  });

  const syncToggleAllState = () => {
    if (!toggleAllBtn) return;
    const allOpen = steps.length > 0 && steps.every((details) => details.open);
    toggleAllBtn.setAttribute('aria-expanded', String(allOpen));
  };

  // Command events do not bubble, hence capture
  document.addEventListener(
    'command',
    (event: Event) => {
      const cmdEvent = event as Event & { command?: string; source?: HTMLElement | null };
      if (cmdEvent.command !== '--toggle-all' || event.target !== accordion) return;
      const expand = cmdEvent.source?.getAttribute('aria-expanded') !== 'true';
      for (const details of steps) {
        details.open = expand;
      }
      syncToggleAllState();
    },
    { capture: true },
  );

  // toggle does not bubble, hence capture
  document.addEventListener(
    'toggle',
    (event: Event) => {
      if (event.target instanceof HTMLDetailsElement && event.target.parentElement === accordion) {
        syncToggleAllState();
      }
    },
    { capture: true },
  );

  syncToggleAllState();
}

initJourneyPlaybook();

// Sift-inspired Official Service Directory multi-facet filter (/directory/)
function initDirectoryFinder(): void {
  const form = document.querySelector<HTMLFormElement>('[data-directory-finder]');
  if (!form) return;

  const qInput = form.querySelector<HTMLInputElement>('input[name="q"]');
  const domainSelect = form.querySelector<HTMLSelectElement>('select[name="domain"]');
  const accessSelect = form.querySelector<HTMLSelectElement>('select[name="access"]');
  const clearBtn = form.querySelector<HTMLButtonElement>('[data-directory-clear]');
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-directory-card]'));
  const countEl = document.querySelector<HTMLElement>('[data-directory-count]');
  const emptyEl = document.querySelector<HTMLElement>('[data-directory-empty]');
  if (cards.length === 0) return;

  const apply = (syncUrl: boolean) => {
    const q = (qInput?.value ?? '').trim().toLowerCase();
    const domain = (domainSelect?.value ?? '').trim();
    const access = (accessSelect?.value ?? '').trim();

    let visible = 0;
    for (const card of cards) {
      const hay = card.dataset.search ?? '';
      const matchQ = !q || hay.includes(q);
      const matchDomain = !domain || card.dataset.domain === domain;
      const matchAccess = !access || card.dataset.access === access;
      const show = matchQ && matchDomain && matchAccess;
      card.hidden = !show;
      if (show) visible += 1;
    }

    if (countEl) {
      const filtered = Boolean(q || domain || access);
      countEl.textContent = isZhPage()
        ? filtered
          ? `筛选出 ${visible} / ${cards.length} 个官方门户`
          : `共展示 ${cards.length} 个官方门户`
        : filtered
          ? `Showing ${visible} of ${cards.length} official portals`
          : `Showing ${cards.length} official portals`;
    }
    if (emptyEl) emptyEl.hidden = visible > 0;
    if (clearBtn) clearBtn.hidden = !(q || domain || access);

    if (syncUrl) {
      const url = new URL(window.location.href);
      if (q) url.searchParams.set('q', q);
      else url.searchParams.delete('q');
      if (domain) url.searchParams.set('domain', domain);
      else url.searchParams.delete('domain');
      if (access) url.searchParams.set('access', access);
      else url.searchParams.delete('access');
      history.replaceState(null, '', url.toString());
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    apply(true);
  });
  qInput?.addEventListener('input', () => apply(true));
  domainSelect?.addEventListener('change', () => apply(true));
  accessSelect?.addEventListener('change', () => apply(true));
  clearBtn?.addEventListener('click', () => {
    if (qInput) qInput.value = '';
    if (domainSelect) domainSelect.value = '';
    if (accessSelect) accessSelect.value = '';
    apply(true);
    qInput?.focus();
  });

  apply(false);
}

initDirectoryFinder();

// Practical Tools Workbench: 12.1 Visa-Free Quick Checker + 12.2/12.4 Bilingual Flashcards (/tools/)
function initToolsWorkbench(): void {
  const visaRoot = document.querySelector<HTMLElement>('[data-visa-checker]');
  if (visaRoot) {
    const countrySelect = visaRoot.querySelector<HTMLSelectElement>('[data-visa-country]');
    const daysInput = visaRoot.querySelector<HTMLInputElement>('[data-visa-days]');
    const transitCheck = visaRoot.querySelector<HTMLInputElement>('[data-visa-transit]');
    const resultCard = visaRoot.querySelector<HTMLElement>('[data-visa-result]');
    const badgeEl = visaRoot.querySelector<HTMLElement>('[data-visa-badge]');
    const headlineEl = visaRoot.querySelector<HTMLElement>('[data-visa-headline], [data-visa-verdict]');
    const detailEl = visaRoot.querySelector<HTMLElement>('[data-visa-detail], [data-visa-summary]');
    const noteEl = visaRoot.querySelector<HTMLElement>('[data-visa-note]');

    const evaluate = () => {
      if (!countrySelect || !daysInput || !transitCheck || !resultCard) return;
      const opt = countrySelect.selectedOptions[0];
      if (!opt) return;

      const zh = isZhPage();
      const country = opt.textContent?.trim() ?? (zh ? '所选护照' : 'Selected passport');
      const unilateral = Number(opt.dataset.unilateral ?? '0');
      const mutual = Number(opt.dataset.mutual ?? '0');
      const transit240 = opt.dataset.transit === 'true';
      const note = opt.dataset.note ?? '';
      const rawDays = Number(daysInput.value || '1');
      const days = Math.max(1, Math.min(180, Number.isFinite(rawDays) ? rawDays : 1));
      const hasThirdCountry = transitCheck.checked;

      let status = 'visa-required';
      let badge = zh ? '需提前办理常规签证' : 'Standard Visa Required';
      let headline = zh
        ? `出发前需提前办理中国签证（计划停留 ${days} 天）`
        : `Apply for a Chinese Visa Prior to Departure (${days} days)`;
      let detail = zh
        ? `${country}普通护照持有人在当前行程条件下计划停留 ${days} 天，请通过中国签证申请服务中心（CVASC）或驻外使领馆提前办理 L（旅游）或 M（商贸）签证。${note}`
        : `${country} ordinary passport holders planning a ${days}-day stay under these routing conditions should apply for an L (tourist) or M (business) visa via CVASC or the nearest Chinese Embassy. ${note}`;

      if (mutual > 0 && days <= mutual) {
        status = 'eligible';
        badge = zh ? '适用双边互免签证' : 'Mutual Visa-Free Eligible';
        headline = zh
          ? `适用 ${mutual} 天双边互免签证入境`
          : `Eligible for ${mutual}-Day Mutual Visa-Free Entry`;
        detail = zh
          ? `${country}与中国签有互免签证协定，单次停留最长 ${mutual} 天（当前计划 ${days} 天）。${note}`
          : `${country} holds a mutual visa exemption allowing stays up to ${mutual} days (${days} days planned). ${note}`;
      } else if (unilateral > 0 && days <= unilateral) {
        status = 'eligible';
        badge = zh ? '适用单方面免签' : 'Unilateral Visa-Free Eligible';
        headline = zh
          ? `适用 ${unilateral} 天单方面免签入境`
          : `Eligible for ${unilateral}-Day Unilateral Visa-Free Entry`;
        detail = zh
          ? `${country}普通护照持有人可享单方面免签最长 ${unilateral} 天（当前计划 ${days} 天）。${note}`
          : `${country} ordinary passport holders qualify for up to ${unilateral} days visa-free (${days} days planned). ${note}`;
      } else if (transit240 && days <= 10 && hasThirdCountry) {
        status = 'transit';
        badge = zh ? '适用 240 小时过境免签' : '240-Hour Transit Eligible';
        headline = zh
          ? '适用 240 小时（10 天）跨省过境免签'
          : 'Eligible for 240-Hour (10-Day) Visa-Free Transit';
        detail = zh
          ? `持已确定日期及座位的联程机票/船票前往第三国或地区（含中国香港、澳门、台湾），${country}护照持有人可在全国 24 个省（区、市）内跨省免签停留最长 240 小时。${note}`
          : `With a confirmed onward ticket to a third country/region (including Hong Kong, Macao, or Taiwan), ${country} passport holders may stay up to 240 hours across 24 provinces. ${note}`;
      } else if (transit240 && days <= 10 && !hasThirdCountry) {
        status = 'visa-required';
        badge = zh ? '缺少第三方联程机票' : 'Third-Country Ticket Needed';
        headline = zh
          ? '需补充前往第三国/地区的联程机票，或提前办理签证'
          : 'Add a Third-Country Onward Ticket or Apply for a Visa';
        detail = zh
          ? `直接原路往返同一出发国不符合 240 小时过境免签条件。若将返程或下一程经由中国香港、澳门或第三国中转，${country}护照即可适用 240 小时过境免签；否则需提前办理签证。`
          : `Round-trip flights returning directly to the same country do not qualify for 240-hour transit. Routing through Hong Kong, Macao, or a third country unlocks 240-hour transit for ${country} passports; otherwise apply for a visa.`;
      }

      resultCard.dataset.status = status;
      if (badgeEl) badgeEl.textContent = badge;
      if (headlineEl) headlineEl.textContent = headline;
      if (detailEl) detailEl.textContent = detail;
      if (noteEl) noteEl.textContent = badge;
    };

    countrySelect?.addEventListener('change', evaluate);
    daysInput?.addEventListener('input', evaluate);
    transitCheck?.addEventListener('change', evaluate);
    evaluate();
  }

  // Flashcard category filter & fullscreen modal dialog
  const filterBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-flashcard-filter]'));
  const cardBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-flashcard-open]'));
  const dialog = document.querySelector<HTMLDialogElement>('#flashcard-dialog');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.flashcardFilter ?? 'All';
      filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      cardBtns.forEach((card) => {
        card.hidden = selected !== 'All' && card.dataset.category !== selected;
      });
    });
  });

  if (dialog && cardBtns.length > 0) {
    const catEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-cat]');
    const titleEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-title]');
    const hanziEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-hanzi]');
    const pinyinEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-pinyin]');
    const enEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-en]');
    const tipEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-tip]');

    cardBtns.forEach((card) => {
      card.addEventListener('click', () => {
        if (catEl) catEl.textContent = card.dataset.categoryLabel ?? card.dataset.category ?? '';
        if (titleEl) titleEl.textContent = card.dataset.title ?? '';
        if (hanziEl) hanziEl.textContent = card.dataset.hanzi ?? '';
        if (pinyinEl) pinyinEl.textContent = card.dataset.pinyin ?? '';
        if (enEl) enEl.textContent = card.dataset.english ?? '';
        if (tipEl) tipEl.textContent = card.dataset.tip ?? '';
        if (!dialog.open) {
          dialog.showModal();
        }
      });
    });
  }
}

initToolsWorkbench();

// Design System specimen interactive segmented demo (/design-system/)
function initDesignSystemDemos(): void {
  const group = document.querySelector<HTMLElement>('[data-ds-segmented]');
  if (!group) return;
  const btns = Array.from(group.querySelectorAll<HTMLButtonElement>('[data-ds-seg-btn]'));
  const statusEl = document.querySelector<HTMLElement>('[data-ds-seg-status]');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.dataset.dsSegBtn ?? '';
      btns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      if (statusEl) {
        const strong = document.createElement('strong');
        strong.textContent = label;
        statusEl.replaceChildren('Active view: ', strong);
      }
    });
  });
}

initDesignSystemDemos();

// Accessible Tabs (modern-web-guidance: tabs)
// Selection follows focus + Arrow/Home/End keyboard support + beforematch find-in-page sync
function initTabs(): void {
  const tabRoots = Array.from(document.querySelectorAll<HTMLElement>('[data-cw-tabs]'));
  if (tabRoots.length === 0) return;

  for (const root of tabRoots) {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-cw-tab]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-cw-tabpanel]'));
    if (tabs.length === 0 || panels.length === 0) continue;

    const selectTab = (targetTab: HTMLButtonElement, moveFocus: boolean) => {
      const targetId = targetTab.dataset.cwTab;
      for (const tab of tabs) {
        const active = tab === targetTab;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        tab.toggleAttribute('focusgroupstart', active);
      }

      for (const panel of panels) {
        const active = panel.dataset.cwTabpanel === targetId;
        if (active) {
          panel.removeAttribute('hidden');
          panel.tabIndex = 0;
        } else {
          panel.setAttribute('hidden', 'until-found');
          panel.removeAttribute('tabindex');
        }
      }

      targetTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      if (moveFocus) {
        targetTab.focus();
      }
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => selectTab(tab, false));
      tab.addEventListener('keydown', (event) => {
        let nextIdx: number | null = null;
        if (event.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIdx = 0;
        else if (event.key === 'End') nextIdx = tabs.length - 1;

        if (nextIdx !== null && tabs[nextIdx]) {
          event.preventDefault();
          selectTab(tabs[nextIdx], true);
        }
      });
    });

    // Find-in-page reveals hidden="until-found" panel -> sync matching tab selection
    panels.forEach((panel) => {
      panel.addEventListener('beforematch', () => {
        const matchingTab = tabs.find((t) => t.dataset.cwTab === panel.dataset.cwTabpanel);
        if (matchingTab) selectTab(matchingTab, false);
      });
    });
  }
}

initTabs();

// Accessible Toggletips / Tooltips (modern-web-guidance: interest-triggered-tooltips)
// 1) Where popover="hint" is unsupported, switch toggletip to "auto" in beforetoggle capture phase
// 2) Keep aria-expanded synced on triggers via capturing toggle listener
function initTooltips(): void {
  const probe = document.createElement('div') as HTMLElement & { popover: string | null };
  try {
    probe.popover = 'hint';
  } catch {
    // Ignore unsupported assignment
  }

  if (probe.popover !== 'hint') {
    document.addEventListener(
      'beforetoggle',
      (event: Event) => {
        const target = event.target as (HTMLElement & { popover: string | null }) | null;
        const toggleEv = event as Event & { newState?: string };
        if (!target || !target.id) return;
        const isToggletip =
          target.getAttribute('popover') === 'hint' &&
          Boolean(document.querySelector(`[popovertarget="${CSS.escape(target.id)}"]`));
        if (toggleEv.newState === 'open' && isToggletip) {
          target.popover = 'auto';
        }
      },
      { capture: true },
    );
  }

  document.addEventListener(
    'toggle',
    (event: Event) => {
      const target = event.target as HTMLElement | null;
      const toggleEv = event as Event & { newState?: string };
      if (!target || !target.id || !target.classList.contains('cw-tooltip')) return;
      const isOpen = toggleEv.newState === 'open';
      document
        .querySelectorAll<HTMLButtonElement>(`[popovertarget="${CSS.escape(target.id)}"]`)
        .forEach((btn) => btn.setAttribute('aria-expanded', String(isOpen)));
    },
    { capture: true },
  );
}

initTooltips();

// Dismissible Policy Banners
function initBanners(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-cw-banner-dismiss]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const banner = btn.closest<HTMLElement>('[data-cw-banner]');
      if (banner) banner.hidden = true;
    });
  });
}

initBanners();

// Persistent Toast Notifications (modern-web-guidance: persistent-toast-notifications)
// Uses popover="manual" + ariaNotify() / live region fallback + modal-open suppression
interface ToastAction {
  label: string;
  onClick: () => void;
}
let showSiteToast: (msg: string, trigger?: HTMLElement | null, action?: ToastAction) => void = () => {};

function initToasts(): void {
  const toastEl = document.querySelector<HTMLElement & { showPopover?: () => void; hidePopover?: () => void }>('[data-cw-toast]');
  const textEl = document.querySelector<HTMLElement>('[data-cw-toast-text]');
  const liveEl = document.querySelector<HTMLElement>('#cw-toast-live');
  if (!toastEl || !textEl) return;

  let lastTrigger: HTMLElement | null = null;
  let undoBtn: HTMLButtonElement | null = null;
  let autoHideTimer: number | null = null;

  const clearUndo = () => {
    if (undoBtn) {
      undoBtn.remove();
      undoBtn = null;
    }
    if (autoHideTimer !== null) {
      window.clearTimeout(autoHideTimer);
      autoHideTimer = null;
    }
  };

  const announce = (msg: string) => {
    const docWithNotify = document as Document & { ariaNotify?: (text: string) => void };
    if (typeof docWithNotify.ariaNotify === 'function') {
      docWithNotify.ariaNotify(msg);
    } else if (liveEl) {
      liveEl.textContent = '';
      requestAnimationFrame(() => {
        liveEl.textContent = msg;
      });
    }
  };

  showSiteToast = (msg: string, trigger?: HTMLElement | null, action?: ToastAction) => {
    // Do not surface toasts behind an open modal dialog
    if (document.querySelector('dialog[open]')) return;
    lastTrigger = trigger ?? (document.activeElement as HTMLElement | null);
    clearUndo();
    textEl.textContent = msg;

    if (action) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cw-toast-undo';
      btn.textContent = action.label;
      btn.addEventListener('click', () => {
        clearUndo();
        action.onClick();
      });
      textEl.insertAdjacentElement('afterend', btn);
      undoBtn = btn;
      autoHideTimer = window.setTimeout(() => {
        clearUndo();
        try {
          toastEl.hidePopover?.();
        } catch {
          // Already closed
        }
      }, 5000);
    }

    try {
      toastEl.showPopover?.();
    } catch {
      // Popover already open
    }
    announce(msg);
  };

  // Return focus cleanly when the user manually dismisses a focused toast
  toastEl.addEventListener('toggle', (event: Event) => {
    const toggleEv = event as Event & { newState?: string };
    if (toggleEv.newState === 'closed' && lastTrigger?.isConnected) {
      if (document.activeElement === document.body) {
        lastTrigger.focus();
      }
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-cw-toast-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const msg = btn.dataset.cwToastTrigger || 'Action saved.';
      showSiteToast(msg, btn);
    });
  });
}

initToasts();

// Brand-Consistent Native Range Sliders + Tool 12.5 Tax Refund Estimator (modern-web-guidance: slider)
function initSliders(): void {
  const sliders = Array.from(document.querySelectorAll<HTMLInputElement>('[data-cw-slider]'));
  if (sliders.length === 0) return;

  const formatNum = (val: number, prefix: string, suffix: string) =>
    `${prefix}${val.toLocaleString('en-US')}${suffix}`;

  for (const slider of sliders) {
    const field = slider.closest<HTMLElement>('[data-cw-slider-field]');
    const output = field?.querySelector<HTMLOutputElement>('[data-cw-slider-output]');
    const prefix = slider.dataset.unitPrefix ?? '';
    const suffix = slider.dataset.unitSuffix ?? '';

    const sync = () => {
      const min = slider.min || '0';
      const max = slider.max || '100';
      const num = Number(slider.value || min);
      const formatted = formatNum(num, prefix, suffix);
      slider.style.setProperty('--attr-min', min);
      slider.style.setProperty('--attr-max', max);
      slider.style.setProperty('--control-value', slider.value);
      slider.setAttribute('aria-valuetext', formatted);
      if (output) output.textContent = formatted;

      // Sync Tool 12.5 Departure Tax Refund estimator if inside [data-tax-refund-calc]
      const taxRoot = slider.closest<HTMLElement>('[data-tax-refund-calc]');
      if (taxRoot) {
        const grossEl = taxRoot.querySelector<HTMLElement>('[data-tax-gross]');
        const netEl = taxRoot.querySelector<HTMLElement>('[data-tax-net]');
        const gross = Math.round(num * 0.11);
        const net = Math.round(num * 0.09);
        const unit = isZhPage() ? ' 元' : ' RMB';
        if (grossEl) grossEl.textContent = `¥${gross.toLocaleString('en-US')}${unit}`;
        if (netEl) netEl.textContent = `¥${net.toLocaleString('en-US')}${unit}`;
      }
    };

    sync();
    slider.addEventListener('input', sync);
  }
}

initSliders();

// Tool 12.3 Ticket Release Date Picker (modern-web-guidance: capture-location-agnostic-data)
// Uses Temporal.PlainDate when natively available, with timezone-safe integer fallback
function initTicketCalendar(): void {
  const root = document.querySelector<HTMLElement>('[data-ticket-calendar]');
  if (!root) return;
  const input = root.querySelector<HTMLInputElement>('[data-cw-date-input]');
  const railEl = root.querySelector<HTMLElement>('[data-ticket-rail]');
  const museumEl = root.querySelector<HTMLElement>('[data-ticket-museum]');
  if (!input || !railEl || !museumEl) return;

  type TemporalGlobal = {
    PlainDate?: {
      from: (iso: string) => { subtract: (dur: { days: number }) => { toString: () => string } };
    };
  };

  const subtractCalendarDays = (isoDate: string, days: number): string => {
    const t = (globalThis as typeof globalThis & { Temporal?: TemporalGlobal }).Temporal;
    if (t?.PlainDate) {
      return t.PlainDate.from(isoDate).subtract({ days }).toString();
    }
    const parts = isoDate.split('-').map(Number);
    if (parts.length !== 3 || parts.some((n) => !Number.isFinite(n))) return isoDate;
    const utcMs = Date.UTC(parts[0], parts[1] - 1, parts[2] - days);
    const d = new Date(utcMs);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const update = () => {
    const val = input.value.trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) return;
    railEl.textContent = subtractCalendarDays(val, 15);
    museumEl.textContent = subtractCalendarDays(val, 7);
  };

  update();
  input.addEventListener('change', update);
  input.addEventListener('input', update);
}

initTicketCalendar();

// Copy Chinese phrase inside fullscreen #flashcard-dialog (inline status, never toast behind modal)
function initFlashcardCopy(): void {
  const copyBtn = document.querySelector<HTMLButtonElement>('[data-flashcard-copy]');
  const dialog = document.querySelector<HTMLDialogElement>('#flashcard-dialog');
  if (!copyBtn || !dialog) return;
  const hanziEl = dialog.querySelector<HTMLElement>('[data-flashcard-modal-hanzi]');
  const statusEl = dialog.querySelector<HTMLElement>('[data-flashcard-copy-status]');

  copyBtn.addEventListener('click', async () => {
    const phrase = hanziEl?.textContent?.trim() ?? '';
    if (!phrase) return;
    const zh = isZhPage();
    try {
      await navigator.clipboard.writeText(phrase);
      if (statusEl) statusEl.textContent = zh ? '已复制中文短语到剪贴板 ✓' : 'Copied Chinese phrase to clipboard ✓';
    } catch {
      if (statusEl) statusEl.textContent = zh ? '请手动选中上方中文短语复制。' : 'Select text above to copy manually.';
    }
  });

  dialog.addEventListener('close', () => {
    if (statusEl) {
      statusEl.textContent = isZhPage()
        ? '直接向司机、工作人员或医院导诊台出示屏幕即可'
        : 'Show screen directly to driver, staff, or hospital desk';
    }
  });
}

initFlashcardCopy();

// Newsletter Mock Subscription Forms (checkValidity + focus first invalid + persistent Toast)
function initNewsletterForms(): void {
  document.querySelectorAll<HTMLFormElement>('[data-cw-newsletter-form]').forEach((form) => {
    const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]');
    const hintEl = form.querySelector<HTMLElement>('[data-cw-newsletter-hint]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!emailInput) return;
      const zh = isZhPage();
      if (!form.checkValidity()) {
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
        if (hintEl) {
          hintEl.textContent = zh
            ? '请输入有效的电子邮箱地址（例如 reader@example.com）。'
            : 'Please enter a valid email address (e.g. reader@example.com).';
        }
        return;
      }
      emailInput.removeAttribute('aria-invalid');
      const addr = emailInput.value.trim();
      form.reset();
      if (hintEl) {
        hintEl.textContent = zh
          ? `${addr} 已加入每周日 ChinaWao 周报订阅列表。`
          : `${addr} has been added to the Sunday ChinaWao Brief.`;
      }
      showSiteToast(
        zh
          ? `已订阅 ChinaWao 周报：${addr}。`
          : `Subscribed ${addr} to the ChinaWao Brief.`,
        emailInput,
      );
    });

    emailInput?.addEventListener('input', () => {
      if (emailInput.checkValidity()) {
        emailInput.removeAttribute('aria-invalid');
      }
    });
  });
}

initNewsletterForms();

// Tool 12.9 Ground Pulse Field Report Forms (prepends live mock card + persistent Toast)
function initGroundPulse(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-pulse-root]').forEach((root) => {
    const form = root.querySelector<HTMLFormElement>('[data-cw-pulse-form]');
    const feed = root.querySelector<HTMLElement>('[data-cw-pulse-feed]');
    if (!form || !feed) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector<HTMLElement>(':invalid');
        firstInvalid?.setAttribute('aria-invalid', 'true');
        firstInvalid?.focus();
        return;
      }

      const data = new FormData(form);
      const topic = String(data.get('topic') ?? 'Field Check').trim();
      const city = String(data.get('city') ?? '').trim();
      const note = String(data.get('note') ?? '').trim();
      const outcomeEntry = Array.from(data.entries()).find(([k]) => k.endsWith('-outcome'));
      const outcome = String(outcomeEntry?.[1] ?? 'Worked');

      const zh = isZhPage();
      const tone = outcome === 'Worked' ? 'verified' : outcome === 'Partial' ? 'standby' : 'danger';
      const outcomeLabel = zh
        ? outcome === 'Worked'
          ? '实测可用'
          : outcome === 'Partial'
            ? '部分可用'
            : '受阻/失败'
        : outcome;
      const today = new Date().toISOString().slice(0, 10);

      const card = document.createElement('article');
      card.className = 'cw-pulse-item';

      const head = document.createElement('div');
      head.className = 'cw-pulse-item-head';

      const labelSpan = document.createElement('span');
      labelSpan.className = 'portal-domain-tag';
      labelSpan.textContent = `${topic} · ${city}`;

      const badgeSpan = document.createElement('span');
      badgeSpan.className = `cw-badge cw-badge--${tone}`;
      badgeSpan.textContent = outcomeLabel;

      head.append(labelSpan, badgeSpan);

      const noteP = document.createElement('p');
      noteP.className = 'cw-pulse-item-note';
      noteP.textContent = note;

      const metaSpan = document.createElement('span');
      metaSpan.className = 'portal-card-meta';
      metaSpan.textContent = zh
        ? `记录于 ${today}`
        : `Logged ${today}`;

      card.append(head, noteP, metaSpan);

      const heading = feed.querySelector('.rail-heading');
      if (heading?.nextSibling) {
        feed.insertBefore(card, heading.nextSibling);
      } else {
        feed.append(card);
      }

      form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
      form.reset();
      showSiteToast(
        zh
          ? `已提交现场实测：${topic}（${outcomeLabel}）。`
          : `Field report logged for ${topic} (${outcome}).`,
      );
    });
  });
}

initGroundPulse();

// Homepage Hero Showcase Carousel: Full-Viewport Cover + 3-Bar Timed Progress Switcher
function initHeroCarousel(): void {
  const root = document.querySelector<HTMLElement>('[data-hero-carousel]');
  if (!root) return;

  const track = root.querySelector<HTMLElement>('[data-hero-track]');
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const markers = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-hero-marker]'));
  const statusEl = root.querySelector<HTMLElement>('[data-hero-status]');

  if (!track || slides.length === 0) return;

  const total = slides.length;
  const AUTO_MS = 6000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentIndex = 0;
  let lastSettledIndex = 0;
  let pendingTarget: number | null = null;
  let scrollRafId = 0;
  let settleTimer = 0;
  let hoverPaused = false;
  let focusPaused = false;
  let elapsedMs = 0;
  let lastTick = performance.now();

  const updateProgressBar = (ratio: number) => {
    markers.forEach((btn, idx) => {
      btn.style.setProperty('--hero-progress', idx === currentIndex ? ratio.toFixed(4) : '0');
    });
  };

  const setActiveUi = (index: number, resetTimer = false) => {
    currentIndex = index;
    if (resetTimer) {
      elapsedMs = 0;
      lastTick = performance.now();
    }
    markers.forEach((btn, idx) => {
      if (idx === index) {
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.removeAttribute('aria-current');
        btn.style.setProperty('--hero-progress', '0');
      }
    });
    if (resetTimer) {
      updateProgressBar(0);
    }
  };

  const getNearestIndex = (): number => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    slides.forEach((slide, idx) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });
    return bestIdx;
  };

  const goToSlide = (targetIndex: number) => {
    const normalized = ((targetIndex % total) + total) % total;
    const slide = slides[normalized];
    if (!slide) return;
    pendingTarget = normalized;
    setActiveUi(normalized, true);
    const delta = slide.offsetLeft - track.scrollLeft;
    track.scrollBy({
      left: delta,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  };

  const handleSettled = () => {
    const settled = pendingTarget !== null ? pendingTarget : getNearestIndex();
    pendingTarget = null;
    if (settled !== currentIndex) {
      setActiveUi(settled, true);
    }
    if (settled !== lastSettledIndex) {
      lastSettledIndex = settled;
      if (statusEl) {
        statusEl.textContent = isZhPage()
          ? `正在展示第 ${settled + 1} / ${total} 条封面实录`
          : `Showing cover story ${settled + 1} of ${total}`;
      }
    }
  };

  markers.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Pause only while hovering interactive text/bars so resting the cursor on the full-screen photo still advances
  const interactiveZones = root.querySelectorAll<HTMLElement>('.hero-slide-overlay, .hero-markers');
  interactiveZones.forEach((zone) => {
    zone.addEventListener('mouseenter', () => {
      hoverPaused = true;
    });
    zone.addEventListener('mouseleave', () => {
      hoverPaused = false;
      lastTick = performance.now();
    });
  });

  root.addEventListener('focusin', () => {
    focusPaused = true;
  });
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget as Node | null)) {
      focusPaused = false;
      lastTick = performance.now();
    }
  });

  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const base = pendingTarget !== null ? pendingTarget : currentIndex;
      goToSlide(base + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const base = pendingTarget !== null ? pendingTarget : currentIndex;
      goToSlide(base - 1);
    }
  });

  const supportsScrollEnd = 'onscrollend' in window;
  if (supportsScrollEnd) {
    track.addEventListener('scrollend', handleSettled);
  }

  track.addEventListener('scroll', () => {
    if (!supportsScrollEnd) {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(handleSettled, 140);
    }
    if (pendingTarget !== null) return;
    if (scrollRafId) return;
    scrollRafId = requestAnimationFrame(() => {
      scrollRafId = 0;
      const nearest = getNearestIndex();
      if (nearest !== currentIndex) {
        setActiveUi(nearest, true);
      }
    });
  });

  const tick = (now: number) => {
    const isPaused =
      total < 2 ||
      hoverPaused ||
      focusPaused ||
      document.hidden ||
      Boolean(document.querySelector('dialog[open]'));

    if (!isPaused) {
      elapsedMs += Math.min(Math.max(now - lastTick, 0), 120);
      if (elapsedMs >= AUTO_MS) {
        const base = pendingTarget !== null ? pendingTarget : currentIndex;
        goToSlide(base + 1);
      } else {
        updateProgressBar(elapsedMs / AUTO_MS);
      }
    }
    lastTick = now;
    requestAnimationFrame(tick);
  };

  setActiveUi(0, true);
  requestAnimationFrame(tick);
}

initHeroCarousel();

// ============================================================================
// ChinaWao Route A Full UI Kit & Pro Blocks Interactive Enhancements
// ============================================================================

// 1. Sortable DataTable (modern-web-guidance: sortable-table)
function initSortableTables(): void {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  const supportsCommand = 'command' in HTMLButtonElement.prototype;

  document.querySelectorAll<HTMLTableElement>('[data-cw-sortable-table]').forEach((table) => {
    const tbody = table.tBodies[0];
    const headerRow = table.tHead?.rows[0];
    if (!tbody || !headerRow) return;
    const statusId = table.dataset.statusId;
    const statusEl = statusId ? document.getElementById(statusId) : null;

    const performSort = (btn: HTMLButtonElement) => {
      const th = btn.closest('th');
      if (!th) return;
      const colIndex = th.cellIndex;
      const colType = th.dataset.type ?? 'string';
      const direction = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';

      Array.from(headerRow.cells).forEach((cell) => cell.removeAttribute('aria-sort'));
      th.setAttribute('aria-sort', direction);

      const factor = direction === 'ascending' ? 1 : -1;
      const rows = Array.from(tbody.rows).filter((r) => !r.classList.contains('cw-table-empty-row'));

      const readVal = (row: HTMLTableRowElement) => {
        const cell = row.cells[colIndex];
        return cell?.dataset.value ?? cell?.textContent?.trim() ?? '';
      };

      const sorted = rows.sort((a, b) => {
        const va = readVal(a);
        const vb = readVal(b);
        if (colType === 'number') {
          return factor * (Number(va) - Number(vb));
        }
        return factor * collator.compare(va, vb);
      });

      const reorder = () => {
        const container = tbody as HTMLElement & { moveBefore?: (node: Node, child: Node | null) => void };
        sorted.forEach((row) => {
          if (typeof container.moveBefore === 'function') {
            container.moveBefore(row, null);
          } else {
            tbody.appendChild(row);
          }
        });
      };

      reorder();

      if (statusEl) {
        statusEl.textContent = isZhPage()
          ? `已按“${btn.textContent?.trim() ?? '列'}”${direction === 'ascending' ? '升序' : '降序'}排列，共 ${sorted.length} 行`
          : `Sorted by ${btn.textContent?.trim() ?? 'column'}, ${direction}, ${sorted.length} rows`;
      }
    };

    if (supportsCommand) {
      table.addEventListener('command', (ev) => {
        const ce = ev as Event & { command?: string; source?: HTMLElement };
        if (ce.command === '--sort' && ce.source instanceof HTMLButtonElement) {
          performSort(ce.source);
        }
      });
    } else {
      table.querySelectorAll<HTMLButtonElement>('.cw-table-sort-btn').forEach((btn) => {
        btn.addEventListener('click', () => performSort(btn));
      });
    }
  });
}

// 2. Removable Filter Tags + Demo Filter Reset
function initRemovableTags(): void {
  document.addEventListener('click', (event) => {
    const btn = (event.target as HTMLElement | null)?.closest<HTMLButtonElement>('[data-cw-tag-remove]');
    if (!btn) return;
    const tag = btn.closest<HTMLElement>('[data-cw-tag]');
    const label = tag?.dataset.tagValue ?? 'filter';
    tag?.remove();
    showSiteToast(isZhPage() ? `已移除“${label}”筛选标签。` : `Removed "${label}" filter tag.`);
  });

  document.querySelectorAll<HTMLElement>('[data-cw-filter-demo]').forEach((root) => {
    const resetBtn = root.querySelector<HTMLButtonElement>('[data-cw-filter-reset]');
    const searchInput = root.querySelector<HTMLInputElement>('[data-cw-filter-q]');
    resetBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      root.querySelectorAll<HTMLSelectElement>('select').forEach((sel) => {
        sel.selectedIndex = 0;
      });
      showSiteToast(isZhPage() ? '筛选条件已重置。' : 'Filter bar reset.');
    });
  });
}

// 3. Interactive Star Rating
function initRatingInputs(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-rating]').forEach((fieldset) => {
    const labels = Array.from(fieldset.querySelectorAll<HTMLLabelElement>('[data-star-val]'));
    const readout = fieldset.querySelector<HTMLElement>('[data-cw-rating-readout]');

    const sync = (val: number) => {
      labels.forEach((lbl) => {
        const starVal = Number(lbl.dataset.starVal ?? '0');
        lbl.classList.toggle('is-filled', starVal <= val);
      });
      if (readout) readout.textContent = `${val} / 5`;
    };

    fieldset.addEventListener('change', (ev) => {
      const target = ev.target as HTMLInputElement | null;
      if (target?.type === 'radio') {
        sync(Number(target.value));
      }
    });
  });
}

// 4. ColorPicker with Swatch Presets
function initColorPickers(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-color-picker]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('[data-cw-color-input]');
    const hexEl = root.querySelector<HTMLElement>('[data-cw-color-hex]');
    if (!input) return;

    const update = (hex: string) => {
      input.value = hex;
      if (hexEl) hexEl.textContent = hex.toUpperCase();
    };

    input.addEventListener('input', () => update(input.value));
    root.querySelectorAll<HTMLButtonElement>('[data-cw-swatch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const hex = btn.dataset.cwSwatch;
        if (hex) update(hex);
      });
    });
  });
}

// 5. 6-Box DigitInput (OTP)
function initDigitInputs(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-digit-group]').forEach((group) => {
    const boxes = Array.from(group.querySelectorAll<HTMLInputElement>('[data-cw-digit-box]'));
    const hidden = group.querySelector<HTMLInputElement>('[data-cw-digit-hidden]');
    if (boxes.length === 0) return;

    const syncHidden = () => {
      if (hidden) hidden.value = boxes.map((b) => b.value).join('');
    };

    boxes.forEach((box, idx) => {
      box.addEventListener('input', () => {
        const cleaned = box.value.replace(/\D/g, '').slice(-1);
        box.value = cleaned;
        syncHidden();
        if (cleaned && idx < boxes.length - 1) {
          boxes[idx + 1]?.focus();
        }
      });

      box.addEventListener('keydown', (ev) => {
        if (ev.key === 'Backspace' && !box.value && idx > 0) {
          boxes[idx - 1]?.focus();
        } else if (ev.key === 'ArrowLeft' && idx > 0) {
          ev.preventDefault();
          boxes[idx - 1]?.focus();
        } else if (ev.key === 'ArrowRight' && idx < boxes.length - 1) {
          ev.preventDefault();
          boxes[idx + 1]?.focus();
        }
      });

      box.addEventListener('paste', (ev) => {
        const text = ev.clipboardData?.getData('text')?.replace(/\D/g, '') ?? '';
        if (!text) return;
        ev.preventDefault();
        text
          .slice(0, boxes.length)
          .split('')
          .forEach((ch, offset) => {
            const targetBox = boxes[offset];
            if (targetBox) targetBox.value = ch;
          });
        syncHidden();
        const nextIdx = Math.min(text.length, boxes.length - 1);
        boxes[nextIdx]?.focus();
      });
    });
  });
}

// 6. FileUpload Dropzone + Preview List
function initFileUploads(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-upload]').forEach((root) => {
    const zone = root.querySelector<HTMLElement>('[data-cw-upload-zone]');
    const input = root.querySelector<HTMLInputElement>('[data-cw-upload-input]');
    const list = root.querySelector<HTMLUListElement>('[data-cw-upload-list]');
    if (!zone || !input || !list) return;

    const renderFiles = (files: FileList | null) => {
      list.innerHTML = '';
      if (!files || files.length === 0) {
        list.hidden = true;
        return;
      }
      list.hidden = false;
      Array.from(files).forEach((file) => {
        const li = document.createElement('li');
        li.className = 'cw-upload-file';
        const kb = Math.max(1, Math.round(file.size / 1024));
        const nameSpan = document.createElement('span');
        nameSpan.textContent = file.name;
        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'kicker';
        sizeSpan.textContent = `${kb} KB`;
        li.append(nameSpan, sizeSpan);
        list.append(li);
      });
    };

    input.addEventListener('change', () => renderFiles(input.files));

    zone.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      zone.classList.add('is-dragover');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('is-dragover'));
    zone.addEventListener('drop', (ev) => {
      ev.preventDefault();
      zone.classList.remove('is-dragover');
      if (ev.dataTransfer?.files?.length) {
        input.files = ev.dataTransfer.files;
        renderFiles(ev.dataTransfer.files);
      }
    });
  });
}

// 7. Textarea Character Counter
function initTextareaCounters(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-textarea-wrap]').forEach((wrap) => {
    const ta = wrap.querySelector<HTMLTextAreaElement>('[data-cw-textarea]');
    const countEl = wrap.querySelector<HTMLElement>('[data-cw-char-count]');
    if (!ta || !countEl) return;
    const max = countEl.dataset.max ?? '';
    const update = () => {
      countEl.textContent = `${ta.value.length} / ${max}`;
    };
    ta.addEventListener('input', update);
  });
}

// 8. Vertical Tabs Keyboard & Selection
function initVerticalTabs(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-vtabs]').forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
    if (tabs.length === 0) return;

    const activate = (idx: number, focusTab = false) => {
      tabs.forEach((tab, i) => {
        const active = i === idx;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        const panel = panels[i];
        if (panel) panel.hidden = !active;
      });
      if (focusTab) tabs[idx]?.focus();
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activate(idx));
      tab.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown') {
          ev.preventDefault();
          activate((idx + 1) % tabs.length, true);
        } else if (ev.key === 'ArrowUp') {
          ev.preventDefault();
          activate((idx - 1 + tabs.length) % tabs.length, true);
        } else if (ev.key === 'Home') {
          ev.preventDefault();
          activate(0, true);
        } else if (ev.key === 'End') {
          ev.preventDefault();
          activate(tabs.length - 1, true);
        }
      });
    });
  });
}

// 9. Scroll-Snap Navigation Drawer (modern-web-guidance: navigation-drawer)
function initDrawers(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-drawer-root]').forEach((root) => {
    const openBtn = root.querySelector<HTMLButtonElement>('[data-cw-drawer-open]');
    const drawer = root.querySelector<HTMLDialogElement>('[data-cw-drawer]');
    const scroller = root.querySelector<HTMLElement>('[data-cw-drawer-scroller]');
    const sheet = root.querySelector<HTMLElement>('[data-cw-drawer-sheet]');
    const closeBtn = root.querySelector<HTMLButtonElement>('[data-cw-drawer-close]');
    if (!openBtn || !drawer || !scroller || !sheet) return;

    const openDrawer = async () => {
      if (drawer.open) return;
      drawer.showModal();
      if (!CSS.supports('scroll-initial-target', 'nearest')) {
        scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'instant' as ScrollBehavior });
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      }
      scroller.scrollTo({ left: 0, behavior: 'auto' });
    };

    const closeDrawer = () => {
      if (!drawer.open) return;
      scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'auto' });
    };

    const visibleThreshold = Math.min(0.05, 1 / Math.max(window.innerWidth, 320));
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1);
        if (!entry || !drawer.open) return;
        if (entry.intersectionRatio < visibleThreshold) {
          drawer.close();
          openBtn.setAttribute('aria-expanded', 'false');
        } else if (entry.intersectionRatio >= 0.98) {
          openBtn.setAttribute('aria-expanded', 'true');
        }
      },
      { root: drawer, threshold: [visibleThreshold, 0.98] },
    );
    observer.observe(sheet);

    if (!CSS.supports('animation-timeline: scroll()')) {
      scroller.addEventListener('scroll', () => {
        const ratio = Math.max(0, Math.min(1, 1 - scroller.scrollLeft / Math.max(sheet.offsetWidth, 1)));
        drawer.style.setProperty('--drawer-backdrop', String(ratio));
      });
    }

    openBtn.addEventListener('click', () => {
      void openDrawer();
    });
    closeBtn?.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', (ev) => {
      if (!sheet.contains(ev.target as Node)) closeDrawer();
    });
    drawer.addEventListener('cancel', (ev) => {
      if (ev.cancelable) {
        ev.preventDefault();
        closeDrawer();
      }
    });
  });
}

// 10. Modal & Sheet Fallback (Invoker commandfor + Safari closedby="any" light-dismiss)
function initModalsFallback(): void {
  if (!('command' in HTMLButtonElement.prototype)) {
    document.addEventListener('click', (ev) => {
      const btn = (ev.target as HTMLElement | null)?.closest<HTMLButtonElement>(
        '[commandfor], [data-cw-modal-open]',
      );
      if (!btn) return;
      const targetId = btn.getAttribute('commandfor') ?? btn.dataset.cwModalOpen;
      const cmd = btn.getAttribute('command') ?? (btn.dataset.cwModalOpen ? 'show-modal' : '');
      const el = targetId ? document.getElementById(targetId) : null;
      if (!(el instanceof HTMLDialogElement)) return;
      if (cmd === 'show-modal' && !el.open) {
        el.showModal();
      } else if (cmd === 'close' && el.open) {
        el.close();
      }
    });
  }

  // Safari fallback for <dialog closedby="any"> light-dismiss via bounding-rect check
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    document.querySelectorAll<HTMLDialogElement>('dialog[closedby="any"]').forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target !== dialog) return;
        const r = dialog.getBoundingClientRect();
        if (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        ) {
          dialog.close();
        }
      });
    });
  }
}

// 10b. coss ui NumberField (− / + stepper with live input/change dispatch)
function initCossNumberFields(): void {
  document.querySelectorAll<HTMLElement>('[data-coss-number-field]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('input[type="number"]');
    if (!input) return;
    root.querySelectorAll<HTMLButtonElement>('[data-num-step]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (input.disabled || input.readOnly) return;
        const dir = Number(btn.dataset.numStep ?? '0');
        if (dir < 0) {
          input.stepDown();
        } else if (dir > 0) {
          input.stepUp();
        }
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  });
}

// 11. Generic Segmented Controls + Pricing Billing Toggle
function initSegmentedAndPricing(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-segmented]').forEach((group) => {
    const btns = Array.from(group.querySelectorAll<HTMLButtonElement>('.cw-segmented-btn'));
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      });
    });
  });

  document.querySelectorAll<HTMLElement>('[data-cw-pricing]').forEach((root) => {
    const billingBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-cw-billing]'));
    const prices = Array.from(root.querySelectorAll<HTMLElement>('[data-cw-price]'));
    billingBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.cwBilling === 'annual' ? 'annual' : 'monthly';
        billingBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        prices.forEach((el) => {
          const next = mode === 'annual' ? el.dataset.annual : el.dataset.monthly;
          if (next) el.textContent = next;
        });
      });
    });
  });
}

// 12. Notification Feed Mark-All-Read
function initNotificationFeeds(): void {
  document.querySelectorAll<HTMLElement>('[data-cw-notif-feed]').forEach((feed) => {
    const markAll = feed.querySelector<HTMLButtonElement>('[data-cw-notif-mark-all]');
    const badge = feed.querySelector<HTMLElement>('[data-cw-notif-badge]');
    markAll?.addEventListener('click', () => {
      feed.querySelectorAll<HTMLElement>('[data-cw-notif-item]').forEach((item) => {
        item.classList.remove('cw-notif--unread');
        item.dataset.unread = 'false';
        item.querySelector('.cw-notif-dot')?.classList.remove('cw-notif-dot--active');
        item.querySelector('.cw-notif-unread-label')?.remove();
      });
      const zh = isZhPage();
      if (badge) badge.textContent = zh ? '0 条未读' : '0 Unread';
      showSiteToast(zh ? '全部通知已标为已读。' : 'All notifications marked as read.');
    });
  });
}

// 13. Demo Forms & Toast Trigger Buttons
function initDemoFormsAndToasts(): void {
  document.querySelectorAll<HTMLFormElement>('[data-cw-demo-form]').forEach((form) => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      if (!form.checkValidity()) {
        const invalid = form.querySelector<HTMLElement>(':invalid');
        invalid?.setAttribute('aria-invalid', 'true');
        invalid?.focus();
        return;
      }
      form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
      const msg = form.dataset.toastMsg ?? (isZhPage() ? '已提交。' : 'Submitted.');
      form.reset();
      showSiteToast(msg);
    });
  });

  document.addEventListener('click', (ev) => {
    const trigger = (ev.target as HTMLElement | null)?.closest<HTMLElement>('[data-cw-toast-trigger]');
    if (!trigger) return;
    const msg = trigger.dataset.cwToastTrigger;
    if (msg) showSiteToast(msg);
  });
}

initSortableTables();
initRemovableTags();
initRatingInputs();
initColorPickers();
initDigitInputs();
initFileUploads();
initTextareaCounters();
initVerticalTabs();
initDrawers();
initModalsFallback();
initCossNumberFields();
initSegmentedAndPricing();
initNotificationFeeds();
initDemoFormsAndToasts();

// ============================================================================
// Article Reader Utilities: Share, Save (localStorage), & Listen Audio Bar
// ============================================================================
function initArticleReaderTools(): void {
  const zh = isZhPage();

  // 1. Share (native Web Share API -> clipboard fallback)
  document.querySelectorAll<HTMLButtonElement>('[data-article-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const title = btn.dataset.shareTitle || document.title;
      const url = btn.dataset.shareUrl || window.location.href;
      if (typeof navigator.share === 'function' && window.matchMedia('(pointer: coarse)').matches) {
        try {
          await navigator.share({ title, url });
          return;
        } catch {
          // User dismissed share sheet or fallback to clipboard
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        showSiteToast(zh ? '已复制本文链接' : 'Article link copied');
      } catch {
        showSiteToast(zh ? '请从地址栏复制链接' : 'Copy link from address bar');
      }
    });
  });

  // 2. Save / Bookmark (zero-login localStorage)
  const SAVED_KEY = 'chinawao:saved-articles';
  interface SavedItem {
    slug: string;
    title: string;
    url: string;
    savedAt: string;
  }
  const readSaved = (): SavedItem[] => {
    try {
      const raw = localStorage.getItem(SAVED_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };
  const writeSaved = (items: SavedItem[]): void => {
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  };

  document.querySelectorAll<HTMLButtonElement>('[data-article-save]').forEach((btn) => {
    const slug = btn.dataset.saveSlug || '';
    const title = btn.dataset.saveTitle || document.title;
    const url = btn.dataset.saveUrl || window.location.href;
    const labelEl = btn.querySelector<HTMLElement>('[data-save-label]');

    const renderSavedState = (saved: boolean) => {
      btn.setAttribute('aria-pressed', String(saved));
      if (labelEl) {
        labelEl.textContent = saved ? (zh ? '已收藏' : 'Saved') : (zh ? '收藏' : 'Save');
      }
    };

    renderSavedState(readSaved().some((item) => item.slug === slug));

    btn.addEventListener('click', () => {
      const list = readSaved();
      const exists = list.some((item) => item.slug === slug);
      if (exists) {
        const removedItem = list.find((item) => item.slug === slug);
        writeSaved(list.filter((item) => item.slug !== slug));
        renderSavedState(false);
        showSiteToast(
          zh ? '已取消收藏' : 'Removed from saved',
          btn,
          removedItem
            ? {
                label: zh ? '撤销' : 'Undo',
                onClick: () => {
                  const current = readSaved();
                  if (!current.some((item) => item.slug === removedItem.slug)) {
                    writeSaved([removedItem, ...current]);
                  }
                  renderSavedState(true);
                  showSiteToast(zh ? '已恢复收藏' : 'Restored to saved', btn);
                },
              }
            : undefined,
        );
      } else {
        writeSaved([{ slug, title, url, savedAt: new Date().toISOString() }, ...list]);
        renderSavedState(true);
        showSiteToast(zh ? '已收藏到本地阅读清单' : 'Saved to your reading list', btn);
      }
    });
  });

  // 3. Compact On-Demand coss Toolbar Audio Player
  const audioBar = document.querySelector<HTMLElement>('[data-article-audio]');
  if (!audioBar) return;

  const launchBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-audio-launch]'));
  const toggleBtn = audioBar.querySelector<HTMLButtonElement>('[data-audio-toggle]');
  const speedBtn = audioBar.querySelector<HTMLButtonElement>('[data-audio-speed]');
  const stopBtn = audioBar.querySelector<HTMLButtonElement>('[data-audio-stop]');
  const statusEl = audioBar.querySelector<HTMLElement>('[data-audio-status]');
  const currentEl = audioBar.querySelector<HTMLElement>('[data-audio-current]');
  const durationEl = audioBar.querySelector<HTMLElement>('[data-audio-duration]');
  const progressEl = audioBar.querySelector<HTMLElement>('[data-audio-progress]');
  const proseEl = document.querySelector<HTMLElement>('[data-article-prose]');

  if (!toggleBtn || !proseEl) return;

  const lang = audioBar.dataset.audioLang || (zh ? 'zh-CN' : 'en-US');
  const estTotalSec = Math.max(30, Number(audioBar.dataset.audioEstSec || '60'));
  const rates = [1, 1.25, 1.5];
  let rateIdx = 0;

  const fmtTime = (sec: number): string => {
    const clamped = Math.max(0, Math.floor(sec));
    const m = Math.floor(clamped / 60);
    const s = clamped % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Extract clean readable chunks from headings + paragraphs + list items
  const extractChunks = (): string[] => {
    const nodes = Array.from(proseEl.querySelectorAll<HTMLElement>('h2, h3, p, li, blockquote'));
    const chunks: string[] = [];
    const seen = new Set<HTMLElement>();
    for (const el of nodes) {
      if (el.closest('blockquote') && el.tagName === 'P') continue;
      if (seen.has(el)) continue;
      seen.add(el);
      const text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (text.length > 0) chunks.push(text);
    }
    return chunks;
  };

  let chunks: string[] = [];
  let chunkIdx = 0;
  let state: 'idle' | 'playing' | 'paused' = 'idle';
  let elapsedSec = 0;
  let timerId: number | null = null;

  const updateUi = () => {
    const isPlaying = state === 'playing';
    const isActive = state !== 'idle';
    audioBar.hidden = !isActive;
    launchBtns.forEach((btn) => btn.setAttribute('aria-pressed', String(isActive)));
    toggleBtn.dataset.playing = String(isPlaying);
    toggleBtn.setAttribute(
      'aria-label',
      isPlaying
        ? (zh ? '暂停语音朗读' : 'Pause article audio')
        : (zh ? '播放本文语音朗读' : 'Play article audio'),
    );
    if (statusEl) {
      statusEl.textContent =
        state === 'playing'
          ? (zh ? '正在朗读本文…' : 'Listening…')
          : state === 'paused'
            ? (zh ? '已暂停朗读' : 'Paused')
            : (zh ? '朗读本文' : 'Listen to this article');
    }
    const ratio = chunks.length > 0 && state !== 'idle'
      ? Math.min(1, Math.max(elapsedSec / estTotalSec, chunkIdx / chunks.length))
      : 0;
    if (progressEl) progressEl.style.width = `${Math.round(ratio * 100)}%`;
    if (currentEl) currentEl.textContent = fmtTime(state === 'idle' ? 0 : elapsedSec);
    if (durationEl) durationEl.textContent = fmtTime(estTotalSec / rates[rateIdx]);
  };

  const clearTimer = () => {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  let speakGen = 0;

  const stopAll = () => {
    speakGen += 1;
    clearTimer();
    try {
      window.speechSynthesis?.cancel();
    } catch {
      // Ignore speechSynthesis errors
    }
    state = 'idle';
    chunkIdx = 0;
    elapsedSec = 0;
    updateUi();
  };

  const speakCurrentChunk = () => {
    if (!('speechSynthesis' in window)) {
      showSiteToast(zh ? '当前浏览器不支持语音朗读' : 'Speech playback is unavailable in this browser');
      stopAll();
      return;
    }
    if (chunkIdx >= chunks.length) {
      stopAll();
      return;
    }
    const gen = ++speakGen;
    const utter = new SpeechSynthesisUtterance(chunks[chunkIdx]);
    utter.lang = lang;
    utter.rate = rates[rateIdx];
    utter.onend = () => {
      if (gen !== speakGen || state !== 'playing') return;
      chunkIdx += 1;
      updateUi();
      if (chunkIdx < chunks.length) {
        speakCurrentChunk();
      } else {
        stopAll();
      }
    };
    utter.onerror = (ev) => {
      if (gen !== speakGen) return;
      if (ev.error === 'canceled' || ev.error === 'interrupted') return;
      if (state === 'playing') stopAll();
    };
    window.speechSynthesis.speak(utter);
  };

  const handleToggle = () => {
    if (!('speechSynthesis' in window)) {
      showSiteToast(zh ? '当前浏览器不支持语音朗读' : 'Speech playback is unavailable in this browser');
      return;
    }
    if (state === 'idle') {
      chunks = extractChunks();
      if (chunks.length === 0) return;
      chunkIdx = 0;
      elapsedSec = 0;
      state = 'playing';
      window.speechSynthesis.cancel();
      clearTimer();
      timerId = window.setInterval(() => {
        if (state === 'playing') {
          elapsedSec += 1;
          updateUi();
        }
      }, 1000);
      updateUi();
      speakCurrentChunk();
    } else if (state === 'playing') {
      state = 'paused';
      window.speechSynthesis.pause();
      updateUi();
    } else {
      state = 'playing';
      window.speechSynthesis.resume();
      updateUi();
    }
  };

  toggleBtn.addEventListener('click', handleToggle);
  launchBtns.forEach((btn) => btn.addEventListener('click', handleToggle));

  speedBtn?.addEventListener('click', () => {
    rateIdx = (rateIdx + 1) % rates.length;
    speedBtn.textContent = `${rates[rateIdx]}x`;
    if (state === 'playing') {
      speakGen += 1;
      window.speechSynthesis.cancel();
      speakCurrentChunk();
    }
    updateUi();
  });

  stopBtn?.addEventListener('click', stopAll);
  window.addEventListener('pagehide', stopAll);
}

initArticleReaderTools();

// Smart Reveal Header: hide on scroll down, reveal on scroll up
function initSmartRevealHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-pe-header]');
  if (!header) return;

  const root = document.documentElement;
  let lastY = window.scrollY;
  let ticking = false;

  const sync = () => {
    ticking = false;
    const y = Math.max(0, window.scrollY);
    const delta = y - lastY;
    const scrolled = y > 8;
    header.dataset.scrolled = String(scrolled);

    if (y <= 16) {
      header.dataset.scrollHidden = 'false';
      root.dataset.headerRevealed = 'false';
    } else if (delta > 8 && y > 80) {
      header.dataset.scrollHidden = 'true';
      root.dataset.headerRevealed = 'false';
    } else if (delta < -8) {
      header.dataset.scrollHidden = 'false';
      root.dataset.headerRevealed = 'true';
    }

    lastY = y;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(sync);
      }
    },
    { passive: true },
  );

  sync();
}

initSmartRevealHeader();

// Copy Article as Markdown (Supabase-style AI Tools rail)
function initCopyMarkdown(): void {
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-copy-markdown]'));
  if (btns.length === 0) return;

  const zh = isZhPage();
  const proseEl = document.querySelector<HTMLElement>('[data-article-prose]');

  const buildMarkdown = (title: string, url: string): string => {
    const lines: string[] = [`# ${title}`, '', `Source: ${url}`, ''];
    if (!proseEl) return lines.join('\n');

    const nodes = Array.from(proseEl.querySelectorAll<HTMLElement>('h2, h3, h4, p, li, blockquote'));
    const seen = new Set<HTMLElement>();
    for (const el of nodes) {
      if (el.closest('blockquote') && el.tagName === 'P') continue;
      if (seen.has(el)) continue;
      seen.add(el);
      const text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!text) continue;
      if (el.tagName === 'H2') lines.push(`## ${text}`, '');
      else if (el.tagName === 'H3') lines.push(`### ${text}`, '');
      else if (el.tagName === 'H4') lines.push(`#### ${text}`, '');
      else if (el.tagName === 'LI') lines.push(`- ${text}`);
      else if (el.tagName === 'BLOCKQUOTE') lines.push(`> ${text}`, '');
      else lines.push(text, '');
    }
    return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const title = btn.dataset.mdTitle || document.title;
      const url = btn.dataset.mdUrl || window.location.href;
      const md = buildMarkdown(title, url);
      try {
        await navigator.clipboard.writeText(md);
        showSiteToast(zh ? '已复制全文为 Markdown' : 'Copied article as Markdown');
      } catch {
        showSiteToast(zh ? '复制失败，请手动复制' : 'Could not copy Markdown');
      }
    });
  });
}

initCopyMarkdown();

// Footer Light/Dark Theme Toggle
function initFooterThemeToggle(): void {
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-footer-theme-toggle]'));
  if (btns.length === 0) return;

  const zh = isZhPage();
  const syncLabels = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const label = zh
      ? isDark ? '切换为浅色模式' : '切换为深色模式'
      : isDark ? 'Switch to light mode' : 'Switch to dark mode';
    btns.forEach((btn) => {
      btn.setAttribute('aria-label', label);
      btn.title = label;
    });
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextDark = !document.documentElement.classList.contains('dark');
      const nextMode = nextDark ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', nextDark);
      const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
      if (meta) meta.content = nextMode;
      try {
        localStorage.setItem('color-scheme', nextMode);
      } catch {
        // Ignore storage errors
      }
      syncLabels();
    });
  });

  syncLabels();
}

initFooterThemeToggle();
