import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Layout, Text } from "@/shared/ui";
import { Image } from "expo-image";
import { styles } from "./AuthLayout.styles";

const AuthLayout = ({ children, headerText }: { children: React.ReactNode; headerText: string }) => {
  return (
    <Layout imageType="leaves">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginWrapper}>
          <Image source={require("@/shared/assets/images/logo-full.png")} style={styles.logo} />
          <Text size="header" font="delaGothicOne" style={styles.headerText}>
            {headerText}
          </Text>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default AuthLayout;
