import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  codeFieldWrapper: {
    marginTop: 15,
    gap: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  confirmationText: {
    width: "70%",
  },
  codeField: {
    alignItems: "center",
    gap: 15,
    height: 49,
  },

  cell: {
    width: 40,
    height: 45,
    borderRadius: 8,
    backgroundColor: PALETTE_COLORS.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  focusCell: {
    width: 44,
    height: 49,
    borderWidth: 2,
    borderColor: PALETTE_COLORS.secondary,
  },
  cellText: {
    fontSize: 24,
  },
  resendCodeText: {
    width: 190,
  },
  loadingWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
