//parameter is variable which is passed into function definition,
//arguments are the values with which the function are called,
//the arguments(values) are assigned to the parameter(variable), when the function is called.
//'arguments' keyword returns an array like object, where the names are indexs of the parameters
//as it is an array like object it can be iterated by for loop, and we can access the parameter by index, just like an array
function first() {
    console.log(arguments)
    console.log(arguments[1])
}
first(24, 43, 34, 56, 78)