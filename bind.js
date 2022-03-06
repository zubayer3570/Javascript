//bind method let you borrow method from another object, and this keyword refer to the keys of the input ojects
//bind returns a function, which acts like a method of the object with which the borrowed method was bound
const person1 = {
    id: 101,
    name: "Mahmudul Hasan Zubayer",
    money: 5000,
    expense: function (expense) {
        let balance = this.money - expense
        this.money = balance
        return balance;
    }
}
const person2 = {
    id: 102,
    name: "Mahmudul Hasan Zubayer 2",
    money: 10000
}
let bindFunc = person1.expense.bind(person2)
console.log(bindFunc(500))