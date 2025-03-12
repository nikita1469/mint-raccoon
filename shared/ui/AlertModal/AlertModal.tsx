import React from "react";
import Button from "../Button/Button";

import { View, Modal, Text } from "react-native";
import { ExclamationMarkIcon, DoneIcon, RemoveIcon } from "../icons";
import { styles } from "./AlertModal.styles";
import { AlertModalProps } from "./AlertModal.types";

const titleMap = {
  deleteAccount: "Вы действительно хотите удалить аккаунт?",
  paymentProblem: "Возникла проблема с вашей оплатой",
  passwordChanged: "Пароль успешно изменен!",
}

const iconsMap = {
  deleteAccount: <ExclamationMarkIcon size={48} />,
  paymentProblem: <RemoveIcon size={48} />,
  passwordChanged: <DoneIcon size={48} />,
}

const messagesMap = {
  deleteAccount: "",
  paymentProblem: "Пожалуйста, проверьте данные карты или попробуйте другой способ оплаты.",
  passwordChanged: "",
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  confirmText = "Да",
  cancelText = "Нет",
  onConfirm,
  onCancel,
  type,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {iconsMap[type]}
          
          <Text style={styles.modalTitle}>
            {titleMap[type]}
          </Text>

          <Text>
            {messagesMap[type]}
          </Text>

          <View style={styles.modalButtons}>
            <Button size="small" onPress={onConfirm} variant="transparent">
              {confirmText}
            </Button>
            <Button size="small" onPress={onCancel} variant="secondary">
              {cancelText}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
