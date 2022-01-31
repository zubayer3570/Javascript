//finds the highest scorer
var run = [
    ["tamim", 13],
    ["sakib", 95],
    ["enamul", 70],
    ["mushfik", 80]
]
var maxRun = run[1][0];
for (var i = 1; i < run.length; i++) {
    var compare = run[i][1]
    if (maxRun < compare) {
        maxRun = compare
        var targetElement = run[i]
    }
}
console.log(targetElement[0])