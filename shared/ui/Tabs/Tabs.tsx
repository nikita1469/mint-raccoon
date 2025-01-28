import React, { FC } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { TabsProps } from "./Tabs.types";
import { styles } from "./Tabs.styles";
import Text from "../Text/Text";

const Tabs: FC<TabsProps> = ({ data, activeTab, setActiveTab }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.tabsWrapper}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            activeTab === tab.id ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text font="delaGothicOne">{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Tabs;
