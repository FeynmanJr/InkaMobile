import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import AppContainer from "./src/navigation/AppNavigation";
import { enableScreens } from "react-native-screens";
import "./src/context/i18next";
import { JWTProvider as AuthProvider } from "./src/context/JWTContext";

console.disableYellowBox = true;

const App = () => {
  enableScreens();

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </Provider>
  );
};

export default App;
