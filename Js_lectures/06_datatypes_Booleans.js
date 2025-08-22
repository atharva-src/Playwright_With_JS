// Datatypes

// Booleans: Booleans contain two values: true or false.

// Usage: Mainly used for comparisons.

// True values:
// 1. All non-empty strings are considered true.
// 2. All numbers are considered true, whether positive or negative, except for zero (0).

// False values:
// 1. Empty strings ("") are false.
// 2. The number zero (0) is false.
// 3. null is false.
// 4. undefined is false.
// 5. NaN (Not-a-Number) is false.

// Example:
let isTrue = Boolean("hello");  // true
let isFalse = Boolean("");      // false
let isTrueNumber = Boolean(42); // true
let isFalseNumber = Boolean(0); // false

console.log(isTrue);        // Output: true
console.log(isFalse);       // Output: false
console.log(isTrueNumber);  // Output: true
console.log(isFalseNumber); // Output: false
