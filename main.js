let input = document.getElementById('input');
const add = document.getElementById('add');
const substract = document.getElementById('substract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button0 = document.getElementById('0');
const period = document.getElementById('period');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const buttons = document.querySelectorAll('.button');
let firstValue;
let secondValue;
let operator;

buttons.forEach((button) => button.addEventListener('click', function () {
    input.value += button.textContent;
}))

add.addEventListener('click', function () {
    firstValue = input.value;
    input.value = "";
    operator = "+";
})

substract.addEventListener('click', function () {
    firstValue = input.value;
    input.value = "";
    operator = "-";
})

multiply.addEventListener('click', function () {
    firstValue = input.value;
    input.value = "";
    operator = "*";
})

divide.addEventListener('click', function () {
    firstValue = input.value;
    input.value = "";
    operator = "/";
})


equals.addEventListener('click', function () {
    secondValue = input.value;
    operators(firstValue, secondValue, operator);
})

clear.addEventListener('click', function () {
    input.value = "";
})


function operators(value1, value2, operator) {

    switch (operator) {
        case "+":
            input.value = Number(value1) + Number(value2);
            break;
        case "-":
            input.value = Number(value1) - Number(value2);
            break;
        case "*":
            input.value = Number(value1) * Number(value2);
            break;
        case "/":
            input.value = Number(value1) / Number(value2);
            break;
        default:
            break;
    }
}