// Datatypes in JavaScript:

// 1. Strings:
// Strings are sequences of characters and can be defined using single quotes (''), double quotes (""), or backticks (``).

// Example of string declaration:
let str = "";           // Empty string
let str1 = 'siddhant';   // String in single quotes
let str2 = `12345678`;   // String in backticks (used for template literals)
let str3 = "@@#$@#$%^&*"; // Special characters in a string
let str4 = "true";       // String containing the word "true"

// Checking the data type of the variables:
console.log(typeof(str));   // string
console.log(typeof(str1));  // string
console.log(typeof(str2));  // string
console.log(typeof(str3));  // string
console.log(typeof(str4));  // string

// 2. Numbers:
// JavaScript has various methods for working with numbers.

let num = 10.6;

// Examples of common number methods:

console.log(Math.floor(num));  // floor gives the lowest integer value (output: 10)
console.log(Math.ceil(num));   // ceil gives the highest integer value (output: 11)
console.log(Math.random());    // generates a random number between 0 and 1
console.log(Math.round(num));  // round rounds off the number (output: 11)

// 3. String Methods:
// JavaScript provides a wide range of methods to manipulate strings.

let strExample = 'JavaScript is awesome';

// Common string methods:
console.log(strExample.toUpperCase());  // Converts the string to uppercase  
console.log(strExample.toLowerCase());  // Converts the string to lowercase 
console.log(strExample.substring(0, 9));  // Extracts a part of the string (substring)
console.log(strExample.match('is'));    // Searches for a match in the string
console.log(strExample.replace('awesome', 'great')); // Replaces part of the string

// String Properties:
// 1. `length` property returns the length of the string.
console.log(strExample.length);  // Example output: 20

// 2. Characters are indexed in strings (zero-based indexing):
// Example:
let name = 'siddhant';
// Indexing:  s  i  d  d  h  a  n  t
//            0  1  2  3  4  5  6  7
console.log(name[1]);  // Output: 'i'

// String concatenation:

let firstname = "Siddhant";
let lastname = "Gadakh";
let middlename = "Arjun";

// Using the + operator:
let fullname = firstname + " " + middlename + " " + lastname;
console.log(fullname);  // Output: "Siddhant Arjun Gadakh"

// Using template literals (introduced in ES6):
let fullnamenew = `My full name is ${firstname} ${middlename} ${lastname}`;
console.log(fullnamenew);  // Output: "My full name is Siddhant Arjun Gadakh"

// Long literal strings:
let longString = `wertghjkjnhbgfdertyuijhbvfdrtyujhbgfrtyujnbvcdertyujhcxsaertyuijhgfrtyu\
ghjkiuyhjkiuhbnmkiuhbnmkiujh\ 
String that spans across multiple lines is called a long literal string.`;

console.log(longString);

// 4. Escape Characters:
// Escape characters are special characters used in strings starting with a backslash (\).
// Examples of commonly used escape characters:

// (\n) - Newline:
console.log('I\nam\nlearning\nJavaScript');

// (\t) - Tab (used to add 8 spaces):
let str9 = 'Siddhant\tGadakh';
console.log(str9);

// (\') - Adding single quotes in a string declared with single quotes:
let str10 = 'Hello, my name is \'Siddhant\'';
console.log(str10);

// (\") - Adding double quotes in a string declared with double quotes:
let str11 = "Hello, my name is \"Siddhant\"";
console.log(str11);

// Note: Always use escape characters carefully to handle special characters or multi-line strings effectively