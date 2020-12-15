let countries = prompt('Укажите страну доставки');
let normalizedCountries = countries.toLowerCase();
console.log(normalizedCountries);

let price;

switch (normalizedCountries) {
  case 'китай': {
    price = '100';
    normalizedCountries = 'Китай';
    break;
  }

  case 'чили': {
    normalizedCountries = 'Чили';
    price = '250';
    break;
  }

  case 'австралия': {
    normalizedCountries = 'Австралию';
    price = '170';
    break;
  }

  case 'индия': {
    normalizedCountries = 'Индию';
    price = '80';
    break;
  }

  case 'ямайка': {
    normalizedCountries = 'Ямайку';
    price = '120';
    break;
  }

  default:
    alert('В вашей стране доставка не доступна');
}
price ? console.log(
  `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`): '';