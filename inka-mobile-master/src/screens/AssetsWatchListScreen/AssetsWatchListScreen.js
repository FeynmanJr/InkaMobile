import React from "react";
import { View, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import CardView from "../../components/CardView/CardView";
import { connect } from "react-redux";

const AssetWatchListScreen = ({
  route,
  navigation,
  changeWatchListStock,
  changeWatchListCrypto,
  stocks,
  crypto,
}) => {
  const renderItem = ({ item }) => {
    if (item.watchList) {
      return (
        <CardView
          onPress={() =>
            navigation.navigate("AssetScreen", {
              item,
              type: route.params?.type,
              changeWatchList:
                route.params?.type === "Stocks"
                  ? changeWatchListStock
                  : changeWatchListCrypto,
            })
          }
          item={item}
        />
      );
    }
  };

  const array = route.params?.array;

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 5,
        }}
      >
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={array}
          renderItem={renderItem}
          extraData={array}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetWatchListScreen);
