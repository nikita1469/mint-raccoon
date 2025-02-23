import { RegisterPayload } from "@/entities/auth/model/Auth.types";

const getRegistrationPayload = (registrationForm: RegisterPayload) => {
  const { first_name, last_name, birth_date, gender, phone, password } = registrationForm;

  return {
    first_name,
    last_name,
    birth_date,
    gender,
    phone,
    password,
    role: "user",
  };
};

export default getRegistrationPayload;
