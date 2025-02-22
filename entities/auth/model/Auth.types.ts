export interface LoginPayload {
  phone: string;
  password: string;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  phone: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}
