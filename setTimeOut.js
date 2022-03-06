//set time out is a window method
//it takes function as a input
const printhello = () => {
    console.log('hello')
}
setTimeout(printhello)
console.log('this is normal')
//if you pass a function into setTime out, the code inside the function will be executed at last(if you don't input the timing parameter)

const printhello2 = () => {
    console.log('hello2')
}
setTimeout(printhello2, 5000)
//it will executed the code inside printhello2 after 5 seconds(it takes parameter in mili-second)  