import { View } from "react-native";
import { BlurView as ExpoBlurView } from "expo-blur";
import { FC } from "react";
import { styles } from "./BlurView.styles";

const BlurView: FC<{ children: React.ReactNode; gap?: number }> = ({
  children,
  gap = 15,
}) => {
  return (
    <View style={styles.blurViewWrapper}>
      <ExpoBlurView
        intensity={13}
        style={[styles.blurView, { gap }]}
        tint="light"
      >
        {children}
      </ExpoBlurView>
    </View>
  );
};

export default BlurView;
