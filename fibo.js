//fibonacci numbers
function fibo(n) {
    let fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
        add = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(add)
    }
    console.log(fibonacci)
}
fibo(10)

//fibonacci numbers sum
function fiboSum(n) {
    let fibonacci = [0, 1];
    let sum = 1;
    for (var i = 2; i < n; i++) {
        add = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(add)
        sum += fibonacci[i]
    }
    console.log(sum)
}
fiboSum(1000)