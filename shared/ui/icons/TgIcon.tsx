import { FC } from "react";
import { IconProps } from "@/shared/model/types";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const TgIcon: FC<IconProps> = ({ size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_93_5094)">
        <Path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#039BE5"/>
        <Path d="M7.32168 15.6533L22.7484 9.7053C23.4644 9.44664 24.0897 9.87997 23.8577 10.9626L23.859 10.9613L21.2323 23.336C21.0377 24.2133 20.5164 24.4266 19.787 24.0133L15.787 21.0653L13.8577 22.924C13.6443 23.1373 13.4644 23.3173 13.051 23.3173L13.335 19.2466L20.7484 12.5493C21.071 12.2653 20.6763 12.1053 20.251 12.388L11.0897 18.156L7.14035 16.924C6.28302 16.652 6.26435 16.0666 7.32168 15.6533Z" fill="white"/>
      </G>
      <Defs>
        <ClipPath id="clip0_93_5094">
          <Rect width="32" height="32" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default TgIcon;
