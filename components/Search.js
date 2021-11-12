import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Search() {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [limitedDataSource, setLimitedDataSource] = useState([]);
  const [loadAmount, setLoadAmount] = useState(3);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setLimitedDataSource(responseJson.slice(0, loadAmount));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loadAmount]);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
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
      // Flat List Item
      <TouchableOpacity onPress={() => getItem(item)}>
        <View style={styles.itemStyle}>
          <Text>
            {item.id}
            {"."}
            {item.title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
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
          data={[...limitedDataSource, { addButton: true }]}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
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
    alignItems: "flex-end",
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
});
