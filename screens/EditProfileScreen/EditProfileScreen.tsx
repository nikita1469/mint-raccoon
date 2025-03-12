import { useCallback } from "react";
import { Button, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./EditProfileScreen.styles";
import { FIELDS_DATA } from "@/shared/const";
import { ProfileField } from "./ui";
import { useUserStore } from "@/entities/user/model/userStore";
import { User } from "@/entities/user/model/User.types";
import { useEditUserMutation } from "@/entities/user/api/userApi";

import moment from "moment";

const EditProfileScreen = () => {
  const updateUserField = useUserStore((state) => state.updateUserField);
  const userData = useUserStore((state) => ({
    phone: state.phone,
    first_name: state.first_name,
    last_name: state.last_name,
    birth_date: state.birth_date,
    gender: state.gender,
    id: state.id,
    password: state.password,
    role: state.role,
  }));

  const { mutate: editUser, isPending } = useEditUserMutation();

  const isFieldDisabled = (fieldId: string) => fieldId === "birth_date" || fieldId === "gender";

  const handleChangeField = (fieldId: string, value: string) => {
    updateUserField(fieldId as keyof User, value);
  };

  const handleEditProfile = () => {
    editUser({
      ...userData,
      gender: userData.gender === "Мужской" ? "male" : "female",
      birth_date: moment(userData.birth_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm:ss.SSSSSS"),
    });
  };

  const renderField = useCallback(
    (field: (typeof FIELDS_DATA)[0], index: number) => {
      const isDisabled = isFieldDisabled(field.id);

      return (
        <ProfileField
          key={field.id}
          field={field}
          isLast={index === FIELDS_DATA.length - 1}
          profileForm={userData}
          isDisabled={isDisabled}
          onChangeField={handleChangeField}
        />
      );
    },
    [userData]
  );

  return (
    <Layout>
      <Header isBackButton />
      <TouchableWithoutFeedback key={userData.id} onPress={Keyboard.dismiss}>
        <View style={styles.editProfileWrapper}>
          <Text font="delaGothicOne" size="large">
            РЕДАКТИРОВАНИЕ ПРОФИЛЯ
          </Text>
          <View>
            {FIELDS_DATA.slice(0, 4).map((field, index) => renderField(field, index))}
            <Divider color="textTransparent" />
          </View>
          <Text>
            Дату рождения и пол можно заменить только при личном визите, обратившись к администратору со
            своим паспортом
          </Text>
          <View>
            {FIELDS_DATA.slice(4).map((field, index) => renderField(field, index))}
            <Divider color="textTransparent" />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Button onPress={handleEditProfile} style={{ marginHorizontal: 20 }} isLoading={isPending}>
        СОХРАНИТЬ
      </Button>
    </Layout>
  );
};

export default EditProfileScreen;
