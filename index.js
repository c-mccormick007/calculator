const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelectorAll('[data-equals]')
const clearButton = document.querySelectorAll('[data-clear]')
const decimalButton = document.querySelectorAll('[data-decimal]')
let display = document.getElementById('display');

// make the object tomorrow.

const calculator = {
    displayValue: '0',
    firstNum: null,
    operator: null,
    checkSecondOperand: false,
    operatorClicked: false,
    equalPressed: false
};

updateDisplay();

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputDigit(button.innerText);
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputOperator(button.innerText);
    })
})

equalsButton.forEach(button => {
    button.addEventListener('click', () => {
        equal();
    })
})

clearButton.forEach(button => {
    button.addEventListener('click', () => {
        clear();
    })
})

decimalButton.forEach(button =>{
    button.addEventListener('click', () => {
        inputDecimal(button.innerText);
    })
})

function updateDisplay(){
    display.innerText = calculator.displayValue;
    if (display.innerText.length > 9){
        display.innerText = String(calculator.displayValue).substring(0,9);
    }
}

function inputDigit(digit){
    const {displayValue} = calculator;
    if (calculator.checkSecondOperand == true){
        calculator.displayValue = digit;
        calculator.checkSecondOperand = false;
        calculator.operatorClicked = false;
        updateDisplay();
    }else{
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
        calculator.operatorClicked = false;
        updateDisplay();
    }
}

function inputDecimal(dot){
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
        updateDisplay();
    }
}

function inputOperator(oper){

    if (calculator.operatorClicked == false){
        if (calculator.firstNum === null){
            calculator.firstNum = parseFloat(calculator.displayValue);
            calculator.operator = oper;
            calculator.checkSecondOperand = true;
            calculator.operatorClicked = true;
            console.log(calculator);
        }else{
            if (calculator.equalPressed == true){
                calculator.firstNum = parseFloat(calculator.displayValue);
                calculator.operator = oper;
                calculator.checkSecondOperand = true;
                calculator.operatorClicked = true;
            }else{
                calculator.operator = oper;
                let result = operate(calculator.operator, calculator.firstNum, parseFloat(calculator.displayValue))
                calculator.displayValue = result;
                calculator.firstNum = result;
                calculator.checkSecondOperand = true;
                calculator.operatorClicked = true;
                calculator.equalPressed = false;
                console.log(calculator);
                updateDisplay();
            }
        }
    }else{
        console.log("error");
    }
}

function equal(){
    if (!calculator.operator){
        console.log("error");
    }else{
        calculator.displayValue = operate(calculator.operator, calculator.firstNum, parseFloat(calculator.displayValue));
        updateDisplay();
        calculator.firstNum = parseFloat(calculator.displayValue);
        calculator.checkSecondOperand = true;
        calculator.equalPressed = true;
        console.log(calculator);
    }
}

function clear(){
    calculator.displayValue = '0';
    calculator.checkSecondOperand = false;
    calculator.firstNum = null;
    calculator.operator = null;
    calculator.equalPressed = false;
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
    if (b==0){
        alert("Did you learn anything in school? Stop trying to break my calculator.")
        clear();
        return 0;
    }else{
        return a/b;
    }
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

