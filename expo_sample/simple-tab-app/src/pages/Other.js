import { View, Text, StyleSheet } from 'react-native';

export const Other = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Other page</Text>
        </View>
    );
};

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