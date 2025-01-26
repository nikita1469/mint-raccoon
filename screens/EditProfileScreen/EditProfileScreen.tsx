import { FC, Fragment, useState } from "react";
import { Button, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./EditProfileScreen.styles";
import { FIELDS_DATA, PALLETE_COLORS } from "@/shared/const";

interface EditProfileScreenProps {}

const EditProfileScreen: FC<EditProfileScreenProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "Алексей",
    surname: "Иванченко",
    birthday: "25.04.1997",
    gender: "Мужской",
    phone: "+7 (999) 999 99-99",
    password: "**************",
  });

  const isFieldDisabled = (fieldId: string) =>
    fieldId === "birthday" || fieldId === "gender";

  const handleEditProfile = () => {
    console.log("edit profile");
  };

  const renderField = (field: (typeof FIELDS_DATA)[0], index: number) => {
    const isDisabled = isFieldDisabled(field.id);

    return (
      <Fragment key={field.id}>
        <Divider color="textTransparent" />
        <View
          key={field.id}
          style={[styles.fieldWrapper, isDisabled && styles.disabledField]}
        >
          <Text color="textTransparent" style={styles.label}>
            {field.label}
          </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={formData[field.id as keyof typeof formData]}
              style={styles.input}
              editable={!isDisabled}
              secureTextEntry={field.id === "password" && !showPassword}
              placeholderTextColor={PALLETE_COLORS.dark.textTransparent}
            />
            {field.id === "password" && (
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                {/* <EyeIcon color={PALLETE_COLORS.dark.white} /> */}
              </TouchableOpacity>
            )}
          </View>
        </View>
        {index === FIELDS_DATA.length - 1 && (
          <Divider color="textTransparent" />
        )}
      </Fragment>
    );
  };

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
