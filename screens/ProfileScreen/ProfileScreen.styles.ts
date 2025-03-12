import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileScroll: {
    gap: 15,
    marginHorizontal: 20,
    paddingBottom: 60,
  },
  avatarContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: PALETTE_COLORS.lightGrey,
  },
  deleteButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 20,
    width: 20,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: PALETTE_COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },
  fieldWrapper: {
    marginVertical: 10,
    flexDirection: "row",
  },
  logoutContainer: {
    gap: 12,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: PALETTE_COLORS.white,
  },
});
