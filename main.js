import { words } from './wordList.js';
import { selectRandomWordFromWords } from './functions.js';


for(let i = 0; i < 10; i++) {
    console.log(selectRandomWordFromWords(words));
}
