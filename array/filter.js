//filter subsequently takes all elements of an array, as argument of a function,
//and if the given statement is true for the element, it pushes the element in a new array, and returns it.

let array = [12, 13, 15, 2, 20, 9, 8]
let small = array.filter(element => element < 10)
console.log(small)