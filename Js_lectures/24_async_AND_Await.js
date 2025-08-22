// async and await --> used to make the async code sync

//async await is alternative build on proimse 

/**
 * 
 * syntax 
 * 
 * async function hello(){
 * 
 * return "hello"
 * 
 * }
 * 
 * 
 * async function Sayhello(){
 * 
 * let world = await hello()
 * console.log(world)
 * }
 * 
 */

async function hello() {
    return "hello"
}
async function Sayhello() {
    let world = await hello()
    console.log(world)
}

Sayhello()//hello
//-----------------------------------------------

async function sq(n) {
    return n * n
}
// console.log(sq(2))

async function getsqaure(n) {
    const sqaure = await sq(n)

    console.log(sqaure)
}


getsqaure(2)

//---------------------

async function delayprint(){
for(let i =0;i<10;i++){
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
        console.log(i)
    })
}
}
delayprint()


//---------------------------------------------

/**
 * // handling async using promise 

function userregistration(user) {
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

function fetchuserperfrences(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`the perfrences for ${user} have been registor `)
            resolve(user)
        }, 4000)
    })
}

        setTimeout(() => {
            console.log(`start the use`)
            resolve(user)
        }, 500)
    })
}

 */


async function userregistration(user) {
    return `the ${user} has been registered`
}


async function SendOTPToUSER(user) {
    return ` the otp for ${user} has been send`
}


async function fetchuserperfrences(user) {
    return ` the perfernance for user ${user} has been set`
}


async function startuseracitivity() {

    return ` start the use`
}


async function runinsta(user) {

    let step1 = await userregistration(user)
    setTimeout(()=>{"delay"},1000)
    console.log(step1)
    let step2 = await SendOTPToUSER(user)
    console.log(step2)
    let step3 = await fetchuserperfrences(user)
    console.log(step3)
    let step4 = await startuseracitivity()
    console.log(step4)

    console.log("your account has been created and now is ready to use ")
}

runinsta("sid")

//

async function say(){
      await console.log("hiiii")
}
say()
