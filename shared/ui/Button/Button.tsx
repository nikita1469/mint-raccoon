import { ReactNode } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { PALLETE_COLORS } from '@/shared/const';
import { PaletteColor } from '@/shared/model/types';
import { sizeStyles, styles } from './Button.styles';

interface ButtonProps {
  children: ReactNode | string;
  onPress: () => void;
  size?: 'medium' | 'small';
  backgroundColor?: PaletteColor;
  textColor?: PaletteColor;
  flex?: 'grow' | 'shrink';
  disabled?: boolean;
  isLoading?: boolean;
  style?: object;
}

const Button = ({
  children,
  onPress,
  size = 'medium',
  flex = 'grow',
  style,
  backgroundColor = PALLETE_COLORS.light.lightGreen,
  textColor = PALLETE_COLORS.light.white,
  disabled = false,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={disabled || isLoading ? undefined : onPress}
      style={[
        styles.buttonWrapper,
        flex === 'grow' ? { flexGrow: 1 } : { flexShrink: 1 },
        { backgroundColor },
        size && sizeStyles[size],
        disabled && styles.disabled,
        style && style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size='small' color={PALLETE_COLORS.light.white} />
      ) : (
        <Text style={[disabled && styles.disabled, { fontWeight: 500, color: textColor }]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
