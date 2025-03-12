import { PALETTE_COLORS } from "@/shared/const";
import { FONTS } from "@/shared/const/FONTS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tablesScroll: {
    marginHorizontal: 20,
    paddingBottom: 56,
  },
  layout: {
    height: "80%",
  },
  selectFieldsFrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 6,
  },
  tablesSchemaWrapper: {
    gap: 10,
  },
  tablesSchemaContainer: {
    borderWidth: 1,
    borderColor: PALETTE_COLORS.white,
    borderRadius: 20,
    paddingRight: 14,
  },
  raccoonSchemaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  homeScreenContent: {
    width: "100%",
  },
  homeScreenHeader: {
    width: "100%",
    alignItems: "center",
  },
  homeScreenText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONTS.regular,
  },
});
