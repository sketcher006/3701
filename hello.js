// Convert variables into booleans
console.log("BOOLEANS")

const arr = [0, 1, 3,  'abc', [], {}, undefined, null, '']

for (const a of arr){
    console.log("orig: ", a, "not orig: ", !a, "orig bool val:", !!a)
    
}

// || assigns the first truthy amount

const gpa = {7:1, 6:2}
const newgpa = 5
gpa[newgpa] = gpa[newgpa] || 0+1

console.log(gpa)

const newvar = 0 || 0 || 0 || 0
console.log(newvar)

if (0 || []){
    console.log("yes")
}

// ?? assigns first non-null amount

function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    return null; // Indicates no error
}

const userInput = "shortlong"; // Simulating user input

const err = validatePassword(userInput);

const errdisplay = err && `error: ${err}`;

console.log(errdisplay); // Output: "error: Password must be at least 8 characters long"

const kwan1 = 0 || [] || 1 || 2 // kwan = []
const kwan2 = null ?? undefined ?? 0 ?? 1 // kwan = 0
console.log(kwan1)
console.log(kwan2)

// String operators ---------------------------------------
console.log("STRING OPERATORS")
const a = 'hello MAD'
const l = a.length
console.log(l)
for (const c of a){
    console.log(c)
}
const firstC = a[0]
const lastC = a[l-1]
const myarr = a.split(' ')
console.log(myarr)
const p = a.indexOf('M')
console.log(p)
const sub1 = a.slice(2,4) // start index, end index non inclusive
const sub2 = a.slice(6)
console.log(sub1, sub2)

// Array operators ---------------------------------------
console.log("ARRAY OPERATORS")
// concat - Combines two or more arrays and returns a new array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2); // [1, 2, 3, 4, 5, 6]
console.log(newArray)

// push - Adds one or more elements to the end of an array and returns the new 
// length of the array.
const array3 = [1, 2, 3];
array3.push(4, 5); // [1, 2, 3, 4, 5]
console.log(array3)

// pop - Removes the last element from an array and returns that element.
const array4 = [1, 2, 3];
const poppedElement = array4.pop(); // 3
console.log(poppedElement, array4)

// shift - Removes the first element from an array and returns that element, 
// shifting all subsequent elements one position to the left.
const array5 = [1, 2, 3];
const shiftedElement = array5.shift(); // 1
console.log(array5)

// unshift - Adds one or more elements to the beginning of an array and 
// returns the new length of the array.
const array6 = [2, 3];
array6.unshift(0, 1); // [0, 1, 2, 3]
console.log(array6)

// slice - Returns a shallow copy of a portion of an array into a new array.
const array7 = [1, 2, 3, 4, 5];
const newArray2 = array7.slice(1, 3); // [2, 3]
console.log(newArray2)

// splice - Changes the contents of an array by removing or replacing existing 
// elements and/or adding new elements in place.
// array.splice(start_index, deleteCount, item1, item2, etc)
const array8 = [1, 2, 3, 4, 5];
array8.splice(2, 0, 'a', 'b'); // [1, 2, 'a', 'b', 3, 4, 5]
console.log(array8)

// for each - Executes a provided function once for each array element.
const array9 = [1, 2, 3];
array9.forEach(item => console.log(item)); // logs 1, 2, 3
console.log(array9)

// map - Creates a new array with the results of calling a provided
// function on every element in the calling array.
const array10 = [1, 2, 3];
const newArray3 = array10.map(item => item * 2); // [2, 4, 6]
console.log(newArray3)

// filter - Creates a new array with all elements that pass the
// test implemented by the provided function.
const array11 = [1, 2, 3, 4, 5];
const newArray4 = array11.filter(item => item % 2 === 0); // [2, 4]
console.log(newArray4)

// Object operators ---------------------------------------
console.log("OBJECT OPERATORS")
const myObject = {name: 'Daniel', age:7}
console.log(myObject)
const nam = myObject.name
const age = myObject.age
console.log(nam, age)
myObject.friend = 'Henry'
console.log(myObject)
myObject.age = 34
console.log(myObject)
console.log('---')
console.log(Object.keys(myObject))
console.log(Object.values(myObject))
console.log(Object.entries(myObject))

