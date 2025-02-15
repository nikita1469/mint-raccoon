import { StyleSheet } from "react-native";
import { PALETTE_COLORS } from "@/shared/const";
export const styles = StyleSheet.create({
  textFieldWrapper: {
    gap: 12,
  },
  textFieldContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PALETTE_COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  multiline: {
    height: 150,
    alignItems: "flex-start",
  },
  textField: {
    flex: 1,
    color: PALETTE_COLORS.black,
    fontSize: 14,
    paddingRight: 20,
    paddingTop: 12,
    maxHeight: 46,
  },
});
