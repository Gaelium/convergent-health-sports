import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import AppLoading from "expo-app-loading";
function Splash() {
  let [fontsLoaded] = useFonts({
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }
  return (
    <View style={styles.container}>
      <Text> Bounce </Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text style={styles.buttonTextStyle}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  login: {
    alignItems: "center",
    width: "30%",
    borderWidth: 3,
    borderColor: "#03A678",
    backgroundColor: "#03A678",
    padding: 10,
    marginRight: 10,
  },
  register: {
    alignItems: "center",
    width: "30%",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#000",
    padding: 10,
  },
  buttonTextStyle: {
    fontFamily: "Comfortaa-Regular",
  },
});

export default Splash;
