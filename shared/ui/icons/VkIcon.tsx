import { FC } from "react";
import { IconProps } from "@/shared/model/types";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const VkIcon: FC<IconProps> = ({ size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_93_5089)">
        <Path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#4169E1"/>
        <Path d="M25.2218 22.2618C24.7563 22.3273 22.48 22.2618 22.3618 22.2618C21.7734 22.2693 21.2057 22.0446 20.7818 21.6364C20.3018 21.1745 19.8727 20.6654 19.4036 20.1818C19.2649 20.035 19.1147 19.8994 18.9545 19.7764C18.58 19.4873 18.2091 19.5527 18.0327 19.9945C17.8949 20.472 17.7988 20.9605 17.7454 21.4545C17.7145 21.9018 17.4309 22.1818 16.9291 22.2127C16.6182 22.2291 16.3073 22.2345 16 22.2273C14.8802 22.2201 13.778 21.9478 12.7836 21.4327C11.7077 20.8332 10.7704 20.0136 10.0327 19.0273C8.81998 17.4782 7.85089 15.7764 6.98544 14.0218C6.93998 13.9345 6.05271 12.0473 6.03089 11.9582C5.95089 11.66 6.03089 11.3745 6.27635 11.2764C6.43271 11.2164 9.35635 11.2764 9.40544 11.2764C9.62279 11.2745 9.8351 11.3418 10.0116 11.4687C10.1881 11.5955 10.3197 11.7752 10.3873 11.9818C10.9277 13.3657 11.6677 14.663 12.5836 15.8327C12.7118 15.9891 12.8618 16.1263 13.0291 16.24C13.2673 16.4018 13.4927 16.3454 13.5909 16.0709C13.7072 15.69 13.7756 15.296 13.7945 14.8982C13.8109 14.1091 13.7945 13.5891 13.7509 12.8018C13.7218 12.2964 13.5436 11.8527 12.7982 11.7109C12.5691 11.6709 12.5491 11.4818 12.6963 11.2927C13.0036 10.9 13.4236 10.8382 13.8945 10.8145C14.5963 10.7745 15.2982 10.8018 16 10.8145H16.1527C16.4582 10.8134 16.7629 10.8445 17.0618 10.9073C17.2385 10.943 17.3989 11.0349 17.5192 11.1692C17.6394 11.3035 17.7131 11.4731 17.7291 11.6527C17.765 11.8518 17.7802 12.0541 17.7745 12.2564C17.7563 13.1182 17.7145 13.9782 17.7054 14.84C17.6971 15.1812 17.7282 15.5223 17.7982 15.8564C17.8982 16.3145 18.2127 16.4291 18.5254 16.0982C18.9304 15.6704 19.3018 15.2121 19.6363 14.7273C20.2279 13.8437 20.716 12.895 21.0909 11.9C21.2945 11.3891 21.4545 11.2764 22 11.2764H25.1018C25.2862 11.2731 25.4701 11.2976 25.6473 11.3491C25.71 11.3656 25.7686 11.3948 25.8195 11.435C25.8703 11.4752 25.9124 11.5254 25.9429 11.5826C25.9735 11.6398 25.9919 11.7027 25.997 11.7673C26.0021 11.8319 25.9939 11.8969 25.9727 11.9582C25.82 12.6382 25.4527 13.2182 25.0636 13.7764C24.4327 14.6709 23.7673 15.5418 23.1218 16.4218C23.0402 16.5385 22.9655 16.6599 22.8982 16.7854C22.6545 17.2236 22.6727 17.4691 23.0254 17.8345C23.5891 18.4127 24.1909 18.9564 24.7345 19.5527C25.1337 19.9863 25.4939 20.4541 25.8109 20.9509C26.2091 21.5673 25.9636 22.1564 25.2218 22.2618Z" fill="white"/>
      </G>
      <Defs>
        <ClipPath id="clip0_93_5089">
          <Rect width="32" height="32" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default VkIcon;
