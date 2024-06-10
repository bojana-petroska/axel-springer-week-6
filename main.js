console.log('bo');

// Task 1: Arrays
// Objective: Learn how to create and manipulate single and multidimensional arrays.
// Instructions:
// 1. Create a single-dimensional array containing the numbers 1 to 5.

const array = [1, 2, 3, 4, 5];

// b.. Create a two-dimensional array (matrix) representing the following data:

const twoDimArray = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];

// 1 2 3
// 4 5 6
// 7 8 9

// 2. Add the number 6 to the end of the single-dimensional array.

//console.log(array.push(6));

// 3. Access and print the element at the second row and third column of the matrix.

//console.log(twoDimArray[1][2]);

// Task 2: Stacks
// Objective: Implement a basic stack using an array.
// Hint: Use the built-in functions push and pop
// Instructions:
// 1. Create an empty array to represent the stack.

const arr = [];

// 2. Implement functions to push elements onto the stack and pop elements from the
// stack.
// 3. Push the elements 10, 20, and 30 onto the stack.

arr.push(10, 20, 30);
//console.log(arr);

// 4. Pop an element from the stack and print it.

//console.log(arr.pop());

// Task 3: Queues
// Objective: Implement a basic queue using an array.
// Hint: You can use the built-in functions push and shift.
// Instructions:
// 1. Create an empty array to represent the queue.

const newArray = [];

// 2. Implement functions to enqueue (add) elements to the end of the queue and
// dequeue (remove) elements from the front of the queue.

const addElements = function(...elem) {
    newArray.push(...elem);
};

// 3. Enqueue the elements 'a', 'b', and 'c' to the queue.
addElements('a', 'b', 'c')
console.log(newArray);

// 4. Dequeue an element from the queue and print it.
const removeElementsFromStart = function(elem) {
    let firstElem = newArray.shift(0);
    return firstElem;
}

console.log(removeElementsFromStart());

// Task 4: Dictionaries (Objects)
// Objective: Learn how to create and manipulate dictionaries (objects).
// Hint: You can do this by:
// Instructions:
// 1. Create an object to represent a dictionary with keys 'name', 'age', and 'city'.

let dictionary = {
    firstName: 'Bo',
    age: 37,
    city: 'Berlin'
};

// 2. Assign appropriate values to these keys.
// 3. Add a new key 'country' with a value to the object.

dictionary.country = 'Deutschland';

// 4. Print the value of the 'name' key.

console.log(dictionary.firstName);
console.log(dictionary.country);
console.log(dictionary);

// Task 5: Sets
// Objective: Learn how to create and manipulate sets.
// Instructions:
// 1. Create a set and add the numbers 1, 2, 3, 4, and 5 to it.

const numbers = new Set([1, 2, 3, 4, 5]);
numbers.add(4);
numbers.add(6);
console.log(numbers);

// 2. Add a duplicate number to the set and observe what happens.
// 3. Remove a number from the set.

numbers.delete(2);
console.log(numbers);

// 4. Print all the elements of the set.


