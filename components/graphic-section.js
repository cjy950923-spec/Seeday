/**
 * Figma: Graphic section — node 552:1979
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=552-1979&m=dev
 *
 * Large illustration assets are represented as labeled placeholders; variant keys match Figma symbol names.
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";

export const FIGMA_GRAPHIC = {
  nodeId: "552:1979",
  url: "https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=552-1979&m=dev",
};

export const GRAPHIC_VARIANTS = {
  profileRecord: { state: ["일상", "운동", "일정", "습관"] },
  profileGoal: { state: ["쌔싹", "묘목", "나무"] },
  emotionLarge: {
    state: ["보통", "행복", "피곤한", "평온", "슬픔", "화남", "당황", "사랑", "즐거운"],
  },
  emotionSmall: {
    state: ["보통", "행복", "피곤한", "평온", "슬픔", "화남", "당황", "사랑", "즐거운"],
  },
  fitnessLarge: {
    type: [
      "러닝",
      "웨이트 트레이닝",
      "야구",
      "테니스",
      "농구",
      "골프",
      "축구",
      "수영",
      "자전거",
      "요가",
    ],
  },
  fitnessSmall: {
    type: [
      "러닝",
      "웨이트 트레이닝",
      "야구",
      "테니스",
      "농구",
      "골프",
      "축구",
      "수영",
      "자전거",
      "요가",
    ],
  },
  fitnessRecordMark: { type: ["걸음 수", "운동 시간", "몸무게"] },
  habitLarge: {
    type: [
      "물마시기",
      "산책하기",
      "독서",
      "저축",
      "금주",
      "금연",
      "약 챙겨먹기",
      "일찍 일어나기",
      "스트레칭",
      "운동하기",
    ],
  },
  habitSmall: {
    type: [
      "물 마시기",
      "산책하기",
      "독서",
      "저축",
      "금주",
      "금연",
      "약 챙겨먹기",
      "일찍 일어나기",
      "스트레칭",
      "운동",
    ],
  },
  onboardingHero: { name: ["Graphic/On_Borading", "Graphic/Splash", "Graphic/On_Boarding"] },
  growthStage: { step: ["1단계", "2단계", "3단계", "4단계", "기록 미설정"] },
  seed: { id: ["씨드_01", "씨드_02", "씨드_03", "씨드_04"] },
};

function h(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

const profileKey = { 일상: "daily", 운동: "fitness", 일정: "schedule", 습관: "habit" };
const goalKey = { 쌔싹: "1", 묘목: "2", 나무: "3" };

/**
 * @param {HTMLElement} container
 */
export function mountGraphicSection(container) {
  container.innerHTML = "";
  const meta = h("p", "figma-section__meta");
  const a = document.createElement("a");
  a.href = FIGMA_GRAPHIC.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = "Open in Figma";
  meta.append(`${FIGMA_GRAPHIC.nodeId} · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Graphic"));

  appendInteractiveSubsection(container, "Profile/Record — State", {
    states: GRAPHIC_VARIANTS.profileRecord.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => {
      const el = h("div", `sdGfxProfile sdGfxProfile--${profileKey[st]}`);
      el.textContent = st.slice(0, 1);
      return el;
    },
  });

  appendInteractiveSubsection(container, "Profile/Goal — State", {
    states: GRAPHIC_VARIANTS.profileGoal.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => {
      const el = h("div", `sdGfxGoal sdGfxGoal--${goalKey[st]}`);
      el.textContent = st;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Emotion_Large — State", {
    states: GRAPHIC_VARIANTS.emotionLarge.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => {
      const el = h("div", "sdGfxEmotion sdGfxEmotion--lg");
      el.textContent = st;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Emotion_Small — State", {
    states: GRAPHIC_VARIANTS.emotionSmall.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => {
      const el = h("div", "sdGfxEmotion sdGfxEmotion--sm");
      el.textContent = st;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Fitness_Large — Type", {
    states: GRAPHIC_VARIANTS.fitnessLarge.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => {
      const el = h("div", "sdGfxTile sdGfxTile--lg");
      el.textContent = t;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Fitness_Small — Type", {
    states: GRAPHIC_VARIANTS.fitnessSmall.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => {
      const el = h("div", "sdGfxTile sdGfxTile--sm");
      el.textContent = t.replace(/\s+/g, "\n");
      return el;
    },
  });

  appendInteractiveSubsection(container, "Fitness Record Mark — Type", {
    states: GRAPHIC_VARIANTS.fitnessRecordMark.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => h("div", "sdGfxMark", t),
  });

  appendInteractiveSubsection(container, "Habit_Large — Type", {
    states: GRAPHIC_VARIANTS.habitLarge.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => {
      const el = h("div", "sdGfxTile sdGfxTile--lg");
      el.textContent = t;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Habit_Small — Type", {
    states: GRAPHIC_VARIANTS.habitSmall.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => {
      const el = h("div", "sdGfxTile sdGfxTile--sm");
      el.textContent = t;
      return el;
    },
  });

  appendInteractiveSubsection(container, "Onboarding / Splash symbols", {
    states: GRAPHIC_VARIANTS.onboardingHero.name,
    formatLabel: (n) => n,
    render: (name) => h("div", "sdGfxIllu", name),
  });

  appendInteractiveSubsection(container, "Growth / empty state (named symbols)", {
    states: GRAPHIC_VARIANTS.growthStage.step,
    formatLabel: (s) => s,
    render: (s) => h("div", "sdGfxIllu", s),
  });

  appendInteractiveSubsection(container, "씨드_01–04", {
    states: GRAPHIC_VARIANTS.seed.id,
    formatLabel: (id) => id,
    render: (id) => h("div", "sdGfxSeed", id.replace("씨드_", "")),
  });
}
