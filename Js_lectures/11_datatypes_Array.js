// Non-primitive data types include arrays and objects
// These can be changed and modified

// Arrays: A datatype used to store multiple values

// How to determine if a data type is an array:
// Use square brackets [] to define an array
// Each value in the array is separated by a comma

// Example of declaring arrays:
let array = [];
console.log(array);

const arr = Array();
console.log(arr);

// Example:
let ar =      ["Siddhant", 23, "Arjun", "Gadakh", 7020400749, true, "@#$%^"];
// Array indexes: 0        1      2         3          4        5      6

// Values in the array are stored at indexes
// Length of the array is always (last index + 1)
console.log(ar.length); // Output: 7

// Example with string split:
let str = "hello I am learning JavaScript and currently I am seeing the topic loops";
let staa = str.split(" ");
console.log(staa); // Splitting the string into an array

// Basic array operations:

// 1. Extract a value from the array:
console.log(ar[0]); // Output: Siddhant
console.log(ar[ar.length - 1]); // Output: @#$%^

// 2. Update any value in the array:
ar[0] = "SID";
console.log(ar);
ar[ar.length - 1] = "male";
console.log(ar);

// 3. Delete a value from the array:
delete ar[0];
console.log(ar);

// 4. Add a value to the array:
ar.unshift("hello");
console.log(ar);

// Array Methods (24-30):

// Method: push() -> Adds a value at the end of the array
let ard = ["Siddhant", 23, "Arjun", "Gadakh", 7020400749, true, "@#$%^"];
ard.push("lastname");
console.log(ard); // ['Siddhant', 23, 'Arjun', 'Gadakh', 7020400749, true, '@#$%^', 'lastname']

// Method: unshift() -> Adds a value at the start of the array
ard.unshift("firstname");
console.log(ard); // ['firstname', 'Siddhant', 23, 'Arjun', 'Gadakh', 7020400749, true, '@#$%^', 'lastname']

// Method: pop() -> Removes the last value in the array
ard.pop();
console.log(ard); // ['firstname', 'Siddhant', 23, 'Arjun', 'Gadakh', 7020400749, true, '@#$%^']

// Method: shift() -> Removes the first value in the array
ard.shift();
console.log(ard); // ['Siddhant', 23, 'Arjun', 'Gadakh', 7020400749, true, '@#$%^']

// Method: splice() -> Used to add or remove a value at any index of the array
let arrr = [1, 2, 3, 5, 6];
arrr.splice(3, 0, 4); // Adding '4' at index 3
console.log(arrr); // Output: [1, 2, 3, 4, 5, 6]

// Removing elements from index 1 to 5:
arrr.splice(1, 4);
console.log(arrr); // Output: [1, 6]

// Method: slice() -> Used to extract a portion of an array
let rr = [10, 9, 8, 7, 6, 5];
let cc = rr.slice(1, 3); // Extract elements from index 1 to 3 (excluding 3)
console.log(cc); // Output: [9, 8]

// Method: join() -> Converts an array into a string
let zz = ard.join("-->");
console.log(zz); // Output: "Siddhant-->23-->Arjun-->Gadakh-->7020400749-->true-->@#$%^"
console.log(typeof zz); // Output: string

// Converting the string back into an array:
let dd = zz.split("-->");
console.log(dd); // ['Siddhant', '23', 'Arjun', 'Gadakh', '7020400749', 'true', '@#$%^']

// More array operations:

// Example array:
let arr1 = ["qwerty", "oiuyt", "xcvbnm"];
console.log(arr1);

// Using the Array constructor:
let arr2 = Array("qwerty", "oiuyt", "xcvbnm");
console.log(arr2);

// Converting a string into an array:
let strr = "qwerty uioplkjh gfdszxc vbnm";
let arr3 = strr.split("");
console.log(arr3);

// Getting the length of an array:
console.log(arr1.length);

// Accessing the last element of the array:
console.log(arr1[arr1.length - 1]);

// Array manipulations:

let arra = ["Siddhant", "Vaibhav", "Al", "Athrava", "Shrinivas", "Sneha"];

// 1. Retrieve any value from the array:
console.log(arra[2]); // Output: Al

// 2. Update a value in the array:
arra[2] = "Amol";
console.log(arra);

// 3. Add values to the array:
arra.push("Qwerty");
console.log(arra); // ['Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 4. Add value at the start:
arra.unshift("KJHGFD");
console.log(arra); // ['KJHGFD', 'Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 5. Add value in the middle of the array:
arra.splice(2, 0, "ZXCVB");
console.log(arra); // ['KJHGFD', 'Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha', 'Qwerty']

// 6. Delete the last element of the array:
arra.pop();
console.log(arra); // ['KJHGFD', 'Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 7. Delete the first element:
arra.shift();
console.log(arra); // ['Siddhant', 'ZXCVB', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 8. Extract values using slice():
let newarr = arra.slice(2, 5);
console.log(newarr); // ['Vaibhav', 'Amol', 'Athrava']

