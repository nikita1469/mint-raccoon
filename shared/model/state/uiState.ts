import { create } from "zustand";

type UIState = {
  showBottomSheet: "date" | null;
  setShowBottomSheet: (sheet: "date" | null) => void;
};

export const useUIStore = create<UIState>((set) => ({
  showBottomSheet: null,
  setShowBottomSheet: (sheet) => set({ showBottomSheet: sheet }),
}));
