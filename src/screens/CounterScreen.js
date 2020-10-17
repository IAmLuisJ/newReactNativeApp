import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const style = StyleSheet.create({
    text: {
      fontSize: 25,
      textAlign: "center",
    },
  });

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={style.text}>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
