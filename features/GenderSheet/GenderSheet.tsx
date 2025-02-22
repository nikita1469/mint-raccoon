import { useState } from "react";
import { StyleProp, TextStyle, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { BottomSheet, Button } from "@/shared/ui";
import { GenderSheetProps } from "./GenderSheet.types";
import { styles } from "./GenderSheet.styles";
import { PALETTE_COLORS } from "@/shared/const";
const GenderSheet = <T extends { [K in keyof T]: T[K] }, S = string>(props: GenderSheetProps<T, S>) => {
  const [gender, setGender] = useState<string>("male");

  const handleApply = () => {
    props.setForm({ ...props.form, gender });
    props.setShowBottomSheet(null);
  };

  return (
    <BottomSheet {...props} backgroundColor={PALETTE_COLORS.background} snapPoints={["35%"]}>
      <View style={styles.pickerWrapper}>
        <View style={styles.pickerGenderContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.pickerGenderContainer as StyleProp<TextStyle>}
            itemStyle={styles.pickerText as StyleProp<TextStyle>}
          >
            <Picker.Item label="Мужской" value="male" />
            <Picker.Item label="Женский" value="female" />
          </Picker>
        </View>
        <Button onPress={handleApply} style={styles.button}>
          Применить
        </Button>
      </View>
    </BottomSheet>
  );
};

export default GenderSheet;
