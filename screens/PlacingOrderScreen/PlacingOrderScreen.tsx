import { FC, useState } from "react";
import { BlurView, Button, Counter, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { PALETTE_COLORS } from "@/shared/const";
import { ScrollView, View } from "react-native";
import { OrderItem } from "@/entities/order/ui";
import { PATHS } from "@/shared/const";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./PlacingOrderScreen.styles";
import { ORDER_DATA } from "@/entities/order/const";
import { Switch } from "react-native-gesture-handler";

interface PlacingOrderScreenProps {}

const PlacingOrderScreen: FC<PlacingOrderScreenProps> = () => {
  const navigation = useNavigation();

  const [enableOrderTime, setEnableOrderTime] = useState(false);
  const [orderTime, setOrderTime] = useState(5);

  return (
    <Layout>
      <Header isBackButton />
      <ScrollView contentContainerStyle={styles.orderScroll}>
        <BlurView>
          <Text font="delaGothicOne" color="textPrimary">
            ОФОРМЛЕНИЕ ЗАКАЗА
          </Text>
          <View>
            {ORDER_DATA.map((item, index) => (
              <OrderItem data={item} isLast={index === ORDER_DATA.length - 1} />
            ))}
          </View>
          <View style={styles.orderInfoContainer}>
            <View style={styles.orderRowWrapper}>
              <Text>Сумма заказа</Text>
              <Text color="textTransparent" font="semiBold">
                4200₽
              </Text>
            </View>
            <Divider color="textTransparent" />
            <View style={styles.orderRowWrapper}>
              <Text>Доступный депозит</Text>
              <Text color="textTransparent" font="semiBold">
                3000₽
              </Text>
            </View>
            <Divider color="textTransparent" />
            <View style={styles.orderRowWrapper}>
              <Text size="large">К оплате</Text>
              <Text size="large" font="semiBold">
                1200₽
              </Text>
            </View>
          </View>
          <View style={styles.orderTimeContainer}>
            <Switch
              value={enableOrderTime}
              onValueChange={setEnableOrderTime}
              trackColor={{
                false: PALETTE_COLORS.grey,
                true: PALETTE_COLORS.primary,
              }}
            />
            <Text color={enableOrderTime ? "white" : "textTransparent"}>
              Время подачи заказа
            </Text>
            <Counter
              value={orderTime}
              setValue={setOrderTime}
              step={5}
              minValue={5}
              maxValue={55}
              disabled={!enableOrderTime}
            />
          </View>
          <Button
            onPress={() => navigation.navigate(PATHS.PLACING_ORDER as never)}
            variant="secondary"
          >
            Оплатить
          </Button>
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default PlacingOrderScreen;
