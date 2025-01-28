import { FC, Fragment } from "react";
import { View } from "react-native";
import { BOOKING_FORM_DATA } from "../../const";
import { Divider, Text } from "@/shared/ui";

import { styles } from "./BookingField.styles";

interface IBookingFieldProps {
  id: string;
  label: string;
  isLast: boolean;
}

const BookingField: FC<IBookingFieldProps> = ({ id, label, isLast }) => {
  return (
    <Fragment key={id}>
      <Divider color="textTransparent" />
      <View style={styles.fieldWrapper}>
        <Text color="textTransparent" style={{ width: "50%" }}>
          {label}
        </Text>
        <Text>{BOOKING_FORM_DATA[id as keyof typeof BOOKING_FORM_DATA]}</Text>
      </View>
      {isLast && <Divider color="textTransparent" />}
    </Fragment>
  );
};

export default BookingField;
