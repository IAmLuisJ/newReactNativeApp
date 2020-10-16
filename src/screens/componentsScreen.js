import React from "react";
import { Text, StyleSheet } from "react-native";

const componentsScreen = () => {
  return <Text style={stlyes.textStyle}>ComponentScreen</Text>;
};

const stlyes = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default componentsScreen;
