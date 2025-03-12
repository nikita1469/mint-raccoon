export interface AlertModalProps {
  visible: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type: "deleteAccount" | "paymentProblem" | "passwordChanged";
}
