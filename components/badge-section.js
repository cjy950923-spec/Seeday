/**
 * Figma: Bedge (badge) section — node 64:616
 * - Bedge (스트릭): frame 555:8668
 * - Schedule (일정 행 칩): Fill/Blank/Number — Bedge와 별도 컴포넌트
 * - Goal Day: 2281:141391
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-616&m=dev
 */

export const FIGMA_BADGE = {
  nodeId: "Figma link",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-616&m=dev",
};

/** Figma `Bedge` frame — 10일 / 20일 / 30일 스트릭 벳지 */
export const FIGMA_BEDGE_STREAK = {
  nodeId: "예시",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=555-8668&m=dev",
};

/** 일정 행에 쓰는 Schedule 칩 (Bedge 스트릭과 별개) */
export const FIGMA_SCHEDULE_FILL = {
  nodeId: "721:4188",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=721-4188&m=dev",
};
export const FIGMA_SCHEDULE_BLANK = {
  nodeId: "721:4187",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=721-4187&m=dev",
};
export const FIGMA_SCHEDULE_NUMBER = {
  nodeId: "721:4196",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=721-4196&m=dev",
};

/** Figma `Goal Day` — 2281:141391 (Calendar_Mark 일상 · D-카운트) */
export const FIGMA_GOAL_DAY = {
  nodeId: "2281:141391",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=2281-141391&m=dev",
};

const GOAL_DAY_MARK_SRC = new URL(
  "../assets/goal-day-calendar-mark-daily-on.svg",
  import.meta.url,
).href;

export const BADGE_VARIANTS = {
  bedge: { state: ["10일", "20일", "30일"] },
};

/** 뷰어 적용 예시에 쓰는 기본 라벨 (표기: Badge) */
export const BEDGE_DEFAULT_TEXT = "Badge";

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

/**
 * @param {"10일" | "20일" | "30일"} state
 * @param {string} [text]
 * @returns {HTMLSpanElement}
 */
export function createBedge(state, text = BEDGE_DEFAULT_TEXT) {
  const suf = state === "10일" ? "10" : state === "20일" ? "20" : "30";
  const el = document.createElement("span");
  el.className = `sdBedge sdBedge--${suf}`;
  el.setAttribute("data-state", state);
  el.setAttribute("data-figma-node", "555:8668");
  const inner = document.createElement("span");
  inner.className = "sdBedge__text";
  inner.textContent = text;
  el.appendChild(inner);
  return el;
}

export const SCHEDULE_SAMPLE_LABEL = "일정명일정명";
export const SCHEDULE_NUMBER_SAMPLE = "2";

function scheduleBar() {
  const el = document.createElement("span");
  el.className = "sdSchedule__bar";
  el.setAttribute("aria-hidden", "true");
  return el;
}

function schedulePlus() {
  const el = document.createElement("span");
  el.className = "sdSchedule__plus";
  el.setAttribute("aria-hidden", "true");
  return el;
}

/** @returns {HTMLDivElement} */
export function createScheduleFill() {
  const root = document.createElement("div");
  root.className = "sdSchedule sdSchedule--fill";
  root.setAttribute("data-figma-node", FIGMA_SCHEDULE_FILL.nodeId);
  root.appendChild(scheduleBar());
  const wrap = document.createElement("div");
  wrap.className = "sdSchedule__labelWrap";
  wrap.appendChild(h("span", "sdSchedule__label", SCHEDULE_SAMPLE_LABEL));
  root.appendChild(wrap);
  return root;
}

/** @returns {HTMLDivElement} */
export function createScheduleBlank() {
  const root = document.createElement("div");
  root.className = "sdSchedule sdSchedule--blank";
  root.setAttribute("data-figma-node", FIGMA_SCHEDULE_BLANK.nodeId);
  root.appendChild(scheduleBar());
  const wrap = document.createElement("div");
  wrap.className = "sdSchedule__labelWrap";
  wrap.appendChild(h("span", "sdSchedule__label", SCHEDULE_SAMPLE_LABEL));
  root.appendChild(wrap);
  return root;
}

/** @returns {HTMLDivElement} */
export function createScheduleNumber() {
  const root = document.createElement("div");
  root.className = "sdSchedule sdSchedule--number";
  root.setAttribute("data-figma-node", FIGMA_SCHEDULE_NUMBER.nodeId);
  root.appendChild(schedulePlus());
  root.appendChild(h("span", "sdSchedule__digit", SCHEDULE_NUMBER_SAMPLE));
  return root;
}

