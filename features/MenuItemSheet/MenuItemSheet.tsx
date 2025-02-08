import { PALETTE_COLORS } from "@/shared/const";
import { BottomSheet, Button, Text } from "@/shared/ui";
import { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./MenuItemSheet.styles";
import { CartIcon, DishIcon, LikeIcon, TimeIcon } from "@/shared/ui/icons";

const MenuItemSheet = () => {
  const snapPoints = useMemo(() => ["90%"], []);
  const [showBottomSheet, setShowBottomSheet] = useState<string | null>(
    "MenuItemSheet"
  );

  return (
    <BottomSheet
      showBottomSheet={showBottomSheet === "MenuItemSheet"}
      setShowBottomSheet={setShowBottomSheet}
      snapPoints={snapPoints}
    >
      <View style={styles.menuItemWrapper}>
        <View style={styles.itemImageContainer}>
          <TouchableOpacity style={styles.likeButton} activeOpacity={0.8}>
            <LikeIcon />
          </TouchableOpacity>
          <DishIcon size={120} />
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={styles.descriptionContainer}>
            <Text font="delaGothicOne" size="title" color="white">
              Най Сян Цзинь Сюань (Молочный улун) Премиум
            </Text>
            <Text size="base" color="white">
              Премиальный китайский улун, изысканного вкуса с нотами молочного
              крема и легкой сладости. Этот чай характеризуется сладковатым
              ароматом, нежным вкусом и гладким послевкусием, что делает его
              изысканным угощением для ценителей чайной культуры.
            </Text>
            <View style={styles.infoRow}>
              <Text size="title" font="semiBold" color="white">
                950 ₽
              </Text>
              <View style={styles.iconText}>
                <TimeIcon />
                <Text size="large" color="textTransparent">
                  20 мин
                </Text>
              </View>
              <Text size="large" color="textTransparent">
                850 мл
              </Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Button size="large" variant="secondary" onPress={() => {}}>
              Добавить в корзину
            </Button>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
              <CartIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default MenuItemSheet;
