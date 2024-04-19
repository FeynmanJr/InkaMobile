import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Onboarding")}
        underlayColor="rgba(73,182,77,1,0.9)"
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.jpg")}
        />
      </TouchableHighlight>
    </View>
  );
};

export default SplashScreen;
