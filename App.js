/* eslint-disable quotes */
import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import componentsScreen from "./src/screens/componentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import { startClock } from "react-native-reanimated";
import ImageScreen from "./src/screens/ImageScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
