// Operators -- Symbols used to perform operations

//-------------------------------------------------------------------

// Assignment Operator
// Assignment Operator (=) is used to assign a value to a variable.

let var1 = 20;
console.log(var1); // Output: 20

// x = y (assigns y to x)

// Compound Assignment Operators:
// += adds and assigns, i.e., x += y is equivalent to x = x + y
// -= subtracts and assigns, i.e., x -= y is equivalent to x = x - y

//-------------------------------------------------------------------

// Arithmetic Operators

/**
 * +  ---> Addition
 * -  ---> Subtraction
 * *  ---> Multiplication
 * /  ---> Division
 * %  ---> Modulus (remainder)
 * ** ---> Exponentiation (power)
 */  

console.log(2 ** 3); // Output: 8

//-------------------------------------------------------------------

// Comparison Operators

/**
 * >   ---> Greater than
 * <   ---> Less than
 * >=  ---> Greater than or equal to
 * <=  ---> Less than or equal to
 * !   ---> Not (reverses values)
 * ==  ---> Checks equality (values only)
 * === ---> Checks equality (values and types)
 */

console.log(8 == "8");  // Output: true (values are similar)
console.log(8 === "8"); // Output: false (value and type mismatch)

console.log(8 !== "8"); // Output: true (not equal in type)
console.log(NaN == NaN); // Output: false (NaN is not equal to itself)

//-------------------------------------------------------------------

// Logical Operators

// AND (&&)
/*
 * T && T  ==> True

 * F && F  ==> False
 * T && F  ==> False
 * F && T  ==> False 
 */

console.log(4 > 3 && 10 > 5); // Output: true
console.log(2 > 3 && 10 > 5); // Output: false

// OR (||)
/*
 * T || T  ==> True 
 * F || F  ==> False 
 * T || F  ==> True 
 * F || T  ==> True 
 */ 

console.log(4 > 3 || 10 > 5); // Output: true
console.log(2 > 3 || 10 > 5); // Output: true

// NOT (!)
/*
 * !T ==> False
 * !F ==> True
 */ 

console.log(!(4 > 3)); // Output: false 

//-------------------------------------------------------------------

// Increment Operator (++) 

// Pre-increment (increment happens before the variable is used)
let incr = 10; 
console.log(++incr); // Output: 11 
console.log(incr);   // Output: 11 

// Post-increment (increment happens after the variable is used)
let incr1 = 20;
console.log(incr1++); // Output: 20 
console.log(incr1);   // Output: 21 

//-------------------------------------------------------------------

// Decrement Operator (--) 
// Pre-decrement (decrement happens before the variable is used)

let incr3 = 10;
console.log(--incr3); // Output: 9 
console.log(incr3);   // Output: 9 

// Post-decrement (decrement happens after the variable is used)
let incr4 = 2;
console.log(incr4--); // Output: 2 
console.log(incr4);   // Output: 1 

//-------------------------------------------------------------------

// Ternary Operator (if-else shorthand) 

// Syntax: condition ? expression_if_true : expression_if_false 

let num = -5;
num > 0
    ? console.log(`Your given number ${num} is a positive number`)
    : console.log(`Your given number ${num} is a negative number`);

let season = "summer";
season === "raining"
    ? console.log("Carry raincoats.")
    : console.log("Do not carry any raincoats.");

// Explanation of ternary operators:
/**
 * ? --> Equivalent to "if"
 * : --> Equivalent to "else"
 */

// Another Example:
let status1 = "DSR SENT";
status1 === "not DSR SENT"
    ? console.log("Work done considered.")
    : console.log("Marked as absent.");
