import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
  SafeAreaView,
  FlatList,
  DatePicker,
  Button,
  CheckBox,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
export default function createEvent({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [groupSize, setGroupSize] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Perfer Not to Say", value: "pnts" },
  ]);
  const [sports, setSports] = useState([
    { label: "Basketball", value: "basketball" },
    { label: "Soccer", value: "soccer" },
    { label: "Volleyball", value: "volleyball" },
    { label: "Spikeball", value: "spikeball" },
  ]);
  const [date, setDate] = useState(new Date());
  const [openVisibility, setOpenVisibility] = useState(false);
  const [valueVis, setValueVis] = useState(null);
  const [itemsVis, setItemsVis] = useState([
    { label: "Public", value: "public" },
    { label: "Private", value: "private" },
  ]);
  const [beginnerIsSelected, setBeginnerSelection] = useState(false);
  const [intermediateIsSelected, setIntermediateSelection] = useState(false);
  const [advancedIsSelected, setAdvancedSelection] = useState(false);
  const setDropDown = () => {
    setOpen(!open);
  };
  const setDropDownVis = () => {
    setOpenVisibility(!openVisibility);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Event</Text>
        <Text style={styles.header}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Event Name"
          placeholderTextColor={"black"}
          onChangeText={(name) => {
            setName(name);
          }}
        />
        <Text style={styles.header}>Visibility</Text>
        <DropDownPicker
          open={openVisibility}
          value={valueVis}
          items={itemsVis}
          setOpen={setDropDownVis}
          setValue={(value) => {
            setValueVis(value);
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
        <Text style={styles.header}>Difficulty</Text>
        <View style={styles.checkBoxContainerBeginner}>
          <CheckBox
            value={beginnerIsSelected}
            onValueChange={setBeginnerSelection}
          />
          <Text style={styles.difficultyText}>Beginner</Text>
        </View>

        <View style={styles.checkBoxContainerIntermediate}>
          <CheckBox
            value={intermediateIsSelected}
            onValueChange={setIntermediateSelection}
            style={styles.checkBox}
          />
          <Text style={styles.difficultyText}>Intermediate</Text>
        </View>

        <View style={styles.checkBoxContainerAdvanced}>
          <CheckBox
            value={advancedIsSelected}
            onValueChange={setAdvancedSelection}
            style={styles.checkBoxAdvanced}
          />
          <Text style={styles.difficultyText}>Advanced</Text>
        </View>

        <Text style={styles.header}>Group Size</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Group Size"
          placeholderTextColor={"black"}
          onChangeText={(groupSize) => {
            setGroupSize(groupSize);
          }}
        />
        <Text style={styles.header}>Pick Sport</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={sports}
          setOpen={setDropDown}
          setValue={(value) => {
            setValue(value);
          }}
          onPress={(open) => {}}
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

        {/* <Text style={styles.header}>Date & Time</Text>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
        <Text style={styles.header}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          placeholderTextColor={"black"}
          onChangeText={(desc) => {
            setDescription(desc);
          }}
        />
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => {
            //Replace this with a function connecting to firebase
            navigation.navigate("viewEvent");
          }}
        >
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  checkBoxContainerBeginner: {
    flexDirection: "row",
    marginBottom: 10,
  },
  checkBoxContainerIntermediate: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 30,
  },
  checkBoxContainerAdvanced: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 5,
  },
  // checkboxIntermediate: {
  //   marginLeft: 10,
  // },
  // checkBoxAdvanced: {
  //   marginLeft: 5,
  // },
  title: {
    fontSize: 40,
    color: "black",
    borderRadius: 10,
    alignSelf: "flex-start",
    marginLeft: 60,
    fontFamily: "Comfortaa-Regular",
    marginTop: 20,
    marginBottom: 5,
  },
  header: {
    fontSize: 18,
    color: "black",
    fontFamily: "Comfortaa-Bold",
    marginBottom: 10,
    marginTop: 20,
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
  difficultyText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Comfortaa-Bold",
  },
  descriptionInput: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#000",
    color: "black",
    borderRadius: 10,
    textAlign: "auto",
    width: "85%",
    height: 200,
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
