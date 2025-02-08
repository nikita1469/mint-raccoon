import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { PALETTE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const ArrowBackIcon: FC<IconProps> = ({ color = PALETTE_COLORS.white }) => (
  <Svg width="43" height="48" viewBox="0 0 43 48" fill="none">
    <Path
      d="M2.14258 13.1422H28.1426C28.6949 13.1422 29.1426 13.5899 29.1426 14.1422C29.1426 14.6944 28.6949 15.1422 28.1426 15.1422H2.14258V13.1422Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.8492 0.707122C14.4587 0.316598 13.8256 0.316598 13.435 0.707122L0 14.1422L13.435 27.5772C13.8256 27.9677 14.4587 27.9677 14.8492 27.5772C15.2398 27.1867 15.2398 26.5535 14.8492 26.163L2.82843 14.1422L14.8492 2.12134C15.2398 1.73081 15.2398 1.09765 14.8492 0.707122Z"
      fill={color}
    />
  </Svg>
);

export default ArrowBackIcon;
