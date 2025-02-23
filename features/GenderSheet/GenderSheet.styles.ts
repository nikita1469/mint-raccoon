import { FONTS } from "@/shared/const/FONTS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pickerWrapper: {
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  pickerText: {
    fontSize: 24,
    color: "white",
    height: 150,
    fontFamily: FONTS.semiBold,
  },
  pickerGenderContainer: {
    width: "100%",
  },
  button: {
    marginBottom: 40,
  },
});
