import { iconAssets } from "../../tokens/icon.js";

function assetUrl(path) {
  return new URL(`../../${path}`, import.meta.url).href;
}

const CHECK_FALSE_ELLIPSE_SRC = assetUrl(iconAssets.checkFalseEllipse);
const CHECK_FALSE_VECTOR_SRC = assetUrl(iconAssets.checkFalseVector);
const CHECK_TRUE_ELLIPSE_SRC = assetUrl(iconAssets.checkTrueEllipse);
const CHECK_TRUE_VECTOR_SRC = assetUrl(iconAssets.checkTrueVector);
const SETTING_SRC = assetUrl(iconAssets.setting);

function h(tag, className, attrs, children) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (attrs) {
    Object.entries(attrs).forEach(([k, v]) => {
      if (v === false || v == null) return;
      el.setAttribute(k, String(v));
    });
  }
  (children || []).forEach((c) => {
    if (c == null) return;
    if (typeof c === "string") el.appendChild(document.createTextNode(c));
    else el.appendChild(c);
  });
  return el;
}

function svgArrow(direction) {
  const rot = { Left: 0, Right: 180, Up: 90, Down: -90 }[direction] || 0;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 9.8 17.8");
  svg.setAttribute("fill", "none");
  svg.style.transform = `rotate(${rot}deg)`;
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", "M8.9 0.9L0.9 8.9L8.9 16.9");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "var(--icon-stroke-arrow)");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  svg.appendChild(p);
  return svg;
}

/**
 * Arrow icon (Figma 46:321 기반)
 * @param {{ direction: "Left"|"Right"|"Up"|"Down", size?: "Large"|"Medium", className?: string }} props
 */
export function SdIconArrow({ direction, size = "Large", className } = {}) {
  const lg = size === "Large";
  return h("span", `${className || ""} sdIconArrow sdIconArrow--${lg ? "lg" : "md"}`.trim(), null, [
    svgArrow(direction),
  ]);
}

/**
 * Check icon (Figma 64:312/64:448 기반)
 * @param {{ state?: boolean, className?: string }} props
 */
export function SdIconCheck({ state = false, className } = {}) {
  const root = h(
    "span",
    `${className || ""} sdIconCheck ${state ? "sdIconCheck--true" : "sdIconCheck--false"}`.trim(),
    { "aria-hidden": "true" },
    [],
  );

  const ellipse = document.createElement("img");
  ellipse.className = "sdIconCheck__ellipse";
  ellipse.alt = "";
  ellipse.src = state ? CHECK_TRUE_ELLIPSE_SRC : CHECK_FALSE_ELLIPSE_SRC;

  const vecWrap = h("span", "sdIconCheck__vectorWrap", null, []);
  const vector = document.createElement("img");
  vector.className = "sdIconCheck__vector";
  vector.alt = "";
  vector.src = state ? CHECK_TRUE_VECTOR_SRC : CHECK_FALSE_VECTOR_SRC;
  vecWrap.appendChild(vector);

  root.appendChild(ellipse);
  root.appendChild(vecWrap);
  return root;
}

/**
 * Plus icon (Figma 721:4144)
 * @param {{ className?: string }} props
 */
export function SdIconPlus({ className } = {}) {
  return h("span", `${className || ""} sdIconPlus`.trim(), { "aria-hidden": "true" }, []);
}

/**
 * Setting icon (Figma 140:363) — SVG asset 기반 (현재는 예시로 1개만 토큰화)
 * @param {{ className?: string }} props
 */
export function SdIconSetting({ className } = {}) {
  const wrap = h("span", `${className || ""} sdIconMisc`.trim(), { "data-icon": "Setting" }, []);
  const img = document.createElement("img");
  img.alt = "";
  img.src = SETTING_SRC;
  img.className = "sdIconMisc__img";
  wrap.appendChild(img);
  return wrap;
}

