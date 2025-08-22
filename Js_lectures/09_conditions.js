// //conditions 
// // when we have to make the decision based on condtions given we used conditional statemnet 

// // we have 4 conditionals statement in js 
// // 1 if()
// // 2 if else()
// //3 else if()
// //4 switch case


// //1 if() when you have a single condition to check you will use if 

// /** syntax 
//  * 
//  * if (condition){
//  * dispaly output }
//  */

// //example

// //1 check wheater the given number is positive  // 
// // condtion given 1
// let num = -10
// //correct syntax
// if(num>0){
//     console.log(`the given number ${num} is a positive number `)
// }  

// //wrong sytax
// if(num>0){
//     console.log(`the given number ${num} is a positive number `)
// }   // memory 1
// if(num<0){
//     console.log(`the given number ${num} is a negative number `)
// } //memory 2

// //output -- the given number 10 is a positive number 


// // 2 if else()--- when we have 2 conditons which are either or we will use if else

// /**
//  * synatx 
//  * if(condtion 1){
//  * dispaly its output }
//  * else{display other condition}
//  */

// //2 check wheater the given number is positive  or not 

// // condtion given 2
// let num1=20
// if(num1>0){
//     console.log(`the given number ${num1} is a positive number `)
// }
// else{
//     console.log(`the given number ${num1} is a negative number `)
// }

// // example 2 

// let summer = true

// if(summer===true)
// {
//     console.log("switch on the acs")
// }

// else{ console.log("switch off the acs")}

// //3 else if() -- when we have more than 2 conditions and they are not either or then we use esle if 

// // more than 2
// /**
//  * synatx 
//  * if(condtion 1){
//  * dispaly its output }
//  * 
//  * esle if(condtion2){
//  * dispaly output for condition2}
//  * 
//  * esle if(condtion3){
//  * dispaly output for condition2}
//  * 
//  * else{display  condition}
//  */


// // check the type of number  wheater is a postive number or a negaitive number or zero 

// let num3 = 10

// if(num3>0){
//     console.log(` the given number is ${num3} is positive `)
// }

// else if(num3<0){
//     console.log(` the given number is ${num3} is negative `)
// }
// else if(num3===0){
//     console.log(` the given number is ${num3} is zero  `)
// }

// else{console.log(` the data you have enter is incorrect please enter the valid data  `)}

// // if      --
// // if else --
// // else if --
// // switch case -- when we have more than 2 condtions we use switch case 

// /**
//  * let parameter = value 
//  * 
//  * switch(parameter){
//  * 
//  * case 1 : case one 
//  * 
//  * case 2 : case two 
//  * 
//  * case 3 : case three
//  * 
//  * default : this will be a defalut condition
//  * 
//  * }

//  */

let num4 = -10
switch (true) {
    // case 1 when number is positve
    case num4 > 0: console.log(` the given number is ${num4} is positive `);
        break
    // case 2 when number is negative
    case num4 < 0: console.log(` the given number is ${num4} is negaitive `);
        break
    //// case 3 when number is zero
    case num4 == 0: console.log(` the given number is ${num4} is zero `);
        break
    //default 
    default: console.log("enter valid data")

}

//break key word -- used to break your switch case flow // terminate the exceution of swtch case when the condition is met 


// -----------------------------------------------------

//example

// determine what the working day is today 

// let day ="Sunday"
// let formatday=day.toLowerCase()


// switch(formatday){
// case "monday":console.log("its a working day")
// break
// case "tueday":console.log("its a working day")
// break
// case "wedensday":console.log("its a working day")
// break
// case "thrusday":console.log("its a working day")
// break
// case "friday":console.log("its a working day")
// break
// case "saturday":console.log("its not a wroking  day")
// break
// case "sunday":console.log("its not a wroking  day")
// break
// default:console.log("enter valid data")
// }

// optimize way

let day = "MONDAY"
let formatday = day.toLowerCase()


switch (formatday) {
    case "monday":
    case "tuesday":
    case "wedensday":
    case "thrusday":
    case "friday": console.log("its a working day")
        break
    case "saturday":
    case "sunday": console.log("its not a wroking  day")
        break
    default: console.log("enter valid data")
}




