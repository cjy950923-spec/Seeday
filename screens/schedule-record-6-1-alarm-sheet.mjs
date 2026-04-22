/**
 * 6-3 알림 설정 바텀시트 (Figma 3453:156778)
 */
import { initBottomSheet } from "../components/bottom-sheet-section.mjs";

const LABELS = {
  none: "알림 없음",
  "1h": "1시간 전",
  "2h": "2시간 전",
  "12h": "12시간 전",
  "1d": "1일 전",
};

/**
 * @param {object} p
 * @param {HTMLElement} p.overlay
 * @param {HTMLButtonElement} p.openBtn
 * @param {HTMLButtonElement} [p.backBtn] 뒤로(닫기 동작 없음 — 딤·완료만 닫힘)
 * @param {HTMLButtonElement} p.doneBtn
 * @param {HTMLElement} p.valueEl
 * @param {NodeListOf<HTMLButtonElement> | HTMLButtonElement[]} p.optionButtons
 * @param {() => void} [p.onBeforeOpen] 다른 시트(예: 반복)를 먼저 닫을 때
 */
export function initAlarmSheet(p) {
  const { overlay, openBtn, doneBtn, valueEl, optionButtons, onBeforeOpen } = p;
  if (!overlay || !openBtn || !doneBtn || !valueEl) {
    return { open: () => {}, close: () => {} };
  }

  const sheet = initBottomSheet(overlay, { closeOnDim: true, closeOnEscape: false });

  let saved = "none";
  let pending = "none";

  function getLabel(v) {
    return LABELS[/** @type {keyof typeof LABELS} */ (v)] ?? "알림 없음";
  }

  function syncValueDisplay() {
    valueEl.textContent = getLabel(saved);
  }

  function syncOptionsUi() {
    const btns = Array.from(optionButtons);
    btns.forEach((b) => {
      const v = b.dataset.alarmValue;
      const on = v === pending;
      b.classList.toggle("sd6_1__alarmOption--selected", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
  }

  function open() {
    onBeforeOpen?.();
    pending = saved;
    syncOptionsUi();
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

  doneBtn.addEventListener("click", () => {
    saved = pending;
    syncValueDisplay();
    close();
  });

  Array.from(optionButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.alarmValue;
      if (v && v in LABELS) {
        pending = v;
        syncOptionsUi();
      }
    });
  });

  if (valueEl.textContent) {
    const found = Object.entries(LABELS).find(([, t]) => t === valueEl.textContent.trim());
    if (found) {
      const [k] = found;
      saved = k;
      pending = k;
    }
  }
  syncValueDisplay();
  syncOptionsUi();
  return { open, close };
}
