//short method
var array = [54, 67, 90, 100, 2, 3];
array.sort((a, b) => { return a - b; });
console.log(array[array.length - 1]);

//long method
var array1 = [56, 58, 85, 23, 20, 9];
var max = array1[0]
for (var i = 1; i < array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i]
    }
}
console.log(max)