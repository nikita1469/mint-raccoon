import { FC, ReactNode } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';

interface IconButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: any;
  isOpacity?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ children, onPress, style, isOpacity = false }) => {
  if (isOpacity) {
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <Pressable onPress={onPress} style={style}>
      {children}
    </Pressable>
  );
};

export default IconButton;
