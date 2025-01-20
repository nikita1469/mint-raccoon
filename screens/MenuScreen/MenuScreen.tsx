import { FC } from "react";
import { Layout } from "@/shared/ui";
import { Header } from "@/widgets";

interface MenuScreenProps {}

const MenuScreen: FC<MenuScreenProps> = () => {
  return (
    <Layout>
      <Header title="Меню" />
    </Layout>
  );
};

export default MenuScreen;
