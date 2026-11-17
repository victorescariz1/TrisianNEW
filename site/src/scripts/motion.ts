// Motion and interaction for the site. Contract (brain/10-motion-scenes.md):
// the page is complete without this file; state changes land before animation; nothing can stay hidden.

const $ = <T extends Element>(sel: string, el: ParentNode = document) => el.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(sel));

/* ── Header: condenses once the page moves ─────────────────────────────── */
const header = $<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-condensed', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Openings always finish ────────────────────────────────────────────── */
// The page-load type and the product window open with CSS animations. If frames are not being drawn
// (a background tab, a renderer that skips animation), these timers land them on their final state.
window.setTimeout(() => $$('.assemble').forEach((el) => el.classList.add('is-done')), 2600);
window.setTimeout(() => $$('.pw').forEach((el) => el.classList.add('is-done')), 5600);

/* ── The menu sheet (narrow screens) ───────────────────────────────────── */
const navToggle = $<HTMLButtonElement>('[data-nav-toggle]');
const behindMenu = $$<HTMLElement>('main, body > footer');
const setMenu = (open: boolean) => {
  header?.classList.toggle('is-open', open);
  navToggle?.setAttribute('aria-expanded', String(open));
  if (navToggle) navToggle.textContent = open ? 'Close' : 'Menu';
  document.body.style.overflow = open ? 'hidden' : '';
  // While the sheet is up, the page behind it takes no focus and no taps.
  behindMenu.forEach((el) => { el.inert = open; });
};
navToggle?.addEventListener('click', () => setMenu(!header?.classList.contains('is-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && header?.classList.contains('is-open')) { setMenu(false); navToggle?.focus(); } });
$$<HTMLAnchorElement>('.site-nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
// The sheet belongs to the narrow layout. Turning a tablet on its side, or coming back to a page the browser
// kept in memory, must never leave it open with the page locked behind it.
window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });
window.addEventListener('pageshow', (e) => { if (e.persisted) setMenu(false); });

/* ── Entrances: armed by html.js, released when seen, and by a failsafe ── */
const enters = $$<HTMLElement>('[data-enter]');
const release = (el: Element) => el.classList.add('is-in');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { release(e.target); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  enters.forEach((el) => io.observe(el));
  // Failsafe: anything already on screen that has not started within 1.5 s is simply shown.
  window.setTimeout(() => enters.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) release(el); }), 1500);
} else {
  enters.forEach(release);
}

/* ── Inking: answer words outside the hero are wiped to cobalt as they arrive ── */
const inks = $$<HTMLElement>('.ink').filter((el) => !el.closest('.assemble'));
if ('IntersectionObserver' in window) {
  inks.forEach((el) => el.setAttribute('data-ink', ''));
  // Wipe to cobalt, then settle as plain text so no glyph edge is ever clipped by the painted box.
  const ink = (el: Element) => { el.classList.add('is-inked'); window.setTimeout(() => el.classList.add('is-set'), 1400); };
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { ink(e.target); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -18% 0px', threshold: 0.4 });
  inks.forEach((el) => io.observe(el));
  window.setTimeout(() => inks.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) ink(el); }), 1500);
}

/* ── The ground: the page takes the time of day of whatever is centered ── */
const grounds: Record<string, string> = {
  morning: 'var(--ground-morning)', noon: 'var(--ground-noon)', gold: 'var(--ground-gold)',
  dusk: 'var(--ground-dusk)', night: 'var(--ground-night)',
};
const setGround = (name: string) => {
  document.body.style.setProperty('--ground', grounds[name] ?? grounds.morning);
  document.body.dataset.tone = name === 'night' ? 'night' : 'day';
};
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) setGround((e.target as HTMLElement).dataset.ground || 'morning');
  }, { rootMargin: '-48% 0px -48% 0px', threshold: 0 });
  $$<HTMLElement>('[data-ground]').forEach((el) => io.observe(el));
}

