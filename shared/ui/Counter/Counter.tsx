import { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../Text/Text";
import { MinusIcon, PlusIcon } from "../icons";
import { styles } from "./Counter.styles";
import { PALETTE_COLORS } from "@/shared/const";

interface CounterProps {
  value: number | string;
  setValue: (value: number) => void;
  step?: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
}

const Counter: FC<CounterProps> = ({
  value,
  setValue,
  step = 1,
  minValue = 1,
  maxValue,
  disabled,
}) => {
  const handleIncrease = () => {
    if (maxValue && value === maxValue) return;
    setValue(Number(value) + step);
  };
  const handleDecrease = () => {
    if (value === minValue) return;
    setValue(Number(value) - step);
  };

  return (
    <View style={styles.counterWrapper}>
      <TouchableOpacity
        style={[
          styles.counterButton,
          (value === minValue || disabled) && { opacity: 0.4 },
        ]}
        onPress={handleDecrease}
      >
        <MinusIcon color={PALETTE_COLORS.white} />
      </TouchableOpacity>

      <Text color={disabled ? "textTransparent" : "white"}>{value} мин</Text>
      <TouchableOpacity
        style={[
          styles.counterButton,
          (value === maxValue || disabled) && { opacity: 0.4 },
        ]}
        onPress={handleIncrease}
      >
        <PlusIcon color={PALETTE_COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
