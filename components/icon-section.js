/**
 * Figma: Icon section — node 46:322
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=46-322&m=dev
 *
 * Variant families: Arrow (dir × size), Check (boolean), Onboarding (5 states),
 * Calendar_Mark (type × on/off), Fillter Button Icon (type × on/off), SNS (2),
 * Result Score (3 types), misc single icons.
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

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

function svgArrow(direction) {
  const rot = { Left: 0, Right: 180, Up: 90, Down: -90 }[direction] || 0;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.style.transform = `rotate(${rot}deg)`;
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute(
    "d",
    "M14.5 6.5L8.5 12.5L14.5 18.5",
  );
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "2");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  svg.appendChild(p);
  return svg;
}

function iconArrow(direction, size) {
  const lg = size === "Large";
  const wrap = h("span", `sdIconArrow sdIconArrow--${lg ? "lg" : "md"}`, null, [
    svgArrow(direction),
  ]);
  return wrap;
}

function iconCheck(state) {
  const root = h("div", `sdIconCheck ${state ? "sdIconCheck--true" : ""}`, null, []);
  root.appendChild(h("div", "sdIconCheck__ring", null, []));
  const mark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  mark.setAttribute("class", "sdIconCheck__mark");
  mark.setAttribute("viewBox", "0 0 10 7");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M1 3.5L3.8 6L9 1");
  path.setAttribute("stroke", "#fff");
  path.setAttribute("stroke-width", "1.5");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  mark.appendChild(path);
  root.appendChild(mark);
  return root;
}

function iconOnboarding(state) {
  const wrap = h("div", "sdIconOnboarding", { "data-state": state }, []);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.6");
  svg.setAttribute("stroke-linecap", "round");
  const paths = {
    기록: "M6 4h12v16H6z M9 8h6 M9 12h4",
    닉네임: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0v2m-6 6h12",
    생일: "M7 5h10v14H7z M9 3v4 M15 3v4 M7 10h10",
    목표: "M12 4l8 6-8 6-8-6 8-6z M12 10v6",
    알림: "M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2h16l-2-2z",
  }[state];
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", paths);
  svg.appendChild(p);
  wrap.appendChild(svg);
  return wrap;
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

function iconMisc(name) {
  const wrap = h("span", "sdIconMisc", { "data-icon": name }, []);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.7");
  svg.setAttribute("stroke-linecap", "round");
  const d = {
    Notification: "M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2h16l-2-2z",
    Setting: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8.4-1a7.9 7.9 0 0 0 .1-1l2-1.5-2-3.4-2.5.7a8 8 0 0 0-1.7-1l-.4-2.6H9.1l-.4 2.6a8 8 0 0 0-1.7 1l-2.5-.7-2 3.4L3.5 13a7.9 7.9 0 0 0 .1 1l-2 1.5 2 3.4 2.5-.7a8 8 0 0 0 1.7 1l.4 2.6h5.8l.4-2.6a8 8 0 0 0 1.7-1l2.5.7 2-3.4-2-1.5z",
    Close: "M6 6l12 12M18 6L6 18",
    CheckSmall: "M6 12l4 4 8-8",
    Camera: "M4 8h3l2-2h6l2 2h3v10H4V8zm8 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    More: "M6 12h.01M12 12h.01M18 12h.01",
    Image: "M5 5h14v14H5z M8 15l3-3 3 3 4-5",
    Null: "M12 8v8M8 12h8",
  }[name];
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (name === "More") {
    ["6", "12", "18"].forEach((cx) => {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", cx);
      c.setAttribute("cy", "12");
      c.setAttribute("r", "1.5");
      c.setAttribute("fill", "currentColor");
      c.setAttribute("stroke", "none");
      svg.appendChild(c);
    });
  } else {
    p.setAttribute("d", d);
    svg.appendChild(p);
  }
  wrap.appendChild(svg);
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
      `${FIGMA_ICON.nodeId} · `,
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

  const arrowStates = crossProduct(ICON_VARIANTS.arrow.direction, ICON_VARIANTS.arrow.size).map(
    ([dir, size]) => ({ dir, size }),
  );

  appendInteractiveSubsection(container, "Arrow — direction × size", {
    states: arrowStates,
    formatLabel: (s) => `${s.dir} · ${s.size}`,
    render: (s) => iconArrow(s.dir, s.size),
  });

  appendInteractiveSubsection(container, "Check — State=False | True", {
    states: ICON_VARIANTS.check.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => iconCheck(st),
  });

  appendInteractiveSubsection(container, "Onboarding — State", {
    states: ICON_VARIANTS.onboarding.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => iconOnboarding(st),
  });

  const calStates = crossProduct(ICON_VARIANTS.calendarMark.type, ICON_VARIANTS.calendarMark.on).map(
    ([type, on]) => ({ type, on }),
  );

  appendInteractiveSubsection(container, "Calendar_Mark — type × on/off", {
    states: calStates,
    formatLabel: (s) => `${s.type} · ${s.on ? "On" : "Off"}`,
    render: (s) => iconCalendarMark(s.type, s.on),
  });

  const filterStates = crossProduct(ICON_VARIANTS.filterIcon.type, ICON_VARIANTS.filterIcon.on).map(
    ([type, on]) => ({ type, on }),
  );

  appendInteractiveSubsection(container, "Fillter Button Icon — type × on/off", {
    states: filterStates,
    formatLabel: (s) => `${s.type} · ${s.on ? "On" : "Off"}`,
    render: (s) => iconFilterGlyph(s.type, s.on),
  });

  appendInteractiveSubsection(container, "SNS Icon — Type", {
    states: ICON_VARIANTS.sns.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) =>
      t === "카카오"
        ? h("span", "sdIconSns sdIconSns--kakao", null, ["K"])
        : h("span", "sdIconSns sdIconSns--apple", null, [""]),
  });

  appendInteractiveSubsection(container, "Result Score — Type", {
    states: ICON_VARIANTS.resultScore.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => h("span", "sdIconScore", { title: t }, [t.slice(0, 2)]),
  });

  const miscStates = ICON_VARIANTS.misc.map((name) => ({ kind: "misc", name })).concat([
    { kind: "plus" },
  ]);

  appendInteractiveSubsection(container, "Misc + Plus", {
    states: miscStates,
    formatLabel: (s) => (s.kind === "plus" ? "Plus (5×5)" : s.name),
    render: (s) => (s.kind === "plus" ? h("span", "sdIconPlus", null, []) : iconMisc(s.name)),
  });
}
