import { words } from './wordList.js';
import { selectRandomWordFromWords, getRandomNumber } from './functions.js';

console.log("\nRolling for a randomized username...\n");
console.log(selectRandomWordFromWords(words) + selectRandomWordFromWords(words) + getRandomNumber(9999));
console.log(selectRandomWordFromWords(words) + selectRandomWordFromWords(words) + getRandomNumber(99));

