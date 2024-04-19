import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  useWindowDimensions,
} from "react-native";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { spendingArray, payments } from "../../data/dataArrays";
import { useSelector } from "../../store";
import { useTranslation } from "react-i18next";
import { TabView, SceneMap } from "react-native-tab-view";
import Expense from "../../screens/Expense";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const FinancialScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const { employeeTimeOffEligibility } = useSelector(
    (state) => state.employeeTimeOff
  );

  const FirstRoute = () => <Expense navigation={navigation} />;

  const SecondRoute = () => (
    <View style={styles.facilitieContainer}>
      <Text style={styles.title}>Top Spending Categories</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={spendingArray.slice(0, 3)}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={onPressViewCategories}
        underlayColor="rgba(73,182,77,1,0.9)"
      >
        <Text style={styles.viewTxt}>View all categories</Text>
      </TouchableOpacity>
    </View>
  );

  const renderScene = SceneMap({
    advance: FirstRoute,
    expense: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "advance", title: t("MY.ADVANCE") },
    { key: "expense", title: t("MY.EXPENSE") },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("Transactions", {
          item: item,
          payments: payments,
          backScreen: "Expenses",
        })
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.itemIcon} source={{ uri: item.icon }} />
          <View style={styles.itemTxtContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemText}>{item.money}</Text>
          </View>
        </View>
        <Image
          style={styles.rightArrow}
          source={require("../../../assets/icons/rightArrow.png")}
        />
      </View>
    </TouchableOpacity>
  );

  const onPressViewCategories = () => {
    navigation.navigate("AllSpendingCategories", { spendingArray });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={{ flex: 3 }}>
          <Text style={styles.infoTitle}>
            {employeeTimeOffEligibility?.totalUsedTimeOffDay} {t("GLOBAL.DAY")}
          </Text>

          <Text style={styles.infoText}>{t("TIME.OFF.USED.TIME.OFF.DAY")}</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.infoTitle}>
            {employeeTimeOffEligibility?.availableTimeOff} {t("GLOBAL.DAY")}
          </Text>
          <Text style={styles.infoText}>
            {t("TIME.OFF.YOUR.REMAINING.LEAVE")}
          </Text>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </ScrollView>
  );
};

export default FinancialScreen;
