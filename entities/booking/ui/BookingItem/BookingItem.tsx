import { ArrowIcon } from "@/shared/ui/icons";
import { Image } from "expo-image";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/shared/ui";

import { styles } from "./BookingItem.styles";
import { PALLETE_COLORS, PATHS } from "@/shared/const";
import { useNavigation } from "@react-navigation/native";

interface BookingItemProps {
  date: string;
  table: string;
  isActive?: boolean;
}

const BookingItem = ({ date, table, isActive }: BookingItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bookingImageContainer}
      activeOpacity={0.8}
      hitSlop={10}
      onPress={() => {
        navigation.navigate(PATHS.BOOKING as never);
      }}
    >
      <Image
        source={require("@/shared/assets/images/hall-image.png")}
        style={styles.bookingImage}
      />
      <View style={styles.bookingInfo}>
        <Text font="semiBold">{date}</Text>
        <Text color="textTransparent">{table}</Text>
      </View>
      <View
        style={[
          styles.bookingButton,
          isActive && {
            backgroundColor: PALLETE_COLORS.dark.primary,
          },
        ]}
      >
        <ArrowIcon direction="right" />
      </View>
    </TouchableOpacity>
  );
};

export default BookingItem;
