import AsyncStorage from '@react-native-async-storage/async-storage';
import game, { initialState } from './game';

const key = 'savedGames';
const dummyData = {
    board: ['', '', '', '', '', '', '', '', ''], // game board
    moveCount: 0,
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
    moveHistory: [['', '', '', '', '', '', '', '', '']],
    winningIndexes: []
};

async function handleSave(gameState) {
    try{
        console.log("---------------------------------");
        // Retrieve current save game data
        const currentDataString = await AsyncStorage.getItem(key);
        const currentData = currentDataString ? JSON.parse(currentDataString) : { gameStates: [] };
        // Initialize gameStates array if it doesn't exist
        if (!currentData.hasOwnProperty('gameStates')) {
            currentData.gameStates = []; 
        }

        console.log("currentData", currentData);
        console.log(typeof currentData);
        console.log("thisSave", gameState);
        console.log(typeof gameState); 

        // Append new game data to the array of game states
        currentData.gameStates.push(gameState);
        console.log("----------");
        // save new game data
        const strData = JSON.stringify(currentData);
        // console.log("strdata", strData);
        try {
            await AsyncStorage.setItem(key, strData);
            console.log("Game saved!");
        } catch (e) {
            console.log("Error saving game: ", e);
            alert("Error saving game: ", e)
        } 
    } catch (e){
        console.log("Error saving game: ", e);
        alert("Error saving game: ", e)
    }
}

async function handleLoad() {
    try {
        const strData = await AsyncStorage.getItem(key);
        console.log("saved data loading:", strData)
        if (strData !== null) {
            console.log("Game loaded!");
            const gameData = JSON.parse(strData);
            console.log("loaded data:", gameData);
            
            const latestGameState = gameData.gameStates[gameData.gameStates.length - 1];
            return latestGameState;
        } else {
            console.log("No saved game found.");
            return null;
        }
    } catch (e) {
        console.log("Error loading game: ", e);
        return null;
    }
}


// async function handleLoad() {
//     // need to determine which element to load
//     try {
//         const strData = await AsyncStorage.getItem(key);
//         console.log("saved data loading:", strData)
//         if (strData !== null) {
//             console.log("Game loaded!");
//             const gameData = JSON.parse(strData);
//             console.log("loaded data:", gameData);
//             return JSON.parse(strData);
//         } else {
//             console.log("No saved game found.");
//             return {};
//         }
//     } catch (e) {
//         console.log("Error loading game: ", e);
//         return {};
//     }
// }

async function handleClear() {
    try {
        await AsyncStorage.removeItem(key);
        console.log("Game cleared!");
    } catch (e) {
        console.log("Error clearing game: ", e);
        alert("Error clearing game: ", e)
    }
}

export { handleSave, handleLoad, handleClear};