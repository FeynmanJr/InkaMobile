import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./styles";

const SellScreen = ({ route, navigation }) => {
  const [shares, setShares] = useState("0");
  const [price] = useState("180");

  const onPressButton = () => {
    navigation.goBack();
  };

  const title = route.params?.title;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>SHARES OF {title}</Text>
          <TextInput
            placeholder="Enter number of shares"
            onChangeText={(text) => setShares(text)}
            value={shares}
            style={styles.inputTxt}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.blueTxt}>MKT PRICE</Text>
          <Text>X</Text>
          <Text>${price}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.greyTxt}>EST PRICE</Text>
          <Text style={styles.boldTxt}>
            ${parseInt(price, 10) * parseInt(shares === "" ? 0 : shares, 10)}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.btnContainer}
        onPress={onPressButton}
        underlayColor="rgba(73,182,77,1,0.9)"
      >
        <Text style={styles.btnTxt}>Trade</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SellScreen;
