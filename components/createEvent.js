import React from "react";
import { View, Text } from "react-native";

export default function createEvent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Perfer Not to Say", value: "pnts" },
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
          setFirstName(setEmail);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={"black"}
        onChangeText={(password) => {
          setFirstName(setPassword);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        placeholderTextColor={"black"}
        onChangeText={(confirmPassword) => {
          setFirstName(setConfirmPassword);
        }}
      />
      <Text>Gender</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setDropDown}
        setValue={(value) => {
          setValue(value);
        }}
        onPress={(open) => console.log("was the picker open?", open)}
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
