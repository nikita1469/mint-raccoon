import { api } from "@/shared/api/mintRaccoonApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AvatarPayload, User } from "../model/User.types";
import * as SecureStore from "expo-secure-store";
import { useUserStore } from "../model/userStore";

const userApi = {
  async uploadAvatar(payload: AvatarPayload) {
    const response = await api.post<User>(
      `image_upload/create_avatar?user_id=${payload.id}`,
      payload.file
    );
    return response.data;
  },
  async getUser() {
    const token = await SecureStore.getItemAsync("access_token");
    const response = await api.get<User>(`get_current_auth_user/?token=${token}`);
    return response.data;
  },
};

export const useUploadAvatarMutation = () => {
  return useMutation({
    mutationFn: userApi.uploadAvatar,
  });
};

export const useGetUserLazyQuery = () => {
  const updateUserState = useUserStore((state) => state.updateUserState);

  const query = useQuery({
    queryKey: ["user"],
    queryFn: userApi.getUser,
    enabled: false,
    select: (data: User) => {
      updateUserState(data);
      return data;
    },
  });

  return {
    ...query,
    getUser: query.refetch,
  };
};
