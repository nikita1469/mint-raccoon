export interface SelectProps {
  label?: string;
  value: string | null | undefined | boolean;
  placeholder?: string;
  onPress: () => void;
  flex?: number;
  size?: SelectSize;
  variant?: "white" | "transparent";
}

export type SelectSize = "small" | "large";
