import { type FC } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { backgroundStyles, sizeStyles, styles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import Text from "../Text/Text";

export const Button: FC<ButtonProps> = ({
  children,
  onPress,
  size = "medium",
  style,
  variant = "primary",
  textColor,
  disabled = false,
  isLoading = false,
}) => {
  const buttonStyles = [
    styles.buttonWrapper,
    sizeStyles[size],
    variant && backgroundStyles[variant],
    (disabled || isLoading) && styles.disabled,
    style,
  ];

  const handlePress = () => {
    if (!disabled && !isLoading) {
      onPress();
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" />;
    }

    if (typeof children === "string") {
      return (
        <Text color="white" font="bold" size="large">
          {children}
        </Text>
      );
    }

    return children;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={buttonStyles}
      disabled={disabled || isLoading}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

Button.displayName = "Button";

export default Button;
