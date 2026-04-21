/**
 * Figma Card 뷰어 — Record_Type, Onboarding_Goal, Date/Fitness Card, List Cards, Habit Card
 */

import { graphicAssets } from "../tokens/graphic.js";

export const FIGMA_CARD = {
  nodeId: "64:456",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-456&m=dev",
};

export const FIGMA_CARD_RECORD_TYPE = {
  nodeId: "64:456",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-456&m=dev",
};

export const FIGMA_CARD_ONBOARDING_GOAL = {
  nodeId: "555:8776",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=555-8776&m=dev",
};

export const FIGMA_CARD_DATE = {
  nodeId: "728:16548",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=728-16548&m=dev",
};

export const FIGMA_CARD_FITNESS = {
  nodeId: "1327:88765",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1327-88765&m=dev",
};

export const FIGMA_CARD_FITNESS_LIST = {
  nodeId: "1019:31361",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1019-31361&m=dev",
};

export const FIGMA_CARD_HABIT_LIST = {
  nodeId: "1268:80915",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1268-80915&m=dev",
};

export const FIGMA_CARD_HABIT = {
  nodeId: "1329:139004",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=1329-139004&m=dev",
};

export const CARD_VARIANTS = {
  recordType: { state: ["Default", "Selected"] },
  onboardingGoal: { state: ["Default", "Selected"], badgeText: "string" },
  dateCard: {
    type: ["Text", "Has Image"],
    state: ["-", "Photo 1", "Photo 2", "Photo 3"],
  },
  fitnessCard: {
    type: ["Default", "Has Image"],
    state: ["-", "Photo 1", "Photo 2", "Photo 3"],
  },
  fitnessListCard: { title: "string" },
  habitListCard: { title: "string" },
  habitCard: { alarm: "boolean", mainPin: "boolean" },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function assetCardRecord(file) {
  return new URL(`../assets/card-record-type/${file}`, import.meta.url).href;
}

function assetFigmaCard(file) {
  return new URL(`../assets/card-figma/${file}`, import.meta.url).href;
}

function graphicAssetUrl(assetPath) {
  return new URL(`../${assetPath}`, import.meta.url).href;
}

function imgAsset(src, className) {
  const i = document.createElement("img");
  i.src = src;
  i.alt = "";
  if (className) i.className = className;
  return i;
}

function figmaLink(url, text) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = text;
  return a;
}

/* ---------- Record_Type 64:456 ---------- */

function createCardRecordCeck(selected) {
  const root = h("div", "sdCardRecord__ceck");
  root.setAttribute("aria-hidden", "true");
  const ring = h("div", "sdCardRecord__ceckRing");
  ring.appendChild(
    imgAsset(
      assetCardRecord(selected ? "check-ellipse-on.svg" : "check-ellipse-off.svg"),
      "sdCardRecord__ceckRingImg",
    ),
  );
  const mark = h("div", "sdCardRecord__ceckMark");
  mark.appendChild(
    imgAsset(
      assetCardRecord(selected ? "check-vector-on.svg" : "check-vector-off.svg"),
      "sdCardRecord__ceckMarkImg",
    ),
  );
  root.appendChild(ring);
  root.appendChild(mark);
  return root;
}

export function createCardRecordType64(state, opts = {}) {
  const selected = state === "Selected";
  const decorative = opts.decorative === true;
  const showCaption = opts.showCaption !== false;

  const root = document.createElement("div");
  root.className = `sdCardRecord sdCardRecord--${selected ? "selected" : "default"}`;
  root.setAttribute("data-figma-node", selected ? "517:2847" : "64:319");
  root.setAttribute("data-name", "Card/Record_Type");
  if (decorative) root.setAttribute("aria-hidden", "true");
  else {
    root.setAttribute("role", "group");
    root.setAttribute("aria-label", selected ? "기록 유형 카드, 선택됨" : "기록 유형 카드, 기본");
  }

  const row = h("div", "sdCardRecord__row");
  row.setAttribute("data-name", "Contents");
  const lead = h("div", "sdCardRecord__lead");
  lead.setAttribute("data-name", "Contents");
  const avatar = h("div", "sdCardRecord__avatar");
  avatar.setAttribute("data-name", "Profile/Record");
  avatar.appendChild(imgAsset(assetCardRecord("profile-book.png"), "sdCardRecord__avatarImg"));
  const desc = h("div", `sdCardRecord__desc sdCardRecord__desc--${selected ? "selected" : "default"}`);
  desc.setAttribute("data-name", "Description");
  desc.appendChild(h("p", "sdCardRecord__title", "Title"));
  if (showCaption) {
    const cap = h("p", "sdCardRecord__caption", "Caption");
    cap.setAttribute("data-figma-node", "64:271");
    desc.appendChild(cap);
  }
  lead.appendChild(avatar);
  lead.appendChild(desc);
  row.appendChild(lead);
  row.appendChild(createCardRecordCeck(selected));
  root.appendChild(row);
  return root;
}

