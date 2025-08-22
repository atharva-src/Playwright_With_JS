//JSON--> JAVASCRIPT OBJECT NOTATAION

// json is used to send the data form client side to server side and vice versa
//json is new thing and is abetter alternative to XML

//form a perspective of automation -->
// your json will always be used to store your testdata 


// consider a object 

let user = {
    name: "Siddhant",
    middlename: "arjun",
    lastname: "gadakh"
}

// -------------------------------
// json example
// {
//     "firstname":"siddhant",
//     "middlename":"arjun",
//     "lastname":"gadakh"
// }

//-------------------------------------------------------->

// conversion -->

//parse()--> this method is used to convert your json data into js object 

let person = `{

"firstname":"siddhant",
"lastname":"gadakh"

}`

let objperson=JSON.parse(person)
console.log(objperson)

//{ firstname: 'siddhant', lastname: 'gadakh' }


let person2=`{
"name":"amol",
"lastname":"jadhav",
"eamil":"amoljadhav@gmail.com"
}`


let person2obj=JSON.parse(person2)
console.log(person2obj)

// 

// //let user = {
//     name: "Siddhant",
//     middlename: "arjun",
//     lastname: "gadakh"
// }


// -----------------------------------------------
//conversion form obj to json

let jsonus=JSON.stringify(user)

console.log(jsonus)
//{"name":"Siddhant","middlename":"arjun","lastname":"gadakh"}

//---------ex--2

let user1={
    firstname:"asabeneh",
    lastname:"yeta",
    country:"finland",
    city:"helsinki",
    email:"alex@alex.com",
    skills:["html","css","js"],
    age:35,
    islogin:true
}


let user1json=JSON.stringify(user1,["firstname","lastname","country","city","email"])
console.log(user1json)

//{"firstname":"asabeneh","lastname":"yeta","country":"finland","city":"helsinki","email":"alex@alex.com"}