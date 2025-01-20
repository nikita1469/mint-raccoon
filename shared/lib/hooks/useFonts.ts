import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync({
        "DelaGothicOne-Regular": require("@/shared/assets/fonts/DelaGothicOne-Regular.ttf"),
        "Manrope-Bold": require("@/shared/assets/fonts/Manrope-Bold.ttf"),
        "Manrope-ExtraLight": require("@/shared/assets/fonts/Manrope-ExtraLight.ttf"),
        "Manrope-Regular": require("@/shared/assets/fonts/Manrope-Regular.ttf"),
        "Manrope-SemiBold": require("@/shared/assets/fonts/Manrope-SemiBold.ttf"),

        // добавьте другие начертания шрифтов по необходимости
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error("Error loading fonts:", error);
    }
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  return fontsLoaded;
};
