const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelectorAll('[data-equals]')
const clearButton = document.querySelectorAll('[data-clear]')
let display = document.getElementById('display');

// make the object tomorrow.

// const calculator = {
//     displayValue: '0',
//     firstNum: null,
//     operator: null,
//     checkSecondOperand: false,
// };

let inputOne = null;
let inputTwo = null;
let operand = null;
let previous = 

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand == null){
        display.append(button.innerHTML);
        }else{
            display.append(button.innerHTML);
        }
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (inputOne == null){
            inputOne = parseInt(display.innerHTML);
            operand = button.innerHTML;
        }else{
            console.log(`${inputOne} - ${operand} - ${inputTwo}`);
        }
    })
})

equalsButton.forEach(button => {
    button.addEventListener('click', () => {
        inputTwo = parseInt(display.innerHTML);
        display.innerHTML = operate(operand, inputOne, inputTwo);
        console.log(`${inputOne} ${operand} ${inputTwo}`);
    })
})

clearButton.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML = '';
        inputOne = null;
        inputTwo = null;
    })
})



function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(oper, a, b){
    if (oper == "*"){
        return multiply(a,b)
    }else if(oper == "-"){
        return subtract(a,b)
    }else if(oper == "+"){
        return add(a,b)
    }else{
        return divide(a,b)
    }
}

