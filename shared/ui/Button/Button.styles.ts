import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

const baseButton = {
  flexGrow: 1,
  flexDirection: "row" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
};

const SIZES = {
  large: 50,
  medium: 45,
  small: 35,
} as const;

export const styles = StyleSheet.create({
  buttonWrapper: baseButton,
  disabled: {
    backgroundColor: PALETTE_COLORS.grey,
  },
});

export const backgroundStyles = StyleSheet.create({
  primary: {
    backgroundColor: PALETTE_COLORS.primary,
  },
  secondary: {
    backgroundColor: PALETTE_COLORS.secondary,
  },
  outlined: {
    backgroundColor: PALETTE_COLORS.black,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.textTransparent,
  },
  transparent: {
    backgroundColor: PALETTE_COLORS.transparent,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.secondary,
  },
});

export const sizeStyles = StyleSheet.create({
  large: {
    borderRadius: 12,
    flexGrow: 1,
    minHeight: SIZES.large,
    maxHeight: SIZES.large,
  },
  medium: {
    borderRadius: 10,
    flexGrow: 1,
    minHeight: SIZES.medium,
    maxHeight: SIZES.medium,
  },
  small: {
    minWidth: 120,
    borderRadius: 7,
    minHeight: SIZES.small,
    maxHeight: SIZES.small,
    paddingHorizontal: 18,
  },
});
