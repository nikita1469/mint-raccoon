import { FC } from 'react';
import { View } from 'react-native';
import { styles } from './Divider.styles';

interface DividerProps {
  color: string;
}

const Divider: FC<DividerProps> = ({ color }) => {
  return <View style={[styles.divider, { backgroundColor: color }]}></View>;
};

export default Divider;
