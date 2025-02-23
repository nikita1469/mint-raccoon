import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet, ViewStyle } from "react-native";
import { SelectSize } from "./Select.types";

export const styles = StyleSheet.create({
  selectWrapper: {
    gap: 5,
  },
  selectField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: PALETTE_COLORS.transparent,
  },
});

export const backgroundStyles = {
  white: {
    backgroundColor: PALETTE_COLORS.white,
  },
  transparent: {
    backgroundColor: PALETTE_COLORS.transparent,
  },
};

export const sizeStyles = {
  small: {
    minHeight: 36,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  large: {
    minHeight: 46,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
};
