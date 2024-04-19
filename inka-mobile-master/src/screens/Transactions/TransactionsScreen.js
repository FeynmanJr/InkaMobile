import React from "react";
import { View, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import TransactionView from "../../components/TransactionView/TransactionView";

const StockScreen = ({ route }) => {
  const payments = route.params?.payments;

  const renderItem = ({ item }) => <TransactionView item={item} />;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={payments}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
      </View>
    </View>
  );
};

export default StockScreen;
