//------------sync and async 

// javascript -- 

//syncrous  --> your code will be exceuted line by line 

console.log("hello")
console.log("world")
console.log("!!!!!!")
console.log(">>>>>>")

// anscyncorus--> the code which is easy to complie or which gets compile first it gets to the out puts first

console.log("hello")
console.log("world") ///
console.log("!!!!!!")
console.log(">>>>>>")

//output 
console.log("world") ///
console.log("!!!!!")
console.log(">>>>>")
console.log("hello")


// javascript is by nature syncrous--->

// your tool cypress and playwright --> anscyncorus  but 

// its made syncoruns using conversions

//---------------------------------------------------------------------------------------------------
console.log("_______________________________ example of sync code____________________")

console.log("Step 1: start the testcases")
console.log("Step 2: exceute the code")
console.log("Step 3: get the results")
console.log("Step 4: generate reports")

console.log("_______________________________ example of async code____________________")
// console.log(" Step 1 : start the testcases ")

// setTimeout(() => {
//     console.log("Step 2: exceute the code ")
// }, 3000)
// console.log(" Step 3:get the results ")
// console.log(" Step 4: generate reports ")

//setInterval --> print output after a time given  (prints everytime after given delay)
//setTimeout --> prints the output after given time (prints only once after given delay)

//always as rule of thumb-->

//your code should always be sync

// 1 callback hell -->

//let create a program to create an instagram 
console.log(  "_______________________________ async opeing instagram____________________"  )
function userregistration(user, callback) {
    setTimeout(() =>{
        console.log(`The ${user} has been register now`)
        callback()
    }, 3000)
}

// function to send otp 
function SendOTPToUSER(user, callback) {
    setTimeout(() => {
        console.log('the otp was sucessfuly registor for user')
        callback()
    }, 2000)

}

//set perefences 

function fetchuserperfrences(user, callback) {
    setTimeout(() => {
        console.log(`the perfrences for ${user} have been registor `)
        callback()
    }, 4000)

}

function startuseracitivity(user, callback) {
    setTimeout(() => {
        console.log(`start the use`)
        callback()
    }, 500)
}


// exceute --------------

// userregistration("sid",()=>{
// SendOTPToUSER("sid")
// fetchuserperfrences("sid")
// startuseracitivity("sid")

//--------------------------------------


//callback hell ------------->

userregistration("sid", () => {
    SendOTPToUSER("sid", () => {
        fetchuserperfrences("sid", () => {
            startuseracitivity("sid", () => {
                console.log("the program was successfully excueted")
            })
        })
    })
})

console.log("_______________________________ sync opeing instagram____________________")

// we dont use call back hell now 

// beacuse we have better alertnaive 

// promises --> cypress --> async --> made sync  default by promises
//async await -->playwright --> async --> made sync using async await 


//------------------------------------------------------
//general -->


/**
 * create a program to replicate zomato 
 * 
 * open app
 * select restarut 
 * select food
 * order food 
 * enter addres
 * pay for the order thourgh upi
 * get the foood
 * place review 
 */


//------------------------------------------------------------


//// promises --> cypress --> async --> made sync  default by promises

//promise --> human uses promises to get something done in span of time 

// 1  your promise will get fullfilled 

