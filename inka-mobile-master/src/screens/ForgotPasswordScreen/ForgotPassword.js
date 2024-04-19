import React from "react";
import { TouchableOpacity, TextInput } from "react-native";

import {
  Alert,
  SafeAreaView,
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
} from "react-native";
import styles from "./styles";
const ForgotPassword = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");

  const sendMail = () => {
    Alert.alert("Doğrulama maili gönderilmiştir.");
  };

  return (
    <View style={styles.body}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.goBack}
        ></TouchableOpacity>
        <View>
          <View>
            <Image
              style={styles.Image}
              source={require("../../../assets/Andevos.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              Şifrenizi mi Unuttunuz?
            </Text>
          </View>
          <View style={styles.recover}>
            <Text style={styles.recoverText}>
              Aşağıya mailinizi girin, size şifre yenileme maili gönderelim.
            </Text>
          </View>
        </View>
        <View style={styles.sendEmail}>
          <TextInput
            style={styles.sendEmailText}
            placeholder="E-mail"
            onChangeText={onChangeText}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity onPress={sendMail} style={styles.sendMailButton}>
          <Text style={styles.sendMailButtonText}> Mail Gönder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.alreadyHaveAccButton}
        >
          <Text style={styles.alreadyHaveAccText}>
            {" "}
            Zaten Hesabınız var mı?
          </Text>
        </TouchableOpacity>
        <Text onPress={() => Linking.openURL("https://andevos.com.tr")}>
          {" "}
          andevos.com.tr
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;
