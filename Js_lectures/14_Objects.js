//Object--> object in js is a variable container that is used to store values
//          the value stored in object is in key and value pair 
//          objects are non primitive datatypes 


// let tatacurv=["adventure","16,00,000","Whitecolor",530,2020]
// length
// string

// how to define a objects ==

let tatacurv = {
    modelName: "adventure",
    Ex_showroomPrice: 1600000,
    Color: "white",
    boot_space: 530,
    makeYear: 2021,
    details: function () {
        return `${this.modelName} the exshowroom price is ${this.Ex_showroomPrice}`
    }
}

// property  is the key and value pair that we define in a object and 
// method : the functions that we define in a object

//let tatacurv2 = { modelName: "adventure", Ex_showroomPrice: 1600000, Color: "white", boot_space: 530, makeYear: 2021 }//

// Math --> object 
// string --> object 
// array--> object 

// let tatacurv = {
//     modelName: "adventure",
//     Ex_showroomPrice: 1600000,
//     Color: "white",
//     boot_space: 530,
//     makeYear: 2021,
//     details:function(){
//         return `${this.modelName} the exshowroom price is ${this.Ex_showroomPrice}`
//     }
//     // there is a hidden property in a object called as prototype 
// }

/**
 * when we have any non-primitive datatype we have 4 major operation to perform

//1 retriving the value 
//2 adding a new value 
//3 upadting exsiting value 
//4 delete the value 
 */

// array.push("value")

// 1 barcket notiation --> beacuse dot notions dosent work in loop 
// 2 dot notations --> easy to understand 




//1 retriving the  any value from an objects

// by dot notations
//console.log(tatacurv.Ex_showroomPrice) // output value ->1600000

//by bracket notations

//console.log(tatacurv["modelName"])// output value ->adventure

// console.log(tatacurv.details())

//2 adding a new value
// by dot notations
//tatacurv.engine_Warrenty="1 year full replacement" // output value ->1600000
//tatacurv.engine_Warrenty="1 year full replacement" // output value ->1600000

//console.log(tatacurv)
//by bracket notations

// tatacurv["battery_warrenty":"2years"]
tatacurv["battery_warrenty"] = "2years"
console.log(tatacurv)

//3 upadting exsiting value 

// by dot notations
tatacurv.engine_Warrenty = "1 year full replacement and 1 year maintaince" //

console.log(tatacurv)
//by bracket notations

// tatacurv["battery_warrenty":"2years"]
tatacurv["battery_warrenty"] = " 2 years replacement warrenty"

console.log(tatacurv)


//4 delete the value 
// by dot notations
delete tatacurv.battery_warrenty

console.log(tatacurv)

//by bracket notations
delete tatacurv['engine_Warrenty']

console.log(tatacurv)



// retive the skills cypress form the below object 

let person = 
{
    name: "siddhant",
    age: 25,
    skills: ["js", "cypress", "playwright", "PSM", "REACT/ANGULAR", "GIT_GITHUB", "AZURE", "AWS"]
}

console.log(person.skills[1])

console.log(person["skills"][1])
//---------------------------------------------------------------------------------------------//

let data = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,
    experience: 6,
    skills: ["TypeScript", "CI/CD"],
    position: "Automation Tester"
}

//retrive -->
// dot notaion
console.log(data.firstName) //Vihaan -->dot notation doesnt work in loop 

// by bracket notataion
console.log(data["lastName"]) //Mehta -->

//add     -->

data.pacakage="12 LPA"
console.log(data)

// barcket -->

data["inHandsalary"]="10LPA"
console.log(data)

//delete  -->

 delete data["inHandsalary"]

 console.log(data)



//update  -->

data.pacakage="15LPA"
console.log(data)

data["pacakage"]="18 LPA"
console.log(data)



// //let data = {
//     firstName: "Vihaan",
//     lastName: "Mehta",
//     age: 28,
//     experience: 6,
//     skills: ["TypeScript", "CI/CD"],
//     position: "Automation Tester"
// }


for(let i=0;i<Array.length;i++){
    //array syntax
}


// object loop sytanx 

for(let key in data){
   console.log(`${key}  :${data[key]}`)
}


// example  array=[ {hbd},{hsdbcd}]

// methods in objects

//Object.assign() --> it will copy the object without modfiying it the orignal object

let viaahn=  {
  firstName: "Vihaan",
  lastName: "Mehta",
  age: 28,
  experience: 6,
  skills: ["TypeScript", "CI/CD"],
  position: "Automation Tester"
}

console.log("```````````````````````````````````````````")
let person1 = Object.assign({},viaahn)
console.log(person1)


console.log("```````````````````````````````````````````")

