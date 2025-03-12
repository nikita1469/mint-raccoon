import React from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import { Image } from "expo-image";
import { Text } from "@/shared/ui";
import { styles } from "./BurgerMenu.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CloseIcon } from "@/shared/ui/icons";
import { PATHS } from "@/shared/const";
import { useNavigation } from "@react-navigation/native";

const burgerMenuItems = [
  {
    title: "Контакты",
    path: PATHS.CONTACTS,
  },
  {
    title: "Уведомления",
    path: PATHS.NOTIFICATIONS,
  },
  {
    title: "Профиль",
    path: PATHS.PROFILE,
  },
  {
    title: "Меню",
    path: PATHS.MENU,
  },
];

interface BurgerMenuProps {
  onClose: () => void;
  isBurgerMenuOpen: boolean;
  handleCloseBurgerMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose, isBurgerMenuOpen, handleCloseBurgerMenu }) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleMenuItemPress = (path: string) => {
    navigation.navigate(path as never);
    handleCloseBurgerMenu();
  };

  return (
    <Modal visible={isBurgerMenuOpen} animationType="fade" onRequestClose={handleCloseBurgerMenu}>
      <View style={[styles.burgerMenuWrapper, { paddingTop: top }]}>
        <TouchableOpacity
          style={[styles.closeButton, { top }]}
          onPress={onClose}
          hitSlop={15}
          activeOpacity={0.8}
        >
          <CloseIcon />
        </TouchableOpacity>
        <Image
          source={require("@/shared/assets/images/logo.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <View style={styles.burgerMenuItems}>
          {burgerMenuItems.map((item) => (
            <TouchableOpacity 
              key={item.title} 
              activeOpacity={0.8} 
              hitSlop={14}
              onPress={() => handleMenuItemPress(item.path)}>
              <Text size="large" font="semiBold">
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default BurgerMenu;
