import { StyleSheet } from "react-native";
import { ThemeColors } from "@/shared/model/types";
import { PALETTE_COLORS } from "@/shared/const";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  drawerContainer: {
    backgroundColor: PALETTE_COLORS.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 300,
    gap: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  modalHandle: {
    width: 32,
    height: 4,
    backgroundColor: PALETTE_COLORS.lightGrey,
    borderRadius: 2,
    marginTop: 15,
  },
});
