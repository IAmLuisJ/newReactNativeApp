import React, { useReducer } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colorIncrement = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action === { type: "string", payload: int}

  switch (action.type) {
    case "CHANGE_RED":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "CHANGE_GREEN":
      return state.green + action.payload > 255 ||
        state.red + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "CHANGE_BLUE":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.blue},${state.green})`,
        }}
      />
      <ColorCounter
        name="red"
        onIncrease={() =>
          dispatch({ type: "CHANGE_RED", payload: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_RED", payload: -1 * colorIncrement })
        }
      />
      <ColorCounter
        name="blue"
        onIncrease={() =>
          dispatch({ type: "CHANGE_BLUE", payload: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ type: "CHANEL_BLUE", payload: -1 * colorIncrement })
        }
      />
      <ColorCounter
        name="green"
        onIncrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: -1 * colorIncrement })
        }
      />
    </View>
  );
};

export default ColorPicker;
