import { Fragment, useState } from "react";
import { AlertModal, BlurView, Button, Divider, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./ProfileScreen.styles";
import { AvatarIcon, PlusIcon } from "@/shared/ui/icons";
import { BOOKINGS_DATA, FIELDS_DATA, PALETTE_COLORS, PATHS } from "@/shared/const";
import { BookingItem } from "@/entities/booking/ui";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "@/entities/user/model/userStore";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userData = useUserStore((state) => ({
    phone: state.phone,
    first_name: state.first_name,
    last_name: state.last_name,
    birth_date: state.birth_date,
    gender: state.gender,
    id: state.id,
  }));
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate(PATHS.EDIT_PROFILE as never);
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    navigation.navigate(PATHS.LOGIN as never);
  };

  return (
    <Layout>
      <Header title="Профиль" isBellButton isBurgerButton />
      <ScrollView contentContainerStyle={styles.profileScroll}>
        <TouchableOpacity style={styles.avatarContainer} activeOpacity={0.8} onPress={() => {}}>
          <AvatarIcon />
          <Pressable style={styles.deleteButton} onPress={() => {}}>
            <PlusIcon color={PALETTE_COLORS.black} size={10} />
          </Pressable>
        </TouchableOpacity>
        <BlurView key={1}>
          <Text font="delaGothicOne" color="textPrimary">
            ИНФОРМАЦИЯ О ПРОФИЛЕ
          </Text>
          <View>
            {FIELDS_DATA.map(({ label, id }, index) => (
              <Fragment key={id}>
                <Divider color="textTransparent" />
                <View style={styles.fieldWrapper}>
                  <Text color="textTransparent" style={{ width: "40%" }}>
                    {label}
                  </Text>
                  <Text style={{ width: "60%" }}>{userData[id as keyof typeof userData]}</Text>
                </View>
                {index === FIELDS_DATA.length - 1 && <Divider color="textTransparent" />}
              </Fragment>
            ))}
          </View>
          <Button variant="outlined" size="small" onPress={handleEditProfile}>
            Изменить
          </Button>
        </BlurView>
        <BlurView key={2}>
          <Text size="base" font="delaGothicOne" color="textPrimary">
            ТЕКУЩЕЕ БРОНИРОВАНИЕ
          </Text>
          <BookingItem date="30 апреля 2024" table="Столик №1, Зал «Сакура»" isActive={true} />
        </BlurView>
        <BlurView key={3}>
          <Text size="base" font="delaGothicOne" color="textPrimary">
            ИСТОРИЯ БРОНИРОВАНИЙ
          </Text>
          {BOOKINGS_DATA.map(({ id, table, date }, index) => (
            <Fragment key={id}>
              <Divider color="textTransparent" />
              <BookingItem key={id} table={table} date={date} />
              {index === BOOKINGS_DATA.length - 1 && <Divider color="textTransparent" />}
            </Fragment>
          ))}
          <Button
            variant="outlined"
            size="small"
            onPress={() => navigation.navigate(PATHS.BOOKINGS as never)}>
            Все бронирования
          </Button>

          <View style={styles.logoutContainer}>
          <Text font="bold" onPress={() => navigation.navigate(PATHS.LOGIN as never)}>Выйти из аккаунта</Text>
          <Text font="bold" onPress={() => setShowDeleteModal(true)}>
            Удалить аккаунт
          </Text>
          </View>
        </BlurView>

        <AlertModal
          type="deleteAccount"
          visible={showDeleteModal}
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowDeleteModal(false)}
        />
      </ScrollView>
    </Layout>
  );
};

export default ProfileScreen;
