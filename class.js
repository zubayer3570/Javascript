class Support {
    work() {
        console.log('this is work method')
    }
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }
}
const ahnaf = new Support("ahnaf", "BD")
ahnaf.work()
