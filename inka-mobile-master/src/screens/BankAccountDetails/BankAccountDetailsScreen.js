/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React from "react";
import { View, FlatList, ScrollView } from "react-native";
// import LineChartView from "../../components/LineChartView/LineChartView";
import {
  lineChartData,
  lineChartConfig,
  lineChartTables,
} from "../../data/dataArrays";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import TransactionView from "../../components/TransactionView/TransactionView";

const BankAccountDetalisScreen = ({ route }) => {
  const renderItem = ({ item }) => <TransactionView item={item} />;

  const item = route.params?.item;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {/* <LineChartView
          lineChartData={lineChartData}
          lineChartConfig={lineChartConfig}
          lineChartTables={lineChartTables}
        /> */}
        <View style={styles.facilitieContainer}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={item.payments}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            listKey="0"
          />
        </View>
      </View>
    </View>
  );
};

export default BankAccountDetalisScreen;
