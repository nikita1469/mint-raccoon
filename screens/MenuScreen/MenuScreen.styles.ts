import { PALLETE_COLORS } from "@/shared/const";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const PADDING = 20;
export const CARD_GAP = 10;
const CARD_WIDTH = (width - PADDING * 2 - CARD_GAP) / 2; // Ширина карточки с учетом отступа между ними

export const styles = StyleSheet.create({
  filtersWrapper: {
    paddingHorizontal: PADDING,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortButton: {
    backgroundColor: PALLETE_COLORS.dark.transparent,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
