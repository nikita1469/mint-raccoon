import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orderFormWrapper: {
    flex: 1,
    margin: 20,
    marginBottom: 60,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: PALLETE_COLORS.dark.alternate,
    overflow: "hidden",
  },
});
