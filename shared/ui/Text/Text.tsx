import { FC } from "react";
import { Text as RNText } from "react-native";
import { sizeStyles, fontStyles, colorStyles } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text: FC<TextProps> = ({
  children,
  weight,
  align = "left",
  size = "base",
  font = "regular",
  color = "white",
  style,
}) => {
  return (
    <RNText
      style={[
        size && sizeStyles[size],
        color && colorStyles[color],
        weight && { fontWeight: weight },
        font && fontStyles[font],
        style && style,
        align && { textAlign: align },
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
