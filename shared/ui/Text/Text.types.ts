import { sizeStyles } from "./Text.styles";
import { colorStyles } from "./Text.styles";
import { fontStyles } from "./Text.styles";

import { ReactNode } from "react";

type TextSize = keyof typeof sizeStyles;
type TextColor = keyof typeof colorStyles;
type TextFont = keyof typeof fontStyles;

export interface TextProps {
  children: ReactNode;
  weight?: 400 | 500 | 700 | 900;
  size?: TextSize;
  font?: TextFont;
  color?: TextColor;
  style?: any;
  align?: "left" | "center" | "right";
}
