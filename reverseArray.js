function reverse(array) {
    reverseArray = []
    for (var i = 0; i < array.length; i++) {
        reverseArray.unshift(array[i])
    }
    console.log(reverseArray)
}

reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])
