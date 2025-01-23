import { FC } from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const BurgerIcon: FC<IconProps> = ({ color = PALLETE_COLORS.dark.white }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Rect x="4" y="5" width="24" height="2" rx="1" fill={color} />
    <Path
      d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
      fill={color}
    />
    <Rect x="4" y="25" width="24" height="2" rx="1" fill={color} />
  </Svg>
);

export default BurgerIcon;
