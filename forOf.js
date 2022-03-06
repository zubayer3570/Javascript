//on each iteration, an element of the array is assigned to the variable, correspondingly.
//the syntax understanding : (const variable of iterable)....'const variable' = a value 'of iterable'
var names = ["abul", "babul", "kabul", "babul", "abul", "gabul"]
for (const element of names) {
    console.log(element)
}