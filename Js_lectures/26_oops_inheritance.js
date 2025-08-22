// oops --> object oriented programing structure 

/**
 * inheritance
 * abstraction 
 * encapsulation
 * polymorshims
 * prototype 
 */

// where will you use this as automation testor --->
/**
 * This concepts helps you created the better POM (Page object model)frame 
 * this framework can be used in cypress , playwright , selnium , and other tools  
 * 
 * (** in interview they will only ask te theory in rare cases they might ask an example )
 */


//------------------------------------------------ Inheritance----------------------------------
// inhertiance --- > 
/**
 * Inheritance in JavaScript allows one class to inherit properties and methods from another class,
 *  promoting code reusability and creating a hierarchical relationship between classes.
 */
//paraent --> 
class Animal {
    constructor(name){
        this.name = name
    }
    eat() {
        console.log(`the ${this.name} is eating`)
    }
}

// what is super keyword --> when you have to access the property of a parent in a child class you use super keyword  

class Dog extends Animal{
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    brak() {
        console.log(`${this.name} is braking`)
    }

}


const myDog = new Dog("Buddy", "Golden Retriver")


myDog.brak() // this is a porperty of dog class
myDog.eat() // buddy eating
// let myDog = new Animal("dog")

// console.log(myDog.eat())

class cat extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    meow() {
        console.log(`${this.name} is meowing and  needs milk`)
    }
}

let mycat = new cat("tom", "persain")

mycat.meow()
mycat.eat()



// -------------------

// overriding --> happens when a subclass or child object provides a new implementaion for a method 
//that is already defined in parent is called as overriding 

class Animal {

    speak() {
        console.log("animal make sound")
    }
}
class dog extends Animal {
    constructor(breed) {
        super(breed)
        this.breed = breed

    }
    speak() {
        console.log("dog barks")
    }
}

let mydog = new dog("lab")

mydog.speak()
console.log(mydog)

// --------------------- overloading 

// overlaoding --> when you define multiple function with same name but different parameter it is called
//as overloading 

// 
function greet(name, age,number) {

    if (arguments.length === 1) {
        console.log(`hello ${name} !`)

    }
    else if (arguments.length === 2) {
        console.log(`hello ${name} you are ${age} years old`)
    }
   

}

greet("sid")
greet("sid", 26)
greet("sid", 26,976004310)






