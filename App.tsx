import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const startAsync = async (): Promise<void> => {
    const fontsArray: { [x: string]: any }[] = [Ionicons.font];
    const fontPromise: Promise<void>[] = fontsArray.map((font) => Font.loadAsync(font));
    const imagesArray: any[] = [require("./assets/coffee.png")];
    const imagePromise = imagesArray.map((image) => Asset.loadAsync(image));
    await Promise.all<Promise<void> | Promise<Asset[]>>([...fontPromise, ...imagePromise]);
  };

  const onFinish = () => {
    console.log("onFinish");
    setLoading(false);
  };

  const onError = () => {
    console.log("onError");
  };

  return loading === true ? (
    <AppLoading startAsync={startAsync} onFinish={onFinish} onError={onError} />
  ) : (
    <View>
      <Text>Hello!!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
