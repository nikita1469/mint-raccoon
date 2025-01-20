import { FC } from "react";
import { Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { View } from "react-native";
import { BlurView } from "expo-blur";
import { styles } from "./OrderScreen.styles";

interface OrderScreenProps {}

const OrderScreen: FC<OrderScreenProps> = () => {
  return (
    <Layout>
      <Header isLogo />
      <View style={styles.orderFormWrapper}>
        <BlurView intensity={20} style={{ flex: 1 }} tint="light"></BlurView>
      </View>
    </Layout>
  );
};

export default OrderScreen;
