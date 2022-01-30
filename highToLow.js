function highToLow(array) {
    var temp = 0
    resultArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] > temp) {
            resultArray.unshift(array[i])
        }
        else {
            resultArray.push(array[i])
        }
        temp = array[i]
    }
    console.log(resultArray)

}
highToLow([35, 75, 90, 100])