import { FC } from "react";
import { Layout } from "@/shared/ui";
import { Header } from "@/widgets";

interface RegistrationScreenProps {}

const RegistrationScreen: FC<RegistrationScreenProps> = () => {
  return (
    <Layout>
      <Header title="Регистрация" />
    </Layout>
  );
};

export default RegistrationScreen;
