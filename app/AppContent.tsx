import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PALETTE_COLORS, PATHS } from "@/shared/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStack } from "./stacks/MainStack/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppInitialization } from "./lib/hooks/useAppInitialization";
import { VideoSplash } from "@/features";
import { BottomSheetsProvider } from "./providers";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useUserStore } from "@/entities/user/model/userStore";
import { useEffect } from "react";

import screensData from "./const/screensData";

import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { initialRoute, shouldShowVideo, handleVideoFinish } = useAppInitialization();

  const { data: user } = useGetUserQuery();
  const updateUserState = useUserStore((state) => state.updateUserState);

  useEffect(() => {
    if (user) {
      updateUserState(user);
    }
  }, [user, updateUserState]);
  
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute || undefined}
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: PALETTE_COLORS.background,
              },
            }}>
            <Stack.Screen name={PATHS.MAIN_STACK} component={MainStack} />
            {screensData?.map(({ name, component }) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
        <BottomSheetsProvider />
        {shouldShowVideo && <VideoSplash onVideoFinish={handleVideoFinish} />}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppContent;
