/**
 * Figma: Dropdown section — node 884:7657
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=884-7657&m=dev
 */

import { appendClickCycleDemo } from "./interactive-demo.js";
import { iconAssets } from "../tokens/icon.js";

export const FIGMA_DROPDOWN = {
  nodeId: "884:7657",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=884-7657&m=dev",
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

function iconUrl(assetPath) {
  return new URL(`../${assetPath}`, import.meta.url).href;
}

function filterIconAsset(kind, on) {
  if (kind === "All") return on ? iconAssets.filterAllOn : iconAssets.filterAllOff;
  if (kind === "일상") return on ? iconAssets.filterDailyOn : iconAssets.filterDailyOff;
  if (kind === "운동") return on ? iconAssets.filterFitnessOn : iconAssets.filterFitnessOff;
  return on ? iconAssets.filterHabitOn : iconAssets.filterHabitOff;
}

function filterGlyph(kind, on) {
  const img = document.createElement("img");
  img.alt = "";
  img.decoding = "async";
  img.loading = "lazy";
  img.className = "sdDropIcon";
  img.src = iconUrl(filterIconAsset(kind, on));
  return img;
}

function filterBar(activeState, onPick) {
  const bar = h("div", "sdDropBar");
  bar.appendChild(h("span", "sdDropBar__caret"));
  ORDER.forEach((key) => {
    const on = key === activeState;
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `sdDropPill ${on ? "sdDropPill--active" : ""}`.trim();
    pill.setAttribute("aria-pressed", on ? "true" : "false");
    pill.setAttribute("aria-label", `${key} 필터 ${on ? "활성" : "비활성"}`);
    pill.appendChild(filterGlyph(key, on));
    if (onPick) pill.addEventListener("click", () => onPick(key));
    bar.appendChild(pill);
  });
  return bar;
}

/**
 * @param {number | null} activeIndex null이면 어떤 행도 활성화되지 않음
 * @param {(i: number) => void | null} onPick
 */
function dropdownItem2308(activeIndex, onPick, labels) {
  const box = h("div", "sdLongPress");
  // Figma 2308:144686 — 2 rows only
  const rows = labels;
  rows.forEach((label, i) => {
    const r = onPick ? document.createElement("button") : document.createElement("div");
    r.className = "sdLongPress__row";
    if (onPick) {
      r.type = "button";
      r.addEventListener("click", () => onPick(i));
      r.setAttribute("aria-pressed", activeIndex === i ? "true" : "false");
      r.setAttribute("aria-label", `${label} ${activeIndex === i ? "활성" : "비활성"}`);
    }
    r.textContent = label;
    if (activeIndex === i) {
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
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Dropdown"));

  // Dorrop down Fillter — 좌: variable states 모두 세로 배치, 우: 아이콘 클릭으로 활성 상태 변경 데모
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Dorrop down Fillter"));

  const row = h("div", "sdDropDemoRow");
  const left = h("div", "sdDropDemoCol sdDropDemoCol--board");
  const right = h("div", "sdDropDemoCol sdDropDemoCol--live");

  // Left: all states vertical
  const board = h("div", "sdDropBoard");
  for (const st of ORDER) {
    const item = h("div", "sdDropBoard__item");
    item.appendChild(h("p", "sdDropBoard__label", `State=${st}`));
    item.appendChild(filterBar(st, null));
    board.appendChild(item);
  }
  left.appendChild(board);

  // Right: interactive demo (no click-cycle; click icon to activate)
  right.appendChild(h("p", "sdDropDemo__colTitle", "예시"));
  const demoStateLine = h("p", "sdDropDemo__state", "");
  const demoHost = h("div", "sdDropDemo__host");
  right.appendChild(demoStateLine);
  right.appendChild(demoHost);
  right.appendChild(h("p", "sdDropDemo__hint", "아이콘을 클릭하면 해당 필터가 활성화됩니다."));

  let active = ORDER[0];
  function refreshDemo() {
    demoStateLine.textContent = `State=${active}`;
    demoHost.replaceChildren(
      filterBar(active, (key) => {
        active = key;
        refreshDemo();
      }),
    );
  }
  refreshDemo();

  row.append(left, right);
  sub.appendChild(row);
  container.appendChild(sub);

  const sub2 = h("div", "figma-subsection");
  sub2.appendChild(h("h3", "figma-subsection__title", "Dropdown item"));
  const row2 = h("div", "sdDropDemoRow");
  const left2 = h("div", "sdDropDemoCol sdDropDemoCol--board");
  const right2 = h("div", "sdDropDemoCol sdDropDemoCol--live");

  // Left: node 그대로 1개 (2행, 둘 다 비활성)
  const board2 = h("div", "sdDropBoard");
  const item2 = h("div", "sdDropBoard__item");
  item2.appendChild(h("p", "sdDropBoard__label", "기본(비활성)"));
  item2.appendChild(dropdownItem2308(null, null, ["Text", "Text"]));
  board2.appendChild(item2);
  left2.appendChild(board2);

  right2.appendChild(h("p", "sdDropDemo__colTitle", "예시"));
  const demo2State = h("p", "sdDropDemo__state", "");
  const demo2Host = h("div", "sdDropDemo__host");
  right2.appendChild(demo2State);
  right2.appendChild(demo2Host);
  right2.appendChild(h("p", "sdDropDemo__hint", "취소/삭제 텍스트를 클릭하면 활성화 상태가 변경됩니다."));

  /** @type {number | null} */
  let activeRow = null;
  function refreshDemo2() {
    demo2State.textContent = `활성=${activeRow == null ? "없음" : ["취소", "삭제"][activeRow]}`;
    demo2Host.replaceChildren(
      dropdownItem2308(activeRow, (i) => {
        if (activeRow === i) return; // 이미 활성인 행은 아무 동작 없음
        activeRow = i;
        refreshDemo2();
      }, ["취소", "삭제"]),
    );
  }
  refreshDemo2();

  row2.append(left2, right2);
  sub2.appendChild(row2);
  container.appendChild(sub2);
}
