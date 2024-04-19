import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import useAuth from "../hooks/useAuth";
import SplashScreen from "../screens/Splash/SplashScreen";
import AuthNavigation from "./AuthNavigation";

const Stack = createStackNavigator();

const Navigator = () => {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("Main");
    } else {
      navigation.navigate("Auth");
    }
  }, [isLoggedIn]);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Main" : "Auth"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainNavigation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={AuthNavigation}
      />
    </Stack.Navigator>
  );
};

const Landing = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  const { isInitialized } = useAuth();

  return (
    <NavigationContainer>
      {!isInitialized ? <Landing /> : <Navigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
