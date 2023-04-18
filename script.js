function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a/b
}

// functions for all the basic math operations

let firstNum;
let operator;
let secondNum;

// three variables for a calculator operation (eg: 3 (firstNum) + (operator)
// 5 (secondNum))

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
       return add(firstNum, secondNum);
    } else if (operator === "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "*") {
       return  multiply (firstNum, secondNum);
    } else if (operator === "/") {
       return divide (firstNum, secondNum);
    }
}

// function that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

const calcBox = document.querySelector('#container');
 // variable that selects calculator container box

 const displayBox = document.querySelector('#display');
 // variable that selects display numbers box 

 calcBox.appendChild(displayBox);
 // append childNode of display box to container paretNode



