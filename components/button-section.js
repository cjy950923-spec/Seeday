/**
 * Figma: Button — 메인 버튼 프레임 64:881 (섹션 보드는 64:853 인접)
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-881&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_BUTTON = {
  nodeId: "Figma link",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-881&m=dev",
};

export const FIGMA_SOCIAL_LOGIN_KAKAO = {
  nodeId: "23:4070",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=23-4070&m=dev",
};

export const FIGMA_SOCIAL_LOGIN_APPLE = {
  nodeId: "23:4069",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=23-4069&m=dev",
};

const SOCIAL_KAKAO_MARK_SRC = new URL("../assets/social-login-kakao-mark.svg", import.meta.url).href;
const SOCIAL_APPLE_MARK_SRC = new URL("../assets/social-login-apple-mark.svg", import.meta.url).href;

/** @param {string} file */
function figmaBtnAsset(file) {
  return new URL(`../assets/figma-buttons/${file}`, import.meta.url).href;
}

export const FIGMA_CALENDAR_FILTER = {
  nodeId: "725:3144",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=725-3144&m=dev",
};
export const FIGMA_PHOTO_FLOATING = {
  nodeId: "792:3478",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=792-3478&m=dev",
};
export const FIGMA_FLOATING_BUTTON = {
  nodeId: "940:14719",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=940-14719&m=dev",
};
export const FIGMA_CHECK_BUTTON = {
  nodeId: "1715:113034",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1715-113034&m=dev",
};
export const FIGMA_COMPLETE_CHIP = {
  nodeId: "1541:92933",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1541-92933&m=dev",
};
export const FIGMA_RECORD_CHANGE_LINK = {
  nodeId: "1033:21703",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1033-21703&m=dev",
};
export const FIGMA_NEW_RECORD = {
  nodeId: "1943:129034",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1943-129034&m=dev",
};
export const FIGMA_CHECK_BOX = {
  nodeId: "2577:145629",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=2577-145629&m=dev",
};

export const BUTTON_VARIANTS = {
  mainButton: {
    type: ["Primary", "Secondary"],
    state: ["Normal", "Success"],
  },
  toggle: { state: ["on", "off"] },
};

/** @param {string} src @param {string} [className] */
function figmaImg(src, className) {
  const i = document.createElement("img");
  i.src = src;
  i.alt = "";
  if (className) i.className = className;
  return i;
}

/**
 * Figma 725:3144 Button/Callendar Filter — All 아이콘 + ArrowDown Medium 레이아웃 1:1
 * @returns {HTMLDivElement}
 */
export function createCalendarFilter725() {
  const root = document.createElement("div");
  root.className = "sd725CalFilter";
  root.setAttribute("data-figma-node", FIGMA_CALENDAR_FILTER.nodeId);
  root.setAttribute("data-name", "Button/Callendar Filter");

  const row = document.createElement("div");
  row.className = "sd725CalFilter__row";

  const iconHost = document.createElement("div");
  iconHost.className = "sd725CalFilter__iconHost";
  const glyph = document.createElement("div");
  glyph.className = "sd725CalFilter__glyph";
  const allWrap = document.createElement("div");
  allWrap.className = "sd725CalFilter__allWrap";
  allWrap.appendChild(figmaImg(figmaBtnAsset("2084faa95fa5b6877755cfe6d498acda438831c4.svg"), "sd725CalFilter__allImg"));
  glyph.appendChild(allWrap);
  iconHost.appendChild(glyph);

  const arrow = document.createElement("div");
  arrow.className = "sd725CalFilter__arrow";
  const arrowCenter = document.createElement("div");
  arrowCenter.className = "sd725CalFilter__arrowCenter";
  const arrowRot = document.createElement("div");
  arrowRot.className = "sd725CalFilter__arrowRot";
  const arrowBox = document.createElement("div");
  arrowBox.className = "sd725CalFilter__arrowBox";
  const arrowPad = document.createElement("div");
  arrowPad.className = "sd725CalFilter__arrowPad";
  arrowPad.appendChild(figmaImg(figmaBtnAsset("e962c486c8e519d06aba4bba7462f53ac02dd3cf.svg"), "sd725CalFilter__arrowImg"));
  arrowBox.appendChild(arrowPad);
  arrowRot.appendChild(arrowBox);
  arrowCenter.appendChild(arrowRot);
  arrow.appendChild(arrowCenter);

  row.append(iconHost, arrow);
  root.appendChild(row);
  return root;
}

