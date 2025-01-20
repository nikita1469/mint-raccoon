import { BellIcon } from "@/shared/ui/icons";
import BurgerMenuIcon from "@/shared/ui/icons/BurgerMenuIcon";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Image } from "expo-image";
import { Text } from "@/shared/ui";

interface HeaderProps {
  isLogo?: boolean;
  title?: string;
}

const Header = ({ isLogo, title }: HeaderProps) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity>
        <BellIcon />
      </TouchableOpacity>
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
      <TouchableOpacity>
        <BurgerMenuIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
