import { FC, useState } from "react";
import { BlurView, Button, Layout, Select, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { ScrollView, View } from "react-native";

import { styles } from "./TablesScreen.styles";
import { HallsList } from "./ui";
import { HALLS_DATA } from "./const";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "@/shared/const";

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
        <BlurView containerStyle={{ flex: 1 }}>
          <Text size="header" font="delaGothicOne" align="center">
            Забронируйте столик
          </Text>
          <View style={styles.selectFieldsFrapper}>
            <Select label="Дата" value="12.01.2025" onPress={() => {}} />
            <Select label="Время" value="12:00" onPress={() => {}} />
          </View>
          <HallsList
            selectedHall={selectedHall}
            setSelectedHall={setSelectedHall}
          />
          <View style={styles.tablesSchemaWrapper}>
            <Text>Выберите свободный столик</Text>
            <View style={styles.tablesSchemaContainer}></View>
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
