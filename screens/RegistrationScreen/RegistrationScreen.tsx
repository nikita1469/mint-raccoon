import { FC, useState } from "react";
import { Layout, Text } from "@/shared/ui";
import { Image, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./RegistrationScreen.styles";
import { useRegisterMutation } from "@/entities/auth/api/authApi";
import { INITIAL_REGISTRATION_STATE } from "./const";
import { FORM_COMPONENTS } from "./const/FORM_COMPONENTS";
import { RegistrationForm, RegistrationStep } from "./model/types";

const RegistrationScreen: FC = () => {
  const [registrationStep, setRegistrationStep] = useState<RegistrationStep>("additional");
  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>(INITIAL_REGISTRATION_STATE);

  const { mutate: register, isPending } = useRegisterMutation();

  const handleSendCode = () => {
    console.log("handleResendCode");
  };

  const handleChangeField = (key: keyof RegistrationForm, value: string) => {
    setRegistrationForm({ ...registrationForm, [key]: value });
  };

  return (
    <Layout imageType="leaves">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registrationWrapper}>
          <Image source={require("@/shared/assets/images/logo-full.png")} style={styles.logo} />
          <Text size="header" font="delaGothicOne" style={styles.headerText}>
            Регистрация
          </Text>
          {FORM_COMPONENTS[registrationStep]?.({
            registrationForm,
            handleChangeField,
            handleSendCode,
            isLoading: false,
            setRegistrationStep,
          })}
          {["main", "password"].includes(registrationStep) && (
            <View style={styles.registrationFooter}>
              <Text>Уже есть профиль ?</Text>
              <Text underline onPress={() => {}}>
                Войдите здесь
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default RegistrationScreen;
