import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

export interface BottomSheetProps<T> {
  showBottomSheet: boolean;
  setShowBottomSheet: Dispatch<SetStateAction<T | null>>;
  snapPoints: string[];
  backgroundColor?: string;
  children: ReactNode;
  onAnimate?: (fromIndex: number, toIndex: number) => void;
}
