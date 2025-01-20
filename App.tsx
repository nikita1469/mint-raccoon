import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/api/api";
import AppContent from "./app/AppContent";
import { useFonts } from "@/shared/lib/hooks/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

// Предотвращаем автоматическое скрытие сплэш-скрина
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useFonts();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </View>
  );
}
