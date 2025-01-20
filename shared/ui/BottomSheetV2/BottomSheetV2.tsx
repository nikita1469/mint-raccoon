import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useMemo, useRef } from 'react';
import { Animated, Pressable } from 'react-native';
import GorhomBottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const BottomSheetV2: FC<{
  showBottomSheet: boolean;
  setShowBottomSheet: Dispatch<SetStateAction<string | null>>;
  themeColors: any;
  snapPoints: string[];
  children: ReactNode;
}> = ({ showBottomSheet, setShowBottomSheet, themeColors, snapPoints, children }) => {
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
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 9,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        opacity: opacity,
      }}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          setShowBottomSheet(null);
        }}
      >
        {showBottomSheet && (
          <GorhomBottomSheet
            backgroundStyle={{ backgroundColor: themeColors.background }}
            handleIndicatorStyle={{ backgroundColor: themeColors.textSecondary }}
            snapPoints={snapPoints}
            onChange={handleSnapChange}
            index={1}
            enablePanDownToClose={true}
            style={{
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <BottomSheetView onStartShouldSetResponder={() => true} onTouchEnd={e => e.stopPropagation()}>
              {children}
            </BottomSheetView>
          </GorhomBottomSheet>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default BottomSheetV2;
