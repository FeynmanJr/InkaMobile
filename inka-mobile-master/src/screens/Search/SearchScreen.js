import React, { useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import {
  getStocksByStockName,
  getCryptoByCryptoName,
} from "../../data/mockData";
import CardView from "../../components/CardView/CardView";
import { connect } from "react-redux";

const SearchScreen = (props) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (text) => {
    const type = props.route.params?.type;
    let arr = [];
    if (type === "Stocks") {
      arr = getStocksByStockName(text);
    } else if (type === "Cryptocurencies") {
      arr = getCryptoByCryptoName(text);
    }

    if (text === "") {
      setValue("");
      setData([]);
    } else {
      setValue(text);
      setData(arr);
    }
  };

  const getValue = () => {
    return value;
  };

  const renderItem = ({ item }) => (
    <CardView
      onPress={() =>
        props.navigation.navigate("AssetScreen", {
          params: {
            item,
            type: props.route.params?.type,
            changeWatchList:
              props.route.params?.type === "Stocks"
                ? props.changeWatchListStock
                : props.changeWatchListCrypto,
          },
        })
      }
      item={item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
