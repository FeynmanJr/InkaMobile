/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import styles from "./styles";
// import LineChartView from "../../components/LineChartView/LineChartView";
// import {
//   lineChartData,
//   lineChartConfig,
//   lineChartTables,
// } from "../../data/dataArrays";
import BackButton from "../../components/BackButton/BackButton";
import CardView from "../../components/CardView/CardView";
import { connect } from "react-redux";

const AllAssetsScreen = ({
  navigation,
  route,
  stocks,
  crypto,
  changeWatchListStock,
  changeWatchListCrypto,
}) => {
  const [activeChart, setActiveChart] = useState(0);

  const onPressBinocular = () => {
    const title = route.params?.title;
    navigation.navigate("AssetsWatchListScreen", {
      type: title,
      array: title === "Stocks" ? stocks : crypto,
    });
  };

  const renderItem = ({ item }) => (
    <CardView
      onPress={() =>
        navigation.navigate("AssetScreen", {
          item,
          type: route.params?.title,
          changeWatchList:
            route.params?.title === "Stocks"
              ? changeWatchListStock
              : changeWatchListCrypto,
        })
      }
      item={item}
    />
  );

  const array = route.params?.array;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {/* <LineChartView
            lineChartData={lineChartData}
            lineChartConfig={lineChartConfig}
            lineChartTables={lineChartTables}
          /> */}
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={array}
          renderItem={renderItem}
          extraData={activeChart}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeWatchListStock: (id) =>
      dispatch({ type: "CHANGE_WATCHLIST_STOCK", id }),
    changeWatchListCrypto: (id) =>
      dispatch({ type: "CHANGE_WATCHLIST_CRYPTO", id }),
  };
};

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocksArray,
    crypto: state.crypto.cryptoArray,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllAssetsScreen);
