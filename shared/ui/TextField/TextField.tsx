import { FC, memo, ReactNode } from "react";
import { View, TextInput } from "react-native";
import { PaletteColor } from "@/shared/model/types";
import Text from "../Text/Text";
import ExclaimIcon from "../icons/ExclaimIcon";
import SearchIcon from "../icons/SearchIcon";
import SuccessIcon from "../icons/SuccessIcon";
import { createStyles, sizeStyles } from "./TextField.styles";
import { PALLETE_COLORS } from "@/shared/const";

interface TextFieldProps {
  value: string;
  label?: string;
  editable?: boolean;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
  stateType?: null | "success" | "error";
  helperText?: string;
  phone?: boolean;
  width?: number | string;
  keyboardType?: "numeric" | "default";
  backgroundColor: PaletteColor;
  startIcon?: ReactNode;
  size?: "small" | "medium";
}

const TextField: FC<TextFieldProps> = ({
  value,
  label,
  editable = true,
  multiline = false,
  onChangeText,
  placeholder,
  stateType = null,
  helperText,
  phone = false,
  width = "100%",
  backgroundColor,
  startIcon,
  size = "medium",
}) => {
  const styles = createStyles(PALLETE_COLORS.dark);

  return (
    /* @ts-ignore */
    <View style={styles.textFieldWrapper}>
      {label && (
        <Text size="normal" weight={500} color={themeColors.textPrimary}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.textFieldContainer,
          { backgroundColor },
          sizeStyles[size],
          multiline && styles.multiline,
        ]}
      >
        {startIcon ?? null}
        <TextInput
          style={styles.textField}
          maxLength={phone ? 10 : undefined}
          value={phone ? value.replace(/[^0-9]/g, "") : value}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={themeColors.lightGrey}
          onChangeText={onChangeText}
          multiline={multiline}
          keyboardType={phone ? "numeric" : "default"}
          textContentType={phone ? "telephoneNumber" : undefined}
        />
      </View>
      {helperText && (
        <Text color={themeColors.textSecondary}>{helperText}</Text>
      )}
    </View>
  );
};

export default TextField;
