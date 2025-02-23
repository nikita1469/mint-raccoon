export interface User {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  phone: string;
  password: string;
  profile_icon_id: number;
  role: string;
}

export type Gender = "male" | "female";

export type UserState = Partial<User>;

export interface UserActions {
  updateUserState: (newState: UserState) => void;
  updateUserField: <K extends keyof UserState>(field: K, value: UserState[K]) => void;
  resetUserState: () => void;
}

export interface AvatarPayload {
  id: number;
  file: FormData;
}
