import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PALETTE_COLORS, PATHS } from "@/shared/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screensData from "./const/screensData";
import { MainStack } from "./stacks/MainStack/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppInitialization } from "./lib/hooks/useAppInitialization";
import { VideoSplash } from "@/features";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { initialRoute, fontsLoaded, setIsVideoFinished, shouldShowVideo } = useAppInitialization();

  const handleVideoFinish = useCallback(() => {
    console.log("Video finish callback triggered");
    setIsVideoFinished(true);
  }, [setIsVideoFinished]);

  if (!fontsLoaded) {
    return null;
  }

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
            }}
          >
            <Stack.Screen name={PATHS.MAIN_STACK} component={MainStack} />
            {screensData?.map(({ name, component }) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
        {shouldShowVideo && <VideoSplash onVideoFinish={handleVideoFinish} />}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppContent;