/** @returns {HTMLDivElement} 792:3478 */
export function createPhotoFloating792() {
  const root = document.createElement("div");
  root.className = "sd792PhotoFloat";
  root.setAttribute("data-figma-node", FIGMA_PHOTO_FLOATING.nodeId);
  const ring = document.createElement("div");
  ring.className = "sd792PhotoFloat__ring";
  ring.appendChild(figmaImg(figmaBtnAsset("c14517e7ba880004603aa806a62064a3beeda700.svg"), "sd792PhotoFloat__ringImg"));
  const cross = document.createElement("div");
  cross.className = "sd792PhotoFloat__cross";
  cross.appendChild(figmaImg(figmaBtnAsset("c619e3dfcc35891cd77461107b6dbb465c3a6a5c.svg"), "sd792PhotoFloat__crossImg"));
  root.append(ring, cross);
  return root;
}

/** @returns {HTMLDivElement} 940:14719 */
export function createFloatingButton940() {
  const root = document.createElement("div");
  root.className = "sd940Fab";
  root.setAttribute("data-figma-node", FIGMA_FLOATING_BUTTON.nodeId);
  const inner = document.createElement("div");
  inner.className = "sd940Fab__icon";
  inner.appendChild(figmaImg(figmaBtnAsset("8ac0f5c76827fae164f54ddf3b47102f077b68ec.svg"), "sd940Fab__iconImg"));
  root.appendChild(inner);
  return root;
}

/** @returns {HTMLDivElement} 1715:113034 */
export function createCheckButton1715() {
  const root = document.createElement("div");
  root.className = "sd1715CheckBtn";
  root.setAttribute("data-figma-node", FIGMA_CHECK_BUTTON.nodeId);
  const wrap = document.createElement("div");
  wrap.className = "sd1715CheckBtn__imgWrap";
  wrap.appendChild(figmaImg(figmaBtnAsset("70b6dfd013050aace66a316ddf56d99738e4405c.svg"), "sd1715CheckBtn__img"));
  root.appendChild(wrap);
  return root;
}

/**
 * @param {boolean} on
 * @param {{ decorative?: boolean }} [opts] decorative=true 이면 버튼 안 장식용(aria-hidden)
 * @returns {HTMLDivElement}
 */
function createCompleteChip1541(on, opts = {}) {
  const decorative = opts.decorative === true;
  const el = document.createElement("div");
  el.className = `sd1541Complete ${on ? "sd1541Complete--on" : "sd1541Complete--off"}`;
  el.setAttribute("data-figma-node", on ? "1033:21507" : "1541:92932");
  if (decorative) {
    el.setAttribute("aria-hidden", "true");
  } else {
    el.setAttribute("role", "img");
    el.setAttribute("aria-label", on ? "완료 On" : "완료 Off");
  }
  el.appendChild(h("p", "sd1541Complete__label", "완료"));
  return el;
}

/** @returns {HTMLDivElement} 1541:92933 프레임 (On·Off 정적) */
export function createCompleteFrame1541() {
  const row = h("div", "sd1541CompleteRow");
  row.setAttribute("data-figma-node", FIGMA_COMPLETE_CHIP.nodeId);
  row.appendChild(createCompleteChip1541(true));
  row.appendChild(createCompleteChip1541(false));
  return row;
}

/** @returns {HTMLDivElement} 1033:21703 */
export function createRecordChange1033() {
  const root = document.createElement("div");
  root.className = "sd1033RecordLink";
  root.setAttribute("data-figma-node", FIGMA_RECORD_CHANGE_LINK.nodeId);
  const inner = document.createElement("div");
  inner.className = "sd1033RecordLink__inner";
  inner.appendChild(h("p", "sd1033RecordLink__text", "기록 방식을 바꿀래요"));
  root.appendChild(inner);
  return root;
}

/**
 * Icon Arrow Right · Medium — `icon-section` Arrow(155:*) 와 동일 path, `currentColor` → 토큰 매핑
 * @returns {HTMLSpanElement}
 */
function newRecordArrowRightMedium() {
  const wrap = document.createElement("span");
  wrap.className = "sdIconArrow sdIconArrow--md sd1943NewRecord__arrow";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.style.transform = "rotate(180deg)";
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", "M14.5 6.5L8.5 12.5L14.5 18.5");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "2");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  svg.appendChild(p);
  wrap.appendChild(svg);
  return wrap;
}