console.log(myObject.hasOwnProperty('name'))
console.log('name' in myObject)
console.log(myObject.name !== undefined)

// == vs === ---------------------------------------
console.log("== vs ===")
// == DOESNT CHECK TYPE
// === STRICT EQUALS CHECKS TYPE

let x = 15
let y = '15'

console.log(x==y)
console.log(x===y)

x = 0
y = ''

console.log(x==y)
console.log(x===y)

x = 30
y = 30.0

console.log(x==y)
console.log(x===y)

console.log(Math.PI)



console.log("MY JUNK -------------")

function wordLengths(sentence) {
    // Your implementation here
    let myarr = sentence.split(' ')
    let count_array = []
    myarr.forEach(word => {
        count_array.push(word.length);
    })
    console.log("count array: " + count_array)
    return count_array
  }

console.log("final result: " + wordLengths("hello my world"))

let goat = 0
let sheep = 1

console.log(true && "NaN" && 1)

const whatisthis = function (name){
    console.log(`hello ${name}`);
}

whatisthis('daniel');

let numbers = [1, 2, 3, 4, 5, 6, 7];
let filtered = numbers.filter( element => element % 3 == 0); // [3, 6]
let multi = filtered.map( element => element * 2); // [6, 12]

// FUNCTION AS VARIABLE

let soyouretellingme = function myfunk(avar){
    console.log(avar);
}

let soyouretellingme2 = (avar) => {console.log(avar)}

soyouretellingme2('wtaf');

console.log(`hey
wtf
ajkshdasd`)

console.log("nums:", numbers)
// for a !IN! uses index
for (const a in numbers){
    console.log(numbers[a], a*2);
}
// for a !OF! uses values
for (const a of numbers){
    console.log(a, a*2);
}

const thereee = [5];
thereee[0]++;
console.log(thereee);

const objy = {name: "dan", agey: 12}
const {name, agey} = objy
console.log(name, agey)

const fs = require("fs");
let file_name = `daniels_file.txt`;
if (fs.existsSync(file_name)) {
  console.log("File exists");
} else {
  console.log("We good to write file");
  const content = 
    `Name: dan\n` +
    `Age: 37\n` +
    `Hobby: none`

  fs.writeFile(file_name, content, (err) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log("File has been created!");
    }
  });
}


const num = 3;

const students = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    GPA: 6.5,
    hobbies: ["coding", "chess"],
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    GPA: 5.4,
    hobbies: ["running", "swiming"],
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    GPA: 4.8,
    hobbies: ["coding", "swimming"],
  },
  {
    id: 4,
    name: "Dave",
    email: "dave@example.com",
    GPA: 5.2,
    hobbies: ["coding"],
  },
  {
    id: 5,
    name: "Bill",
    email: "bill@example.com",
    GPA: 5.2,
    hobbies: ["coding", "swimming"],
  },
  {
    id: 6,
    name: "Alex",
    email: "alex@example.com",
    GPA: 6.2,
    hobbies: ["coding", "reading"],
  },
];

const selectStudents = [
  { name: "Alex", email: "alex@example.com" },
  { name: "Alice", email: "alice@example.com" },
  { name: "Bill", email: "bill@example.com" },
  {
    name: "Dave",
    email: "dave@example.com",
  },
];

// // Exercise 1
// let data = "hello";
// // Your implementation here
// function processData(data, callback) {
//   setTimeout(() => {
//     let new_data = data.toUpperCase()
//     callback(new_data);
//   }, 500);
// }

// processData(data, (new_data) => {
//   console.log(new_data);
// });



// function createAccount(accountName, openingBalance) {
//   // your implementation here
//   this.accountName = accountName;
//   this.openingBalance = openingBalance;
//   this.transactions = [{action: "open", amount: openingBalance}];

//   this.deposit = (amount) => {
//     if (amount > 0){
//       this.openingBalance += amount;
//       this.transactions.push({action: "deposit", amount: amount});
//       return "OK";
//     };
//     return "Invalid amount";
//   };
  
