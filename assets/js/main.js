const $input = document.querySelector('[data-js="input"]');
const $send = document.querySelector('[data-js="send"]');
const $removeSend = document.querySelector('[data-js="remove"]');
const $viewNumber = document.querySelector('[data-js="enter-numbers"]');
let numbers = [];

$send.addEventListener('click', function() {
  numbers.push( Number($input.value) );
  $viewNumber.innerHTML = numbers.join(', ');
  console.log(numbers);
});

$removeSend.addEventListener('click', function() {
  numbers.pop();
  $viewNumber.innerHTML = numbers.join(', ');
});