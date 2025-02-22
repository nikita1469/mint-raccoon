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

export interface AvatarPayload {
  id: number;
  file: FormData;
}
