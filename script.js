let a = '';
let b = '';
let operator = '';
let isOperatorClicked = false;

const inputField = document.getElementById("display-inp-2");
const displayField = document.getElementById("display-inp-1");

// Initialize
inputField.value = '';
displayField.value = '';

// Main insert handler
function insert(val) {
    if (!isNaN(val) || val === '.') {
        handleNumber(val);
    } else {
        handleOperator(val);
    }
}

// Handle number or dot input
function handleNumber(val) {
    inputField.value += val;
}

// Handle operators and functions
function handleOperator(op) {
    switch (op) {
        case 'ac':
            clearAll();
            break;
        case 'pm':
            toggleSign();
            break;
        case 'per':
            inputField.value = parseFloat(inputField.value) / 100;
            break;
        case '=':
            if (a && operator && inputField.value !== '') {
                b = inputField.value;
                const result = operate(parseFloat(a), parseFloat(b), operator);
                inputField.value = result;
                displayField.value = `${a} ${operator} ${b} =`;
                a = '';
                b = '';
                operator = '';
                isOperatorClicked = false;
            }
            break;
        default:
            if (inputField.value === '') return;
            if (!isOperatorClicked) {
                a = inputField.value;
                operator = op;
                displayField.value = `${a} ${operator}`;
                inputField.value = '';
                isOperatorClicked = true;
            } else {
                // If operator clicked again before "=", allow chaining
                b = inputField.value;
                a = operate(parseFloat(a), parseFloat(b), operator);
                operator = op;
                displayField.value = `${a} ${operator}`;
                inputField.value = '';
            }
            break;
    }
}

// Clear inputs
function clearAll() {
    a = '';
    b = '';
    operator = '';
    isOperatorClicked = false;
    inputField.value = '';
    displayField.value = '';
}

// Toggle sign of the number
function toggleSign() {
    if (inputField.value === '') return;
    let val = parseFloat(inputField.value);
    inputField.value = -val;
}

// Perform calculation
function operate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? "Error" : a / b;
        default: return 0;
    }
}
