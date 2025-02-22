import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Select, Text } from "@/shared/ui";
import { styles } from "./AdditionalFields.styles";
import { FormComponentProps } from "../../model/types";
import moment from "moment";
import { PlusIcon, UserImageIcon } from "@/shared/ui/icons";
import * as ImagePicker from "expo-image-picker";

const GENDER_DATA = {
  male: "Мужской",
  female: "Женский",
};

const AdditionalFields = ({
  registrationForm,
  setShowBottomSheet,
  handleChangeField,
  handleRegistration,
  isRegistrationPending,
}: FormComponentProps) => {
  const formatedBirthDate = moment(registrationForm.birth_date).format("DD.MM.YYYY");
  const formatedGender = GENDER_DATA[registrationForm.gender as keyof typeof GENDER_DATA];

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.assets?.[0]) {
      return;
    }

    const { uri, fileName, mimeType } = result.assets[0];

    handleChangeField("avatar", {
      uri,
      name: fileName || "",
      type: mimeType || "",
    });
  };

  return (
    <View style={styles.fieldsWrapper}>
      <Text align="center" style={styles.infoText}>
        Заполните дату рождения, чтобы участвовать в акциях для именниников
      </Text>
      <View style={styles.fieldsRow}>
        <Select
          value={formatedBirthDate !== "Invalid date" && formatedBirthDate}
          placeholder="Дата рождения"
          onPress={() => setShowBottomSheet?.("birthday")}
          flex={2}
        />
        <Select
          value={formatedGender}
          placeholder="Пол"
          onPress={() => setShowBottomSheet?.("gender")}
          flex={1}
        />
      </View>
      {/* <TouchableOpacity style={styles.imagePicker} activeOpacity={0.8} onPress={handleSelectImage}>
        <UserImageIcon />
        <Text color="grey" font="semiBold">
          Выбрать фото
        </Text>
        <PlusIcon />
      </TouchableOpacity> */}
      <Button
        onPress={handleRegistration!}
        style={styles.button}
        variant="secondary"
        isLoading={isRegistrationPending}
      >
        Зарегистрироваться
      </Button>
    </View>
  );
};

export default AdditionalFields;
