import { FC, ReactNode } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";

import { createStyles } from "./Layout.styles";
import { PALLETE_COLORS } from "@/shared/const";

interface LayoutProps {
  children: ReactNode;
  isPadding?: boolean;
  imageType?: "stars" | "leaves";
}

const Layout: FC<LayoutProps> = ({ children, imageType = "stars" }) => {
  const styles = createStyles(PALLETE_COLORS.dark);

  return (
    <View style={styles.layoutWrapper}>
      <ImageBackground
        source={
          imageType === "stars"
            ? require("@/shared/assets/images/stars-blur-background.png")
            : require("@/shared/assets/images/leaves-background.png")
        }
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Layout;
