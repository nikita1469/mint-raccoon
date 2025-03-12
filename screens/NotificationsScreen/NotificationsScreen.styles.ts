import { StyleSheet } from "react-native";
import { PALETTE_COLORS } from "@/shared/const";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  notificationsList: {
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: PALETTE_COLORS.background,
  },
  notificationItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    shadowOpacity: 1,
    backgroundColor: PALETTE_COLORS.transparent,
    shadowRadius: 17,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 5,
  },
  unreadNotification: {
    borderColor: PALETTE_COLORS.textPrimary,
    borderWidth: 1,
  },
  readNotification: {
    borderWidth: 1,
    borderColor: PALETTE_COLORS.lightGrey,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  notificationIcon: {
    marginRight: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationMessage: {
    flex: 1,
    fontSize: 14,
    color: PALETTE_COLORS.lightGrey,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
