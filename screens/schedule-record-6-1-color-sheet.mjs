/**
 * 6-6 색상 설정 바텀시트
 * Figma: 3453:156225(최초) · 3453:156176(일정 기록·컬러 바/스와치 연동)
 */
import { initBottomSheet } from "../components/bottom-sheet-section.mjs";

/** @type {const} */ const ORDER = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "gray"];

const TOKEN_VAR = {
  red: "--color-schedule-red",
  orange: "--color-schedule-orange",
  yellow: "--color-schedule-yellow",
  green: "--color-schedule-green",
  blue: "--color-schedule-blue",
  purple: "--color-schedule-purple",
  pink: "--color-schedule-pink",
  gray: "--color-schedule-gray",
};

const LABELS = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
  green: "초록",
  blue: "파랑",
  purple: "보라",
  pink: "핑크",
  gray: "회색",
};

const DEFAULT_ID = "orange";

/**
 * @param {object} p
 * @param {HTMLElement} p.overlay
 * @param {HTMLElement} p.root — `.sd6_1` (일정 색 `var(--sd6-schedule-color)` 적용)
 * @param {HTMLButtonElement} p.openBtn
 * @param {HTMLButtonElement} p.backBtn
 * @param {HTMLButtonElement} p.doneBtn
 * @param {NodeListOf<HTMLButtonElement> | HTMLButtonElement[]} p.swatchButtons
 * @param {() => void} [p.onBeforeOpen]
 */
export function initColorSheet(p) {
  const { overlay, root, openBtn, backBtn, doneBtn, swatchButtons, onBeforeOpen } = p;
  if (!overlay || !root || !openBtn || !doneBtn) {
    return { open: () => {}, close: () => {} };
  }

  const sheet = initBottomSheet(overlay, { closeOnDim: true, closeOnEscape: false });
  const btns = () => /** @type {HTMLButtonElement[]} */ (Array.from(swatchButtons || []));

  let saved = DEFAULT_ID;
  let pending = DEFAULT_ID;

  function isValidId(v) {
    return typeof v === "string" && v in TOKEN_VAR;
  }

  function applyToRoot(id) {
    if (!isValidId(id)) return;
    const t = /** @type {keyof typeof TOKEN_VAR} */ (id);
    root.style.setProperty("--sd6-schedule-color", `var(${TOKEN_VAR[t]})`);
  }

  function syncSwatches() {
    btns().forEach((b) => {
      const v = b.dataset.scheduleColor;
      const on = v === pending;
      b.classList.toggle("sd6_1__colorOption--selected", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
  }

  function open() {
    onBeforeOpen?.();
    pending = saved;
    syncSwatches();
    sheet.open();
  }

  function close() {
    sheet.close();
  }

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    open();
  });

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      pending = saved;
      syncSwatches();
      close();
    });
  }

  doneBtn.addEventListener("click", () => {
    saved = pending;
    applyToRoot(saved);
    close();
  });

  btns().forEach((b) => {
    const v0 = b.dataset.scheduleColor;
    if (v0 && isValidId(v0)) {
      const k = /** @type {keyof typeof LABELS} */ (v0);
      b.setAttribute("aria-label", LABELS[k]);
    }
    b.addEventListener("click", () => {
      const v = b.dataset.scheduleColor;
      if (isValidId(v)) {
        pending = v;
        syncSwatches();
      }
    });
  });

  applyToRoot(saved);
  syncSwatches();
  return { open, close };
}

export { DEFAULT_ID, ORDER, TOKEN_VAR, LABELS };
