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