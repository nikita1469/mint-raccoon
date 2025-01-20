import { StyleSheet } from 'react-native';
import { PALLETE_COLORS } from '@/shared/const';
import { Theme, ThemeColors } from '@/shared/model/types';

export const createStyles = (themeColors: ThemeColors) => {
  return StyleSheet.create({
    textFieldWrapper: {
      gap: 12,
      flexShrink: 1,
    },
    textFieldContainer: {
      gap: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    multiline: {
      height: 150,
      alignItems: 'flex-start',
    },
    textField: {
      fontSize: 14,
      lineHeight: 16.71,
      color: themeColors.textPrimary,
      width: '90%',
      flex: 1,
      minWidth: 0,
    },
  });
};

export const sizeStyles = StyleSheet.create({
  small: {
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 10,
  },
  medium: {
    padding: 17,
    height: 52,
    borderRadius: 16,
  },
});
