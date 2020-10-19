import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Luis" },
    { name: "Bob" },
    { name: "Allan" },
    { name: "OtherGuy" },
    { name: "newNewGuy" },
  ];

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>List Screen</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.listStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "space-between",
    ...StyleSheet.absoluteFillObject,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    margin: 20,
  },
  listStyle: {
    borderWidth: 1,
    alignSelf: "center",
    margin: 2,
  },
});

export default ListScreen;
