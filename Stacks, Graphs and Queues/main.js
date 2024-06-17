const stack = [];
const stackDisplay = document.getElementById('stack');

function push() {
    const value = prompt('enter value ti push:');
    stack.push(value);
    updateDisplay();
}

function pop() {
    if (stack.length === 0) {
        alert('stack is empty');
        return;
    }
    const poppedValue = stack.pop();
    alert('Popped value: ' + poppedValue);
    updateDisplay();
}

function updateDisplay() {
    stackDisplay.textContent = stack.join(' ,');
}

const queue = [];
const queueDisplay = document.getElementById('queue');

function enqueue() {
    const value = prompt('enter value to enqueue');
    queue.push(value);
    updateDisplay1();
    console.log('bo');
}

function dequeue() {
    if(queue.length === 0) {
        alert('queue is empty');
        return;
    }
    const dequeuedValue = queue.shift();
    alert('Dequeued value: ' + dequeuedValue);
    updateDisplay1();
}

function updateDisplay1() {
    queueDisplay.textContent = queue.join(', ');
}



// Task 1: Implement a Set-Based Operator Management System for a Basic JavaScript Calculator App

// Objective:
// Create a simple JavaScript implementation that uses the Set data structure to manage and validate basic operators (+, -, *, /) supported by a basic calculator app.

// Steps:
// Define Supported Operators:
// Initialize a set for operators.

// Implement Validation Function:
// Create a function to check if a given input is a valid operator.

// Use the Validation Function:
// Integrate the validation function into the main part of your calculator app.

// Implement Basic Operations:
// Create a function to perform basic operations.

// Task1

// Function to check if the input is a valid operator


// function isOperator(input) {
            
// }

// // Function to perform basic operations
// function calculate(a, operator, b) {	

// }


//  // Example usage
// function testCalculator() {
//     console.log(calculate(2, '+', 3)); // 5
//     console.log(calculate(5, '-', 2)); // 3
//     console.log(calculate(4, '*', 3)); // 12
//     console.log(calculate(8, '/', 2)); // 4
//     console.log(calculate(8, '^', 2)); // Invalid operator!
// }

// `${a} ${operator} ${b} = ${result}`

const stackInput = document.getElementById('stack-input');
const displayStackList = document.getElementById('stack-list');
const stackFromInput = [];

function pushElement() {
    const value = stackInput.value;
    stackFromInput.push(value);
    updateStackList();
    stackInput.value = '';
}

function popElement() {
    stackFromInput.pop();
    updateStackList();
    stackInput.value = '';
}

function updateStackList() {
    displayStackList.textContent = stackFromInput.join(', ')
}

const queueInput = document.getElementById('queue-input');
const queueList = document.getElementById('queue-list');
const queueListImplementation = [];

function enqueueElement() {
    const value = queueInput.value;
    queueListImplementation.push(value);
    displayQueueList();
    queueInput.value = '';
}

function dequeueElement() {
    queueListImplementation.shift();
    displayQueueList();
}

function displayQueueList() {
    queueList.textContent = queueListImplementation.join(', ')
};









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