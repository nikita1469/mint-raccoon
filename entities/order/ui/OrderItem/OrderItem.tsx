import { PALETTE_COLORS } from "@/shared/const";
import { Divider, Text } from "@/shared/ui";
import { DishIcon } from "@/shared/ui/icons";
import { Fragment } from "react";
import { View } from "react-native";
import { styles } from "./OrderItem.styles";

interface OrderItemProps {
  data: {
    id: string;
    name: string;
    price: string;
    count: number;
    capacity?: string;
  };
  isLast: boolean;
}

const OrderItem = ({ data, isLast }: OrderItemProps) => {
  const { id, name, price, count, capacity } = data;

  return (
    <Fragment key={id}>
      <Divider color="textTransparent" />
      <View
        key={id}
        style={[
          styles.orderItemContainer,
          {
            paddingBottom: isLast ? 0 : 10,
          },
        ]}>
        <View style={styles.dishContainer}>
          <DishIcon size={32} color={PALETTE_COLORS.white} />
        </View>
        <View style={styles.orderItemInfo}>
          <Text>{name}</Text>
          <Text color="textTransparent">{capacity}</Text>
        </View>
        <View style={styles.orderItemPrice}>
          <Text color="textTransparent">{count} шт</Text>
          <Text color="textTransparent">{price}</Text>
        </View>
      </View>
    </Fragment>
  );
};

export default OrderItem;
