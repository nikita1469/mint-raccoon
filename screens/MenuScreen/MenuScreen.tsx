import { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Layout, Tabs } from "@/shared/ui";
import { Header } from "@/widgets";
import { styles } from "./MenuScreen.styles";
import { MenuItemsList } from "@/features";
import { SortIcon } from "@/shared/ui/icons";

const MENU_TABS = [
  { id: "favorite", title: "ИЗБРАННОЕ" },
  { id: "ordered", title: "ВЫ УЖЕ ЗАКАЗЫВАЛИ" },
];

const MENU_ITEMS = [
  {
    id: "1",
    name: "Най Сян Цзинь Сюань (Молочный улун) Премиум",
    price: 950,
    weight: "850 мл",
    available: true,
  },
  {
    id: "2",
    name: "Кальян на фрукте Грейпфрут",
    price: 2400,
    weight: "",
    available: true,
  },
  {
    id: "3",
    name: "Котлеты из индейки с йогуртовым соусом",
    price: 850,
    weight: "120/30 г",
    available: true,
  },
  {
    id: "4",
    name: "Карбонара",
    price: 750,
    weight: "280 г",
    available: true,
  },
];

interface MenuScreenProps {}

const MenuScreen: FC<MenuScreenProps> = () => {
  const [activeTab, setActiveTab] = useState(MENU_TABS[0].id);
  const [cartItems, setCartItems] = useState<{ id: string; count: number }[]>(
    []
  );

  return (
    <Layout>
      <Header title="Меню" />
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
