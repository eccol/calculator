let display = '';
let a = null;
let op = null;
let b = 0;
let prev = ''

// When digit clicked, append to display
const buttons = document.querySelectorAll('.digit');
buttons.forEach((btn) => btn.addEventListener('click', () => {
  if (prev === 'operator') {
    display = btn.id;
  }
  else if (display.length < 10) {
    display += btn.id;
  }
}))

// When operator clicked, save previous number and operator
// OR if already operator, run equals first
operators = document.querySelectorAll('.operator');
operators.forEach((btn) => btn.addEventListener('click', () => {
  if (prev != 'equals') {
    b = Number(display);
    a = operate(a, b, op);
  }
  op = btn.id;

  if (!a) a = b;
  display = a;
}))

// When equals clicked, save the second number and run the function
document.querySelector('.equals').addEventListener('click', () => {
  if (prev != 'equals') b = Number(display);
  a = operate(a, b, op);
  display = a;
})

document.querySelector('.clear').addEventListener('click', () => {
  display = '';
  a = null;
  b = 0;
  op = null;
})

document.querySelector('.backspace').addEventListener('click', () => {
  display = display.slice(0, -1);
})

// This display update has to stay at the end of the event listeners so it updates *after* the selection
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    prev = e.target.className;
    resultBox = document.querySelector('.result')
    if (!display) {
      resultBox.textContent = 0;
    } else {
      resultBox.textContent = display
    }
  })
})

function add(a, b) {
  if (!a) a = 0;
  return a + b;
}

function subtract(a, b) {
  if (!a) {
    a = b;
    b = 0;
  }
  return a - b;
}

function multiply(a, b) {
  if (!a) a = 1;
  return a * b;
}

function divide(a, b) {
  if (b === 0) return '😒';
  if (!a) {
    a = b;
    b = 1;
  }
  return a / b;
}

function operate(a, b, operator) {
  if (!operator) return b;
  if (operator === '+') return add(a, b);
  if (operator === '-') return subtract(a, b);
  if (operator === '*') return multiply(a, b);
  if (operator === '/') return divide(a, b);
}