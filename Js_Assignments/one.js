// function greetings(){
//     console.log('Hello');    
// }
// greetings()

// // setInterval(greetings,200) /// Set time interval
// setTimeout(greetings,2000)

// function sq(n){
//     return n*n
// }
//  function cube(n){
//     return sq(n)*n
// }
// console.log(cube(2));

// function Name(){
//     return "Ashutosh"
// }
// function Fullname(lastName){
    
// }
// console.log(Fullname("More"));
function logIn(user){
    console.log(`${user} is logged into Amazon`);
}
function welCome(user){
    console.log(`${user} Welcome to zomato`); 
}
function selectItom(user){
    console.log(`${user} selected IPhoen 16`);
}
function makePayment(user){
    console.log(`${user} your payment is succesfill`);
}
function addsres(user){
    console.log(`${user} added his address`);
}
function orderPlaced(user){
    console.log(`${user} your order is placed`);
}

async function BookIphone(user){
    let step1 = await logIn(user)
    let step2 = await selectItom(user)
    let step4 = await makePayment(user)
    let step3 = await addsres(user)
    let steo4 = await orderPlaced(user)
}

BookIphone("Ashutosh")