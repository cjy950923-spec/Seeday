/**
 * Primary + semantic color tokens (Figma Color — orange, error, accent).
 */

export const colorPrimary = {
  default: "#FF9528",
  surface: "#FFCA93",
  disabled: "#FFF0E1",
  ghost: "#FFF3E9",
} as const;

export type ColorPrimary = typeof colorPrimary;

export const colorSemantic = {
  error: "#FF3B30",
  accent: "#FE6449",
} as const;

export type ColorSemantic = typeof colorSemantic;
