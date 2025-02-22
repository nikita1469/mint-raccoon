import { Dispatch, SetStateAction } from "react";
import { BottomSheetProps } from "@/shared/ui/BottomSheet/BottomSheet.types";

export type GenderSheetProps<T extends { [K in keyof T]: T[K] }, S> = Omit<
  BottomSheetProps<S>,
  "snapPoints" | "children"
> & {
  form: T;
  setForm: Dispatch<SetStateAction<T>>;
  snapPoints?: string[];
};
