const person = {
    id: 101,
    name: "Mahmudul Hasan Zubayer",
    money: 5000,
    expense: function (expense) {
        let balance = this.money - expense
        this.money = balance
        return balance;
    }
}
console.log(person.expense(1000))
console.log(person.expense(1000))