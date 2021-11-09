import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function yourProfile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/profilePic.png")}
          style={{ width: 170, height: 170, marginTop: 15 }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Doug Smith</Text>
        </View>
        <Text style={styles.locationText}>San Francisco, CA</Text>
        <Text style={styles.mainText}>
              I’m looking for tips around capturing the milky way. 
              I have a 6D with a 24-100mm...
        </Text>
        <Text style={styles.upcomingEventsText}>UPCOMING EVENTS</Text>

        <TouchableOpacity style={styles.listItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/basketball.png")}
              style={{ width: 75, height: 75, marginRight: 10 }}
            />
            <View style={{ marginLeft: "15%" }}>
              <Text style={styles.textStyle}>{"Basketball"}</Text>
              <Text style={styles.textStyle}>{"Tuesday"}</Text>
              <Text style={styles.textStyle}>{"Gregory Gym"}</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.seeMoreText}>SEE MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    fontFamily: "Comfortaa-Regular",
  },
  locationText: {
    fontSize: 18,
    fontFamily: "Comfortaa-Bold",
    marginBottom: 30,
  },
  upcomingEventsText: {
    marginTop: 30,
    fontSize: 13,
    fontFamily: "Comfortaa-Bold",
    justifyContent: "flex-start",
    marginLeft: "3%",
  },
  seeMoreText: {
    fontSize: 13,
    fontFamily: "Comfortaa-Bold",
    justifyContent: "flex-end",
    marginTop: "3%",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: "5%",
    height: "8%",
  },
  mainText: {
    fontFamily: "Comfortaa-Regular",
    flexDirection: "row",
    fontSize: 14,
    alignSelf: "center",
  },
  settingsButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    width: "90%",
    height: "8%",
    backgroundColor: "#000000",
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
