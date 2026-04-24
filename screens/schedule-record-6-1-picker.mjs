/**
 * 6-2: Start/End 클릭 → 정적 PNG(날짜 휠, Figma 3576:136734) + 완료로 날짜·시간 반영
 * PNG는 스크롤 없음 — 반영 시 고정 r(0.5)로 시·일 매핑
 */

const DOW = ["일", "월", "화", "수", "목", "금", "토"];
const BASE = new Date(2026, 3, 22);
/** 정적 이미지용 기본 스크롤 비율 */
const PICKER_RATIO = 0.5;

function pad2(n) {
  return String(n).padStart(2, "0");
}

/**
 * @param {number} totalMin
 */
function formatKoreanTimePartsForCard(totalMin) {
  const t = ((totalMin % 1440) + 1440) % 1440;
  const h24 = Math.floor(t / 60);
  const m = t % 60;
  if (h24 === 0) {
    return { ap: "오전", clock: `12:${pad2(m)}` };
  }
  if (h24 < 12) {
    return { ap: "오전", clock: `${h24}:${pad2(m)}` };
  }
  if (h24 === 12) {
    return { ap: "오후", clock: `12:${pad2(m)}` };
  }
  return { ap: "오후", clock: `${h24}:${pad2(m)}` };
}

/**
 * @param {Date} d
 */
function formatDateLine1(d) {
  // Prototype: YYYY.MM.DD (month/day are 2-digit)
  return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
}

/**
 * @param {Date} d
 */
function formatDow(d) {
  return `(${DOW[d.getDay()]})`;
}

/**
 * @param {number} r
 */
function stateFromScrollRatio(r) {
  const slot = Math.min(287, Math.max(0, Math.round(287 * r)));
  const tMin = Math.min(1435, slot * 5);
  const dayOff = Math.round(14 * r) - 7;
  const d = new Date(
    BASE.getFullYear(),
    BASE.getMonth(),
    BASE.getDate() + dayOff,
  );
  return { d, tMin, r };
}

/**
 * 카드에는 날짜·요일만 표시(Figma 3576:136872 Date Point). 시각은 aria-label에 반영.
 * @param {object} els
 * @param {HTMLElement} [els.dateTimeBlock]
 */
export function initScheduleRecordPicker(els) {
  const {
    startPoint,
    endPoint,
    startDate: sd,
    startDow: sDow,
    endDate: ed,
    endDow: eDow,
    pickerBlock,
    completeBtn,
    dateTimeBlock,
  } = els;

  if (!startPoint || !endPoint || !pickerBlock || !completeBtn || !sd || !sDow || !ed || !eDow) {
    return null;
  }

  /** @type {'start' | 'end' | null} */
  let target = null;

  let savedStartAria = startPoint.getAttribute("aria-label") || "";
  let savedEndDate = ed.textContent;
  let savedEndDow = eDow.textContent;
  let savedEndAria = endPoint.getAttribute("aria-label") || "";

  function ariaDateTime(prefix, d, tMin) {
    const line1 = formatDateLine1(d);
    const line2 = formatDow(d);
    const { ap, clock } = formatKoreanTimePartsForCard(tMin);
    return `${prefix} ${line1} ${line2} ${ap} ${clock}`;
  }

  function setDim() {
    if (target === "start") {
      startPoint.classList.remove("sd6_1__datePointCard--dim");
      endPoint.classList.add("sd6_1__datePointCard--dim");
    } else if (target === "end") {
      startPoint.classList.add("sd6_1__datePointCard--dim");
      endPoint.classList.remove("sd6_1__datePointCard--dim");
    } else {
      startPoint.classList.remove("sd6_1__datePointCard--dim");
      endPoint.classList.remove("sd6_1__datePointCard--dim");
    }
  }

  /**
   * @param {'start' | 'end'} point
   * @param {Date} d
   * @param {number} tMin
   */
  function applyDomFromState(point, d, tMin) {
    const line1 = formatDateLine1(d);
    const line2 = formatDow(d);
    if (point === "start") {
      sd.textContent = line1;
      sDow.textContent = line2;
      startPoint.setAttribute("aria-label", ariaDateTime("시작일시", d, tMin));
      savedStartAria = startPoint.getAttribute("aria-label") || savedStartAria;
    } else {
      ed.textContent = line1;
      eDow.textContent = line2;
      endPoint.setAttribute("aria-label", ariaDateTime("종료일시", d, tMin));
      savedEndDate = ed.textContent;
      savedEndDow = eDow.textContent;
      savedEndAria = endPoint.getAttribute("aria-label") || savedEndAria;
    }
  }

  function open(next) {
    if (dateTimeBlock && dateTimeBlock.hidden) return;
    // toggle: clicking same target toggles picker open/close
    if (target === next && pickerBlock.hidden === false) {
      close();
      return;
    }
    target = next;
    pickerBlock.hidden = false;
    setDim();
  }

  function close() {
    target = null;
    pickerBlock.hidden = true;
    setDim();
  }

  function onComplete() {
    if (target == null) return;
    const { d, tMin } = stateFromScrollRatio(PICKER_RATIO);
    applyDomFromState(target, d, tMin);
    close();
  }

  startPoint.addEventListener("click", (e) => {
    e.preventDefault();
    open("start");
  });
  endPoint.addEventListener("click", (e) => {
    e.preventDefault();
    open("end");
  });
  completeBtn.addEventListener("click", onComplete);

  return { close };
}
