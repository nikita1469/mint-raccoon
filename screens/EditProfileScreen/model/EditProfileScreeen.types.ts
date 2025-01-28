import { FIELDS_DATA } from "@/shared/const";

export interface IProfileForm {
  name: string;
  surname: string;
  birthday: string | null;
  gender: string | null;
  phone: string;
  password: string;
}

export interface IProfileFieldProps {
  field: (typeof FIELDS_DATA)[0];
  isLast: boolean;
  profileForm: IProfileForm;
  isDisabled: boolean;
}
