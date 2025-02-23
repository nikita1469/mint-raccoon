import React, { FC } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { ArrowIcon } from "../icons";
import Text from "../Text/Text";
import { backgroundStyles, sizeStyles, styles } from "./Select.styles";
import { SelectProps } from "./Select.types";

const Select: FC<SelectProps> = ({
  label,
  value,
  placeholder,
  onPress,
  flex = 1,
  size = "large",
  variant = "white",
}) => {
  return (
    <View style={[styles.selectWrapper, { flex }]}>
      {label && <Text color="textTransparent">{label}</Text>}
      <TouchableOpacity
        style={[styles.selectField, size && sizeStyles[size], variant && backgroundStyles[variant]]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text
          color={variant === "white" ? "grey" : "white"}
          font={variant === "white" ? "semiBold" : "bold"}
        >
          {value || placeholder}
        </Text>
        <ArrowIcon color={variant === "white" ? "grey" : "white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Select;