/** @returns {HTMLDivElement} 1943:129034 */
export function createNewRecord1943() {
  const root = document.createElement("div");
  root.className = "sd1943NewRecord";
  root.setAttribute("data-figma-node", FIGMA_NEW_RECORD.nodeId);
  const row = document.createElement("div");
  row.className = "sd1943NewRecord__row";
  const copy = document.createElement("div");
  copy.className = "sd1943NewRecord__copy";
  copy.appendChild(h("p", null, "Button Text"));
  copy.appendChild(h("p", null, "Button Text"));
  const pill = document.createElement("div");
  pill.className = "sd1943NewRecord__pill";
  const pt = document.createElement("span");
  pt.className = "sd1943NewRecord__pillText";
  pt.textContent = "Button";
  pill.append(pt, newRecordArrowRightMedium());
  row.append(copy, pill);
  root.appendChild(row);
  return root;
}

/**
 * @param {boolean} on
 * @param {{ decorative?: boolean }} [opts] decorative=true 이면 버튼 안 장식용(aria-hidden)
 * @returns {HTMLDivElement}
 */
function createCheckbox2577(on, opts = {}) {
  const decorative = opts.decorative === true;
  const root = document.createElement("div");
  root.className = `sd2577CheckBox ${on ? "sd2577CheckBox--on" : "sd2577CheckBox--off"}`;
  root.setAttribute("data-figma-node", on ? "2577:145627" : "2577:145628");
  if (decorative) {
    root.setAttribute("aria-hidden", "true");
  } else {
    root.setAttribute("role", "img");
    root.setAttribute("aria-label", on ? "체크박스 On" : "체크박스 Off");
  }
  const base = document.createElement("div");
  base.className = "sd2577CheckBox__base";
  base.appendChild(
    figmaImg(
      figmaBtnAsset(on ? "a9d776333b48778f1332c1d0b87ac5419f7b6f06.svg" : "731d6824e4e0371445d9dd933380ad916a732f68.svg"),
      "sd2577CheckBox__baseImg",
    ),
  );
  const mark = document.createElement("div");
  mark.className = "sd2577CheckBox__mark";
  mark.appendChild(figmaImg(figmaBtnAsset("6bb81270d4322fbd3dcafefc2f07dbd8f0ab5c72.svg"), "sd2577CheckBox__markImg"));
  root.append(base, mark);
  return root;
}

/** @returns {HTMLDivElement} 2577:145629 프레임 (Off·On 정적) */
export function createCheckBoxFrame2577() {
  const row = h("div", "sd2577CheckBoxRow");
  row.setAttribute("data-figma-node", FIGMA_CHECK_BOX.nodeId);
  row.appendChild(createCheckbox2577(false, {}));
  row.appendChild(createCheckbox2577(true, {}));
  return row;
}

/** Figma 2577:145629 — 좌: 정적 Off·On, 우: 클릭으로 On·Off 전환 예시 */
function mountCheckBox2577Block(container) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Check Box"));
  const row = h("div", "sdBtnDemoRow");

  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createCheckBoxFrame2577());

  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));

  let on = false;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "sd2577CheckBoxDemo__btn";

  function syncDemo() {
    btn.replaceChildren(createCheckbox2577(on, { decorative: true }));
    btn.setAttribute(
      "aria-label",
      on ? "체크박스 On. 클릭하면 Off로 바뀝니다." : "체크박스 Off. 클릭하면 On으로 바뀝니다.",
    );
  }
  btn.addEventListener("click", () => {
    on = !on;
    syncDemo();
  });
  colRight.appendChild(btn);
  syncDemo();

  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

/**
 * @param {HTMLElement} sectionEl
 * @param {string} title
 * @param {HTMLElement} node
 */
function mountFigmaButtonSubsection(sectionEl, title, node) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", title));
  sub.appendChild(node);
  sectionEl.appendChild(sub);
}

/** Figma 1541:92933 — 좌: 정적 On·Off, 우: 클릭으로 상태 전환 예시 */
function mountComplete1541Block(container) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "완료"));
  const row = h("div", "sdBtnDemoRow");

  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createCompleteFrame1541());

  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));

  let on = true;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "sd1541CompleteDemo__btn";
  function syncDemo() {
    btn.replaceChildren(createCompleteChip1541(on, { decorative: true }));
    btn.setAttribute(
      "aria-label",
      on ? "완료 On. 클릭하면 Off로 바뀝니다." : "완료 Off. 클릭하면 On으로 바뀝니다.",
    );
  }
  btn.addEventListener("click", () => {
    on = !on;
    syncDemo();
  });
  colRight.appendChild(btn);
  syncDemo();

  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

