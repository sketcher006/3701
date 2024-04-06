import { View, Text, StyleSheet, Button, Modal } from "react-native";

const initialState = {
    board: ['', '', '', '', '', '', '', '', ''], // game board
    moveCount: 0,
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
    moveHistory: [['', '', '', '', '', '', '', '', '']],
    winningIndexes: []
};

const makeMove = (board, index, currentPlayer) => {
    if (board[index] === '') {
      const newBoard = [...board]; // Create a copy of the board
      newBoard[index] = currentPlayer; // Update the board with the current player's symbol
      return newBoard;
    }
    return board; // If the selected square is not empty, return the original board
};

const checkWinner = (board, winningIndexes) => {
  let countX = 0;
  let countO = 0;
  
  // winning positions
  const winning_positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      [0, 4, 8], [2, 4, 6]             // diagonal
  ];

  // check for winner
  const current_board = {X: [], O: []};

  for (let i = 0; i < board.length; i++){
      if (board[i] === 'X'){
          current_board.X.push(i);
          countX++;
      } else if (board[i] === 'O'){
          current_board.O.push(i);
          countO++;
      }
  }

  // check each players current positions and compare to winning positions
  for (let player in current_board){
      for (let i = 0; i < winning_positions.length; i++){
          if (winning_positions[i].every(value => current_board[player].includes(value))){
              console.log(`${player} wins! with winning pos index ${i}`);
              console.log(winningIndexes);
              console.log(...winning_positions[i]);
              return { winner: `${player} wins!`, winningIndexes: [...winning_positions[i]] };
          }
      }
  }
  
  if(current_board.X.length + current_board.O.length === 9){
      console.log("Tie!");
      return { winner: "Tie!", winningIndexes: [] };
  };

  // if we get this far there is no winner    
  return { winner: null, winningIndexes: [] };
}


const handleMove = (gameState, index) => {
  const { board, currentPlayer, gameOver, moveCount, moveHistory, winningIndexes } = gameState;
  if (!gameOver && board[index] === '') {
      const newBoard = makeMove(board, index, currentPlayer);
      const newHistory = moveHistory.slice(0, moveCount+1);
      const newMoveCounter = moveCount + 1;
      const { winner, winningIndexes: newWinningIndexes } = checkWinner(newBoard, winningIndexes);
      return {
          board: newBoard,
          currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
          moveCount: moveCount + 1,
          moveHistory: [...newHistory, newBoard],
          winner: winner,
          gameOver: winner !== null || newMoveCounter === 9,
          winningIndexes: newWinningIndexes
      };
  }
  return gameState;
};


const handleNewGame = () => {
  return initialState;
};

const handleUndo = (gameState) => {
  const { moveHistory, moveCount } = gameState;
  if (moveHistory.length > 1) {
      const prevBoard = moveHistory[moveCount - 1];
      return {
          ...gameState,
          board: prevBoard,
          currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
          moveCount: moveCount - 1,
          winner: null,
          gameOver: false,
      };
  }
  return gameState;
};

const handleRedo = (gameState) => {
  const { moveHistory, moveCount } = gameState;
  if (moveHistory.length > 1) {
      const nextBoard = moveHistory[moveCount + 1];
      return {
          ...gameState,
          board: nextBoard,
          currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
          moveCount: moveCount + 1,
          winner: null,
          gameOver: false,
      };
  }
  return gameState;
};

const deleteSave = async (id) => {
    console.log("trying to savegame task with id: ", id);
    // retrieve stored tasks from async storage
    try {
        const saveString = await AsyncStorage.getItem(key);
        const saveArray = JSON.parse(saveString);
        // remove the save game with the given index
        const newTasksArray = tasksArray.filter(t => t.id !== id);
        // save the updated tasks back to async storage
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasksArray));
    } catch (error) {
        console.log("Error deleting task: ", error);
        alert("Error deleting task. Please try again. " + error.message);
    } 
};

const displaySavedData = (loadedData) => {
    console.log("(displaySavedData)loaded data:", loadedData);
    console.log("(displaySavedData)loaded data type:", typeof loadedData);
    console.log("(displaySavedData)loaded data length:", loadedData.length); 

    // map over the loaded data and display it in the modal
    loadedData.gameStates.map((state, index) => {
        console.log("Game State", index + 1);
        console.log("Current Player: ", state.currentPlayer);
        console.log("Game Over: ", state.gameOver.toString());
        console.log("Move Count: ", state.moveCount);
        console.log("Winner: ", state.winner);
        console.log("Board: ", state.board);
        console.log("Move History: ", state.moveHistory);
        console.log("Winning Indexes: ", state.winningIndexes);
    });

    return (
        <View>
            {loadedData.gameStates.map((state, index) => (
                <View key={index}>
                    <Text>({index + 1})</Text>
                    <Text>Result: {state.winner}</Text>
                    <Text>Steps: {state.moveCount}</Text>
                    <Button style={styles.buttons} title="Load Game" onPress={() => console.log("Load Game")} />
                    <Button title="Delete Game" onPress={() => console.log("Delete Game")} />
                    {/* <Text>Current Player: {state.currentPlayer}</Text>
                    <Text>Game Over: {state.gameOver.toString()}</Text>
                    <Text>Board: {state.board.join(', ')}</Text>
                    <Text>Move History: {state.moveHistory.join(', ')}</Text>
                    <Text>Winning Indexes: {state.winningIndexes.join(', ')}</Text> */}
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    buttons: {
        marginHorizontal: 10,
        width: 90,
    },
})

export { initialState, makeMove, checkWinner, handleMove, handleNewGame, handleUndo, handleRedo, displaySavedData };