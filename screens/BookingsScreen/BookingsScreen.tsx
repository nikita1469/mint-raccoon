import { FC, Fragment } from "react";
import { Divider, BlurView, Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";
import { ScrollView } from "react-native";
import { BOOKINGS_DATA } from "@/shared/const";
import { BookingItem } from "@/entities/booking/ui";
import { styles } from "./BookingsScreen.styles";

interface BookingsScreenProps {}

const BookingsScreen: FC<BookingsScreenProps> = () => {
  return (
    <Layout>
      <Header isBackButton />
      <ScrollView contentContainerStyle={styles.bookingsScroll}>
        <Text size="large" font="delaGothicOne">
          ИСТОРИЯ БРОНИРОВАНИЙ
        </Text>
        <BlurView>
          {BOOKINGS_DATA.map(({ id, table, date }, index) => (
            <Fragment key={id}>
              <Divider color="textTransparent" />
              <BookingItem key={id} table={table} date={date} />
              {index === BOOKINGS_DATA.length - 1 && (
                <Divider color="textTransparent" />
              )}
            </Fragment>
          ))}
        </BlurView>
      </ScrollView>
    </Layout>
  );
};

export default BookingsScreen;
