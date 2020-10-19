import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useReducer } from "react";

const increment = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + action.payload };
    case "DECREASE":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const style = StyleSheet.create({
    text: {
      fontSize: 25,
      textAlign: "center",
    },
  });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "INCREASE", payload: increment })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "DECREASE", payload: increment * -1 })}
      />
      <Text style={style.text}>Current Count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreenReducer;
