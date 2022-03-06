//for in is like for of but it works with object
const person = {
    name: 'zubayer',
    age: 20,
    occupation: 'student'
}
for (const prop in person) {
    console.log(prop, person[prop])//on each iteration prop is one key of the object
}