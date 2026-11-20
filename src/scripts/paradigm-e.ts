/**
 * ChinaWao Paradigm E — Progressive Enhancement Interactions
 * - NN/g 0.5s hover-debounced 3-column Mega Menus (desktop hover + keyboard + focusout)
 * - Global Intent Command Palette (⌘K / Ctrl+K live filtering + Enter full search)
 * - Copy-to-Clipboard with sitewide toast feedback
 * - Mandarin Speech Synthesis pronunciation button
 * - Interactive Red-Box Hotspot selector (/errors/ /documents/ /how-to-use/)
 * - 5-Layer China Panoramic Map + City Quick Drawer
 * - Local Timezone Ticket Release Converter (/attractions/ & Tool 12.3)
 * - Interactive Stack Checklist + Share Link + Offline Export (/stacks/)
 * - Multi-Facet Explorer URL #fragment sync (/explore/ — zero crawl-budget waste)
 * - 11 Deterministic & Evergreen Tools Workbench (/tools/[tool]/)
 */
export {};

const isZh = (): boolean => document.documentElement.lang.toLowerCase().startsWith('zh');

function showToast(message: string): void {
  const region = document.querySelector<HTMLElement>('[data-cw-toast-region]');
  const live = document.querySelector<HTMLElement>('[data-cw-toast-live]');
  if (live) live.textContent = message;
  if (!region) return;
  // Never fire behind an open modal dialog (accessibility rule)
  if (document.querySelector('dialog[open]')) return;
  const item = document.createElement('div');
  item.className = 'cw-toast';
  item.innerHTML = `<span>${message.replace(/</g, '&lt;')}</span><button type="button" class="cw-toast-close" aria-label="Dismiss">×</button>`;
  item.querySelector('button')?.addEventListener('click', () => {
    item.remove();
    if (!region.children.length && region.matches(':popover-open')) {
      try { (region as HTMLElement & { hidePopover?: () => void }).hidePopover?.(); } catch {}
    }
  });
  region.appendChild(item);
  try {
    if (!region.matches(':popover-open')) {
      (region as HTMLElement & { showPopover?: () => void }).showPopover?.();
    }
  } catch {}
}

/* 1. Platform-aware ⌘K / Ctrl+K shortcut label */
function initShortcutPlatform(): void {
  const isMac = /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent);
  document.querySelectorAll<HTMLElement>('[data-pe-shortcut-label]').forEach((el) => {
    el.textContent = isMac ? '⌘K' : 'Ctrl+K';
  });
}

/* 2. NN/g 500ms Hover-Debounced 3-Column Mega Menus */
function initMegaMenus(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-pe-mega-item]'));
  if (!items.length) return;

  const canHover = window.matchMedia('(hover: hover)').matches;
  const openTimers = new WeakMap<HTMLElement, number>();
  const closeTimers = new WeakMap<HTMLElement, number>();

  const clearTimers = (el: HTMLElement) => {
    const o = openTimers.get(el);
    const c = closeTimers.get(el);
    if (o) window.clearTimeout(o);
    if (c) window.clearTimeout(c);
  };

  const closeAll = (except?: HTMLElement) => {
    items.forEach((item) => {
      if (item === except) return;
      clearTimers(item);
      item.classList.remove('is-open');
      item.querySelector('[data-pe-mega-trigger]')?.setAttribute('aria-expanded', 'false');
    });
  };

  const openItem = (item: HTMLElement) => {
    closeAll(item);
    item.classList.add('is-open');
    item.querySelector('[data-pe-mega-trigger]')?.setAttribute('aria-expanded', 'true');
  };

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLAnchorElement>('[data-pe-mega-trigger]');
    if (!trigger) return;

    if (canHover) {
      item.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'touch') return;
        clearTimers(item);
        const alreadyAnyOpen = items.some((x) => x.classList.contains('is-open'));
        const delay = alreadyAnyOpen ? 120 : 500; // NN/g 0.5s initial hover intent delay
        openTimers.set(item, window.setTimeout(() => openItem(item), delay));
      });

      item.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'touch') return;
        clearTimers(item);
        closeTimers.set(item, window.setTimeout(() => {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 500)); // NN/g 0.5s exit forgiveness delay
      });
    }

    item.addEventListener('focusout', (e) => {
      const next = e.relatedTarget as Node | null;
      if (next && !item.contains(next)) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

/* 3. Command Palette (⌘K / Ctrl+K + Live Filtering) */
function initCommandPalette(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-pe-cmd-dialog]');
  if (!dialog) return;

  const input = dialog.querySelector<HTMLInputElement>('[data-pe-cmd-input]');
  const rows = Array.from(dialog.querySelectorAll<HTMLAnchorElement>('[data-pe-cmd-item]'));
  const emptyMsg = dialog.querySelector<HTMLElement>('[data-pe-cmd-empty]');
  const quickCardsBar = dialog.querySelector<HTMLElement>('[data-pe-cmd-quick-cards]');
  const hiddenQ = dialog.querySelector<HTMLInputElement>('[data-pe-cmd-hidden-q]');
  const fallbackForm = dialog.querySelector<HTMLFormElement>('[data-pe-cmd-fallback-form]');

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (!dialog.open) {
        dialog.showModal();
        input?.focus();
      } else {
        dialog.close();
      }
    }
  });

  const filter = () => {
    const q = (input?.value ?? '').trim().toLowerCase();
    if (hiddenQ) hiddenQ.value = input?.value ?? '';
    if (quickCardsBar) quickCardsBar.hidden = q.length > 0;
    let visible = 0;
    rows.forEach((row) => {
      const hay = row.dataset.search ?? '';
      const match = !q || q.split(/\s+/).every((part) => hay.includes(part));
      row.hidden = !match;
      if (match) visible += 1;
    });
    if (emptyMsg) emptyMsg.hidden = visible > 0;
  };

  input?.addEventListener('input', filter);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      dialog.close();
      return;
    }
    if (e.key === 'Enter') {
      const firstVisible = rows.find((r) => !r.hidden);
      if (firstVisible && (input.value.trim().length > 0)) {
        e.preventDefault();
        window.location.href = firstVisible.href;
      } else if (fallbackForm) {
        fallbackForm.submit();
      }
    }
  });
}

