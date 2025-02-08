import { FC, Fragment, useState } from "react";
import { TouchableOpacity, View, TextInput } from "react-native";
import { Divider, Text } from "@/shared/ui";
import { PALETTE_COLORS } from "@/shared/const";
import { IProfileFieldProps } from "../../model/EditProfileScreeen.types";

import { styles } from "./ProfileField.styles";

const ProfileField: FC<IProfileFieldProps> = ({
  field,
  isLast,
  profileForm,
  isDisabled,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Fragment key={field.id}>
      <Divider color="textTransparent" />
      <View
        key={field.id}
        style={[styles.fieldWrapper, isDisabled && styles.disabledField]}
      >
        <Text color="textTransparent" style={styles.label}>
          {field.label}
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            value={profileForm[field.id as keyof typeof profileForm] ?? ""}
            style={styles.input}
            editable={!isDisabled}
            secureTextEntry={field.id === "password" && !showPassword}
            placeholderTextColor={PALETTE_COLORS.textTransparent}
          />
          {field.id === "password" && (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              {/* <EyeIcon color={PALETTE_COLORS.white} /> */}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isLast && <Divider color="textTransparent" />}
    </Fragment>
  );
};

export default ProfileField;
