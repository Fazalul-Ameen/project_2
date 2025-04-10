var operatorFound = 0;
let a = 0;
let b = 0;
const buttons = document.getElementsByClassName("btn");
console.log(buttons);
const inputfield = document.getElementById("display-inp-2");
console.log(inputfield);
const displayfield = document.getElementById("display-inp-1");
console.log(displayfield);
inputfield.value = " ";
displayfield.value = " ";
function insert(val) {
    console.log(typeof (val));
    if (typeof (val) == "number") {
        inputfield.value += val;
    }
    if (typeof (val) == "string") {
        switch (val) {
            case 'ac':
                displayfield.value = "";
                inputfield.value = " ";
                operatorFound = 0;
                a = 0;
                b = 0;
                break;
            case 'pm':
                inputfield.value = toggleSign(inputfield.value);
                break;
            case 'per':
                inputfield.value = inputfield.value / 100;
                break;
        }
    }

    if ((typeof (val) == "string") && ((val == '/') || (val == '*') || (val == '-') || (val == '+') || (val == '='))) {
        if (operatorFound === 1) {
            b = String(inputfield.value);
            console.log(b);
        }

        switch (val) {
            case '/':
                displayfield.value = inputfield.value;
                if (operatorFound === 1) {

                    displayfield.value = doOperation(a, b, '/');
                    inputfield.value = "";

                    operatorFound = 0;
                }
                if (operatorFound === 0) {
                    a = displayfield.value;
                    console.log(a);

                    inputfield.value = "";
                    displayfield.value += "/";
                    operatorFound = 1;
                }
                break;


            case '*':
                displayfield.value = inputfield.value;
                if (operatorFound === 1) {

                    displayfield.value = doOperation(a, b, '*');
                    inputfield.value = "";

                    operatorFound = 0;
                }
                if (operatorFound === 0) {
                    a = displayfield.value;
                    console.log(a);

                    inputfield.value = "";
                    displayfield.value += "*";
                    operatorFound = 1;
                }
                break;


            case '-':
                displayfield.value = inputfield.value;
                if (operatorFound === 1) {

                    displayfield.value = doOperation(a, b, '-');
                    inputfield.value = "";

                    operatorFound = 0;
                }
                if (operatorFound === 0) {
                    a = displayfield.value;
                    console.log(a);

                    inputfield.value = "";
                    displayfield.value += "-";
                    operatorFound = 1;
                }
                break;


            case '+':
                displayfield.value = inputfield.value;
                if (operatorFound === 1) {

                    displayfield.value = doOperation(a, b, '+');
                    inputfield.value = "";

                    operatorFound = 0;
                }
                if (operatorFound === 0) {
                    a = displayfield.value;
                    console.log(a);

                    inputfield.value = "";
                    displayfield.value += "+";
                    operatorFound = 1;
                }
                break;

            case '=':
                displayfield.value += inputfield.value;

                inputfield.value = "";
                inputfield.value = eval(displayfield.value);
                console.log(inputfield.value);
                break;
        }
    }
}

function toggleSign(value) {
    return -value;
}

function doOperation(a, b, op) {
    switch (op) {
        case '/':
            return a / b;
            break;
        case '*':
            return a * b;
            break;
        case '-':
            return a - b;
            break;
        case '+':
            return a + b;
            break;
    }
}