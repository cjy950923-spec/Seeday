/**
 * Shadow tokens (Figma — Shadow 01 / 02, separate from fill colors).
 */

export const shadow = {
  "01": "0 2px 6px 0 #0000001A",
  "02": "0 0 5px 0 #00000026",
} as const;

export type Shadow = typeof shadow;