function mountFigmaButtonSymbolBlocks(container) {
  mountFigmaButtonSubsection(container, "Callendar Filter", createCalendarFilter725());
  mountFigmaButtonSubsection(container, "Photo Floating", createPhotoFloating792());
  mountFigmaButtonSubsection(container, "Floating Button", createFloatingButton940());
  mountFigmaButtonSubsection(container, "Check Button", createCheckButton1715());
  mountComplete1541Block(container);
  mountFigmaButtonSubsection(container, "기록 변경", createRecordChange1033());
  mountFigmaButtonSubsection(container, "New Record", createNewRecord1943());
  mountCheckBox2577Block(container);
}

/** Figma `Button` frame 64:881 — 심볼별 노드 */
function mainButtonFigmaNode(type, state) {
  if (type === "Primary" && state === "Normal") return "64:857";
  if (type === "Primary" && state === "Success") return "64:880";
  if (type === "Secondary" && state === "Normal") return "871:5394";
  if (type === "Secondary" && state === "Success") return "2769:147084";
  return "64:881";
}

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function applyMainButtonClasses(el, type, state) {
  el.className = `sdBtn sdBtn--${type.toLowerCase()} sdBtn--${state.toLowerCase()}`;
  el.setAttribute("data-figma-node", mainButtonFigmaNode(type, state));
}

/** @returns {HTMLDivElement} Figma 64:881 — 2×2 심볼만 (비인터랙티브) */
function buildStaticButtonFrame881() {
  const frame = h("div", "sdBtnFrame881 sdBtnFrame881--static");
  frame.setAttribute("role", "img");
  frame.setAttribute("aria-label", "Figma Button 64:881 — Type × State 2×2 (정적)");
  const grid = h("div", "sdBtnFrame881__grid");

  /**
   * @param {"Primary" | "Secondary"} t
   * @param {"Normal" | "Success"} s
   */
  function addVariant(t, s) {
    const cell = h("div", "sdBtnFrame881__cell");
    const node = document.createElement("div");
    node.className = `sdBtn sdBtn--${t.toLowerCase()} sdBtn--${s.toLowerCase()}`;
    node.setAttribute("data-figma-node", mainButtonFigmaNode(t, s));
    node.setAttribute("aria-hidden", "true");
    node.textContent = "Button";
    cell.appendChild(node);
    grid.appendChild(cell);
  }

  addVariant("Primary", "Normal");
  addVariant("Secondary", "Normal");
  addVariant("Primary", "Success");
  addVariant("Secondary", "Success");

  frame.appendChild(grid);
  return frame;
}

/**
 * Type 세그먼트 + 본 버튼 클릭으로 State Normal ↔ Success (예시).
 * @param {HTMLElement} col
 */
function mountMainButtonLiveDemoColumn(col) {
  /** @type {"Primary" | "Secondary"} */
  let type = "Primary";
  /** @type {"Normal" | "Success"} */
  let state = "Normal";

  const stateLine = h("p", "sdBtnDemo__stateLine", "");

  const typeRow = h("div", "sdBtnDemo__typeRow");
  typeRow.appendChild(h("p", "sdBtnDemo__typeLabel", "Type"));
  const typeGroup = h("div", "sdBtnDemo__typeGroup");
  typeGroup.setAttribute("role", "group");
  typeGroup.setAttribute("aria-label", "Button type (예시)");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Button";

  function formatStateLine() {
    stateLine.textContent = `Type=${type}, State=${state}`;
  }

  function syncTypeButtons() {
    liveTypePrimary.classList.toggle("sdBtnDemo__typeBtn--active", type === "Primary");
    liveTypeSecondary.classList.toggle("sdBtnDemo__typeBtn--active", type === "Secondary");
    liveTypePrimary.setAttribute("aria-pressed", type === "Primary" ? "true" : "false");
    liveTypeSecondary.setAttribute("aria-pressed", type === "Secondary" ? "true" : "false");
  }

  function refreshLive() {
    applyMainButtonClasses(btn, type, state);
    formatStateLine();
    syncTypeButtons();
  }

  const liveTypePrimary = document.createElement("button");
  liveTypePrimary.type = "button";
  liveTypePrimary.className = "sdBtnDemo__typeBtn sdBtnDemo__typeBtn--active";
  liveTypePrimary.textContent = "Primary";
  liveTypePrimary.addEventListener("click", () => {
    if (type === "Primary") return;
    type = "Primary";
    refreshLive();
  });

  const liveTypeSecondary = document.createElement("button");
  liveTypeSecondary.type = "button";
  liveTypeSecondary.className = "sdBtnDemo__typeBtn";
  liveTypeSecondary.textContent = "Secondary";
  liveTypeSecondary.addEventListener("click", () => {
    if (type === "Secondary") return;
    type = "Secondary";
    refreshLive();
  });

  typeGroup.append(liveTypePrimary, liveTypeSecondary);
  typeRow.appendChild(typeGroup);

  btn.addEventListener("click", () => {
    state = state === "Normal" ? "Success" : "Normal";
    refreshLive();
  });

  col.appendChild(typeRow);
  col.appendChild(stateLine);
  col.appendChild(btn);
  refreshLive();
}