//   this.withdraw = (amount) => {
//     if(amount > 0){
//       if(amount <= this.openingBalance){
//         this.openingBalance -= amount;
//         this.transactions.push({action: "withdraw", amount: amount});
//         return "OK";
//       }
//       return "Withdraw over balance";
//     };
//     return "Invalid amount";
//   };

//   this.checkAccount = () => {
//     return {transactions: this.transactions, balance: this.openingBalance};
//   };
// };

function createAccount(accountName, openingBalance) {
  // Check if called with 'new'
  if (this instanceof createAccount) {
    // Called with 'new', treat as constructor function
    this.accountName = accountName;
    this.openingBalance = openingBalance;
    this.transactions = [{ action: "open", amount: openingBalance }];

    this.deposit = (amount) => {
      if (amount > 0){
        this.openingBalance += amount;
        this.transactions.push({action: "deposit", amount: amount});
        return "OK";
      };
      return "Invalid amount";
    };
    
    this.withdraw = (amount) => {
      if(amount > 0){
        if(amount <= this.openingBalance){
          this.openingBalance -= amount;
          this.transactions.push({action: "withdraw", amount: amount});
          return "OK";
        }
        return "Withdraw over balance";
      };
      return "Invalid amount";
    };
  
    this.checkAccount = () => {
      return {transactions: this.transactions, balance: this.openingBalance};
    };

  } else {
    // Called without 'new', treat as regular function
    const account = {
      accountName,
      openingBalance,
      transactions: [{ action: "open", amount: openingBalance }],
      deposit(amount) {
        if (amount > 0){
          this.openingBalance += amount;
          this.transactions.push({action: "deposit", amount: amount});
          return "OK";
        };
        return "Invalid amount";
      },
      withdraw(amount) {
        if(amount > 0){
          if(amount <= this.openingBalance){
            this.openingBalance -= amount;
            this.transactions.push({action: "withdraw", amount: amount});
            return "OK";
          }
          return "Withdraw over balance";
        };
        return "Invalid amount";
      },
      checkAccount() {
        return {transactions: this.transactions, balance: this.openingBalance};
      }
    };
    return account;
  }
}

const myAccount = new createAccount("Daniel", 100);
console.log("balance:  ", myAccount.checkAccount().balance);
console.log(myAccount.deposit(50));
console.log(myAccount.checkAccount());
console.log(myAccount.withdraw(325));
console.log(myAccount.checkAccount());

let initialName = "daniel";
initialName.toUpperCase();
console.log(initialName.toUpperCase());



function Person(initialName, initialAge) {
  const PersonObject = {
  };    

  Object.defineProperty(PersonObject, 'setName', {
    set(newName) {
      PersonObject.name = newName[0].toUpperCase() + newName.slice(1);
      console.log("name has been set");
    }
  });
  Object.defineProperty(PersonObject, 'setAge', {
    set(newAge) {
      if (newAge >= 0 && newAge <= 120) {
        PersonObject.age = newAge;
        console.log("age has been set");
      } else {
        console.log("Invalid age provided");
      }
    }
  });
  Object.defineProperty(PersonObject, 'getName', {
    get() {
      return PersonObject.name;
    }
  });
  Object.defineProperty(PersonObject, 'getAge', {
    get() {
      return PersonObject.age;
    }
  });

  PersonObject.name = initialName;
  PersonObject.age = initialAge;


  return PersonObject;
}

const person = new Person("john", 25);
console.log(person.getName);
console.log(person.getAge);

let cart = {};

addItem = (id, name, price) => {
  console.log("adding: ", id, name, price);
  if(cart[id]){
    console.log("true: ", cart[id]);
    console.log("cart[id].quantity: ", cart[id].quantity);
    cart[id].quantity++;
    console.log("cart[id].quantity: ", cart[id].quantity);
  }
  else{
    console.log("false: ", cart[id]);
    cart[id] = {name, price, quantity: 1};
    console.log("cart[id].quantity: ", cart[id].quantity);
  }
}

