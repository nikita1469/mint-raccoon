import { Button, TextField } from "@/shared/ui";
import React from "react";
import { View } from "react-native";
import { styles } from "./MainFIelds.styles";
import { FormComponentProps } from "../../model/types";

const MainFields = ({ registrationForm, handleChangeField, setRegistrationStep }: FormComponentProps) => {
  const handleNextStep = () => {
    setRegistrationStep?.("password");
  };

  return (
    <View style={styles.fieldsWrapper}>
      <TextField
        value={registrationForm.first_name}
        onChangeText={(value) => handleChangeField("first_name", value)}
        placeholder="Имя"
        keyboardType="default"
      />
      <TextField
        value={registrationForm.last_name}
        onChangeText={(value) => handleChangeField("last_name", value)}
        placeholder="Фамилия"
        keyboardType="default"
      />
      <TextField
        value={registrationForm.phone}
        onChangeText={(value) => handleChangeField("phone", value)}
        placeholder="Телефон"
        keyboardType="default"
      />
      <Button onPress={handleNextStep} style={styles.button} variant="secondary">
        Продолжить регистрацию
      </Button>
    </View>
  );
};

export default MainFields;
