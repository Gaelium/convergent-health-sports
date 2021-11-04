import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
function Username({ navigation }) {
  const [username, setUsername] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Username</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={"black"}
        onChangeText={(username) => {
          setUsername(username);
        }}
      ></TextInput>
      <TouchableOpacity
        style={styles.usernameButtonContainer}
        onPress={() => {
          //Replace this with a function connecting to firebase
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={styles.usernameText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{ marginLeft: 19, marginRight: 19}}>By signing up, you agree to Bounce's Terms of Service and Privacy Policy.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
  },
  title: {
    fontSize: 40,
    color: "black",
    borderRadius: 10,
    alignSelf: "flex-start",
    marginLeft: 30,
    fontFamily: "Comfortaa-Regular",
    marginTop: 20,
    marginBottom: 25,
  },
  textInput: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#000",
    color: "black",
    borderRadius: 10,
    textAlign: "auto",
    width: 350,
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Comfortaa-Regular",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.0,

    elevation: 24,
  },
  usernameButtonContainer: {
    fontSize: 16,
    backgroundColor: "#37D1A6",
    borderRadius: 10,
    width: 350,
    height: 55,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.0,

    elevation: 24,
  },
  usernameText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Comfortaa-Regular",
  },
});
export default Username;
