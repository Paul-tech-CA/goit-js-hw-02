//  ========= bubbles sort === пузырьквая сортировка====

for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
}

// =================== вывод четного и не четного числа !!!! =====
'use strict';

const userInput = prompt('Введите последовательность чисел');
console.log(userInput);
let arr;



if (userInput !== null) {
    arr = userInput.split(',');
       console.log(arr);
    for (let i = 0; i < arr.length; i +=1){
        // if (i % 2 === 0)
        // console.log( arr[i]); 
    } 

    for (let i = 0; i < arr.length; i +=1){
        if (i % 2 === 1)
        console.log( arr[i]); 
    } 

}


'use srict';

// ============ function for selection/ FOR======
// let numbers = [1, 2, 3, 4, 5];

// const friends = ['Mango', 'Holly', 'Chelsy', 'Ayova', 'Chicago'];

// const finde = function(items) {
//   for (const item of items) {
//         console.log(item);
//     }
// };

// finde(numbers);
// finde(friends);
// finde(['n', 2, 3, 'l']);

// =============== Function for SEARCHINS / FindFriend====

const friends = ['Mango', 'Holly', 'Chelsy', 'Ayova', 'Chicago'];
// const nameToFind1 = 'Mango';
// const nameToFind2 = 'Holly';

const findeFriend = function (allFriends, name) {
  for (const friend of allFriends) {
    if (name === friend) {
      return 'The friend is present';
    }
  }

  return 'The friend is absent';
};

const r1 = findeFriend(friends, 'Mango');
console.log(r1);
const r2 = findeFriend(friends, 'Holly');
console.log(r2);
const r3 = findeFriend(friends, 'Texas');
console.log(r3);
