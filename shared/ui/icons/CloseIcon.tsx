import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { PALETTE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const CloseIcon: FC<IconProps> = ({ color = PALETTE_COLORS.white, size = 14 }) => (
  <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.47738 4.2561C5.13941 3.91463 4.59145 3.91463 4.25348 4.2561C3.91551 4.59757 3.91551 5.1512 4.25348 5.49267L11.8631 13.1811L4.61195 20.5073C4.27398 20.8488 4.27398 21.4024 4.61195 21.7439C4.94992 22.0854 5.49788 22.0854 5.83585 21.7439L13.087 14.4177L20.1642 21.5681C20.5021 21.9096 21.0501 21.9096 21.3881 21.5681C21.726 21.2266 21.726 20.673 21.3881 20.3315L14.3109 13.1811L21.7465 5.66849C22.0845 5.32702 22.0845 4.77338 21.7465 4.43191C21.4086 4.09045 20.8606 4.09044 20.5226 4.43191L13.087 11.9445L5.47738 4.2561Z"
      fill={color}
    />
  </Svg>
);

export default CloseIcon;
