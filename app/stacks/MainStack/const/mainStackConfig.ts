import { PALETTE_COLORS } from "@/shared/const";

const mainStackConfig = {
  headerShown: false,
  gestureEnabled: false,
  tabBarStyle: {
    backgroundColor: PALETTE_COLORS.primary,
    position: "absolute" as const,
    bottom: 20,
    height: 54,
    marginHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 27,
    borderTopWidth: 0,
    gap: 4,
    paddingHorizontal: 28,
    shadowColor: "#000000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  tabBarItemStyle: {
    top: 4,
    height: 46,
    borderRadius: 23,
  },
  sceneStyle: {
    backgroundColor: "transparent",
  },
  lazy: false,
};

export default mainStackConfig;
