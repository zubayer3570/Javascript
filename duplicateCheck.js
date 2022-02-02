var names = ["abul", "babul", "kabul", "babul", "abul", "gabul"]

function duplicateCheck(names) {
    var uniqueArray = []
    for (var i = 0; i < names.length; i++) {
        var name = names[i]
        check = uniqueArray.indexOf(name)
        if (check == -1) {
            uniqueArray.push(name)
        }
    }
    console.log(uniqueArray)
};
duplicateCheck(names)