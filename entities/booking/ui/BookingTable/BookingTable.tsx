import { TableFourSeats, TableTwoSeats } from "@/shared/ui/icons";
import { PALLETE_COLORS } from "@/shared/const";
import { Text } from "@/shared/ui";
import { Pressable, StyleProp, ViewStyle } from "react-native";

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
  style,
  isVertical = false,
  opacity = 1,
}: BookingTableProps) => {
  return (
    <Pressable onPress={() => handleTablePress(id)} style={style && style}>
      {type === "four" ? (
        <TableFourSeats
          isVertical={isVertical}
          opacity={opacity}
          color={
            pickedTable === id ? PALLETE_COLORS.secondary : PALLETE_COLORS.white
          }
        />
      ) : (
        <TableTwoSeats
          isVertical={isVertical}
          opacity={opacity}
          color={
            pickedTable === id ? PALLETE_COLORS.secondary : PALLETE_COLORS.white
          }
        />
      )}
      <Text
        font="delaGothicOne"
        color={pickedTable === id ? "secondary" : "white"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: [{ translateX: -7 }, { translateY: -10 }],
        }}
      >
        {id}
      </Text>
    </Pressable>
  );
};

export default BookingTable;
