import "react-native-gesture-handler";
import * as Font from "expo-font";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import client, { isLoggedInVar, TOKEN, tokenVar } from "./apollo";
import LoggedInNavigation from "./navigators/LoggedInNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const startAsync = async (): Promise<void> => {
    const token = await AsyncStorage.getItem(TOKEN);
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }

    const fontsArray: { [x: string]: any }[] = [Ionicons.font];
    const fontPromise: Promise<void>[] = fontsArray.map((font) => Font.loadAsync(font));
    const imagesArray: any[] = [require("./assets/coffee.png")];
    const imagePromise = imagesArray.map((image) => Asset.loadAsync(image));
    await Promise.all<Promise<void> | Promise<Asset[]>>([...fontPromise, ...imagePromise]);
  };

  const onFinish = (): void => {
    console.log("onFinish");
    setLoading(false);
  };

  const onError = (): void => {
    console.log("onError");
  };

  return loading === true ? (
    <AppLoading startAsync={startAsync} onFinish={onFinish} onError={onError} />
  ) : (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar style="light" />
        <LoggedInNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
