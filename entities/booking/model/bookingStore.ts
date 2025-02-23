import { create } from "zustand";
import { BookingState } from "./Booking.types";

const initialState = {
  date: null,
  time: null,
  duration: null,
  tableId: null,
  hallId: null,
};

export const useBookingStore = create<BookingState>((set) => ({
  ...initialState,
  setBookingField: (field, value) => set((state) => ({ ...state, [field]: value })),
  setBookingState: (state: BookingState) => set(state),
  resetBookingForm: () => set(initialState),
}));
