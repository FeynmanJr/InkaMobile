import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import styles from "./styles";
import { accounts } from "../../data/dataArrays";
import { connect } from "react-redux";

const LinkAccountsScreen = ({
  navigation,
  addAccount,
  accounts: reduxAccounts,
}) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableHighlight
          onPress={() => addSelectedAccounts()}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={{ color: "white", fontWeight: "bold", marginRight: 10 }}>
            Done
          </Text>
        </TouchableHighlight>
      ),
    });
  }, [selected]);

  const addSelectedAccounts = () => {
    selected.forEach((data) => {
      addAccount(accounts[data]);
    });
    navigation.navigate("BankAccounts");
  };

  const onPressCard = (item) => {
    if (selected.includes(item.id)) {
      setSelected(selected.filter((id) => id !== item.id));
    } else {
      setSelected([...selected, item.id]);
    }
  };

  const renderCard = ({ item }) => (
    <View>
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        style={styles.cardContainer}
        onPress={() => onPressCard(item)}
      >
        <Image style={styles.cardImg} source={{ uri: item.icon }} />
      </TouchableHighlight>
      <Text
        style={
          selected.includes(item.id)
            ? styles.selectedCardTitle
            : styles.cardTitle
        }
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 5,
          alignItems: "center",
        }}
      >
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={accounts}
          renderItem={renderCard}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addAccount: (account) => dispatch({ type: "ADD_ACCOUNT", account }),
  };
}

function mapStateToProps(state) {
  return {
    accounts: state.bank.accounts,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkAccountsScreen);
