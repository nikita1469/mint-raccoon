import { ArrowBackIcon, BellIcon, BurgerIcon } from "@/shared/ui/icons";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Image } from "expo-image";
import { Text } from "@/shared/ui";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  isLogo?: boolean;
  title?: string;
  isBackButton?: boolean;
  isBurgerButton?: boolean;
  isBellButton?: boolean;
}

const Header = ({
  isLogo,
  title,
  isBackButton,
  isBurgerButton,
  isBellButton,
}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      {isBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
      )}
      {isBellButton && (
        <TouchableOpacity>
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
      {isBurgerButton && (
        <TouchableOpacity>
          <BurgerIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
