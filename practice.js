//practice-1
document.getElementById('btn').addEventListener('click', function () {
    let inputValue = parseFloat(document.getElementById('input').value)
    document.getElementById('input').value = ++inputValue
    if (inputValue == 5) {
        document.getElementById('btn').setAttribute('disabled', true)
    }
})

//practice-2
let books = ['Javascript beginners', 'Javascript advanced', 'intermediate javascript knowledge', 'pyhton beginners to advanced']

let javascriptBooks = []

for (const book of books) {
    let check = book.toLowerCase()
    if (check.includes('javascript')) {
        javascriptBooks.push(book)
    }
}
console.log(javascriptBooks)

//practice-3
let arr = [12, 34, 2, 10, 6, 45, 34, 33]
arr.sort(function (a, b) {
    return a - b;
})
console.log(arr)