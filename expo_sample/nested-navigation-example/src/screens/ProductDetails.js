//ProductDetails.js
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Order } from './Order';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const ProductDetailCom = ({ navigation, route }) => {
    const { id, name, price } = route.params.prod || {};

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Detailss</Text>
            <Text>Product ID: {id}</Text>
            <Text>Product Name: {name}</Text>
            <Text>Product Price: {price}</Text>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export const ProductDetails = ({route}) => {
    return (
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen 
                name="ProductDetCom" 
                component={ProductDetailCom} 
                initialParams={{ prod: route.params.prod }} 

                options={
                    {
                        headerShown: false, 
                        tabBarLabel: 'Productz Details',
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="pricetag" size={size} color={color} />
                        ),
                    }
                }
                
            />
            <Tabs.Screen 
                name="Order" 
                component={Order} 
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="cart" size={size} color={color} />
                        ),
                    }
                }
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});
