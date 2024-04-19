import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import styles from "./styles";

const BackButton = ({ onPress, title }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="rgba(128, 128, 128, 0.1)"
    >
      <View style={styles.btnContainer}>
        <Image
          source={require("../../../assets/icons/backArrow.png")}
          style={styles.btnIcon}
        />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default BackButton;
