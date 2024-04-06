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
        
        // add id to gamestate
        gameState.id = currentData.gameStates.length > 0 ? currentData.gameStates[currentData.gameStates.length - 1].id + 1 : 1;
        
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
        gameState.date = formattedDate;
        gameState.time = formattedTime;

        console.log("currentData", currentData);
        console.log(typeof currentData);
        console.log("thisSave", gameState);
        console.log(typeof gameState); 
        
        // Append new game data to the array of game states lit
        currentData.gameStates.push(gameState);
        console.log("----------");
        // save new game data
        const strData = JSON.stringify(currentData);
        // console.log("strdata", strData);
        try {
            await AsyncStorage.setItem(key, strData);
            console.log("Game saved!");
        } catch (e) {
            console.log("Error saving new game: ", e);
            alert("Error saving game: ", e)
        } 
    } catch (e){
        console.log("Error saving game: ", e);
        alert("Error saving game: ", e)
    }
}

const loadSaveGameData = async () => {
    console.log("loadSaveGameData!!!!!!!!----------------")
    try {
        const currentDataString = await AsyncStorage.getItem(key);
        const currentData = currentDataString ? JSON.parse(currentDataString) : { gameStates: [] };
        if (currentData !== null) {
            console.log("Loaded data:", currentData);
            return currentData;
        } else {
            console.log("No saved game data found.");
            return currentData; // or return an empty array/object as needed
        }
    } catch (error) {
        console.log("Error loading game:", error);
        alert("Error loading game: " + error.message);
        return []; // or handle the error in some other way
    }
}

const deleteSave = async (id) => {
    console.log("Deleting save game with id: ", id);
}

const loadSave = async (id) => {
    console.log("Loading save game with id: ", id);
    try {
        const currentDataString = await AsyncStorage.getItem(key);
        const currentData = currentDataString ? JSON.parse(currentDataString) : { gameStates: [] };
        if (currentData !== null) {
            console.log("Loaded data:", currentData);
            const saveGameSingle = currentData.gameStates.find(game => game.id === id);
            console.log("Loaded single game:", saveGameSingle);
            // set the gameState to the loaded game
            return saveGameSingle;
        } else {
            console.log("No saved game data found.");
            return currentData; // or return an empty array/object as needed
        }
    
    } catch (error) {
        console.log("Error loading game:", error);
        alert("Error loading game: " + error.message);
        return []; // or handle the error in some other way
    }
}

// the purpose of this function should be to load the saved game data and display it in the modal, 
// or at least return the data in a way the modal can display it
async function handleLoadModal() {
    console.log("----------this is where it starts----------");
    try {
        const strData = await AsyncStorage.getItem(key);
        console.log("saved data loading:", strData)
        if (strData !== null) {
            console.log("Game data loaded!");
            const gameData = JSON.parse(strData);
            console.log("loaded data:", gameData);
            return gameData;
        } else {
            console.log("No saved game found.");
            return null;
        }
    } catch (error) {
        console.log("Error loading game: ", error);
        return null;
    }
}

// async function handleLoad() {
//     try {
//         const strData = await AsyncStorage.getItem(key);
//         console.log("saved data loading:", strData)
//         if (strData !== null) {
//             console.log("Game loaded!");
//             const gameData = JSON.parse(strData);
//             console.log("loaded data:", gameData);
            
//             const latestGameState = gameData.gameStates[gameData.gameStates.length - 1];
//             return latestGameState;
//         } else {
//             console.log("No saved game found.");
//             return null;
//         }
//     } catch (e) {
//         console.log("Error loading game: ", e);
//         return null;
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

export { handleSave, handleClear, handleLoadModal, loadSaveGameData, deleteSave, loadSave};