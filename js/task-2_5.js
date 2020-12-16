'use strict';

// сonst checkForSpam = function (message) {
//   message = message.toLowerCase();
//   if (message.includes('sale') || message.includes('spam')) {
//     return true;
//   } else {
//     return false;
//   }
// };

const checkForSpam = function (message) {
  message = message.split(' ');
  let result = false;
  for (let one of message) {
    if (
      one.toLowerCase().includes('spam') ||
      one.toLowerCase().includes('sale')
    ) {
      result = true;
      return result;
    }
  }
  return result;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