// 9. Delete value using splice():
arra.splice(1, 1);
console.log(arra); // ['Siddhant', 'Vaibhav', 'Amol', 'Athrava', 'Shrinivas', 'Sneha']

// 10. Sort array alphabetically:
arra.sort();
console.log(arra); // ['Amol', 'Athrava', 'Shrinivas', 'Siddhant', 'Sneha', 'Vaibhav']

// Sorting a number array:
let numarra = [97854726, 1, 5, 50, 60, 700, 800, 900, 5024, 65445, 28522, 138561, 7891];
numarra.sort((a, b) => { return a - b });
console.log(numarra); // Sorted numerically

// 11. Reverse an array:
arra.reverse();
console.log(arra); // ['Vaibhav', 'Sneha', 'Siddhant', 'Shrinivas', 'Athrava', 'Amol']

// 12. Check if an array includes a value:
console.log(arra.includes("Siddhant")); // true

// 13. Find the index of a value:
console.log(arra.indexOf("Shrinivas")); // 3
console.log(arra[3]); // Shrinivas

// 14. Convert array into a string:
let str1 = arra.join(" ");
console.log(str1); // 'Vaibhav Sneha Siddhant Shrinivas Athrava Amol'
console.log(typeof str); // string

// 15. Concatenate arrays:
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combined = num1.concat(num2, num3);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 16. Flatten an array of arrays:
let mix = [1, 2, 3, 4, ["qwertyu", "asdfgh", "zxcvbn"], [true, false]];
let solved = mix.flat();
console.log(solved); // [1, 2, 3, 4, 'qwertyu', 'asdfgh', 'zxcvbn', true, false]


//-----------------------------------------------------------------------------------------------//


//  * 1) Find the largest and the smallest number from the array.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 55, 88, 9, 99, 44, 55, 2587452, 256852, 0, 12585]

let largestnumber = (Math.max(...array1))

console.log(largestnumber) //2587452

let Smallestnumber = (Math.min(...array1))
console.log(Smallestnumber) //0

//  * 3) Add 2 to each element of the array.
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newnumarr = []
for (let i = 0; i < numArray.length; i++) {
    newnumarr.push(numArray[i] + 2)
}

console.log(newnumarr) //[3, 4,  5,  6, 7,8, 9, 10, 11]

// map ------> used to iterate over every element in the array 

//syntax 
/**
 * let arraynew=oldarryname.map((el,index,arr)=>{
 * return el any operation to perform
 * })
 */

let maparr = numArray.map((el, index, arr) => {
    return el + 2
})

console.log(maparr) // [3, 4,  5,  6, 7,8, 9, 10, 11]


let maparr2=numArray.map((el,index,arr)=>{

    return el-1
})

console.log(maparr2) //[0, 1, 2, 3, 4,5, 6, 7, 8 ]

//  *
//  * 4) Find the sum of all elements in the array.
let   numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum=0
for(let i=0;i<numArray2.length;i++){
    // sum=sum+numArray2[i]
    sum+=numArray2[i]
}

console.log(sum) // 45


// reduce ==> used to get the collective sum in array 

let arrsum= numArray2.reduce((el,index,arr)=>{
return el+index

})

console.log(arrsum)
//  *
//  * 5) Get all values in the array that are greater than 5.
 let numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//------------loop---------

let greaterThan5 =[]

for(let i=0;i<numArray1.length;i++){
  if(numArray1[i]>5){
greaterThan5.push(numArray1[i])
  }
}

console.log(greaterThan5) //[ 6, 7, 8, 9 ]


//filter-------------> used to filter out each element in the array 

let gr5=numArray1.filter((el,index,arr)=>{
    return el>5
})

console.log(gr5) //[ 6, 7, 8, 9 ]



//* 2) Convert all elements of the following array to uppercase.
let   namearray = ['vaibhav', 'sneha', 'siddhant', 'shrinivas', 'athrava', 'Amol']


for(let i =0;i<namearray.length;i++){
    console.log(namearray[i].toUpperCase())
}


/**
 * VAIBHAV
SNEHA
SIDDHANT
SHRINIVAS
ATHRAVA
AMOL
 */

// Foreach==> 
namearray.forEach((el,index,arr)=>{
      console.log( el.toUpperCase())
    })

/**
 * 
 * VAIBHAV
SNEHA
SIDDHANT
SHRINIVAS
ATHRAVA
AMOL
 */


//every --> &&(true & false)

// let numArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8,9]

let checkever=numArray1.every((el,index,arr)=>{
    return el>0
})


console.log(checkever)
//some--||


let checksome=numArray1.some((el,index,arr)=>{
    return el>5
})

console.log(checksome)

// Filter out companies which have more than one 'o' without using the filter method
let company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let result = []

for (let i = 0; i < company.length; i++) {

  let count = 0;

  // we have to find occurance of letter o 
  for (let char of company[i].toLowerCase()) {
    if (char === "o") {
      count++
    }
  }
  if (count > 1) {
    result.push(company[i])
  }
}

console.log(result)