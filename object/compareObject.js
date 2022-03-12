//as objects are non-premitive type,objects can't be compared easily
let obj1 = {
    a: 1, b: 2
}
let obj2 = {
    a: 1, b: 2
}
if (obj1 === obj2) {
    console.log("objects are same")
}
else {
    console.log('objects are not same')
}
//here you can see objecs are not same has been shown

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("objects are same")
}
// after stringify, javascript says objects are same

let obj1New = {
    a: 1, b: 2
}
let obj2New = {
    b: 2, a: 1
}
if (JSON.stringify(obj1New) === JSON.stringify(obj2New)) {
    console.log("objects are same")
}
else {
    console.log("objects are not same")
}
//here you can see, though there are same keys and values in the objects but positions are different.
//so js says not same
for (const prop in obj1New) {
    if (obj1New[prop] == obj2New[prop]) {
        console.log('both are same')
    }
}
//you can compare it this way

