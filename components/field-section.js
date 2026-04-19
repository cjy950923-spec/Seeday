/**
 * Figma: Field section — node 64:405
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-405&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_FIELD = {
  nodeId: "64:405",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-405&m=dev",
};

export const FIELD_VARIANTS = {
  textInputField: { state: ["Default", "Pressed", "Completed", "Failed"] },
  contentsTextInputField: { state: ["Default", "Pressed"] },
  photoAdd: { state: ["Default", "Active"] },
  dayCell: { state: ["Default", "Highlight", "Disable"] },
  inputAccessoryView: {},
  notification: { state: ["Off", "On"] },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function textInput(state) {
  const wrap = h("div", `sdFieldInput sdFieldInput--${state.toLowerCase()}`);
  if (state === "Default") {
    wrap.textContent = "닉네임 혹은 이름을 입력해 주세요.";
  } else if (state === "Completed") {
    wrap.textContent = "Text area";
    wrap.style.color = "var(--color-gray-900)";
    wrap.style.fontWeight = "500";
  } else {
    wrap.textContent = "Text area";
    wrap.style.color = "var(--color-gray-900)";
    wrap.style.fontWeight = "500";
    if (state === "Pressed" || state === "Failed") {
      wrap.appendChild(h("span", "sdFieldInput__clear"));
    }
  }
  return wrap;
}

function textarea(state) {
  const ta = document.createElement("textarea");
  ta.className = "sdFieldTextarea";
  ta.placeholder = "내용을 입력해 주세요.";
  if (state === "Pressed") {
    ta.value = "여러 줄 텍스트 예시입니다.";
  }
  return ta;
}

function photoAdd(state) {
  const wrap = h("div", `sdFieldPhotoAdd ${state === "Active" ? "sdFieldPhotoAdd--active" : ""}`);
  wrap.innerHTML =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  return wrap;
}

function dayCell(state) {
  const map = { Default: "", Highlight: "sdDayCell--highlight", Disable: "sdDayCell--disable" };
  const el = h("div", `sdDayCell ${map[state] || ""}`);
  el.appendChild(h("span", null, "12"));
  return el;
}

function accessory() {
  const bar = h("div", "sdAccessory");
  ["Bold", "Italic", "List", "Link"].forEach((t) => bar.appendChild(h("span", null, t)));
  return bar;
}

function notification(state) {
  const wrap = h("div", `sdNoti sdNoti--${state.toLowerCase()}`);
  wrap.appendChild(h("div", "sdNoti__toggle"));
  wrap.appendChild(
    h("span", null, state === "On" ? "알림을 켰을 때 안내 문구" : "알림을 껐을 때 안내 문구"),
  );
  return wrap;
}

/**
 * @param {HTMLElement} container
 */
export function mountFieldSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_FIELD.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_FIELD.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Field"));

  appendInteractiveSubsection(container, "Text Input Field — State", {
    states: FIELD_VARIANTS.textInputField.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => textInput(s),
  });

  appendInteractiveSubsection(container, "Contents Text Input Field — State", {
    states: FIELD_VARIANTS.contentsTextInputField.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => textarea(s),
  });

  appendInteractiveSubsection(container, "Photo Add", {
    states: FIELD_VARIANTS.photoAdd.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => photoAdd(s),
  });

  appendInteractiveSubsection(container, "Day Cell — State", {
    states: FIELD_VARIANTS.dayCell.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => dayCell(s),
  });

  const acc = h("div", "figma-subsection");
  acc.appendChild(h("h3", "figma-subsection__title", "Input Accessory View"));
  const wrap = h("div", "figma-interactive");
  const hint = h("p", "figma-interactive__hint", "정적 보조 툴바 (인터랙션 없음).");
  wrap.appendChild(h("p", "figma-interactive__state", "Input Accessory View"));
  const stage = h("div", "figma-interactive__stage");
  stage.setAttribute("tabindex", "-1");
  const vp = h("div", "figma-interactive__viewport");
  vp.appendChild(accessory());
  stage.appendChild(vp);
  wrap.appendChild(stage);
  wrap.appendChild(hint);
  acc.appendChild(wrap);
  container.appendChild(acc);

  appendInteractiveSubsection(container, "Notification — State", {
    states: FIELD_VARIANTS.notification.state,
    formatLabel: (s) => `State=${s}`,
    render: (s) => notification(s),
  });
}
