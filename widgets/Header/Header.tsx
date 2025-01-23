import { BellIcon, BurgerIcon } from "@/shared/ui/icons";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles";
import { Image } from "expo-image";
import { Text } from "@/shared/ui";
import { LinearGradient } from "expo-linear-gradient";
import { PALLETE_COLORS } from "@/shared/const";

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
        <BurgerIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
