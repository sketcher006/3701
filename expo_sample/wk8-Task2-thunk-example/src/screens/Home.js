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
  ScrollView,
} from "react-native";
import { loadProductData, loadProductList, selectProduct } from "../redux/productSlice";
import { fetchCats } from "../service/apiService";

const Home = () => {
  const [productId, setProductId] = useState("1");
  const dispatch = useDispatch();
  const { productData, loading, error } = useSelector(selectProduct);
  const [categories, setCategories] = useState([]);
  const [catloading, setCatLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("");

  const handleCatPress = (cat) => {
    setCurrentCategory(cat);
    dispatch(loadProductList(cat));
  }

  useEffect(() => {
    setCatLoading(true);
    fetchCats().then((data) => {
      setCategories(data);
      setCatLoading(false);
    }).catch((e) => {
      console.log("Error fetching categories: ", e);
      setCatLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("!!!Product data has been updated: ", productData);
  }, [productData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.spacer}></View>
        <View >
          {!catloading ? categories.map((cat, index) => {
            return <Button key={index} title={cat} onPress={() => handleCatPress(cat)} />;
          }) : <ActivityIndicator />}
        </View>

        <View style={styles.content}>

          {loading ? (
            <View style={styles.activity}>
              <ActivityIndicator size="large" color="lightblue" />
            </View>
          ) : error ? (
            <Text>Error: {error}</Text>
          ) : currentCategory && productData[currentCategory] ? (
            Object.values(productData[currentCategory]).map((prod, index) => (
              <View key={index} style={styles.card}>
                <Text>- {prod.title}</Text>
                {/* <Text>Category: {prod.category}</Text> */}
                {/* <Text>Description: {prod.description}</Text> */}
                {/* <Text>Price: ${prod.price}</Text> */}
              </View>
            ))
          ) : (
            <Text style={styles.placeholder}>Please select category</Text>
          )}

        </View>

      </View>
    </ScrollView>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  spacer: {
    height: 50,
  },
  card: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
  },
  placeholder: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  activity: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    margin: 60,
  },
});
