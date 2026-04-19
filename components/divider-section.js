/**
 * Figma: Devinder section — node 728:12832
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=728-12832&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_DIVIDER = {
  nodeId: "728:12832",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=728-12832&m=dev",
};

export const DIVIDER_VARIANTS = {
  devinder: { kind: ["width", "height"] },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

/**
 * @param {HTMLElement} container
 */
export function mountDividerSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_DIVIDER.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_DIVIDER.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Devinder (Divider)"));

  appendInteractiveSubsection(container, "Devinder_Width · Devinder_Height", {
    states: DIVIDER_VARIANTS.devinder.kind,
    formatLabel: (k) => (k === "width" ? "Devinder_Width" : "Devinder_Height"),
    render: (k) => (k === "width" ? h("div", "sdDevinderW") : h("div", "sdDevinderH")),
    hint: "가로/세로 가이드를 번갈아 봅니다. (Figma 심볼은 한 축이 0에 가까운 레이아웃 가이드)",
  });

  container.appendChild(
    h(
      "p",
      "sdDevinderNote",
      "Figma 심볼은 수치상 한 축 길이가 0에 가까운 레이아웃 가이드입니다. 뷰어에서는 1px 실선으로 표시했습니다.",
    ),
  );
}
