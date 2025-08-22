//closure --> if inner function acess the outer function variable then it is called as closure

function outer() {

    let count = 0

    function inner() {
        count++
        return count
    }
    return inner()

}

let hh = outer()
console.log(hh)

// console.log(hh)

// console.log(hh)

// // more example --------------->

// function outerFunction(){
//     let count =0
//     function plusOne(){
//         count++
//         return count
//     }
//     function minusone(){
//         count--
//         return count
//     }
// return{
//     plusOne:plusOne(),
//     minusone:minusone()
// }


// }

// let main = outerFunction()


// console.log(main.plusOne)
// console.log(main.minusone)


//-------------------------------------------------

function createCounter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}
let co = createCounter()
co()

const fetchCountryData = async () => {
    try {
        const response = await fetch('https://restcountries.com/v2/all')
        const countries = await response.json();
        countries.forEach(({ name, capital, languages, population, area }) => {
            console.log(`Country :${name}`)
            console.log(`Capital: ${capital} `)
            console.log(`Languages: ${languages.map((lang => lang.name))} `)
            console.log(`Population: ${population} `)
            console.log(`Area: ${area}sq km `)
            console.log('------------//----------')
        });
    } catch (error) {
        console.log('Error fetching data:', error.message)
    }
};
fetchCountryData()