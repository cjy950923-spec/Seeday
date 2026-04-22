/**
 * Figma: Icon section — node 46:322
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=46-322&m=dev
 *
 * Variant families: Arrow (dir × size), Check (boolean), Onboarding (5 states),
 * Calendar_Mark (type × on/off), Fillter Button Icon (type × on/off), SNS (2),
 * Result Score (3 types), misc single icons.
 */

import { iconAssets } from "../tokens/icon.js";
import { SdIconCheck } from "./icons/index.js";

function iconAssetUrl(assetPath) {
  return new URL(`../${assetPath}`, import.meta.url).href;
}

function iconImg(assetPath, className) {
  const img = document.createElement("img");
  img.alt = "";
  img.decoding = "async";
  img.loading = "lazy";
  img.src = iconAssetUrl(assetPath);
  img.className = className || "sdIconAsset__img";
  return img;
}

export const FIGMA_ICON = {
  nodeId: "46:322",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=46-322&m=dev",
};

export const ICON_VARIANTS = {
  arrow: {
    direction: ["Left", "Right", "Up", "Down"],
    size: ["Large", "Medium"],
  },
  check: { state: [false, true] },
  onboarding: { state: ["기록", "닉네임", "생일", "목표", "알림"] },
  calendarMark: {
    type: ["습관", "운동", "일상"],
    on: [true, false],
  },
  filterIcon: {
    type: ["All", "일상", "운동", "습관", "일정"],
    on: [true, false],
  },
  sns: { type: ["카카오", "애플"] },
  resultScore: { type: ["Achievement rate", "Success", "Total"] },
  misc: [
    "Notification",
    "Setting",
    "Close",
    "CheckSmall",
    "Camera",
    "More",
    "Image",
    "Null",
  ],
};

function h(tag, className, attrs, children) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (attrs) {
    Object.entries(attrs).forEach(([k, v]) => {
      if (v === false || v == null) return;
      el.setAttribute(k, String(v));
    });
  }
  (children || []).forEach((c) => {
    if (c == null) return;
    if (typeof c === "string") el.appendChild(document.createTextNode(c));
    else el.appendChild(c);
  });
  return el;
}

function iconArrow(direction, size) {
  const lg = size === "Large";
  const key =
    direction === "Left" && lg
      ? iconAssets.arrowLeftLarge
      : direction === "Left"
        ? iconAssets.arrowLeftMedium
        : direction === "Right" && lg
          ? iconAssets.arrowRightLarge
          : direction === "Right"
            ? iconAssets.arrowRightMedium
            : direction === "Up" && lg
              ? iconAssets.arrowUpLarge
              : direction === "Up"
                ? iconAssets.arrowUpMedium
                : direction === "Down" && lg
                  ? iconAssets.arrowDownLarge
                  : iconAssets.arrowDownMedium;

  return h("span", `sdIconFrame ${lg ? "" : "sdIconFrame--md"} sdIconArrow`.trim(), null, [
    iconImg(key),
  ]);
}

function iconCheck(state) {
  return SdIconCheck({ state, className: "sdIconFrame sdIconFrame--md" });
}

function iconOnboarding(state) {
  const asset =
    state === "기록"
      ? iconAssets.onboardingRecord
      : state === "닉네임"
        ? iconAssets.onboardingNickname
        : state === "생일"
          ? iconAssets.onboardingBirthday
          : state === "목표"
            ? iconAssets.onboardingGoal
            : iconAssets.onboardingNotification;

  return h("span", "sdIconFrame sdIconFrame--camera sdIconOnboarding", { "data-state": state }, [iconImg(asset)]);
}

function iconCalendarMark(type, on) {
  const key = { 습관: "habit", 운동: "fitness", 일상: "daily" }[type];
  const cls = `sdIconCal sdIconCal--${key} ${on ? "sdIconCal--on" : "sdIconCal--off"}`;
  const letter = type.charAt(0);
  return h("div", cls, { "aria-hidden": "true" }, [letter]);
}

function iconFilterGlyph(type, on) {
  const wrap = h(
    "span",
    `sdIconFilterPill sdIconFilterPill--${on ? "on" : "off"} ${type === "All" ? "sdIconFilterPill--all" : ""}`,
    null,
    [h("span", "sdIconFilterPill__glyph", null, [])],
  );
  return wrap;
}

function crossProduct(arrA, arrB) {
  const out = [];
  arrA.forEach((a) => {
    arrB.forEach((b) => {
      out.push([a, b]);
    });
  });
  return out;
}

/**
 * @param {HTMLElement} container
 */
