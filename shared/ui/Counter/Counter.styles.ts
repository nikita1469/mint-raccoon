import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counterWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  counterButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: PALLETE_COLORS.transparent,
    justifyContent: "center",
    alignItems: "center",
  },
});
