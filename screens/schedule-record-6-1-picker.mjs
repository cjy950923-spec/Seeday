/**
 * 6-2: Start/End 클릭 → 동일 정적 PNG(타임 휠) + 완료로 날짜·시간 반영
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
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`;
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
 * @param {object} els
 * @param {HTMLElement} [els.allDayBtn]
 * @param {HTMLElement} [els.dateTimeBlock] 하루 종일 on(Figma 3453:158324)이면 숨겨짐
 */
export function initScheduleRecordPicker(els) {
  const {
    startPoint,
    endPoint,
    startDate: sd,
    startDow: sDow,
    startAmpm: sAp,
    startClock: sClk,
    endDate: ed,
    endDow: eDow,
    endAmpm: eAp,
    endClock: eClk,
    pickerBlock,
    completeBtn,
    allDayBtn,
    dateTimeBlock,
  } = els;

  if (
    !startPoint ||
    !endPoint ||
    !pickerBlock ||
    !completeBtn ||
    !sd ||
    !sDow ||
    !sAp ||
    !sClk ||
    !ed ||
    !eDow ||
    !eAp ||
    !eClk
  ) {
    return;
  }

  /** @type {'start' | 'end' | null} */
  let target = null;

  function setDim() {
    if (target === "start") {
      startPoint.classList.remove("sd6_1__timeCard--dim");
      endPoint.classList.add("sd6_1__timeCard--dim");
    } else if (target === "end") {
      startPoint.classList.add("sd6_1__timeCard--dim");
      endPoint.classList.remove("sd6_1__timeCard--dim");
    } else {
      startPoint.classList.remove("sd6_1__timeCard--dim");
      endPoint.classList.remove("sd6_1__timeCard--dim");
    }
  }

  function applyDomFromState(d, tMin) {
    const line1 = formatDateLine1(d);
    const line2 = formatDow(d);
    const { ap, clock } = formatKoreanTimePartsForCard(tMin);
    if (target === "start") {
      sd.textContent = line1;
      sDow.textContent = line2;
      sAp.textContent = ap;
      sClk.textContent = clock;
    } else if (target === "end") {
      ed.textContent = line1;
      eDow.textContent = line2;
      eAp.textContent = ap;
      eClk.textContent = clock;
    }
  }

  function open(next) {
    if (allDayBtn && allDayBtn.getAttribute("aria-pressed") === "true") {
      return;
    }
    if (dateTimeBlock && dateTimeBlock.hidden) return;
    target = next;
    pickerBlock.hidden = false;
    setDim();
  }

  function close() {
    target = null;
    pickerBlock.hidden = true;
    startPoint.classList.remove("sd6_1__timeCard--dim");
    endPoint.classList.remove("sd6_1__timeCard--dim");
  }

  function onComplete() {
    if (target == null) return;
    const { d, tMin } = stateFromScrollRatio(PICKER_RATIO);
    applyDomFromState(d, tMin);
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

  if (allDayBtn) {
    allDayBtn.addEventListener("click", () => {
      queueMicrotask(() => {
        if (allDayBtn.getAttribute("aria-pressed") === "true") close();
      });
    });
  }
}
