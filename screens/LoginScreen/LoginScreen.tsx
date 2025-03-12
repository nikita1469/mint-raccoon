import React, { useState } from "react";
import { Button, Text, TextField } from "@/shared/ui";
import { View } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthLayout } from "@/entities/auth/ui";
import { useLoginMutation } from "@/entities/auth/api/authApi";
import { LoginPayload } from "@/entities/auth/model/Auth.types";

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loginForm, setLoginForm] = useState<LoginPayload>({ phone: "", password: "" });

  const { mutate: login, isPending: isLoginPending } = useLoginMutation();

  const handleLogin = () => {
    login(loginForm, {
      onSuccess: () => {
        navigation.navigate(PATHS.MAIN_STACK as never);
      },
    });
  };

  return (
    <AuthLayout headerText="Войти в профиль">
      <View style={styles.formWrapper}>
        <TextField
          value={loginForm.phone}
          onChangeText={(value) => setLoginForm({ ...loginForm, phone: value })}
          placeholder="Телефон"
          keyboardType="default"/>
        <TextField
          value={loginForm.password}
          onChangeText={(value) => setLoginForm({ ...loginForm, password: value })}
          placeholder="Пароль"
          keyboardType="default"/>
        <Button
          onPress={handleLogin}
          isLoading={isLoginPending}
          style={styles.button}
          variant="secondary">
          Войти
        </Button>
      </View>
      <View style={styles.loginFooter}>
        <Text>Нет профиля ?</Text>
        <Text
          underline
          onPress={() =>
            navigation.navigate(
              PATHS.REGISTRATION as never,
              {
                animation: "none",
              } as never
            )
          }>Зарегистрируйтесь</Text>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;
