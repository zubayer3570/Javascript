//finds the highest scorer
var run = [
    ["tamim", 13],
    ["sakib", 95],
    ["enamul", 70],
    ["mushfik", 80]
]
var maxRun = run[1][0];
for (var i = 1; i < run.length; i++) {
    if (maxRun < run[i][1]) {
        maxRun = run[i][1]
        var targetElement = run[i]
    }
}
console.log(targetElement[0])