// Datatypes

// 1. Primitive Datatypes:
//    - number
//    - string
//    - NaN
//    - undefined
//    - boolean
//    - null

// 2. Non-Primitive Datatypes:
//    - arrays
//    - objects

// Conversion: Number to String and String to Number

// 1. Conversion from Number to String
let x1 = 100;
let x2 = "200";
console.log(x2 + x1); // Output: "200100" (String concatenation)

// 2. Conversion from String to Number

w// a. Using parseInt() - Converts a string into an integer
let x3 = parseInt(x2);
console.log(x3 + x1); // Output: 300 (Number addition)
console.log(typeof x3); // Output: "number"

// b. Using Number() - Converts a string into a number
let x4 = Number(x2);
console.log(x4 + x1); // Output: 300 (Number addition)
console.log(typeof x4); // Output: "number"

// c. Using the unary plus (+) operator
let num1 = "10000";
let num2 = +num1;
console.log(typeof num2); // Output: "number"

// 3. Conversion from Number to String

// a. Using toString() method
let num3 = 7020400749;
let num4 = num3.toString();
console.log(typeof num4); // Output: "string"
