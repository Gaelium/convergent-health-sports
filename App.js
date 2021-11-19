import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Splash from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Login";
import Register from "./components/Register";
import Sports from "./components/Sports";
import HomeScreen from "./components/HomeScreen";
import Username from "./components/Username";
import viewEvent from "./components/viewEvent";
import createEvent from "./components/createEvent";

import yourProfile from "./components/yourProfile";
import Search from "./components/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    //Add an initialRoute variable straight to homepage if the user is already logged in
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: "" }}
        />
        <Stack.Screen name="Login" component={Login} options={{ title: "" }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeStackScreen} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="viewEvent" component={viewEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeStack = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Message") {
            iconName = focused ? "ios-chatbubble" : "ios-chatbubble-outline";
          } else if (route.name === "Create Event") {
            iconName = "ios-add";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-person-circle"
              : "ios-person-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="Create Event" component={creadeEvent} />
      <HomeStack.Screen name="Message" component={viewEvent} />
      <HomeStack.Screen name="Profile" component={yourProfile} />
    </HomeStack.Navigator>
  );
}
//<Stack.Screen name="Sports" component={Sports} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
});
