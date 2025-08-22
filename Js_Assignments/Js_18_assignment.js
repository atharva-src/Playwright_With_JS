/**
 * Assignment --> high order functions



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

1 Define a callback function before you use it in forEach, map, filter or reduce.
2 Use forEach to console.log each country in the countries array.
3 Use forEach to console.log each name in the names array.
4 Use forEach to console.log each number in the numbers array.
5 Use map to create a new array by changing each country to uppercase in the countries array.
6 Use map to create an array of countries length from countries array.
7 Use map to create a new array by changing each number to square in the numbers array
8 Use map to change to each name to uppercase in the names array
9 Use map to map the products array to its corresponding prices.
10 Use filter to filter out countries containing land.
11 Use filter to filter out countries having six character.
12 Use filter to filter out countries containing six letters and more in the country array.
13 Use filter to filter out country start with 'E';
14 Use filter to filter out only prices with values.
15 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
16 Use reduce to sum all the numbers in the numbers array.
17 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
18 Explain the difference between some and every
19 Use some to check if some names' length greater than seven in names array
20 Use every to check if all the countries contain the word land
21 Explain the difference between find and findIndex.
22 Use find to find the first country containing only six letters in the countries array

Level 2

1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
2 Find the sum of price of products using only reduce reduce(callback))
3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

 

Level 3


*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()) #[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())

output be like 
Count: 25
Sum: 744
Min: 24
Max: 38
Range: 14
Mean: 30
Median: 29
Mode: (26, 5)
Variance: 17.5
Standard Deviation: 4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


 */

