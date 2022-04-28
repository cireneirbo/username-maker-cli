import { selectRandomWordFromWords, getRandomNumber, randomizedUsernameCombination } from './functions.js';

console.log("\nRolling for a randomized username...\n");


setTimeout(()=> {
  randomizedUsernameCombination(getRandomNumber(9));
}, 2000);


