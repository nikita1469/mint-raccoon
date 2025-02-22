import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PALETTE_COLORS, PATHS } from "@/shared/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screensData from "./const/screensData";
import { MainStack } from "./stacks/MainStack/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const AppContent = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={PATHS.LOGIN}
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: PALETTE_COLORS.background,
              },
            }}
          >
            <Stack.Screen name={PATHS.MAIN_STACK} component={MainStack} />
            {screensData?.map(({ name, component }) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppContent;