/* 4. Copy Buttons & Speech Pronunciation */
function initCopyAndSpeech(): void {
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-pe-copy]');
    if (target) {
      const text = target.dataset.peCopy ?? '';
      if (!text) return;
      navigator.clipboard?.writeText(text).then(() => {
        showToast(target.dataset.peCopyToast || `Copied: ${text}`);
      }).catch(() => {
        showToast(`Copy: ${text}`);
      });
      return;
    }

    const speakBtn = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-pe-speak]');
    if (speakBtn) {
      const phrase = speakBtn.dataset.peSpeak ?? '';
      if (!phrase || !('speechSynthesis' in window)) {
        showToast(`Pronunciation: ${phrase}`);
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(phrase);
      utter.lang = 'zh-CN';
      utter.rate = 0.88;
      window.speechSynthesis.speak(utter);
    }
  });
}

/* 5. Interactive Red-Box Hotspots */
function initHotspots(): void {
  document.querySelectorAll<HTMLElement>('[data-pe-hotspot-root]').forEach((root) => {
    const btns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-pe-hotspot-btn]'));
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-pe-hotspot-card]'));
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.peHotspotBtn;
        btns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.peHotspotBtn === id)));
        cards.forEach((c) => {
          c.style.borderColor = c.dataset.peHotspotCard === id ? 'var(--accent-seal)' : '';
        });
      });
    });
  });
}

/* 6. Interactive 5-Layer China Panoramic Map */
function initChinaLayerMap(): void {
  const root = document.querySelector<HTMLElement>('[data-pe-china-map]');
  if (!root) return;

  const layerBtns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-pe-map-layer]'));
  const pins = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-pe-map-pin]'));
  const mcaEl = root.querySelector<HTMLElement>('[data-pe-map-mca]');
  const clusterEl = root.querySelector<HTMLElement>('[data-pe-map-cluster]');
  const titleEl = root.querySelector<HTMLElement>('[data-pe-map-title]');
  const taglineEl = root.querySelector<HTMLElement>('[data-pe-map-tagline]');
  const kvGrid = root.querySelector<HTMLElement>('[data-pe-map-kv-grid]');
  const portsEl = root.querySelector<HTMLElement>('[data-pe-map-ports]');
  const ctaEl = root.querySelector<HTMLAnchorElement>('[data-pe-map-cta]');

  layerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const layer = btn.dataset.peMapLayer ?? 'all';
      layerBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      pins.forEach((pin) => {
        const pinLayers = (pin.dataset.layers ?? '').split(',');
        const match = layer === 'all' || pinLayers.includes(layer);
        pin.classList.toggle('is-dimmed', !match);
      });
    });
  });

  pins.forEach((pin) => {
    pin.addEventListener('click', () => {
      pins.forEach((p) => p.setAttribute('aria-pressed', String(p === pin)));
      try {
        const data = JSON.parse(pin.dataset.cityPayload || '{}');
        if (mcaEl) mcaEl.textContent = `MCA ${data.mcaCode}`;
        if (clusterEl) clusterEl.textContent = data.cluster;
        if (titleEl) titleEl.textContent = `${data.title} · ${data.chineseName}`;
        if (taglineEl) taglineEl.textContent = data.tagline;
        if (portsEl) portsEl.textContent = `240h: ${data.ports240h}`;
        if (ctaEl) ctaEl.href = data.href;
        if (kvGrid && Array.isArray(data.quick)) {
          kvGrid.innerHTML = data.quick
            .map((kv: { label: string; value: string }) => `<div class="pe-map-kv"><span>${kv.label}</span><strong>${kv.value}</strong></div>`)
            .join('');
        }
      } catch {}
    });
  });
}

