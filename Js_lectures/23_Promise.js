//------------------------------------------------------------
//// promises --> cypress --> async --> made sync  default by promises

//promise --> human uses promises to get something done in span of time 

//1 your promise will get fullfilled
//2 your promise will get rejected
//3 pending state -->

//in js --> promise is way to handle async code operation in js
//it allows user or developer to handle asycn code to get a success full operation 

// 3 states in promises 

/**
 * 1 pending --> inital stage (not started yet)
 * 2 fullfilled --> operation has been successfully done 
 * 3 rejection --> operation has failed 
 */

// show me a example of promise 
// explain -->

// show me a example of promise 

// let pro = new Promise((resloves, rejected) => {
//     let success = false
//     if (success === true) {
//         resloves("the operation has been success")
//     }
//     else {
//         rejected("error try again")
//     }
// }).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })



// // example of using a promise --
// // find if a person has multiple skills


// const sk = new Promise((resloves, rejected) => {
//     setTimeout(() => {
//         let arr = ["HTML", "CSS", "JS", "NODE"]
//         if (arr.length > 1){
//             resloves(arr)
//         }
//         else {
//             rejected("something went wrong")
//         }
//     }, 2000)
// })


// //----------------------------------------------

// sk.then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// })

//-------------------------------------------------------------------------
// 1 callback hell --

//let create a program to create an instagram
console.log("_______________________________async opeing instagram____________________")

// handling async using promise 
function userregistration(user){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`The ${user} has been register now`)
            resolve(user)
        }, 3000)
    })
}

// function to send otp 

function SendOTPToUSER(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('the otp was sucessfuly registor for user')
            resolve(user)
        }, 2000)
    })
}

//set perefences 

function fetchuserperfrences(user){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`the perfrences for ${user} have been registor `)
            resolve(user)
        },4000)
    })
}

function startuseracitivity(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`start the use`)
            resolve(user)
        }, 500)
    })
}



userregistration("SID")
    .then(SendOTPToUSER)
    .then(fetchuserperfrences)
    .then(startuseracitivity)
    .then((message) => {
        console.log(message)
    })

// async and await -->