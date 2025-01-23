import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PALLETE_COLORS, PATHS } from "@/shared/const";
import { Text } from "@/shared/ui";
import { ProfileScreen, HomeScreen, MenuScreen, OrderScreen } from "@/screens";
import { HomeIcon, MenuIcon, OrderIcon, UserIcon } from "@/shared/ui/icons";
import { StyleSheet, View } from "react-native";
import Tab from "./ui/Tab";

const BottomTabs = createBottomTabNavigator();

export const MainStack = () => {
  const mainStackStyles = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: PALLETE_COLORS.dark.primary,
      position: "absolute" as const,
      bottom: 20,
      height: 54,
      marginHorizontal: 20,
      paddingVertical: 4,
      borderRadius: 27,
      borderTopWidth: 0,
      gap: 4,
      paddingHorizontal: 28,
      shadowColor: "#000000",
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 10,
    },
    tabBarItemStyle: {
      top: 4,
      height: 46,
      borderRadius: 23,
    },
  };

  const token = true;

  return (
    <BottomTabs.Navigator
      initialRouteName={PATHS.ORDER}
      screenOptions={mainStackStyles}
    >
      <BottomTabs.Screen
        name={PATHS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <UserIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <Tab focused={focused} label="Профиль" xOffset={-17} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={PATHS.MENU}
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MenuIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <Tab focused={focused} label="Меню" xOffset={-26} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={PATHS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <Tab focused={focused} label="Домой" xOffset={-23} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={PATHS.ORDER}
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <OrderIcon />;
          },
          tabBarLabel: ({ focused }) => (
            <Tab focused={focused} label="Заказ" xOffset={-26} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default MainStack;
