import React from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
} from "react-native";
import styles from "./styles";

const WelcomeScreen = ({ navigation }) => {
  const onPressLogButton = () => {
    navigation.navigate("LogIn");
  };

  const onPressSignButton = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Andevos.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Andevos</Text>
          <Text style={styles.description}>
            Andevos Dijital Çözümler ile İşinize Değer Katın
          </Text>
        </View>
        <View style={styles.logContainer}>
          <TouchableHighlight
            style={styles.loginContainer}
            onPress={onPressLogButton}
          >
            <Text style={styles.logTxt}>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.signupContainer}
            onPress={onPressSignButton}
          >
            <Text style={styles.signTxt}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
