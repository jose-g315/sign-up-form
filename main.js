// jose-g315
// form validation

// adding dashes to phone number input
const telephoneNumber = document.querySelector('#number');
telephoneNumber.addEventListener('keyup', () =>{
  if (event.key != 'Backspace' && (telephoneNumber.value.length === 3 || telephoneNumber.value.length === 7)){
  telephoneNumber.value += '-';
  }
});
