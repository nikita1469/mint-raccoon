import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

export type BottomSheetProps<T> = {
  showBottomSheet: boolean;
  setShowBottomSheet: ((value: T | null) => void) | Dispatch<SetStateAction<T | null>>;
  snapPoints: string[];
  children: ReactNode;
  onAnimate?: (opacity: number, index: number) => void;
  backgroundColor?: string;
};
