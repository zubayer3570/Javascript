function update(increase, moCa, price) {
    let input = parseFloat(document.getElementById(moCa + '-input').value)
    if (increase) {
        document.getElementById(moCa + '-input').value = ++input
    }
    else if (input > 0) {
        document.getElementById(moCa + '-input').value = --input
    }
    document.getElementById(moCa + '-cost').innerText = input * price
    let mobile = parseFloat(document.getElementById('mobile-cost').innerText)
    let mobCase = parseFloat(document.getElementById('case-cost').innerText)
    let subTotal = mobile + mobCase
    document.getElementById('sub-total').innerText = subTotal
    let tax = subTotal * 0.15
    document.getElementById('tax').innerText = tax
    document.getElementById('total').innerText = tax + subTotal
}
document.getElementById('mobile-increase').addEventListener('click', function () {
    update(true, 'mobile', 1219)
})
document.getElementById('mobile-decrease').addEventListener('click', function () {
    update(false, 'mobile', 1219)
})
document.getElementById('case-increase').addEventListener('click', function () {
    update(true, 'case', 59)
})
document.getElementById('case-decrease').addEventListener('click', function () {
    update(false, 'case', 59)
})