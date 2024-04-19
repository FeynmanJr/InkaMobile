import React from "react";
import SplashScreen from "../screens/Splash/SplashScreen";
import OnboardingScreen from "../screens/OnBoarding/OnBoardingScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import LogInScreen from "../screens/LogIn/LogInScreen";
import ForgotPassword from "../screens/ForgotPasswordScreen/ForgotPassword";
import SignUpScreen from "../screens/SignUp/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

const AuthNavigation = () => {
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
        options={{
          headerTransparent: true,
        }}
        name="LogIn"
        component={LogInScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={WelcomeScreen}
      />

      <Stack.Screen
        options={{ headerTransparent: true }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "",
        }}
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
