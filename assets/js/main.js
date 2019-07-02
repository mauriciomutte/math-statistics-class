const $input = document.querySelector('[data-js="input"]');
const $send = document.querySelector('[data-js="send"]');
const $viewNumber = document.querySelector('.numbers');
let numbers = [];

$send.addEventListener('click', function() {
  numbers.push( Number($input.value) );
  viewNumbers()
  console.log(numbers);
});