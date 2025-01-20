import { StyleSheet } from 'react-native';
import { Theme, ThemeColors } from '@/shared/model/types';

export const createStyles = (themeColors: ThemeColors) => {
  return StyleSheet.create({
    tabsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      borderRadius: 16,
      padding: 4,
      gap: 8,
      overflow: 'scroll',
    },
    tabButton: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      alignItems: 'center',
      borderRadius: 12,
      minWidth: 58,
      height: 44,
    },
    green: {
      backgroundColor: themeColors.lightGreen,
    },
    accentGrey: {
      backgroundColor: themeColors.background,
    },
  });
};

export const sizeStyles = StyleSheet.create({
  small: {
    height: 43,
  },
  medium: {
    height: 52,
  },
});
