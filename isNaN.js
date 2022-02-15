//this function is very usefull, it can identify the variable type truely
let x = '9095'
console.log(typeof (x))
//here javascript consider x as a string, as the number 9095 is in the single/double quotation
let isNan = isNaN(x)
console.log(isNan)
//but if you input the x into isNaN() function (full form : is Not a Number), it returns false
//because isNaN() can check if the input variable value inside the quotations is actually a number or not, if that is not a number it returns true, otherwise false
//like it state that the input is not a number, if its statement is correct then it returns true, otherwise false 