import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const MinusIcon: FC<IconProps> = ({ color = PALLETE_COLORS.dark.grey }) => (
  <Svg width="14" height="12" viewBox="0 0 14 12" fill="none">
    <Path
      d="M13.4167 5.41663H7.58333H6.41667H0.583333C0.428624 5.41663 0.280251 5.47808 0.170854 5.58748C0.0614582 5.69688 0 5.84525 0 5.99996C0 6.15467 0.0614582 6.30304 0.170854 6.41244C0.280251 6.52183 0.428624 6.58329 0.583333 6.58329H6.41667H7.58333H13.4167C13.5714 6.58329 13.7197 6.52183 13.8291 6.41244C13.9385 6.30304 14 6.15467 14 5.99996C14 5.84525 13.9385 5.69688 13.8291 5.58748C13.7197 5.47808 13.5714 5.41663 13.4167 5.41663Z"
      fill={color}
    />
  </Svg>
);

export default MinusIcon;
