import { MainFields, PasswordFields, AdditionalFields } from "../ui";
import { AuthCodeField } from "@/features";
import { FormComponentProps } from "../model/types";

export const FORM_COMPONENTS = {
  main: ({ registrationForm, handleChangeField, setRegistrationStep }: FormComponentProps) => (
    <MainFields
      registrationForm={registrationForm}
      handleChangeField={handleChangeField}
      setRegistrationStep={setRegistrationStep}
    />
  ),
  code: ({
    registrationForm,
    handleChangeField,
    handleSendCode,
    isLoading,
    setRegistrationStep,
  }: FormComponentProps) => (
    <AuthCodeField
      form={registrationForm}
      handleChangeField={handleChangeField}
      handleResendCode={handleSendCode!}
      isLoading={isLoading!}
    />
  ),
  password: ({ registrationForm, handleChangeField, setRegistrationStep }: FormComponentProps) => (
    <PasswordFields
      registrationForm={registrationForm}
      handleChangeField={handleChangeField}
      setRegistrationStep={setRegistrationStep}
    />
  ),
  additional: ({ registrationForm, handleChangeField, setRegistrationStep }: FormComponentProps) => (
    <AdditionalFields
      registrationForm={registrationForm}
      handleChangeField={handleChangeField}
      setRegistrationStep={setRegistrationStep}
    />
  ),
};
