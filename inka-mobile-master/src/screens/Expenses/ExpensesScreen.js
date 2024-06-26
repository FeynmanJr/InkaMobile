import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { PieChart } from "react-native-chart-kit";
import { FlatList } from "react-native-gesture-handler";
import {
  spendingArray,
  expensesData,
  chartConfig,
  payments,
} from "../../data/dataArrays";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const ExpensesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("Transactions", {
          item: item,
          payments: payments,
          backScreen: "Expenses",
        })
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.itemIcon} source={{ uri: item.icon }} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemText}>{item.money}</Text>
          </View>
        </View>
        <Image
          style={styles.rightArrow}
          source={require("../../../assets/icons/rightArrow.png")}
        />
      </View>
    </TouchableOpacity>
  );

  const onPressViewCategories = () => {
    navigation.navigate("AllSpendingCategories", { spendingArray });
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          data={expensesData}
          width={SCREEN_WIDTH}
          height={220}
          chartConfig={chartConfig}
          accessor="money"
          backgroundColor="transparent"
        />
      </View>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>Top Spending Categories</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={spendingArray.slice(0, 4)}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPressViewCategories}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all categories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExpensesScreen;