export function createCardRecordTypeFrame64() {
  const stack = h("div", "sdCard64RecordStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_RECORD_TYPE.nodeId);
  stack.appendChild(createCardRecordType64("Default"));
  stack.appendChild(createCardRecordType64("Selected"));
  return stack;
}

function mountCardRecordType64Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Card/Record_Type");
  sub.appendChild(h3);
  const row = h("div", "sdBtnDemoRow sdCard64DemoRow");
  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createCardRecordTypeFrame64());
  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));

  /** @type {"Default" | "Selected"} */
  let state = "Default";
  const stateLine = h("p", "sdBtnDemo__stateLine", "");

  const stateRow = h("div", "sdBtnDemo__typeRow");
  stateRow.appendChild(h("p", "sdBtnDemo__typeLabel", "State"));
  const stateGroup = h("div", "sdBtnDemo__typeGroup");
  stateGroup.setAttribute("role", "group");
  stateGroup.setAttribute("aria-label", "Record_Type state");

  const liveDefault = document.createElement("button");
  liveDefault.type = "button";
  liveDefault.className = "sdBtnDemo__typeBtn sdBtnDemo__typeBtn--active";
  liveDefault.textContent = "Default";
  const liveSelected = document.createElement("button");
  liveSelected.type = "button";
  liveSelected.className = "sdBtnDemo__typeBtn";
  liveSelected.textContent = "Selected";

  const preview = h("div", "sdCardLivePreview");

  function syncSegment() {
    liveDefault.classList.toggle("sdBtnDemo__typeBtn--active", state === "Default");
    liveSelected.classList.toggle("sdBtnDemo__typeBtn--active", state === "Selected");
    liveDefault.setAttribute("aria-pressed", state === "Default" ? "true" : "false");
    liveSelected.setAttribute("aria-pressed", state === "Selected" ? "true" : "false");
  }

  function refresh() {
    stateLine.textContent = `State=${state}`;
    preview.replaceChildren(createCardRecordType64(state, { decorative: true }));
    syncSegment();
  }

  liveDefault.addEventListener("click", () => {
    if (state === "Default") return;
    state = "Default";
    refresh();
  });
  liveSelected.addEventListener("click", () => {
    if (state === "Selected") return;
    state = "Selected";
    refresh();
  });

  stateGroup.appendChild(liveDefault);
  stateGroup.appendChild(liveSelected);
  stateRow.appendChild(stateGroup);
  colRight.appendChild(stateRow);
  colRight.appendChild(stateLine);
  colRight.appendChild(preview);
  refresh();

  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

/* ---------- Onboarding Goal 555:8776 ---------- */

/**
 * @param {{ state?: "Default" | "Selected"; badgeText?: string; decorative?: boolean }} [props]
 */
export function createCardOnboardingGoal555(props = {}) {
  const state = props.state ?? "Default";
  const selected = state === "Selected";
  const badgeText = props.badgeText ?? "Bedge";
  const decorative = props.decorative === true;

  const root = document.createElement("div");
  root.className = `sd555GoalCard ${selected ? "sd555GoalCard--selected" : "sd555GoalCard--default"}`;
  root.setAttribute("data-figma-node", selected ? "555:8775" : "64:646");
  root.setAttribute("data-name", "Card/Onbording_Goal");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const inner = h("div", "sd555GoalCard__inner");
  const avatar = h("div", "sd555GoalCard__avatar");
  avatar.setAttribute("data-name", "Profile/Goal");
  const avClip = h("div", "sd555GoalCard__avatarClip");
  avClip.appendChild(imgAsset(assetFigmaCard("onboarding-profile.svg"), "sd555GoalCard__avatarImg"));
  avatar.appendChild(avClip);

  const stack = h("div", "sd555GoalCard__stack");
  const badge = h("div", "sd555GoalCard__badge");
  badge.setAttribute("data-figma-node", "64:620");
  badge.appendChild(h("span", "sd555GoalCard__badgeText", badgeText));
  const date = h("p", "sd555GoalCard__date", "Date");
  date.setAttribute("data-figma-node", selected ? "555:8772" : "64:638");
  stack.append(badge, date);
  inner.append(avatar, stack);
  root.appendChild(inner);
  return root;
}

