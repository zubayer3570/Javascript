//on each iteration, a value of a property of the iterable, is assigned to the variable, correspondingly.
//the syntax explantion : (const variable of iterable)....'const variable' = a value 'of iterable'...
var names = ["abul", "babul", "kabul", "babul", "abul", "gabul"]
for (const element of names) {
    console.log(element)
}