import { PALLETE_COLORS } from "@/shared/const/PALLETE_COLORS";
import { StyleSheet, View } from "react-native";

export const styles = StyleSheet.create({
  menuItemWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  itemImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  likeButton: {
    position: "absolute",
    bottom: 22,
    right: 22,
  },
  descriptionWrapper: {
    height: "60%",
    backgroundColor: PALLETE_COLORS.dark.background,
    position: "relative",
  },
  descriptionContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonsContainer: {
    height: 100,
    flexDirection: "row",
    gap: 10,
    backgroundColor: PALLETE_COLORS.dark.transparent,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconButton: {
    height: 50,
    width: 50,
    borderRadius: 12,
    backgroundColor: PALLETE_COLORS.dark.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
