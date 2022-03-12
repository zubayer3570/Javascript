//this join all the elements of ana array
let names = ['hello', 'hunny', 'bunny', 'pani']
let joinedNamesDefault = names.join()
console.log(joinedNamesDefault)
//by default it will return the elements by adding commas between them
joinedNamesDefault = names.join('')
console.log(joinedNamesDefault)
//join method takes 1 argument, which defines what's gonna come between to elements.

let names1 = ['hello', 'hunny', 'bunny', 'pani']
let joinedNames1 = names1.join(',')
console.log(joinedNames1)