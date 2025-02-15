import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
const api = axios.create({
  baseURL: "https://enot-restolounge.ru:8888/",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 3,
    },
  },
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
