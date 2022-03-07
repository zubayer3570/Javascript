//To return value
//window.localStorage.getItem('item name')
//window.sessionStorage.getItem('item name')

//to set an item and its value
// window.localStorage.setItem('item name', item value)

//if you need to set just a value, you do not need to stringify it. you can directly set the value by the syntax above
//but if you want to set an object in local storage, you have to JSON.stringify the object before setting it,
//if you want to read data from local storage you need to JSON.parse the value(if that is an object), because it remains in json format.
