import React, { FC } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { ArrowIcon } from "../icons";
import Text from "../Text/Text";
import { styles } from "./Select.styles";

const Select: FC<{
  label: string;
  value: string;
  onPress: () => void;
}> = ({ label, value, onPress }) => {
  return (
    <View style={styles.selectWrapper}>
      <Text color="textTransparent">{label}</Text>
      <TouchableOpacity
        style={styles.selectField}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text color="white" font="bold">
          {value}
        </Text>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Select;
