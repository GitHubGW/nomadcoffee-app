import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabHome from "../screens/TabHome";
import TabSearch from "../screens/TabSearch";
import TabProfile from "../screens/TabProfile";
import { FontAwesome } from "@expo/vector-icons";
import LoggedOutNavigation from "./LoggedOutNavigation";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const Tab = createBottomTabNavigator();

const LoggedInNavigation = () => {
  const isLoggedIn: boolean = useReactiveVar(isLoggedInVar);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen name="Home" component={TabHome} options={{ tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> }} />
      <Tab.Screen name="Search" component={TabSearch} options={{ tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} /> }} />
      <Tab.Screen
        name="Profile"
        component={isLoggedIn === true ? TabProfile : LoggedOutNavigation}
        options={{ tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
};

export default LoggedInNavigation;
