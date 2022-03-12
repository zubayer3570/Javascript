//it creates an array, with the keys of input array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruits.keys()
console.log(keys)
//you can not log the array and see the elements in the console,
// but you can iterate through the array
for (const key of keys) {
    console.log(key)
}