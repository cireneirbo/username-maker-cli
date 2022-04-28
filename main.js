import { words } from './wordList.js';
import { selectRandomWordFromWords, getRandomNumber } from './functions.js';


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



console.log("\nRolling for a randomized username...\n");


setTimeout(()=> {
  randomizedUsernameCombination(getRandomNumber(9));
}, 1000);


