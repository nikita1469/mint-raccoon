import React from "react";
import { View } from "react-native";
import { Select, Text, TextField } from "@/shared/ui";
import { styles } from "./AdditionalFields.styles";
import { FormComponentProps } from "../../model/types";

const AdditionalFields = ({
  registrationForm,
  handleChangeField,
  setRegistrationStep,
}: FormComponentProps) => {
  const handleNextStep = () => {
    setRegistrationStep("additional");
  };

  return (
    <View style={styles.fieldsWrapper}>
      <Text align="center" style={styles.infoText}>
        Заполните дату рождения, чтобы участвовать в акциях для именниников
      </Text>
      <View style={styles.fieldsRow}>
        <Select
          value={registrationForm.birth_date}
          placeholder="Дата рождения"
          onPress={() => {}}
          flex={2}
        />
        <Select value={registrationForm.birth_date} placeholder="Пол" onPress={() => {}} flex={1} />
      </View>
      <TextField
        value={registrationForm.password}
        onChangeText={(value) => handleChangeField("password", value)}
        placeholder="Пароль"
        keyboardType="default"
      />
    </View>
  );
};

export default AdditionalFields;
