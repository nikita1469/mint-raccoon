import React, { Fragment } from "react";
import { View } from "react-native";
import { NightRoom } from "@/shared/ui/icons";
import { styles } from "./NightHall.styles";

const NightHall = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <NightRoom />
      </View>
    </Fragment>
  );
};

export default NightHall;
