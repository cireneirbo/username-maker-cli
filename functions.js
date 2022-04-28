import { words } from './wordList.js';

// use an array of words, like 'word' from 'wordList.js'
function selectRandomWordFromWords(array) {
    return array[getRandomNumber(array.length)];
}

// pass in the maximum number as 'num'
function getRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

// pass in a getRandomNumber(maxCases) as num
function randomizedUsernameCombination(num) {
    let newPassword = "";
    const comboOptions = [selectRandomWordFromWords(words), selectRandomWordFromWords(words), getRandomNumber(9), getRandomNumber(99), getRandomNumber(999), getRandomNumber(9999)];
    switch(num) {
      case 0:
        newPassword = console.log(comboOptions[0] + comboOptions[5] + comboOptions[1]);
        break;
      case 1:
        newPassword = console.log(comboOptions[4] + comboOptions[3] + comboOptions[0]);
        break;
      case 2:
        newPassword = console.log(comboOptions[0] + comboOptions[4] + comboOptions[1]);
        break;
      case 3:
        newPassword = console.log(comboOptions[4] + comboOptions[0] + comboOptions[4]);
        break;
      case 4:
        newPassword = console.log(comboOptions[1] + comboOptions[2] + comboOptions[0]);
        break;
      case 5:
        newPassword = console.log(comboOptions[0] + comboOptions[3] + comboOptions[1]);
        break;
      case 6:
        newPassword = console.log(comboOptions[0] + comboOptions[2] + comboOptions[1]);
        break;
      case 7:
        newPassword = console.log(comboOptions[2] + comboOptions[1] + comboOptions[0]);
        break;
      case 8:
        newPassword = console.log(comboOptions[3] + comboOptions[0] + comboOptions[5]);
        break;
      default: "Something went wrong!";
    }  
    return newPassword;
  }

export { selectRandomWordFromWords, getRandomNumber, randomizedUsernameCombination };