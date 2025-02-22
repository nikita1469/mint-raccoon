import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tablesScroll: {
    marginHorizontal: 20,
    paddingBottom: 60,
  },
  selectFieldsFrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
  },
  tablesSchemaWrapper: {
    gap: 10,
    width: "100%",
    flex: 1,
  },
  tablesSchemaContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.white,
    borderRadius: 15,
    flex: 1,
  },
});
