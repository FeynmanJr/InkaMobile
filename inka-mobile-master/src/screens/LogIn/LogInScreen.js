import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Pressable,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import useAuth from "../../hooks/useAuth";

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  //const [password, onChangeNumber] = React.useState(" ");
  const [isChecked, setChecked] = useState(false);

  const { login } = useAuth();

  const pressButton = async () => {
    const email = "admin@andevos.com.tr";
    text;
    const password = "AndAdm2024!";
    login(email, password);
  };

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };
  const pressPassword = () => {
    Alert.alert("Şifre oluşturma ekranına yönlendiriliyorsunuz.");
  };
  const pressAccount = () => {
    Alert.alert("Hesap oluşturma ekranına yönlendiriliyorsunuz.");
  };

  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.body}>
      <View style={styles.flexible}>
        <View>
          <Image
            style={styles.image}
            source={require("../../../assets/Andevos.png")}
          />
        </View>
        <View>
          <Text style={styles.title}>Hoşgeldiniz</Text>
        </View>
      </View>

      <View style={styles.flexible}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoFocus={true}
        />
      </View>

      <View style={styles.flexible}>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisible}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={(newText) => setPassword(newText)}
        />

        <Pressable onPress={togglePasswordVisibility} style={styles.icon}>
          {passwordVisible ? (
            <Icon name="eye" size={24} color="gray" />
          ) : (
            <Icon name="eye-slash" size={24} color="gray" />
          )}
        </Pressable>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <View style={styles.checkboxContainer}>
          <View>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckBoxToggle}
              containerStyle={styles.checkBox}
            />
          </View>
          <View>
            <Text style={styles.label}>Oturumu açık tut</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.sifretext}>Şifrenizi unuttunuz mu?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.flexible}>
        <TouchableOpacity onPress={pressButton} style={styles.button}>
          <Text style={styles.girisText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexible}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Hesabınız Yok mu?</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.link}>
        <Text onPress={() => Linking.openURL("https://andevos.com.tr")}>
          andevos.com.tr
        </Text>
      </View> */}
    </View>
  );
};

export default LoginScreen;
