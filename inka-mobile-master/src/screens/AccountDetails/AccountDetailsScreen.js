/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useState, useTransition } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

const AccountDetailsScreen = () => {
  const [firstName, setFirstName] = useState("Adrian");
  const [lastName, setLastName] = useState("Smith");
  const [gmail, setGmail] = useState("g1@yahoo.com");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("Male");
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Public Profile</Text>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTxt}>First Name</Text>
              <TextInput
                style={styles.inputTxt}
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
              />
            </View>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTxt}>Last Name</Text>
              <TextInput
                style={styles.inputTxt}
                onChangeText={(text) => setLastName(text)}
                value={lastName}
              />
            </View>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTxt}>User name</Text>
              <TextInput
                style={styles.inputTxt}
                placeholder="Your first name"
                onChangeText={(text) => setUserName(text)}
                value={userName}
              />
            </View>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTxt}>Gender</Text>
              <TextInput
                style={styles.inputTxt}
                onChangeText={(text) => setGender(text)}
                value={gender}
              />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>{t("XXX")}</Text>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTxt}>Email address</Text>
              <TextInput
                style={styles.inputTxt}
                onChangeText={(text) => setGmail(text)}
                value={gmail}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccountDetailsScreen;
