

import { IconProps } from "@/shared/model/types";
import { FC } from "react";
import { SvgFromXml } from "react-native-svg";

const arrowHallIconSvg = () => `<svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.42052 6.24565C2.00396 5.8291 1.32859 5.8291 0.912029 6.24566C0.495469 6.66221 0.495469 7.33759 0.912029 7.75415L6.19406 13.0362C6.38956 13.2591 6.67652 13.3999 6.99635 13.3999C6.9969 13.3999 6.99744 13.3999 6.99799 13.3999C7.27151 13.4003 7.54516 13.2962 7.75386 13.0875L13.0872 7.75415C13.5037 7.33759 13.5037 6.66221 13.0872 6.24565C12.6706 5.82909 11.9953 5.82909 11.5787 6.24565L8.06302 9.76133L8.06302 1.66657C8.06302 1.07746 7.58546 0.599902 6.99635 0.599902C6.40725 0.599902 5.92969 1.07746 5.92969 1.66657L5.92969 9.75482L2.42052 6.24565Z" fill="#6C6C6C"/>
</svg>`;

interface ArrowHallIconProps extends IconProps {
  opacity?: number;
}

const ArrowHallIcon: FC<ArrowHallIconProps> = ({
  opacity = 1,
}) => {
  return (
    <SvgFromXml
      xml={arrowHallIconSvg()}
      opacity={opacity}
    />
  );
};

export default ArrowHallIcon;