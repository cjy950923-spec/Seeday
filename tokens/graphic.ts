/**
 * Graphic tokens — exported as whole-node PNGs from Figma.
 *
 * Rule:
 * - 번들러 없이도 (python http.server) 동작해야 한다.
 * - 따라서 "문자열 경로"로 제공하고, 소비측에서 `new URL(path, import.meta.url)`로 풀어쓴다.
 */

export const graphicAssets = {
  /**
   * Profile/Record — node 553:350
   * Variants: 일상 / 운동 / 일정 / 습관
   */
  profileRecordDaily: "assets/figma-graphics/profile-record-daily.svg",
  profileRecordFitness: "assets/figma-graphics/profile-record-fitness.svg",
  profileRecordSchedule: "assets/figma-graphics/profile-record-schedule.svg",
  profileRecordHabit: "assets/figma-graphics/profile-record-habit.svg",

  /**
   * Profile/Goal — node 555:8577
   * Variants: 쌔싹 / 묘목 / 나무
   */
  profileGoalSprout: "assets/figma-graphics/profile-goal-sprout.svg",
  profileGoalSeedling: "assets/figma-graphics/profile-goal-seedling.svg",
  profileGoalTree: "assets/figma-graphics/profile-goal-tree.svg",

  /**
   * Fitness Record Mark — node 1043:62373
   * Variants: 운동 시간 / 몸무게 / 걸음 수
   */
  fitnessMarkTime: "assets/figma-graphics/fitness-mark-time.svg",
  fitnessMarkWeight: "assets/figma-graphics/fitness-mark-weight.svg",
  fitnessMarkSteps: "assets/figma-graphics/fitness-mark-steps.svg",

  /**
   * Emotion_Large / Emotion_Small — whole-node exports
   * Filenames: emotion-(large|small)-<slug>.png
   */
  emotionLargeNormal: "assets/figma-graphics/emotion-large-normal.svg",
  emotionLargeHappy: "assets/figma-graphics/emotion-large-happy.svg",
  emotionLargeTired: "assets/figma-graphics/emotion-large-tired.svg",
  emotionLargeCalm: "assets/figma-graphics/emotion-large-calm.svg",
  emotionLargeSad: "assets/figma-graphics/emotion-large-sad.svg",
  emotionLargeAngry: "assets/figma-graphics/emotion-large-angry.svg",
  emotionLargeSurprised: "assets/figma-graphics/emotion-large-surprised.svg",
  emotionLargeLove: "assets/figma-graphics/emotion-large-love.svg",
  emotionLargeJoy: "assets/figma-graphics/emotion-large-joy.svg",

  emotionSmallNormal: "assets/figma-graphics/emotion-small-normal.svg",
  emotionSmallHappy: "assets/figma-graphics/emotion-small-happy.svg",
  emotionSmallTired: "assets/figma-graphics/emotion-small-tired.svg",
  emotionSmallCalm: "assets/figma-graphics/emotion-small-calm.svg",
  emotionSmallSad: "assets/figma-graphics/emotion-small-sad.svg",
  emotionSmallAngry: "assets/figma-graphics/emotion-small-angry.svg",
  emotionSmallSurprised: "assets/figma-graphics/emotion-small-surprised.svg",
  emotionSmallLove: "assets/figma-graphics/emotion-small-love.svg",
  emotionSmallJoy: "assets/figma-graphics/emotion-small-joy.svg",

  /**
   * Fitness_Large / Fitness_Small — whole-node exports
   * Filenames: fitness-(large|small)-<slug>.png
   */
  fitnessLargeRunning: "assets/figma-graphics/fitness-large-running.svg",
  fitnessLargeWeightTraining: "assets/figma-graphics/fitness-large-weight-training.svg",
  fitnessLargeBaseball: "assets/figma-graphics/fitness-large-baseball.svg",
  fitnessLargeTennis: "assets/figma-graphics/fitness-large-tennis.svg",
  fitnessLargeBasketball: "assets/figma-graphics/fitness-large-basketball.svg",
  fitnessLargeGolf: "assets/figma-graphics/fitness-large-golf.svg",
  fitnessLargeSoccer: "assets/figma-graphics/fitness-large-soccer.svg",
  fitnessLargeSwimming: "assets/figma-graphics/fitness-large-swimming.svg",
  fitnessLargeCycling: "assets/figma-graphics/fitness-large-cycling.svg",
  fitnessLargeYoga: "assets/figma-graphics/fitness-large-yoga.svg",

  fitnessSmallRunning: "assets/figma-graphics/fitness-small-running.svg",
  fitnessSmallWeightTraining: "assets/figma-graphics/fitness-small-weight-training.svg",
  fitnessSmallBaseball: "assets/figma-graphics/fitness-small-baseball.svg",
  fitnessSmallTennis: "assets/figma-graphics/fitness-small-tennis.svg",
  fitnessSmallBasketball: "assets/figma-graphics/fitness-small-basketball.svg",
  fitnessSmallGolf: "assets/figma-graphics/fitness-small-golf.svg",
  fitnessSmallSoccer: "assets/figma-graphics/fitness-small-soccer.svg",
  fitnessSmallSwimming: "assets/figma-graphics/fitness-small-swimming.svg",
  fitnessSmallCycling: "assets/figma-graphics/fitness-small-cycling.svg",
  fitnessSmallYoga: "assets/figma-graphics/fitness-small-yoga.svg",

  /**
   * Habit_Large / Habit_Small — whole-node exports
   * Filenames: habit-(large|small)-<slug>.png
   */
  habitLargeDrinkWater: "assets/figma-graphics/habit-large-drink-water.svg",
  habitLargeWalk: "assets/figma-graphics/habit-large-walk.svg",
  habitLargeReading: "assets/figma-graphics/habit-large-reading.svg",
  habitLargeSaving: "assets/figma-graphics/habit-large-saving.svg",
  habitLargeNoAlcohol: "assets/figma-graphics/habit-large-no-alcohol.svg",
  habitLargeNoSmoking: "assets/figma-graphics/habit-large-no-smoking.svg",
  habitLargeTakeMeds: "assets/figma-graphics/habit-large-take-meds.svg",
  habitLargeWakeUpEarly: "assets/figma-graphics/habit-large-wake-up-early.svg",
  habitLargeStretching: "assets/figma-graphics/habit-large-stretching.svg",
  habitLargeWorkout: "assets/figma-graphics/habit-large-workout.svg",

  habitSmallDrinkWater: "assets/figma-graphics/habit-small-drink-water.svg",
  habitSmallWalk: "assets/figma-graphics/habit-small-walk.svg",
  habitSmallReading: "assets/figma-graphics/habit-small-reading.svg",
  habitSmallSaving: "assets/figma-graphics/habit-small-saving.svg",
  habitSmallNoAlcohol: "assets/figma-graphics/habit-small-no-alcohol.svg",
  habitSmallNoSmoking: "assets/figma-graphics/habit-small-no-smoking.svg",
  habitSmallTakeMeds: "assets/figma-graphics/habit-small-take-meds.svg",
  habitSmallWakeUpEarly: "assets/figma-graphics/habit-small-wake-up-early.svg",
  habitSmallStretching: "assets/figma-graphics/habit-small-stretching.svg",
  habitSmallWorkout: "assets/figma-graphics/habit-small-workout.svg",

  /**
   * 792:4702 — whole-node export (Small)
   * Export filename: 792-4702.svg
   */
  g7924702: "assets/figma-graphics/792-4702.svg",

  /**
   * 734:19353 — whole-node export (Large)
   * Export filename: 734-19353.svg
   */
  g73419353: "assets/figma-graphics/734-19353.svg",

  /**
   * 1019:10549 — whole-node export
   * Export filename: 1019-10549.png
   */
  g101910549: "assets/figma-graphics/1019-10549.svg",

  /**
   * 1019:24416 — whole-node export
   * Export filename: 1019-24416.png
   */
  g101924416: "assets/figma-graphics/1019-24416.svg",

  /**
   * 1268:76105 — whole-node export
   * Export filename: 1268-76105.png
   */
  g126876105: "assets/figma-graphics/1268-76105.svg",

  /**
   * 1268:77398 — whole-node export
   * Export filename: 1268-77398.png
   */
  g126877398: "assets/figma-graphics/1268-77398.svg",
} as const;

export type GraphicAssets = typeof graphicAssets;

