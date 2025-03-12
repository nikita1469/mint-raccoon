import React, { Fragment } from "react";
import { View, TouchableOpacity } from "react-native";
import { DayRoom } from "@/shared/ui/icons";
import { styles } from "./DayHall.styles";

const DayHall = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <DayRoom color="#FFFFFF" isActive={true} />
      </View>
    </Fragment>
  );
};

export default DayHall;
