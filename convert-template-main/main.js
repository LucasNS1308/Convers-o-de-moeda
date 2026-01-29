const amount = document.getElementById('amount');

//Manipulando input amount para receber somente números
amount.addEventListener('input', () => {
  const hascaractersRegex = /\D+/g;
  amount.value = amount.value.replace(hascaractersRegex, '');
});
