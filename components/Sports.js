import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
function Sports({ navigation }) {
  const [firstSport, setFirstSport] = useState("");
  const [secondSport, setSecondSport] = useState("");
  const [thirdSport, setThirdSport] = useState("");
  const [firstSportDifficulty, setFirstSportDifficulty] = useState([
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]);
  const [firstSportDifficultyOpen, setFirstSportDifficultyOpen] =
    useState(false);
  const [firstSportDifficultyValue, setFirstSportDifficultyValue] =
    useState(null);
  const setFirstSportDifficultyDropDown = () => {
    setFirstSportDifficultyOpen(!firstSportDifficultyOpen);
  };
  const [secondSportDifficulty, setSecondSportDifficulty] = useState([
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]);
  const [secondSportDifficultyOpen, setSecondSportDifficultyOpen] =
    useState(false);
  const [secondSportDifficultyValue, setSecondSportDifficultyValue] =
    useState(null);
  const setSecondSportDifficultyDropDown = () => {
    setSecondSportDifficultyOpen(!secondSportDifficultyOpen);
  };
  const [thirdSportDifficulty, setThirdSportDifficulty] = useState([
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]);
  const [thirdSportDifficultyOpen, setThirdSportDifficultyOpen] =
    useState(false);
  const [thirdSportDifficultyValue, setThirdSportDifficultyValue] =
    useState(null);
  const setThirdSportDifficultyDropDown = () => {
    setThirdSportDifficultyOpen(!thirdSportDifficultyOpen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports</Text>
      <Text style={styles.inputTitle}>
        Favorite Sport<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(firstSport) => {
          setFirstSport(firstSport);
        }}
      />

      <Text style={styles.inputTitle}>
        Skill Level<Text style={{ color: "red" }}>*</Text>
      </Text>
      <DropDownPicker
        firstSportDifficultyOpen={firstSportDifficultyOpen}
        firstSportDifficultyValue={firstSportDifficultyValue}
        items={firstSportDifficulty}
        setFirstSportDifficultyOpen={setFirstSportDifficultyDropDown}
        setFirstSportDifficultyValue={(firstSportDifficultyValue) => {
          setFirstSportDifficultyValue(firstSportDifficultyValue);
        }}
        setFirstSportDifficulty={setFirstSportDifficulty}
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

      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(secondSport) => {
          setSecondSport(secondSport);
        }}
      />

      <Text style={styles.inputTitle}>
        Skill Level<Text style={{ color: "red" }}>*</Text>
      </Text>
      <DropDownPicker
        secondSportDifficultyOpen={secondSportDifficultyOpen}
        secondSportDifficultyValue={secondSportDifficultyValue}
        items={secondSportDifficulty}
        setSecondSportDifficultyOpen={setSecondSportDifficultyDropDown}
        setSecondSportDifficultyValue={(secondSportDifficultyValue) => {
          setSecondSportDifficultyValue(secondSportDifficultyValue);
        }}
        setSecondSportDifficulty={setSecondSportDifficulty}
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

      <Text style={styles.inputTitle}>
        Third Favorite Sport<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(thirdSport) => {
          setThirdSport(thirdSport);
        }}
      />
      <Text style={styles.inputTitle}>
        Skill Level<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={() => {
          //Replace this with a function connecting to firebase
          console.log("Pressed login button");
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
    marginLeft: 30,
    fontFamily: "Comfortaa-Regular",
    marginTop: 20,
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
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
export default Sports;
