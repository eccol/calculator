let display = '';
let a = 0;
let op = '';
let b = 0;

// When digit clicked, append to display
const buttons = document.querySelectorAll('.digit');
buttons.forEach((btn) => btn.addEventListener('click', () => {
  display += btn.id;
}))

// When operator clicked, save previous number and operator
// OR if already operator, run equals first
operators = document.querySelectorAll('.operator');
operators.forEach((btn) => btn.addEventListener('click', () => {
  if (op) {
    b = Number(display);
    result = operate(a, b, op);
    display = result;
    document.querySelector('.result').textContent = display;
  }
  a = Number(display);
  op = btn.id;
  display = '';
}))

// When equals clicked, save the second number and run the function
document.querySelector('.equals').addEventListener('click', () => {
  b = Number(display);
  result = operate(a, b, op);
  a = result;
  display = result;
})

document.querySelector('.clear').addEventListener('click', () => {
  display = '';
  a = 0;
  b = 0;
  op = '';
})

document.querySelector('.backspace').addEventListener('click', () => {
  display = display.slice(0, -1);
})

// This display update has to stay at the end of the event listeners so it updates *after* the selection
document.querySelectorAll('button:not(.operator)').forEach((btn) => {
  btn.addEventListener('click', () => {
    resultBox = document.querySelector('.result')
    if (!display) {
      resultBox.textContent = 0;
    } else {
      resultBox.textContent = display
    }
  })
})

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return '😒';
  return a / b;
}

function operate(a, b, operator) {
  if (!operator) return b;
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a, b);
}