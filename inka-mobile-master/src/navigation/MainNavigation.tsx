import React from "react";
import { Image, View, Text, TouchableHighlight } from "react-native";
import AllSpendingCategoriesScreen from "../screens/AllSpendingCategories/AllSpendingCategoriesScreen";
import NewsScreen from "../screens/News/NewsScreen";
import NotificationsScreen from "../screens/Notifications/NotificationsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AccountDetailsScreen from "../screens/AccountDetails/AccountDetailsScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import LinkAccountsScreen from "../screens/LinkAccount/LinkAccountScreen";
import BankAccountDetalisScreen from "../screens/BankAccountDetails/BankAccountDetailsScreen";
import BuySellScreen from "../screens/BuySell/BuySellScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";
import NewsWebView from "../screens/NewsWebView/NewsWebView";
import AssetScreen from "../screens/AssetScreen/AssetScreen";
import AllAssetsScreen from "../screens/AllAssetsScreen/AllAssetsScreen";
import AssetsWatchListScreen from "../screens/AssetsWatchListScreen/AssetsWatchListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BackButton from "../components/BackButton/BackButton";
import { SearchBar } from "react-native-elements";
import TabNavigation from "./TabNavigation";
import SickReportAdd from "../screens/SickReport/SickReportAdd";
import DayOffScreen from "../screens/DayOff/DayOffScreen";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#4a7bd0",
          elevation: 0,
          shadowColor: "transparent",
          borderBottomWidth: 0,
        },
        headerRight: () => <View />,
      }}
    >
      <Stack.Screen
        name="Nav"
        options={{
          headerShown: false,
        }}
        component={TabNavigation}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.goBack()}
              title={"Expenses"}
            />
          ),
          title: "All Expenses",
        })}
        name="AllSpendingCategories"
        component={AllSpendingCategoriesScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={"More"} />
          ),
          title: "News",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight onPress={() => this.onPressBinocular()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/icons/binocular.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("Search", { type: route.params?.title })
                }
              >
                <Image
                  source={require("../../assets/icons/search.png")}
                  style={{
                    marginRight: 10,
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                  }}
                />
              </TouchableHighlight>
            </View>
          ),
        })}
        name="News"
        component={NewsScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={"More"} />
          ),
          title: "Notifications",
          headerRight: () => <View />,
        })}
        name="Notifications"
        component={NotificationsScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={"More"} />
          ),
          title: "Profile",
          headerRight: () => <View />,
        })}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={"Profile"} />
          ),
          title: "Account Details",
          headerRight: () => <View />,
        })}
        name="AccountDetails"
        component={AccountDetailsScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={"Profile"} />
          ),
          title: "Account Details",
          headerRight: () => <View />,
        })}
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          title: "Link New Account",
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={""} />
          ),
        })}
        name="LinkAccount"
        component={LinkAccountsScreen}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={""} />
          ),
          title: route.params?.title,
          headerRight: () => <View />,
        })}
        name="BankAccountDetalis"
        component={BankAccountDetalisScreen}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableHighlight
              onPress={() => navigation.goBack()}
              underlayColor="rgba(73,182,77,1,0.9)"
            >
              <Text style={{ color: "white", marginLeft: 10 }}>Cancel</Text>
            </TouchableHighlight>
          ),
          headerRight: () => <View />,
          title: route.params?.type + " " + route.params?.title,
        })}
        name="BuySell"
        component={BuySellScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <BackButton onPress={() => navigation.goBack()} title={""} />
          ),
          headerRight: () => <View />,
          headerTitle: () => (
            <SearchBar
              containerStyle={{
                backgroundColor: "transparent",
                borderBottomColor: "transparent",
                borderTopColor: "transparent",
                flex: 1,
              }}
              inputContainerStyle={{
                backgroundColor: "white",
              }}
              inputStyle={{
                backgroundColor: "white",
                borderRadius: 10,
                color: "black",
              }}
              searchIcond
              clearIcon
              //lightTheme
              round
              onChangeText={(text) => this.handleSearch(text)}
              //onClear={() => params.handleSearch('')}
              placeholder="Search"
              value={this.getValue}
            />
          ),
        })}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        name="Transactions"
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.goBack()}
              title={route.params.backScreen}
            />
          ),
          title: "Transactions",
          headerRight: () => <View />,
        })}
        component={TransactionsScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerBackTitle: "News",
          headerStyle: {
            backgroundColor: "transparent",
          },
          title: "",
        })}
        name="NewsWebView"
        component={NewsWebView}
      />
      <Stack.Screen
        options={{ animationTypeForReplace: "pop" }}
        name="AssetScreen"
        component={AssetScreen}
      />
      <Stack.Screen name="SickReportAdd" component={SickReportAdd} />
      <Stack.Screen name="DayOffScreen" component={DayOffScreen} />
      <Stack.Screen
        options={({ navigation, route }) => ({
          title: "Your " + route.params?.title,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.goBack()}
              title={"Portfolio"}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight onPress={() => this.onPressBinocular()}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    alignSelf: "center",
                  }}
                  source={require("../../assets/icons/binocular.png")}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("Search", { type: route.params?.title })
                }
              >
                <Image
                  source={require("../../assets/icons/search.png")}
                  style={{
                    marginRight: 10,
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                  }}
                />
              </TouchableHighlight>
            </View>
          ),
        })}
        name="AllAssetsScreen"
        component={AllAssetsScreen}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: (
            <BackButton
              onPress={() => navigation.goBack()}
              title={route.params?.type}
            />
          ),
          title: "Your WatchList",
          headerRight: () => <View />,
        })}
        name="AssetsWatchListScreen"
        component={AssetsWatchListScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
