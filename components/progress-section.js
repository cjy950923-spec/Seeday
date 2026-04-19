/**
 * Figma: Progress section — node 546:1766
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=546-1766&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_PROGRESS = {
  nodeId: "546:1766",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=546-1766&m=dev",
};

export const PROGRESS_VARIANTS = {
  bar5: { state: ["Step 01", "Step 02", "Step 03", "Step 04", "Step 05"] },
  bar2: { state: ["Step 01", "Step 02"] },
  onboardingLabel: { state: ["Pending", "Done"] },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function bar5(step) {
  const n = Number(String(step).replace(/\D/g, "")) || 1;
  const pct = (n / 5) * 100;
  const track = h("div", "sdProgress5");
  const fill = h("div", "sdProgress5__fill");
  fill.style.width = `${pct}%`;
  track.appendChild(fill);
  return track;
}

function bar2(step) {
  const n = Number(String(step).replace(/\D/g, "")) || 1;
  const pct = (n / 2) * 100;
  const track = h("div", "sdProgress2");
  const fill = h("div", "sdProgress2__fill");
  fill.style.width = `${pct}%`;
  track.appendChild(fill);
  return track;
}

function onboardingLabel(state) {
  const wrap = h("div", `sdProgressLabel ${state === "Done" ? "sdProgressLabel--done" : ""}`);
  wrap.appendChild(h("span", "sdProgressLabel__check"));
  wrap.appendChild(
    h("span", null, state === "Done" ? "완료된 단계" : "Text Label"),
  );
  return wrap;
}

/**
 * @param {HTMLElement} container
 */
export function mountProgressSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_PROGRESS.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_PROGRESS.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Progress"));

  appendInteractiveSubsection(container, "Progress Bar_5 Step — State", {
    states: PROGRESS_VARIANTS.bar5.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => bar5(s),
  });

  appendInteractiveSubsection(container, "Progress Bar_2 Step — State", {
    states: PROGRESS_VARIANTS.bar2.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => bar2(s),
  });

  appendInteractiveSubsection(container, "Progress/Onboarding State Label", {
    states: PROGRESS_VARIANTS.onboardingLabel.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => onboardingLabel(s),
  });
}
