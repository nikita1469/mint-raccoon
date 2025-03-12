import { FC } from "react";
import { SvgFromXml } from "react-native-svg";
import { IconProps } from "@/shared/model/types";

const dayRoomSvgActive = () => `<svg width="366" height="239" viewBox="0 0 305 225" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="304" height="224" rx="14.5" stroke="white"/>
  <path d="M229.575 54.002L239.002 54.002L239.002 12.002L229.575 12.002L164.43 12.0019L155.002 12.0019L155.002 21.4303L155.002 54.0019L164.43 54.0019L164.43 21.4303L229.575 21.4303L229.575 54.002Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M229.574 54.0013L229.574 21.4297L197.002 21.4297L197.002 54.0013L229.574 54.0013Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M197.003 54.0018L197.003 21.4302L164.431 21.4302L164.431 54.0018L197.003 54.0018Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140.575 54.002L150.002 54.002L150.002 12.002L140.575 12.002L75.4304 12.0019L66.002 12.0019L66.002 21.4303L66.002 54.0019L75.4304 54.0019L75.4304 21.4303L140.575 21.4303L140.575 54.002Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140.574 54.0013L140.574 21.4297L108.002 21.4297L108.002 54.0013L140.574 54.0013Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M108.003 54.0018L108.003 21.4302L75.4307 21.4302L75.4307 54.0018L108.003 54.0018Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0029 41.4268L57.0029 32L15.0029 32L15.0029 41.4268L15.0029 106.57L15.0029 115.998L24.4313 115.998L57.0029 115.998L57.0029 106.57L24.4313 106.57L24.4313 41.4268L57.0029 41.4268Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0023 41.427L24.4307 41.427L24.4307 73.9987L57.0023 73.9987L57.0023 41.427Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0033 73.998L24.4316 73.998L24.4316 106.57L57.0033 106.57L57.0033 73.998Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.002 130.425L57.002 120.999L15.002 120.999L15.002 130.425L15.0019 195.569L15.0019 204.997L24.4303 204.997L57.0019 204.997L57.0019 195.569L24.4303 195.569L24.4303 130.425L57.002 130.425Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0013 130.426L24.4297 130.426L24.4297 162.997L57.0013 162.997L57.0013 130.426Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0023 162.997L24.4307 162.997L24.4307 195.568L57.0023 195.568L57.0023 162.997Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247 111.576L247 121.002L289 121.002L289 111.576L289 46.4323L289 37.004L279.572 37.004L247 37.004L247 46.4323L279.572 46.4323L279.572 111.576L247 111.576Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247.001 111.575L279.572 111.575L279.572 79.0038L247.001 79.0038L247.001 111.575Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247 79.0044L279.571 79.0044L279.571 46.4327L247 46.4327L247 79.0044Z" fill="#0DA6A2" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="67.5" y="64.5" width="79" height="37" rx="5.5" fill="#0DA6A2" stroke="white"/>
  <rect x="104.5" y="111.5" width="74" height="37" rx="5.5" transform="rotate(90 104.5 111.5)" fill="#0DA6A2" stroke="white"/>
  <rect x="157.5" y="64.5" width="79" height="37" rx="5.5" fill="#0DA6A2" stroke="white"/>
  <rect x="93.5" y="205.5" width="119" height="14" rx="2.5" stroke="white"/>
  </svg>`;

const dayRoomSvgDisactive = () => `<svg width="305" height="225" viewBox="0 0 305 225" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3">
  <rect x="0.5" y="0.5" width="304" height="224" rx="14.5" stroke="white"/>
  <path d="M229.575 54.002L239.002 54.002L239.002 12.002L229.575 12.002L164.43 12.0019L155.002 12.0019L155.002 21.4303L155.002 54.0019L164.43 54.0019L164.43 21.4303L229.575 21.4303L229.575 54.002Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M229.574 54.0013L229.574 21.4297L197.002 21.4297L197.002 54.0013L229.574 54.0013Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M197.003 54.0018L197.003 21.4302L164.431 21.4302L164.431 54.0018L197.003 54.0018Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140.575 54.002L150.002 54.002L150.002 12.002L140.575 12.002L75.4304 12.0019L66.002 12.0019L66.002 21.4303L66.002 54.0019L75.4304 54.0019L75.4304 21.4303L140.575 21.4303L140.575 54.002Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M140.574 54.0013L140.574 21.4297L108.002 21.4297L108.002 54.0013L140.574 54.0013Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M108.003 54.0018L108.003 21.4302L75.4307 21.4302L75.4307 54.0018L108.003 54.0018Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0029 41.4268L57.0029 32L15.0029 32L15.0029 41.4268L15.0029 106.57L15.0029 115.998L24.4313 115.998L57.0029 115.998L57.0029 106.57L24.4313 106.57L24.4313 41.4268L57.0029 41.4268Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0023 41.427L24.4307 41.427L24.4307 73.9987L57.0023 73.9987L57.0023 41.427Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0033 73.998L24.4316 73.998L24.4316 106.57L57.0033 106.57L57.0033 73.998Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.002 130.425L57.002 120.999L15.002 120.999L15.002 130.425L15.0019 195.569L15.0019 204.997L24.4303 204.997L57.0019 204.997L57.0019 195.569L24.4303 195.569L24.4303 130.425L57.002 130.425Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0013 130.426L24.4297 130.426L24.4297 162.997L57.0013 162.997L57.0013 130.426Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M57.0023 162.997L24.4307 162.997L24.4307 195.568L57.0023 195.568L57.0023 162.997Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247 111.576L247 121.002L289 121.002L289 111.576L289 46.4323L289 37.004L279.572 37.004L247 37.004L247 46.4323L279.572 46.4323L279.572 111.576L247 111.576Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247.001 111.575L279.572 111.575L279.572 79.0038L247.001 79.0038L247.001 111.575Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M247 79.0044L279.571 79.0044L279.571 46.4327L247 46.4327L247 79.0044Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="67.5" y="64.5" width="79" height="37" rx="5.5" stroke="white"/>
  <rect x="104.5" y="105.5" width="79" height="37" rx="5.5" transform="rotate(90 104.5 105.5)" stroke="white"/>
  <rect x="157.5" y="64.5" width="79" height="37" rx="5.5" stroke="white"/>
  <rect x="93.5" y="205.5" width="119" height="14" rx="2.5" stroke="white"/>
  </g>
  </svg>`;

interface DayRoomProps extends IconProps {
  isActive?: boolean;
}

const DayRoom: FC<DayRoomProps> = ({
  opacity = 1,
  isActive = false,
}) => {
  return (
    <SvgFromXml
      xml={isActive ? dayRoomSvgActive() : dayRoomSvgDisactive()}
      opacity={opacity}
    />
  );
};

export default DayRoom;
