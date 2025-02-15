import { api } from "@/shared/api/mintRaccoonApi";
import * as SecureStore from "expo-secure-store";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "../model/Auth.types";
import { useMutation } from "@tanstack/react-query";

const authApi = {
  async login(payload: LoginPayload) {
    const response = await api.post<AuthResponse>("signin/", payload);
    await SecureStore.setItemAsync("token", response.data.token);
    return response.data;
  },

  async register(payload: RegisterPayload) {
    const response = await api.post<AuthResponse>("signup/", payload);
    await SecureStore.setItemAsync("token", response.data.token);
    return response.data;
  },
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApi.login,
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: authApi.register,
  });
};
