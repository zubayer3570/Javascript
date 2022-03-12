//everything of apply method works like call method, 
//but it takes arguments in the form of array
const person1 = {
    id: 101,
    name: "Mahmudul Hasan Zubayer",
    money: 5000,
    expense: function (expense) {
        let balance = this.money - expense
        this.money = balance
        console.log(this)
    }
}
const person2 = {
    id: 102,
    name: "Mahmudul Hasan Zubayer 2",
    money: 10000
}
person1.expense.apply(person2, [500])
person1.expense.apply(person2, [500])