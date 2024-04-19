import React, { useState } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./styles";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignButton = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Create a new account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View style={styles.logContainer}>
            <TouchableHighlight
              style={styles.signContainer}
              onPress={onPressSignButton}
            >
              <Text style={styles.signTxt}>Sign In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
