import {
  CodeField,
  useClearByFocusCell,
  useBlurOnFulfill,
  Cursor,
} from "react-native-confirmation-code-field";
import { View } from "react-native";
import { Text } from "@/shared/ui";
import { styles } from "./AuthCodeField.styles";
import { useState, useEffect } from "react";

interface AuthCodeFieldProps {
  form: any;
  handleChangeField: (field: any, value: string) => void;
  handleResendCode: () => void;
}

const AuthCodeField = ({ form, handleChangeField, handleResendCode }: AuthCodeFieldProps) => {
  const CELL_COUNT = 4;
  const [countdown, setCountdown] = useState(59);

  const ref = useBlurOnFulfill({
    value: form.code,
    cellCount: CELL_COUNT,
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: form.code,
    setValue: (text) => handleChangeField("code", text),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePressResendCode = () => {
    handleResendCode();
    setCountdown(59);
  };

  return (
    <View style={styles.codeFieldWrapper}>
      <Text align="center">Код подтверждения отправлен на номер {form.phone}</Text>
      <CodeField
        rootStyle={styles.codeField}
        ref={ref}
        {...props}
        value={form.code}
        onChangeText={(text) => handleChangeField("code", text)}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text size="large">{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />
      {countdown > 0 ? (
        <Text align="center" style={styles.resendCodeText}>
          Отправить повторно через: 00:{String(countdown).padStart(2, "0")}
        </Text>
      ) : (
        <Text onPress={handlePressResendCode} align="center" underline>
          Отправить код еще раз
        </Text>
      )}
    </View>
  );
};

export default AuthCodeField;
