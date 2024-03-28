// Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { initialState, makeMove, checkWinner } from '../datamodel/game';
import Board from '../components/Board';

export default Home = function ({navigation}) {

    const navToRules = () => navigation.navigate('Rules');
    const navToCredit = () => navigation.navigate('Credit');
    
    const [board, setBoard] = useState(initialState.board);
    const [currentPlayer, setCurrentPlayer] = useState(initialState.currentPlayer);
    const [winner, setWinner] = useState(initialState.winner);
    const [gameOver, setGameOver] = useState(initialState.gameOver);
    const [moveCounter, setMoveCounter] = useState(initialState.moveCount);

    useEffect(() => {
        console.log("current board state: ", board);
    }, [board]);

    const handleMove = (index) => {
        if (!gameOver && board[index] === '') {
            const newBoard = makeMove(board, index, currentPlayer);
            setBoard(newBoard);
            setMoveCounter(moveCounter + 1);
            console.log("move counter: " + moveCounter);
            // Check for winner after each move
            const newWinner = checkWinner(newBoard);
            if (newWinner) {
              setWinner(newWinner);
              setGameOver(true);
            } else {
              // Switch current player if no winner yet
              setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            }
          }
    };

    const handleNewGame = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);        
        setMoveCounter(0);
        setCurrentPlayer('X');
    };

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.heading}>Tic-Tac-Toe-Bro!</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View>
                    <Button title='<' onPress={navToRules}></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title='New Game' onPress={handleNewGame}></Button>
                </View>
                <View>
                    <Button title='>' onPress={navToCredit}></Button>
                </View>
            </View>

            <View style={styles.gameBoard}>
                <Board 
                    board={board}
                    setBoard={setBoard}
                    currentPlayer={currentPlayer}
                    setCurrentPlayer={setCurrentPlayer}
                    moveCounter={moveCounter} 
                    setMoveCounter={setMoveCounter} 
                    handleMove={handleMove}
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
})