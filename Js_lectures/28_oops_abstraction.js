// oops --> object oreinted programing

// inheritance --> child inherits parent property 

// abstraction --> this is used to make the code neet and clean and the main puropse is to 
//                 hide the implementation of details  it simplifies complicated systems

//why abstraction -->
/**
 * 
 * 1 simpifes the code 
 * 2 make the application easier to maintain and extend 
 * 3 redcuce the complexcity for the user 
 */

// Js doesnt have bulit in 
// mechanism for abstarction like other langauges like java C#
// howeevr you can acheive abstarction through various techinques.

// how can you can you use abstarction in js

// you will define class and use public and private methods to control access
//# will represnt the method as private 

//example --> 

class car {
    #startEngine(){
        console.log("the engine has been started ")
    }
    start(){
        this.#startEngine()
        console.log("the car is ready to drive ")
    }
}
const myCar = new car()

myCar.start()


// --------------------------------------------------

function BankACcount(initailbalance) {

    let balance = initailbalance //blockscope variable 

    return {

        deposit(amount) {//50
            if (amount > 0) {
                balance += amount
                console.log(`your amount ${amount} has been deposited and your total balance is ${balance}`)
            }
        },

        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount
                console.log(`your amount ${amount} has been withdraw your total balance is ${balance}`)
            }
            else {
                console.log("insuffienct funds")
            }


        },
        checkbalance(){
            console.log(` your current balance is ${balance}`)
        }

    }

}

const account = BankACcount(100)

account.deposit(50) 
account.withdraw(125)
account.checkbalance()
//--------------------------------------------------------------------------






