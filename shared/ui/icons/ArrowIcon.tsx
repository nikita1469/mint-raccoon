import { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const ArrowIcon: FC<IconProps> = ({ color = PALLETE_COLORS.dark.white }) => (
  <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.24408 6.23703C2.56951 5.92099 3.09715 5.92099 3.42259 6.23703L7 9.71108L10.5774 6.23703C10.9028 5.92099 11.4305 5.92099 11.7559 6.23703C12.0814 6.55306 12.0814 7.06545 11.7559 7.38149L7 12L2.24408 7.38149C1.91864 7.06545 1.91864 6.55306 2.24408 6.23703Z"
      fill={color}
    />
    <Circle cx="24" cy="7" r="5" fill="#0ABAB5" />
  </Svg>
);

export default ArrowIcon;
