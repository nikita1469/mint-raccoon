import { PALLETE_COLORS } from "@/shared/const/PALLETE_COLORS";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const PADDING = 20;
export const CARD_GAP = 10;
const CARD_WIDTH = (width - PADDING * 2 - CARD_GAP) / 2;

export const styles = StyleSheet.create({
  dishContainer: {
    width: CARD_WIDTH - 32,
    height: CARD_WIDTH - 32,
    backgroundColor: PALLETE_COLORS.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  likeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  infoContainer: {
    height: 85,
    gap: 5,
    marginBottom: 5,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addToCartContainer: {
    gap: "18%",
    backgroundColor: PALLETE_COLORS.white,
    borderRadius: 25,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
