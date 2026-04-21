/**
 * Figma: Graphic section — node 552:1979
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=552-1979&m=dev
 *
 * Large illustration assets are represented as labeled placeholders; variant keys match Figma symbol names.
 */

import { appendInteractiveSubsection } from "./interactive-demo.js";
import { graphicAssets } from "../tokens/graphic.js";

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

function graphicUrl(assetPath) {
  return new URL(`../${assetPath}`, import.meta.url).href;
}

/**
 * @param {string} assetPath
 * @param {{ w: number, h: number, alt?: string }} size
 */
function graphicImg(assetPath, size) {
  const img = document.createElement("img");
  img.alt = size.alt || "";
  img.decoding = "async";
  img.loading = "lazy";
  img.src = graphicUrl(assetPath);
  img.className = "sdGfxToken__img";
  img.width = size.w;
  img.height = size.h;
  // fallback if asset missing
  img.addEventListener("error", () => {
    const fallback = h("div", "sdGfxToken__fallback", "");
    fallback.style.width = `${size.w}px`;
    fallback.style.height = `${size.h}px`;
    fallback.textContent = "Missing graphic asset";
    img.replaceWith(fallback);
  });
  return img;
}

function profileRecordAsset(state) {
  return state === "일상"
    ? graphicAssets.profileRecordDaily
    : state === "운동"
      ? graphicAssets.profileRecordFitness
      : state === "일정"
        ? graphicAssets.profileRecordSchedule
        : graphicAssets.profileRecordHabit;
}

function profileGoalAsset(state) {
  return state === "쌔싹"
    ? graphicAssets.profileGoalSprout
    : state === "묘목"
      ? graphicAssets.profileGoalSeedling
      : graphicAssets.profileGoalTree;
}

function fitnessMarkAsset(type) {
  return type === "운동 시간"
    ? graphicAssets.fitnessMarkTime
    : type === "몸무게"
      ? graphicAssets.fitnessMarkWeight
      : graphicAssets.fitnessMarkSteps;
}

function emotionLargeAsset(state) {
  return state === "보통"
    ? graphicAssets.emotionLargeNormal
    : state === "행복"
      ? graphicAssets.emotionLargeHappy
      : state === "피곤한"
        ? graphicAssets.emotionLargeTired
        : state === "평온"
          ? graphicAssets.emotionLargeCalm
          : state === "슬픔"
            ? graphicAssets.emotionLargeSad
            : state === "화남"
              ? graphicAssets.emotionLargeAngry
              : state === "당황"
                ? graphicAssets.emotionLargeSurprised
                : state === "사랑"
                  ? graphicAssets.emotionLargeLove
                  : graphicAssets.emotionLargeJoy;
}

function emotionSmallAsset(state) {
  return state === "보통"
    ? graphicAssets.emotionSmallNormal
    : state === "행복"
      ? graphicAssets.emotionSmallHappy
      : state === "피곤한"
        ? graphicAssets.emotionSmallTired
        : state === "평온"
          ? graphicAssets.emotionSmallCalm
          : state === "슬픔"
            ? graphicAssets.emotionSmallSad
            : state === "화남"
              ? graphicAssets.emotionSmallAngry
              : state === "당황"
                ? graphicAssets.emotionSmallSurprised
                : state === "사랑"
                  ? graphicAssets.emotionSmallLove
                  : graphicAssets.emotionSmallJoy;
}

function fitnessLargeAsset(type) {
  return type === "러닝"
    ? graphicAssets.fitnessLargeRunning
    : type === "웨이트 트레이닝"
      ? graphicAssets.fitnessLargeWeightTraining
      : type === "야구"
        ? graphicAssets.fitnessLargeBaseball
        : type === "테니스"
          ? graphicAssets.fitnessLargeTennis
          : type === "농구"
            ? graphicAssets.fitnessLargeBasketball
            : type === "골프"
              ? graphicAssets.fitnessLargeGolf
              : type === "축구"
                ? graphicAssets.fitnessLargeSoccer
                : type === "수영"
                  ? graphicAssets.fitnessLargeSwimming
                  : type === "자전거"
                    ? graphicAssets.fitnessLargeCycling
                    : graphicAssets.fitnessLargeYoga;
}

function fitnessSmallAsset(type) {
  return type === "러닝"
    ? graphicAssets.fitnessSmallRunning
    : type === "웨이트 트레이닝"
      ? graphicAssets.fitnessSmallWeightTraining
      : type === "야구"
        ? graphicAssets.fitnessSmallBaseball
        : type === "테니스"
          ? graphicAssets.fitnessSmallTennis
          : type === "농구"
            ? graphicAssets.fitnessSmallBasketball
            : type === "골프"
              ? graphicAssets.fitnessSmallGolf
              : type === "축구"
                ? graphicAssets.fitnessSmallSoccer
                : type === "수영"
                  ? graphicAssets.fitnessSmallSwimming
                  : type === "자전거"
                    ? graphicAssets.fitnessSmallCycling
                    : graphicAssets.fitnessSmallYoga;
}

