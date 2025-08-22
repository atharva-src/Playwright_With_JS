// Encapsulation --> encapsulation is a principle where data (properties ) and methods (functions)
// are bundled together in a  object or class , restraining a direct access to some object component
//it helps protect the inetrnal state of an object and only shows the nessacry parts 

// why Encapsulation 
/**
 *  1 to control the access to data 
 *  2 to protect the object state by preventing unauthorise access
 *  3 to make your code organised and easier to maintain
 * 
 */
//example -->

class Person{
 #age // private varaible 

 constructor(name ,age){
    this.name = name 
    this.#age =age
 }

 getDetails(){
    return `${this.name} is ${this.#age} year old`
 }

 #isAdult(){
    return this.#age >=18
 }

 canvote(){
    return this.#isAdult()?"he Can vote":" he cannot vote"
 }

}

let person = new Person("Amol",25)
console.log(person.getDetails())
console.log(person.canvote())



