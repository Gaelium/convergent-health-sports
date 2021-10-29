import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "react-native-elements";
function Sports({ navigation }) {
  const [primarySport, setPrimarySport] = useState("");
  const [secondarySport, setSecondarySport] = useState("");
  const [tertiarySport, setTertiarySport] = useState("");
  const [primaryBeginnerChecked, setPrimaryBeginnerChecked] = useState(false);
  const [secondaryBeginnerChecked, setSecondaryBeginnerChecked] =
    useState(false);
  const [tertiaryBeginnerChecked, setTertiaryBeginnerChecked] = useState(false);
  const [primaryIntermediateChecked, setPrimaryIntermediateChecked] =
    useState(false);
  const [secondaryIntermediateChecked, setSecondaryIntermediateChecked] =
    useState(false);
  const [tertiaryIntermediateChecked, setTertiaryIntermediateChecked] =
    useState(false);
  const [primaryAdvancedChecked, setPrimaryAdvancedChecked] = useState(false);
  const [secondaryAdvancedChecked, setSecondaryAdvancedChecked] =
    useState(false);
  const [tertiaryAdvancedChecked, setTertiaryAdvancedChecked] = useState(false);

  const [primaryBeginnerDisabled, setPrimaryBeginnerDisabled] = useState(false);
  const [secondaryBeginnerDisabled, setSecondaryBeginnerDisabled] =
    useState(false);
  const [tertiaryBeginnerDisabled, setTertiaryBeginnerDisabled] =
    useState(false);
  const [primaryIntermediateDisabled, setPrimaryIntermediateDisabled] =
    useState(false);
  const [secondaryIntermediateDisabled, setSecondaryIntermediateDisabled] =
    useState(false);
  const [tertiaryIntermediateDisabled, setTertiaryIntermediateDisabled] =
    useState(false);
  const [primaryAdvancedDisabled, setPrimaryAdvancedDisabled] = useState(false);
  const [secondaryAdvancedDisabled, setSecondaryAdvancedDisabled] =
    useState(false);
  const [tertiaryAdvancedDisabled, setTertiaryAdvancedDisabled] =
    useState(false);
  return (
    /*<CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
  onPress={() => this.setState({checked: !this.state.checked})}
/>*/
    <View style={styles.container}>
      <Text style={styles.title}>Sports</Text>
      <Text style={styles.inputTitle}>
        Primary Sport<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(primarySport) => {
          setPrimarySport(primarySport);
        }}
      />
      <Text style={styles.inputTitle}>
        Skill Level<Text style={{ color: "red" }}>*</Text>
      </Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={primaryBeginnerDisabled}
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          onPress={(primaryBeginnerChecked, setPrimaryBeginnerChecked) => {
            if (!primaryBeginnerChecked) {
              setPrimaryIntermediateDisabled(true);
              setPrimaryAdvancedDisabled(true);
            } else {
              setPrimaryIntermediateDisabled(false);
              setPrimaryAdvancedDisabled(false);
            }
            setPrimaryBeginnerChecked(!primaryBeginnerChecked);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.inputTitle}>Beginner</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={primaryIntermediateDisabled}
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          onPress={(
            primaryIntermediateChecked,
            setPrimaryIntermediateChecked
          ) => {
            if (!primaryIntermediateChecked) {
              setPrimaryBeginnerDisabled(true);
              setPrimaryAdvancedDisabled(true);
            } else {
              setPrimaryBeginnerDisabled(false);
              setPrimaryAdvancedDisabled(false);
            }
            setPrimaryIntermediateChecked(!primaryIntermediateChecked);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.inputTitle}>Intermediate</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={primaryAdvancedDisabled}
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          onValueChange={(
            primaryAdvancedChecked,
            setPrimaryAdvancedChecked
          ) => {
            if (!primaryAdvancedChecked) {
              setPrimaryBeginnerDisabled(true);
              setPrimaryIntermediateDisabled(true);
            } else {
              setPrimaryBeginnerDisabled(false);
              setPrimaryIntermediateDisabled(false);
            }
            setPrimaryAvancedChecked(!primaryAdvancedChecked);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.inputTitle}>Advanced</Text>
      </View>
      <Text style={styles.inputTitle}>
        Secondary Sport<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(secondarySport) => {
          setSecondarySport(secondarySport);
        }}
      />
      <Text style={styles.inputTitle}>
        Skill Level<Text style={{ color: "red" }}>*</Text>
      </Text>
      <Text style={styles.inputTitle}>
        Tertiary Sport<Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter sport..."
        placeholderTextColor={"black"}
        onChangeText={(tertiarySport) => {
          setTertiarySport(tertiarySport);
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
