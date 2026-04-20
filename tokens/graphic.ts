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
  profileRecordDaily: "assets/figma-graphics/profile-record-daily.png",
  profileRecordFitness: "assets/figma-graphics/profile-record-fitness.png",
  profileRecordSchedule: "assets/figma-graphics/profile-record-schedule.png",
  profileRecordHabit: "assets/figma-graphics/profile-record-habit.png",

  /**
   * Profile/Goal — node 555:8577
   * Variants: 쌔싹 / 묘목 / 나무
   */
  profileGoalSprout: "assets/figma-graphics/profile-goal-sprout.png",
  profileGoalSeedling: "assets/figma-graphics/profile-goal-seedling.png",
  profileGoalTree: "assets/figma-graphics/profile-goal-tree.png",

  /**
   * Fitness Record Mark — node 1043:62373
   * Variants: 운동 시간 / 몸무게 / 걸음 수
   */
  fitnessMarkTime: "assets/figma-graphics/fitness-mark-time.png",
  fitnessMarkWeight: "assets/figma-graphics/fitness-mark-weight.png",
  fitnessMarkSteps: "assets/figma-graphics/fitness-mark-steps.png",
} as const;

export type GraphicAssets = typeof graphicAssets;

