import { BottomSheetProps } from "@/shared/ui/BottomSheet/BottomSheet.types";
import { Dispatch, SetStateAction } from "react";

export type DatePickerProps<T, S> = {
  showBottomSheet: boolean;
  setShowBottomSheet: ((value: S | null) => void) | Dispatch<SetStateAction<S | null>>;
  form: T;
  setForm: (form: T) => void;
  field: keyof T;
  isFullDate?: boolean;
};
