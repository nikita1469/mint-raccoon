import { FC, useState } from "react";
import { ScrollView, View } from "react-native";
import { BlurView, Button, Layout, Select, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { HallsList, SakuraHall } from "./ui";
import { HALLS_DATA } from "./const";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";

import { styles } from "./TablesScreen.styles";

interface TablesScreenProps {}

const TablesScreen: FC<TablesScreenProps> = () => {
  const navigation = useNavigation();
  const [selectedHall, setSelectedHall] = useState<string>(HALLS_DATA[0].id);

  const handleBooking = () => {
    navigation.navigate(PATHS.BOOKING as never);
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
              onPress={() => {}}
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
