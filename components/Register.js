import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dropdown,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // let genderData = [{
  //   value: 'Male'
  // }, {
  //   value: 'Female'
  // }, {
  //   value: 'Prefer Not To Say'
  // }];
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not to Say", value: "pnts" },
  ]);

  const setDropDown = () => {
    setOpen(!open);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Info</Text>
      <View style={styles.name}>
        <TextInput
          style={styles.nameInput}
          placeholder="First Name"
          placeholderTextColor={"black"}
          onChangeText={(firstName) => {
            setFirstName(firstName);
          }}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Last Name"
          placeholderTextColor={"black"}
          onChangeText={(lastName) => {
            setLastName(lastName);
          }}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={"black"}
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={"black"}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        placeholderTextColor={"black"}
        onChangeText={(confirmPassword) => {
          setConfirmPassword(confirmPassword);
        }}
      />
      <Text style={styles.inputTitle}>Gender</Text>
      {/* <Dropdown>
        label='Please Select One'
        data={genderData}
      </Dropdown> */}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setDropDown}
        setValue={(value) => {
          setValue(value);
        }}
        setItems={setItems}
        disableBorderRadius={true}
        textStyle={{
          fontSize: 16,
          fontFamily: "Comfortaa-Regular",
        }}
        style={{
          borderWidth: 0,
        }}
        containerStyle={{
          width: "85%",
          borderWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.12,
          shadowRadius: 8.0,
          elevation: 24,
        }}
        dropDownContainerStyle={{
          borderWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.12,
          shadowRadius: 8.0,
          elevation: 24,
        }}
      />
      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={() => {
          //Replace this with a function connecting to firebase
          navigation.navigate("Sports");
        }}
      >
        <Text style={styles.loginText}>Next</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    marginLeft: 30,
    fontFamily: "Comfortaa-Regular",
    marginTop: 20,
    marginBottom: 25,
  },
  inputTitle: {
    fontSize: 15,
    color: "black",
    borderRadius: 10,
    alignSelf: "flex-start",
    marginLeft: 30,
    fontFamily: "Comfortaa-Regular",
    marginTop: 20,
    marginBottom: 2,
  },
  nameInput: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#000",
    color: "black",
    borderRadius: 10,
    textAlign: "auto",
    width: "40%",
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
  textInput: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#000",
    color: "black",
    borderRadius: 10,
    textAlign: "auto",
    width: "85%",
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
  name: {
    flexDirection: "row",
  },
  loginButtonContainer: {
    fontSize: 16,
    backgroundColor: "#37D1A6",
    borderRadius: 10,
    width: 350,
    height: 55,
    margin: 20,
    marginTop: "35%",
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
  loginText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Comfortaa-Regular",
  },
});
export default Register;
