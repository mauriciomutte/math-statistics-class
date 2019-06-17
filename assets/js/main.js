const $input = document.querySelector('.input');
const $btn = document.querySelector('.btn');
const dataStructure = {};
let inputValue;

$btn.addEventListener('click', getInputValue);
$input.addEventListener('keyup', function(e) {
  if (event.keyCode === 13) {
    event.preventDefault();
    getInputValue();
   }
});

function getInputValue() {
  inputValue = $input.value.match(/\w+(,\w+)?/g)
  console.log(inputValue)

  start();
}

function start() {
  rol();
  calculateClass();
  calculateInterval(dataStructure.rol, dataStructure.class)
  console.log(dataStructure)
}

// Rol
function rol() {
  dataStructure.rol = inputValue.sort();
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