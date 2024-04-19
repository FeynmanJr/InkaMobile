import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { payments } from "../../data/dataArrays";
import BackButton from "../../components/BackButton/BackButton";
import styles from "./styles";

const ExpensesScreen = ({ route, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("Transactions", {
          item: item,
          payments: payments,
          backScren: "Expenses",
        })
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.itemIcon} source={{ uri: item.icon }} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemmText}>{item.money}</Text>
          </View>
        </View>
        <Image
          style={styles.rightArrow}
          source={require("../../../assets/icons/rightArrow.png")}
        />
      </View>
    </TouchableHighlight>
  );

  const spendingArray = route.params?.spendingArray;

  return (
    <View style={styles.container}>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>All Spending Categories</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={spendingArray}
          renderItem={renderItem}
          extraData={spendingArray}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
      </View>
    </View>
  );
};

export default ExpensesScreen;
