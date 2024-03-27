// Square.js
import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable  } from "react-native";
// import color from "../constants/color";

export const Square = ({text}) => {
    const [symbol, setSymbol] = useState(text);
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const handlePress = () => {
        // toggle between X and O when the square is empty
        if(symbol === ''){
            setSymbol(currentPlayer);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
        
    };
    return (
        <Pressable style={styles.box} onPress={handlePress}>
            <Text style={styles.innerText}>{symbol}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    box: { // red box
        width: 85,
        height: 85,        
        backgroundColor: '#FF0000',
        padding: 10,
        margin: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerText: {
      fontSize: 40,
      color: '#FFFFFF',
    },
  });