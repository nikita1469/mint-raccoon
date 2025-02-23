import { StyleSheet, View } from "react-native";
import { PALETTE_COLORS } from "@/shared/const";
import { Text } from "@/shared/ui";

const Tab = ({
  focused,
  label,
  xOffset,
}: {
  focused: boolean;
  label: string;
  xOffset: number;
}) => {
  return (
    <View style={styles.tabWrapper}>
      {focused && <View style={[styles.tab, { left: xOffset }]}></View>}
      <Text size="tabText" color="white" font="bold">
        {label}
      </Text>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabWrapper: {
    position: "relative",
  },
  tab: {
    position: "absolute",
    top: -33,
    backgroundColor: PALETTE_COLORS.secondary,
    width: 80,
    height: 46,
    borderRadius: 23,
  },
});
