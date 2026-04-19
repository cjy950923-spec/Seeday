/**
 * Typography tokens — Figma `Type` 프레임 **45:64**
 * https://www.figma.com/design/j0r11Ts2NxR6wiuOQKR7Xz/Seeds-The-Day-Project---Seeday?node-id=45-64
 *
 * 행간은 보드에서 **행간 150%** / **행간 120%** 두 구역으로 구분됩니다. (노드 45:67, 721:4125)
 * MCP Font 스펙: 대부분 `lineHeight: 1.5`, P/10/Medium 만 `lineHeight: 1.2`.
 */

export const fontFamily = {
  sans: '"Pretendard", system-ui, sans-serif',
} as const;

/** Figma Type(45:64)에서 정의한 행간 그룹 — 재사용·문서용 */
export const typoLeading = {
  /** 행간 150% — P/22 ~ P/12 전 구간 */
  percent150: {
    label: "150%",
    percent: 150,
    lineHeight: 1.5,
  },
  /** 행간 120% — P/10/Medium 구간 (y≈654 행) */
  percent120: {
    label: "120%",
    percent: 120,
    lineHeight: 1.2,
  },
} as const;

export type TypoStyle = {
  fontSize: number;
  fontWeight: number;
  /** 행간 배수 (CSS `line-height` 와 동일) */
  lineHeight: number;
  /** Figma 보드 기준 행간 퍼센트 (150 | 120) */
  lineHeightPercent: 120 | 150;
  /** 행간 환산 높이(px) — `fontSize * lineHeight` */
  lineHeightPx: number;
  letterSpacing: number;
};

const L150 = { lineHeight: typoLeading.percent150.lineHeight, lineHeightPercent: 150 as const };
const L120 = { lineHeight: typoLeading.percent120.lineHeight, lineHeightPercent: 120 as const };

export const typo: Record<string, TypoStyle> = {
  "22-700": { fontSize: 22, fontWeight: 700, ...L150, lineHeightPx: 33, letterSpacing: 0 },
  "20-600": { fontSize: 20, fontWeight: 600, ...L150, lineHeightPx: 30, letterSpacing: 0 },
  "20-700": { fontSize: 20, fontWeight: 700, ...L150, lineHeightPx: 30, letterSpacing: 0 },
  "18-500": { fontSize: 18, fontWeight: 500, ...L150, lineHeightPx: 27, letterSpacing: 0 },
  "18-600": { fontSize: 18, fontWeight: 600, ...L150, lineHeightPx: 27, letterSpacing: 0 },
  "16-500": { fontSize: 16, fontWeight: 500, ...L150, lineHeightPx: 24, letterSpacing: 0 },
  "16-600": { fontSize: 16, fontWeight: 600, ...L150, lineHeightPx: 24, letterSpacing: 0 },
  "16-400": { fontSize: 16, fontWeight: 400, ...L150, lineHeightPx: 24, letterSpacing: 0 },
  "14-500": { fontSize: 14, fontWeight: 500, ...L150, lineHeightPx: 21, letterSpacing: 0 },
  "14-600": { fontSize: 14, fontWeight: 600, ...L150, lineHeightPx: 21, letterSpacing: 0 },
  "14-400": { fontSize: 14, fontWeight: 400, ...L150, lineHeightPx: 21, letterSpacing: 0 },
  "12-500": { fontSize: 12, fontWeight: 500, ...L150, lineHeightPx: 18, letterSpacing: 0 },
  "12-400": { fontSize: 12, fontWeight: 400, ...L150, lineHeightPx: 18, letterSpacing: 0 },
  "10-500": { fontSize: 10, fontWeight: 500, ...L120, lineHeightPx: 12, letterSpacing: 0 },
};

export type Typo = typeof typo;
