import { FC, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { BlurView, Button, Layout, Select, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { HallsList, SakuraHall } from "./ui";
import { HALLS_DATA } from "./const";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { styles } from "./TablesScreen.styles";
import {
  useCreateBookingMutation,
  useGetBookingHallsQuery,
  useGetBookingTablesQuery,
} from "@/entities/booking/api/bookingApi";
import { useUIStore } from "@/shared/model/state/uiState";
const TablesScreen = () => {
  const navigation = useNavigation();
  const { data: user } = useGetUserQuery();
  const [selectedHall, setSelectedHall] = useState<string>(HALLS_DATA[0].id);
  const { mutate: createBooking } = useCreateBookingMutation();
  const { data: bookingHalls } = useGetBookingHallsQuery();
  const { data: bookingTables } = useGetBookingTablesQuery();
  const { setShowBottomSheet } = useUIStore();

  const handleBooking = () => {
    createBooking({
      id: 1,
      date: "2025-02-26T18:00:00",
      date_start: "2025-02-26T18:00:00",
      date_finish: "2025-02-26T21:00:00",
      table_number: 1,
      deposit_amount: 1000,
      user_id: user!.id,
    });
    // navigation.navigate(PATHS.BOOKING as never);
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
              value="12.01.2025"
              size="small"
              variant="transparent"
              onPress={() => setShowBottomSheet("date")}
            />
            <Select label="Время" value="12:00" size="small" variant="transparent" onPress={() => {}} />
          </View>
          <HallsList selectedHall={selectedHall} setSelectedHall={setSelectedHall} />
          <View style={styles.tablesSchemaWrapper}>
            <Text>Выберите свободный столик</Text>
            <View style={styles.tablesSchemaContainer}>
              <SakuraHall />
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

export default TablesScreen;
