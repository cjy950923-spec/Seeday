/**
 * Icon tokens — Figma Icon section (node 46:322)
 *
 * 아이콘은 독립 컴포넌트로도 쓰이지만, 다른 컴포넌트를 구성하는 "토큰"으로도 재사용된다.
 * 이 파일은 색/사이즈/스트로크/에셋 경로를 한 곳에 모아, 구현체가 바뀌어도 소비 측을 안정화한다.
 */

export const iconColor = {
  ink: "var(--icon-color-ink)",
  muted: "var(--icon-color-muted)",
  primary: "var(--icon-color-primary)",
} as const;

export type IconColor = typeof iconColor;

export const iconSize = {
  plus: "var(--icon-size-plus)",
  medium: "var(--icon-size-medium)",
  large: "var(--icon-size-large)",
  camera: "var(--icon-size-camera)",
  coachMark: "var(--icon-size-coach-mark)",
  null: "var(--icon-size-null)",
  score: "var(--icon-size-score)",
} as const;

export type IconSize = typeof iconSize;

export const iconStroke = {
  arrow: "var(--icon-stroke-arrow)",
  check: "var(--icon-stroke-check)",
  plus: "var(--icon-stroke-plus)",
} as const;

export type IconStroke = typeof iconStroke;

/**
 * Local icon assets produced from Figma Dev Mode MCP.
 * - rule: 이 경로들은 번들러 없이도 (python http.server) 동작해야 한다.
 * - 따라서 "문자열 경로"로 제공하고, 소비측에서 `new URL(path, import.meta.url)`로 풀어쓴다.
 */
export const iconAssets = {
  // Arrow — full-node SVG exports (1:1)
  arrowLeftLarge: "assets/figma-icons/arrow-left-large-export.svg",
  arrowLeftMedium: "assets/figma-icons/arrow-left-medium-export.svg",
  arrowRightLarge: "assets/figma-icons/arrow-right-large-export.svg",
  arrowRightMedium: "assets/figma-icons/arrow-right-medium-export.svg",
  arrowUpLarge: "assets/figma-icons/arrow-up-large-export.svg",
  arrowUpMedium: "assets/figma-icons/arrow-up-medium-export.svg",
  arrowDownLarge: "assets/figma-icons/arrow-down-large-export.svg",
  arrowDownMedium: "assets/figma-icons/arrow-down-medium-export.svg",

  // Check — full-node SVG exports (1:1) — state true/false
  checkFalseExport: "assets/figma-icons/check-false-export.svg",
  checkTrueExport: "assets/figma-icons/check-true-export.svg",

  // Calendar mark — full-node SVG exports (1:1) — type/state
  calendarMarkHabitOn: "assets/figma-icons/calendar-mark-habit-on-export.svg",
  calendarMarkHabitOff: "assets/figma-icons/calendar-mark-habit-off-export.svg",
  calendarMarkFitnessOn: "assets/figma-icons/calendar-mark-fitness-on-export.svg",
  calendarMarkFitnessOff: "assets/figma-icons/calendar-mark-fitness-off-export.svg",
  calendarMarkDailyOn: "assets/figma-icons/calendar-mark-daily-on-export.svg",
  calendarMarkDailyOff: "assets/figma-icons/calendar-mark-daily-off-export.svg",

  // Notics Icon — full-node SVG exports (1:1)
  noticsHabit: "assets/figma-icons/notics-habit-export.svg",
  noticsDaily: "assets/figma-icons/notics-daily-export.svg",
  noticsFitness: "assets/figma-icons/notics-fitness-export.svg",
  noticsProject: "assets/figma-icons/notics-project-export.svg",

  // Filter Button Icon (24×24) — full-node SVG exports
  filterHabitOn: "assets/figma-icons/filter-habit-on-export.svg",
  filterHabitOff: "assets/figma-icons/filter-habit-off-export.svg",
  filterFitnessOn: "assets/figma-icons/filter-fitness-on-export.svg",
  filterFitnessOff: "assets/figma-icons/filter-fitness-off-export.svg",
  filterDailyOn: "assets/figma-icons/filter-daily-on-export.svg",
  filterDailyOff: "assets/figma-icons/filter-daily-off-export.svg",
  filterScheduleOn: "assets/figma-icons/filter-schedule-on-export.svg",
  filterScheduleOff: "assets/figma-icons/filter-schedule-off-export.svg",
  filterAllOn: "assets/figma-icons/filter-all-on-export.svg",
  filterAllOff: "assets/figma-icons/filter-all-off-export.svg",

  // SNS Icon — full-node SVG exports (1:1)
  snsKakao: "assets/figma-icons/sns-kakao-export.svg",
  snsApple: "assets/figma-icons/sns-apple-export.svg",

  // Onboarding (30×30) — full-node SVG exports (1:1)
  onboardingRecord: "assets/figma-icons/onboarding-record.svg",
  onboardingNickname: "assets/figma-icons/onboarding-nickname.svg",
  onboardingBirthday: "assets/figma-icons/onboarding-birthday.svg",
  onboardingGoal: "assets/figma-icons/onboarding-goal.svg",
  onboardingNotification: "assets/figma-icons/onboarding-notification.svg",

  // Null Icon (40×40)
  nullIcon: "assets/figma-icons/null-icon-export.svg",

  // Result Score (50×50) — Achievement rate / Success / Total
  resultScoreAchievementRate: "assets/figma-icons/result-score-achievement-rate-export.svg",
  resultScoreSuccess: "assets/figma-icons/result-score-success-export.svg",
  resultScoreTotal: "assets/figma-icons/result-score-total-export.svg",

  // Field assets (raster) — used by Field components
  fieldCloseCircle: "assets/figma-icons/field-close-circle.png",
  daycellDotDefault: "assets/figma-icons/daycell-dot-default.png",
  daycellDotHighlight: "assets/figma-icons/daycell-dot-highlight.png",

  // Misc icons (24×24 unless noted)
  setting: "assets/figma-icons/setting-export.svg",
  notification: "assets/figma-icons/notification-export.svg",
  close: "assets/figma-icons/close-export.svg",
  checkSmall: "assets/figma-icons/check-small-export.svg", // 20×20
  fillArrowDown: "assets/figma-icons/fill-arrow-down-export.svg",
  palette: "assets/figma-icons/palette-export.svg",
  article: "assets/figma-icons/article-export.svg",
  calendar: "assets/figma-icons/calendar-export.svg",
  repeat: "assets/figma-icons/repeat-export.svg",
  compass: "assets/figma-icons/compass-export.svg",
  pin: "assets/figma-icons/pin-export.svg",
  trash: "assets/figma-icons/trash-export.svg",

  // History (composed: ring + hand)
  historyRing: "assets/figma-icons/history-export.svg",
  historyHand: "assets/figma-icons/history-export.svg",
  historyExport: "assets/figma-icons/history-export.svg",

  // 30×30 / 36×36 / 20×20 icons
  camera: "assets/figma-icons/camera-export.svg", // 30×30
  image: "assets/figma-icons/image-export.svg", // 30×30
  coachMarkClose: "assets/figma-icons/coach-mark-close-export.svg", // 36×36
  more: "assets/figma-icons/more-export.svg", // 20×20 (exported full node)
  moreExport: "assets/figma-icons/more-export.svg", // backward compat
} as const;

export type IconAssets = typeof iconAssets;

