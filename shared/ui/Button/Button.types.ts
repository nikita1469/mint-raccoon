import { PALLETE_COLORS } from "@/shared/const";
import { type StyleProp, type ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "large" | "medium" | "small";

export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  textColor?: keyof typeof PALLETE_COLORS.dark;
  disabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}
