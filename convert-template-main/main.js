//Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//Obtendo elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

//Manipulando input amount para receber somente números
//Nao necessita de um console.log() pois não precisa retornar nada
amount.addEventListener('input', () => {
  const hascaractersRegex = /\D+/g;
  amount.value = amount.value.replace(hascaractersRegex, '');
});

//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  //verifica qual moeda foi selecionada
  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$');
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£');
      break;
  }
};

//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    //Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //variavel para multiplicar a moeda
    let total = amount * price;

    //Verifica se o resultado não é um número.
    if (isNaN(total)) {
      return alert('Por favor digite o número corretamente');
    }

    //formatar o valor total para exibir e tirar o R$
    total = formatCurrencyBRL(total).replace('R$', '');

    //exibe o valor total da conversao
    result.textContent = `${total} Reais`;

    //Aplica a classe footer para poder mostrar o resultado
    footer.classList.add('show-result');
  } catch (error) {
    //Remove a classe footer, faz ele desaparecer da tela.
    footer.classList.remove('show-result');
    console.log(error);
    alert('Não foi possível converter. tente mais tarde.');
  }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  //Converte para numero para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)

  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
