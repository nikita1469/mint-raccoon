import { FC } from "react";
import { SvgFromXml } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const hallDividerLargeSvg = `<svg width="6" height="108" viewBox="0 0 6 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 105L5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3L0.999995 105C0.999995 106.105 1.89543 107 3 107C4.10456 107 5 106.105 5 105ZM6 3C6 1.34315 4.65685 -5.87108e-08 3 -1.31134e-07C1.34315 -2.03558e-07 -5.87108e-08 1.34315 -1.31134e-07 3L-4.5897e-06 105C-4.66212e-06 106.657 1.34314 108 3 108C4.65685 108 6 106.657 6 105L6 3Z" fill="white"/>
</svg>
`;

const HallDividerLarge: FC<IconProps> = ({ color = PALLETE_COLORS.white }) => (
  <SvgFromXml xml={hallDividerLargeSvg} opacity={0.5} />
);

export default HallDividerLarge;
