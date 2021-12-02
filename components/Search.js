import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "./firestoreDB";
export default function Search() {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [limitedDataSource, setLimitedDataSource] = useState([]);
  const [loadAmount, setLoadAmount] = useState(2);
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
        setMasterDataSource(temp);
        setFilteredDataSource(temp);
        setLimitedDataSource(temp.slice(0, loadAmount));
      });
  }, [loadAmount]);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      //We need to fix search
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.sport
          ? item.sport.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
    setLimitedDataSource(filteredDataSource.slice(0, loadAmount));
  };

  const ItemView = ({ item }) => {
    if (item.addButton) {
      return (
        <TouchableOpacity
          onPress={() => {
            setLoadAmount(loadAmount + 3);
          }}
        >
          <View style={styles.itemStyle}>
            <Text>Load More</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
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
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          clearButtonMode="while-editing"
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          style={styles.flatlist}
          data={[...limitedDataSource, { addButton: true }]}
          renderItem={({ item }) => <ItemView item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
  },
  itemStyle: {
    width: "95%",
    height: 75,
    marginTop: "2%",
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: "-4%",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.0,
  },
  textInputStyle: {
    fontSize: 16,
    backgroundColor: "white",
    borderColor: "#000",
    color: "black",
    borderRadius: 10,
    textAlign: "auto",
    width: "90%",
    height: 50,
    margin: 10,
    marginBottom: "10%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
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
