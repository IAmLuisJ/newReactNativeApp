/* eslint-disable quotes */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.style}>ImageList</Text>
      <ImageDetail title="Beach" imageSource=" " score="2" />
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    fontSize: 25,
  },
});

export default ImageScreen;
