// Data Types
// Primitive: string, boolean, number, null, undefined
// Non-Primitive: arrays, objects
// Set and Map

// Set --> A collection of unique values
// Example:
let arr = [1, 2, 4, 5, 6, 7, 4, 6, 2];
console.log(arr.sort((a,b)=>{return a-b}))
console.log(new Set(arr)); // Set { 1, 2, 4, 5, 6 }

// Declaring a Set
const setOne = new Set();
console.log(setOne); // Set(0) {}

const languages = ["English", "Spanish", "French", "English", "Spanish", "German", "French"];
let setOfLanguages = new Set(languages);
console.log(setOfLanguages); // Set { 'English', 'Spanish', 'French', 'German' }

// Looping through a Set
for (const lang of setOfLanguages){
    console.log(lang);
}
// Output:
// English
// Spanish
// French
// German

// Operations on Set
// Adding elements to a Set
let companies = new Set();
companies.add("Google");
console.log(companies); // Set { 'Google' }
companies.add("Microsoft");
console.log(companies); // Set { 'Google', 'Microsoft' }

// Adding multiple elements from an array to a Set
let companyArray = ["Google", "Amazon", "Microsoft", "Oracle"];
let companySet = new Set();
for (let company of companyArray) {
    companySet.add(company);
}x
console.log(companySet); // Set { 'Google', 'Amazon', 'Microsoft', 'Oracle' }

// Deleting values from a Set
companySet.delete("Oracle");
console.log(companySet); // Set { 'Google', 'Amazon', 'Microsoft' }
companySet.delete("Amazon");
console.log(companySet); // Set { 'Google', 'Microsoft' }

// Clearing a Set
setOfLanguages.clear();
console.log(setOfLanguages); // Set(0) {}

// Converting array to Set to remove duplicates
let numArray = [1, 1, 2, 2, 4, 4, 5, 5, 6, 6, 67, 7, 7, 8, 8, 5];
let setOfNumbers = new Set(numArray);
console.log(setOfNumbers); // Set { 1, 2, 4, 5, 6, 67, 7, 8 }

// Union of Sets (finding common elements)
let a = [1, 2, 3];
let b = [4, 5, 6, 7, 8];
let c = [...a, ...b];
let unionSet = new Set(c);
console.log(unionSet); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection of Sets
let x = [1, 2, 3, 4, 5];
let y = [4, 5, 6, 7, 8];
let setX = new Set(x);
let setY = new Set(y);
let intersection = x.filter((el) => setY.has(el));
console.log(new Set(intersection)); // Set { 4, 5 }

// Difference between Sets
let uniqueX = x.filter((el) => !setY.has(el)); // {1, 2, 3}
let uniqueY = y.filter((el) => !setX.has(el)); // {6, 7, 8}
let differenceSet = new Set([...uniqueX, ...uniqueY]);
console.log(differenceSet); // Set { 1, 2, 3, 6, 7, 8 }

// Example of using Set to count occurrences
const langArray = ["English", "Spanish", "French", "English", "Spanish", "German", "French", "English"];
const uniqueLanguages = new Set(langArray);
const languageCounts = [];
for (let lang of uniqueLanguages) {
    const filteredLangs = langArray.filter((el) => el === lang);
    languageCounts.push({ lang, count: filteredLangs.length });
}
console.log(languageCounts); // [{ lang: 'English', count: 3 }, { lang: 'Spanish', count: 2 }, ...]

//--------------------------------------------------------------------------------------------------



// Map --> A collection of unique elements stored in key-value pairs
let countryCapitalArray = [
    ["India", "Delhi"],
    ["USA", "Washington DC"],
    ["England", "London"]
];
let countryCapitalMap = new Map(countryCapitalArray);
console.log(countryCapitalMap); // Map { 'India' => 'Delhi', 'USA' => 'Washington DC', 'England' => 'London' }
console.log(countryCapitalMap.size); // 3

// Adding values to a Map
countryCapitalMap.set("Bangladesh", "Dhaka");
console.log(countryCapitalMap); // Map { 'India' => 'Delhi', 'USA' => 'Washington DC', 'England' => 'London', 'Bangladesh' => 'Dhaka' }

// Getting values from a Map
console.log(countryCapitalMap.get("USA")); // Washington DC

// Checking if a key exists in a Map
console.log(countryCapitalMap.has("England")); // true

// Looping through a Map
for (const [country, capital] of countryCapitalMap) {
    console.log(`${country}: ${capital}`);
}
// Output:
// India: Delhi
// USA: Washington DC
// England: London
// Bangladesh: Dhaka




// // Intersection of Sets
// let x = [1, 2, 3, 4, 5];
// let y = [4, 5, 6, 7, 8];
// let setX = new Set(x);
// let setY = new Set(y);
// let intersection = x.filter((el) => setY.has(el));
// console.log(new Set(intersection)); // Set { 4, 5 }

// // Difference between Sets
// let uniqueX = x.filter((el) => !setY.has(el)); // {1, 2, 3}
// let uniqueY = y.filter((el) => !setX.has(el)); // {6, 7, 8}
// let differenceSet = new Set([...uniqueX, ...uniqueY]);
// console.log(differenceSet); // Set { 1, 2, 3, 6, 7, 8 }


//set --> collection of  unique element 

// union of set ---> 
let aa=[1,2]
let bb =[3,4]

let AA = new Set(aa)
let BB = new Set(bb)
let CC = new Set([...aa,...bb])

console.log(CC)
//Set(4) { 1, 2, 3, 4 }



// intersection

let dd=[1,2,3,4,5]

let ee=[5,6,7,8,9,10]

let DD=new Set(dd)
let EE = new Set(ee)

//---------------intersection------------------
let intersection1=dd.filter((el)=>EE.has(el))
let newinterSet = new Set(intersection1)

console.log(newinterSet) //Set(1) { 5 }


//-------------------differnece-------------------------

let diff1=dd.filter((el)=>!EE.has(el))
let diff2 =ee.filter((el)=>!DD.has(el))

let DIFF = new Set([...diff1 ,...diff2])
console.log(DIFF) //Set(9) { 1, 2, 3, 4, 6, 7, 8, 9, 10 }