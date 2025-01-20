import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import { QueryClient } from "@tanstack/react-query";

const api = axios.create({
  baseURL: "https://api.example.com",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 3,
    },
  },
});

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => ({
        getItem: async (name) => {
          const value = await SecureStore.getItemAsync(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await SecureStore.setItemAsync(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await SecureStore.deleteItemAsync(name);
        },
      })),
    }
  )
);

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
export default useAuthStore;