function createOnboardingGoalBoard555() {
  const stack = h("div", "sdCardStaticStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_ONBOARDING_GOAL.nodeId);
  stack.appendChild(createCardOnboardingGoal555({ state: "Default" }));
  stack.appendChild(createCardOnboardingGoal555({ state: "Selected" }));
  return stack;
}

function mountOnboardingGoal555Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Card/Onbording_Goal");
  sub.appendChild(h3);
  const row = h("div", "sdBtnDemoRow sdCard64DemoRow");
  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createOnboardingGoalBoard555());
  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));
  const stateLine = h("p", "figma-interactive__state", "");
  colRight.appendChild(stateLine);
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "sdCardDemo__btn";
  let sel = false;
  function sync() {
    const state = sel ? "Selected" : "Default";
    stateLine.textContent = `State=${state}`;
    btn.replaceChildren(createCardOnboardingGoal555({ state, decorative: true }));
    btn.setAttribute("aria-label", `State ${state}. 클릭하면 다음 상태로 바뀝니다.`);
  }
  btn.addEventListener("click", () => {
    sel = !sel;
    sync();
  });
  colRight.appendChild(btn);
  sync();
  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

/* ---------- Date Card 728:16548 ---------- */

function createDateCardEmotion728() {
  const root = h("div", "sd728DateCard__emotion");
  root.setAttribute("data-name", "Emotion_Small");
  const inner = h("div", "sd728DateCard__emotionInner");
  inner.appendChild(imgAsset(assetFigmaCard("date-emotion-base.svg"), "sd728DateCard__emotionBase"));
  inner.appendChild(imgAsset(assetFigmaCard("date-emotion-mouth.svg"), "sd728DateCard__emotionMouth"));
  root.appendChild(inner);
  return root;
}

function dateCardNodeId(type, state) {
  if (type === "Text") return "851:6211";
  if (state === "Photo 1") return "851:6212";
  if (state === "Photo 2") return "851:6477";
  if (state === "Photo 3") return "851:6507";
  return "851:6211";
}

/**
 * @param {{ type?: "Text" | "Has Image"; state?: "-" | "Photo 1" | "Photo 2" | "Photo 3"; decorative?: boolean }} props
 */
export function createDateCard728(props = {}) {
  const type = props.type ?? "Text";
  const state = props.state ?? "-";
  const decorative = props.decorative === true;
  const hasPhotos = type === "Has Image" && state !== "-" && ["Photo 1", "Photo 2", "Photo 3"].includes(state);
  const n = hasPhotos ? Number(String(state).replace(/\D/g, "")) || 1 : 0;

  const root = document.createElement("div");
  root.className = `sd728DateCard${hasPhotos ? " sd728DateCard--hasPhotos" : ""}`;
  root.setAttribute("data-figma-node", dateCardNodeId(type, state));
  root.setAttribute("data-name", "Date Card");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const contents = h("div", "sd728DateCard__contents");
  const header = h("div", "sd728DateCard__header");
  header.setAttribute("data-name", "Header");
  header.appendChild(createDateCardEmotion728());
  const time = h("div", "sd728DateCard__time");
  time.setAttribute("data-name", "Time");
  time.appendChild(h("span", "sd728DateCard__timeLabel", "Time"));
  time.appendChild(h("span", "sd728DateCard__timeVal", "00:00"));
  header.appendChild(time);
  contents.appendChild(header);

  const body = h("div", "sd728DateCard__body");
  const preview = h("div", "sd728DateCard__preview");
  preview.appendChild(h("p", null, "글 내용 미리보기"));
  preview.appendChild(h("p", null, "글 내용 미리보기"));
  preview.appendChild(h("p", null, "글 내용 미리보기 (최대 3줄)"));
  body.appendChild(preview);
  contents.appendChild(body);
  root.appendChild(contents);

  if (hasPhotos && n > 0) {
    const strip = h("div", "sd728DateCard__photoStrip");
    strip.setAttribute("data-name", "Photo");
    for (let i = 0; i < n; i += 1) {
      const cell = h("div", "sd728DateCard__photoCell");
      cell.setAttribute("data-name", "Graphic Area");
      const icon = h("div", "sd728DateCard__photoIcon");
      icon.appendChild(imgAsset(assetFigmaCard("graphic-placeholder.svg"), "sd728DateCard__photoIconImg"));
      cell.appendChild(icon);
      strip.appendChild(cell);
    }
    root.appendChild(strip);
  }

  return root;
}