/* 7. Rescue Guide Filter Chips (Variant C) */
function initRescueFilter(): void {
  document.querySelectorAll<HTMLElement>('[data-pe-rescue-root]').forEach((root) => {
    const btns = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-pe-rescue-filter]'));
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-pe-rescue-card]'));
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.peRescueFilter ?? 'All';
        btns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        cards.forEach((c) => {
          c.hidden = group !== 'All' && c.dataset.peRescueCard !== group;
        });
      });
    });
  });
}

/* 8. Local Timezone Ticket Release Capsule (/attractions/ & Tool 12.3) */
function initTimezoneCapsules(): void {
  document.querySelectorAll<HTMLElement>('[data-pe-bjt-hour]').forEach((el) => {
    const bjtHour = Number(el.dataset.peBjtHour ?? 20);
    const bjtMin = Number(el.dataset.peBjtMinute ?? 0);
    // Compute UTC instant corresponding to today's BJT (UTC+8) hour/minute
    const now = new Date();
    const utcMs = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), bjtHour - 8, bjtMin, 0);
    const localStr = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }).format(new Date(utcMs));
    el.textContent = localStr;
  });
}

/* 9. Interactive Stack Checklist + Offline Export (/stacks/[slug]/) */
function initStackChecklist(): void {
  const root = document.querySelector<HTMLElement>('[data-pe-stack-root]');
  if (!root) return;
  const slug = root.dataset.peStackRoot ?? 'default';
  const key = `cw-stack-${slug}`;
  const boxes = Array.from(root.querySelectorAll<HTMLInputElement>('[data-pe-stack-check]'));
  const statusEl = root.querySelector<HTMLElement>('[data-pe-stack-progress]');
  const exportBtn = root.querySelector<HTMLButtonElement>('[data-pe-stack-export]');

  const restore = () => {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem(key) || '[]');
      boxes.forEach((b) => { b.checked = saved.includes(b.value); });
    } catch {}
    sync();
  };

  const sync = () => {
    const checked = boxes.filter((b) => b.checked).map((b) => b.value);
    try { localStorage.setItem(key, JSON.stringify(checked)); } catch {}
    if (statusEl) {
      statusEl.textContent = isZh()
        ? `已就绪 ${checked.length} / ${boxes.length}`
        : `${checked.length} / ${boxes.length} ready`;
    }
  };

  boxes.forEach((b) => b.addEventListener('change', sync));
  restore();

  exportBtn?.addEventListener('click', () => {
    const lines = boxes.map((b) => `[${b.checked ? 'x' : ' '}] ${b.dataset.title || b.value}`);
    const content = `ChinaWao Offline Checklist (${slug})\n${'='.repeat(40)}\n${lines.join('\n')}\n\nSource: ${window.location.href}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `chinawao-${slug}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
    showToast('Exported offline checklist (.txt)');
  });
}

/* 10. Multi-Facet Explorer (/explore/) — Sync state strictly to URL #fragment */
function initMultiFacetExplorer(): void {
  const root = document.querySelector<HTMLElement>('[data-pe-explorer]');
  if (!root) return;

  const chips = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-pe-facet-group]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-pe-explorer-card]'));
  const countEl = root.querySelector<HTMLElement>('[data-pe-explorer-count]');
  const emptyEl = root.querySelector<HTMLElement>('[data-pe-explorer-empty]');
  const hashDisplay = root.querySelector<HTMLElement>('[data-pe-explorer-hash]');
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-pe-explorer-reset]');

  const state: Record<string, string> = {};

  const parseHash = () => {
    Object.keys(state).forEach((k) => delete state[k]);
    const raw = window.location.hash.replace(/^#/, '');
    if (!raw) return;
    new URLSearchParams(raw).forEach((v, k) => {
      if (v) state[k] = v;
    });
  };

  const writeHash = () => {
    const params = new URLSearchParams();
    Object.entries(state).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    const nextHash = params.toString();
    history.replaceState(null, '', nextHash ? `#${nextHash}` : window.location.pathname);
    if (hashDisplay) hashDisplay.textContent = nextHash ? `#${nextHash}` : '#all';
  };

  const apply = () => {
    chips.forEach((chip) => {
      const g = chip.dataset.peFacetGroup!;
      const v = chip.dataset.peFacetValue!;
      chip.setAttribute('aria-pressed', String(state[g] === v));
    });

    let visible = 0;
    cards.forEach((card) => {
      const okSpace = !state.space || (card.dataset.space || '').split(',').includes(state.space);
      const okSeason = !state.season || (card.dataset.season || '').split(',').includes(state.season);
      const okKind = !state.kind || card.dataset.kind === state.kind;
      const okConstraint = !state.constraints || (card.dataset.constraints || '').split(',').includes(state.constraints);
      const okTrust = !state.trust || card.dataset.trust === state.trust;
      const show = okSpace && okSeason && okKind && okConstraint && okTrust;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (countEl) countEl.textContent = `${visible} / ${cards.length}`;
    if (emptyEl) emptyEl.hidden = visible > 0;
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const g = chip.dataset.peFacetGroup!;
      const v = chip.dataset.peFacetValue!;
      if (state[g] === v) delete state[g];
      else state[g] = v;
      writeHash();
      apply();
    });
  });

  resetBtn?.addEventListener('click', () => {
    Object.keys(state).forEach((k) => delete state[k]);
    writeHash();
    apply();
  });

  window.addEventListener('hashchange', () => {
    parseHash();
    apply();
  });

  parseHash();
  apply();
  if (hashDisplay) hashDisplay.textContent = window.location.hash || '#all';
}

