import { FONTS } from "@/shared/const/FONTS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pickerWrapper: {
    height: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerDayContainer: {
    width: 90,
  },
  pickerMonthContainer: {
    width: 170,
  },
  pickerYearContainer: {
    width: 120,
  },
  pickerText: {
    fontSize: 24,
    color: "white",
    height: 150,
    fontFamily: FONTS.semiBold,
  },
  timeColonDivider: {
    fontSize: 24,
    marginTop: 10,
  },
  button: {
    marginBottom: 40,
  },
});
