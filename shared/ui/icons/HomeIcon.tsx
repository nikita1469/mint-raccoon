import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const HomeIcon: FC<IconProps> = ({ color = PALLETE_COLORS.dark.white }) => (
  <Svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    style={{ zIndex: 2 }}
  >
    <Path
      d="M18.4969 7.29557V4.50309C18.4969 4.08917 18.1617 3.75323 17.747 3.75323C17.3324 3.75323 16.9972 4.08917 16.9972 4.50309V6.27726L13.0957 3.6445C11.8217 2.78517 10.175 2.78517 8.90096 3.6445L3.65194 7.18684C2.61788 7.88496 2 9.04649 2 10.295V17.2507C2 19.3181 3.68193 21 5.7493 21H7.99888C8.41355 21 8.74873 20.6641 8.74873 20.2501V14.2513C8.74873 13.8381 9.08467 13.5014 9.49859 13.5014H12.498C12.912 13.5014 13.2479 13.8381 13.2479 14.2513V20.2501C13.2479 20.6641 13.5831 21 13.9978 21H16.2473C18.3147 21 19.9966 19.3181 19.9966 17.2507V10.295C19.9966 9.10948 19.4387 8.00194 18.4969 7.29557ZM18.4969 17.2507C18.4969 18.491 17.4876 19.5003 16.2473 19.5003H14.7476V14.2513C14.7476 13.011 13.7383 12.0017 12.498 12.0017H9.49859C8.25833 12.0017 7.24902 13.011 7.24902 14.2513V19.5003H5.7493C4.50903 19.5003 3.49972 18.491 3.49972 17.2507V10.295C3.49972 9.5459 3.87015 8.84853 4.49103 8.43011L9.74005 4.88777C10.5049 4.37187 11.4917 4.37187 12.2558 4.88777L17.5048 8.43011C18.1257 8.84853 18.4962 9.5459 18.4962 10.295L18.4969 17.2507Z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
