import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoText: {
    marginBottom: 10,
  },
  fieldsWrapper: {
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "stretch",
    marginHorizontal: 38,
    gap: 10,
  },
  fieldsRow: {
    flexDirection: "row",
    gap: 10,
  },
  imagePicker: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    borderRadius: 10,
    backgroundColor: PALETTE_COLORS.white,
  },
  button: {
    marginTop: 5,
  },
});