function createDateCardBoard728() {
  const stack = h("div", "sdCardStaticStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_DATE.nodeId);
  stack.appendChild(createDateCard728({ type: "Text", state: "-" }));
  stack.appendChild(createDateCard728({ type: "Has Image", state: "Photo 1" }));
  stack.appendChild(createDateCard728({ type: "Has Image", state: "Photo 2" }));
  stack.appendChild(createDateCard728({ type: "Has Image", state: "Photo 3" }));
  return stack;
}

const DEMO_PHOTO_STATES = /** @type {const} */ (["Photo 1", "Photo 2", "Photo 3"]);

/**
 * Date / Fitness 공통 예시: Type 세그먼트만 두고, Has Image(또는 동일 개념)일 때 미리보기 클릭으로 Photo 1→2→3 순환.
 * @param {HTMLElement} colRight
 * @param {{
 *   nonImageType: string,
 *   imageType: string,
 *   nonImageLabel: string,
 *   imageLabel: string,
 *   typeAriaLabel: string,
 *   create: (p: { type: string; state: string; decorative: true }) => HTMLElement,
 * }} cfg
 */
function appendCardLiveTypePhotoDemo(colRight, cfg) {
  const { nonImageType, imageType, nonImageLabel, imageLabel, typeAriaLabel, create } = cfg;
  /** @type {string} */
  let type = nonImageType;
  /** @type {number} */
  let photoI = 0;

  const stateLine = h("p", "sdBtnDemo__stateLine", "");

  const typeRow = h("div", "sdBtnDemo__typeRow");
  typeRow.appendChild(h("p", "sdBtnDemo__typeLabel", "Type"));
  const typeGroup = h("div", "sdBtnDemo__typeGroup");
  typeGroup.setAttribute("role", "group");
  typeGroup.setAttribute("aria-label", typeAriaLabel);

  const btnNon = document.createElement("button");
  btnNon.type = "button";
  btnNon.className = "sdBtnDemo__typeBtn sdBtnDemo__typeBtn--active";
  btnNon.textContent = nonImageLabel;

  const btnImg = document.createElement("button");
  btnImg.type = "button";
  btnImg.className = "sdBtnDemo__typeBtn";
  btnImg.textContent = imageLabel;

  typeGroup.appendChild(btnNon);
  typeGroup.appendChild(btnImg);
  typeRow.appendChild(typeGroup);
  colRight.appendChild(typeRow);
  colRight.appendChild(stateLine);

  const preview = h("div", "sdCardLivePreview");

  function isImageType() {
    return type === imageType;
  }

  function currentState() {
    return isImageType() ? DEMO_PHOTO_STATES[photoI] : "-";
  }

  function syncTypeBtns() {
    const onNon = type === nonImageType;
    btnNon.classList.toggle("sdBtnDemo__typeBtn--active", onNon);
    btnImg.classList.toggle("sdBtnDemo__typeBtn--active", !onNon);
    btnNon.setAttribute("aria-pressed", onNon ? "true" : "false");
    btnImg.setAttribute("aria-pressed", !onNon ? "true" : "false");
  }

  function syncPreviewChrome() {
    preview.classList.toggle("sdCardLivePreview--photoCycle", isImageType());
    if (isImageType()) {
      preview.setAttribute("role", "button");
      preview.tabIndex = 0;
      preview.setAttribute(
        "aria-label",
        `미리보기. 현재 ${DEMO_PHOTO_STATES[photoI]}. 클릭하면 다음 Photo로 바뀝니다.`,
      );
    } else {
      preview.removeAttribute("role");
      preview.removeAttribute("tabindex");
      preview.removeAttribute("aria-label");
    }
  }

  function refresh() {
    const st = currentState();
    stateLine.textContent = `Type=${type}, State=${st}`;
    preview.replaceChildren(create({ type, state: st, decorative: true }));
    syncTypeBtns();
    syncPreviewChrome();
  }

  btnNon.addEventListener("click", () => {
    if (type === nonImageType) return;
    type = nonImageType;
    photoI = 0;
    refresh();
  });
  btnImg.addEventListener("click", () => {
    if (type === imageType) return;
    type = imageType;
    photoI = 0;
    refresh();
  });

  function onPhotoAdvance(e) {
    if (!isImageType()) return;
    e.preventDefault();
    photoI = (photoI + 1) % DEMO_PHOTO_STATES.length;
    refresh();
  }
  preview.addEventListener("click", onPhotoAdvance);
  preview.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") onPhotoAdvance(e);
  });

  colRight.appendChild(preview);
  refresh();
}

