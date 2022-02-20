var names = ["zubayer", "mahmudul", "jamila", "kamila"]
let spliced = names.splice(1, 1, "rahim", "karim")
//the first input refers to the starting index.
//the second input defines how many element will be removed from the array.
//the inptut after the second input, will be added at the place of the removed element/elements.
//splice changes the actual array
console.log(names)
console.log(spliced)