/* 11. Deterministic & Micro Tool Calculators (GB 32100-2015 USCC, Points/IIT, Jin/Size, Wan/Yi, Tattoo, Name) */
function validateUSCC(raw: string): { valid: boolean; reason: string; authority: string } {
  const code = raw.trim().toUpperCase();
  if (code.length !== 18) {
    return { valid: false, reason: `Length is ${code.length} (must be exactly 18 characters).`, authority: '—' };
  }
  const charset = '0123456789ABCDEFGHJKLMNPQRTUWXY';
  const weights = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const idx = charset.indexOf(code[i]);
    if (idx === -1) {
      return { valid: false, reason: `Invalid character "${code[i]}" at position ${i + 1} (I, O, Z, S, V are forbidden).`, authority: '—' };
    }
    sum += idx * weights[i];
  }
  const expectedIdx = (31 - (sum % 31)) % 31;
  const expectedChar = charset[expectedIdx];
  const authorities: Record<string, string> = {
    '9': 'SAMR Market Regulation (Enterprise / Factory)',
    '1': 'Institutional Organization (Public Body)',
    '5': 'Civil Affairs (NGO / Association)',
  };
  const authority = authorities[code[0]] || `Registration Dept Code "${code[0]}"`;
  if (code[17] !== expectedChar) {
    return { valid: false, reason: `Checksum mismatch: expected final char "${expectedChar}", got "${code[17]}".`, authority };
  }
  return { valid: true, reason: `Valid GB 32100-2015 USCC checksum (Region Prefix ${code.slice(2, 8)}).`, authority };
}

