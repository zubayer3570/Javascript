var products = [
    {name : "14 inch laptop asus", price : "50000"},
    {name : "15 inch laptop msi", price : "50000"},
    {name : "17 inch laptop asus", price : "50000"},
    {name : "19 inch laptop mac", price : "50000"}
]

function search(array, search){
    for (const product of products){
        if(product.name.includes(search)){
            console.log(product.name)
        }
    }
}
search(products, 'msi')