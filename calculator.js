let display = '';

const buttons = document.querySelectorAll('.digit, .operator');
buttons.forEach((btn) => btn.addEventListener('click', () => {
  display += btn.id;
  document.querySelector('.result').textContent = display;
}))

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