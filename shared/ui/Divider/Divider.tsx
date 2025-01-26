import { FC } from "react";
import { View } from "react-native";
import { styles } from "./Divider.styles";
import { PALLETE_COLORS } from "@/shared/const";

interface DividerProps {
  color: Exclude<
    keyof typeof PALLETE_COLORS.dark,
    "gradient" | "gradientTransparent"
  >;
}

const Divider: FC<DividerProps> = ({ color }) => {
  return (
    <View
      style={[styles.divider, { backgroundColor: PALLETE_COLORS.dark[color] }]}
    ></View>
  );
};

export default Divider;
