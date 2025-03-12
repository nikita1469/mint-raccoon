import React, { useRef, useState } from "react";
import { Header } from "@/widgets";
import { BlurView, Layout, Text, Button } from "@/shared/ui";
import { styles } from "./ContactsScreen.styles";
import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { ContactField } from "./ui";
import { CONTACTS_FIELDS_DATA, LOCATIONS_DATA } from "./const";
import { PATHS } from "@/shared/const";
import { useNavigation } from "@react-navigation/native";

const ContactsScreen = () => {
  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    if (index >= 0 && index < LOCATIONS_DATA.length) {
      setActiveIndex(index);
    }
  };

  const goToSlide = (index: number) => {
    if (flatListRef.current && index >= 0 && index < LOCATIONS_DATA.length) {
      flatListRef.current.scrollToOffset({ 
        offset: index * Dimensions.get('window').width * 0.91, 
        animated: false 
      });
      setActiveIndex(index);
    }
  };

  return (
    <Layout>
      <Header isBackButton />
      <ScrollView contentContainerStyle={styles.contactsScroll}>
        <Text font="delaGothicOne" size="header">
          Контакты и локации
        </Text>

        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={LOCATIONS_DATA}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
            renderItem={({ item }) => (
              <Image source={item.image} style={styles.carouselImage} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        
        <View style={styles.pagination}>
          {LOCATIONS_DATA.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
              onPress={() => goToSlide(index)}
            />
          ))}
        </View>

        <BlurView>
          <Text font="delaGothicOne" color="textPrimary">
            КОНТАКТЫ
          </Text>
          <View>
            {CONTACTS_FIELDS_DATA.map(({ label, id }, index) => (
              <ContactField
                key={id}
                id={id}
                label={label}
                isLast={index === CONTACTS_FIELDS_DATA.length - 1}
              />
            ))}
          </View>
        </BlurView>
        <BlurView>
          <Text font="delaGothicOne" color="textPrimary">
            ЗАЛЫ И ЛОКАЦИИ
          </Text>
          <Text>
            Мятный Енот - это уютный лаундж бар, где вы можете насладиться кальяном,
            изысканными напитками и закусками. Забронируйте
            место и сделайте заказ в этом приложении.
          </Text>
          <View style={styles.locationsContainer}>
            {LOCATIONS_DATA.map((location) => (
              <View key={location.id} style={styles.location}>
                <Image source={location.image} style={styles.locationImage} />
                <Text font="delaGothicOne">
                  {location.name}
                </Text>
                <Text size="small" color="textPrimary">{"Смотреть фото >"}</Text>
              </View>
            ))}
          </View>
          <Button
            style={styles.button}
            variant="outlined"
            size="small"
            onPress={() => navigation.navigate(PATHS.MAIN_STACK as never)}>
            Забронировать
          </Button>
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default ContactsScreen;
