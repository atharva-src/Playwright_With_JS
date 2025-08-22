// Functions ---> To make your code dynamic and reusable, you use functions.
// Example without functions:
let a = 10;
let b = 20;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Division:", a / b);
console.log("Multiplication:", a * b);
console.log("Modulus:", a % b);

let c = 100;
let d = 50;
console.log("Addition:", c + d);
console.log("Subtraction:", c - d);
console.log("Division:", c / d);
console.log("Multiplication:", c * d);
console.log("Modulus:", c % d);

// Advantages of functions:
// 1. Keeps your code clean and dynamic.
// 2. Makes the code easier to understand.
// 3. Easy to test.

// Types of Functions:
// Functions are categorized into two major types:
// 1. The way of writing.
// 2. Parameter and return type.

/**
 * Syntax for a function:
 *
 * function functionName(parameter){
 *   // Code
 * }
 *
 * functionName(parameter);
 */

// Types of functions with examples:

// 1) Based on parameter and return type:

// Function without parameters and without return type.
function fullName() {
  console.log("Siddhant Arjun Gadakh");
}

// Call the function
fullName(); 

// Function with parameters and without return type.
function calculator(a, b) {
  console.log(`The calculations for the values ${a} & ${b} are:`);
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Division:", a / b);
  console.log("Multiplication:", a * b);
  console.log("Modulus:", a % b);
}

// Call the function with different parameters
calculator(10, 20);
calculator(30, 20);

// Function with parameters and with return type.
function fullNameWithReturn(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
}

// Store the result in variables and log them
let siddhantInfo = fullNameWithReturn("Siddhant", "Arjun", "Gadakh");
let vaibhavInfo = fullNameWithReturn("Vaibhav", "Pratap", "Suryawanshi");

console.log(siddhantInfo);
console.log(vaibhavInfo);

// Convert to uppercase
console.log(siddhantInfo.toUpperCase());

// 2) Based on the way of writing:

// 1. Declarative function type.
function fullNameDeclarative(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
}
console.log(fullNameDeclarative("Siddhant", "Arjun", "Gadakh"));

// 2. Expression function type.
let fullNameExpression = function (firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
};

console.log(fullNameExpression("Siddhant", "Arjun", "Gadakh"));

// 3. Arrow function type.
let fullNameArrow = (firstName, middleName, lastName) => {
  return `${firstName} ${middleName} ${lastName}`;
};

console.log(fullNameArrow("Siddhant", "Arjun", "Gadakh"));

// Iterating from 0 to n using for loop
function iterateNumbers(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

iterateNumbers(100);

// Same operation using function expression
let printNumbers = function (n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
};

printNumbers(2);
