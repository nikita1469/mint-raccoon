import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  selectWrapper: {
    flex: 1,
    gap: 5,
  },
  selectField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: PALETTE_COLORS.transparent,
    minHeight: 36,
    padding: 8,
  },
});
