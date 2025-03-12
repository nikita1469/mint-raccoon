import { PALETTE_COLORS } from "@/shared/const";
import { FONTS } from "@/shared/const/FONTS";
import { StyleSheet } from "react-native";

export const sizeStyles = StyleSheet.create({
  tabText: {
    fontSize: 10,
    lineHeight: 12,
  },
  small: {
    fontSize: 12,
  },
  base: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
  },
  header: {
    fontSize: 24,
    lineHeight: 32,
  },
});

export const colorStyles = StyleSheet.create({
  white: {
    color: PALETTE_COLORS.white,
  },
  grey: {
    color: PALETTE_COLORS.grey,
  },
  secondary: {
    color: PALETTE_COLORS.secondary,
  },
  textPrimary: {
    color: PALETTE_COLORS.textPrimary,
  },
  textTransparent: {
    color: PALETTE_COLORS.textTransparent,
  },
  alternate: {
    color: PALETTE_COLORS.alternate,
  },
});

export const fontStyles = StyleSheet.create({
  delaGothicOne: {
    fontFamily: FONTS.delaGothicOne,
  },
  regular: {
    fontFamily: FONTS.regular,
  },
  extraLight: {
    fontFamily: FONTS.extraLight,
  },
  bold: {
    fontFamily: FONTS.bold,
  },
  semiBold: {
    fontFamily: FONTS.semiBold,
  },
});
