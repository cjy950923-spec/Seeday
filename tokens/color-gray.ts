/**
 * Gray scale tokens (Figma Color — fill only; white excludes guide stroke).
 */

export const colorGray = {
  900: "#212121",
  800: "#424242",
  700: "#616161",
  600: "#757575",
  500: "#9E9E9E",
  400: "#BDBDBD",
  300: "#E0E0E0",
  200: "#EEEEEE",
  100: "#F5F5F5",
  50: "#FAFAFA",
  white: "#FFFFFF",
} as const;

export type ColorGray = typeof colorGray;
