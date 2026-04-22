/**
 * Bottom Sheet: 딤 클릭 / Esc 로 닫기(옵션)
 * `components/bottom-sheet-section.css`의 `.sdBottomSheet` + `__dim` + `__panel` 구조를 전제로 한다.
 */

/* CSS --sd-bottom-anim-duration(0.5s) + 여유 */
const ANIM_MS = 580;

/**
 * @param {HTMLElement} root - `.sdBottomSheet` (내부에 `.sdBottomSheet__dim` 권장)
 * @param {{ closeOnDim?: boolean, closeOnEscape?: boolean }} [opts]
 * @returns {{ open: () => void, close: () => void, isOpen: () => boolean, destroy: () => void }}
 */
export function initBottomSheet(root, opts = {}) {
  if (!root) {
    return {
      open: () => {},
      close: () => {},
      isOpen: () => false,
      destroy: () => {},
    };
  }
  const closeOnDim = opts.closeOnDim !== false;
  const closeOnEscape = opts.closeOnEscape !== false;
  const dim = root.querySelector(".sdBottomSheet__dim");
  const panel = root.querySelector(".sdBottomSheet__panel");

  let closeTimeoutId = 0;
  let panelEndHandler = null;

  const finishClose = () => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      closeTimeoutId = 0;
    }
    if (panel && panelEndHandler) {
      panel.removeEventListener("transitionend", panelEndHandler);
      panelEndHandler = null;
    }
    if (root.hidden) return;
    root.hidden = true;
    root.setAttribute("aria-hidden", "true");
  };

  const close = () => {
    if (root.hidden) return;
    if (!root.classList.contains("sdBottomSheet--open")) return;
    root.classList.remove("sdBottomSheet--open");
    if (!panel) {
      finishClose();
      return;
    }
    const onEnd = (e) => {
      if (e.target !== panel) return;
      if (e.propertyName !== "transform" && e.propertyName !== "-webkit-transform") return;
      if (panelEndHandler !== onEnd) return;
      finishClose();
    };
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
    }
    if (panelEndHandler) {
      panel.removeEventListener("transitionend", panelEndHandler);
    }
    panelEndHandler = onEnd;
    panel.addEventListener("transitionend", onEnd);
    closeTimeoutId = window.setTimeout(() => {
      if (root.hidden) return;
      finishClose();
    }, ANIM_MS);
  };

  const open = () => {
    if (!root.hidden && root.classList.contains("sdBottomSheet--open")) return;
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      closeTimeoutId = 0;
    }
    if (panel && panelEndHandler) {
      panel.removeEventListener("transitionend", panelEndHandler);
      panelEndHandler = null;
    }
    root.hidden = false;
    root.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.add("sdBottomSheet--open");
      });
    });
  };

  const isOpen = () => !root.hidden;

  /** @param {MouseEvent} e */
  const onDimClick = (e) => {
    if (e.target !== dim) return;
    e.preventDefault();
    close();
  };

  /** @param {KeyboardEvent} e */
  const onKey = (e) => {
    if (e.key !== "Escape" || root.hidden) return;
    if (!root.isConnected) return;
    close();
  };

  if (closeOnDim && dim) {
    dim.addEventListener("click", onDimClick);
  }
  if (closeOnEscape) {
    document.addEventListener("keydown", onKey);
  }

  const destroy = () => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
    }
    if (panel && panelEndHandler) {
      panel.removeEventListener("transitionend", panelEndHandler);
    }
    root.classList.remove("sdBottomSheet--open");
    if (!root.hidden) {
      root.hidden = true;
      root.setAttribute("aria-hidden", "true");
    }
    if (closeOnDim && dim) {
      dim.removeEventListener("click", onDimClick);
    }
    if (closeOnEscape) {
      document.removeEventListener("keydown", onKey);
    }
  };

  return { open, close, isOpen, destroy };
}
