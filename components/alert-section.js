/**
 * Figma: Alert section — node 568:4284
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=568-4284&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_ALERT = {
  nodeId: "568:4284",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=568-4284&m=dev",
};

export const ALERT_VARIANTS = {
  toast: { message: ["Text Section", "저장되었습니다", "네트워크 오류"] },
  talkBox: { message: ["Text Input", "다음 단계로", "확인"] },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function talkBox(text) {
  const wrap = h("div", "sdTalk");
  wrap.appendChild(h("div", "sdTalk__bubble", text));
  wrap.appendChild(h("div", "sdTalk__tail"));
  return wrap;
}

/**
 * @param {HTMLElement} container
 */
export function mountAlertSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_ALERT.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_ALERT.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Alert"));

  appendInteractiveSubsection(container, "Toast", {
    states: ALERT_VARIANTS.toast.message,
    formatLabel: (m) => `문구: ${m}`,
    render: (m) => h("div", "sdToast", m),
  });

  appendInteractiveSubsection(container, "Talk Box", {
    states: ALERT_VARIANTS.talkBox.message,
    formatLabel: (m) => `문구: ${m}`,
    render: (m) => talkBox(m),
  });
}
