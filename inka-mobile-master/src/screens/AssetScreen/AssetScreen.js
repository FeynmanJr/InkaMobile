import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import StoryView from "../../components/StoryView/StoryView";
// import LineChartView from "../../components/LineChartView/LineChartView";
import { getStockById, getCryptoById } from "../../data/mockData";
import {
  lineChartConfig,
  lineChartData,
  storiesArray,
  lineChartTables,
} from "../../data/dataArrays";

const AssetScreen = ({ route, navigation }) => {
  const [activeChart, setActiveChart] = useState(0);

  useEffect(() => {
    const { params } = route;
    const item = params?.item;
    const type = params?.type;
    const watchlist =
      type === "Stocks" ? getStockById(item.id) : getCryptoById(item.id);

    navigation.setOptions({
      headerLeft: () => (
        <BackButton
          onPress={() => navigation.navigate("Portfolio")}
          title="Portfolio"
        />
      ),
      title: params?.item.title,
      headerRight: () => (
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => onPressWatchList()}
        >
          <Image
            style={styles.wishListIcon}
            source={
              watchlist.watchList
                ? require("../../../assets/icons/wishList.png")
                : require("../../../assets/icons/wishListEmpty.png")
            }
          />
        </TouchableHighlight>
      ),
    });
  }, [route.params]);

  const renderStory = ({ item }) => (
    <StoryView
      item={item}
      onPress={() => navigation.navigate("NewsWebView", { item })}
    />
  );

  const onPressWatchList = () => {
    const { route } = navigation;
    const item = route.params?.item;
    const type = route.params?.type;
    const id = item.id;
    route.params.changeWatchList(id);
    navigation.replace("AssetScreen", {
      item,
      type: type,
      changeWatchList: route.params.changeWatchList,
    });
  };

  const onPressBuy = () => {
    navigation.navigate("BuySell", {
      title: route.params?.item.title,
      type: "Buy",
    });
  };

  const onPressSell = () => {
    navigation.navigate("BuySell", {
      title: route.params?.item.title,
      type: "Sell",
    });
  };

  const onPressViewStories = () => {};

  const item = route.params?.item;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {/* <LineChartView
          lineChartData={lineChartData}
          lineChartConfig={lineChartConfig}
          lineChartTables={lineChartTables}
        /> */}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Your Position</Text>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.mainTxt}>Shares</Text>
            <Text style={styles.secTxt}>{item.position.shares}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.mainTxt}>Equity</Text>
            <Text style={styles.secTxt}>{item.position.equity}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.mainTxt}>Avg Cost</Text>
            <Text style={styles.secTxt}>{item.position.avgCost}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.mainTxt}>Portfolio Diversivity</Text>
            <Text style={styles.secTxt}>
              {item.position.portfolioDiversivity}
            </Text>
          </View>
        </View>
        <View style={styles.rowBorderContainer}>
          <Text style={styles.mainTxt}>Todays return</Text>
          <Text style={styles.secTxt}>{item.position.todayReturn}</Text>
        </View>
        <View style={styles.rowBorderContainer}>
          <Text style={styles.mainTxt}>Total return</Text>
          <Text style={styles.secTxt}>{item.position.totalReturn}</Text>
        </View>
      </View>
      <View style={styles.btnsContainer}>
        <TouchableHighlight
          style={styles.btnContainer}
          onPress={() => onPressBuy()}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.btnTxt}>Buy</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btnContainer}
          onPress={() => onPressSell()}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.btnTxt}>Sell</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Stats</Text>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>Open</Text>
            <Text style={styles.secTxt}>{item.stats.open}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>Volume</Text>
            <Text style={styles.secTxt}>{item.stats.volume}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>High</Text>
            <Text style={styles.secTxt}>{item.stats.high}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>Avg Vol</Text>
            <Text style={styles.secTxt}>{item.stats.avgVol}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>Low</Text>
            <Text style={styles.secTxt}>{item.stats.low}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>P/E Ratio</Text>
            <Text style={styles.secTxt}>{item.stats.peRatio}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>52 WK High</Text>
            <Text style={styles.secTxt}>{item.stats.wkHigh}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.mainTxt}>MKT Cap</Text>
            <Text style={styles.secTxt}>{item.stats.MKTCAP}</Text>
          </View>
        </View>
      </View>
      <View style={styles.facilitieContainer}>
        <Text style={styles.title}>Recent News</Text>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={storiesArray}
          renderItem={renderStory}
          extraData={activeChart}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
        <TouchableHighlight
          style={styles.itemContainer}
          onPress={() => onPressViewStories()}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all stories</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default AssetScreen;
