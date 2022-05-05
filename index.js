const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelectorAll('[data-equals]')
const clearButton = document.querySelectorAll('[data-clear]')
let display = document.getElementById('display');

// make the object tomorrow.

const calculator = {
    displayValue: '0',
    firstNum: null,
    operator: null,
    checkSecondOperand: false,
};

updateDisplay();

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputDigit(button.innerText);
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => { })
})

equalsButton.forEach(button => {
    button.addEventListener('click', () => { })
})

clearButton.forEach(button => {
    button.addEventListener('click', () => {
        clear();
    })
})

function updateDisplay(){
    display.innerText = calculator.displayValue;
}

function inputDigit(digit){
    const {displayValue} = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    updateDisplay();
}

function clear(){
    calculator.displayValue = '0';
    updateDisplay();
}

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

