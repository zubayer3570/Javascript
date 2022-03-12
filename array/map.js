//map method subsequently takes all the elements of an array as an argument of a function
//then it returns a new array with the returns of the function.
const array = [2, 22, 34, 43]
const doubleIt = (x) => x * 2
const output = array.map(doubleIt)
console.log(output)

const array1 = [2, 22, 34, 43]
const output1 = array1.map(x => x * 2)
console.log(output1)