function habitLargeAsset(type) {
  return type === "물마시기"
    ? graphicAssets.habitLargeDrinkWater
    : type === "산책하기"
      ? graphicAssets.habitLargeWalk
      : type === "독서"
        ? graphicAssets.habitLargeReading
        : type === "저축"
          ? graphicAssets.habitLargeSaving
          : type === "금주"
            ? graphicAssets.habitLargeNoAlcohol
            : type === "금연"
              ? graphicAssets.habitLargeNoSmoking
              : type === "약 챙겨먹기"
                ? graphicAssets.habitLargeTakeMeds
                : type === "일찍 일어나기"
                  ? graphicAssets.habitLargeWakeUpEarly
                  : type === "스트레칭"
                    ? graphicAssets.habitLargeStretching
                    : graphicAssets.habitLargeWorkout;
}

function habitSmallAsset(type) {
  return type === "물 마시기"
    ? graphicAssets.habitSmallDrinkWater
    : type === "산책하기"
      ? graphicAssets.habitSmallWalk
      : type === "독서"
        ? graphicAssets.habitSmallReading
        : type === "저축"
          ? graphicAssets.habitSmallSaving
          : type === "금주"
            ? graphicAssets.habitSmallNoAlcohol
            : type === "금연"
              ? graphicAssets.habitSmallNoSmoking
              : type === "약 챙겨먹기"
                ? graphicAssets.habitSmallTakeMeds
                : type === "일찍 일어나기"
                  ? graphicAssets.habitSmallWakeUpEarly
                  : type === "스트레칭"
                    ? graphicAssets.habitSmallStretching
                    : graphicAssets.habitSmallWorkout;
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
  meta.append(`Figma Link · `, a);
  container.appendChild(meta);
  container.appendChild(h("h2", "figma-section__h2", "Graphic"));

  appendInteractiveSubsection(container, "Profile/Record", {
    states: GRAPHIC_VARIANTS.profileRecord.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => graphicImg(profileRecordAsset(st), { w: 50, h: 50 }),
  });

  appendInteractiveSubsection(container, "Profile/Goal", {
    states: GRAPHIC_VARIANTS.profileGoal.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => graphicImg(profileGoalAsset(st), { w: 56, h: 56 }),
  });

  appendInteractiveSubsection(container, "Emotion_Large", {
    states: GRAPHIC_VARIANTS.emotionLarge.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => graphicImg(emotionLargeAsset(st), { w: 80, h: 80 }),
  });

  appendInteractiveSubsection(container, "Emotion_Small", {
    states: GRAPHIC_VARIANTS.emotionSmall.state,
    formatLabel: (st) => `State=${st}`,
    render: (st) => graphicImg(emotionSmallAsset(st), { w: 64, h: 64 }),
  });

  appendInteractiveSubsection(container, "Fitness_Large", {
    states: GRAPHIC_VARIANTS.fitnessLarge.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => graphicImg(fitnessLargeAsset(t), { w: 100, h: 100 }),
  });

  appendInteractiveSubsection(container, "Fitness_Small", {
    states: GRAPHIC_VARIANTS.fitnessSmall.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => graphicImg(fitnessSmallAsset(t), { w: 50, h: 50 }),
  });

  appendInteractiveSubsection(container, "Fitness Record Mark", {
    states: GRAPHIC_VARIANTS.fitnessRecordMark.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => graphicImg(fitnessMarkAsset(t), { w: 50, h: 50 }),
  });

  // Tokenized graphics (whole-node exports) — 792:4702 (Small) / 734:19353 (Large)
  const tokenSub = h("div", "figma-subsection");
  tokenSub.appendChild(h("h3", "figma-subsection__title", "Token graphics"));
  const row = h("div", "figma-matrix figma-matrix--col2");

  const SIZE = {
    large: { w: 120, h: 120 },
    small: { w: 80, h: 80 },
  };

  const c1 = h("div", "figma-cell");
  c1.appendChild(graphicImg(graphicAssets.g7924702, SIZE.small));
  const c2 = h("div", "figma-cell");
  c2.appendChild(graphicImg(graphicAssets.g73419353, SIZE.large));

  const c5 = h("div", "figma-cell");
  c5.appendChild(graphicImg(graphicAssets.g101910549, SIZE.large));
  const c6 = h("div", "figma-cell");
  c6.appendChild(graphicImg(graphicAssets.g101924416, SIZE.large));

  const c7 = h("div", "figma-cell");
  c7.appendChild(graphicImg(graphicAssets.g126876105, SIZE.large));
  const c8 = h("div", "figma-cell");
  c8.appendChild(graphicImg(graphicAssets.g126877398, SIZE.large));

  row.append(c1, c2, c5, c6, c7, c8);
  tokenSub.appendChild(row);
  container.appendChild(tokenSub);

  appendInteractiveSubsection(container, "Habit_Large", {
    states: GRAPHIC_VARIANTS.habitLarge.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => graphicImg(habitLargeAsset(t), { w: 100, h: 100 }),
  });

  appendInteractiveSubsection(container, "Habit_Small", {
    states: GRAPHIC_VARIANTS.habitSmall.type,
    formatLabel: (t) => `Type=${t}`,
    render: (t) => graphicImg(habitSmallAsset(t), { w: 50, h: 50 }),
  });

  appendInteractiveSubsection(container, "Onboarding / Splash symbols", {
    states: GRAPHIC_VARIANTS.onboardingHero.name,
    formatLabel: (n) => n,
    render: (name) => h("div", "sdGfxIllu", name),
  });

  appendInteractiveSubsection(container, "Growth", {
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
