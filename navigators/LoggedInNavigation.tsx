import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import StackPhotoNavigation from "./StackPhotoNavigation";

const Stack = createStackNavigator();

const LoggedInNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: "card" }}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="StackPhotoNavigation" component={StackPhotoNavigation} />
    </Stack.Navigator>
  );
};

export default LoggedInNavigation;
