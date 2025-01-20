import { StyleSheet } from "react-native";
import { ThemeColors } from "@/shared/model/types";

export const createStyles = (themeColors: ThemeColors) => {
  return StyleSheet.create({
    layoutWrapper: {
      flex: 1,
      position: "relative",
      backgroundColor: themeColors.background,
    },
    backgroundImage: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
  });
};
