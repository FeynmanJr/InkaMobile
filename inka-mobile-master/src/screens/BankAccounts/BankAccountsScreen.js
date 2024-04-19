import React from "react";
import {
  View,
  TouchableHighlight,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import Card2View from "../../components/Card2View/Card2View";
import styles from "./styles";
import { connect } from "react-redux";
import MenuImage from "../../components/MenuImage/MenuImage";

const BankAccountsScreen = ({ navigation, accounts }) => {
  const renderItem = ({ item }) => (
    <Card2View
      onPress={() =>
        navigation.navigate("BankAccountDetalis", {
          item: item,
          title: item.title,
        })
      }
      item={item}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.facilitieContainer}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={accounts}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          listKey="0"
        />
        <TouchableHighlight
          style={styles.btnContainer}
          onPress={() => navigation.navigate("LinkAccount")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.btnTxt}>Link Another Institution</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
  };
};

export default connect(mapStateToProps)(BankAccountsScreen);
