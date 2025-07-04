// jose-g315
// form validation

// adding dashes to phone number input
const telephoneNumber = document.querySelector('#pNumber');
telephoneNumber.addEventListener('keyup', (e) =>{
  if (e.key != 'Backspace' && (telephoneNumber.value.length === 3 || telephoneNumber.value.length === 7)){
  telephoneNumber.value += '-';
  }
});