function mountDateCard728Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Date Card");
  sub.appendChild(h3);
  const row = h("div", "sdBtnDemoRow sdCard64DemoRow");
  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createDateCardBoard728());
  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));
  appendCardLiveTypePhotoDemo(colRight, {
    nonImageType: "Text",
    imageType: "Has Image",
    nonImageLabel: "Text",
    imageLabel: "Has Image",
    typeAriaLabel: "Date card type",
    create: (p) => createDateCard728(p),
  });
  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

/* ---------- Fitness Card 1327:88765 ---------- */

function fitnessMark1327(kind) {
  const wrap = h("div", "sd1327Fitness__mark");
  const inner = h("div", "sd1327Fitness__markInner");
  const asset =
    kind === "몸무게"
      ? graphicAssets.fitnessMarkWeight
      : kind === "걸음 수"
        ? graphicAssets.fitnessMarkSteps
        : graphicAssets.fitnessMarkTime;
  inner.appendChild(imgAsset(graphicAssetUrl(asset), "sd1327Fitness__markImg"));
  wrap.appendChild(inner);
  return wrap;
}

function fitnessStatColumn1327(kind, label, num, unit) {
  const col = h("div", "sd1327Fitness__statCol");
  col.appendChild(fitnessMark1327(kind));
  const text = h("div", "sd1327Fitness__statText");
  text.appendChild(h("p", "sd1327Fitness__statLabel", label));
  const val = h("div", "sd1327Fitness__statVal");
  val.appendChild(h("span", null, num));
  val.appendChild(h("span", null, unit));
  text.appendChild(val);
  col.appendChild(text);
  return col;
}

function fitnessPhotoStrip1327(n) {
  const strip = h("div", "sd1327Fitness__photoStrip");
  strip.setAttribute("data-name", "Photo");
  strip.setAttribute("data-photo-count", String(n));
  for (let i = 0; i < n; i += 1) {
    const cell = h("div", "sd1327Fitness__photoCell");
    cell.setAttribute("data-name", "Graphic Area");
    const icon = h("div", "sd1327Fitness__photoIcon");
    icon.appendChild(imgAsset(assetFigmaCard("graphic-placeholder.svg"), "sd1327Fitness__photoIconImg"));
    cell.appendChild(icon);
    strip.appendChild(cell);
  }
  return strip;
}

function fitnessCardNodeId(type, state) {
  if (type === "Default") return "1043:62425";
  if (state === "Photo 1") return "1327:88764";
  if (state === "Photo 2") return "1327:88763";
  if (state === "Photo 3") return "1327:88762";
  return "1043:62425";
}

/**
 * @param {{ type?: "Default" | "Has Image"; state?: "-" | "Photo 1" | "Photo 2" | "Photo 3"; decorative?: boolean }} props
 */
