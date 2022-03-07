const addItem = () => {
    const productName = document.getElementById('product-name').value
    //display in the ui
    display(productName)
    //add in the localStorage
    addToLocal(productName)


    document.getElementById('product-name').value = ``
}
const displayToLocalStorage = () => {
    const cartObj = getCartObj();
    for (const key in cartObj) {
        display(key)
    }
}
const display = (name) => {
    const li = document.createElement('li')
    li.innerText = name;
    document.getElementById('ul').appendChild(li)
}
const getCartObj = () => {
    const getCart = localStorage.getItem('cart')
    if (getCart) {
        cartObj = JSON.parse(getCart)
    }
    else {
        cartObj = {}
    }
    return cartObj;
}
const addToLocal = (name) => {
    let cartObj = getCartObj();
    if (cartObj[name]) {
        ++cartObj[name]
    }
    else {
        cartObj[name] = 1;
    }
    let setCart = JSON.stringify(cartObj)
    localStorage.setItem('cart', setCart)
}

displayToLocalStorage()