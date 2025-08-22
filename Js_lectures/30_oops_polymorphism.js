// polymorphism --> polymorphism is a core oops concept which allows object of different types 
// to be treated as if they are object of same type 
// 
// in js polymorphsim enables methods with same name to behave differently based on the 
// object context in which they are invoked

// method overriding 
//method overloading 
// polymorphism thorugh interfaqces 


//example 

class shape{

getArea(){
    throw new Error ("getaera method must be implement first")
}

}


class circle extends shape{
    constructor (radius){
        super()
        this.radius = radius
    }

    getArea(){
        return Math.PI *this.radius**2
    }

}


class rectangle extends shape {

    constructor (width, height){
        super();
        this.width = width
        this.height =height

    }

    getArea(){
        return this.width * this.height
    }
}
const shapes = [new circle(10),new rectangle(50,10)]

shapes.forEach((shape)=>console.log(shape.getArea()))


//-------------------------------------------------------------------------------


class Payment {

processPayment(){
    throw new Error ("processPayment must be implemented")
}
}

class CreditCardPayment extends Payment{
processPayment(){
    console.log("processing your cerdit card payment")
}

}

class UPI extends Payment{
    processPayment(){
        console.log(" your UPI payment is processing")
    }
}

class Paypal extends Payment{
processPayment(){
    console.log("your paypal payment is processing")
}

}
 let cpay= new CreditCardPayment()
 cpay.processPayment()

 let upay=new UPI()
 upay.processPayment()

 let ppay= new Paypal()
 ppay.processPayment()

// const payment = [new CreditCardPayment(),new UPI(),new Paypal]

// payment.forEach((payment)=>payment.processPayment())


 



