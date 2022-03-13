class Phone {
    constructor(brand, model, storage, ram, os) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.ram = ram;
        this.os = os;
    }
}
const xiaomi = new Phone('xaiomi', 'redmi 9', '64gb', '4gb', 'miui')
console.log(xiaomi)
class Performance extends Phone {
    constructor(agdum, model, storage, ram, os, performance) {
        super(agdum, model, storage, ram, os);
        this.performance = performance;
    }
}
const perAdded = new Performance('xaiomi', 'redmi 9', '64gb', '4gb', 'miui', 'high')
console.log(perAdded)