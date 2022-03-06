//'UberTeam extends ProgrammingHeroTeam' means UberTeam extends the ProgrammingHeroTeam class, which means UberTeam
//take the constructor of ProgrammingHeroTeam, and add some extra property of itself
//super keyword refers to the class which is being extended, and it takes the parameters of the extended class
class ProgrammingHeroTeam {
    company = 'programming hero'
    constructor(name, job, salary) {
        this.name = name;
        this.job = job;
        this.salary = salary;
    }
}
class UberTeam extends ProgrammingHeroTeam {
    company = 'Uber'
    constructor(name, job, salary, vacation) {
        super(name, job, salary)
        this.vacation = vacation
    }
}
let zubayer = new ProgrammingHeroTeam('zubayer', 'web developing', 40000)
let jhankar = new ProgrammingHeroTeam('jhankar mahbub', 'CEO', 100000)
console.log(zubayer)
console.log(jhankar)
let karim = new UberTeam('karim', 'driver', 15000, '10days')
let zarif = new UberTeam('zarif', 'manager', 30000, '10days')
console.log(karim)
console.log(zarif)