import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { UserActions, UserState } from "./User.types";
import { INITIAL_USER_STATE } from "../const";

export const useUserStore = createWithEqualityFn<UserState & UserActions>(
  (set) => ({
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
  }),
  shallow
);

