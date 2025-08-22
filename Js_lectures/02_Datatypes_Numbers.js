// day2.js

// Number Datatype in JavaScript

// What is considered a number in JS?
// - Integers: (-Infinity, +Infinity)
// - Float numbers: 9.81, 100.01

// Correct examples of declaring numbers:
let age = "25";
let gravity = 9.81;
let pi = 3.14;
let radius = 2;

// Output the values
console.log("My current age is", age);
console.log("Gravity:", gravity);

// typeof operator is used to check the datatype of a variable:
console.log(typeof age); // number
console.log(typeof "example"); // string

// Every datatype has some built-in methods
// Methods are predefined logic that extends the functionality of the datatype.

// Identifying number methods:
// - Math: When you use a Math method, it's often for number manipulation.

// Rounding:
// Math.round() - Rounds to the nearest integer.
// If the float is below 0.5 -> rounds down to 0.
// If the float is 0.5 or above -> rounds up to 1.

let num = 0.4;
let num1 = 0.5; 



console.log(Math.round(num));  // Output: 0
console.log(Math.round(num1)); // Output: 1

// Math.ceil() - Converts a float to the nearest highest integer.
// Example:
let q = 119.831;
let w = Math.ceil(q);
console.log("----CEIL---answer---")
console.log(w); // Output: 10
console.log("----CEIL---answer---")

let ww = 6.1;
console.log(Math.ceil(ww)); // Output: 7

/* 
  Ceil Examples:
  6.1 --> 7
  6.9 --> 7
*/

// Math.floor() - Converts a float to the nearest lowest integer.
let n = 6.1;
let n1 = 6.9;
console.log(Math.floor(n));  // Output: 6
console.log(Math.floor(n1)); // Output: 6

// Math.random() - Generates a random number between 0 and 1 (0.0 to 0.9). 
console.log(Math.random());  

// To generate random numbers between 0 and 10:
console.log("---Random_num_generation--")
console.log((Math.random() * 11)); // 0 to 10  
console.log("---Random_num_generation--")
 
// Example: Dice roll simulation (1 to 6) 
console.log("---Dice roll simulation---")
console.log(Math.floor(Math.random() * 6)+1 );
console.log("---Dice roll simulation---")

// Explanation of Dice logic:
// Math.random() * 6 generates a number between 0.0 and 5.9.
// Math.floor() converts it to an integer from 0 to 5.
// Adding 1 shifts the range to 1-6.

// Summary of Math Methods:
// 1. Math.round() - Rounds a number to the nearest integer.
// 2. Math.ceil() - Rounds a number up to the nearest integer.
// 3. Math.floor() - Rounds a number down to the nearest integer.
// 4. Math.random() - Generates a random number between 0 and 1.

// Usage Examples:
console.log(Math.round(4.5));   // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.floor(4.9));   // 4
console.log(Math.random());     // Random number between 0 and 1
