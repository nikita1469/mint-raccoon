import { PATHS } from "@/shared/const";
import {
  EditProfileScreen,
  BookingsScreen,
  BookingScreen,
  PlacingOrderScreen,
  RegistrationScreen,
  LoginScreen,
} from "@/screens";

const screensData = [
  { name: PATHS.LOGIN, component: LoginScreen },
  { name: PATHS.EDIT_PROFILE, component: EditProfileScreen },
  { name: PATHS.BOOKINGS, component: BookingsScreen },
  { name: PATHS.BOOKING, component: BookingScreen },
  { name: PATHS.PLACING_ORDER, component: PlacingOrderScreen },
  { name: PATHS.REGISTRATION, component: RegistrationScreen },
];

export default screensData;
