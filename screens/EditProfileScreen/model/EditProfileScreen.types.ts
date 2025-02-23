import { User } from "@/entities/user/model/User.types";
import { FIELDS_DATA } from "@/shared/const";

export interface IProfileFieldProps {
  field: (typeof FIELDS_DATA)[0];
  isLast: boolean;
  profileForm: Partial<User>;
  isDisabled: boolean;
  onChangeField: (fieldId: string, value: string) => void;
}
