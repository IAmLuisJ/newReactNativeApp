import React from "react";
import { Text, View } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>
        {props.title} {props.score}
      </Text>
    </View>
  );
};

export default ImageDetail;
