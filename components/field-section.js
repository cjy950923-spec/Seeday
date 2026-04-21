/**
 * Figma: Field section — node 64:405
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=64-405&m=dev
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";
import { iconAssets } from "../tokens/icon.js";

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

const CLOSE_CIRCLE_SRC = new URL(`../${iconAssets.fieldCloseCircle}`, import.meta.url).href;

function textInputField({ state, value, placeholder, disabled }) {
  const wrap = h("div", `sdTextInputField sdTextInputField--${state.toLowerCase()}`);
  const input = document.createElement("input");
  input.className = "sdTextInputField__input";
  input.type = "text";
  input.placeholder = placeholder || "";
  input.value = value || "";
  input.disabled = Boolean(disabled);
  input.autocomplete = "off";
  input.spellcheck = false;

  wrap.appendChild(input);

  const showClear = state === "Pressed" || state === "Failed";
  if (showClear) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sdTextInputField__clear";
    btn.setAttribute("aria-label", "Clear");
    btn.innerHTML = `<img alt=\"\" src=\"${CLOSE_CIRCLE_SRC}\" class=\"sdTextInputField__clearImg\" />`;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    });
    wrap.appendChild(btn);
  }

  return { wrap, input };
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

function contentsTextInputField({ state, value, placeholder, maxLength, disabled }) {
  const wrap = h("div", `sdContentsField sdContentsField--${state.toLowerCase()}`);
  const ta = document.createElement("textarea");
  ta.className = "sdContentsField__textarea";
  ta.placeholder = placeholder || "";
  ta.value = value || "";
  ta.maxLength = typeof maxLength === "number" ? maxLength : 1000;
  ta.disabled = Boolean(disabled);
  ta.autocomplete = "off";
  ta.spellcheck = false;

  const counter = h("div", "sdContentsField__counter");
  const cur = h("span", "sdContentsField__countCur", "0");
  const sep = h("span", "sdContentsField__countSep", "/");
  const max = h("span", "sdContentsField__countMax", String(ta.maxLength));
  counter.append(cur, sep, max);

  wrap.appendChild(ta);
  wrap.appendChild(counter);

  return { wrap, textarea: ta, countCur: cur, countMax: max };
}

function photoAdd(state) {
  const wrap = h("div", "sdPhotoAdd");
  const content = h("div", "sdPhotoAdd__content");
  const img = document.createElement("img");
  img.alt = "";
  img.decoding = "async";
  img.loading = "lazy";
  img.className = "sdPhotoAdd__icon";
  img.src = new URL(`../${iconAssets.camera}`, import.meta.url).href;
  const label = h("p", "sdPhotoAdd__label", "+ 사진 올리기");
  content.appendChild(img);
  content.appendChild(label);
  wrap.appendChild(content);
  return wrap;
}

function dayCell(state) {
  const root = h("div", `sdDayCell2 sdDayCell2--${state.toLowerCase()}`);

  const noPill =
    state === "Highlight"
      ? (() => {
          const pill = h("div", "sdDayCell2__noPill");
          pill.appendChild(h("p", "sdDayCell2__no", "No."));
          return pill;
        })()
      : h("p", "sdDayCell2__no", "No.");
  root.appendChild(noPill);

  const markWrap = h("div", "sdDayCell2__markWrap");
  const dailyMark = h("div", "sdDayCell2__dailyMark");

  if (state !== "Disable") {
    // calendar mark (습관 on) — tokenized asset
    const mark = document.createElement("img");
    mark.alt = "";
    mark.decoding = "async";
    mark.loading = "lazy";
    mark.className = "sdDayCell2__mark";
    mark.src = new URL(`../${iconAssets.calendarMarkHabitOn}`, import.meta.url).href;
    dailyMark.appendChild(mark);

    // dot (optional) — keep as example visible for fidelity
    const dot = document.createElement("img");
    dot.alt = "";
    dot.decoding = "async";
    dot.loading = "lazy";
    dot.className = "sdDayCell2__dot";
    dot.src = new URL(
      `../${state === "Highlight" ? iconAssets.daycellDotHighlight : iconAssets.daycellDotDefault}`,
      import.meta.url,
    ).href;
    dailyMark.appendChild(dot);
  }

  markWrap.appendChild(dailyMark);

  const schedule = h("div", "sdDayCell2__schedule");
  if (state !== "Disable") {
    const badge = h("div", `sdDayCell2__badge ${state === "Highlight" ? "sdDayCell2__badge--blank" : "sdDayCell2__badge--fill"}`);
    badge.appendChild(h("div", "sdDayCell2__badgeBar"));
    const badgeText = h("div", "sdDayCell2__badgeText");
    badgeText.textContent = "일정명일정명";
    badge.appendChild(badgeText);
    schedule.appendChild(badge);

    const count = h("div", "sdDayCell2__count");
    const plus = h("span", "sdDayCell2__plus");
    const num = h("span", "sdDayCell2__countNum", "2");
    count.appendChild(plus);
    count.appendChild(num);
    schedule.appendChild(count);
  } else {
    schedule.appendChild(h("div", "sdDayCell2__scheduleBlank"));
  }

  markWrap.appendChild(schedule);
  root.appendChild(markWrap);
  return root;
}

function noticsIcon() {
  const wrap = h("div", "sdNoticsIcon");
  const img = document.createElement("img");
  img.alt = "";
  img.decoding = "async";
  img.loading = "lazy";
  img.className = "sdNoticsIcon__img";
  img.src = new URL(`../${iconAssets.noticsDaily}`, import.meta.url).href;
  wrap.appendChild(img);
  return wrap;
}

function notificationCard({
  state,
  typeText = "하루 기록",
  dateText = "Date",
  textValue,
}) {
  const on = state === "On";
  const root = h("div", `sdNotiCard ${on ? "sdNotiCard--on" : "sdNotiCard--off"}`);
  const row = h("div", "sdNotiCard__row");
  row.appendChild(noticsIcon());

  const content = h("div", "sdNotiCard__content");
  const head = h("div", "sdNotiCard__head");
  head.appendChild(h("div", "sdNotiCard__type", typeText));
  head.appendChild(h("div", "sdNotiCard__date", dateText));
  content.appendChild(head);

  const body = h("div", "sdNotiCard__body");
  body.appendChild(h("p", "sdNotiCard__text", textValue || ""));
  content.appendChild(body);

  row.appendChild(content);
  root.appendChild(row);
  return root;
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
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Field"));

  // Text Input Field (node 64:261) — 요청 레이아웃
  // - 좌측: 2×2 grid로 4개 상태 고정 표시
  // - 우측: 클릭으로 상태 순환 + 실제 타이핑 가능한 데모
  const textInputSub = h("div", "figma-subsection");
  textInputSub.appendChild(h("h3", "figma-subsection__title", "Text Input Field"));

  const layout = h("div", "sdFieldTextInputLayout");
  const left = h("div", "sdFieldTextInputLeft");
  const right = h("div", "sdFieldTextInputRight");

  // Left 2×2 variants
  const grid = h("div", "sdFieldTextInputGrid");
  const variants = /** @type {const} */ ([
    ["Default", { value: "", placeholder: "닉네임 혹은 이름을 입력해 주세요." }],
    ["Pressed", { value: "Text area", placeholder: "" }],
    ["Failed", { value: "Text area", placeholder: "" }],
    ["Completed", { value: "Text area", placeholder: "" }],
  ]);

  for (const [state, cfg] of variants) {
    const cell = h("div", "sdFieldTextInputCell");
    cell.appendChild(h("div", "sdFieldTextInputLabel", `State=${state}`));
    const { wrap } = textInputField({ state, ...cfg, disabled: true });
    cell.appendChild(wrap);
    grid.appendChild(cell);
  }
  left.appendChild(grid);

  // Right interactive demo
  const demo = h("div", "figma-interactive");
  const stateEl = h("p", "figma-interactive__state", "");
  const demoStage = h("div", "figma-interactive__stage");
  demoStage.setAttribute("tabindex", "0");
  const demoVp = h("div", "figma-interactive__viewport");
  demoStage.appendChild(demoVp);
  demo.appendChild(stateEl);
  demo.appendChild(demoStage);
  demo.appendChild(
    h(
      "p",
      "figma-interactive__hint",
      "상태 규칙: (1) 입력 비활성+빈값=Default (2) 클릭으로 활성+빈값=Completed(커서) (3) 1글자 이상=Pressed (4) 특수문자 포함=Failed",
    ),
  );
  right.appendChild(demo);

  layout.appendChild(left);
  layout.appendChild(right);
  textInputSub.appendChild(layout);
  container.appendChild(textInputSub);

  let active = false;
  let draft = "";

  const SPECIAL_RE = /[^0-9A-Za-z\u3131-\u318E\uAC00-\uD7A3\s]/; // 영문/숫자/한글/공백 외는 특수문자로 취급

  const computeState = () => {
    if (SPECIAL_RE.test(draft)) return "Failed";
    if (draft.length >= 1) return "Pressed";
    // empty
    return active ? "Completed" : "Default";
  };

  // Demo input은 DOM을 교체하지 않고(포커스/IME 유지), 상태만 갱신한다.
  const placeholder = "닉네임 혹은 이름을 입력해 주세요.";
  const demoField = textInputField({ state: "Default", value: "", placeholder, disabled: false });
  demoVp.appendChild(demoField.wrap);

  const ensureClearButton = (show) => {
    const existing = demoField.wrap.querySelector(".sdTextInputField__clear");
    if (show) {
      if (existing) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sdTextInputField__clear";
      btn.setAttribute("aria-label", "Clear");
      btn.innerHTML = `<img alt=\"\" src=\"${CLOSE_CIRCLE_SRC}\" class=\"sdTextInputField__clearImg\" />`;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        demoField.input.value = "";
        draft = "";
        demoField.input.focus();
        sync();
      });
      demoField.wrap.appendChild(btn);
    } else if (existing) {
      existing.remove();
    }
  };

  const sync = () => {
    const state = computeState();
    stateEl.textContent = `State=${state}`;
    demoField.wrap.className = `sdTextInputField sdTextInputField--${state.toLowerCase()}`;

    // placeholder: empty일 때만 노출
    demoField.input.placeholder = draft.length ? "" : placeholder;

    // 입력값 동기화(불필요한 덮어쓰기 방지)
    if (demoField.input.value !== draft) {
      demoField.input.value = draft;
    }

    ensureClearButton(state === "Pressed" || state === "Failed");
  };

  demoField.input.addEventListener("focus", () => {
    active = true;
    sync();
  });
  demoField.input.addEventListener("blur", () => {
    active = false;
    sync();
  });
  demoField.input.addEventListener("input", () => {
    draft = demoField.input.value;
    sync();
  });
  demoField.input.addEventListener("compositionend", () => {
    draft = demoField.input.value;
    sync();
  });

  demoStage.addEventListener("click", () => {
    demoField.input.focus();
  });
  demoStage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      demoField.input.focus();
    }
  });

  sync();

  // Contents Text Input Field (node 345:984)
  // 요청:
  // - 좌측: Default만 고정
  // - 우측: 실제 입력 가능한 데모 (입력 시작 => Pressed) + 글자수 카운터(0/1000)
  const contentsSub = h("div", "figma-subsection");
  contentsSub.appendChild(h("h3", "figma-subsection__title", "Contents Text Input Field"));

  const contentsLayout = h("div", "sdFieldContentsLayout");
  const contentsLeft = h("div", "sdFieldContentsLeft");
  const contentsRight = h("div", "sdFieldContentsRight");

  // Left: Default only (static)
  const leftCell = h("div", "sdFieldContentsCell");
  leftCell.appendChild(h("div", "sdFieldTextInputLabel", "State=Default"));
  const leftDefault = contentsTextInputField({
    state: "Default",
    value: "",
    placeholder: "나의 하루는 어땠나요?",
    maxLength: 1000,
    disabled: true,
  });
  leftDefault.countCur.textContent = "0";
  contentsLeft.appendChild(leftCell);
  leftCell.appendChild(leftDefault.wrap);

  // Right: interactive demo
  const demoWrap = h("div", "figma-interactive");
  const demoStateEl = h("p", "figma-interactive__state", "");
  const demoStage2 = h("div", "figma-interactive__stage");
  demoStage2.setAttribute("tabindex", "0");
  const demoVp2 = h("div", "figma-interactive__viewport");
  demoStage2.appendChild(demoVp2);
  demoWrap.appendChild(demoStateEl);
  demoWrap.appendChild(demoStage2);
  demoWrap.appendChild(
    h("p", "figma-interactive__hint", "텍스트를 입력하면 Pressed 상태로 바뀌고, 우측 하단 카운터가 0/1000 형태로 증가합니다."),
  );
  contentsRight.appendChild(demoWrap);

  contentsLayout.appendChild(contentsLeft);
  contentsLayout.appendChild(contentsRight);
  contentsSub.appendChild(contentsLayout);
  container.appendChild(contentsSub);

  let contentsDraft = "";
  let contentsActive = false;
  const maxLen = 1000;

  const contentsComputeState = () => {
    if (contentsDraft.length >= 1) return "Pressed";
    return "Default";
  };

  const contentsDemo = contentsTextInputField({
    state: "Default",
    value: "",
    placeholder: "나의 하루는 어땠나요?",
    maxLength: maxLen,
    disabled: false,
  });
  demoVp2.appendChild(contentsDemo.wrap);

  const contentsSync = () => {
    const state = contentsComputeState();
    demoStateEl.textContent = `State=${state}`;
    contentsDemo.wrap.className = `sdContentsField sdContentsField--${state.toLowerCase()}`;
    // value sync
    if (contentsDemo.textarea.value !== contentsDraft) contentsDemo.textarea.value = contentsDraft;
    // counter
    contentsDemo.countCur.textContent = String(contentsDraft.length);
  };

  contentsDemo.textarea.addEventListener("focus", () => {
    contentsActive = true;
    contentsSync();
  });
  contentsDemo.textarea.addEventListener("blur", () => {
    contentsActive = false;
    contentsSync();
  });
  contentsDemo.textarea.addEventListener("input", () => {
    contentsDraft = contentsDemo.textarea.value.slice(0, maxLen);
    if (contentsDemo.textarea.value !== contentsDraft) contentsDemo.textarea.value = contentsDraft;
    contentsSync();
  });
  contentsDemo.textarea.addEventListener("compositionend", () => {
    contentsDraft = contentsDemo.textarea.value.slice(0, maxLen);
    if (contentsDemo.textarea.value !== contentsDraft) contentsDemo.textarea.value = contentsDraft;
    contentsSync();
  });

  demoStage2.addEventListener("click", () => {
    contentsDemo.textarea.focus();
  });
  demoStage2.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      contentsDemo.textarea.focus();
    }
  });

  contentsSync();

  const photoSub = h("div", "figma-subsection");
  photoSub.appendChild(h("h3", "figma-subsection__title", "Photo Add"));
  photoSub.appendChild(photoAdd("Default"));
  container.appendChild(photoSub);

  // Day Cell (728:5029) — 요청: 데모 없이 3개 variant 정적 나열
  const daySub = h("div", "figma-subsection");
  daySub.appendChild(h("h3", "figma-subsection__title", "Day Cell"));
  const dayRow = h("div", "figma-matrix");
  ["Default", "Highlight", "Disable"].forEach((st) => {
    const cell = h("div", "figma-cell");
    cell.appendChild(dayCell(st));
    cell.appendChild(h("span", null, `State=${st}`));
    dayRow.appendChild(cell);
  });
  daySub.appendChild(dayRow);
  container.appendChild(daySub);

  // Notification (1884:123886)
  // 요청:
  // - 좌측: Off/On 2개 variant를 위/아래 정적 배치
  // - 우측: State=On 에서 Notification Text를 실제 입력 가능한 데모
  const notiSub = h("div", "figma-subsection");
  notiSub.appendChild(h("h3", "figma-subsection__title", "Notification"));

  const notiLayout = h("div", "sdFieldNotiLayout");
  const notiLeft = h("div", "sdFieldNotiLeft");
  const notiRight = h("div", "sdFieldNotiRight");

  const leftStack = h("div", "sdFieldNotiStack");
  // 좌측 정적 variant는 기존(Figma 기본) 텍스트로 유지
  leftStack.appendChild(
    notificationCard({
      state: "Off",
      typeText: "Record Type",
      dateText: "Date",
      textValue: "Notification Text",
    }),
  );
  leftStack.appendChild(
    notificationCard({
      state: "On",
      typeText: "Record Type",
      dateText: "Date",
      textValue: "Notification Text",
    }),
  );
  notiLeft.appendChild(leftStack);

  const notiDemo = h("div", "figma-interactive");
  const notiStateEl = h("p", "figma-interactive__state", "State=On");
  const notiStage = h("div", "figma-interactive__stage");
  notiStage.setAttribute("tabindex", "0");
  const notiVp = h("div", "figma-interactive__viewport");
  notiStage.appendChild(notiVp);
  notiDemo.appendChild(notiStateEl);
  notiDemo.appendChild(notiStage);
  notiDemo.appendChild(h("p", "figma-interactive__hint", "On 상태에서 Notification Text를 실제로 입력할 수 있습니다."));
  notiRight.appendChild(notiDemo);

  let notiOn = true;
  const demoTypeText = "하루 기록";
  const demoNotiText = "하루 기록'을 작성하지 않았어요. 하루의 작은 순간이 쌓이면 큰 변화가 돼요.";
  const renderDemo = () => {
    notiVp.innerHTML = "";
    notiVp.appendChild(
      notificationCard({
        state: notiOn ? "On" : "Off",
        typeText: demoTypeText,
        dateText: "Date",
        textValue: demoNotiText,
      }),
    );
    notiStateEl.textContent = `State=${notiOn ? "On" : "Off"}`;
  };

  notiStage.addEventListener("click", () => {
    notiOn = !notiOn;
    renderDemo();
  });
  notiStage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      notiOn = !notiOn;
      renderDemo();
    }
  });

  renderDemo();

  notiLayout.appendChild(notiLeft);
  notiLayout.appendChild(notiRight);
  notiSub.appendChild(notiLayout);
  container.appendChild(notiSub);
}
