import { PALETTE_COLORS } from "@/shared/const";
import { Text } from "@/shared/ui";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./BookingSticker.styles";
import { FC } from "react";

const BookingSticker: FC<{ title: string }> = ({ title }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={PALETTE_COLORS.gradient}
      style={styles.sticker}
    >
      <Text font="delaGothicOne" size="small">
        {title}
      </Text>
    </LinearGradient>
  );
};

export default BookingSticker;
