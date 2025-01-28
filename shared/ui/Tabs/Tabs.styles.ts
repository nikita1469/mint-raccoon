import { PALLETE_COLORS } from "@/shared/const/PALLETE_COLORS";
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
    backgroundColor: PALLETE_COLORS.secondary,
  },
  inactiveTab: {
    backgroundColor: PALLETE_COLORS.transparent,
  },
});
