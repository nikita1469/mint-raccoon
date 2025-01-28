import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tablesScroll: {
    marginHorizontal: 20,
    marginBottom: 60,
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
    borderColor: PALLETE_COLORS.white,
    borderRadius: 15,
    flex: 1,
  },
});
