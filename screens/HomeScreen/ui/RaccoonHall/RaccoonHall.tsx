import { Fragment } from "react";
import { View } from "react-native";
import { RaccoonRoom } from "@/shared/ui/icons";
import { styles } from "./RaccoonHall.styles";

const RaccoonHall = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <RaccoonRoom />
      </View>
    </Fragment>
  );
};

export default RaccoonHall;
