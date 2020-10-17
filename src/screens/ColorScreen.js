import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const createColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return setColors(colors.concat(randomColor));
  };

  return (
    <View>
      <Text>ColorScreen</Text>
      <Button title="Generate Color" onPress={() => createColor()} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return <Text style={{ color: `#${item}` }}>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ColorScreen;
