import { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const ARROW_DIRECTION = {
  down: {
    width: 13,
    height: 14,
    d: "M2.24408 6.23703C2.56951 5.92099 3.09715 5.92099 3.42259 6.23703L7 9.71108L10.5774 6.23703C10.9028 5.92099 11.4305 5.92099 11.7559 6.23703C12.0814 6.55306 12.0814 7.06545 11.7559 7.38149L7 12L2.24408 7.38149C1.91864 7.06545 1.91864 6.55306 2.24408 6.23703Z",
  },
  right: {
    width: 8,
    height: 14,
    d: "M7.80285 7.47953C8.06572 7.21394 8.06572 6.78334 7.80285 6.51775C7.75336 6.46775 7.69808 6.42716 7.63919 6.39598L1.77666 0.472756C1.5138 0.207169 1.08761 0.207169 0.824744 0.472756C0.561878 0.738344 0.561878 1.16895 0.824744 1.43453L6.3534 7.02043L0.594366 12.8391C0.3315 13.1047 0.3315 13.5353 0.594366 13.8009C0.857231 14.0665 1.28342 14.0665 1.54629 13.8009L7.80285 7.47953Z",
  },
};

const ArrowIcon: FC<
  IconProps & { direction?: keyof typeof ARROW_DIRECTION }
> = ({ color = PALLETE_COLORS.dark.white, direction = "down" }) => (
  <Svg
    width={ARROW_DIRECTION[direction].width}
    height={ARROW_DIRECTION[direction].height}
    viewBox={`0 0 ${ARROW_DIRECTION[direction].width} ${ARROW_DIRECTION[direction].height}`}
    fill="none"
    // style={{ transform: [{ rotate: direction === "down" ? "0deg" : "90deg" }] }}
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={ARROW_DIRECTION[direction].d}
      fill={color}
    />
    <Circle cx="24" cy="7" r="5" fill="#0ABAB5" />
  </Svg>
);

export default ArrowIcon;
