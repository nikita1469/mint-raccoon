import { api } from "@/shared/api/mintRaccoonApi";
import { useMutation } from "@tanstack/react-query";
import { AvatarPayload, User } from "../model/User.types";

const userApi = {
  async uploadAvatar(payload: AvatarPayload) {
    const response = await api.post<User>(
      `image_upload/create_avatar?user_id=${payload.id}`,
      payload.file
    );
    return response.data;
  },
};

export const useUploadAvatarMutation = () => {
  return useMutation({
    mutationFn: userApi.uploadAvatar,
  });
};
