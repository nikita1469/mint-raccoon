import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  blurViewWrapper: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: PALLETE_COLORS.alternate,
    overflow: "hidden",
  },
  blurView: {
    width: "100%",
    padding: 15,
    alignItems: "stretch",
  },
});
