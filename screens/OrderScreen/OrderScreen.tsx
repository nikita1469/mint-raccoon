import { FC, useState } from "react";
import { BlurView, Button, Layout, Select, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { ScrollView, View } from "react-native";

import { styles } from "./OrderScreen.styles";
import { HallsList } from "./ui";
import { HALLS_DATA } from "./const";

interface OrderScreenProps {}

const OrderScreen: FC<OrderScreenProps> = () => {
  const [selectedHall, setSelectedHall] = useState<string>(HALLS_DATA[0].id);

  return (
    <Layout>
      <Header isLogo />
      <ScrollView contentContainerStyle={styles.orderScroll}>
        <BlurView>
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
          <Button variant="secondary" onPress={() => {}}>
            Забронировать
          </Button>
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default OrderScreen;
