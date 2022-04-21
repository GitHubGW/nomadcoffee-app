import { createStackNavigator } from "@react-navigation/stack";
import StackCreateAccount from "../screens/StackCreateAccount";
import StackEnter from "../screens/StackEnter";
import StackLogin from "../screens/StackLogin";

const Stack = createStackNavigator();

const LoggedOutNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="StackEnter"
      screenOptions={{
        headerMode: "screen",
        presentation: "transparentModal",
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerTitle: () => false,
      }}
    >
      <Stack.Screen name="StackEnter" component={StackEnter} />
      <Stack.Screen name="StackLogin" component={StackLogin} />
      <Stack.Screen name="StackCreateAccount" component={StackCreateAccount} />
    </Stack.Navigator>
  );
};

export default LoggedOutNavigation;
