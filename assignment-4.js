//function-1 (ana to vori)
function anaToVori(ana) {
    if (typeof (ana) != "number") {
        return "Error! input a number"
    }
    if (ana < 0) {
        return "Error! input a positive number"
    }
    let vori = ana / 16;
    return vori;
}

//function-2 (panda cost)
function pandaCost(shinggara, shomucha, jilapi) {
    if (
        typeof (shinggara) == "number"
        && typeof (shomucha) == "number"
        && typeof (jilapi) == "number"
        && shinggara >= 0
        && shomucha >= 0
        && jilapi >= 0
    ) {
        let singgaraCost = 7 * shinggara;
        let shomuchaCost = 10 * shomucha;
        let jilapiCost = 15 * jilapi;
        let total = singgaraCost + shomuchaCost + jilapiCost;
        return total;
    }
    else {
        return "Error! input 3 positive numbers";
    }
}

//function-3 (picnic)
function picnicBudget(people) {
    if (typeof (people) == "number" && people >= 0) {
        if (people <= 100) {
            let cost = people * 5000;
            return cost;
        }
        if (people <= 200) {
            let cost = (100 * 5000) + (people - 100) * 4000
            return cost;
        }
        else {
            let cost = (100 * 5000) + (100 * 4000) + (people - 200) * 3000;
            return cost;
        }
    }
    else {
        return "Error! input a positive number";
    }
}

//function-4 (odd friend)
function oddFriend(names) {
    if (typeof (names) != "object") {
        return "Error! input an array of names"
    }
    for (let i = 0; i < names.length; i++) {
        if (typeof (names[i]) != "string") {
            return "Error! each element of the array have to be a name (string)"
        }
    }
    for (let x = 0; x < names.length; x++) {
        var check = names[x].length % 2
        if (check != 0) {
            return names[x]
        }
    }
    return "There is no odd friend"
}