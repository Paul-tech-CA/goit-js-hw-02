let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let userInput = prompt('Какое количество дроидов Вы хотите купить?');
userInput = Number(userInput);
console.log(userInput);

if (!userInput) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = userInput * pricePerDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
    alert('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`,
    );
    alert(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}