//Objects.keys()--> to get the keys or properties of an object as an array we use this method 

let keyarr=Object.keys(viaahn)
console.log(keyarr)


// object.values --> to get the values of an object as an array we use this method

let valarr=Object.values(viaahn)
console.log(valarr)

// object.entries -->to get the keys and values  of an object as an array we use this method

let entarr=Object.entries(viaahn)

console.log(entarr)

// hasownPropertry() -->checks whether the property exsiting

console.log(viaahn.hasOwnProperty("skills"))

 const profiles = [
    {
      firstName: "Vihaan",
      lastName: "Mehta",
      age: 28,
      experience: 6,
      skills: ["TypeScript", "CI/CD"],
      position: "Automation Tester"
    },
    {
      firstName: "Rohan",
      lastName: "Joshi",
      age: 29,
      experience: 11,
      skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
      position: "Technical Lead"
    },
    {
      firstName: "Vihaan",
      lastName: "Deshmukh",
      age: 32,
      experience: 1,
      skills: ["Python", "TypeScript"],
      position: "Software Engineer"
    },
    {
      firstName: "Ishaan",
      lastName: "Pandey",
      age: 31,
      experience: 14,
      skills: ["Python", "Cypress"],
      position: "Systems Engineer"
    },
    {
      firstName: "Ishaan",
      lastName: "Deshmukh",
      age: 25,
      experience: 1,
      skills: ["Java", "Playwright", "JavaScript", "SQL"],
      position: "Systems Engineer"
    },
    {
      firstName: "Rohan",
      lastName: "Joshi",
      age: 33,
      experience: 3,
      skills: ["JavaScript", "Java", "Docker", "TypeScript"],
      position: "Full-Stack Developer"
    },
    {
      firstName: "Pranav",
      lastName: "Joshi",
      age: 24,
      experience: 2,
      skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
      position: "Data Analyst"
    },
    {
      firstName: "Rohan",
      lastName: "Nayak",
      age: 24,
      experience: 10,
      skills: ["JavaScript", "GitHub Actions", "Playwright"],
      position: "Backend Developer"
    },
    {
      firstName: "Arjun",
      lastName: "Nayak",
      age: 36,
      experience: 4,
      skills: ["Java", "Playwright", "Docker"],
      position: "Systems Engineer"
    },
    {
      firstName: "Vikram",
      lastName: "Joshi",
      age: 34,
      experience: 1,
      skills: ["Python", "GitHub Actions"],
      position: "Full-Stack Developer"
    }
  ];



console.log(profiles)
// sort this data 

// get me the name of the persons who has cypress as skill

profiles.forEach((el,index,arr)=>{
if(el.skills.includes("Cypress")){
    console.log(`${el.firstName} ${el.lastName}`)
}
})


// Rohan Joshi
// Ishaan Pandey


// print me the name of persons above 3 years of exp 


let above3=profiles.filter((el,index,arr)=>{
    return el.experience > 3
     
})

console.log(above3)


// [
//     {
//       firstName: 'Vihaan',
//       lastName: 'Mehta',
//       age: 28,
//       experience: 6,
//       skills: [ 'TypeScript', 'CI/CD' ],
//       position: 'Automation Tester'
//     },
//     {
//       firstName: 'Rohan',
//       lastName: 'Joshi',
//       age: 29,
//       experience: 11,
//       skills: [ 'TypeScript', 'JavaScript', 'Cypress', 'Docker' ],
//       position: 'Technical Lead'
//     },
//     {
//       firstName: 'Ishaan',
//       lastName: 'Pandey',
//       age: 31,
//       experience: 14,
//       skills: [ 'Python', 'Cypress' ],
//       position: 'Systems Engineer'
//     },
//     {
//       firstName: 'Rohan',
//       lastName: 'Nayak',
//       age: 24,
//       experience: 10,
//       skills: [ 'JavaScript', 'GitHub Actions', 'Playwright' ],
//       position: 'Backend Developer'
//     },
//     {
//       firstName: 'Arjun',
//       lastName: 'Nayak',
//       age: 36,
//       experience: 4,
//       skills: [ 'Java', 'Playwright', 'Docker' ],
//       position: 'Systems Engineer'
//     }

//   ]

// object assignment 
//  vihan metha has experince of 3 years  his current position is autoamtion testor and his skills include   skills: [ 'TypeScript', 'CI/CD' ],

// {
//   //       "firstName": "Arjun",
//   //       "lastName": "Nayak",
  //       age: 36,
  //       experience: 4,
  //       skills: [ 'Java', 'Playwright', 'Docker' ],
  //       position: 'Systems Engineer'
  //     }

