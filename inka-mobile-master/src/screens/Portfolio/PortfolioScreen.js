import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { PieChart } from "react-native-chart-kit";
import {
  portfolioData,
  chartConfig,
  storiesArray,
} from "../../data/dataArrays";
import { connect } from "react-redux";
import CardView from "../../components/CardView/CardView";
import StoryView from "../../components/StoryView/StoryView";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const PortfolioScreen = (props) => {
  const renderStock = ({ item }) => (
    <CardView
      onPress={() =>
        props.navigation.navigate("AssetScreen", {
          item,
          type: "Stocks",
          changeWatchList: props.changeWatchListStock,
        })
      }
      item={item}
    />
  );

  const renderCrypto = ({ item }) => (
    <CardView
      onPress={() =>
        props.navigation.navigate("AssetScreen", {
          item,
          type: "Cryptocurencies",
          changeWatchList: props.changeWatchListCrypto,
        })
      }
      item={item}
    />
  );

  const renderStory = ({ item }) => (
    <StoryView
      item={item}
      onPress={() => props.navigation.navigate("NewsWebView", { item })}
    />
  );

  const onPressViewCryptocureinces = () => {
    props.navigation.navigate("AllAssetsScreen", {
      array: props.crypto,
      title: "Cryptocurencies",
    });
  };

  const onPressViewStocks = () => {
    props.navigation.navigate("AllAssetsScreen", {
      array: props.stocks,
      title: "Stocks",
    });
  };

  const onPressViewStories = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          data={portfolioData}
          width={SCREEN_WIDTH}
          height={220}
          chartConfig={chartConfig}
          accessor="money"
          backgroundColor="transparent"
        />
      </View>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>Stocks</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={props.stocks}
          renderItem={renderStock}
          extraData={props.stocks}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
        <TouchableHighlight
          style={styles.viewContainer}
          onPress={onPressViewStocks}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all stocks</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>Cryptocurencies</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={props.crypto}
          renderItem={renderCrypto}
          extraData={props.crypto}
          keyExtractor={(item) => `${item.id}`}
          listKey="1"
        />
        <TouchableHighlight
          style={styles.viewContainer}
          onPress={onPressViewCryptocureinces}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all cryptocurencies</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>Top Stories</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={storiesArray}
          renderItem={renderStory}
          extraData={props.stocks}
          keyExtractor={(item) => `${item.id}`}
          listKey="2"
        />
        <TouchableHighlight
          style={styles.viewContainer}
          onPress={onPressViewStories}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all stories</Text>
        </TouchableHighlight>
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioScreen);
