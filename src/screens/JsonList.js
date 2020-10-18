import React, { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";

const JsonList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://www.skycloud-apps.com/GameCards.json"
      );
      let json = await response.json();
      return setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Json List</Text>
      <Button title="Grab Data" onPress={() => fetchData()} />
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={(item) => {
          <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default JsonList;
