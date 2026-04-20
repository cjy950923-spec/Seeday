/**
 * viewer.html 각 섹션에 구현 소스(JS/CSS) 링크와 인라인 미리보기를 붙인다.
 */

/** @type {readonly [string, string, string][]} */
const SECTION_SOURCES = [
  ["section-icon", "components/icon-section.js", "components/icon-section.css"],
  ["section-field", "components/field-section.js", "components/field-section.css"],
  ["section-badge", "components/badge-section.js", "components/badge-section.css"],
  ["section-progress", "components/progress-section.js", "components/progress-section.css"],
  ["section-button", "components/button-section.js", "components/button-section.css"],
  ["section-alert", "components/alert-section.js", "components/alert-section.css"],
  ["section-divider", "components/divider-section.js", "components/divider-section.css"],
  ["section-modal", "components/modal-section.js", "components/modal-section.css"],
  ["section-card", "components/card-section.js", "components/card-section.css"],
  ["section-dropdown", "components/dropdown-section.js", "components/dropdown-section.css"],
];

/**
 * @param {string} path
 */
function fileLabel(path) {
  const i = path.lastIndexOf("/");
  return i === -1 ? path : path.slice(i + 1);
}

/**
 * @param {HTMLElement} sectionEl
 * @param {string} jsPath
 * @param {string} cssPath
 */
function attachSourcePanel(sectionEl, jsPath, cssPath) {
  const h2 = sectionEl.querySelector(".figma-section__h2");
  if (!h2) return;

  const panel = document.createElement("div");
  panel.className = "figma-source-panel";

  const row = document.createElement("div");
  row.className = "figma-source-panel__row";

  const label = document.createElement("span");
  label.className = "figma-source-panel__label";
  label.textContent = "구현 소스";

  const aJs = document.createElement("a");
  aJs.href = jsPath;
  aJs.target = "_blank";
  aJs.rel = "noopener noreferrer";
  aJs.textContent = fileLabel(jsPath);

  const dot = document.createElement("span");
  dot.className = "figma-source-panel__sep";
  dot.setAttribute("aria-hidden", "true");
  dot.textContent = "·";

  const aCss = document.createElement("a");
  aCss.href = cssPath;
  aCss.target = "_blank";
  aCss.rel = "noopener noreferrer";
  aCss.textContent = fileLabel(cssPath);

  row.appendChild(label);
  row.appendChild(aJs);
  row.appendChild(dot);
  row.appendChild(aCss);

  const details = document.createElement("details");
  details.className = "figma-source-panel__details";

  const summary = document.createElement("summary");
  summary.className = "figma-source-panel__summary";
  summary.textContent = "이 페이지에서 보기";

  const body = document.createElement("div");
  body.className = "figma-source-panel__body";
  body.hidden = true;

  const subJs = document.createElement("p");
  subJs.className = "figma-source-panel__filetitle";
  subJs.textContent = fileLabel(jsPath);

  const preJs = document.createElement("pre");
  preJs.className = "figma-source-panel__pre";
  const codeJs = document.createElement("code");
  preJs.appendChild(codeJs);

  const subCss = document.createElement("p");
  subCss.className = "figma-source-panel__filetitle";
  subCss.textContent = fileLabel(cssPath);

  const preCss = document.createElement("pre");
  preCss.className = "figma-source-panel__pre";
  const codeCss = document.createElement("code");
  preCss.appendChild(codeCss);

  const status = document.createElement("div");
  status.className = "figma-source-panel__status";
  status.hidden = true;

  body.appendChild(status);
  body.appendChild(subJs);
  body.appendChild(preJs);
  body.appendChild(subCss);
  body.appendChild(preCss);

  details.appendChild(summary);
  details.appendChild(body);

  let loadStarted = false;

  details.addEventListener("toggle", () => {
    body.hidden = !details.open;
    if (!details.open || loadStarted) return;
    loadStarted = true;
    status.hidden = false;
    status.textContent = "불러오는 중…";
    status.classList.remove("figma-source-panel__status--err");

    Promise.all([fetch(jsPath), fetch(cssPath)])
      .then(([rJs, rCss]) => {
        if (!rJs.ok) throw new Error(`${fileLabel(jsPath)} ${rJs.status}`);
        if (!rCss.ok) throw new Error(`${fileLabel(cssPath)} ${rCss.status}`);
        return Promise.all([rJs.text(), rCss.text()]);
      })
      .then(([tJs, tCss]) => {
        codeJs.textContent = tJs;
        codeCss.textContent = tCss;
        status.hidden = true;
      })
      .catch((e) => {
        status.textContent =
          e instanceof Error
            ? `불러오기 실패: ${e.message}. file:// 로 열면 fetch가 막힐 수 있으니 HTTP 서버로 viewer.html을 여세요.`
            : "불러오기에 실패했습니다.";
        status.classList.add("figma-source-panel__status--err");
      });
  });

  panel.appendChild(row);
  panel.appendChild(details);
  h2.insertAdjacentElement("afterend", panel);
}

export function attachAllSourcePanels() {
  for (const [id, js, css] of SECTION_SOURCES) {
    const el = document.getElementById(id);
    if (el) attachSourcePanel(el, js, css);
  }
}
