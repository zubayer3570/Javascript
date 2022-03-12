var num = "42"
// here num is a string. but it has a number inside its double quote, which javascript consider as word/letter
var numActual = parseInt(num)
//now, numActual is considered a number to javascript, as "parstInt()" changed it from string to number, same goes for "parseFloat()", but it is used to convert scratch number
console.log(numActual)