import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabSelectPhoto from "../screens/TabSelectPhoto";
import TabTakePhoto from "../screens/TabTakePhoto";
import TabUploadPhoto from "../screens/TabUploadPhoto";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const StackPhotoNavigation = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "dodgerblue", top: 0, height: 3 },
      }}
    >
      <Tab.Screen name="TabSelectPhoto">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: { backgroundColor: "black" },
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerBackImage: ({ tintColor }) => <Ionicons name="arrow-undo" color={tintColor} size={32} />,
            }}
          >
            <Stack.Screen name="Gallery" component={TabSelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="TakePhoto" component={TabTakePhoto} />
      <Tab.Screen name="TabUploadPhoto" component={TabUploadPhoto} />
    </Tab.Navigator>
  );
};

export default StackPhotoNavigation;
