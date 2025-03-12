import { FC } from "react";
import { SvgFromXml } from "react-native-svg";
import { IconProps } from "@/shared/model/types";

const exclamationMarkIconSvg = () => `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_75_5023)">
  <rect width="60" height="60" rx="30" fill="#DC621D"/>
  <path d="M29.7106 38.6747C27.2984 38.6747 25.3359 40.6372 25.3359 43.0494C25.5558 48.8449 33.8662 48.8434 34.0852 43.0493C34.0852 40.6372 32.1227 38.6747 29.7106 38.6747Z" fill="white"/>
  <path d="M34.0834 14.0202C31.9125 11.3273 27.5104 11.326 25.3387 14.0203C24.2512 15.315 23.7946 17.0124 24.0861 18.6773C24.9553 23.6434 26.1819 30.6524 26.7324 33.8002C27.3492 37.1136 32.0731 37.1125 32.6891 33.8003L35.336 18.6773C35.6275 17.0125 35.1709 15.315 34.0834 14.0202Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_75_5023">
  <rect width="60" height="60" fill="white"/>
  </clipPath>
  </defs>
  </svg>
`;

const ExclamationMarkIcon: FC<IconProps> = ({
  size = 24,
  opacity = 1,
}) => {
  return (
    <SvgFromXml
      xml={exclamationMarkIconSvg()}
      width={size}
      height={size}
      opacity={opacity}
    />
  );
};

export default ExclamationMarkIcon; 