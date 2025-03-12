import { useState } from "react";
import { ScrollView, View } from "react-native";
import { BlurView, Button, Layout, Select, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { HallsList, SakuraHall, DayHall, NightHall, RaccoonHall } from "./ui";
import { HALLS_DATA } from "./const";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";
import { styles } from "./HomeScreen.styles";
import { useCreateBookingMutation, useGetBookingsQuery } from "@/entities/booking/api/bookingApi";
import { useUIStore } from "@/shared/model/state/uiState";
import { useUserStore } from "@/entities/user/model/userStore";

import moment from "moment";

const HomeScreen = () => {
  const navigation = useNavigation();
  const userId = useUserStore((state) => state.id);
  const { mutate: createBooking } = useCreateBookingMutation({
    onSuccess: () => navigation.navigate(PATHS.BOOKING as never),
    onError: (error) => console.error(error),
  });

  const { setShowBottomSheet } = useUIStore();

  const [selectedDate, setSelectedDate] = useState(moment());

  // const { data: bookings } = useGetBookingsQuery(userId!, { enabled: !!userId });
  // console.log('bookings', bookings);
  // console.log('userId', userId);

  const handleBooking = async () => {
    const date_start = selectedDate.format("YYYY-MM-DDTHH:mm:ss");
    const date_finish = moment(selectedDate).add(2, "hours").format("YYYY-MM-DDTHH:mm:ss");

    createBooking({
      id: 0,
      date: selectedDate.format("YYYY-MM-DDTHH:mm:ss"),
      date_start,
      date_finish,
      table_number: 1,
      deposit_amount: 3000,
      user_id: userId!,
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate((prev) =>
      moment(prev).year(date.getFullYear()).month(date.getMonth()).date(date.getDate())
    );
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedDate((prev) =>
      moment(prev).hour(time.getHours()).minute(time.getMinutes())
    );
  };

  const [selectedHall, setSelectedHall] = useState<string>(HALLS_DATA[0].id);

  const renderHall = () => {
    switch (selectedHall) {
      case "sakura":
        return <SakuraHall />;
      case "day":
        return <DayHall />;
      case "night":
        return <NightHall />;
      case "raccoon":
        return <RaccoonHall />;
      default:
        return <SakuraHall />;
    }
  };

  return (
    <Layout>
      <Header isLogo isBellButton isBurgerButton />
      <ScrollView contentContainerStyle={styles.tablesScroll}>
        <BlurView>
          <Text size="header" font="delaGothicOne" align="center">
            Забронируйте столик
          </Text>
          <View style={styles.selectFieldsFrapper}>
            <Select
              label="Дата"
              size="small"
              variant="transparent"
              value={selectedDate.format("DD.MM.YYYY")}
              onPress={() => setShowBottomSheet("date", handleDateSelect)}
            />
            <Select
              label="Время"
              size="small"
              variant="transparent"
              value={selectedDate.format("HH:mm")}
              onPress={() => setShowBottomSheet("time", handleTimeSelect)}
            />
          </View>
          <HallsList selectedHall={selectedHall} setSelectedHall={setSelectedHall} />
          <View style={styles.tablesSchemaWrapper}>
            {["raccoon", "sakura"].includes(selectedHall) && (
              <Text style={styles.homeScreenText} color="white">
                Выберите свободный столик
              </Text>
            )}
            <View style={
              ['sakura', 'raccoon'].includes(selectedHall) ? styles.tablesSchemaContainer : {}
            }>
              {renderHall()}
            </View>
          </View>
          <Button variant="secondary" onPress={handleBooking}>
            Забронировать
          </Button>
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
