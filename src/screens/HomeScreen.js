import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Counter Screen Reducer"
        onPress={() => navigation.navigate("Counter2")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to ColorPicker Screen"
        onPress={() => navigation.navigate("ColorPicker")}
      />
      <Button
        title="Go to Json List"
        onPress={() => navigation.navigate("jsonList")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("BoxScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
  },
});

export default HomeScreen;
