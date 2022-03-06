//here stop watch returns a function, and that is assigned to clock,
//now at the first call value of count is 0, and it increase the value by 1.
//the function which was returned to clock variable makes a closure, 
//declare a private variable where it sets the value from the reference of previous action, and so now, in the closure of the returned function the value of count is 1
//after that at second call it uses the value from that closure not from the lexical scope, that's why count's value becomes 2, after increasing
function stopWatch() {
    let count = 0;
    return function () {
        return ++count;
    }
}
let clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
let clock2 = stopWatch();
console.log(clock2())