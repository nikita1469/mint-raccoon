import { Button, TextField } from "@/shared/ui";
import React from "react";
import { View } from "react-native";
import { FormComponentProps } from "../../model/types";
import { styles } from "./PasswordFields.styles";

const PasswordFields = ({
  registrationForm,
  handleChangeField,
  setRegistrationStep,
}: FormComponentProps) => {
  const handleNextStep = () => {
    setRegistrationStep("additional");
  };

  return (
    <View style={styles.fieldsWrapper}>
      <TextField
        value={registrationForm.password}
        onChangeText={(value) => handleChangeField("password", value)}
        placeholder="Пароль"
        keyboardType="default"
      />
      <TextField
        value={registrationForm.confirm_password}
        onChangeText={(value) => handleChangeField("confirm_password", value)}
        placeholder="Подтвердите пароль"
        keyboardType="default"
      />
      <Button onPress={handleNextStep} style={styles.button} variant="secondary">
        Продолжить регистрацию
      </Button>
    </View>
  );
};

export default PasswordFields;
