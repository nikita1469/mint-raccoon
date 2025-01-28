import { FC, Fragment, useCallback, useState } from "react";
import { Button, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { ScrollView, View } from "react-native";
import { styles } from "./EditProfileScreen.styles";
import { FIELDS_DATA } from "@/shared/const";
import { IProfileForm } from "./model/EditProfileScreeen.types";
import { ProfileField } from "./ui";

const EditProfileScreen = () => {
  const [profileForm, setProfileForm] = useState<IProfileForm>({
    name: "",
    surname: "",
    birthday: "",
    gender: "",
    phone: "",
    password: "",
  });

  const isFieldDisabled = (fieldId: string) =>
    fieldId === "birthday" || fieldId === "gender";

  const handleEditProfile = () => {
    console.log("edit profile");
  };

  const renderField = useCallback(
    (field: (typeof FIELDS_DATA)[0], index: number) => {
      const isDisabled = isFieldDisabled(field.id);

      return (
        <ProfileField
          field={field}
          isLast={index === FIELDS_DATA.length - 1}
          profileForm={profileForm}
          isDisabled={isDisabled}
        />
      );
    },
    [profileForm]
  );

  return (
    <Layout>
      <Header title="" isBackButton />
      <ScrollView contentContainerStyle={styles.editProfileScroll}>
        <Text font="delaGothicOne" size="large">
          РЕДАКТИРОВАНИЕ ПРОФИЛЯ
        </Text>
        <View>
          {FIELDS_DATA.slice(0, 4).map((field, index) =>
            renderField(field, index)
          )}
          <Divider color="textTransparent" />
        </View>
        <Text>
          Дату рождения и пол можно заменить только при личном визите,
          обратившись к администратору со своим паспортом
        </Text>
        <View>
          {FIELDS_DATA.slice(4).map((field, index) =>
            renderField(field, index)
          )}
          <Divider color="textTransparent" />
        </View>
      </ScrollView>
      <Button onPress={handleEditProfile} style={{ marginHorizontal: 20 }}>
        СОХРАНИТЬ
      </Button>
    </Layout>
  );
};

export default EditProfileScreen;
