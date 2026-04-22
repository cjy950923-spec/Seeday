/**
 * 6-4 반복 설정 바텀시트
 * Figma: 3453:156410(최초: 주기+반복 종료일 Off, Frame 87 없음) · On 시 date-picker.png(156615 등)
 */
import { initBottomSheet } from "../components/bottom-sheet-section.mjs";

const FREQ_LABEL = {
  none: "반복 없음",
  daily: "매일",
  weekly: "매주",
  monthly: "매월",
  yearly: "매년",
};

const DEFAULT_END_DATE = "2026년 10월 31일";

/**
 * @param {object} p
 * @param {HTMLElement} p.overlay
 * @param {HTMLButtonElement} p.openBtn
 * @param {HTMLButtonElement} p.doneBtn
 * @param {HTMLElement} p.valueEl
 * @param {NodeListOf<HTMLButtonElement> | HTMLButtonElement[]} p.freqButtons
 * @param {HTMLElement} p.endCard
 * @param {HTMLButtonElement} p.endToggle
 * @param {HTMLElement} p.endFrame87 — Figma Frame 87 (날짜 + date-picker.png, 토글 On일 때만)
 * @param {HTMLButtonElement} p.endDateField
 * @param {HTMLElement} p.endDateText
 * @param {HTMLElement} p.endWheels
 * @param {HTMLElement} p.endPickerRow
 * @param {HTMLButtonElement} p.endPickerDone
 * @param {() => void} [p.onBeforeOpen]
 */
