// Introduction to JavaScript
// ===========================

// Basic Commands and Getting Started
// ----------------------------

// Comments
// Comments are used to explain the code and make it easier to understand.
// There are two types of comments in JavaScript:

// Single-Line Comments
// Syntax: // 
// Example:
  // This is a single-line comment

// Multi-Line Comments
// Syntax: /* ... */
// Example:
  /*
   This is a multi-line comment
   It spans multiple lines
  */

// Commenting Etiquette
// 1) Comments should be short but well descriptive.
// 2) Comments should be relevant and appropriate to the code.

// Output to Console
// ------------------

// Use console.log() to print output to the console.
console.log("Hello, world!");

// To run a JavaScript file and view the output, use:
// $ node filename.js

// Variables
// ------------------

// `let`: Use when the variable's value can change or be updated.
let num = 10;
num = 100;
console.log(num); // Output: 100

// `const`: Use when the variable's value will not change.
const gravity = 9.81;
console.log(gravity); // Output: 9.81

// `var`: Use when the variable's value can change or be updated. 
// (Note: `let` and `const` are generally preferred over `var`).
var oldValue = 2;
oldValue = 100;
console.log(oldValue); // Output: 100

// Variable Declaration Rules
// ---------------------------

// 1) Variable names should not begin with a number.
// Example:
// let 1name = 10; // Incorrect
// let name1 = 10; // Correct

// 2) Variable names should not have special characters, except for underscores (_) and dollar signs ($).
// Example:
// let name#one = 10; // Incorrect
// let name_one = 10; // Correct
// let $name = 10; // Correct

// 3) Variables should be declared only once.
// Example:
// let myVariable = 10;
// let myVariable = 20; // Incorrect

// 4) Variable names should follow camelCase convention (start with a lowercase letter and capitalize subsequent words).
// Example:
// let firstName = "Siddhant";
// let lastName = "Gadakh";

// Variable Declaration Syntax
// ---------------------------

let nameOfVariable = "value";

let firstName = "Siddhant";
let lastName = "Gadakh";

console.log(firstName, lastName);

let firstName1 = "Sid", lastName1 = "Gadakh";

console.log(firstName1);
console.log(lastName1);

// Data Types
// ------------------

// JavaScript data types can be categorized into two main types:

// Primitive Data Types
// ---------------------
// These are basic data types that are immutable.
// Examples:
// - null
// - boolean (true or false)
// - undefined
// - string
// - number

// Non-Primitive Data Types
// -------------------------
// These are more complex data types that can be manipulated.
// Examples:
// - Arrays
// - Objects

// Primitive vs. Non-Primitive
// ----------------------------
// - Primitive Data Types: Fixed values that cannot be changed.
// - Non-Primitive Data Types: User-defined structures that can be updated or manipulated.

// let Array = [3,0,1]


///question by akshay \\\
// function MissingNumber(Array){
// Array.sort((a,b)=> a-b);
// for(let i=0;i<=Array.length;i++){
//   if(Array[i]!==i){
//     return i
//   }
// }

// }
// const  Input = [3,0,1];
// console.log(MissingNumber(Input))
// console.log("--MissingNum---")