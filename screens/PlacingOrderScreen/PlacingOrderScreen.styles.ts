import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderScroll: {
    paddingHorizontal: 20,
  },
  orderInfoContainer: {
    backgroundColor: PALLETE_COLORS.dark.transparent,
    padding: 10,
    borderRadius: 5,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 10,
  },
  orderTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  orderRowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
