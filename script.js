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

let firstNum;
let operator;
let secondNum;

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

const body = document.querySelector('#body');

const biggie = document.createElement('div');
biggie.setAttribute('id', 'bigContainer');
body.appendChild(biggie);

const calcBox1 = document.querySelector('#container1');
biggie.body.appendChild(calcBox1);

const button7 = document.querySelector('#button7');
calcBox1.appendChild(button7);

const button8 = document.querySelector('#button8');
calcBox1.appendChild(button8);

const button9 = document.querySelector('#button9');
calcBox1.appendChild(button9);

const division = document.querySelector('#divide');
calcBox1.appendChild(division);

const clear = document.querySelector('#clear');
calcBox1.appendChild(clear);

const button4 = document.querySelector('#button4');


const button5 = document.querySelector('#button5');


const calcBox2 = document.querySelector('#container2');

biggie.appendChild(calcBox2);


const button6 = document.querySelector('#button6');

const multiplication = document.querySelector('#multiply');

calcBox2.appendChild(button4);
calcBox2.appendChild(button5);
calcBox2.appendChild(button6);
calcBox2.appendChild(multiplication);

const calcBox3 = document.querySelector('#container3');
biggie.appendChild(calcBox3);

const button1 = document.querySelector('#button1');

calcBox3.appendChild(button1);

const button2 = document.querySelector('#button2');

calcBox3.appendChild(button2);

const button3 = document.querySelector('#button3');

calcBox3.appendChild(button3);

const subtraction = document.querySelector('#subtract');

calcBox3.appendChild(subtraction);

const calcBox4 = document.querySelector('#container4');

biggie.appendChild(calcBox4);

const zero = document.querySelector('#zero');
calcBox4.appendChild(zero);

const point = document.querySelector('#decimal');
calcBox4.appendChild(point);

const addition = document.querySelector('#add');
calcBox4.appendChild(addition);

const equal = document.querySelector('#equals');
calcBox4.appendChild(equal);

const inputBox = document.querySelector('#display');


biggie.appendChild(inputBox);



button7.addEventListener('onclick', () => {
  document.getElementById("display").innerText = '7';
});
