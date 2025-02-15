import { useState, useRef, useEffect, forwardRef } from "react";
import { KeyboardTypeOptions, TextInput, TouchableOpacity, View, Animated, Platform } from "react-native";
import Text from "../Text/Text";
// import EyeIcon from "./EyeIcon";
import { styles } from "./TextField.styles";
import { PALETTE_COLORS } from "@/shared/const";
import { TextFieldProps } from "./TextField.types";
import { FONTS } from "@/shared/const/FONTS";

const TextField = forwardRef<View, TextFieldProps>(
  (
    {
      value,
      label,
      editable = true,
      multiline = false,
      onChangeText,
      placeholder,
      maxLength,
      stateType = null,
      phone = false,
      helperText,
      search = false,
      startIcon,
      endIcon,
      keyboardType = "default",
      disabled = false,
      password = false,
      isNumeric = false,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const inputRef = useRef<TextInput>(null);
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: value ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [value, animatedValue]);

    const handleFocus = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
      onFocusProp?.();
    };

    const handleBlur = () => {
      if (!value) {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
      onBlurProp?.();
    };

    const labelStyle = {
      position: "absolute" as const,
      fontFamily: FONTS.semiBold,
      left: startIcon || search ? 40 : 16,
      top: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [14, Platform.OS === "android" ? 3 : 6],
      }),
      fontSize: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      color: PALETTE_COLORS.grey,
      zIndex: 2,
    };

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.textFieldWrapper, disabled && { opacity: 0.3 }]}
        onPress={() => inputRef.current?.focus()}
        activeOpacity={1}
      >
        <View style={[styles.textFieldContainer, multiline && styles.multiline]}>
          <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
          <TextInput
            ref={inputRef}
            style={[
              styles.textField,
              { height: multiline ? 100 : 48 },
              { paddingLeft: startIcon ? 8 : 0 },
            ]}
            value={value}
            maxLength={phone ? 18 : maxLength}
            editable={editable}
            placeholder=""
            placeholderTextColor={PALETTE_COLORS.lightGrey}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            multiline={multiline}
            keyboardType={phone || isNumeric ? "numeric" : keyboardType}
            textContentType={phone ? "telephoneNumber" : undefined}
            readOnly={disabled}
            secureTextEntry={password ? isPasswordVisible : false}
          />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            {/* {password && (
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <EyeIcon isCrossed={isPasswordVisible} />
              </TouchableOpacity>
            )} */}
          </View>
        </View>
        {helperText && <Text>{helperText}</Text>}
      </TouchableOpacity>
    );
  }
);

export default TextField;
