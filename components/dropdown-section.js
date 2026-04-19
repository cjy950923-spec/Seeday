/**
 * Figma: Dropdown section — node 884:8077
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=884-8077&m=dev
 */

import { appendClickCycleDemo } from "./interactive-demo.js";

export const FIGMA_DROPDOWN = {
  nodeId: "884:8077",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=884-8077&m=dev",
};

export const DROPDOWN_VARIANTS = {
  dorropDownFillter: { state: ["All", "일상", "운동", "습관"] },
  longPressDropDown: { highlight: [0, 1, 2] },
};

const ORDER = ["All", "일상", "운동", "습관"];

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function glyph(kind) {
  if (kind === "All") return h("span", "sdDropGlyph sdDropGlyph--all");
  if (kind === "일상") return h("span", "sdDropGlyph sdDropGlyph--daily");
  if (kind === "운동") return h("span", "sdDropGlyph sdDropGlyph--fitness");
  return h("span", "sdDropGlyph sdDropGlyph--habit");
}

function filterBar(activeState, onPick) {
  const bar = h("div", "sdDropBar");
  bar.appendChild(h("span", "sdDropBar__caret"));
  ORDER.forEach((key) => {
    const pill = h("div", "sdDropPill");
    if (key === activeState) pill.classList.add("sdDropPill--active");
    pill.appendChild(glyph(key));
    if (onPick) {
      pill.style.cursor = "pointer";
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        onPick(key);
      });
    }
    bar.appendChild(pill);
  });
  return bar;
}

function longPress(highlightIndex) {
  const box = h("div", "sdLongPress");
  const rows = ["항목 편집", "삭제", "취소"];
  rows.forEach((label, i) => {
    const r = h("div", "sdLongPress__row", label);
    if (i === highlightIndex) {
      r.style.background = "var(--color-primary-ghost)";
      r.style.color = "var(--color-primary-default)";
    }
    box.appendChild(r);
  });
  return box;
}

/**
 * @param {HTMLElement} container
 */
export function mountDropdownSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_DROPDOWN.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_DROPDOWN.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Dropdown"));

  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Dorrop down Fillter — State"));
  const wrap = h("div", "figma-interactive");
  const stateLine = h("p", "figma-interactive__state", "");
  const hint = h(
    "p",
    "figma-interactive__hint",
    "필 칩을 누르면 해당 탭이 활성화됩니다. 필 바의 빈 여백을 클릭하면 다음 State로 순환합니다.",
  );
  const host = h("div", "figma-interactive__dropdownHost");

  let idx = 0;

  function refresh() {
    stateLine.textContent = `State=${ORDER[idx]}`;
    host.replaceChildren(
      filterBar(ORDER[idx], (key) => {
        idx = ORDER.indexOf(key);
        refresh();
      }),
    );
  }

  host.addEventListener("click", () => {
    idx = (idx + 1) % ORDER.length;
    refresh();
  });

  wrap.appendChild(stateLine);
  wrap.appendChild(host);
  wrap.appendChild(hint);
  sub.appendChild(wrap);
  container.appendChild(sub);
  refresh();

  const sub2 = h("div", "figma-subsection");
  sub2.appendChild(h("h3", "figma-subsection__title", "Long Press_drop down"));
  appendClickCycleDemo(sub2, {
    states: [0, 1, 2],
    formatLabel: (i) => `강조 행: ${["항목 편집", "삭제", "취소"][i]}`,
    render: (i) => longPress(i),
    hint: "클릭할 때마다 강조 행이 순환합니다.",
  });
  container.appendChild(sub2);
}
