import React from "react";
import { Image, StyleSheet } from "react-native";
import HomeScreen from "../screens/Home/HomeScreen";
import PortfolioScreen from "../screens/Portfolio/PortfolioScreen";
import ExpensesScreen from "../screens/Expenses/ExpensesScreen";
import BankAccountsScreen from "../screens/BankAccounts/BankAccountsScreen";
import MoreScreen from "../screens/More/MoreScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import DayOffScreen from "../screens/DayOff/DayOffScreen";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#4a7bd0",
    borderBottomWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Stack = createStackNavigator();

const HomeStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: t("HOMEPAGE") }}
      />
    </Stack.Navigator>
  );
};

const DayOffStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="DayOff"
        component={DayOffScreen}
        options={{ title: t("TIME.OFF.INFORMATION") }}
      />
    </Stack.Navigator>
  );
};

const PortfolioStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{ title: "Portfolio" }}
      />
    </Stack.Navigator>
  );
};

const BankAccountsStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="BankAccounts"
        component={BankAccountsScreen}
        options={{ title: "Accounts" }}
      />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: t("MORE.ITEMS"),
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  const BottomTabNavigator = createBottomTabNavigator();
  const { t } = useTranslation();

  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: t("HOMEPAGE"),
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Expenses"
        component={DayOffStack}
        options={{
          title: t("TIME.OFF.INFORMATION"),
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/expenses.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Portfoliow"
        component={ExpensesScreen}
        options={{
          title: "Avans ve Masraf",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/portfolio.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="BankAccounts"
        component={BankAccountsStack}
        options={{
          title: "Duyurular",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/bankAccounts.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="More"
        component={MoreStack}
        options={{
          title: t("MORE.ITEMS"),
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/more.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default TabNavigation;
