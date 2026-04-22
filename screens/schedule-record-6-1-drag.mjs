/**
 * Figma 6-1: 메인 콘텐츠를 드래그로 스크롤(스크롤바는 CSS로 비표시)
 */
function isNoDragTarget(node) {
  if (!node || node === document) return false;
  return Boolean(
    node.closest(
      "textarea, input, select, button, a, [data-no-drag-scroll], label[for]",
    ),
  );
}

/**
 * @param {HTMLElement} scroller
 */
export function initDragToScroll(scroller) {
  let active = false;
  /** @type {number | null} */
  let startY = 0;
  let startScroll = 0;
  /** @type {number | null} */
  let curPointer = null;

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    if (isNoDragTarget(/** @type {Element} */ (e.target))) return;
    active = true;
    curPointer = e.pointerId;
    startY = e.clientY;
    startScroll = scroller.scrollTop;
    try {
      scroller.setPointerCapture(e.pointerId);
    } catch {
      active = false;
      return;
    }
    scroller.classList.add("sd6_1__scroll--grabbing");
  };

  const onPointerMove = (e) => {
    if (!active || e.pointerId !== curPointer) return;
    e.preventDefault();
    const dy = e.clientY - startY;
    scroller.scrollTop = startScroll - dy;
  };

  const end = (e) => {
    if (e.pointerId !== curPointer) return;
    active = false;
    curPointer = null;
    scroller.classList.remove("sd6_1__scroll--grabbing");
  };

  scroller.addEventListener("pointerdown", onPointerDown);
  scroller.addEventListener("pointermove", onPointerMove, { passive: false });
  scroller.addEventListener("pointerup", end);
  scroller.addEventListener("pointercancel", end);
}
