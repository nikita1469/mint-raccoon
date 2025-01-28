import { FC } from "react";
import { SvgFromXml } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const hallDividerSmallSvg = `<svg width="6" height="68" viewBox="0 0 6 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.10492 64.9091L5.10492 3.09091C5.10492 1.89317 4.16251 0.922206 3 0.922206C1.83749 0.922206 0.895084 1.89317 0.895084 3.09091L0.895082 64.9091C0.895082 66.1068 1.83748 67.0778 3 67.0778C4.16251 67.0778 5.10492 66.1068 5.10492 64.9091ZM6 3.09091C6 1.38385 4.65685 0 3 0C1.34315 0 2.69511e-06 1.38384 2.62268e-06 3.09091L0 64.9091C0 66.6162 1.34315 68 3 68C4.65685 68 6 66.6162 6 64.9091L6 3.09091Z" fill="white"/>
</svg>`;

const HallDividerSmall: FC<IconProps> = ({ color = PALLETE_COLORS.white }) => (
  <SvgFromXml xml={hallDividerSmallSvg} opacity={0.5} />
);

export default HallDividerSmall;
