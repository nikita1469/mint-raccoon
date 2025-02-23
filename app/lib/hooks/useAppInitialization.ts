import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { PATHS } from "@/shared/const";
import { useGetUserLazyQuery } from "@/entities/user/api/userApi";
import { useFonts } from "@/shared/lib/hooks/useFonts";
import * as SplashScreen from "expo-splash-screen";

export const useAppInitialization = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const { getUser } = useGetUserLazyQuery();
  const fontsLoaded = useFonts();
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = await SecureStore.getItemAsync("access_token");

        if (token) {
          await getUser();
          setInitialRoute(PATHS.MAIN_STACK);
        } else {
          setInitialRoute(PATHS.LOGIN);
        }

        if (fontsLoaded) {
          console.log("Fonts loaded, hiding splash screen");
          await SplashScreen.hideAsync();
        }

        if (fontsLoaded && initialRoute && isVideoFinished) {
          console.log("All conditions met, hiding video");
          setShouldShowVideo(false);
        }
      } catch (error) {
        console.error("Initialization error:", error);
        setInitialRoute(PATHS.LOGIN);
      }
    };

    initialize();
  }, [fontsLoaded, initialRoute, isVideoFinished, getUser]);

  return { initialRoute, fontsLoaded, setIsVideoFinished, shouldShowVideo };
};
