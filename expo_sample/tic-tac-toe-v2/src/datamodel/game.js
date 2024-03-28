const initialState = {
    board: ['', '', '', '', '', '', '', '', ''], // game board
    moveCount: 0,
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
    moveHistory: []
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
    // Check rows, columns, and diagonals for a winning combination
    // Return the winning player ('X' or 'O') or null if no winner
};



export { initialState, makeMove, checkWinner };