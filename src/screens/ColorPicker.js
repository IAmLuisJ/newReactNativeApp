import React, { useReducer } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colorIncrement = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const ColorPicker = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Text>Color</Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.blue},${state.green})`,
        }}
      />
      <ColorCounter
        name="red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * colorIncrement })
        }
      />
      <ColorCounter
        name="blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * colorIncrement })
        }
      />
      <ColorCounter
        name="green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * colorIncrement })
        }
      />
    </View>
  );
};

export default ColorPicker;
