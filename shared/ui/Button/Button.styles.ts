import { StyleSheet } from 'react-native';
import { PALLETE_COLORS } from '@/shared/const';
import { Theme } from '@/shared/model/types';

export const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  disabled: {
    opacity: 0.5,
    color: PALLETE_COLORS.light.white,
  },
});

export const sizeStyles = StyleSheet.create({
  medium: {
    minHeight: 48,
    maxHeight: 48,
  },
  small: {
    minHeight: 33,
    maxHeight: 33,
  },
});
