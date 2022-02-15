//endsWith() method checks if the string ends with the input word/letter/string, if yes it returns true, if not returns false

let products = [
    'dell 14 inch laptop',
    'hp 14 inch laptop',
    'dell 22 inch monitor',
    'hp 21.8  inch monitor',
    'asus motherboard',
    'msi b450 motherboard',
    'motherboard b660',
    'b550 motherboard gigabyte'
]
let output = []
for (const product of products) {
    if (product.endsWith('monitor')) {
        output.push(product)
    }
}
console.log(output)