import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function viewEvent(props) {
  const [joined, setJoined] = useState(false);
  const [groups, setGroups] = useState(props.route.params.group);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.route.params.sport}</Text>
        <Text style={styles.titleText}>
          {groups}/{props.route.params.groupSize}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.buttonText}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.buttonText}>Advanced</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainText}>
          <Text>Description</Text>
          <Text>{props.route.params.description}</Text>
        </View>
        <View style={styles.mainButtonContainer}>
          <TouchableOpacity
            style={styles.joinButton}
            onPress={() => {
              setJoined(!joined);
              if (joined) {
                setGroups(groups - 1);
              } else {
                setGroups(groups + 1);
              }
            }}
          >
            <Text style={styles.buttonText}>{joined ? "Joined" : "Join"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sportsButton}>
            <Text style={styles.buttonText}>{props.route.params.sport}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationButton}>
            <Text style={styles.buttonText}>{props.route.params.where}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateButton}>
            <Text style={styles.buttonText}>{props.route.params.when}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.viewAttendees}
        onPress={() => {
          props.navigation.navigate("viewAttendees");
        }}
      >
        <Text style={styles.buttonText}>View Attendees</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontFamily: "Comfortaa-Regular",
    margin: "3%",
    marginBottom: "3%",
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: "3%",
    height: "8%",
  },
  mainContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  mainButtonContainer: {
    width: "40%",
    marginRight: "10%",
  },
  mainText: {
    width: "40%",
    marginLeft: "10%",
  },
  joinButton: {
    paddingRight: "15%",
    paddingLeft: "15%",
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#37D1A6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  sportsButton: {
    paddingRight: "15%",
    paddingLeft: "15%",
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#818785",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  locationButton: {
    paddingRight: "15%",
    paddingLeft: "15%",
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#818785",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  dateButton: {
    paddingRight: "15%",
    paddingLeft: "15%",
    paddingTop: "5%",
    paddingBottom: "5%",
    backgroundColor: "#818785",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: "3%",
    width: "40%",
    height: "80%",
    backgroundColor: "#818785",
    borderRadius: 10,
  },
  viewAttendees: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
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
