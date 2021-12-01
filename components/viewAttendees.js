import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function viewAttendees({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Attendees</Text>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile1.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"John Row"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile2.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Jim Garrison"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile3.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Tommy Soul"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profilePic.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Doug Smith"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile4.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Charlie Fuller"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile5.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Sharon Gayle"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile6.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Jon J"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} 
              >
                <Image
                  source={require("../assets/profile7.png")}
                  style={{ width: 75, height: 75, marginRight: 10 }}
                />
                <View style={{ marginLeft: "15%" }}>
                  <Text style={styles.textStyle}>{"Abigail Claire"}</Text>
                  <Text style={styles.textStyle}>{"Austin, TX"}</Text>
                </View>
              </View>
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: "10%",
    height: "8%",
  },
  liveButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "35%",
    height: "60%",
    marginRight: "5%",
    backgroundColor: "#F23D3D",
    borderRadius: 10,
  },
  scheduleButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5%",
    width: "35%",
    height: "60%",
    backgroundColor: "#37D1A6",
    borderRadius: 10,
  },
  list: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: {
    width: "100%",
    height: "100%",
    marginLeft: "10%",
  },
  listItem: {
    width: "90%",
    height: "5%",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
    padding: "16%",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.0,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Comfortaa-Regular",
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: "Comfortaa-Regular",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Comfortaa-Regular",
    color: "white",
  },
});