function initParadigmETools(): void {
  // USCC Validator (both /tools/uscc-gb-matcher/ and /compliance/*)
  document.querySelectorAll<HTMLElement>('[data-pe-uscc-root]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('[data-pe-uscc-input]');
    const out = root.querySelector<HTMLElement>('[data-pe-uscc-output]');
    const render = () => {
      if (!input || !out) return;
      const res = validateUSCC(input.value);
      const zh = isZh();
      const head = res.valid
        ? (zh ? '✓ 校验通过（有效 18 位 USCC）' : '✓ VALID USCC')
        : (zh ? '✕ 校验未通过（无效 USCC）' : '✕ INVALID USCC');
      out.innerHTML = `<strong style="color:${res.valid ? 'var(--status-verified-ink)' : 'var(--status-error-ink)'}">${head}</strong> — ${res.reason}<br/><span style="font-size:var(--text-xs);color:var(--ink-secondary);">${zh ? '登记管理机关' : 'Authority'}: ${res.authority}</span>`;
    };
    input?.addEventListener('input', render);
    render();
  });

  // Work Permit Points & IIT Calculator (12.6)
  document.querySelectorAll<HTMLElement>('[data-pe-tax-points]').forEach((root) => {
    const salaryIn = root.querySelector<HTMLInputElement>('[data-tp-salary]');
    const degreeIn = root.querySelector<HTMLSelectElement>('[data-tp-degree]');
    const expIn = root.querySelector<HTMLInputElement>('[data-tp-exp]');
    const ageIn = root.querySelector<HTMLInputElement>('[data-tp-age]');
    const hskIn = root.querySelector<HTMLSelectElement>('[data-tp-hsk]');
    const out = root.querySelector<HTMLElement>('[data-tp-output]');

    const calc = () => {
      if (!out) return;
      const zh = isZh();
      const monthly = Math.max(0, Number(salaryIn?.value || 25000));
      const annual = monthly * 12;
      const salPts = annual >= 450000 ? 20 : annual >= 350000 ? 17 : annual >= 250000 ? 14 : annual >= 150000 ? 11 : 8;
      const degPts = Number(degreeIn?.value || 15);
      const expYrs = Math.max(0, Number(expIn?.value || 4));
      const expPts = Math.min(20, expYrs >= 2 ? 5 + (expYrs - 2) : 0);
      const age = Number(ageIn?.value || 30);
      const agePts = age >= 26 && age <= 45 ? 15 : age >= 18 && age <= 55 ? 10 : 5;
      const hskPts = Number(hskIn?.value || 0);
      const totalPts = salPts + degPts + expPts + agePts + hskPts + 10;
      const tier = zh
        ? (totalPts >= 85 ? 'A 类（外国高端人才）' : totalPts >= 60 ? 'B 类（外国专业人才）' : 'C 类（未满 60 分，建议走本科+2年常规路径）')
        : (totalPts >= 85 ? 'Category A (High-End Talent)' : totalPts >= 60 ? 'Category B (Standard Professional)' : 'Category C (Below 60 pts — Degree+2yr path needed)');

      const taxable = Math.max(0, monthly - 5000);
      let iit = 0;
      if (taxable <= 3000) iit = taxable * 0.03;
      else if (taxable <= 12000) iit = taxable * 0.1 - 210;
      else if (taxable <= 25000) iit = taxable * 0.2 - 1410;
      else if (taxable <= 35000) iit = taxable * 0.25 - 2660;
      else if (taxable <= 55000) iit = taxable * 0.3 - 4410;
      else iit = taxable * 0.35 - 7160;

      out.innerHTML = zh
        ? `<strong>工签综合积分：${totalPts} 分 → ${tier}</strong><br/>估算月度个税（扣除 ¥5,000 起征点）：<strong>¥${Math.round(iit).toLocaleString()}</strong> · 估算税后月净收入：<strong>¥${Math.round(monthly - iit).toLocaleString()}/月</strong>`
        : `<strong>Work Permit Score: ${totalPts} pts → ${tier}</strong><br/>Estimated Monthly PRC IIT (after ¥5,000 base deduction): <strong>¥${Math.round(iit).toLocaleString()}</strong> · Est. Net Take-Home: <strong>¥${Math.round(monthly - iit).toLocaleString()}/mo</strong>`;
    };

    root.addEventListener('input', calc);
    root.addEventListener('change', calc);
    calc();
  });

  // Jin / Liang & Size Converter (M1)
  document.querySelectorAll<HTMLElement>('[data-pe-jin-calc]').forEach((root) => {
    const jinIn = root.querySelector<HTMLInputElement>('[data-jin-input]');
    const euShoeIn = root.querySelector<HTMLInputElement>('[data-shoe-input]');
    const out = root.querySelector<HTMLElement>('[data-jin-output]');
    const calc = () => {
      if (!out) return;
      const zh = isZh();
      const jin = Math.max(0, Number(jinIn?.value || 2));
      const kg = (jin * 0.5).toFixed(2);
      const lb = (jin * 1.1023).toFixed(2);
      const eu = Math.max(35, Math.min(48, Number(euShoeIn?.value || 42)));
      const cnMm = Math.round((eu - 10) * 5 + 100);
      out.innerHTML = zh
        ? `<strong>${jin} 市斤</strong> = ${jin * 10} 两 = <strong>${kg} 公斤 (kg)</strong> = <strong>${lb} 磅 (lbs)</strong><br/>欧码 ${eu} ≈ 中国鞋码 <strong>${eu}（${cnMm} mm）</strong> · 美码男鞋约 ${(eu - 33).toFixed(1)}`
        : `<strong>${jin} 斤 (jin)</strong> = ${jin * 10} 两 (liang) = <strong>${kg} kg</strong> = <strong>${lb} lbs</strong><br/>EU Shoe ${eu} ≈ China Size <strong>${eu} (${cnMm} mm)</strong> · US Men ~${(eu - 33).toFixed(1)}`;
    };
    root.addEventListener('input', calc);
    calc();
  });

  // Wan / Yi Converter (M2)
  document.querySelectorAll<HTMLElement>('[data-pe-wanyi-calc]').forEach((root) => {
    const numIn = root.querySelector<HTMLInputElement>('[data-wanyi-input]');
    const unitIn = root.querySelector<HTMLSelectElement>('[data-wanyi-unit]');
    const out = root.querySelector<HTMLElement>('[data-wanyi-output]');
    const calc = () => {
      if (!out) return;
      const zh = isZh();
      const n = Number(numIn?.value || 50);
      const mult = Number(unitIn?.value || 10000);
      const total = n * mult;
      out.innerHTML = zh
        ? `精确整数：<strong>${total.toLocaleString()}</strong><br/>英文大数：<strong>${(total / 1e6).toLocaleString(undefined, { maximumFractionDigits: 3 })} Million</strong>（${(total / 1e9).toLocaleString(undefined, { maximumFractionDigits: 4 })} Billion）· 折合美元（按 7.2）：<strong>$${Math.round(total / 7.2).toLocaleString()}</strong>`
        : `Exact Integer: <strong>${total.toLocaleString()}</strong><br/>English: <strong>${(total / 1e6).toLocaleString(undefined, { maximumFractionDigits: 3 })} Million</strong> (${(total / 1e9).toLocaleString(undefined, { maximumFractionDigits: 4 })} Billion) · Approx USD (@7.2): <strong>$${Math.round(total / 7.2).toLocaleString()}</strong>`;
    };
    root.addEventListener('input', calc);
    root.addEventListener('change', calc);
    calc();
  });

  // Hanzi Tattoo Red-Flag Checker (M3)
  document.querySelectorAll<HTMLElement>('[data-pe-tattoo-calc]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('[data-tattoo-input]');
    const out = root.querySelector<HTMLElement>('[data-tattoo-output]');
    const traps: Record<string, string> = {
      '免费': 'RED FLAG: 免费 means "Free of charge" (not freedom)! Use 自由 (zìyóu) for Freedom.',
      '自由': 'SAFE & NATURAL: 自由 (zìyóu) authentically means Freedom/Liberty.',
      '勇敢': 'SAFE & NATURAL: 勇敢 (yǒnggǎn) means Brave/Courageous.',
      '水': 'CAUTION: Standalone 水 (water) can read as slang for "watered-down/flaky." Consider 若水 (like water, from Laozi).',
      '爱': 'SAFE: 爱 (Simplified) / 愛 (Traditional) means Love—pair with calligraphy brushwork rather than default computer Songti font.',
    };
    const check = () => {
      if (!input || !out) return;
      const v = input.value.trim();
      if (!v) {
        out.textContent = 'Enter a Hanzi phrase (e.g. 免费, 自由, 勇敢, 水) to check cultural meaning.';
        return;
      }
      if (traps[v]) {
        out.innerHTML = `<strong>${traps[v]}</strong>`;
      } else {
        out.innerHTML = `<strong>Audit Tip for “${v.replace(/</g, '&lt;')}”:</strong> Verify with a native speaker that it is an idiomatic 2- or 4-character expression rather than a word-for-word English lookup, and never ink default system print fonts (SimSun/MingLiU).`;
      }
    };
    input?.addEventListener('input', check);
    check();
  });

  // Chinese Name Studio (M4)
  document.querySelectorAll<HTMLElement>('[data-pe-name-calc]').forEach((root) => {
    const input = root.querySelector<HTMLInputElement>('[data-name-input]');
    const vibeIn = root.querySelector<HTMLSelectElement>('[data-name-vibe]');
    const out = root.querySelector<HTMLElement>('[data-name-output]');
    const surnames = ['林 (Lín)', '陆 (Lù)', '苏 (Sū)', '安 (Ān)', '沈 (Shěn)', '顾 (Gù)'];
    const givenByVibe: Record<string, [string, string, string]> = {
      literary: ['清远 (Qīngyuǎn)', 'Clear & far-reaching vision', 'Classical poetry cadence'],
      modern: ['星辰 (Xīngchén)', 'Stars & open horizon', 'Crisp modern tone'],
      warm: ['知行 (Zhīxíng)', 'Unity of knowledge and action', 'Grounded Neo-Confucian ideal'],
    };
    const render = () => {
      if (!out) return;
      const raw = (input?.value || 'Alex').trim();
      const idx = raw.length % surnames.length;
      const vibe = vibeIn?.value || 'literary';
      const [given, meaning, style] = givenByVibe[vibe] || givenByVibe.literary;
      out.innerHTML = `<strong style="font-size:1.35rem;">${surnames[idx].split(' ')[0]}${given.split(' ')[0]}</strong> · ${surnames[idx]} ${given}<br/><span style="color:var(--ink-secondary);font-size:var(--text-sm);">${meaning} (${style})</span>`;
    };
    root.addEventListener('input', render);
    root.addEventListener('change', render);
    render();
  });

  // Portals directory filter (/portals/)
  const portalRoot = document.querySelector<HTMLElement>('[data-pe-portals-root]');
  if (portalRoot) {
    const searchIn = portalRoot.querySelector<HTMLInputElement>('[data-pe-portal-search]');
    const accessSel = portalRoot.querySelector<HTMLSelectElement>('[data-pe-portal-access]');
    const levelSel = portalRoot.querySelector<HTMLSelectElement>('[data-pe-portal-level]');
    const rows = Array.from(portalRoot.querySelectorAll<HTMLTableRowElement>('[data-pe-portal-row]'));
    const countEl = portalRoot.querySelector<HTMLElement>('[data-pe-portal-count]');
    const filter = () => {
      const q = (searchIn?.value || '').trim().toLowerCase();
      const acc = accessSel?.value || 'all';
      const lvl = levelSel?.value || 'all';
      let shown = 0;
      rows.forEach((tr) => {
        const okQ = !q || (tr.dataset.search || '').includes(q);
        const okA = acc === 'all' || tr.dataset.access === acc;
        const okL = lvl === 'all' || tr.dataset.level === lvl;
        const show = okQ && okA && okL;
        tr.hidden = !show;
        if (show) shown += 1;
      });
      if (countEl) countEl.textContent = `${shown} / ${rows.length}`;
    };
    searchIn?.addEventListener('input', filter);
    accessSel?.addEventListener('change', filter);
    levelSel?.addEventListener('change', filter);
    filter();
  }
}