export function mountIconSection(container) {
  container.innerHTML = "";
  container.appendChild(
    h("p", "figma-section__meta", null, [
      "Figma Link · ",
      (() => {
        const a = document.createElement("a");
        a.href = FIGMA_ICON.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Open in Figma";
        return a;
      })(),
    ]),
  );
  container.appendChild(h("h2", "figma-section__h2", null, ["Icon"]));

  function appendSubsection(title, matrixEl) {
    const sub = h("div", "figma-subsection", null, []);
    sub.appendChild(h("h3", "figma-subsection__title", null, [title]));
    sub.appendChild(matrixEl);
    container.appendChild(sub);
  }

  /**
   * @param {{label: string, node: HTMLElement}[]} items
   * @param {{grid5?: boolean, grid4?: boolean, grid3?: boolean, col2?: boolean}} [opts]
   */
  function makeMatrix(items, opts) {
    const matrix = h(
      "div",
      `figma-matrix ${opts?.grid5 ? "figma-matrix--grid5" : ""} ${opts?.grid4 ? "figma-matrix--grid4" : ""} ${opts?.grid3 ? "figma-matrix--grid3" : ""} ${opts?.col2 ? "figma-matrix--col2" : ""}`.trim(),
      null,
      [],
    );
    items.forEach(({ label, node }) => {
      const cell = h("div", "figma-cell", null, []);
      cell.appendChild(node);
      cell.appendChild(h("span", null, null, [label]));
      matrix.appendChild(cell);
    });
    return matrix;
  }

  // 5×5 라인업 (요청: onboarding/calendar_mark/notics/filter/null/resultScore 제외)
  const lineIconItems = [
    { label: "Setting", node: h("span", "sdIconFrame", { "data-icon": "Setting" }, [iconImg(iconAssets.setting)]) },
    {
      label: "Notification",
      node: h("span", "sdIconFrame", { "data-icon": "Notification" }, [iconImg(iconAssets.notification)]),
    },
    { label: "Close", node: h("span", "sdIconFrame", { "data-icon": "Close" }, [iconImg(iconAssets.close)]) },
    {
      label: "CheckSmall (20)",
      node: h("span", "sdIconFrame sdIconFrame--md", { "data-icon": "CheckSmall" }, [
        iconImg(iconAssets.checkSmall),
      ]),
    },
    { label: "Plus (5×5)", node: h("span", "sdIconPlus", null, []) },

    {
      label: "Fill Arrow_Down",
      node: h("span", "sdIconFrame", { "data-icon": "FillArrowDown" }, [iconImg(iconAssets.fillArrowDown)]),
    },
    { label: "Palette", node: h("span", "sdIconFrame", { "data-icon": "Palette" }, [iconImg(iconAssets.palette)]) },
    { label: "Article", node: h("span", "sdIconFrame", { "data-icon": "Article" }, [iconImg(iconAssets.article)]) },
    { label: "Calendar", node: h("span", "sdIconFrame", { "data-icon": "Calendar" }, [iconImg(iconAssets.calendar)]) },
    { label: "Repeat", node: h("span", "sdIconFrame", { "data-icon": "Repeat" }, [iconImg(iconAssets.repeat)]) },

    { label: "Compass", node: h("span", "sdIconFrame", { "data-icon": "Compass" }, [iconImg(iconAssets.compass)]) },
    { label: "Pin", node: h("span", "sdIconFrame", { "data-icon": "Pin" }, [iconImg(iconAssets.pin)]) },
    { label: "Trash", node: h("span", "sdIconFrame", { "data-icon": "Trash" }, [iconImg(iconAssets.trash)]) },
    {
      label: "History",
      node: h("span", "sdIconFrame", { "data-icon": "History" }, [
        iconImg(iconAssets.historyExport),
      ]),
    },
    {
      label: "More (20)",
      node: h("span", "sdIconFrame sdIconFrame--md", { "data-icon": "More" }, [iconImg(iconAssets.moreExport)]),
    },

    {
      label: "Camera (30)",
      node: h("span", "sdIconFrame sdIconFrame--camera", { "data-icon": "Camera" }, [iconImg(iconAssets.camera)]),
    },
    {
      label: "Image (30)",
      node: h("span", "sdIconFrame sdIconFrame--camera", { "data-icon": "Image" }, [iconImg(iconAssets.image)]),
    },
    {
      label: "CoachMark Close (36)",
      node: h("span", "sdIconFrame sdIconFrame--coach", { "data-icon": "CoachMarkClose" }, [
        iconImg(iconAssets.coachMarkClose),
      ]),
    },
  ];
  appendSubsection("Line icons", makeMatrix(lineIconItems, { grid5: true }));

  // Variable icons — 정적으로 모든 상태 표시
  // 요청 순서:
  // 1) 같은 방향 기준으로 위=Large, 아래=Medium
  // 2) 방향 순서: Left, Right, Up, Down
  // => 그리드에서 1행 Large(Left→Right→Up→Down), 2행 Medium(Left→Right→Up→Down)
  const arrowItems = crossProduct(ICON_VARIANTS.arrow.size, ICON_VARIANTS.arrow.direction).map(([size, dir]) => {
    const key =
      dir === "Left"
        ? size === "Large"
          ? "arrowLeftLarge"
          : "arrowLeftMedium"
        : dir === "Right"
          ? size === "Large"
            ? "arrowRightLarge"
            : "arrowRightMedium"
          : dir === "Up"
            ? size === "Large"
              ? "arrowUpLarge"
              : "arrowUpMedium"
            : size === "Large"
              ? "arrowDownLarge"
              : "arrowDownMedium";
    return {
      label: `${dir} · ${size}`,
      node: h("span", `sdIconArrow sdIconArrow--${size === "Large" ? "lg" : "md"}`, null, [iconImg(iconAssets[key])]),
    };
  });
  appendSubsection("Arrow", makeMatrix(arrowItems, { grid4: true }));

  const checkItems = ICON_VARIANTS.check.state.map((st) => ({ label: `State=${st}`, node: iconCheck(st) }));
  appendSubsection("Check", makeMatrix(checkItems));

  const snsItems = ICON_VARIANTS.sns.type.map((t) => ({
    label: `Type=${t}`,
    node: h("span", "sdIconFrame sdIconFrame--md", null, [
      iconImg(t === "카카오" ? iconAssets.snsKakao : iconAssets.snsApple),
    ]),
  }));
  appendSubsection("SNS Icon", makeMatrix(snsItems));

  // Excluded from 5×5, but still shown as static “all states”
  const onboardingItems = ICON_VARIANTS.onboarding.state.map((st) => ({
    label: `State=${st}`,
    node: iconOnboarding(st),
  }));
  appendSubsection("Onboarding", makeMatrix(onboardingItems));

  // 요청: 위 1줄=On, 아래 1줄=Off
  const calItemsOn = [
    { label: "습관 · On", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkHabitOn)]) },
    { label: "운동 · On", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkFitnessOn)]) },
    { label: "일상 · On", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkDailyOn)]) },
  ];
  const calItemsOff = [
    { label: "습관 · Off", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkHabitOff)]) },
    { label: "운동 · Off", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkFitnessOff)]) },
    { label: "일상 · Off", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.calendarMarkDailyOff)]) },
  ];
  appendSubsection("Calendar_Mark", makeMatrix([...calItemsOn, ...calItemsOff], { grid3: true }));

  const noticsItems = [
    { label: "Daily", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.noticsDaily)]) },
    { label: "Fitness", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.noticsFitness)]) },
    { label: "Habit", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.noticsHabit)]) },
    { label: "Project", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.noticsProject)]) },
  ];
  appendSubsection("Notics Icon", makeMatrix(noticsItems));

  // 요청: 위 1줄=On, 아래 1줄=Off
  const filterItemsOn = [
    { label: "습관 · On", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterHabitOn)]) },
    { label: "운동 · On", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterFitnessOn)]) },
    { label: "일상 · On", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterDailyOn)]) },
    { label: "일정 · On", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterScheduleOn)]) },
    { label: "All · On", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterAllOn)]) },
  ];
  const filterItemsOff = [
    { label: "습관 · Off", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterHabitOff)]) },
    { label: "운동 · Off", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterFitnessOff)]) },
    { label: "일상 · Off", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterDailyOff)]) },
    { label: "일정 · Off", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterScheduleOff)]) },
    { label: "All · Off", node: h("span", "sdIconFrame", null, [iconImg(iconAssets.filterAllOff)]) },
  ];
  appendSubsection(
    "Fillter Button Icon — type × on/off (static, exported SVG)",
    makeMatrix([...filterItemsOn, ...filterItemsOff], { grid5: true }),
  );

  const nullItems = [{ label: "Null (40×40)", node: h("span", "sdIconMisc", null, [iconImg(iconAssets.nullIcon)]) }];
  appendSubsection("Null Icon", makeMatrix(nullItems));

  const scoreItems = [
    {
      label: "Achievement rate",
      node: h("span", "sdIconScore", null, [iconImg(iconAssets.resultScoreAchievementRate)]),
    },
    { label: "Success", node: h("span", "sdIconScore", null, [iconImg(iconAssets.resultScoreSuccess)]) },
    { label: "Total", node: h("span", "sdIconScore", null, [iconImg(iconAssets.resultScoreTotal)]) },
  ];
  appendSubsection("Result Score", makeMatrix(scoreItems));
}
