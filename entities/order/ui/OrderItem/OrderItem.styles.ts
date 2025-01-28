import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dishContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PALLETE_COLORS.primary,
  },
  orderItemContainer: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 10,
  },
  orderItemInfo: {
    flex: 1,
    gap: 5,
  },
  orderItemPrice: {
    gap: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
