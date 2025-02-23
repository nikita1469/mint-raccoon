import { FC } from "react";
import { Text as RNText } from "react-native";
import { sizeStyles, fontStyles, colorStyles } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text: FC<TextProps> = ({
  children,
  onPress,
  weight,
  align = "left",
  size = "base",
  font = "regular",
  color = "white",
  style,
  underline,
}) => {
  return (
    <RNText
      onPress={onPress}
      style={[
        size && sizeStyles[size],
        color && colorStyles[color],
        weight && { fontWeight: weight },
        font && fontStyles[font],
        style && style,
        align && { textAlign: align },
        underline && { textDecorationLine: "underline" },
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
