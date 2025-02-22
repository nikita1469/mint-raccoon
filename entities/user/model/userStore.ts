import { create } from "zustand";
import { UserActions, UserState } from "./User.types";
import { INITIAL_USER_STATE } from "../const";

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...INITIAL_USER_STATE,

  updateUserState: (newState) => {
    set(newState);
  },

  updateUserField: (field, value) => {
    set((state) => ({
      ...state,
      [field]: value,
    }));
  },

  resetUserState: () => {
    set(INITIAL_USER_STATE);
  },
}));
