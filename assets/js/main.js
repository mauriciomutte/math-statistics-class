const $input = document.querySelector('[data-js="input"]');
const $send = document.querySelector('[data-js="send"]');
const $removeSend = document.querySelector('[data-js="remove"]');
const $calculate = document.querySelector('[data-js="calculate"]');
const $viewNumber = document.querySelector('[data-js="enter-numbers"]');

const $rol = document.querySelector('.rol');
const $class = document.querySelector('.class');
const $interval = document.querySelector('.interval');
const $average = document.querySelector('.average');
const $median = document.querySelector('.median');

let numbers = [];
let rol;

$input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    $send.click()
  }
});

$send.addEventListener('click', function() {
  numbers.push( Number($input.value) );
  $viewNumber.innerHTML = numbers.join(', ');
  console.log(numbers);
  $input.value = '';
  $input.focus();
});

$removeSend.addEventListener('click', function() {
  numbers.pop();
  $viewNumber.innerHTML = numbers.join(', ');
});

$calculate.addEventListener('click', function() {
  calculateRol();
  $rol.innerHTML = rol.join(', ');
  $class.innerHTML = calculateClass();
  $interval.innerHTML = calculateInterval();
  $average.innerHTML = calculateAverage();
  $median.innerHTML = calculateMedian();
});

function calculateRol() {
  rol = numbers.sort((a,b) => a - b);
}

function calculateClass() {
  return Math.round( (Math.log10(numbers.length) * 3.3) + 1 );
}

function calculateInterval() {
  const first = Number(rol[0]); 
  const last = Number(rol[ (rol.length - 1) ]);

  return Math.ceil( (last - first) / calculateClass() );
}

function calculateAverage() {
  const sumAllNumbers = numbers.reduce((acc, cur) => {
    return acc + cur;
  });

  return Math.round( (sumAllNumbers / numbers.length) * 100 ) / 100;
}

function calculateMedian() {
  if (rol.length % 2 === 0) {
    const getNumberOne = (rol.length / 2) - 1;
    const getNumberTwo = getNumberOne + 1;

    return ( Number(rol[getNumberOne]) + rol[getNumberTwo] ) / 2;
  } else {
    const getNumber = Math.round( (rol.length - 1) / 2 ); 
    return rol[getNumber];
  }
}