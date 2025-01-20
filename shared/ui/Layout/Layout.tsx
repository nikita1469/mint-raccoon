import { FC, ReactNode } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import { Theme } from "@/shared/model/types";
import { createStyles } from "./Layout.styles";
import { PALLETE_COLORS } from "@/shared/const";
import { BlurView } from "expo-blur";

interface LayoutProps {
  children: ReactNode;
  isPadding?: boolean;
  imageType?: "stars" | "leaves";
}

const Layout: FC<LayoutProps> = ({ children, imageType = "stars" }) => {
  const styles = createStyles(PALLETE_COLORS.dark);

  return (
    <View style={styles.layoutWrapper}>
      {/* <View
        style={{
          top: 100,
          left: 100,
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: 150,
          backgroundColor: "#078384",
        }}
      ></View>
      <View
        style={{
          bottom: 100,
          left: 100,
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: 150,
          backgroundColor: "#078384",
        }}
      ></View>
      <BlurView
        intensity={1000}
        blurReductionFactor={100}
        tint="dark"
        style={{ flex: 1 }}
      > */}
      <ImageBackground
        source={
          imageType === "stars"
            ? require("@/shared/assets/images/stars-background.png")
            : require("@/shared/assets/images/leaves-background.png")
        }
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ImageBackground>
      {/* </BlurView> */}
    </View>
  );
};

export default Layout;
