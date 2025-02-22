import { BottomSheetProps } from "@/shared/ui/BottomSheet/BottomSheet.types";
import { Dispatch, SetStateAction } from "react";

export type DatePickerProps<T extends { [K in keyof T]: T[K] }, S> = Omit<
  BottomSheetProps<S>,
  "snapPoints" | "children"
> & {
  form: T;
  setForm: Dispatch<SetStateAction<T>>;
  field: keyof T & string;
  snapPoints?: string[];
  isFullDate?: boolean;
};
