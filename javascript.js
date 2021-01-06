let a = '';
const input = document.querySelector('.input');

function insert(value) {
  input.value += value;
  a = a + value;
  console.log(a);
}

function evaluation() {
  const result = eval(a);
  console.log(result);
  input.value = result;
}

function Delete() {
  const length = a.length - 1;
  const b = a.slice(0, length);
  console.log(length);
  console.log(b);
  a = b;
  input.value = a;
}

function Clear() {
  a = '';
  b = '';
  input.value = '';
}
