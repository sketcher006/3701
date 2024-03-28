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
    const [moveHistory, setMoveHistory] = useState(initialState.moveHistory);

    useEffect(() => {
        console.log("current board state: ", board);
    }, [board]);

    const handleMove = (index) => {
        if (!gameOver && board[index] === '') {
            const newBoard = makeMove(board, index, currentPlayer);
            const newHistory = moveHistory.slice(0, moveCounter+1);
            setBoard(newBoard);
            setMoveHistory([...newHistory, newBoard]);
            setMoveCounter(moveCounter + 1);
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
        setWinner(null);
        setGameOver(false);
        setMoveCounter(0);
        setCurrentPlayer('X');
        setMoveHistory([['', '', '', '', '', '', '', '', '']]);
    };

    const handleUndo = () => {
        if (moveHistory.length > 1) {
            const newHistory = [...moveHistory];
            // newHistory.pop(); // Remove the latest move
            const prevBoard = moveHistory[moveCounter-1];
            // setMoveHistory(newHistory);
            setBoard(prevBoard);
            setMoveCounter(moveCounter - 1);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            setWinner(null);
            setGameOver(false);
        }
    };

    const handleRedo = () => {
        if (moveHistory.length > 1) {
            // const newHistory = [...moveHistory];
            const nextBoard = moveHistory[moveCounter+1];
            // setMoveHistory(newHistory);
            setBoard(nextBoard);
            setMoveCounter(moveCounter + 1);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            setWinner(null);
            setGameOver(false);
        }
    };

    const DEBUGcount = () => {
        console.log("move counter: " + moveCounter);
    };
    const DEBUGhistoyLength = () => {
        console.log("history length: " + moveHistory.length);
    };

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.heading}>Tic-Tac-Toe-Bro!</Text>
            </View>

            <View style={styles.buttonsContainer}>
            <View>
                <Button title='<' onPress={handleUndo} disabled={moveCounter < 1}></Button>
            </View>

                <View style={styles.buttons}>
                    <Button title='New Game' onPress={handleNewGame}></Button>
                </View>
                <View>
                    <Button title='>' onPress={handleRedo} disabled={moveCounter === moveHistory.length-1}></Button>
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



            {winner !== null && (
                <View style={styles.winnerContainer}>
                    <Text style={styles.winnerText}>Winner: {winner}</Text>
                </View>
            )}
            {/* <Text>Debug console operations</Text>
            <View style={styles.buttonsContainer}>
                <View>
                    <Button title='cnt' onPress={DEBUGcount}></Button>
                </View>
                <View>
                    <Button title='his' onPress={DEBUGhistoyLength}></Button>
                </View>

            </View> */}
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