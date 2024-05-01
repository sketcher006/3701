// src/screens/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from "react-native";
import { loadProductData, selectProduct } from "../redux/productSlice";

const Home = () => {
  const [productId, setProductId] = useState("1");
  const dispatch = useDispatch();
  const { productData, loading, error } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(loadProductData(productId));
  }, []);

  useEffect(() => {
    console.log("!!!Product data has been updated: ", productData);
  }, [productData]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <Text>{productData[productId]?.title}</Text>
      )}
      <TextInput
        placeholder="input product id"
        value={productId}
        onChangeText={setProductId}
      />
      <Button
        title="Reload Product"
        onPress={() => {
          dispatch(loadProductData(productId));
        }}
      />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
