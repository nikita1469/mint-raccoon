import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hallsListWrapper: {
    width: "100%",
    gap: 5,
  },
  hallsList: {
    width: "100%",
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  hallItem: {
    borderRadius: 5,
    overflow: "hidden",
    flex: 1,
    minWidth: "45%",
    borderColor: PALETTE_COLORS.transparent,
  },
  hallItemInactive: {
    borderWidth: 1,
    borderColor: PALETTE_COLORS.primary,
  },
  gradient: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  gradientInactive: {
    paddingVertical: 4,
    paddingHorizontal: 11,
  },
});
