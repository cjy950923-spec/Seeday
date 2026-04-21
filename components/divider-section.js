/**
 * Figma: Devinder section — node 728:12832
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=728-12832&m=dev
 */

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
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Devinder (Divider)"));

  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Devinder"));

  const row = h("div", "sdDevinderRow");

  const left = h("div", "sdDevinderCol");
  left.appendChild(h("div", "sdDevinderW"));

  const right = h("div", "sdDevinderCol");
  right.appendChild(h("div", "sdDevinderH"));

  row.append(left, right);
  sub.appendChild(row);
  container.appendChild(sub);

}
