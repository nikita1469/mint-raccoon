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
  const access_token = await SecureStore.getItemAsync("access_token");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if ([401, 403].includes(error.response.status)) {
//       const refresh_token = await SecureStore.getItemAsync("refresh_token");
//       if (refresh_token) {
//         const response = await api.post("auth_refresh_jwt/", {
//           refresh: refresh_token,
//         });
//         await SecureStore.setItemAsync("access_token", response.data.access_token);
//         return api(error.config);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export { api };
