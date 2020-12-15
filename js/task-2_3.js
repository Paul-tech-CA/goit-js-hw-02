'use srict';
let biggestWord;

const findLongestWord = function(string) {
  string = string.split(' ');
  biggestWord = string[0];
  for (let i = 1; i < string.length; i += 1 ){


    if (string[i].length > biggestWord.length){
      biggestWord = string[i];
    }

console.log(biggestWord);
  }


};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'