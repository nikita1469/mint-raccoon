import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderScroll: {
    flex: 1,
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
    borderWidth: 1,
    borderColor: PALLETE_COLORS.dark.white,
    borderRadius: 15,
    flex: 1,
  },
});
