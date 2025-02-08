import { FC } from "react";
import { View } from "react-native";
import { styles } from "./Divider.styles";
import { PALETTE_COLORS } from "@/shared/const";

interface DividerProps {
  color: Exclude<
    keyof typeof PALETTE_COLORS,
    "gradient" | "gradientTransparent"
  >;
}

const Divider: FC<DividerProps> = ({ color }) => {
  return (
    <View
      style={[styles.divider, { backgroundColor: PALETTE_COLORS[color] }]}
    ></View>
  );
};

export default Divider;