initShortcutPlatform();
initMegaMenus();
initCommandPalette();
initCopyAndSpeech();
initHotspots();
initChinaLayerMap();
initRescueFilter();
initTimezoneCapsules();
initStackChecklist();
initMultiFacetExplorer();
initParadigmETools();

/* 12. Zero-Bookmark Card Deck: Canvas HD PNG Export + Recent Cards Auto-Pin + Instant Wall Fullscreen */
interface CardExportPayload {
  slug: string;
  title: string;
  titleZh: string;
  scenario: string;
  largeHanzi: string;
  pinyinLine: string;
  gb30240En: string;
  subNoteChinese: string;
  subNoteEn: string;
  theme: 'yellow-black' | 'white-black';
  href: string;
}

const RECENT_CARDS_KEY = 'cw-recent-cards';

function readRecentCards(): CardExportPayload[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(RECENT_CARDS_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function recordRecentCard(card: CardExportPayload): void {
  try {
    const existing = readRecentCards().filter((c) => c.slug !== card.slug);
    existing.unshift(card);
    localStorage.setItem(RECENT_CARDS_KEY, JSON.stringify(existing.slice(0, 4)));
  } catch {}
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  isCjk: boolean,
): string[] {
  const tokens = isCjk ? Array.from(text) : text.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const token of tokens) {
    const sep = isCjk || !current ? '' : ' ';
    const candidate = `${current}${sep}${token}`;
    if (ctx.measureText(candidate).width > maxWidth && current) {
      lines.push(current);
      current = token;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function exportCardAsPng(card: CardExportPayload): void {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isYellow = card.theme === 'yellow-black';
  const bg = isYellow ? '#0E0E0E' : '#111111';
  const fg = isYellow ? '#FFE135' : '#FFFFFF';
  const subFg = isYellow ? '#F6E79A' : '#D6D0C8';
  const accent = isYellow ? '#FFE135' : '#C93B2B';

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Top architectural accent bar
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, canvas.width, 22);

  // Header brand + scenario
  ctx.fillStyle = subFg;
  ctx.font = '600 32px monospace';
  ctx.fillText(`CHINAWAO · ${card.scenario}`, 80, 120);

  // Divider
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(80, 162);
  ctx.lineTo(1000, 162);
  ctx.stroke();

  // Giant High-Contrast Chinese Headline
  ctx.fillStyle = fg;
  ctx.font = '700 88px sans-serif';
  const hanziLines = wrapCanvasText(ctx, card.largeHanzi, 920, true);
  let y = 320;
  for (const line of hanziLines.slice(0, 8)) {
    ctx.fillText(line, 80, y);
    y += 126;
  }

  // Pinyin
  y += 40;
  ctx.fillStyle = subFg;
  ctx.font = '500 36px monospace';
  const pinyinLines = wrapCanvasText(ctx, card.pinyinLine, 920, false);
  for (const line of pinyinLines.slice(0, 4)) {
    ctx.fillText(line, 80, y);
    y += 52;
  }

  // Bottom safe/guidance panel
  const footY = 1480;
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(80, footY, 920, 320);

  ctx.fillStyle = fg;
  ctx.font = '700 36px sans-serif';
  ctx.fillText(card.subNoteChinese, 116, footY + 74);

  ctx.fillStyle = subFg;
  ctx.font = '400 30px sans-serif';
  const enLines = wrapCanvasText(ctx, card.gb30240En, 848, false);
  let ey = footY + 140;
  for (const line of enLines.slice(0, 4)) {
    ctx.fillText(line, 116, ey);
    ey += 44;
  }

  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.font = '500 24px monospace';
  ctx.fillText('chinawao.com/cards/ · Offline Ready Photo Card', 80, 1865);

  recordRecentCard(card);
  const link = document.createElement('a');
  link.download = `chinawao-card-${card.slug}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast(isZh() ? '已生成高清亮屏字卡 PNG（可直接存相册离线出示）' : 'Saved HD Show Card PNG — ready offline in Photos!');
}

function initCardDeck(): void {
  // Track visits on single /cards/[slug]/ pages automatically
  const trackedEl = document.querySelector<HTMLElement>('[data-pe-track-card]');
  if (trackedEl?.dataset.peTrackCard) {
    try {
      recordRecentCard(JSON.parse(trackedEl.dataset.peTrackCard));
    } catch {}
  }

  // Render auto-pinned recently used cards on /cards/ wall & Command Palette
  const recent = readRecentCards();
  const recentBox = document.querySelector<HTMLElement>('[data-pe-recent-cards-box]');
  const recentList = document.querySelector<HTMLElement>('[data-pe-recent-cards-list]');
  if (recent.length > 0 && recentBox && recentList) {
    recentBox.hidden = false;
    recentList.innerHTML = recent
      .map(
        (c) =>
          `<a href="${c.href}" class="pe-mega-chip" style="border-color:var(--accent-seal);font-weight:600;">⚡ ${
            isZh() ? c.titleZh : c.title
          }</a>`,
      )
      .join('');
  }

  const cmdQuickList = document.querySelector<HTMLElement>('[data-pe-cmd-quick-list]');
  if (recent.length > 0 && cmdQuickList) {
    const latest = recent[0];
    if (!cmdQuickList.querySelector(`[data-recent-slug="${latest.slug}"]`)) {
      const a = document.createElement('a');
      a.href = latest.href;
      a.className = 'pe-mega-chip';
      a.dataset.recentSlug = latest.slug;
      a.style.borderColor = 'var(--accent-seal)';
      a.style.fontWeight = '700';
      a.textContent = `${isZh() ? '最近用过：' : 'Recent: '}${isZh() ? latest.titleZh : latest.title}`;
      cmdQuickList.prepend(a);
    }
  }

  // Global PNG export button handler
  document.addEventListener('click', (event) => {
    const btn = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-pe-card-save-png]');
    if (!btn?.dataset.peCardSavePng) return;
    try {
      exportCardAsPng(JSON.parse(btn.dataset.peCardSavePng));
    } catch {}
  });

  // /cards/ Wall Filter & Shared Fullscreen Modal
  const wall = document.querySelector<HTMLElement>('[data-pe-card-wall]');
  if (!wall) return;

  const filterBtns = Array.from(wall.querySelectorAll<HTMLButtonElement>('[data-pe-card-filter]'));
  const cardItems = Array.from(wall.querySelectorAll<HTMLElement>('[data-pe-card-item]'));
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.peCardFilter ?? 'all';
      filterBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      cardItems.forEach((item) => {
        item.hidden = cat !== 'all' && item.dataset.peCardItem !== cat;
      });
    });
  });

  const modal = wall.querySelector<HTMLDialogElement>('[data-pe-wall-dialog]');
  if (!modal) return;
  let activeCard: CardExportPayload | null = null;

  wall.addEventListener('click', (event) => {
    const launchBtn = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-pe-wall-launch]');
    if (!launchBtn?.dataset.peWallLaunch) return;
    try {
      const data: CardExportPayload = JSON.parse(launchBtn.dataset.peWallLaunch);
      activeCard = data;
      recordRecentCard(data);
      modal.classList.remove('pe-showcard-preview--yellow-black', 'pe-showcard-preview--white-black');
      modal.classList.add(`pe-showcard-preview--${data.theme}`);
      const set = (sel: string, txt: string) => {
        const el = modal.querySelector<HTMLElement>(sel);
        if (el) el.textContent = txt;
      };
      set('[data-wall-scenario]', `CHINAWAO · ${data.scenario}`);
      set('[data-wall-hanzi]', data.largeHanzi);
      set('[data-wall-pinyin]', data.pinyinLine);
      set('[data-wall-subzh]', data.subNoteChinese);
      set('[data-wall-en]', data.gb30240En);
      modal.showModal();
    } catch {}
  });

  modal.querySelector<HTMLButtonElement>('[data-wall-speak]')?.addEventListener('click', () => {
    if (!activeCard || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(activeCard.largeHanzi);
    utter.lang = 'zh-CN';
    utter.rate = 0.88;
    window.speechSynthesis.speak(utter);
  });

  modal.querySelector<HTMLButtonElement>('[data-wall-save-png]')?.addEventListener('click', () => {
    if (activeCard) exportCardAsPng(activeCard);
  });
}

initCardDeck();
