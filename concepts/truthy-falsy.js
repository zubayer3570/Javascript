//any number except 0 is truthy, 0 is falsy
//string is truthy, but empty string is falsy
//array, object are truthy
//nan is falsy
//null undefined is falsy
const x = parseInt('hello');
console.log(x)
if (x) {
    console.log('this is true')
}
else {
    console.log('this is false')
}