/**
 * 뷰어용: 미리보기 영역 클릭 시 variant를 순환한다.
 * 투명 히트 레이어로 내부 비활성 컨트롤 위에서도 클릭이 동작한다.
 */

/**
 * @param {HTMLElement} parent
 * @param {{
 *   states: unknown[],
 *   initialIndex?: number,
 *   render: (state: unknown, index: number) => HTMLElement,
 *   formatLabel?: (state: unknown, index: number) => string,
 *   hint?: string — 비우거나 생략하면 힌트 문단 없음
 * }} opts
 */
export function appendClickCycleDemo(parent, opts) {
  const {
    states,
    initialIndex = 0,
    render,
    formatLabel = (s) => (typeof s === "object" ? JSON.stringify(s) : String(s)),
    hint = "",
  } = opts;

  const wrap = document.createElement("div");
  wrap.className = "figma-interactive";

  const stateLine = document.createElement("p");
  stateLine.className = "figma-interactive__state";

  const stage = document.createElement("div");
  stage.className = "figma-interactive__stage";
  stage.setAttribute("role", "button");
  stage.setAttribute("tabindex", "0");
  stage.setAttribute("aria-label", "다음 컴포넌트 상태로 순환");

  const viewport = document.createElement("div");
  viewport.className = "figma-interactive__viewport";

  const hit = document.createElement("div");
  hit.className = "figma-interactive__hit";
  hit.setAttribute("aria-hidden", "true");

  const hintText = hint != null ? String(hint).trim() : "";
  /** @type {HTMLParagraphElement | null} */
  const hintEl =
    hintText.length > 0
      ? (() => {
          const p = document.createElement("p");
          p.className = "figma-interactive__hint";
          p.textContent = hintText;
          return p;
        })()
      : null;

  let idx = ((initialIndex % states.length) + states.length) % states.length;

  function refresh() {
    const s = states[idx];
    const label = formatLabel(s, idx);
    stateLine.textContent = label;
    stateLine.hidden = String(label).trim() === "";
    viewport.replaceChildren(render(s, idx));
  }

  function advance() {
    idx = (idx + 1) % states.length;
    refresh();
  }

  function goTo(i) {
    idx = ((i % states.length) + states.length) % states.length;
    refresh();
  }

  function onActivate(e) {
    e.preventDefault();
    advance();
  }

  hit.addEventListener("click", onActivate);
  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onActivate(e);
    }
  });

  stage.appendChild(viewport);
  stage.appendChild(hit);
  wrap.appendChild(stateLine);
  wrap.appendChild(stage);
  if (hintEl) wrap.appendChild(hintEl);
  parent.appendChild(wrap);

  refresh();

  return {
    advance,
    goTo,
    getIndex: () => idx,
    getState: () => states[idx],
    refresh,
  };
}

/**
 * @param {HTMLElement} sectionEl 전체 섹션 루트 (meta/h2 다음에 붙일 때)
 * @param {string} title
 * @param {Parameters<typeof appendClickCycleDemo>[1]} demoOpts
 */
export function appendInteractiveSubsection(sectionEl, title, demoOpts) {
  const sub = document.createElement("div");
  sub.className = "figma-subsection";
  const h3 = document.createElement("h3");
  h3.className = "figma-subsection__title";
  h3.textContent = title;
  sub.appendChild(h3);
  appendClickCycleDemo(sub, demoOpts);
  sectionEl.appendChild(sub);
  return sub;
}
