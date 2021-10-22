import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
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
      <View style={styles.imageView}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.register}>
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>
        </View>
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
  buttonContainer: {
    justifyContent: "flex-end",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    alignItems: "center",
    width: "45%",
    borderRadius: 10,
    borderColor: "#03A678",
    backgroundColor: "#03A678",
    padding: 15,
    marginRight: 20,
  },
  register: {
    alignItems: "center",
    width: "45%",
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#000",
    padding: 15,
  },
  buttonTextStyle: {
    fontFamily: "Comfortaa-Regular",
  },
});

export default Splash;
