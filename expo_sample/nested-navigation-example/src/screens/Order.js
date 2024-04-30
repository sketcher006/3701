//Order.js
import { Text, View, StyleSheet } from 'react-native';
export const Order = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Order page</Text>
        </View>
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