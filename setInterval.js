//setInterval method's syntax is like setTimeout, 
//but setTimeout happens once, where senInterval repeate after the input time
function test() {
    let count = 0;
    const printhello = () => {
        console.log(count++);
    }
    const timeId = setInterval(printhello, 1000)
    if (count > 5) {
        clearInterval(timeId)
    }
}
test()
