import { PALLETE_COLORS } from "../const";

export interface IconProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export type Theme = keyof typeof PALLETE_COLORS;
export type ThemeColors = (typeof PALLETE_COLORS)[Theme];
export type PaletteColor =
  (typeof PALLETE_COLORS)[keyof typeof PALLETE_COLORS][keyof typeof PALLETE_COLORS.light];
