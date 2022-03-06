//in a method 'this' refers to the object
let person = {
    fullName: 'Mahmudul Hasan Zubayer',
    occupation: 'student',
    age: '20.5 years',
    method: function () {
        console.log(this.fullName)
    }
}
person.method()