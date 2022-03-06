let phone = {
    brand: 'xiaomi',
    subBrand: 'redmi',
    model: 'redmi9',
    ram: '4gb',
    storage: '64gb',
    details: {
        bluetooth: 'version-5',
        networkBand: '4g'
    }
}
const { brand, model } = phone
const { networkBand } = phone.details
console.log(brand, model, networkBand)