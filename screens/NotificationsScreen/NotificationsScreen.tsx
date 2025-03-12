import React from "react";
import { View, SectionList } from "react-native";
import { Header } from "@/widgets";
import { Layout, Text } from "@/shared/ui";
import { styles } from "./NotificationsScreen.styles";
import { BellIcon } from "@/shared/ui/icons";
import { PALETTE_COLORS } from "@/shared/const";

interface Notification {
  id: string;
  message: string;
  isRead: boolean;
  date: string;
}

interface NotificationSection {
  title: string;
  data: Notification[];
}

const notificationsData: NotificationSection[] = [
  {
    title: "Сегодня 6 мая 2024",
    data: [
      {
        id: '1',
        message: 'Ваш заказ принят! Спасибо за выбор нашего ресторана. Мы уже начали готовить вашу вкусную еду. Ожидайте, скоро она будет у вас.',
        isRead: false,
        date: '2024-05-06',
      },
    ],
  },
  {
    title: "Вторник 30 апреля 2024",
    data: [
      {
        id: '2',
        message: 'Не забудьте оставить отзыв! Ваше мнение важно для нас. Расскажите о своем опыте, чтобы помочь нам стать лучше. Спасибо за вашу поддержку!',
        isRead: true,
        date: '2024-04-30',
      },
      {
        id: '3',
        message: 'Ваш заказ готов к выдаче! Загляните к нам в ресторан, чтобы забрать свои любимые блюда. Мы ждем вас!',
        isRead: true,
        date: '2024-04-30',
      },
    ],
  },
];

const NotificationItem: React.FC<{ item: Notification }> = ({ item }) => {
  return (
    <View style={[
      styles.notificationItem, 
      item.isRead ? styles.readNotification : styles.unreadNotification
    ]}>
      <View style={styles.notificationContent}>
        <View style={styles.notificationIcon}>
          <BellIcon
            color={item.isRead ? PALETTE_COLORS.lightGrey : PALETTE_COLORS.textPrimary}
            size={24} 
            isActive={false}
          />
        </View>
        <Text size="small" style={styles.notificationMessage}>{item.message}</Text>
      </View>
    </View>
  );
};

const NotificationsScreen: React.FC = () => {
  return (
    <Layout>
      <Header title="Уведомления" isBackButton />
      <View style={styles.container}>
        {notificationsData.length > 0 ? (
          <SectionList
            sections={notificationsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NotificationItem item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text align="center" style={{ marginBottom: 10 }}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
            contentContainerStyle={styles.notificationsList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text align="center">У вас пока нет уведомлений</Text>
          </View>
        )}
      </View>
    </Layout>
  );
};

export default NotificationsScreen;
