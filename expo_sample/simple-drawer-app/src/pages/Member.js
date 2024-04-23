import { View, Text, StyleSheet } from 'react-native';

export const Member = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Member page</Text>
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