import { RegisterPayload } from "@/entities/auth/model/Auth.types";

export type RegistrationStep = "main" | "code" | "password" | "additional";

export interface RegistrationForm extends RegisterPayload {
  code: string;
  password: string;
  confirm_password: string;
}

export interface FormComponentProps {
  registrationForm: RegistrationForm;
  handleChangeField: (key: keyof RegistrationForm, value: string) => void;
  handleSendCode?: () => void;
  isLoading?: boolean;
  setRegistrationStep: (step: RegistrationStep) => void;
}
