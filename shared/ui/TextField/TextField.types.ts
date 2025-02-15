import { ReactNode } from "react";
import { KeyboardTypeOptions } from "react-native";

interface TextFieldProps {
  value: string;
  label?: string;
  editable?: boolean;
  multiline?: boolean;
  onChangeText: (text: string) => void;
  maxLength?: number;
  placeholder: string;
  stateType?: null | "success" | "error";
  helperText?: string;
  search?: boolean;
  width?: number | string;
  phone?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  keyboardType?: KeyboardTypeOptions;
  disabled?: boolean;
  password?: boolean;
  isNumeric?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
}

export type { TextFieldProps };
