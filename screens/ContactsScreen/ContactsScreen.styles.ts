import { PALETTE_COLORS } from "@/shared/const";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactsScroll: {
    paddingHorizontal: 18,
    gap: 12,
    paddingBottom: 240,
  },
  image: {
    width: "100%",
    borderRadius: 20,
    maxHeight: 2,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.grey,
  },
  locationsRowContainer: {
    backgroundColor: PALETTE_COLORS.transparent,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  locationsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  location: {
    width: '48%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    aspectRatio: 1.526,
  },
  locationImage: {
    width: "100%",
    height: 95,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.grey,
  },
  carouselContainer: {
    width: "100%",
    height: "24%",
  },
  carouselImage: {
    width: Dimensions.get("window").width - 36,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.grey,
  },
  button: {
    marginTop: 60,
  },
  imageItem: {
    position: "relative",
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  activeDot: {
    backgroundColor: "white"
  }
}); 