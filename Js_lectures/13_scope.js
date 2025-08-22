// Variables in JavaScript can be declared using const, let, or var.

// 1. **const**: 
// - Once a value is assigned, you cannot update it.
// - Has local (block) scope.
const constantValue = 10;
// constantValue = 20; // This will throw an error because const values cannot be updated.

// 2. **let**:
// - You can update the value after assignment.
// - Also has local (block) scope.
let variableValue = 15;
variableValue = 25; // This is allowed.

// 3. **var**:
// - You can update the value after assignment.
// - Has global scope if declared outside a function, and function scope if declared inside a function.
var globalVariable = 30;
globalVariable = 40; // This is allowed.

// -------------------
// Global Scope:
// Variables declared outside any function or block are accessible throughout the page and are called global scoped variables.
var x = 20;
console.log(x); // 20

function printX() {
  console.log(x); // 20 (global variable accessible inside the function)
}
printX(); // 20

if (true) {
  console.log(x); // 20 (global variable accessible inside the block)
}

console.log(x); // 20 (global variable accessible outside the block)

// -------------------
// Local Scope:
// Variables declared inside a function or block are local scoped, meaning they can't be accessed outside that function or block.

// 1) Function Scope:
function printY() {
  let y = 100;
  console.log(y); // 100 (local variable inside the function)
}

function printZ() {
  let y = 250;
  console.log(y); // 250 (local variable inside the function)
}

printY();
printZ();

// The variable `y` declared in the functions is not accessible outside:
let y = "newvalue";
console.log(y); // Outputs: "newvalue"

// 2) Block Scope:
if (true) {  
  let a = 456;
  console.log(a); // 456 (local variable inside the block)
}

// `a` is not accessible outside the block where it was declared:
// console.log(a); // This will throw an error as `a` is block-scoped.