export function createFitnessCard1327(props = {}) {
  const type = props.type ?? "Default";
  const state = props.state ?? "-";
  const decorative = props.decorative === true;
  const photoN =
    type === "Has Image" && ["Photo 1", "Photo 2", "Photo 3"].includes(state)
      ? Number(String(state).replace(/\D/g, "")) || 1
      : 0;

  const root = document.createElement("div");
  root.className = "sd1327FitnessCard";
  root.setAttribute("data-figma-node", fitnessCardNodeId(type, state));
  root.setAttribute("data-name", "Fitness Card");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const head = h("div", "sd1327FitnessCard__head");
  head.setAttribute("data-name", "Fitness");
  const iconHost = h("div", "sd1327FitnessCard__iconHost");
  const iconInner = h("div", "sd1327FitnessCard__iconInner");
  iconInner.appendChild(
    imgAsset(graphicAssetUrl(graphicAssets.fitnessSmallRunning), "sd1327FitnessCard__iconImg"),
  );
  iconHost.appendChild(iconInner);
  const titleRow = h("div", "sd1327FitnessCard__titleRow");
  titleRow.setAttribute("data-name", "Title");
  titleRow.appendChild(h("p", "sd1327FitnessCard__title", "운동명"));
  const cal = h("div", "sd1327FitnessCard__cal");
  cal.appendChild(h("div", "sd1327FitnessCard__calLabel", "소모 칼로리"));
  const calVal = h("div", "sd1327FitnessCard__calVal");
  calVal.appendChild(h("span", null, "9,999"));
  calVal.appendChild(h("span", null, "Kcal"));
  cal.appendChild(calVal);
  titleRow.appendChild(cal);
  head.appendChild(iconHost);
  head.appendChild(titleRow);
  root.appendChild(head);

  root.appendChild(h("div", "sd1327FitnessCard__hr"));

  const detail = h("div", "sd1327FitnessCard__detail");
  detail.appendChild(h("p", "sd1327FitnessCard__detailTitle", "세부 기록"));
  const stats = h("div", "sd1327FitnessCard__stats");
  stats.appendChild(fitnessStatColumn1327("몸무게", "몸무게", "999", "Kg"));
  stats.appendChild(h("div", "sd1327FitnessCard__vdiv"));
  stats.appendChild(fitnessStatColumn1327("운동 시간", "운동 시간", "999", "분"));
  stats.appendChild(h("div", "sd1327FitnessCard__vdiv"));
  stats.appendChild(fitnessStatColumn1327("걸음 수", "걸음 수", "9,999", "걸음"));
  detail.appendChild(stats);
  root.appendChild(detail);

  root.appendChild(h("div", "sd1327FitnessCard__hr"));

  const note = h("div", "sd1327FitnessCard__note");
  note.appendChild(h("p", "sd1327FitnessCard__noteTitle", "운동 기록"));
  const noteBody = h("div", "sd1327FitnessCard__noteBody");
  const prev = h("div", "sd1327FitnessCard__preview");
  prev.appendChild(h("p", null, "글 내용 미리보기"));
  prev.appendChild(h("p", null, "글 내용 미리보기"));
  prev.appendChild(h("p", null, "글 내용 미리보기 (최대 3줄)"));
  noteBody.appendChild(prev);
  const time = h("div", "sd1327FitnessCard__time");
  time.setAttribute("data-name", "Time");
  time.appendChild(h("span", "sd1327FitnessCard__timeLabel", "Time"));
  time.appendChild(h("span", "sd1327FitnessCard__timeVal", "00:00"));
  noteBody.appendChild(time);
  note.appendChild(noteBody);
  root.appendChild(note);

  if (photoN > 0) {
    root.appendChild(fitnessPhotoStrip1327(photoN));
  }

  return root;
}

function createFitnessCardBoard1327() {
  const stack = h("div", "sdCardStaticStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_FITNESS.nodeId);
  stack.appendChild(createFitnessCard1327({ type: "Default", state: "-" }));
  stack.appendChild(createFitnessCard1327({ type: "Has Image", state: "Photo 1" }));
  stack.appendChild(createFitnessCard1327({ type: "Has Image", state: "Photo 2" }));
  stack.appendChild(createFitnessCard1327({ type: "Has Image", state: "Photo 3" }));
  return stack;
}

function mountFitnessCard1327Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Fitness Card");
  sub.appendChild(h3);
  const row = h("div", "sdBtnDemoRow sdCard64DemoRow");
  const colLeft = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  colLeft.appendChild(createFitnessCardBoard1327());
  const colRight = h("div", "sdBtnDemo__col sdBtnDemo__col--live");
  colRight.appendChild(h("p", "sdBtnDemo__colTitle", "예시"));
  appendCardLiveTypePhotoDemo(colRight, {
    nonImageType: "Default",
    imageType: "Has Image",
    nonImageLabel: "Default",
    imageLabel: "Has Image",
    typeAriaLabel: "Fitness card type",
    create: (p) => createFitnessCard1327(p),
  });
  row.append(colLeft, colRight);
  sub.appendChild(row);
  container.appendChild(sub);
}

