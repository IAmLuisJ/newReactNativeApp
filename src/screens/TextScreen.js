import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [textInput, setTextInput] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={textInput}
        onChangeText={(e) => setTextInput(e)}
      />
      <Text>Input is {textInput}</Text>
      {textInput.length > 5 ? (
        <Text>Input is more than 5 chracters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
