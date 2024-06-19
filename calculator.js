// Task 1: Implement a Set-Based Operator Management System for a Basic JavaScript Calculator App

// Objective:
// Create a simple JavaScript implementation that uses the Set data structure to manage and validate basic operators (+, -, *, /) supported by a basic calculator app.

// Steps:
// Define Supported Operators:
// Initialize a set for operators.

const setOfOperations = new Set(['+', '-', '*', '/']);
//console.log(setOfOperations);

// Implement Validation Function:
// Create a function to check if a given input is a valid operator.

// Use the Validation Function:
// Integrate the validation function into the main part of your calculator app.

// Function to check if the input is a valid operator
// function isOperator(input) {
//     if (setOfOperations.has(input)) {
//         return true;
//     } else {
//         console.log('put a valid operator');
//         return false;
//     }
// }
function isOperator(input) {
    if (!setOfOperations.has(input)) console.log('print a valid operator')
}

// Implement Basic Operations:
// Create a function to perform basic operations.

// // Function to perform basic operations
function calculate(a, operator, b) {	
    isOperator(operator);

    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
}

console.log(calculate(2, '+', 3));
console.log(calculate(20, '-', 3));
console.log(calculate(12, '*', 3));
console.log(calculate(20, '/', 5));
console.log(calculate(2, 'p', 3));


// Example usage
// function testCalculator() {
//      console.log(calculate(2, '+', 3)); // 5
//      console.log(calculate(5, '-', 2)); // 3
//      console.log(calculate(4, '*', 3)); // 12
//      console.log(calculate(8, '/', 2)); // 4
//      console.log(calculate(8, '^', 2)); // Invalid operator!
// }

// console.log(testCalculator());

// `${a} ${operator} ${b} = ${result}`


// Task 2: Implement a History Management System Using Map()

// Objective:
// Extend the basic calculator app to store the history of operations using a Map and display this history on the web page.

// Steps:
// Create a Map for Storing History:

// Initialize a Map to store operations history.
// Extend the Calculation Function:

// Modify the calculate function to store each operation in the history map.
// Display History:

// Create a function to display the history on the web page.

// History entry should follow the pattern: `${a} ${operator} ${b} = ${result}`