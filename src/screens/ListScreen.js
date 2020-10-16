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
    <View>
      <Text style={styles.basic}>List Screen</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  basic: {
    fontSize: 30,
  },
});
export default ListScreen;
