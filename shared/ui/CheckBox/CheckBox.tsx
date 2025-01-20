import { FC } from 'react';
import { View } from 'react-native';
import { Pressable } from 'react-native';
import { styles } from './CheckBox.styles';
import CheckedIcon from './CheckedIcon';

interface CheckBoxProps {
  checked: boolean;
  onPress?: () => void;
  borderColor: string;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, onPress, borderColor }) => {
  return (
    <Pressable style={styles.checkBoxWrapper} onPress={onPress}>
      {checked ? <CheckedIcon /> : <View style={[styles.unchecked, { borderColor }]}></View>}
    </Pressable>
  );
};

export default CheckBox;
