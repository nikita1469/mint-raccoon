import { create } from "zustand";

type UIState = {
  showBottomSheet: "date" | "time" | null;
  onSelectValue?: (value: Date) => void;
  setShowBottomSheet: (
    sheet: "date" | "time" | null,
    onSelect?: (value: Date) => void
  ) => void;
};

export const useUIStore = create<UIState>((set) => ({
  showBottomSheet: null,
  onSelectValue: undefined,
  setShowBottomSheet: (sheet, onSelect) =>
    set({ showBottomSheet: sheet, onSelectValue: onSelect }),
}));
