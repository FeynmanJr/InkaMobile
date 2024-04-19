import React, { useEffect } from "react";
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
import { dispatch, useSelector } from "../../store";
import { useTranslation } from "react-i18next";
import { TabView, SceneMap } from "react-native-tab-view";
import { getTimeOffRequestByUserId } from "../../store/slices/employeeTimeOff";
import useAuth from "../../hooks/useAuth";
import SickReportList from "../../screens/SickReport/SickReportList";
import { Button } from "react-native-elements";
import SickReport from "../../screens/SickReport";
import TimeOff from "../../screens/TimeOff";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const DayOffScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { authUser } = useAuth();

  const { employeeTimeOffEligibility } = useSelector(
    (state) => state.employeeTimeOff
  );

  const { timeOffs } = useSelector((state) => state.employeeTimeOff);
  useEffect(() => {
    const queryString = "";
    dispatch(getTimeOffRequestByUserId(authUser?.userId, queryString));
  }, []);

  console.log(timeOffs);


  const FirstRoute = () => <TimeOff navigation={navigation} />;


  const SecondRoute = () => <SickReport navigation={navigation} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "İzinlerim" },
    { key: "second", title: "Raporlarım" },
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
            <Text style={styles.itemTitle}>{item.companyName}</Text>
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
    <View style={styles.container}>
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
    </View>
  );
};

export default DayOffScreen;
