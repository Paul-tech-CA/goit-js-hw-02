'use strict';

// var lowerCaseItems = $.map(items, String.toLowerCase);
const checkForSpam = function (message, word) {
  // message = message.toLowerCase;
  //  isInMessage = message.toLoverCase();

  const isInMessage = message.includes(word);

  // console.log(isInMessage);

  return isInMessage;
};

console.log(checkForSpam('Latest technology news', 'sale', 'spam')); // false

console.log(checkForSpam('JavaScript weekly newsletter', 'sale', 'spam')); // false

console.log(checkForSpam('Get best sale offers now!', 'sale', 'spam')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?', 'sale', 'spam')); // true
