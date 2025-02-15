import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PATHS } from "@/shared/const";
import { ProfileScreen, HomeScreen, MenuScreen, TablesScreen } from "@/screens";
import { HomeIcon, MenuIcon, ListIcon, UserIcon } from "@/shared/ui/icons";
import Tab from "./ui/Tab";
import { mainStackConfig } from "./const";

const BottomTabs = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <BottomTabs.Navigator initialRouteName={PATHS.TABLES} screenOptions={mainStackConfig}>
      <BottomTabs.Screen
        name={PATHS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <UserIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Профиль" xOffset={-17} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.MENU}
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MenuIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Меню" xOffset={-26} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Домой" xOffset={-23} />,
        }}
      />
      <BottomTabs.Screen
        name={PATHS.TABLES}
        component={TablesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <ListIcon />;
          },
          tabBarLabel: ({ focused }) => <Tab focused={focused} label="Заказ" xOffset={-26} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default MainStack;
