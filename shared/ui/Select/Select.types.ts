export interface SelectProps {
  label?: string;
  value: string;
  placeholder?: string;
  onPress: () => void;
  flex?: number;
  size?: SelectSize;
  variant?: "white" | "transparent";
}

export type SelectSize = "small" | "large";