/**
 * @param {{ days?: string }} [options] `days` — D- 뒤에 붙는 숫자(또는 플레이스홀더). 기본 `"N"` (Figma 심볼과 동일).
 * @returns {HTMLDivElement}
 */
export function createGoalDay(options = {}) {
  const days = options.days != null ? String(options.days) : "N";
  const root = document.createElement("div");
  root.className = "sdGoalDay";
  root.setAttribute("data-figma-node", FIGMA_GOAL_DAY.nodeId);
  root.setAttribute("role", "group");
  root.setAttribute("aria-label", `Goal Day D-${days}`);

  const mark = document.createElement("div");
  mark.className = "sdGoalDay__mark";
  mark.setAttribute("aria-hidden", "true");
  const inner = document.createElement("div");
  inner.className = "sdGoalDay__markInner";
  const img = document.createElement("img");
  img.src = GOAL_DAY_MARK_SRC;
  img.alt = "";
  inner.appendChild(img);
  mark.appendChild(inner);
  root.appendChild(mark);

  const label = document.createElement("div");
  label.className = "sdGoalDay__label";
  label.appendChild(h("span", "sdGoalDay__prefix", "D-"));
  label.appendChild(h("span", "sdGoalDay__days", days));
  root.appendChild(label);

  return root;
}

function mountGoalDayBlock(container) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Goal Day"));
  sub.appendChild(createGoalDay());
  container.appendChild(sub);
}

function mountScheduleBlock(container) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", "Schedule"));
  const row = h("div", "figma-matrix");

  const cFill = h("div", "figma-cell");
  cFill.appendChild(createScheduleFill());

  const cBlank = h("div", "figma-cell");
  cBlank.appendChild(createScheduleBlank());

  const cNum = h("div", "figma-cell");
  cNum.appendChild(createScheduleNumber());

  row.append(cFill, cBlank, cNum);
  sub.appendChild(row);
  container.appendChild(sub);
}

function mountBedgeStreakBlock(container) {
  const sub = h("div", "figma-subsection");

  const block = h("div", "sdBedgeBlock555");

  const frame = h("div", "sdBedgeFrame555");
  frame.setAttribute("role", "img");
  frame.setAttribute("aria-label", "Figma 스트릭 배지 555:8668 — 88×133");
  const inner = h("div", "sdBedgeFrame555__inner");
  BADGE_VARIANTS.bedge.state.forEach((st) => {
    inner.appendChild(createBedge(st, BEDGE_DEFAULT_TEXT));
  });
  frame.appendChild(inner);
  block.appendChild(frame);

  /** 적용 예시: State=10일 고정, text만 반영 (Figma 심볼과 동일 스타일) */
  const APPLY_STATE = "10일";

  const example = h("div", "sdBedgeExample");
  example.appendChild(h("p", "sdBedgeExample__title", "적용 예시"));

  const row = h("div", "sdBedgeExample__row");

  const fieldCol = h("div", "sdBedgeExample__field");
  const textLabel = document.createElement("label");
  textLabel.className = "sdBedgeExample__label";
  textLabel.htmlFor = "sd-bedge-example-text";
  textLabel.textContent = "text";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "sdBedgeExample__input";
  input.id = "sd-bedge-example-text";
  input.setAttribute("autocomplete", "off");
  input.setAttribute("spellcheck", "false");
  input.placeholder = BEDGE_DEFAULT_TEXT;
  input.value = BEDGE_DEFAULT_TEXT;
  input.setAttribute("aria-label", "Badge 텍스트");

  const previewHost = h("div", "sdBedgeExample__previewHost");

  fieldCol.appendChild(textLabel);
  fieldCol.appendChild(input);
  row.appendChild(fieldCol);

  example.appendChild(row);

  const previewSlot = h("div", "sdBedgeExample__previewSlot");
  previewSlot.appendChild(previewHost);
  example.appendChild(previewSlot);

  function displayText() {
    const v = input.value;
    return v.trim().length === 0 ? BEDGE_DEFAULT_TEXT : v;
  }

  function renderPreview() {
    previewHost.replaceChildren(createBedge(APPLY_STATE, displayText()));
  }

  input.addEventListener("input", renderPreview);
  renderPreview();

  block.appendChild(example);
  sub.appendChild(block);
  container.appendChild(sub);
}

/**
 * @param {HTMLElement} container
 */
export function mountBadgeSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_BADGE.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_BADGE.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Badge"));

  mountBedgeStreakBlock(container);
  mountScheduleBlock(container);
  mountGoalDayBlock(container);
}
