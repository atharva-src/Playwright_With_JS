//class --> class is more than a object, its a blueprint to get objects and its method 

//class defines the bheaviour and of the objects , and object on other hand represent class

/**
 * syntax of object 
 * 
 * 
 */
let obj = {
    hello: "hi",
    sampleobj: "object"
}

//---------------------------
//synatx of defining a class 
class person {
    //code 
}

let person1 = new person()

console.log(person1)

//---------------------------------------------------

//ES6 class object -->

class Details {

    constructor(firstname, middlename, lastname, age) {
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
        this.age = age
    }
}

let dd = new Details()
console.log(dd)
let sidDetails = new Details("siddhant", "arjun", "gadakh", 25)

console.log(sidDetails)

// example --> create a object in such way that if no info is given it gives default info

class Person {
    constructor(name = "admin", lastname = "givenadimn", year = "givenyear", country = "given country") {
        this.name = name
        this.lastname = lastname
        this.year = year
        this.country = country
    }
}
//module.export = Person

let d = new Person()
console.log(d)

let sid2 = new Person("sid", "gadakh", "1999", "India")
console.log(sid2)

// class methods -----------> 




//------------------------------------------------

class personal_Details {
    constructor(firstname, middlename, lastname, age) {
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
        this.age = age
    }

    displayfullname() {
        const fullname = this.firstname + " " + this.middlename + " " + this.lastname
        return fullname
    }

    get get_age() {
        return this.age
    }

    set set_age(Age) {
        this.age = Age
    }
}


let sid_perosonal = new personal_Details("sid ", "arjun", "gadakh", 25)

// aar.push("ending")
console.log(sid_perosonal)

console.log(sid_perosonal.displayfullname())

console.log(sid_perosonal.get_age)

sid_perosonal.set_age = 50

console.log(sid_perosonal)

//sid  arjun gadakh
// //personal_Details {
//     firstname: 'sid ',
//     middlename: 'arjun',
//     lastname: 'gadakh',
//     age: 25
//   }

//-------------------------------------------------------------

//getter and setter methods-->

//getter --> the get allows to get any method form the class given 


//------------------------------------------------------------------------------------


// static --> the methods defined with keyword as static are method for a class 
//static methos are not called on instance but on the class 


//---------------------------------------------------------------------------------//

class personal_Details1 {
    constructor(firstname, middlename, lastname, age) {
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
        this.age = age
    }

    displayfullname() {
        const fullname = this.firstname + " " + this.middlename + " " + this.lastname
        return fullname
    }

    get get_age() {
        return this.age
    }

    set set_age(Age) {
        this.age = Age
    }

    static ShowDate() {
        let date = new Date()
        let fulltime = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return fulltime

    }

    static showtime() {
        let date = new Date()
        let fulltime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return fulltime
    }
}

console.log(personal_Details1.ShowDate()) //10/12/2024
console.log(personal_Details1.showtime())
// static methods are also used as uitility function 

