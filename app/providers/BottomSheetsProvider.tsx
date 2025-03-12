import React, { Fragment } from "react";

import { DatePicker } from "@/widgets";
import { useUIStore } from "@/shared/model/state/uiState";
import { useBookingStore } from "@/entities/booking/model/bookingStore";
import { BookingState } from "@/entities/booking/model/Booking.types";

const BottomSheetsProvider = () => {
  const { showBottomSheet, setShowBottomSheet } = useUIStore();
  const bookingState = useBookingStore();

  return (
    <Fragment>
      <DatePicker<BookingState, "date" | null>
        showBottomSheet={showBottomSheet === "date"}
        setShowBottomSheet={setShowBottomSheet}
        form={bookingState}
        setForm={bookingState.setBookingState}
        field="date"
      />
    </Fragment>
  );
};

export default BottomSheetsProvider
;
