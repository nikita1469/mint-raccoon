import { FC } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Text from "../Text/Text";
import { createStyles, sizeStyles } from "./Tabs.styles";
import { PALLETE_COLORS } from "@/shared/const";
type TabSize = "small" | "medium";

interface TabsProps {
  onPress: (id: any) => void;
  tabsList: { id: string; text?: string; color?: string; border?: boolean }[];
  currentValue: string;
  size?: TabSize;
  defaultTabColor?: "accentGrey" | "background";
}

const Tabs: FC<TabsProps> = ({
  onPress,
  tabsList,
  currentValue,
  size = "medium",
  defaultTabColor = "accentGrey",
}) => {
  const styles = createStyles(PALLETE_COLORS.dark);

  return (
    <ScrollView
      style={{ maxHeight: size === "medium" ? 52 : 43 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <View style={[styles.tabsWrapper, sizeStyles[size as TabSize]]}>
        {tabsList.map(
          ({ id, text, color = themeColors.lightGreen, border }) => {
            return (
              <Pressable
                key={id}
                style={[
                  styles.tabButton,
                  {
                    backgroundColor:
                      id === currentValue
                        ? color
                        : themeColors[defaultTabColor],
                  },
                  border && { borderWidth: 1, borderColor: color },
                  sizeStyles[size as TabSize],
                ]}
                onPress={() => onPress(id)}
              >
                <Text
                  color={
                    id === currentValue
                      ? themeColors.white
                      : themeColors.textSecondary
                  }
                >
                  {text}
                </Text>
              </Pressable>
            );
          }
        )}
      </View>
    </ScrollView>
  );
};

export default Tabs;
