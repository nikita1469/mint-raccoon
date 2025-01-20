import { PATHS } from "@/shared/const";
import {
  AuthScreen,
  HomeScreen,
  MenuScreen,
  OrderScreen,
  ProfileScreen,
} from "@/screens";

const screensData = [
  { name: PATHS.AUTH, component: AuthScreen },
  { name: PATHS.HOME, component: HomeScreen },
  { name: PATHS.PROFILE, component: ProfileScreen },
  { name: PATHS.MENU, component: MenuScreen },
  { name: PATHS.ORDER, component: OrderScreen },
];

export default screensData;
