import { MenuItem } from "@/entities/menu/ui";
import { FC, memo, useCallback } from "react";
import { FlatList } from "react-native";
import { styles } from "./MenuItemsList.styles";

interface MenuItemsListProps {
  data: any;
  cartItems: { id: string; count: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ id: string; count: number }[]>>;
}

const MenuItemsList: FC<MenuItemsListProps> = ({ data, cartItems, setCartItems }) => {
  const renderMenuItem = useCallback(
    ({ item }: { item: (typeof data)[0] }) => (
      <MenuItem item={item} cartItems={cartItems} setCartItems={setCartItems} />
    ),
    [cartItems, setCartItems]
  );

  return (
    <FlatList
      data={data}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.menuList}
      numColumns={2}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
};

export default memo(MenuItemsList);
