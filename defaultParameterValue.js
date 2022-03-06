function defaultParameterValue(a, b, c = 7) {
    return a + b + c
}
let result = defaultParameterValue(9, 10)
console.log(result)