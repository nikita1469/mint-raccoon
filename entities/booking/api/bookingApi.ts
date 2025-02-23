import { api } from "@/shared/api/mintRaccoonApi";
import { Booking, BookingHall, BookingTable } from "../model/Booking.types";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

const bookingApi = {
  async createBooking(payload: Booking) {
    const response = await api.post<Booking>(`orders/`, payload);
    return response.data;
  },
  async getBooking(id: number) {
    const response = await api.get<Booking>(`orders/id/${id}`);
    return response.data;
  },
  async getBookings(id: number) {
    const response = await api.get<Booking[]>(`orders/user/${id}`);
    return response.data;
  },
  async getBookingHalls() {
    const response = await api.get<BookingHall[]>(`halls/full`);
    return response.data;
  },
  async getBookingTables() {
    const response = await api.get<BookingTable[]>(`halls_tables/full`);
    return response.data;
  },
};

export const useCreateBookingMutation = () => {
  return useMutation({
    mutationFn: bookingApi.createBooking,
  });
};

export const useGetBookingQuery = (id: number) => {
  return useQuery({
    queryKey: ["booking"],
    queryFn: () => bookingApi.getBooking(id),
  });
};

export const useGetBookingsQuery = (id: number, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: () => bookingApi.getBookings(id),
    ...options,
  });
};

export const useGetBookingHallsQuery = () => {
  return useQuery({
    queryKey: ["bookingHalls"],
    queryFn: bookingApi.getBookingHalls,
  });
};

export const useGetBookingTablesQuery = () => {
  return useQuery({
    queryKey: ["bookingTables"],
    queryFn: bookingApi.getBookingTables,
  });
};
