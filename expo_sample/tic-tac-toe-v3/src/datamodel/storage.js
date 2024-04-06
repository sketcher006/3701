import AsyncStorage from '@react-native-async-storage/async-storage';

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
        console.log("CURRENT DATA SIZE:", currentData.gameStates.length);
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
            console.log("Loaded data::::", currentData);
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

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const deleteSave = async (id, setLoadData) => {
    console.log("Deleting save game with id:", id);
    try {
        const currentDataString = await AsyncStorage.getItem(key);
        const currentData = currentDataString ? JSON.parse(currentDataString) : { gameStates: [] };
        
        if (currentData !== null) {
            console.log("???Loaded data:", currentData);
            // Filter out the game save with the specified id
            const updatedGameStates = currentData.gameStates.filter(game => game.id !== id);
            // Update the gameStates with the filtered array
            currentData.gameStates = updatedGameStates;
            // Save the updated data back to AsyncStorage 
            await AsyncStorage.setItem(key, JSON.stringify(currentData));
            // Update the local state 
            console.log("CURRENTDATA: ", currentData);
            console.log("type: ", typeof currentData);
            //setLoadedData(currentData); // <---- this is deleting the last game in the list everytime
            setLoadData(currentData);
            
        } else {
            console.log("No saved game data found.");
        }
    
    } catch (error) {
        console.log("Error deleting game:", error);
        alert("Error deleting game: " + error.message);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const loadSave = async (id, updateGameState) => {
    console.log("Loading save game with id: ", id);
    try {
        const currentDataString = await AsyncStorage.getItem(key);
        const currentData = currentDataString ? JSON.parse(currentDataString) : { gameStates: [] };
        if (currentData !== null) {
            console.log("Loaded data:", currentData);
            const saveGameSingle = currentData.gameStates.find(game => game.id === id);
            console.log("Loaded single game:", saveGameSingle);
            // set the gameState to the loaded game
            updateGameState(saveGameSingle);
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

export { handleSave, handleClear, loadSaveGameData, deleteSave, loadSave};