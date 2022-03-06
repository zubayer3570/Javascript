//you can change the values of keys but can't delete keys
const person = {
    name: 'zubayer',
    age: 20,
    occupation: 'student'
}
Object.seal(person)
delete person.name
person.age = 21;
console.log(person)