/* ---------- Fitness List Card 1019:31361 ---------- */

function createFitnessSmall1019() {
  const wrap = h("div", "sd1019FitnessList__glyph");
  wrap.setAttribute("data-node-id", "1019:24417");
  const inner = h("div", "sd1019FitnessList__glyphInner");
  inner.appendChild(imgAsset(graphicAssetUrl(graphicAssets.fitnessSmallRunning), "sd1019FitnessList__glyphImg"));
  wrap.appendChild(inner);
  return wrap;
}

function createArrowRightMedium() {
  const root = h("div", "sdListCardArrow");
  root.setAttribute("data-name", "Arrow_Right");
  const inner = h("div", "sdListCardArrow__inner");
  inner.appendChild(imgAsset(assetFigmaCard("arrow-right-medium.svg"), "sdListCardArrow__img"));
  root.appendChild(inner);
  return root;
}

/**
 * @param {{ title?: string; decorative?: boolean }} [props]
 */
export function createFitnessListCard1019(props = {}) {
  const title = props.title ?? "운동명";
  const decorative = props.decorative === true;
  const root = h("div", "sd1019FitnessListCard");
  root.setAttribute("data-figma-node", FIGMA_CARD_FITNESS_LIST.nodeId);
  root.setAttribute("data-name", "Fitness List Card");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const row = h("div", "sd1019FitnessListCard__row");
  row.setAttribute("data-node-id", "1019:31330");
  row.appendChild(createFitnessSmall1019());
  row.appendChild(createArrowRightMedium());
  const titleWrap = h("div", "sd1019FitnessListCard__titleWrap");
  titleWrap.setAttribute("data-node-id", "1019:27850");
  titleWrap.appendChild(h("p", "sd1019FitnessListCard__title", title));
  row.appendChild(titleWrap);
  root.appendChild(row);
  return root;
}

function mountFitnessListCard1019Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Fitness List Card");
  sub.appendChild(h3);
  const col = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  const stack = h("div", "sdCardStaticStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_FITNESS_LIST.nodeId);
  stack.appendChild(createFitnessListCard1019({ title: "운동명" }));
  col.appendChild(stack);
  sub.appendChild(col);
  container.appendChild(sub);
}

/* ---------- Habit List Card 1268:80915 ---------- */

function createHabitSmall1268() {
  const wrap = h("div", "sd1268HabitList__glyph");
  wrap.setAttribute("data-node-id", "1268:77395");
  const a = h("div", "sd1268HabitList__glyphA");
  a.appendChild(imgAsset(assetFigmaCard("habit-small-a.svg"), "sd1268HabitList__glyphImg"));
  const b = h("div", "sd1268HabitList__glyphB");
  b.appendChild(imgAsset(assetFigmaCard("habit-small-b.svg"), "sd1268HabitList__glyphImg"));
  wrap.appendChild(a);
  wrap.appendChild(b);
  return wrap;
}

/**
 * @param {{ title?: string; decorative?: boolean }} [props]
 */
export function createHabitListCard1268(props = {}) {
  const title = props.title ?? "습관명";
  const decorative = props.decorative === true;
  const root = h("div", "sd1268HabitListCard");
  root.setAttribute("data-figma-node", FIGMA_CARD_HABIT_LIST.nodeId);
  root.setAttribute("data-name", "Habit List Card");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const row = h("div", "sd1268HabitListCard__row");
  row.setAttribute("data-node-id", "1268:80869");
  row.appendChild(createHabitSmall1268());
  row.appendChild(createArrowRightMedium());
  const titleWrap = h("div", "sd1268HabitListCard__titleWrap");
  titleWrap.setAttribute("data-node-id", "1268:80872");
  titleWrap.appendChild(h("p", "sd1268HabitListCard__title", title));
  row.appendChild(titleWrap);
  root.appendChild(row);
  return root;
}

