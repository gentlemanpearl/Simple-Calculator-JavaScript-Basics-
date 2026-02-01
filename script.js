document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const operation = document.getElementById('operation');
  const resultEl = document.getElementById('result');

  function compute(a, b, op) {
    switch (op) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
      default:
        throw new Error('Unknown operation');
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = parseFloat(input1.value);
    const b = parseFloat(input2.value);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      resultEl.textContent = 'Please enter valid numbers.';
      resultEl.className = 'error';
      return;
    }

    try {
      const res = compute(a, b, operation.value);
      resultEl.textContent = `Result: ${res}`;
      resultEl.className = 'success';
    } catch (err) {
      resultEl.textContent = err.message;
      resultEl.className = 'error';
    }
  });
});