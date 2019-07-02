const $input = document.querySelector('[data-js="input"]');
const $send = document.querySelector('[data-js="send"]');
const $removeSend = document.querySelector('[data-js="remove"]');
const $calculate = document.querySelector('[data-js="calculate"]');
const $viewNumber = document.querySelector('[data-js="enter-numbers"]');
let numbers = [1.5, 4.4, 2.8, 1.9, 3.2, 5.5, 1.0, 3.2, 3.2, 2.3, 2.3, 2.7, 4.7, 2.3, 4.4];
let rol;

$send.addEventListener('click', function() {
  numbers.push( Number($input.value) );
  $viewNumber.innerHTML = numbers.join(', ');
  console.log(numbers);
});

$removeSend.addEventListener('click', function() {
  numbers.pop();
  $viewNumber.innerHTML = numbers.join(', ');
});

$calculate.addEventListener('click', function() {
  calculateRol();
  console.log('Rol:', rol);
  console.log('Classes:', calculateClass());
  console.log('Intervalo:', calculateInterval());
  console.log('|X:', calculateAverage());
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