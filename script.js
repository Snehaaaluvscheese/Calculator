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

    let displayValue = "";
    // variable to store display value

    button7.addEventListener('click', () => {
      document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
      displayValue += "7";
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
        displayValue += "8";
     });
     // add event listener to button 8 that puts 8 in display

     const button9 = document.createElement('button');
     // created third button '9' of calculator

     button9.textContent = '9';
     // added text content to button9

     button9.setAttribute('id', 'button9');
     // added id to button9

     calcBox.appendChild(button9);
     // append childNode button 9 to calculator container parentNode

     button9.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
        displayValue += "9";
     });
     // add event listener to button 9 that puts 9 in display

     const division = document.createElement('button');
     // created fourth button 'division' of calculator

     division.textContent = '/';
     // added text content to division

     division.setAttribute('id', 'division');
     // added id to division

     calcBox.appendChild(division);
     // append childNode division to calculator container parentNode

     division.addEventListener('click', () => {
        
     });
     // add event listener to division 

     const clearAll = document.createElement('button');
     // created fifth button 'clear' of calculator

     clearAll.textContent = 'clear';
     // added text content to clear

     clearAll.setAttribute('id', 'clearAll');
     // added id to clearAll

     calcBox.appendChild(clearAll);
     // append childNode clearAll to calculator container parentNode

     clearAll.addEventListener('click', () => {
        document.getElementById("display").innerHTML = "";
        displayValue = "";
     });
     // add event listener to clearAll that clears display

     const button4 = document.createElement('button');
     // created sixth button '4' of calculator

     button4.textContent = '4';
     // added text content to button4

     button4.setAttribute('id', 'button4');
     // added id to button4

     calcBox.appendChild(button4);
     // append childNode button 4 to calculator container parentNode

     button4.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
        displayValue += "4";
     });
     // add event listener to button 4 that puts 4 in display

     const button5 = document.createElement('button');
     // created seventh button '5' of calculator

     button5.textContent = '5';
     // added text content to button5

     button5.setAttribute('id', 'button5');
     // added id to button5

     calcBox.appendChild(button5);
     // append childNode button 5 to calculator container parentNode

     button5.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
        displayValue += "5";
     });
     // add event listener to button 5 that puts 5 in display

     const button6 = document.createElement('button');
     // created eighth button '6' of calculator

     button6.textContent = '6';
     // added text content to button6

     button6.setAttribute('id', 'button6');
     // added id to button6

     calcBox.appendChild(button6);
     // append childNode button 6 to calculator container parentNode

     button6.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
        displayValue += "6";
     });
     // add event listener to button 6 that puts 6 in display

     const multiplication = document.createElement('button');
     // created ninth button 'multiplication' of calculator

     multiplication.textContent = '*';
     // added text content to multiplication

     multiplication.setAttribute('id', 'multiplication');
     // added id to multiplication

     calcBox.appendChild(multiplication);
     // append childNode multiplication to calculator container parentNode

     multiplication.addEventListener('click', () => {
        
     });
     // add event listener to multiplication 

     const button1 = document.createElement('button');
     // created tenth button '1' of calculator

     button1.textContent = '1';
     // added text content to button1

     button1.setAttribute('id', 'button1');
     // added id to button1

     calcBox.appendChild(button1);
     // append childNode button 1 to calculator container parentNode

     button1.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
        displayValue += "1";
     });
     // add event listener to button 1 that puts 1 in display

     const button2 = document.createElement('button');
     // created eleventh button '2' of calculator

     button2.textContent = '2';
     // added text content to button2

     button2.setAttribute('id', 'button2');
     // added id to button2

     calcBox.appendChild(button2);
     // append childNode button 2 to calculator container parentNode

     button2.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
        displayValue += "2";
     });
     // add event listener to button 2 that puts 2 in display

     const button3 = document.createElement('button');
     // created twelfth button '3' of calculator

     button3.textContent = '3';
     // added text content to button3

     button3.setAttribute('id', 'button3');
     // added id to button3

     calcBox.appendChild(button3);
     // append childNode button 3 to calculator container parentNode

     button3.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
        displayValue += "3";
     });
     // add event listener to button 3 that puts 3 in display

     const subtraction = document.createElement('button');
     // created thirteenth button 'subtraction' of calculator

     subtraction.textContent = '-';
     // added text content to subtraction

     subtraction.setAttribute('id', 'subtraction');
     // added id to subtraction

     calcBox.appendChild(subtraction);
     // append childNode subtraction to calculator container parentNode

     subtraction.addEventListener('click', () => {
        
     });
     // add event listener to subtraction 

     const button0 = document.createElement('button');
     // created fourtheenth button '0' of calculator

     button0.textContent = '0';
     // added text content to button0

     button0.setAttribute('id', 'button0');
     // added id to button0

     calcBox.appendChild(button0);
     // append childNode button 0 to calculator container parentNode

     button0.addEventListener('click', () => {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
        displayValue += "0";
     });
     // add event listener to button 0 that puts 0 in display

     const addition = document.createElement('button');
     // created fifteenth button 'addition' of calculator

     addition.textContent = '+';
     // added text content to addition

     addition.setAttribute('id', 'addition');
     // added id to addition

     calcBox.appendChild(addition);
     // append childNode addition to calculator container parentNode

     addition.addEventListener('click', () => {
        
     });
     // add event listener to addition 

     const equals = document.createElement('button');
     // created sixteenth button 'equals' of calculator

     equals.textContent = '=';
     // added text content to equals

     equals.setAttribute('id', 'equals');
     // added id to equals

     calcBox.appendChild(equals);
     // append childNode equals to calculator container parentNode

     equals.addEventListener('click', () => {
        
     });
     // add event listener to equals 

     // Pseudocode for making calculator work (also remember to watch 
     // chrome devtools debugger tutorial video before starting) :-

     // 1) When user presses an operator, store what is before it
     // i.e. the first number in the firstNum variable. (firstNum = whatever the 
     // displayValue before the operator being pressed is)
     // ...Possible idea on how to do it: use if statement like "if (a button
     // from any of these 4 operator buttons (+, -, *, /) is pressed), 
     // firstNum = whatever is the displayValue before it.

     // 2) Whatever operator is pressed, save/store what it is in
     // the operator variable.

     // 3) When user pressed "="/equals key, call operate()
     // function using the user's input of firstNum and secondNum.

     // 4) When operate() function has been called, update
     // display box of calculator with solution to the operation.

     // Fix to the gotchas:
     // 1) When another operator button is pressed (+, -, *, /)
     // the operate() function goes off for the previous two numbers 
     // and the resulting number is used as firstNum for the second operation
     // 




     






