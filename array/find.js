//it is just like filter method but it doesn't return the elements in an array,
//rather it returns the element directly, but it retuns only the first element, where filter returns all the elements
let array = [12, 13, 15, 2, 20, 9, 8]
let small = array.find(element => element < 10)
console.log(small)