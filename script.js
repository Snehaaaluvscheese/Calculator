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

    const button7 = document.createElement('button');
    // created first button '7' of calculator

    button7.textContent = '7';
    // added text content to button7

    button7.setAttribute('id', 'button7');
    // added id to button7

    calcBox.appendChild(button7);
    // append childNode button 7 to calculator container parentNode

    let displayValue;
    // variable to store display value

    function addNum7() {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
    }
    // function to input num 7 
      

    button7.addEventListener('click', () => {
      addNum7();
      displayValue = "7";
    });
    // add event listener to button 7 that puts 7 in display

     const button8 = document.createElement('button');
     // created second button '8' of calculator

     button8.textContent = '8';
     // added text content to button8

     button8.setAttribute('id', 'button8');
     // added id to button8

     calcBox.appendChild(button8);
     // append childNode button 8 to calculator container parentNode

     button8.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
        displayValue = "8";
     });
     // add event listener to button 8 that puts 8 in display



