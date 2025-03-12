import { ArrowBackIcon, BellIcon, BurgerIcon } from "@/shared/ui/icons";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Image } from "expo-image";
import { Text } from "@/shared/ui";
import { useNavigation } from "@react-navigation/native";
import { Fragment, useState } from "react";
import { BurgerMenu } from "./ui";
import { PATHS } from "@/shared/const";

interface HeaderProps {
  isLogo?: boolean;
  title?: string;
  isBackButton?: boolean;
  isBurgerButton?: boolean;
  isBellButton?: boolean;
}

const Header = ({ isLogo, title, isBackButton, isBurgerButton, isBellButton }: HeaderProps) => {
  const navigation = useNavigation();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleCloseBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <Fragment>
      <View style={styles.headerWrapper}>
        {isBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackIcon />
          </TouchableOpacity>
        )}
        {isBellButton && (
          <TouchableOpacity onPress={() => navigation.navigate(PATHS.NOTIFICATIONS as never)}>
            <BellIcon />
          </TouchableOpacity>
        )}
        {isLogo && (
          <Image
            source={require("../../shared/assets/images/logo.png")}
            style={styles.headerLogo}
            contentFit="contain"
          />
        )}
        {title && (
          <Text font="delaGothicOne" size="header">
            {title}
          </Text>
        )}
        {title && !isBurgerButton && (<View style={{ width: 32 }} />)}
        {isBurgerButton && (
          <TouchableOpacity onPress={handleBurgerMenu}>
            <BurgerIcon />
          </TouchableOpacity>
        )}
      </View>
      <BurgerMenu
        onClose={handleCloseBurgerMenu}
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleCloseBurgerMenu={handleCloseBurgerMenu}
      />
    </Fragment>
  );
};

export default Header;
