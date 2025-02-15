export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  id?: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  phone: string;
  password: string;
  profile_icon_id?: number;
  role?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    phone: string;
  };
}
