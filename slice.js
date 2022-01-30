//in slice, it does not change the input/main array, rather it returns a new array as result, which needs to be assigned to a variable
var text = "Bangladesh"
var sliced = text.slice(0, 5)
console.log(sliced)

var names = ["zubayer", "mahmudul", "jamila", "kamila"]
var slicedNames = names.slice(1, 2)
console.log(slicedNames)
console.log(names)