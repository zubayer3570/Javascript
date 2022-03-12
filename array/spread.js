const array = [1, 2, 3, 4, 5, 6];
console.log({ ...array })
console.log([...array])
//spread operator copy data from the array, and that data change its form according to where it has been input.
//as you can see if it is input in curly brackets, it turns into an object.

const newArray = [...array];
array.shift(5);
console.log(newArray);
console.log(array);
//it you assign the data into a new variable, and after that you push something in the array, the assigned data to the variable doesn't change.
//because it becomes a copy of the array