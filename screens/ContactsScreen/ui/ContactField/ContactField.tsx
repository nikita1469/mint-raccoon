import { FC, Fragment } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Divider, Text } from "@/shared/ui";
import { TgIcon, VkIcon } from "@/shared/ui/icons";
import { styles } from "./ContactField.styles";
import { CONTACTS_FORM_DATA } from "../../const";

interface IContactFieldProps {
  id: string;
  label: string;
  isLast: boolean;
}

type ContactFormDataType = {
  workingHours: {
    firstRow: string;
    secondRow: string;
  };
  address: string;
  phone: string;
  socials: {
    telegram: string;
    vk: string;
  };
};

const ContactField: FC<IContactFieldProps> = ({ id, label, isLast }) => {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <Fragment key={id}>
      <Divider color="textTransparent" />
      <View style={styles.fieldWrapper} key={id}>
        <Text color="textTransparent" style={{ width: "45%" }}>
          {label}
        </Text>
        {id === "socials" ? (
          <View style={styles.socialsContainer}>
            <TouchableOpacity onPress={() => handleOpenLink('')}>
              <TgIcon size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOpenLink('')}>
              <VkIcon size={28} />
            </TouchableOpacity>
          </View>
        ) : id === "workingHours" ? (
          <View style={styles.workingHoursContainer}>
            <Text>{CONTACTS_FORM_DATA.workingHours.firstRow}</Text>
            <Text>{CONTACTS_FORM_DATA.workingHours.secondRow}</Text>
          </View>
        ) : (
          <Text style={{ width: "55%" }}>
            {CONTACTS_FORM_DATA[id as keyof Omit<ContactFormDataType, 'socials' | 'workingHours'>]}
          </Text>
        )}
      </View>
      {isLast && <Divider color="textTransparent" />}
    </Fragment>
  );
};

export default ContactField;
