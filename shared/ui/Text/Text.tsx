import { FC, ReactNode } from "react";
import { Text as RNText } from "react-native";
import { PaletteColor } from "@/shared/model/types";
import { sizeStyles, fontStyles, colorStyles } from "./Text.styles";

interface TextProps {
  children: ReactNode;
  weight?: 400 | 500 | 700 | 900;
  size?: string;
  font?: string;
  color?: PaletteColor;
  style?: any;
}

const Text: FC<TextProps> = ({
  children,
  weight,
  size = "common",
  font = "regular",
  color = "white",
  style,
}) => {
  return (
    <RNText
      style={[
        size && sizeStyles[size as string],
        color && colorStyles[color],
        weight && { fontWeight: weight },
        font && fontStyles[font],
        style && style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
