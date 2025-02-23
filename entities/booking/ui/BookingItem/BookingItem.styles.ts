import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bookingImageContainer: {
    flexDirection: "row",
    gap: 15,
  },
  bookingImage: {
    width: 84,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  bookingInfo: {
    gap: 5,
    flex: 1,
  },
  bookingButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
