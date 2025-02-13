import { PATHS } from "@/shared/const";
import {
  AuthScreen,
  EditProfileScreen,
  BookingsScreen,
  BookingScreen,
  PlacingOrderScreen,
  RegistrationScreen,
} from "@/screens";

const screensData = [
  { name: PATHS.AUTH, component: AuthScreen },
  { name: PATHS.EDIT_PROFILE, component: EditProfileScreen },
  { name: PATHS.BOOKINGS, component: BookingsScreen },
  { name: PATHS.BOOKING, component: BookingScreen },
  { name: PATHS.PLACING_ORDER, component: PlacingOrderScreen },
  { name: PATHS.REGISTRATION, component: RegistrationScreen },
];

export default screensData;