/**
 * 좌: 64:881 정적 2×2 — 우: Type + 버튼 클릭 State 예시
 * @param {HTMLElement} sectionEl
 */
function mountMainButtonDemo(sectionEl) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Button"));

  const wrap = h("div", "sdBtnDemo");
  const row = h("div", "sdBtnDemoRow");

  const colBoard = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colBoard.appendChild(buildStaticButtonFrame881());

  const colLive = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colLive.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));
  mountMainButtonLiveDemoColumn(colLive);

  row.append(colBoard, colLive);
  wrap.appendChild(row);
  sub.appendChild(wrap);
  sectionEl.appendChild(sub);
}

function toggle(on) {
  const wrap = h("div", `sdToggle ${on ? "sdToggle--on" : ""}`);
  wrap.appendChild(h("span", "sdToggle__thumb"));
  return wrap;
}

/** @returns {HTMLDivElement} Figma 23:4070 */
export function createSocialLoginKakao() {
  const root = document.createElement("div");
  root.className = "sdSocialLogin sdSocialLogin--kakao";
  root.setAttribute("data-figma-node", FIGMA_SOCIAL_LOGIN_KAKAO.nodeId);
  const row = document.createElement("div");
  row.className = "sdSocialLogin__row";
  const mark = document.createElement("div");
  mark.className = "sdSocialLogin__mark sdSocialLogin__mark--kakao";
  mark.setAttribute("aria-hidden", "true");
  const img = document.createElement("img");
  img.src = SOCIAL_KAKAO_MARK_SRC;
  img.alt = "";
  mark.appendChild(img);
  const label = document.createElement("span");
  label.className = "sdSocialLogin__text";
  label.textContent = "카카오로 시작하기";
  row.append(mark, label);
  root.appendChild(row);
  return root;
}

/** @returns {HTMLDivElement} Figma 23:4069 */
export function createSocialLoginApple() {
  const root = document.createElement("div");
  root.className = "sdSocialLogin sdSocialLogin--apple";
  root.setAttribute("data-figma-node", FIGMA_SOCIAL_LOGIN_APPLE.nodeId);
  const panel = document.createElement("div");
  panel.className = "sdSocialLogin__panel";
  const mark = document.createElement("div");
  mark.className = "sdSocialLogin__mark sdSocialLogin__mark--apple";
  mark.setAttribute("aria-hidden", "true");
  const img = document.createElement("img");
  img.src = SOCIAL_APPLE_MARK_SRC;
  img.alt = "";
  mark.appendChild(img);
  const label = document.createElement("span");
  label.className = "sdSocialLogin__text sdSocialLogin__text--onDark";
  label.textContent = "Apple로 시작하기";
  panel.append(mark, label);
  root.appendChild(panel);
  return root;
}

function mountSocialLoginButtonBlock(container) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Social Login Button"));
  const stack = h("div", "sdSocialLoginBlock");
  stack.appendChild(createSocialLoginKakao());
  stack.appendChild(createSocialLoginApple());
  sub.appendChild(stack);
  container.appendChild(sub);
}

/**
 * @param {HTMLElement} container
 */
export function mountButtonSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_BUTTON.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Button"));

  mountMainButtonDemo(container);

  appendInteractiveSubsection(container, "Toggle", {
    states: [true, false],
    formatLabel: () => "",
    render: (on) => toggle(on),
  });

  mountSocialLoginButtonBlock(container);
  mountFigmaButtonSymbolBlocks(container);
}
