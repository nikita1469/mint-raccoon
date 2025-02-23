import { FC, Fragment, useState } from "react";
import { Text } from "@/shared/ui";
import { View } from "react-native";
import { styles } from "./RegistrationScreen.styles";
import { useRegistrationMutation } from "@/entities/auth/api/authApi";
import { INITIAL_REGISTRATION_STATE } from "./const";
import { FORM_COMPONENTS } from "./const/FORM_COMPONENTS";
import { RegistrationBottomSheet, RegistrationForm, RegistrationStep } from "./model/types";
import { GenderSheet } from "@/features";
import { useUploadAvatarMutation } from "@/entities/user/api/userApi";
import { DatePicker } from "@/widgets";
import getRegistrationPayload from "./lib/helpers/getRegistrationPayload";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthLayout } from "@/entities/auth/ui";

const RegistrationScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [registrationStep, setRegistrationStep] = useState<RegistrationStep>("main");
  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>(INITIAL_REGISTRATION_STATE);
  const [showBottomSheet, setShowBottomSheet] = useState<RegistrationBottomSheet | null>(null);

  const {
    mutate: registration,
    isPending: isRegistrationPending,
    isError,
    error,
    data,
  } = useRegistrationMutation();

  const handleSendCode = () => {
    console.log("handleResendCode");
  };

  const handleChangeField = (
    key: keyof RegistrationForm,
    value: RegistrationForm[keyof RegistrationForm]
  ) => {
    setRegistrationForm({ ...registrationForm, [key]: value });
  };

  const handleRegistration = () => {
    registration(getRegistrationPayload(registrationForm), {
      onSuccess: (data) => {
        navigation.navigate(PATHS.MAIN_STACK as never);
      },
    });
  };

  return (
    <Fragment>
      <AuthLayout headerText="Регистрация">
        {FORM_COMPONENTS[registrationStep]?.({
          registrationForm,
          handleChangeField,
          handleSendCode,
          setRegistrationStep,
          setShowBottomSheet,
          handleRegistration,
          isRegistrationPending,
        })}
        {!["code"].includes(registrationStep) && (
          <View style={styles.registrationFooter}>
            <Text>Уже есть профиль ?</Text>
            <Text
              underline
              onPress={() =>
                navigation.navigate(
                  PATHS.LOGIN as never,
                  {
                    animation: "none",
                  } as never
                )
              }
            >
              Войдите здесь
            </Text>
          </View>
        )}
      </AuthLayout>
      <DatePicker<RegistrationForm, RegistrationBottomSheet | null>
        showBottomSheet={showBottomSheet === "birthday"}
        setShowBottomSheet={setShowBottomSheet}
        form={registrationForm}
        setForm={setRegistrationForm}
        field="birth_date"
        isFullDate
      />
      <GenderSheet<RegistrationForm, RegistrationBottomSheet | null>
        showBottomSheet={showBottomSheet === "gender"}
        setShowBottomSheet={setShowBottomSheet}
        form={registrationForm}
        setForm={setRegistrationForm}
      />
    </Fragment>
  );
};

export default RegistrationScreen;
