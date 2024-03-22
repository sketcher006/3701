/**
 * @file questions.js
 * @description This file contains programming exercises for Week 4 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus array functions etc.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [18/03/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */

/**
 * Exercise 1: Callback Function in Asynchronous JavaScript
 *
 * Objective:
 * To reinforce understanding of asynchronous operations in JavaScript using
 * callback functions.
 *
 * Task:
 * Create a function `processData` that simulates data retrieval from a
 * database using a callback function.
 * This function should not return anything, but instead, it should accept
 * two arguments: `data`, which is a string, and `callback`, which is a function.
 * After simulating a delay (e.g., using `setTimeout`), it should call the `callback`
 * function with a transformed string where every letter is capitalized.
 *
 * Example Usage:
 * processData("fetching data", function(result) {
 *   console.log(result); // Should output: "FETCHING DATA" after the delay
 * });
 *
 * Instructions:
 * - Use `setTimeout` to simulate a data retrieval delay (longer than 100 millisecond).
 * - Ensure that the callback function is called only after this simulated delay.
 * - Transform the input data to uppercase before passing it to the callback.
 *
 * Write your code below:
 */

function processData(data, callback) {
  // Your implementation here
  setTimeout(() => {
    if (typeof data !== 'string'){
      console.log("process data error, do we ever get here??????");
      callback(new Error("process data error"));
    } else {
      let new_data = data.toUpperCase()
      callback(null, new_data);
    }
  }, 200);
}

/**
 * Exercise 2: Student File Creation with Validation in Node.js
 *
 * Objective:
 * To understand and implement file operations with validation checks in Node.js
 * using the `fs` module.
 *
 * Task:
 * Create a function `createStudentFile` that takes three parameters:
 * - `studentName` (a string in the format "FirstName LastName"),
 * - `studentInfo` (an object with properties `firstName`, `surName`, `age`, and `hobby`),
 * - `callback` (a function that handles the result of the file operation).
 *
 * The function should convert the `studentName` into a filename format
 * (e.g., "Tom Sawyer" -> "tomSawyer.txt"). Before writing the file,
 * check if a file with that name already exists. If it does, invoke the
 * callback with `new Error("File exists")`.
 *
 * If `studentInfo`'s `firstName` and `surName` do not match `studentName`,
 * invoke the callback with `new Error("Wrong Information")`.
 *
 * Otherwise, write the student's information to the file in the format:
 * Name: FirstName LastName
 * Age: age
 * Hobby: hobby1, hobby2
 *
 * Example Usage:
 * createStudentFile('Tom Sawyer', {firstName: 'Tom', surName:'Sawyer',
 * age:10, hobby:['Eating','Adventure']}, function(err) {
 *   if (err) {
 *     console.error(err);
 *   } else {
 *     console.log('File has been created!');
 *   }
 * });
 *
 * Instructions:
 * - Import the `fs` module at the beginning of your file.
 * - Use `fs.writeFile` to asynchronously create the file if validation
 *    checks pass.
 * - Use `fs.existsSync` to check if the file already exists.
 * - The `callback` function should be called with the appropriate error
 *    message or `null` if the operation is successful.
 * - Handle any errors that may occur during the file operation.
 * - Follow Node.js asynchronous conventions and do not use synchronous methods.
 *
 * Write your code below:
 */

const fs = require("fs");
const { resolve } = require("path");

/**
 * Creates a student file with validated information.
 * @param {string} studentName - The name of the student in "FirstName LastName" format.
 * @param {Object} studentInfo - An object containing the student's first name, surname, age, and hobbies.
 * @param {Function} callback - A callback function that handles the result of the file operation.
 */
function createStudentFile(studentName, studentInfo, callback) {
  // Your implementation here
  let file_name = `${studentName.replace(' ', '')}.txt`;
  if (fs.existsSync(file_name)) {
    console.log("File exists");
    callback(new Error("File exists"));
  } else if (studentInfo.firstName != studentName.split(' ')[0] || studentInfo.surName != studentName.split(' ')[1]){
    console.log("Name mismatch");
    callback(new Error("Wrong Information"));
  } else {
    console.log("We good to write file");

    const content = 
      `Name: ${studentName}\n` +
      `Age: ${studentInfo.age}\n` +
      `Hobby: ${studentInfo.hobby.join(', ')}`;

    fs.writeFile(file_name, content, (err) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log("File has been created!");
        callback(null);
      }
    });
  }
};

