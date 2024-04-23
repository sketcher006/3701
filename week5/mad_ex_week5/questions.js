/**
 * @file questions.js
 * @description This file contains programming exercises for Week 5 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus OO programming in JavaScript.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [27/04/2024]
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
 * Question 1: Account Management Function
 *
 * Objective:
 * Create a function called createAccount that can be called either with new or without.
 * This function returns an account object with deposit, withdraw, and checkAccount methods.
 *
 * Details:
 * - The createAccount function takes two parameters: accountName (string), openingBalance (number).
 * - It returns an object with three methods: deposit, withdraw, and checkAccount.
 * - Both deposit and withdraw methods accept a positive number as a parameter.
 *   - If the withdrawal amount is more than the current balance, it returns "Withdraw over balance".
 *   - Otherwise, it returns "OK".
 * - The checkAccount method returns an object with two attributes: transactions (an array) and balance.
 *   - Each transaction in the transactions array is an object with two attributes: action ("open", "deposit", "withdraw") and amount.
 *
 */

function createAccount(accountName, openingBalance) {
  function deposit(amount) {
      if (amount > 0){
        this.balance += amount;
        this.transactions.push({action: "deposit", amount: amount});
        return "OK";
      };
      return "Invalid deposit amount";
    }
    function withdraw(amount){
      if(amount > 0){
        if(amount <= this.balance){
          this.balance -= amount;
          this.transactions.push({action: "withdraw", amount: amount});
          return "OK";
        }
        return "Withdraw over balance";
      };
      return "Invalid withdrawal amount";
    }
    function checkAccount(){
      return {
        transactions: this.transactions, 
        balance: this.balance
      };
    }
    if (new.target) {
      this.balance = openingBalance;
      this.name = accountName;
      this.deposit = deposit.bind(this);
      this.withdraw = withdraw.bind(this);
      this.checkAccount = checkAccount.bind(this);
      this.transactions = [{ action: "open", amount: openingBalance }];
    } else {
      const ret = {
        action: "open",
        balance: openingBalance,
        transactions: [{ action: "open", amount: openingBalance }],
      };
      ret.deposit = deposit.bind(ret);
      ret.withdraw = withdraw.bind(ret);
      ret.checkAccount = checkAccount.bind(ret);
      return ret;
    }
  } 


/**
 * Question 2: Using Getters and Setters in Function Generated Objects
 *
 * Task:
 * Implement a function called `Person` that initializes an object with private properties for
 * `name` and `age`. Use getters and setters to provide access to these properties.
 * - The `setName` setter should capitalize the first letter of the name before storing it.
 * - The `setAge` setter should validate that the age is a valid number between 0 and 120.
 * If the validation fails, do not update the age and console.log an error message: "Invalid age provided".
 *
 * Implementation:
 */
function Person(initialName, initialAge) {
  let name = initialName[0].toUpperCase() + initialName.slice(1);
  let age = (initialAge >= 0 && initialAge <= 120) ? initialAge : 0;

  return{
    name, age,
    set setName(newName) {
      name = newName[0].toUpperCase() + newName.slice(1);
      console.log("name has been set");
    },
    set setAge(newAge) {
      if (newAge >= 0 && newAge <= 120) {
        age = newAge;
        console.log("age has been set");
      } else {
        console.log("Invalid age provided");
      }
    },
    get getName() {
      return name;
    },
    get getAge() {
      return age;
    }
  }
}



/**
 * Question 3: Using Classes in JavaScript
 *
 * Objective:
 * Understand and apply fundamental Object-Oriented Programming concepts in JavaScript using classes,
 * including class definitions, inheritance, and polymorphism.
 *
 * Part A: Creating a Car Class
 * Define a Car class with the following specifications:
 * - Properties:
 *   - make (string)
 *   - model (string)
 *   - year (number)
 * - Method:
 *   - getInfo(): Returns a string containing the car's make, model, and year.
 *
 * Part B: Inheriting from Car to Create an ElectricCar Class
 * Extend the Car class to create an ElectricCar class with the following additions:
 * - Property:
 *   - batteryLevel (number): Represents the percentage of battery level.
 * - Method:
 *   - getBatteryInfo(): Returns a string stating the battery level.
 *
 * Part C: Implementing Polymorphism
 * Override the getInfo() method in the ElectricCar class to include battery level information
 * along with the car's make, model, and year.
 *
 * [hint]: please check the test cases to find out the expected output string format
 * Implementation:
 */

class Car {
  // your implementation here
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  };
  
  getInfo() {
    return `${this.make} ${this.model} ${this.year}`;
  };
}

class ElectricCar extends Car {
  // your implementation here
  constructor(make, model, year, batteryLevel){
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  };
  getBatteryInfo() {
    return `Battery level at ${this.batteryLevel}%`;
  };
  getInfo() { 
    return `${this.make} ${this.model} ${this.year} with ${this.batteryLevel}% battery`;
  };
}

/**
 * Question 4: Extending Prototype with JSON Operations
 *
 * Task:
 * Extend the Array prototype in JavaScript to include two custom methods:
 * - serialize(): Convert the array to a JSON string.
 * - deserialize(json): Populate the array with elements from a JSON string.
 *
 * Guidelines:
 * Implement these methods directly on the Array.prototype to make them available on all array instances.
 */

// Extending Array.prototype to include serialize method
Array.prototype.serialize = function () {
  // your implementation here
  return JSON.stringify(this);
};

// Extending Array.prototype to include deserialize method
Array.prototype.deserialize = function (json) {
  // your implementation here
  const newArray = JSON.parse(json);
  this.length = 0;
  Array.prototype.push.apply(this, newArray);
  return this;
};

/**
 * Question 5: Shopping Cart Management with Direct Access Getters
 *
 * Implement a function called createShoppingCart which initializes and returns an object representing a shopping cart.
 * This object includes methods for adding items, removing items, and getters for totalPrice and itemNumber.
 *
 * Details:
 * - addItem(id, name, price): Adds an item to the cart or updates its quantity if it already exists.
 * - removeItem(id): Removes an item from the cart based on its id.
 * - check(): Returns an object with the total number of items, the total price, and a detailed list of items (including id, name, price, and quantity).
 * - Getters:
 *   - totalPrice: Returns the total price of all items in the cart.
 *   - itemNumber: Returns the total number of items in the cart.
 *
 * Initial state of the shopping cart should be empty. If an added item already exists, their quantities should be merged.
 * Removing an item should decrement its quantity, and items with a quantity of zero should be removed.
 * Assume all function calls are valid and one id always maps to the same product name and price.
 */

function createShoppingCart() {
  let items = [];

  return {
    addItem: function (id, name, price) {
      let item = items.find(item => item.id == id);
      if (item) {
        item.quantity++;
        return;
      } 
      items.push({id, name, price, quantity: 1 });
    },
    removeItem: function(id) {
      let item = items.find(item => item.id == id);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          items = items.filter(item => item.id !== id);
        }
      }
    },
    check: function() {
      let itemNumber = items.reduce((total, item) => total + item.quantity, 0);
      let total = items.reduce((total, item) => total + item.price * item.quantity, 0);
      return { itemNumber, total, items };
    },
    get totalPrice() {
      // Total price of all items.
      return items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    get itemNumber() {
      // Total number of items.
      return items.reduce((total, item) => total + item.quantity, 0);
    }
  };
}

module.exports = {
  Car,
  ElectricCar,
  createAccount,
  Person,
  Array,
  createShoppingCart,
};
