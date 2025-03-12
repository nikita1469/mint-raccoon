import { api } from "@/shared/api/mintRaccoonApi";
import { AuthResponse, LoginPayload, RegisterPayload } from "../model/Auth.types";
import { useMutation } from "@tanstack/react-query";

import * as SecureStore from "expo-secure-store";

const authApi = {
  async login(payload: LoginPayload) {
    const response = await api.post<AuthResponse>("signin/", payload);
    await SecureStore.setItemAsync("access_token", response.data.access_token);
    await SecureStore.setItemAsync("refresh_token", response.data.refresh_token);
    return response.data;
  },

  async registration(payload: RegisterPayload) {
    const response = await api.post<AuthResponse>("signup/", payload);
    await SecureStore.setItemAsync("access_token", response.data.access_token);
    await SecureStore.setItemAsync("refresh_token", response.data.refresh_token);
    return response.data;
  },
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApi.login,
    onError: (error) => {
      console.error("Ошибка входа:", error);
    },
  });
};

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: authApi.registration,
    onError: (error) => {
      console.error("Ошибка регистрации:", error);
    },
  });
};
