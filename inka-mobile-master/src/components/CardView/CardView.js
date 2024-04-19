import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

const CardView = ({ item, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      onPress={() => onPress()}
      underlayColor="rgba(128, 128, 128, 0.1)"
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.itemIcon} source={{ uri: item.icon }} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemmText}>{item.text}</Text>
          </View>
        </View>
        <View
          style={
            parseFloat(item.procent) < 2
              ? styles.redProcentContainer
              : styles.greenProcentContainer
          }
        >
          <Text
            style={
              parseFloat(item.procent) < 2
                ? styles.redItemProcent
                : styles.greenItemProcent
            }
          >
            {item.procent + "%"}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardView;
