//call is like bind, with call method you can input multiple arguments with the input object
//call does not return a function like bind method, so no need to assign the value to a variable
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
    money: 7000
}
person1.expense.call(person2, 500)
person1.expense.call(person2, 500)