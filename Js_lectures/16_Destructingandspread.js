// ------------------------ Destructuring and Spread in JavaScript ------------------------

// 1. What is Destructuring?
// Destructuring is a way to unpack arrays and objects and assign them to distinct variables.

// 2. Destructuring an Array
// Example 1: Without Destructuring
let arr = [1, 2, 3, 4];
let num1 = arr[0];
let num2 = arr[1];
let num3 = arr[2];
let num4 = arr[3];
console.log(num1, num2, num3, num4);

// Example 2: With Destructuring
let [number1, number2, number3, number4] = arr;
console.log(number1, number2, number3, number4); // Output: 1 2 3 4

// Example 3: Destructuring with String Array
let names = ["Siddhant", "Amol", "Atharva", "Adesh"];
let [person1, person2, person3, person4] = names;
console.log(person1, person2, person3, person4); // Output: Siddhant Amol Atharva Adesh

// Example 4: Nested Arrays
let fullStack = [
    ["HTML", "CSS", "JS", "React", "Angular"],   // Frontend stack
    ["Node", "Express", "MongoDB", "SQL"]         // Backend stack
];
let [frontend, backend] = fullStack;
console.log(frontend);  // Output: [ 'HTML', 'CSS', 'JS', 'React', 'Angular' ]
console.log(backend);   // Output: [ 'Node', 'Express', 'MongoDB', 'SQL' ]

// Destructuring specific values from nested arrays
let [[front1, front2, front3, front4], [back1, back2, back3, back4]] = fullStack;
console.log(front1, front2, front3, front4, back1, back2, back3, back4);  // Output: HTML CSS JS React Node Express MongoDB SQL

// 3. Skipping Elements during Destructuring
let numbers = [1, 2, 3, 4];
let [Num1, , , Num4] = numbers;
console.log(Num1, Num4); // Output: 1 4

// 4. Default Values in Destructuring
// If a value is undefined in the array, you can assign it a default value during destructuring
let values = [undefined, "Siddhant", "Amol"];
let [Name1 = "Adesh", Name2, Name3] = values;
console.log(Name1, Name2, Name3); // Output: Adesh Siddhant Amol

// 5. Using the Spread Operator with Destructuring
// Example where we only want the first two elements and store the rest in another array
let moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, ...remainingNumbers] = moreNumbers;
console.log(a, b);        // Output: 1 2
console.log(remainingNumbers); // Output: [3, 4, 5, 6, 7, 8, 9, 10]

// 6. Loop with Destructuring
let countryCapitalArray = [
    ["India", "Delhi"],
    ["USA", "Washington DC"],
    ["England", "London"]
];
for (let [country, capital] of countryCapitalArray) {
    console.log(`${country}: ${capital}`);
}
// Output:
// India: Delhi
// USA: Washington DC
// England: London

// ------------------------ Destructuring Objects ------------------------

let obj = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,
    experience: 6,
    skills: ["TypeScript", "CI/CD"],
    position: "Automation Tester"
};

// Destructuring object properties into variables
let { firstName, lastName, age, experience, skills, position } = obj;

console.log("--------Object_destruct--------")
console.log(firstName, lastName, age, experience, skills, position);
console.log("--------Object_destruct--------")

// Renaming Variables during Destructuring
let { firstName: fn, lastName: ln, age: ag, experience: ex, skills: sk, position: pos } = obj;
console.log(fn, ln, ag, ex, sk, pos);

// Destructuring specific items from an array inside an object
let [skill1, skill2] = sk;
console.log(skill1, skill2); // Output: TypeScript CI/CD

// ------------------------ Notations in Objects ------------------------

// When to use Dot Notation and Bracket Notation
// - Dot Notation: Use when accessing object properties directly by their name. It is clear and easy to read.
console.log(obj.firstName);  // Output: Vihaan

// - Bracket Notation: Use when accessing per operties dynamically or when the property name includes special characters.
// Example: Accessing properties with a variable
let property = "lastName";
console.log(obj[property]);  // Output: Mehta

// ------------------------ Looping with 'in' and 'of' ------------------------

// 'for...in' is used to iterate over the keys of an object.
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 'for...of' is used to iterate over the values in an array.
let numbersArray = [10, 20, 30];
for (let value of numbersArray) {
    console.log(value);
}



//----------------------------
// examples on destructing 
// spread 

const rect = {
    height: 20,
    width: 10
}

let perimeter = 2 * (rect.height + rect.width)

console.log(perimeter)

// creating functions without using destruture 
function calculateperimeter(rectangle) {
    return 2 * (rectangle.height + rectangle.width)
}

console.log((calculateperimeter(rect)))

//---------------------------------------------

// creating function using destructure 

function peri({ height, width }) {
    return 2 * (height + width)
}

console.log(peri(rect))


//------------------loops in destructing a object 

const EXP = [{
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
}, {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
}]


// console.log(name, capital, languages, population, flag, currency)

for (const { name, capital, languages, population, flag, currency } of EXP) {
    console.log(name, capital, languages, population, flag, currency)
}


//---------------------------------------------------------------------------------------

//Spread operator
// how is spread operator denoted (...name)

let arr2= [1,2,3,47,5,6,7,8,9]

console.log(...arr2)  //1 2 3 47 5 6 7 8 9
 
let [NUM1,NUM2,...rest]=arr2

console.log(NUM1,NUM2,rest)

// spread opertor is used to copy array

const even =[2,4,6,8,10,12,14,16,18,20]

let EVENNUMBERS=[...even]

console.log(EVENNUMBERS)

let odd=[1,3,5,7,9,11,13,15,17,19,21]

let ODD=[...odd]

console.log(ODD)

let wholenumbers=[...EVENNUMBERS,...ODD]

console.log(wholenumbers)

//-------------------------------------------------------------------

//spread opertor is used to modify or add new value in object

// let afg={
//     name: 'Afghanistan',
//     capital: 'Kabul',
//     languages: ['Pashto', 'Uzbek', 'Turkmen'],
//     population: 27657145,
//     flag: 'https://restcountries.eu/data/afg.svg',
//     currency: 'Afghan afghani'
// }

// const AFG={...afg,currency:"dollars"}

// console.log(AFG)
//--------------------------------------------------------------------------
//spread opertor can be used as multiple parameter in a function

function sumofnum(...args){
    console.log(args)
 }

 sumofnum(1,2,3,4,5,6,78,8,9,524)
//--------------------------------------------------------------

 function sumofnum(...args){
  let sum =0
  for(const num of args){
    sum+=num
  }
  return sum
 }

console.log( sumofnum(1,2,3,4,5,6,78,8,9,524))
console.log(sumofnum(1,2))
console.log(sumofnum(1,2,3,4,5,6,7,8,9,10))

