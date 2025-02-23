export interface Booking {
  id: number;
  date: string;
  date_start: string;
  date_finish: string;
  table_number: number;
  deposit_amount: number;
  user_id: number;
}

export interface BookingState {
  date: string | null;
  time: string | null;
  duration: number | null;
  tableId: number | null;
  hallId: string | null;
  setBookingState: (state: BookingState) => void;
  setBookingField: <K extends keyof Omit<BookingState, "setBookingField" | "resetBookingForm">>(
    field: K,
    value: BookingState[K]
  ) => void;
  resetBookingForm: () => void;
}

export interface BookingHall {
  id: number;
  name: string;
  url: string;
}

export interface BookingTable {
  id: number;
  hall: {
    id: number;
    name: string;
    photo_id: number;
  };
  table: {
    id: number;
    number: number;
    seats: number;
    status: string;
  };
}
