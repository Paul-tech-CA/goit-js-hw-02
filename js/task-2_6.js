('use strict');

const numbers = [];
let total = 0;
let input;

while (!input) {
  let input = prompt('Введите число');

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введно не число, попробуйте еще раз');
    continue;
  } else if (input === 0) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  } else {
    numbers.push(input);
  }
}
