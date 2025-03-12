import { FC } from "react";
import { SvgFromXml } from "react-native-svg";
import { IconProps } from "@/shared/model/types";

const nightRoomSvg = () => `<svg width="326" height="192" viewBox="0 0 305 181" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="304" height="180" rx="14.5" stroke="white"/>
  <path d="M75.4268 125H66V167H75.4268H140.57H149.998V157.572V125H140.57V157.572H75.4268V125Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M75.4277 125.001V157.572H107.999V125.001H75.4277Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M107.998 125V157.572H140.57V125H107.998Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M164.425 125H154.998V167H164.425H229.568H238.996V157.572V125H229.568V157.572H164.425V125Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M164.426 125.001V157.572H196.997V125.001H164.426Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M196.996 125V157.572H229.568V125H196.996Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.002 60.427L57.002 51L15.002 51L15.002 60.427L15.0019 125.572L15.0019 135L24.4303 135L57.0019 135L57.0019 125.572L24.4303 125.572L24.4303 60.427L57.002 60.427Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0013 60.4272L24.4297 60.4272L24.4297 92.9995L57.0013 92.9995L57.0013 60.4272Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0023 92.999L24.4307 92.999L24.4307 125.571L57.0023 125.571L57.0023 92.999Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M248 125.573L248 135L290 135L290 125.573L290 60.4285L290 51L280.572 51L248 51L248 60.4285L280.572 60.4285L280.572 125.573L248 125.573Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M248.001 125.573L280.572 125.573L280.572 93.0007L248.001 93.0007L248.001 125.573Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M248 93.0012L280.571 93.0012L280.571 60.429L248 60.429L248 93.0012Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="67.5" y="77.5" width="79" height="37" rx="5.5" fill="#0DA6A2" stroke="white"/>
  <rect x="158.5" y="77.5" width="79" height="37" rx="5.5" fill="#0DA6A2" stroke="white"/>
  <rect x="93.5" y="7.48511" width="119" height="13.9555" rx="2.5" stroke="white"/>
  </svg>`;

const NightRoom: FC<IconProps> = ({
  opacity = 1,
}) => {
  return (
    <SvgFromXml
      xml={nightRoomSvg()}
      preserveAspectRatio="xMidYMid meet"
      opacity={opacity}
    />
  );
};

export default NightRoom;
