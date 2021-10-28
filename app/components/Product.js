import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Product = ({ title, image, price }) => {
  return (
    <View style={{ width: 150, height: 200, position: "relative" }}>
      <ImageBackground
        style={{ width: 150, height: 200 }}
        source={{
          uri: `${image}`,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "#3e1",
          width: 200,
          bottom: 0,
          height: 75,
        }}
      >
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
