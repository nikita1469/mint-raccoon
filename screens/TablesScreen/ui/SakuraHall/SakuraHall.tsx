import { View } from "react-native";
import { Fragment } from "react";
import { HallDividerSmall, HallDividerLarge } from "@/shared/ui/icons";
import { styles } from "./SakuraHall.styles";
import { BookingTable } from "@/entities/booking/ui";
import { useBookingStore } from "@/entities/booking/model/bookingStore";

const SakuraHall = () => {
  const { tableId, updateField } = useBookingStore();

  const handleTablePress = (id: number) => {
    updateField("tableId", id === tableId ? null : id);
  };

  return (
    <Fragment>
      <View style={styles.tablesSchemaRow}>
        <HallDividerSmall />
        <BookingTable
          type="four"
          id={1}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
        />
        <HallDividerSmall />
        <BookingTable
          type="four"
          id={2}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
        />
      </View>
      <View style={styles.tablesSchemaRow}>
        <BookingTable
          type="two"
          id={3}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
          isVertical
        />
        <HallDividerLarge />
        <BookingTable
          type="four"
          id={4}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
          isVertical
        />
        <BookingTable
          type="four"
          id={5}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
          isVertical
          style={{ marginLeft: 40 }}
        />
      </View>
      <View style={styles.tablesSchemaRow}>
        <HallDividerSmall />
        <BookingTable
          type="four"
          id={6}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
        />
        <HallDividerSmall />
        <BookingTable
          type="four"
          id={7}
          pickedTable={tableId}
          handleTablePress={handleTablePress}
        />
      </View>
    </Fragment>
  );
};

export default SakuraHall;
