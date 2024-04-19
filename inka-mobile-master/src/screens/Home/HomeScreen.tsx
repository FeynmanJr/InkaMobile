import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";
import useAuth from "../../hooks/useAuth";
import { dispatch, useSelector } from "../../store";
import { Pagination } from "../../types/pagination";
import { buildQueryString } from "../../helpers/request";
import { getEmployeeTimeOffEligibility } from "../../store/slices/employeeTimeOff";
import {
  getEmployeeDailyTimeOff,
  getHiringDate,
  getSpecialDays,
} from "../../store/slices/dashboard";
import Celebration from "./Celebration";
import Welcome from "./Welcome";
import { HiringDate, SpecialDays } from "types/dashboard";
import TimeOffDaily from "./TimeOffDaily";

const HomeScreen = ({ navigation }) => {
  const [activeChart, setActiveChart] = useState(0);
  const { authUser } = useAuth();
  const { t } = useTranslation();

  const { specialDays, hiringDate } = useSelector((state) => state.dashboard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (pagination?: Pagination) => {
    const queryString = pagination ? buildQueryString(pagination) : "";
    dispatch(getEmployeeTimeOffEligibility(authUser?.userId!));
    dispatch(getHiringDate(queryString));
    dispatch(getSpecialDays(queryString));
    dispatch(getEmployeeDailyTimeOff(queryString));
  };

  const renderCelebration = ({ item }: { item: SpecialDays }) =>
    item && <Celebration item={item} />;
  const renderWelcome = ({ item }: { item: HiringDate }) =>
    item && <Welcome item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.facilitieContainer}>
        <TimeOffDaily />
      </View>
      <View style={styles.facilitieContainer}>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.title}>{t("CELEBRATION")}</Text>
          }
          showsVerticalScrollIndicator={false}
          data={specialDays.items.slice(0, 2)}
          renderItem={renderCelebration}
          extraData={activeChart}
          keyExtractor={(item) => `${item.id}`}
        />
        <TouchableOpacity
          style={styles.itemContainer}
          // onPress={onPressViewCategories}
          underlayColor="rgba(73,182,77,1,0.9)"
        >
          <Text style={styles.viewTxt}>View all categories</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.facilitieContainer}>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.title}>{t("WELCOME.CARD.TITLE")}</Text>
          }
          showsVerticalScrollIndicator={false}
          data={hiringDate.items}
          renderItem={renderWelcome}
          extraData={activeChart}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
