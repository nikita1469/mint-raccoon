import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    width: "80%",
    backgroundColor: '#272727',
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    textAlign: "center",
    marginTop: 10,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 26, 
    color: PALETTE_COLORS.white,
  },
  modalButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    gap: 10
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "48%",
    alignItems: "center"
  },
});
