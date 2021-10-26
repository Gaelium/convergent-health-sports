import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import AppLoading from "expo-app-loading";
function Splash({ navigation }) {
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
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginTextStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerTextStyle}>Register</Text>
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
    borderWidth: 3,
    borderColor: "#000",
    backgroundColor: "#FFF",
    padding: 15,
    marginRight: 20,
  },
  register: {
    alignItems: "center",
    width: "45%",
    backgroundColor: "#03A678",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#03A678",
    padding: 15,
  },
  loginTextStyle: {
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
  },
  registerTextStyle: {
    fontFamily: "Comfortaa-Regular",
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Splash;
