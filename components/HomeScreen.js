import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import firebase from "./firestoreDB";
//create a flatlist of touchable opacity that have 3 text components

function HomeScreen({ navigation }) {
  const [live, setLive] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("events")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((snapshot) => {
          temp.push(snapshot.data());
        });
        setData(temp);
      });
  }, []);
  if (live) {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.liveButton}
            onPress={() => {
              setLive(true);
            }}
          >
            <Text style={styles.buttonText}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => {
              setLive(false);
            }}
          >
            <Text style={styles.buttonText}>Scheduled</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Text style={styles.titleStyle}>Live Events</Text>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  console.log(item.sport);
                  navigation.navigate("viewEvent", {
                    sport: item.sport,
                    when: item.when,
                    where: item.where,
                    location: item.location,
                    description: item.description,
                    group: item.group,
                    groupSize: item.groupSize,
                    users: item.users,
                  });
                }}
              >
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
                    <Text style={styles.textStyle}>{item.sport}</Text>
                    <Text style={styles.textStyle}>{item.when}</Text>
                    <Text style={styles.textStyle}>{item.where}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.liveButton}
            onPress={() => {
              setLive(true);
            }}
          >
            <Text style={styles.buttonText}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => {
              setLive(false);
            }}
          >
            <Text style={styles.buttonText}>Scheduled</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Text style={styles.titleStyle}>Scheduled Events</Text>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/soccer.png")}
                    style={{ width: 75, height: 75, marginRight: 10 }}
                  />
                  <View style={{ marginLeft: "15%" }}>
                    <Text style={styles.textStyle}>{item.sport}</Text>
                    <Text style={styles.textStyle}>{item.when}</Text>
                    <Text style={styles.textStyle}>{item.where}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
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
export default HomeScreen;
