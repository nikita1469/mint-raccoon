import { StyleSheet } from "react-native";
import { PALETTE_COLORS } from "@/shared/const";

export const styles = StyleSheet.create({
  bookingScroll: {
    paddingHorizontal: 20,
    gap: 15,
    paddingBottom: 56,
  },
  bookingImageWrapper: {
    position: "relative",
  },
  bookingImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.grey,
  },
  bookingRowContainer: {
    backgroundColor: PALETTE_COLORS.transparent,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bookingOrderTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingOrderStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
