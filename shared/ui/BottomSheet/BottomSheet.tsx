import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import GorhomBottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { PALETTE_COLORS } from "@/shared/const";
import { BlurView } from "expo-blur";
import { BottomSheetProps } from "./BottomSheet.types";

const BottomSheet = <T,>({
  showBottomSheet,
  setShowBottomSheet,
  snapPoints,
  children,
  onAnimate,
  backgroundColor,
}: BottomSheetProps<T>) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: showBottomSheet ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showBottomSheet, opacity]);

  const handleSnapChange = (index: number) => {
    if (index < 1) {
      setShowBottomSheet(null);
      setTimeout(() => {}, 300);
    }
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 9,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        opacity: opacity,
      }}
    >
      <BlurView intensity={12} style={{ flex: 1 }}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setShowBottomSheet(null);
          }}
        >
          {showBottomSheet && (
            <GorhomBottomSheet
              backgroundStyle={{
                backgroundColor: backgroundColor || PALETTE_COLORS.primary,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }}
              handleIndicatorStyle={{
                width: 90,
                backgroundColor: PALETTE_COLORS.lightGrey,
              }}
              snapPoints={snapPoints}
              onChange={(index) => {
                handleSnapChange(index);
                onAnimate?.(index < 1 ? 1 : 0, index);
              }}
              index={1}
              enablePanDownToClose={true}
              style={{
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <BottomSheetView
                style={{
                  flex: 1,
                }}
                onStartShouldSetResponder={() => true}
                onTouchEnd={(e) => e.stopPropagation()}
              >
                {children}
              </BottomSheetView>
            </GorhomBottomSheet>
          )}
        </Pressable>
      </BlurView>
    </Animated.View>
  );
};

export default BottomSheet;