removeItem = (id) => {
  if (cart[id]) {
    cart[id].quantity--;
    if (cart[id].quantity === 0) {
      delete cart[id];
    }
  }
};
getTotalPrice = (cart) => {
  let totalPrice = 0;
  for (let id in cart) {
    totalPrice += cart[id].price * cart[id].quantity;
  }
  return totalPrice;
};
getItemNumber = (cart) => {
  let itemNumber = 0;
  for (let id in cart) {
    itemNumber += cart[id].quantity;
  }
  return itemNumber;
};

addItem(1, "Apple", 0.99);
addItem(2, "Banana", 0.59);
addItem(1, "Apple", 0.99); // Quantity of Apple should now be 2
console.log(getTotalPrice(cart));
console.log(getItemNumber(cart));
removeItem(1); // Quantity of Apple should decrease to 1
console.log(cart[1].quantity);


function abbreviateName(name) {
  // Implementation using regular expression
  // return name.match(/\b[jJ]\w*\b/g) // starts with J or j
  // return /^(?=.*J)(?=.*e).*$/.test(name); // has J and e
  // return /^(?=.*J)(?=.*e).{16,}$/.test(name); // has J and e and at least 16 characters
  // $& = the matched substring
  // return name.replace(/oOel/g, '($&)'); // replace the matching group with whats in the brackets
  // use callback function
  // return name.replace(/[aeiou]/g, c => c.toUpperCase()).replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, c => c.toLowerCase());
  // use groups $1 $2 $3
  // return /(\w +\w)/.test(name);
  const groupCount = name.match(/\w\s+\w/g);
  if(groupCount.length > 1){ 
    return name.replace(/^\s*(\w)\w*\s*(\w)\w*\s*(\w*)\w*\s*/, '$3, $1. $2.');
    // return name.replace(/(\b\w) <- first group \w*\s*  (\w) <- second group \w*\s* (\w*) <- third group \w*/, '$3, $1. $2.');
  } else {
    return name.replace(/^\s*(\w)\w*\s*(\w*)\w*/, '$2, $1.');
  }

  
}

console.log(abbreviateName("Tom Sawyer"));
console.log(abbreviateName("Tom William Sawyer"));
console.log(abbreviateName("  Tom    Sawyer  "));
console.log(abbreviateName(" Tom   William   Sawyer "));

function isValidAustralianMobile(number) {
  // Implementation using regular expression
  const strippedNumber = number.replace(/[^\d]/g, '');
  console.log("strippedNumber: ", strippedNumber);
  console.log("match", strippedNumber.match(/^04\d{8}/g))
  return /^04\d{8}$/.test(strippedNumber);
}



console.log(isValidAustralianMobile("0412345678")); //true
console.log(isValidAustralianMobile("04 1234 5678")); //true
console.log(isValidAustralianMobile("(04)12345678")); //true
console.log(isValidAustralianMobile("0412-345-678")); //true
console.log(isValidAustralianMobile("0412 3456 78")); //true
console.log(isValidAustralianMobile("0312345678")); // false
console.log(isValidAustralianMobile("04123456789")); // false
console.log(isValidAustralianMobile("0412 345 67"));  // false


testNestedArray = [[1, 2, 3, 4, 5], [5,6,7,8,9], [20, 21, 34, 56, 100]];

function sumMinVal (input){
  let totalSum = 0;
  input.forEach(innerArr => {
    let currentMin = innerArr[0];
     innerArr.forEach(elem => {
      if( elem < currentMin){
        currentMin = elem;
      }
     })
      totalSum += currentMin;
  })
  return totalSum;
}

function sumMinVal2 (input){
  let totalSum = 0;
  input.forEach((arr) => {
    totalSum += arr.reduce((min, current) => min < current ? min : current);
  });
  return totalSum;
};

function sumMinVal3(input) {
  return input.reduce((totalSum, arr) => {
    let minVal = arr.reduce((min, current) => min < current ? min : current);
    return totalSum + minVal;
  }, 0);
}

const sumMinVal4 = input => input.reduce((totalSum, arr) => totalSum + arr.reduce((min, num) => min < num ? min : num), 0);


console.log(sumMinVal(testNestedArray));
console.log(sumMinVal2(testNestedArray));
console.log(sumMinVal3(testNestedArray));
console.log(sumMinVal4(testNestedArray));

