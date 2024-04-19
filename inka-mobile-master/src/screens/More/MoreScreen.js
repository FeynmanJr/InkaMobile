/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const MoreScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate("News")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Image
                style={styles.itemIcon}
                source={require("../../../assets/icons/news.png")}
              />
              <Text style={styles.itemTitle}>News</Text>
            </View>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/icons/rightArrow.png")}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Notifications")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Image
                style={styles.itemIcon}
                source={require("../../../assets/icons/notifications.png")}
              />
              <Text style={styles.itemTitle}>Notifications</Text>
            </View>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/icons/rightArrow.png")}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Profile")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Image
                style={styles.itemIcon}
                source={require("../../../assets/icons/profiel.png")}
              />
              <Text style={styles.itemTitle}>Profile</Text>
            </View>
            <Image
              style={styles.rightArrow}
              source={require("../../../assets/icons/rightArrow.png")}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => i18next.changeLanguage("tr")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.itemTitle}>{t("CHANGE_LANG_TR")}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => i18next.changeLanguage("en")}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.itemTitle}>{t("CHANGE_LANG_EN")}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default MoreScreen;
