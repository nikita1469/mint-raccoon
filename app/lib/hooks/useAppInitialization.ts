import { useState, useEffect, useCallback } from "react";
import { PATHS } from "@/shared/const";
import { useGetUserLazyQuery } from "@/entities/user/api/userApi";
import { useFonts } from "@/shared/lib/hooks/useFonts";

import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";

export const useAppInitialization = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(true);

  const { getUser } = useGetUserLazyQuery();
  const fontsLoaded = useFonts();

  const handleVideoFinish = useCallback(() => {
    setIsVideoFinished(true);
  }, []);

  useEffect(() => {
    const initialize = async () => {
      const token = await SecureStore.getItemAsync("access_token");

      if (token) {
        setInitialRoute(PATHS.MAIN_STACK);
      } else {
        setInitialRoute(PATHS.LOGIN);
      }

      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    initialize();
  }, [fontsLoaded, getUser]);

  useEffect(() => {
    if (fontsLoaded && initialRoute && isVideoFinished) {
      setShouldShowVideo(false);
    }
  }, [fontsLoaded, initialRoute, isVideoFinished]);

  return { initialRoute, fontsLoaded, setIsVideoFinished, shouldShowVideo, handleVideoFinish };
};
