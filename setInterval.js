//setInterval method's syntax is like setTimeout, 
//but setTimeout happens once, where senInterval repeate after the input time
let count = 0;
function test() {
    const printhello = () => {
        console.log(count++);
    }
    const check = () => {
        console.log(count)
    }
    const timeId = setInterval(printhello, 1000)
    setInterval(check, 1000)
    if (count > 5) {
        clearInterval(timeId)
    }
}
test()
