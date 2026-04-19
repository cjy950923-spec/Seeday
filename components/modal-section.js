/**
 * Figma: Modal — 섹션 프레임 879:5686 (자식 각각 독립 UI)
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=879-5686&m=dev
 */

/** @type {{ nodeId: string; url: string }} */
export const FIGMA_MODAL_SECTION = {
  nodeId: "879:5686",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=879-5686&m=dev",
};

/** 확인/취소 2버튼 · 짧은 본문 */
export const FIGMA_MODAL_CONFIRM = {
  nodeId: "879:5689",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=879-5689&m=dev",
};

/** 하루 유형 선택 · 리스트 + 전폭 Primary */
export const FIGMA_MODAL_DAY_TYPE = {
  nodeId: "879:5874",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=879-5874&m=dev",
};

/** @deprecated FIGMA_MODAL_SECTION 사용 */
export const FIGMA_MODAL = FIGMA_MODAL_SECTION;

export const MODAL_VARIANTS = {
  confirm: { nodeId: FIGMA_MODAL_CONFIRM.nodeId },
  dayType: { nodeId: FIGMA_MODAL_DAY_TYPE.nodeId },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

/** Figma 879:5874 에서 export 한 에셋 (Ceck 64:312 · Profile 이미지) */
function assetModal879(file) {
  return new URL(`../assets/modal-879-5874/${file}`, import.meta.url).href;
}

/** @param {string} src @param {string} className */
function imgAsset(src, className) {
  const i = document.createElement("img");
  i.src = src;
  i.alt = "";
  if (className) i.className = className;
  return i;
}

/** Figma `Ceck` · state=false · 20×20 (노드 64:312) */
function createModal879CeckOff() {
  const root = document.createElement("div");
  root.className = "sd879ModalDayType__ceck";
  root.setAttribute("aria-hidden", "true");

  const ring = document.createElement("div");
  ring.className = "sd879ModalDayType__ceckRing";
  ring.appendChild(imgAsset(assetModal879("check-ellipse-off.svg"), "sd879ModalDayType__ceckRingImg"));

  const mark = document.createElement("div");
  mark.className = "sd879ModalDayType__ceckMark";
  mark.appendChild(imgAsset(assetModal879("check-vector-off.svg"), "sd879ModalDayType__ceckMarkImg"));

  root.append(ring, mark);
  return root;
}

/**
 * 879:5689 — Title + 본문 + Secondary / Primary (동일 너비)
 * @returns {HTMLDivElement}
 */
export function createModal879Confirm() {
  const root = h("div", "sd879ModalConfirm");
  root.setAttribute("data-figma-node", FIGMA_MODAL_CONFIRM.nodeId);

  const inner = h("div", "sd879ModalConfirm__inner");
  const copy = h("div", "sd879ModalConfirm__copy");
  copy.appendChild(h("p", "sd879ModalConfirm__title", "Title"));
  copy.appendChild(h("p", "sd879ModalConfirm__text", "Contents"));

  const actions = h("div", "sd879ModalConfirm__actions");
  const b1 = h("button", "sd879ModalConfirm__btn sd879ModalConfirm__btn--secondary", "Button");
  b1.type = "button";
  b1.disabled = true;
  const b2 = h("button", "sd879ModalConfirm__btn sd879ModalConfirm__btn--primary", "Button");
  b2.type = "button";
  b2.disabled = true;

  actions.append(b1, b2);
  inner.append(copy, actions);
  root.appendChild(inner);
  return root;
}

/**
 * 879:5874 — Figma `Modal` 그대로: 879:5835 컬럼 · Card/Record_Type ×3 · Button(64:879)
 * @returns {HTMLDivElement}
 */
export function createModal879DayType() {
  const root = h("div", "sd879ModalDayType");
  root.setAttribute("data-figma-node", FIGMA_MODAL_DAY_TYPE.nodeId);

  const inner = h("div", "sd879ModalDayType__inner");
  inner.setAttribute("data-figma-node", "879:5835");

  const titleWrap = h("div", "sd879ModalDayType__titleWrap");
  titleWrap.setAttribute("data-figma-node", "879:5836");
  titleWrap.appendChild(h("p", "sd879ModalDayType__title", "어떤 하루로 변경할까요?"));

  const list = h("div", "sd879ModalDayType__list");
  list.setAttribute("data-figma-node", "879:5837");
  list.setAttribute("data-name", "Card UI");

  const rows = [
    { figmaCard: "879:5838", key: "exercise", label: "운동 기록", png: "record-exercise.png" },
    { figmaCard: "879:5839", key: "habit", label: "습관 기록", png: "record-habit.png" },
    { figmaCard: "879:5840", key: "schedule", label: "일정 기록", png: "record-schedule.png" },
  ];

  for (const { figmaCard, key, label, png } of rows) {
    const card = h("div", "sd879ModalDayType__card");
    card.setAttribute("data-figma-node", figmaCard);
    card.setAttribute("data-name", "Card/Record_Type");

    const row = h("div", "sd879ModalDayType__cardRow");
    row.setAttribute("data-name", "Contents");

    const lead = h("div", "sd879ModalDayType__cardLead");
    lead.setAttribute("data-name", "Contents");

    const avatar = h("div", `sd879ModalDayType__avatar sd879ModalDayType__avatar--${key}`);
    avatar.setAttribute("data-name", "Profile/Record");

    const clip = h("div", "sd879ModalDayType__avatarClip");
    clip.appendChild(imgAsset(assetModal879(png), "sd879ModalDayType__avatarImg"));
    avatar.appendChild(clip);

    const desc = h("div", "sd879ModalDayType__desc");
    desc.setAttribute("data-name", "Description");
    desc.appendChild(h("p", "sd879ModalDayType__rowTitle", label));

    lead.append(avatar, desc);
    row.append(lead, createModal879CeckOff());
    card.appendChild(row);
    list.appendChild(card);
  }

  inner.append(titleWrap, list);

  const full = h("button", "sd879ModalDayType__btnPrimary", "Button");
  full.type = "button";
  full.disabled = true;
  full.setAttribute("data-figma-node", "879:5841");
  full.setAttribute("data-name", "Button");
  inner.appendChild(full);

  root.appendChild(inner);
  return root;
}

/**
 * @param {HTMLElement} container
 * @param {string} title
 * @param {HTMLElement} node
 */
function mountModalSubsection(container, title, node) {
  const sub = h("div", "figma-subsection");
  sub.appendChild(h("h3", "figma-subsection__title", title));
  sub.appendChild(node);
  container.appendChild(sub);
}

/**
 * @param {HTMLElement} container
 */
export function mountModalSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_MODAL_SECTION.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_MODAL_SECTION.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Modal"));

  mountModalSubsection(
    container,
    `Modal · 확인 / 취소 (${FIGMA_MODAL_CONFIRM.nodeId})`,
    createModal879Confirm(),
  );
  mountModalSubsection(
    container,
    `Modal · 하루 유형 선택 (${FIGMA_MODAL_DAY_TYPE.nodeId})`,
    createModal879DayType(),
  );
}
