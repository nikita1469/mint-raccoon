import { RegisterPayload } from "@/entities/auth/model/Auth.types";

export type RegistrationStep = "main" | "code" | "password" | "additional";

export interface RegistrationForm extends RegisterPayload {
  code: string;
  password: string;
  confirm_password: string;
  avatar: {
    uri: string;
    name: string;
    type: string;
  } | null;
}

export type RegistrationBottomSheet = "birthday" | "gender";

export interface FormComponentProps {
  registrationForm: RegistrationForm;
  handleChangeField: (
    key: keyof RegistrationForm,
    value: RegistrationForm[keyof RegistrationForm]
  ) => void;
  handleSendCode?: () => void;
  setRegistrationStep?: (step: RegistrationStep) => void;
  setShowBottomSheet?: (bottomSheet: RegistrationBottomSheet | null) => void;
  handleRegistration?: () => void;
  isRegistrationPending?: boolean;
}

export type RegistrationDatePickerProps = {
  form: RegistrationForm;
  bottomSheet: RegistrationBottomSheet | null;
};
