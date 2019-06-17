const $input = document.querySelector('.input');
const $btn = document.querySelector('.btn');
const dataStructure = {};
let inputValue = []

$btn.addEventListener('click', getInputValue);
$input.addEventListener('keyup', function(e) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getInputValue();
   }
});

function getInputValue() {
  $input.value.match(/\w+(\.\w+)?/g).map(function(item) {
    inputValue.push( Number(item) );
  });

  start();
}

function start() {
  rol();
  calculateClass();
  calculateInterval(dataStructure.rol, dataStructure.class)
  repeatedValues();
  buildPage()
  insertVariable();

  console.log(dataStructure)
}

// Rol
function rol() {
  dataStructure.rol = inputValue.sort( (a, b) => a - b );
}

// Calculate class
function calculateClass() {
  dataStructure.class = Math.floor( Math.log10(inputValue.length) * 3.3 + 1 );
}

// Calculate interval
function calculateInterval(rol, classNum) {
  const rolIndex = rol.length - 1;
  dataStructure.interval = Math.ceil( ( rol[rolIndex] - rol[0] ) / classNum );
}

// Repeated values
function repeatedValues() {
  dataStructure.repeated = {};
  inputValue.forEach(function(x) {
    dataStructure.repeated[x] = (dataStructure.repeated[x] || 0) + 1; 
  });
}

function insertVariable() {
  const repeated = Object.entries(dataStructure.repeated);
  dataStructure.variable = [];

  if (repeated.length <= dataStructure.class) {
    dataStructure.class = repeated.length;

    repeated.forEach(function(item) {
      dataStructure.variable.push(item[0])
    });
  } else {
    let numOne = Math.floor(dataStructure.rol[0]);
    for (let i = 0; i < dataStructure.class; i++) {
      let numTwo = numOne + dataStructure.interval;

      dataStructure.variable.push( '[' + numOne + ', ' + numTwo + '[' );

      numOne = numTwo      
    }
  }
}

function buildPage() {
  const $rol = document.querySelector('.rol');
  const $class = document.querySelector('.class');
  const $interval = document.querySelector('.interval');
  
  $rol.innerHTML = dataStructure.rol.join('; ')
  $class.innerHTML = dataStructure.class
  $interval.innerHTML = dataStructure.interval
}