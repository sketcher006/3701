const initialState = {
    board: ['', '', '', '', '', '', '', '', ''], // game board
    moveCount: 0,
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
    moveHistory: [['', '', '', '', '', '', '', '', '']]
};

const makeMove = (board, index, currentPlayer) => {
    if (board[index] === '') {
      const newBoard = [...board]; // Create a copy of the board
      newBoard[index] = currentPlayer; // Update the board with the current player's symbol
      return newBoard;
    }
    return board; // If the selected square is not empty, return the original board
};

const checkWinner = (board) => {
    let countX = 0;
    let countO = 0;
    
    // winning positions
    const winning_positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizonal
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
            console.log(`${player} wins!`);
            return `${player}`;
        }
      }
    }
    
    // if we get this far there is no winner    
    return null;
}




export { initialState, makeMove, checkWinner };