import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import Product from "../components/Product";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexBasis: "15%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: 500,
          }}
        >
          <Feather name="menu" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 12 }}>All Products</Text>
          <View
            style={{
              flexDirection: "row",
              width: 80,
              justifyContent: "space-evenly",
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TouchableOpacity>
              <Feather name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        {products &&
          products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
