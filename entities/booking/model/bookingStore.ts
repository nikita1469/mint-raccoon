import { create } from "zustand";

interface BookingState {
  date: string | null;
  time: string | null;
  duration: number | null;
  tableId: number | null;
  hallId: string | null;
  updateField: <
    K extends keyof Omit<BookingState, "updateField" | "resetForm">
  >(
    field: K,
    value: BookingState[K]
  ) => void;
  resetForm: () => void;
}

const initialState = {
  date: null,
  time: null,
  duration: null,
  tableId: null,
  hallId: null,
};

export const useBookingStore = create<BookingState>((set) => ({
  ...initialState,
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),
  resetForm: () => set(initialState),
}));
