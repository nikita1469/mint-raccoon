import { FC, Fragment } from "react";
import { BlurView, Button, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { styles } from "./BookingScreen.styles";
import { ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { PALLETE_COLORS, PATHS } from "@/shared/const";
import { useNavigation } from "@react-navigation/native";
import { OrderItem } from "@/entities/order/ui";
import { ORDER_DATA } from "@/entities/order/const";

const BOOKING_FIELDS_DATA = [
  { id: "tableHall", label: "Столик/зал" },
  { id: "date", label: "Дата" },
  { id: "time", label: "Время" },
  { id: "deposit", label: "Оплаченный депозит" },
];

const BOOKING_FORM_DATA = {
  tableHall: "№1, Зал «Сакура» ",
  date: "2025-01-25",
  time: "12:00",
  deposit: "3000₽",
};

interface BookingScreenProps {}

const BookingScreen: FC<BookingScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Header isBackButton />
      <ScrollView contentContainerStyle={styles.bookingScroll}>
        <Text font="delaGothicOne" size="large" align="center">
          ВАШЕ БРОНИРОВАНИЕ
        </Text>
        <View style={styles.bookingImageWrapper}>
          <Image
            source={require("@/shared/assets/images/hall-image.png")}
            style={styles.bookingImage}
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={PALLETE_COLORS.gradient}
            style={styles.sticker}
          >
            <Text font="delaGothicOne" size="small">
              ЗАЛ «САКУРА»
            </Text>
          </LinearGradient>
        </View>
        <BlurView>
          <Text font="delaGothicOne" color="textPrimary">
            ИНФОРМАЦИЯ О ПРОФИЛЕ
          </Text>
          <View>
            {BOOKING_FIELDS_DATA.map(({ label, id }, index) => (
              <Fragment key={id}>
                <Divider color="textTransparent" />
                <View style={styles.fieldWrapper}>
                  <Text color="textTransparent" style={{ width: "50%" }}>
                    {label}
                  </Text>
                  <Text>
                    {BOOKING_FORM_DATA[id as keyof typeof BOOKING_FORM_DATA]}
                  </Text>
                </View>
                {index === BOOKING_FIELDS_DATA.length - 1 && (
                  <Divider color="textTransparent" />
                )}
              </Fragment>
            ))}
          </View>
        </BlurView>
        <BlurView>
          <Text font="delaGothicOne" color="textPrimary">
            ДЕПОЗИТ
          </Text>
          <View style={styles.bookingRowContainer}>
            <Text>Доступный депозит</Text>
            <Text color="textTransparent">3000₽</Text>
          </View>
        </BlurView>
        <BlurView>
          <View style={styles.bookingOrderTitle}>
            <Text font="delaGothicOne" color="textPrimary">
              ВАШ ЗАКАЗ
            </Text>
            <View
              style={[
                styles.bookingOrderStatus,
                { backgroundColor: PALLETE_COLORS.orange },
              ]}
            >
              <Text size="small" font="bold">
                Ожидает оплату
              </Text>
            </View>
          </View>
          <View>
            {ORDER_DATA.map((item, index) => (
              <OrderItem data={item} isLast={index === ORDER_DATA.length - 1} />
            ))}
          </View>
          <View style={styles.bookingRowContainer}>
            <Text>К оплате</Text>
            <Text color="textTransparent">1200₽</Text>
          </View>
          <Button
            onPress={() => navigation.navigate(PATHS.PLACING_ORDER as never)}
            variant="secondary"
          >
            Оформить заказ
          </Button>
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default BookingScreen;
