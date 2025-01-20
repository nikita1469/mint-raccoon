import { FC } from "react";
import { Layout, Text } from "@/shared/ui";
import { Header } from "@/widgets";

interface ProfileScreenProps {}

const ProfileScreen: FC<ProfileScreenProps> = () => {
  return (
    <Layout>
      <Header title="Профиль" />
    </Layout>
  );
};

export default ProfileScreen;
