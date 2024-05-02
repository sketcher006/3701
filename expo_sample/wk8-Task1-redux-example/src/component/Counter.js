// components/Counter.js

import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    increment,
    decrement,
    incrementByValue,
    incrementAsync,
    selectCount
} from '../redux/counterSlice';

export const Counter = () => {
    const [value, setValue] = useState("5");
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const getVal = () => {
        const ret = parseInt(value) || 0;
        return ret;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Counter is: {count}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Input Value</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
                    <Text style={styles.buttonText}>Inc</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
                    <Text style={styles.buttonText}>Dec</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementByValue(getVal()))}>
                    <Text style={styles.buttonText}>Inc by value</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementAsync(getVal()))}>
                    <Text style={styles.buttonText}>Async Inc</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        flexDirection: "row",
        margin: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        width: 150,
    },
    inputLabel: {
        marginRight: 10,
        fontSize: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 5,
        fontSize: 16,
    },
});