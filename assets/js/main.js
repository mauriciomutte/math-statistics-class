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
}

// Rol
function rol() {
  dataStructure.rol = inputValue.sort();
}

// Calculate class
function calculateClass() {
  dataStructure.class = Math.floor( Math.log10(inputValue.length) * 3.3 + 1 );
}