import { FC } from "react";
import { Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <Layout>
      <Header isLogo />
    </Layout>
  );
};

export default HomeScreen;
