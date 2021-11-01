import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Login";
import Register from "./components/Register";
import Sports from "./components/Sports";
import HomeScreen from "./components/HomeScreen";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeStack = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
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
});
