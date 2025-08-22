//Regular Expression:----
/** its a small programing syntax used to find pattern in the data  */

// how to dELECARE  regaular expression 

//1) you can use regular experssion constaructor 
//2) use to forward slashes following a flag


//pattern --> a patteren could be a text or any form of pattern which have some simliarity 

// emails --> @gmail.com
//Flags --> flags are optional parameter in an regex which deteremine the type of searching

/**
 * g: a gobal flag which means it will search in the whole text pattern
 * i: this is a case insenetive flag ( that is it will search the pattern in upper as well as lower case)
 * m : multiline (allows to search in multi line )
 * `    
 */


//1) you can use regular experssion constaructor 

let pattern ="siddhant"

let regex= new RegExp(pattern)

console.log(regex) //        /siddhant/
// this is a cretion of simple regualr expression which doesnt use any flag



let regex1= new RegExp(pattern,"gi")

console.log(regex1)  //     /siddhant/gi

// this is a cretion of simple regualr expression which  use flag


//2) creater regex mannual 

let regex3= /siddhant/gim

// methods in regex 

//1) test(): returns true of false and check wheater the string contains the word


let str = "I am Learning Javascript"

let result= /learning/i.test(str)

// synTX 
 //regex.test(string)

console.log(result) // 


//  Using match() to search for a pattern
let str17 = "I AM LEARNING JS , LEARNING CYPRESS, LEARNING PLAYWRIGHT";
console.log(str17.match(/learning/gi).length) // Output: [ 'LEARNING', index: 5, input: 'I AM LEARNING...', groups: undefined ]

// search ()--> search method matchs the pattern in string and returns index or -1


// let str = "I am Learning Javascript"


console.log(str.search(/am/gi))
console.log(str17.search(/learn/gi))

//replace()-->change the word in a string 

let str2 = "i am learning python, and i am also laerning the basic of python, Python is a easy langauge \
i would reccommmend everyone to learn Python"

console.log(str2.replace(/python/gim,"js"))

//cleaning the string 

let str3= "h@#el@#lo m@#y n@#am@#e is sidd@#ha@#n@#t"

console.log(str3.replace(/@#/gi,""))

// set and infomartion about how to use regex


//[]: a set of character

// [a-c]-> any letter form a,b,c
//[a-z]-> any letter form a ....z
//[A-Z]-> any character form A...Z
//[0-9]-> any number form 0...9
//[A-Za-z0-9]--> any letter form a-z , also any letter form A_Z ,number form 0..9

// \ --> denotes escape characters 
// \ --> multi line 
// \n --> newline 
// \t --> tab key 
// \' --> single quotes
// \" --> double quotes     
// \d --> gets the numbers form the string (0-9)
// \D --> cofrims string doesnt not contain any numbers

//.: any chacrter expect new line character

//^:--> starts with 
//$:--> ends with
//*:--> occurance 
//+: --> one more time (charcter should once or more than that)
//?: --> zero or one time 
// \b --> its matches the staring or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group 
// \w+ : matches sequences of word characters

let str4 = " apple and banaana are fruits and a old chilce says Apple a day keeps doctor away"

// console.log(str4.match(/apple/gi).length)
console.log(str4.match(/[Aa]pple/g))

let str5 = "This regualar experssion session conducted on 19 NOV , 2024 "

console.log(str5.match(/\d+/g)) //[ '19', '2024' ]

//^--
 
console.log(str5.match(/^This/g))

