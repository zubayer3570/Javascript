//long method
var num1 = 13
var num2 = 15
var temp = num1
num1 = num2
num2 = temp
console.log(num1, num2)

//short method
var first = 5
var second = 10
[first, second] = [second, first];
console.log(first, second)