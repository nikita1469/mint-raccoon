import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabsWrapper: {
    marginVertical: 15,
    maxHeight: 40,
    gap: 5,
  },
  tab: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: PALETTE_COLORS.secondary,
  },
  inactiveTab: {
    backgroundColor: PALETTE_COLORS.transparent,
  },
});
