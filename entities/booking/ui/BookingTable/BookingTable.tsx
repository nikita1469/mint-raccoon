import { TableFourSeats, TableTwoSeats } from "@/shared/ui/icons";
import { PALETTE_COLORS } from "@/shared/const";
import { Text } from "@/shared/ui";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { styles } from "./BookingTable.styles";
interface BookingTableProps {
  handleTablePress: (id: number) => void;
  id: number;
  pickedTable: number | null;
  type?: "four" | "two";
  isVertical?: boolean;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}

const BookingTable = ({
  handleTablePress,
  id,
  pickedTable,
  type,
  isVertical = false,
  opacity = 1,
}: BookingTableProps) => {
  return (
    <Pressable onPress={() => handleTablePress(id)}>
      {type === "four" ? (
        <TableFourSeats
          isVertical={isVertical}
          opacity={opacity}
          color={pickedTable === id ? PALETTE_COLORS.secondary : PALETTE_COLORS.white}
        />
      ) : (
        <TableTwoSeats
          isVertical={isVertical}
          opacity={opacity}
          color={pickedTable === id ? PALETTE_COLORS.secondary : PALETTE_COLORS.white}
        />
      )}
      <Text
        font="delaGothicOne"
        color={pickedTable === id ? "secondary" : "white"}
        style={styles.tableNumber}>
        {id}
      </Text>
    </Pressable>
  );
};

export default BookingTable;
