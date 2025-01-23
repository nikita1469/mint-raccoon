import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  blurViewWrapper: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: PALLETE_COLORS.dark.alternate,
    overflow: "hidden",
  },
  blurView: {
    flex: 1,
    width: "100%",
    padding: 15,
    alignItems: "stretch",
  },
});
