import TabHome from "../screens/TabHome";
import TabSearch from "../screens/TabSearch";
import TabProfile from "../screens/TabProfile";
import { FontAwesome } from "@expo/vector-icons";
import LoggedOutNavigation from "./LoggedOutNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";
import StackPhotoNavigation from "../navigators/StackPhotoNavigation";
import TabCreate from "../screens/TabCreate";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const isLoggedIn: boolean = useReactiveVar(isLoggedInVar);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={TabHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={TabSearch}
        options={{
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Create"
        component={TabCreate}
        options={{
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ color }) => <FontAwesome name="plus" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Photo"
        component={StackPhotoNavigation}
        options={{
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ color }) => <FontAwesome name="camera" size={24} color={color} />,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("StackPhotoNavigation");
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={isLoggedIn === true ? TabProfile : LoggedOutNavigation}
        options={{ headerShown: false, tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
