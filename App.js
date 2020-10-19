import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import ColorScreen from "./src/screens/ColorScreen";
import ColorPicker from "./src/screens/ColorPicker";
import JsonList from "./src/screens/JsonList";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "App" }}
        />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Images" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Counter2" component={CounterScreenReducer} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="ColorPicker" component={ColorPicker} />
        <Stack.Screen name="jsonList" component={JsonList} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