export function initRepeatSheet(p) {
  const {
    overlay,
    openBtn,
    doneBtn,
    valueEl,
    freqButtons,
    endCard,
    endToggle,
    endFrame87,
    endDateField,
    endDateText,
    endWheels,
    endPickerRow,
    endPickerDone,
    onBeforeOpen,
  } = p;
  if (!overlay || !openBtn || !doneBtn || !valueEl || !endCard || !endToggle) {
    return { open: () => {}, close: () => {} };
  }

  const sheet = initBottomSheet(overlay, { closeOnDim: true, closeOnEscape: false });

  let savedFreq = /** @type {keyof typeof FREQ_LABEL} */ ("none");
  let pendingFreq = /** @type {keyof typeof FREQ_LABEL} */ ("none");
  let savedEndOn = false;
  let pendingEndOn = false;
  let endPickerOpen = false;
  let endDateStr = DEFAULT_END_DATE;

  function getDisplayLabel() {
    const freq = FREQ_LABEL[savedFreq] ?? "반복 없음";
    if (savedFreq === "none") {
      return "반복 없음";
    }
    if (savedEndOn) {
      return `${freq}, ${endDateStr}까지 종료`;
    }
    return freq;
  }

  function syncValueDisplay() {
    valueEl.textContent = getDisplayLabel();
  }

  function syncFreqUi() {
    Array.from(freqButtons).forEach((b) => {
      const v = b.dataset.repeatFreq;
      const on = v === pendingFreq;
      b.classList.toggle("sd6_1__alarmOption--selected", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
  }

  function syncEndToggleUi() {
    const on = pendingEndOn;
    endToggle.setAttribute("aria-pressed", on ? "true" : "false");
    endToggle.setAttribute("aria-label", on ? "반복 종료일 켬" : "반복 종료일 끔");
    endToggle.classList.toggle("sdToggle--on", on);
  }

  function syncEndCardLayout() {
    if (endDateText) endDateText.textContent = endDateStr;
    if (endDateField) {
      const expanded = Boolean(pendingEndOn && endPickerOpen);
      endDateField.setAttribute("aria-expanded", expanded ? "true" : "false");
      const label = expanded ? "날짜 피커 닫기" : "종료일 날짜·날짜 피커 열기";
      endDateField.setAttribute("aria-label", label);
    }

    endCard.classList.remove(
      "sd6_1__repeatEndCard--endOff",
      "sd6_1__repeatEndCard--picker",
      "sd6_1__repeatEndCard--summary"
    );

    if (!pendingEndOn) {
      endCard.classList.add("sd6_1__repeatEndCard--endOff");
      if (endFrame87) {
        endFrame87.hidden = true;
        endFrame87.setAttribute("aria-hidden", "true");
      }
      if (endWheels) endWheels.hidden = true;
      if (endPickerRow) endPickerRow.hidden = true;
      return;
    }

    if (endFrame87) {
      endFrame87.hidden = false;
      endFrame87.setAttribute("aria-hidden", "false");
    }

    if (endPickerOpen) {
      endCard.classList.add("sd6_1__repeatEndCard--picker");
      if (endWheels) endWheels.hidden = false;
      if (endPickerRow) endPickerRow.hidden = false;
      return;
    }

    endCard.classList.add("sd6_1__repeatEndCard--summary");
    if (endWheels) endWheels.hidden = true;
    if (endPickerRow) endPickerRow.hidden = true;
  }

  function open() {
    onBeforeOpen?.();
    pendingFreq = savedFreq;
    pendingEndOn = savedEndOn;
    /* 저장된 세션: 종료일 On → 날짜만(156625). 첫 설정은 토글로 156549 */
    endPickerOpen = false;
    syncFreqUi();
    syncEndToggleUi();
    syncEndCardLayout();
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
    savedFreq = pendingFreq;
    savedEndOn = pendingEndOn;
    endPickerOpen = false;
    if (endDateText) endDateStr = endDateText.textContent?.trim() || endDateStr;
    syncValueDisplay();
    close();
  });

  endToggle.addEventListener("click", () => {
    const on = endToggle.getAttribute("aria-pressed") === "true";
    pendingEndOn = !on;
    endPickerOpen = false;
    syncEndToggleUi();
    syncEndCardLayout();
  });

  if (endDateField) {
    endDateField.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!pendingEndOn) return;
      endPickerOpen = !endPickerOpen;
      syncEndCardLayout();
    });
  }

  if (endPickerDone) {
    endPickerDone.addEventListener("click", (e) => {
      e.stopPropagation();
      endPickerOpen = false;
      syncEndCardLayout();
    });
  }

  /* date-picker.png 영역 클릭은 피커를 닫지 않음(내부「완료」·날짜 필드 토글만 닫음) */

  Array.from(freqButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.repeatFreq;
      if (v && v in FREQ_LABEL) {
        pendingFreq = /** @type {keyof typeof FREQ_LABEL} */ (v);
        const toNone = v === "none";
        if (toNone) {
          pendingEndOn = false;
          endPickerOpen = false;
        }
        syncFreqUi();
        if (toNone) {
          syncEndToggleUi();
          syncEndCardLayout();
        }
      }
    });
  });

  if (valueEl.textContent) {
    const t = valueEl.textContent.trim();
    const compound = t.match(
      /^(.*),\s*(.+?)\s*까지\s*종료$/
    );
    if (compound) {
      const freqPart = compound[1].trim();
      const datePart = compound[2].trim();
      const found = Object.entries(FREQ_LABEL).find(([, label]) => label === freqPart);
      if (found) {
        const [k] = found;
        savedFreq = /** @type {keyof typeof FREQ_LABEL} */ (k);
        pendingFreq = savedFreq;
        if (k !== "none") {
          savedEndOn = true;
          pendingEndOn = true;
          endDateStr = datePart;
        }
      }
    } else {
      const found = Object.entries(FREQ_LABEL).find(([, label]) => label === t);
      if (found) {
        const [k] = found;
        savedFreq = /** @type {keyof typeof FREQ_LABEL} */ (k);
        pendingFreq = savedFreq;
      }
    }
  }
  syncValueDisplay();
  syncFreqUi();
  syncEndToggleUi();
  syncEndCardLayout();

  return { open, close };
}
