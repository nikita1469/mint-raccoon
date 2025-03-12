import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PATHS } from "@/shared/const";
import { ProfileScreen, HomeScreen, MenuScreen, BookingScreen } from "@/screens";
import { HomeIcon, MenuIcon, ListIcon, UserIcon } from "@/shared/ui/icons";
import { mainStackConfig } from "./const";

import Tab from "./ui/Tab";

const BottomTabs = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <BottomTabs.Navigator initialRouteName={PATHS.HOME} screenOptions={mainStackConfig}>
      <BottomTabs.Screen
        name={PATHS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <UserIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Профиль" xOffset={-17} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.MENU}
        component={MenuScreen}
        options={{
          tabBarIcon: () => {
            return <MenuIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Меню" xOffset={-26} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <HomeIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Домой" xOffset={-23} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.BOOKING}
        component={BookingScreen}
        options={{
          tabBarIcon: () => {
            return <ListIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Заказ" xOffset={-26} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default MainStack;
