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