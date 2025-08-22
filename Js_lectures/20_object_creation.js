//what is object --> a non primitive data type which stores the in key and value pair and is wrapped in {}

//1 object literal 
let personaldetails = {
    firstname: "siddhant",
    lastname: "gadakh",
    age: 26
}

//-----------------------------------------------
//method to use to create objects 
//2 function constructor 

function Details(firstname, lastname, age) {

    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}

let sid_details = new Details("siddhant", "gadakh", 26)
let amol_details = new Details("amol", "jadhav", 28)

//this keyword------------ this keyword refers to current context 

console.log(amol_details)
console.log(sid_details)
console.log("--Ans1--")


//3 factory function 

function Details2(firstname, lastname, age) {
    return{firstname,
    lastname,
    age}
}

let sid_details2 = new Details2("siddhant", "gadakh", 26)
let amol_details2 = new Details2("amol", "jadhav", 28)

console.log(amol_details2)
console.log(sid_details2)

//examples 2 

function Book(name, year, author) {
    return { name,
    year,
    author}
}

let Atomichabbits = new Book("atomic habbits", 2017, "robert")

console.log(Atomichabbits)
// ----------------------------------------------------------------------

//object oreinted programings --> (OOPS)

//herintance , polymorsigm , abstraction , encapulsotion

//page object modeling --> cypress playwright


//es6 ---> class 




