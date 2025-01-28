import { ActivityIndicator, View } from "react-native";
import { styles } from "./Loader.styles";

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator color="white" />
    </View>
  );
};

export default Loader;
