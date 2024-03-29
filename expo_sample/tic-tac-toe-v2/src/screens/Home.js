// Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { initialState, handleMove, handleNewGame, handleUndo, handleRedo } from '../datamodel/game';
import Board from '../components/Board';

export default Home = function ({navigation}) {
    const[gameState, setGameState] = useState(initialState);
    const navToRules = () => navigation.navigate('Rules');
    const navToCredit = () => navigation.navigate('Credit');

    // DEBUG
    // useEffect(() => {
    //     console.log("   board state: ", gameState.board);
    //     console.log("     moveCount: ", gameState.moveCount);
    //     console.log("history length: ", gameState.moveHistory.length);
    // }, [gameState]);

    const handleMoveClick = (index) => {
        setGameState((prevState) => handleMove(prevState, index));
    };

    const handleNewGameClick = () => {
        setGameState(handleNewGame());
    };

    const handleUndoClick = () => {
        setGameState((prevState) => handleUndo(prevState));
    };

    const handleRedoClick = () => {
        setGameState((prevState) => handleRedo(prevState));
    };

    const { board, moveCount, winner, moveHistory } = gameState;
    
    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.heading}>Tic-Tac-Toe-Bro!</Text>
            </View>

            <View style={styles.buttonsContainer}>
            <View>
                <Button title='<' onPress={handleUndoClick} disabled={moveCount < 1}></Button>
            </View>

                <View style={styles.buttons}>
                    <Button title='New Game' onPress={handleNewGameClick} disabled={moveHistory.length < 2}></Button>
                </View>
                <View>
                    <Button title='>' onPress={handleRedoClick} disabled={moveCount === moveHistory.length-1}></Button>
                </View>


            </View>

            <View style={styles.gameBoard}>
                <Board 
                    board={board}
                    handleMove={handleMoveClick}
                />
            </View>
        
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button title='Rules' onPress={navToRules}>
                        Go to rules
                    </Button>
                </View>

                <View style={styles.buttons}>
                    <Button title='Credits' onPress={navToCredit}>
                        Go to credits
                    </Button>
                </View>
            </View>


            {winner !== null && (
                <View style={styles.winnerContainer}>
                    <Text style={styles.winnerText}>{winner}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC3FF', // main page bg color
        alignItems: 'center',
        margin:20,
    },
    heading: {
        fontSize: 40,
        margin: 20,
    },      
    gameBoard: { // the yellow part
        margin: 40,
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    buttons: {
        marginHorizontal: 10,
        width: 90,
    },
    winnerContainer: {
        margin: 20,
    },
    winnerText: {
        fontSize: 30,
    },
})