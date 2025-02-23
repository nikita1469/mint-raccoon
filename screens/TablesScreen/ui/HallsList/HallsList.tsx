import { PALETTE_COLORS } from "@/shared/const/PALETTE_COLORS";
import { Text } from "@/shared/ui";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./HallsList.styles";
import { HALLS_DATA } from "../../const";

interface HallsListProps {
  selectedHall: string;
  setSelectedHall: (id: string) => void;
}

const HallsList: FC<HallsListProps> = ({ selectedHall, setSelectedHall }) => {
  return (
    <View style={styles.hallsListWrapper}>
      <Text color="textTransparent">Залы</Text>
      <View style={styles.hallsList}>
        {HALLS_DATA.map(({ id, name }) => (
          <TouchableOpacity
            key={id}
            style={[
              styles.hallItem,
              id !== selectedHall && styles.hallItemInactive,
            ]}
            activeOpacity={0.7}
            onPress={() => setSelectedHall(id)}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={
                id === selectedHall
                  ? PALETTE_COLORS.gradient
                  : PALETTE_COLORS.gradientTransparent
              }
              style={[
                styles.gradient,
                id !== selectedHall && styles.gradientInactive,
              ]}
            >
              <Text font="delaGothicOne">{name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HallsList;