/* ── Through the window: the step in view brings its sheet to the front ── */
const steps = $$<HTMLElement>('[data-step]');
const stack = $<HTMLElement>('.window__figure [data-stack]');
const depth = $$<HTMLElement>('[data-depth]');
const activate = (n: number) => {
  if (!stack) return;
  stack.style.setProperty('--active', String(n));
  // `is-front` marks the sheet being read; its small figure plays once each time it comes to the front.
  $$<HTMLElement>('.sheet', stack).forEach((sheet, i) => { sheet.classList.toggle('is-passed', i < n); sheet.classList.toggle('is-front', i === n); });
  steps.forEach((s, i) => s.classList.toggle('is-active', i === n));
  depth.forEach((d, i) => d.classList.toggle('is-on', i === n));
};
if (steps.length && 'IntersectionObserver' in window) {
  activate(0);
  // Where a step becomes the active one. Beside the figure (wide screens) that is the middle of the
  // screen. Under the pinned figure (narrow screens) it is the middle of what is left below the figure,
  // so the text being read is the text that is lit, and its heading is not hidden behind the figure.
  const figure = $<HTMLElement>('.window__figure');
  const narrow = window.matchMedia('(max-width: 900px)');
  let io: IntersectionObserver | null = null;
  const watch = () => {
    io?.disconnect();
    const vh = window.innerHeight;
    let line = vh / 2;
    if (narrow.matches && figure) line = ((parseFloat(getComputedStyle(figure).top) || 0) + figure.offsetHeight + vh) / 2;
    const band = Math.max(8, vh * 0.05);
    io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) activate(Number((e.target as HTMLElement).dataset.step));
    }, { rootMargin: `${-Math.round(line - band)}px 0px ${-Math.round(vh - line - band)}px 0px`, threshold: 0 });
    steps.forEach((s) => io!.observe(s));
  };
  watch();
  let rewatch = 0;
  window.addEventListener('resize', () => { window.clearTimeout(rewatch); rewatch = window.setTimeout(watch, 200); });
} else {
  steps.forEach((s) => s.classList.add('is-active'));
}

/* ── The plan switch: state first, then the look follows ───────────────── */
$$<HTMLElement>('[data-plan-root]').forEach((planRoot) => {
  $$<HTMLInputElement>('input[name="plan"]', planRoot).forEach((input) => {
    input.addEventListener('change', () => { if (input.checked) planRoot.dataset.plan = input.value; });
  });
});

/* ── Whose problem is it? ──────────────────────────────────────────────── */
$$<HTMLElement>('[data-explorer]').forEach((ex) => {
  // The answer line, by its class. Every chip also carries a `data-answer` attribute (its own answer),
  // so looking for that attribute found the first chip and wrote the answers into its label.
  const answer = $<HTMLElement>('.explorer__answer', ex);
  $$<HTMLButtonElement>('.chip', ex).forEach((chip) => {
    chip.addEventListener('click', () => {
      const { side = 'inside', verdict = '', answer: text = '' } = chip.dataset;
      if (answer) {
        answer.textContent = '';
        const b = document.createElement('b'); b.textContent = verdict + '.';
        answer.append(b, document.createTextNode(' ' + text));
      }
      if (chip.getAttribute('aria-pressed') === 'true') return;
      chip.setAttribute('aria-pressed', 'true');
      const li = document.createElement('li');
      li.textContent = chip.textContent;
      $(`[data-placed="${side}"]`, ex)?.append(li);
    });
  });
});

/* ── Measurement: named actions only, and only if measurement is switched on ── */
const track = (name: string, props?: Record<string, string>) => {
  const send = (window as unknown as { plausible?: (n: string, o?: { props: Record<string, string> }) => void }).plausible;
  if (typeof send === 'function') send(name, props ? { props } : undefined);
};
(window as unknown as { trisianTrack: typeof track }).trisianTrack = track;
document.addEventListener('click', (e) => {
  const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track], a.btn');
  if (!el) return;
  const where = el.closest('header') ? 'header' : el.closest('footer') ? 'footer' : el.closest('section')?.id || 'page';
  track(el.dataset.track || 'Assessment requested', { where });
});

export {};
