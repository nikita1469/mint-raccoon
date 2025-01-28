import { TouchableOpacity, View } from "react-native";
import { BlurView as ExpoBlurView } from "expo-blur";
import { FC } from "react";
import { styles } from "./BlurView.styles";

const BlurView: FC<{
  children: React.ReactNode;
  gap?: number;
  containerStyle?: {
    [key: string]: string | number;
  };
  isTouchable?: boolean;
}> = ({
  children,
  gap = 15,
  containerStyle,
  isTouchable = false,
}) => {
  if (isTouchable) {
    return (
      <TouchableOpacity
        style={[styles.blurViewWrapper, containerStyle && containerStyle]}
        activeOpacity={0.8}
      >
        <ExpoBlurView
          intensity={13}
          style={[styles.blurView, { gap }]}
          tint="light"
        >
          {children}
        </ExpoBlurView>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.blurViewWrapper, containerStyle && containerStyle]}>
      <ExpoBlurView
        intensity={13}
        style={[styles.blurView, containerStyle && containerStyle, { gap }]}
        tint="light"
      >
        {children}
      </ExpoBlurView>
    </View>
  );
};

export default BlurView;
