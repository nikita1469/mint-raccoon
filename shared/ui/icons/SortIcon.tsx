import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { PALLETE_COLORS } from "@/shared/const";
import { IconProps } from "@/shared/model/types";

const SortIcon: FC<IconProps> = ({ color = PALLETE_COLORS.white }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M6.21981 16.7197L5.25006 17.6895V4.46625C5.25006 4.26734 5.17104 4.07657 5.03039 3.93592C4.88974 3.79527 4.69897 3.71625 4.50006 3.71625C4.30115 3.71625 4.11038 3.79527 3.96973 3.93592C3.82908 4.07657 3.75006 4.26734 3.75006 4.46625V17.6895L2.78031 16.7197C2.63886 16.5831 2.44941 16.5075 2.25276 16.5092C2.05611 16.511 1.868 16.5898 1.72895 16.7289C1.58989 16.8679 1.51101 17.056 1.50931 17.2527C1.5076 17.4493 1.58319 17.6388 1.71981 17.7802L3.96981 20.0302C4.11046 20.1709 4.30119 20.2498 4.50006 20.2498C4.69893 20.2498 4.88967 20.1709 5.03031 20.0302L7.28031 17.7802C7.41693 17.6388 7.49253 17.4493 7.49082 17.2527C7.48911 17.056 7.41023 16.8679 7.27118 16.7289C7.13212 16.5898 6.94401 16.511 6.74736 16.5092C6.55071 16.5075 6.36126 16.5831 6.21981 16.7197Z"
      fill={color}
    />
    <Path
      d="M10.5 15H19.5C19.6989 15 19.8897 14.921 20.0303 14.7803C20.171 14.6397 20.25 14.4489 20.25 14.25C20.25 14.0511 20.171 13.8603 20.0303 13.7197C19.8897 13.579 19.6989 13.5 19.5 13.5H10.5C10.3011 13.5 10.1103 13.579 9.96967 13.7197C9.82902 13.8603 9.75 14.0511 9.75 14.25C9.75 14.4489 9.82902 14.6397 9.96967 14.7803C10.1103 14.921 10.3011 15 10.5 15Z"
      fill={color}
    />
    <Path
      d="M21.75 18H10.5C10.3011 18 10.1103 18.079 9.96967 18.2197C9.82902 18.3603 9.75 18.5511 9.75 18.75C9.75 18.9489 9.82902 19.1397 9.96967 19.2803C10.1103 19.421 10.3011 19.5 10.5 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75C22.5 18.5511 22.421 18.3603 22.2803 18.2197C22.1397 18.079 21.9489 18 21.75 18Z"
      fill={color}
    />
    <Path
      d="M10.5 10.5H17.25C17.4489 10.5 17.6397 10.421 17.7803 10.2803C17.921 10.1397 18 9.94891 18 9.75C18 9.55109 17.921 9.36032 17.7803 9.21967C17.6397 9.07902 17.4489 9 17.25 9H10.5C10.3011 9 10.1103 9.07902 9.96967 9.21967C9.82902 9.36032 9.75 9.55109 9.75 9.75C9.75 9.94891 9.82902 10.1397 9.96967 10.2803C10.1103 10.421 10.3011 10.5 10.5 10.5Z"
      fill={color}
    />
    <Path
      d="M10.5 6H14.25C14.4489 6 14.6397 5.92098 14.7803 5.78033C14.921 5.63968 15 5.44891 15 5.25C15 5.05109 14.921 4.86032 14.7803 4.71967C14.6397 4.57902 14.4489 4.5 14.25 4.5H10.5C10.3011 4.5 10.1103 4.57902 9.96967 4.71967C9.82902 4.86032 9.75 5.05109 9.75 5.25C9.75 5.44891 9.82902 5.63968 9.96967 5.78033C10.1103 5.92098 10.3011 6 10.5 6Z"
      fill={color}
    />
  </Svg>
);

export default SortIcon;
