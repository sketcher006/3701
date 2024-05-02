//Products.js

import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetails } from './ProductDetails';
import { useNavigation } from '@react-navigation/native';
import Order from './Order';

const Stack = createStackNavigator();

// should be in a datamodel file
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

const ProdList = () => {
    const navigation = useNavigation();
    const selectProduct = (id) => {
        const prod = products.find((prod) => prod.id === id);
        navigation.navigate('ProductDetails', { prod });
    };
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%"}}
                data={products}
                keyExtractor={(prod) => prod.id}
                renderItem={({ item }) => (
                    <View style={styles.productView}>
                        <Pressable onPress={selectProduct.bind(null, item.id)}>
                            <Text>Product: {item.name} Price: {item.price}{" "}</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}

export const Products = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProdList" component={ProdList} options={{headerShown: false}}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/> */}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productView: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