/**
 * Exercise 3: Using Promises in Asynchronous JavaScript
 *
 * Objective:
 * Gain proficiency in handling asynchronous operations using
 * Promises in JavaScript.
 *
 * Task:
 * Create a function `loadUserData` that simulates fetching user
 * data from a database. The function should return a Promise that
 * either resolves with user data after a simulated delay
 * (to mimic database retrieval time) or rejects with an error if
 * the input user ID is invalid (for example, if the ID is not a
 * positive number).
 *
 * Example Usage:
 * loadUserData(1)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * Instructions:
 * - The function `loadUserData` should accept a single parameter: `userId`,
 *    which is a number.
 * - If `userId` is a positive number, simulate fetching data by using
 *    `setTimeout` and resolve the Promise with a mock user object, e.g.,
 *    `{ id: userId, name: 'John Doe' }`.
 * - If `userId` is not a positive number, reject the Promise with an
 *    `Error` stating "Invalid user ID".
 * - Use `setTimeout` with a delay (e.g., 100 milliseconds) to simulate
 *    the database call whether resolving or rejecting the Promise.
 *
 * Write your code below:
 */

function loadUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'John Doe' });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 100);
  });
}

/**
 * Exercise 4: Fetching Data with Async/Await
 *
 * Objective:
 * Gain proficiency in handling asynchronous operations using
 * async/await syntax in JavaScript.
 *
 * Task:
 * Create an async function `fetchUserDetails` that simulates
 * retrieving user details from an API. The function should use
 * a Promise to simulate fetching data and should be handled using
 * async/await syntax. If the input userID is positive, the function
 * should resolve with user details after a simulated delay. If the
 * userID is not positive, the function should throw an error.
 *
 * Example Usage:
 * (async () => {
 *   try {
 *     const userDetails = await fetchUserDetails(1);
 *     console.log(userDetails);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * })();
 *
 * Instructions:
 * - The function `fetchUserDetails` should be an async function that
 *    accepts a single parameter: `userId`.
 * - Use a Promise that resolves with mock user details (e.g.,
 *    `{ id: userId, name: 'Jane Doe' }`) if `userId` is positive.
 *    It should reject with an error message "Invalid user ID" if
 *    `userId` is not positive.
 * - Use `setTimeout` within the Promise to simulate a delay (e.g.,
 *    100 milliseconds) in fetching the data.
 * - In the function, use await to wait for the Promise to settle,
 *    and handle the result or error appropriately.
 *
 * Write your code below:
 */

async function fetchUserDetails(userId) {
  // Your implementation here
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      if (userId > 0) {
        resolve({ id: userId, name: 'Jane Doe' });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 200);
  })
}

/**
 * Exercise 5: Check Tic-Tac-Toe Game State
 *
 * Objective:
 * Create a function to evaluate the current state of a Tic-Tac-Toe board.
 *
 * Task:
 * Write a function called `checkState` that assesses the state of a
 * Tic-Tac-Toe game. The input is an array of 9 elements representing
 * the cells of the game board, in row-major order (first three elements
 *  are the first row, and so on). Each element can be 'X', 'O', or ''
 * (empty string for unoccupied cells). The function should analyze the
 * board and return the current game state as a string.
 *
 * Rules:
 * - If all elements are '', return 'X to play'.
 * - If there is one more 'X' than 'O', return 'O to play'.
 * - If there are three 'X's or 'O's in a row, a column, or diagonally,
 *    return 'X wins' or 'O wins' respectively.
 * - If all 9 cells are filled and there's no winner, return 'It is a tie'.
 *
 * Example Usage:
 * checkState(['X', 'O', 'X', 'X', 'O', 'O', '', '', '']) // return 'X to play'
 *
 * Instructions:
 * - Analyze the input array to determine the current game state based on
 *    the rules provided.
 * - Implement the logic to check for win conditions (three in a row,
 *    column, or diagonal) for both 'X' and 'O'.
 * - Ensure your function covers all possible game states and returns the
 *    correct game state message.
 *
 * Write your code below:
 */

function checkState(board) {
  // Your implementation here
  let countX = 0;
  let countO = 0;

  // check if board is empty
  if (!board.some(cell => cell)) {
    return 'X to play';
  }
  
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
        return `${player} wins`;
      }
    }
  }
  
  // if no one is winning, check whos turn it is
  if(countX + countO === 9){
    return 'It is a tie';
  } 
  
  return countX === countO ? 'X to play': 'O to play';
  
}

module.exports = {
  processData,
  createStudentFile,
  loadUserData,
  fetchUserDetails,
  checkState,
};
