import { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Layout, Tabs } from "@/shared/ui";
import { Header } from "@/widgets";
import { styles } from "./MenuScreen.styles";
import { MenuItemsList } from "@/features";
import { SortIcon } from "@/shared/ui/icons";
import MENU_TABS from "./const/MENU_TABS";
import { MENU_ITEMS } from "./const";

interface MenuScreenProps {}

const MenuScreen: FC<MenuScreenProps> = () => {
  const [activeTab, setActiveTab] = useState(MENU_TABS[0].id);
  const [cartItems, setCartItems] = useState<{ id: string; count: number }[]>(
    []
  );

  return (
    <Layout>
      <Header title="Меню" isBellButton isBurgerButton />
      <View style={styles.filtersWrapper}>
        <TouchableOpacity style={styles.sortButton}>
          <SortIcon />
        </TouchableOpacity>
        <Tabs
          data={MENU_TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <MenuItemsList
        data={MENU_ITEMS}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </Layout>
  );
};

export default MenuScreen;
