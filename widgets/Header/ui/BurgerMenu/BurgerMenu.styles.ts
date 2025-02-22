import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  burgerMenuWrapper: {
    flex: 1,
    backgroundColor: PALETTE_COLORS.background,
    alignItems: "center",
    gap: 60,
  },
  logo: {
    width: 180,
    height: 100,
    marginBottom: 20,
  },
  burgerMenuItems: {
    gap: 30,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    right: 15,
    zIndex: 1,
  },
});
