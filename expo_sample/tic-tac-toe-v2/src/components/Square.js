// Square.js
import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Pressable  } from "react-native";
// import color from "../constants/color";

// key={i} text={s} board={board} setBoard={setBoard} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} moveCounter={moveCounter}
// setMoveCounter={setMoveCounter} handleMove={handleMove}

export const Square = ({text, currentPlayer, handleMove}) => {
    const [symbol, setSymbol] = useState(text);

    useEffect(() => {
        setSymbol(text); // Update symbol when text prop changes
    }, [text]);

    // const handlePress = () => {
    //     // toggle between X and O when the square is empty
    //     if (symbol === '') {
    //         let newSymbol = moveCounter % 2 === 0 ? 'X' : 'O';
    //         setSymbol(newSymbol);
    //         updateBoard(key, newSymbol);
    //         incrementMoveCounter();
    //     }
    // };
    return (
        <Pressable style={styles.box} onPress={handleMove}>
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