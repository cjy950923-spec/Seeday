/**
 * Figma: Alert section — node 568:4284
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=568-4284&m=dev
 */

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

function toast(text) {
  return h("div", "sdToast", text);
}

/**
 * @param {string} value
 * @param {{ placeholder?: string }} [opts]
 */
function toastEditable(value, opts = {}) {
  const wrap = h("div", "sdToast sdToast--editable");
  const input = document.createElement("input");
  input.className = "sdToast__input";
  input.type = "text";
  input.value = value || "";
  input.placeholder = opts.placeholder || "";
  input.autocomplete = "off";
  input.spellcheck = false;
  wrap.appendChild(input);

  const sizer = document.createElement("span");
  sizer.className = "sdAlertSizer sdAlertSizer--toast";
  wrap.appendChild(sizer);

  function syncWidth() {
    const v = input.value || input.placeholder || "";
    sizer.textContent = v;
    const w = Math.max(1, sizer.getBoundingClientRect().width);
    input.style.width = `${w}px`;
  }
  input.addEventListener("input", syncWidth);
  input.addEventListener("compositionend", syncWidth);

  const initialValue = input.value;
  const initialPlaceholder = input.placeholder;
  input.addEventListener("focus", () => {
    // 기본 문구가 입력을 방해하지 않도록, 포커스 시 지운다.
    if (input.value === initialValue) input.value = "";
    input.placeholder = "";
    syncWidth();
  });
  input.addEventListener("blur", () => {
    // 비어있으면 기본 문구를 다시 보여준다.
    if (input.value.trim() === "") input.value = initialValue;
    input.placeholder = initialPlaceholder;
    syncWidth();
  });
  queueMicrotask(syncWidth);

  return { wrap, input, syncWidth };
}

/**
 * @param {string} text
 */
function talkBox(text) {
  const wrap = h("div", "sdTalk");
  wrap.appendChild(h("div", "sdTalk__bubble", text));
  wrap.appendChild(h("div", "sdTalk__tail"));
  return wrap;
}

/**
 * @param {string} value
 * @param {{ placeholder?: string }} [opts]
 */
function talkBoxEditable(value, opts = {}) {
  const wrap = h("div", "sdTalk sdTalk--editable");

  const bubble = h("div", "sdTalk__bubble");
  const input = document.createElement("input");
  input.className = "sdTalk__input";
  input.type = "text";
  input.value = value || "";
  input.placeholder = opts.placeholder || "";
  input.autocomplete = "off";
  input.spellcheck = false;
  bubble.appendChild(input);

  wrap.appendChild(bubble);
  wrap.appendChild(h("div", "sdTalk__tail"));

  const sizer = document.createElement("span");
  sizer.className = "sdAlertSizer sdAlertSizer--talk";
  bubble.appendChild(sizer);

  function syncWidth() {
    const v = input.value || input.placeholder || "";
    sizer.textContent = v;
    const w = Math.max(1, sizer.getBoundingClientRect().width);
    input.style.width = `${w}px`;
  }
  input.addEventListener("input", syncWidth);
  input.addEventListener("compositionend", syncWidth);

  const initialValue = input.value;
  const initialPlaceholder = input.placeholder;
  input.addEventListener("focus", () => {
    if (input.value === initialValue) input.value = "";
    input.placeholder = "";
    syncWidth();
  });
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") input.value = initialValue;
    input.placeholder = initialPlaceholder;
    syncWidth();
  });
  queueMicrotask(syncWidth);

  return { wrap, input, syncWidth };
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
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Alert"));

  const defaultText = ALERT_VARIANTS.toast.message[0] || "Text Section";

  // Toast — Figma node is 1개 기준: left=component, right=demo(입력 가능)
  const toastSub = h("div", "figma-subsection sdAlertSubsection");
  toastSub.appendChild(h("h3", "figma-subsection__title", "Toast"));
  const toastRow = h("div", "sdBtnDemoRow sdAlertDemoRow");
  const toastLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board sdAlertDemoCol");
  const toastRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live sdAlertDemoCol");
  toastRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));

  const toastBoard = h("div", "sdAlertBoard");
  const toastItem = h("div", "sdAlertBoard__item");
  toastItem.appendChild(toast(defaultText));
  toastBoard.appendChild(toastItem);
  toastLeft.appendChild(toastBoard);

  const toastDemo = toastEditable(defaultText, { placeholder: "Text Section" });
  toastRight.appendChild(toastDemo.wrap);
  toastRow.append(toastLeft, toastRight);
  toastSub.appendChild(toastRow);
  container.appendChild(toastSub);

  // Talk Box — Figma node is 1개 기준: left=component, right=demo(입력 가능)
  const talkSub = h("div", "figma-subsection sdAlertSubsection");
  talkSub.appendChild(h("h3", "figma-subsection__title", "Talk Box"));
  const talkRow = h("div", "sdBtnDemoRow sdAlertDemoRow");
  const talkLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board sdAlertDemoCol");
  const talkRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live sdAlertDemoCol");
  talkRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));

  const talkBoard = h("div", "sdAlertBoard");
  const talkItem = h("div", "sdAlertBoard__item");
  talkItem.appendChild(talkBox(defaultText));
  talkBoard.appendChild(talkItem);
  talkLeft.appendChild(talkBoard);

  const talkDemo = talkBoxEditable(defaultText, { placeholder: "Text Section" });
  talkRight.appendChild(talkDemo.wrap);

  talkRow.append(talkLeft, talkRight);
  talkSub.appendChild(talkRow);
  container.appendChild(talkSub);
}
