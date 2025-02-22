import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const logoWidth = width * 0.45;
const logoHeight = logoWidth * (225 / 180);

export const styles = StyleSheet.create({
  logo: {
    width: logoWidth,
    height: logoHeight,
  },
  loginWrapper: {
    flex: 1,
    marginTop: 35,
    alignItems: "center",
  },
  headerText: {
    marginTop: 30,
  },
});
