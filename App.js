import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ChatStackNavigator from "./src/navigations/Navigator";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const App = () => {
  let [fontLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ChatStackNavigator />
    </NavigationContainer>
  );
};

export default App;
