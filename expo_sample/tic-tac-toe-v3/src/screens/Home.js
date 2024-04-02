// Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { initialState, handleMove, handleNewGame, handleUndo, handleRedo, displaySavedData } from '../datamodel/game';
import { handleSave, handleLoad, handleClear, handleLoadModal } from '../datamodel/storage';
import Board from '../components/Board';

export default Home = function ({navigation}) {
    const[gameState, setGameState] = useState(initialState);
    const[modalVisible, setModalVisible] = useState(false);
    const[loadedData, setLoadedData] = useState(null);
    const navToRules = () => navigation.navigate('Rules');
    const navToCredit = () => navigation.navigate('Credit');

    const handleSaveClick = () => {
        handleSave(gameState);
    };

    const handleClearClick = () => {
        handleClear();
    };
    
    const { board, moveCount, winner, moveHistory, winningIndexes } = gameState;

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

    const handleModalOpen = async (modalType) => {
        if (modalType === "load") {
            try {
                const loadedData = await handleLoadModal(); // returns object with previous saved game data
                console.log("loadedData", loadedData);
                console.log(typeof loadedData);
                setLoadedData(loadedData);
                // const formattedData = displaySavedData(loadedData);
                // console.log("formattedData", formattedData);
                setModalVisible("load");
                // return formattedData;
            } catch (error) {
                console.log("Error loading game: ", error);
                alert("Error loading game: ", error);
            }
        } else {
            setModalVisible(modalType);
        }
    };
    
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

            <View style={styles.dynamicContainer}>
                <Text style={styles.dynamicText}>
                    {winner !== null ? `${winner}` : `${gameState.currentPlayer} to play`}
                </Text>
            </View>

            <View style={styles.gameBoard}>
                <Board 
                    board={board}
                    handleMove={handleMoveClick}
                    winningIndexes={winningIndexes}
                />
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button title="Save" onPress={() => handleModalOpen("save")} />
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible === "save"}
                    onRequestClose={() => {
                        setModalVisible(null);
                    }}
                >
                    <View style={styles.modalPopUp}>
                        <View style={styles.modalMessageBox}>
                            <Text>Are you sure you want to save the game?</Text>
                            <View style={styles.buttonsContainer}>
                                <View style={styles.buttons}>
                                    <Button title="Save" onPress={() => {setModalVisible(null); handleSaveClick()}} />
                                </View>
                                <View style={styles.buttons}>
                                    <Button title="Close" onPress={() => setModalVisible(null)} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.buttons}>
                    <Button title="Load" onPress={() => handleModalOpen("load")} />
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible === "load"}
                    onRequestClose={() => {
                        setModalVisible(null);
                    }}
                >
                    <View style={styles.modalPopUp}>
                        <View style={styles.modalMessageBox}>
                            {loadedData && displaySavedData(loadedData)}
                            <View style={styles.buttonsContainer}>
                                <View style={styles.buttons}>
                                    <Button title="Close" onPress={() => setModalVisible(null)} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                    {/* <Button title='Load' onPress={handleLoadClick}>
                        Load game
                    </Button> */}
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

            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button title='Clr Data' onPress={handleClearClick}>
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
        margin: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    buttons: {
        marginHorizontal: 10,
        width: 90,
    },
    dynamicContainer: {
        margin: 20,
        backgroundColor: '#CCB3FF',
        width: 300,
        borderRadius: 10,
        paddingVertical: 5,
    },
    dynamicText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#666666',
    },
    modalPopUp: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalMessageBox: {
        backgroundColor: 'white', 
        padding: 20, 
        borderRadius: 10,
        alignItems: 'center',
    },
})