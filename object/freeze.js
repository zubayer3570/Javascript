//in freeze you can't change values nor delete keys
const person = {
    name: 'zubayer',
    age: 20,
    occupation: 'student'
}
Object.freeze(person);
delete person.name;
person.age = 21
console.log(person)