function mountHabitListCard1268Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Habit List Card");
  sub.appendChild(h3);
  const col = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  const stack = h("div", "sdCardStaticStack");
  stack.setAttribute("data-figma-node", FIGMA_CARD_HABIT_LIST.nodeId);
  stack.appendChild(createHabitListCard1268({ title: "습관명" }));
  col.appendChild(stack);
  sub.appendChild(col);
  container.appendChild(sub);
}

/* ---------- Habit Card 1329:139004 ---------- */

/**
 * @param {{ alarm?: boolean; mainPin?: boolean; title?: string; decorative?: boolean }} [props]
 */
export function createHabitCard1329(props = {}) {
  const alarm = props.alarm !== false;
  const mainPin = props.mainPin === true;
  const title = props.title ?? "습관명";
  const decorative = props.decorative === true;

  const root = h("div", `sd1329HabitCard${mainPin ? " sd1329HabitCard--mainPin" : ""}`);
  root.setAttribute("data-figma-node", FIGMA_CARD_HABIT.nodeId);
  root.setAttribute("data-name", "Habit Card");
  if (decorative) root.setAttribute("aria-hidden", "true");

  const row = h("div", "sd1329HabitCard__row");
  row.setAttribute("data-node-id", "1329:135671");
  const lead = h("div", "sd1329HabitCard__lead");
  lead.setAttribute("data-node-id", "1329:139003");

  const iconHost = h("div", "sd1329HabitCard__iconHost");
  iconHost.setAttribute("data-name", "Habit Icon");
  iconHost.setAttribute("data-node-id", "1329:135692");
  const iconInner = h("div", "sd1329HabitCard__iconInner");
  iconInner.appendChild(createHabitSmall1268());
  iconHost.appendChild(iconInner);

  const copy = h("div", "sd1329HabitCard__copy");
  copy.setAttribute("data-node-id", "1828:141083");
  copy.appendChild(h("p", "sd1329HabitCard__title", title));
  if (alarm) {
    const time = h("div", "sd1329HabitCard__time");
    time.setAttribute("data-name", "Time");
    time.setAttribute("data-node-id", "1828:143202");
    time.appendChild(h("span", "sd1329HabitCard__timePart", "Time"));
    time.appendChild(h("span", "sd1329HabitCard__timePart", "00:00"));
    copy.appendChild(time);
  }
  lead.appendChild(iconHost);
  lead.appendChild(copy);
  row.appendChild(lead);
  row.appendChild(createCardRecordCeck(false));
  root.appendChild(row);

  if (mainPin) {
    const pin = h("div", "sd1329HabitCard__mainPin");
    pin.setAttribute("data-name", "Main Pin");
    pin.setAttribute("data-node-id", "1828:176200");
    const pinIn = h("div", "sd1329HabitCard__mainPinInner");
    pinIn.appendChild(imgAsset(assetFigmaCard("habit-pin-union.svg"), "sd1329HabitCard__mainPinImg"));
    pin.appendChild(pinIn);
    root.appendChild(pin);
  }

  return root;
}

const HABIT1329_STATIC = [
  { alarm: true, mainPin: false },
  { alarm: true, mainPin: true },
  { alarm: false, mainPin: false },
  { alarm: false, mainPin: true },
];

function createHabitCardBoard1329() {
  const board = h("div", "sd1329HabitCardBoard");
  board.setAttribute("data-figma-node", FIGMA_CARD_HABIT.nodeId);
  for (const s of HABIT1329_STATIC) {
    board.appendChild(createHabitCard1329({ ...s, title: "습관명" }));
  }
  return board;
}

function mountHabitCard1329Block(container) {
  const sub = h("div", "figma-subsection");
  const h3 = h("h3", "figma-subsection__title", "");
  h3.append("Habit Card");
  sub.appendChild(h3);
  const col = h("div", "sdBtnDemo__col sdBtnDemo__col--board");
  col.appendChild(createHabitCardBoard1329());
  sub.appendChild(col);
  container.appendChild(sub);
}

/* ---------- mount ---------- */

export function mountCardSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  meta.append("Figma Link · ");
  meta.appendChild(figmaLink(FIGMA_CARD.url, "Open in Figma"));
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Card"));

  mountCardRecordType64Block(container);
  mountOnboardingGoal555Block(container);
  mountDateCard728Block(container);
  mountFitnessCard1327Block(container);
  mountFitnessListCard1019Block(container);
  mountHabitListCard1268Block(container);
  mountHabitCard1329Block(container);
}
