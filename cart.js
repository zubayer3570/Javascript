const cart = [
    { name: "laptop", price: 50000, quantity: 2 },
    { name: "car", price: 2000000, quantity: 5 }
]
var sum = 0;
for (var i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].quantity
}
console.log(sum)

//alternate
var sumAlt = 0
for (let product of cart) {
    sumAlt += product.price * product.quantity
}
console.log(sumAlt)