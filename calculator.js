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
operators = document.querySelectorAll('.operator');
operators.forEach((btn) => btn.addEventListener('click', () => {
  a = Number(display);
  op = btn.id;
  display = '';
}))

// When equals clicked, save the second number and run the function
document.querySelector('.equals').addEventListener('click', () => {
  b = Number(display);
  result = operate(a, b, op);
  display = result;
})

// When clear clicked, clear the display and empty the variables
document.querySelector('.clear').addEventListener('click', () => {
  display = '';
  a = 0;
  b = 0;
  op = '';
})

// This has to stay at the end of the event listeners so it updates *after* the selection
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => { document.querySelector('.result').textContent = display })
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
  return a / b;
}

function operate(a, b, operator) {
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a, b);
}