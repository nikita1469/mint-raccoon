import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fieldWrapper: {
    gap: 8,
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 30,
    color: PALLETE_COLORS.white,
    paddingHorizontal: 0,
    fontSize: 16,
  },
  disabledField: {
    opacity: 0.7,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeButton: {
    position: "absolute",
    right: 0,
    padding: 5,
  },
  label: {
    width: 140,
  },
});
