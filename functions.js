// use an array of words, like 'word' from 'wordList.js'
function selectRandomWordFromWords(array) {
    return array[getRandomNumber(array.length)];
}

// pass in the maximum number as 'num'
function getRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

export { selectRandomWordFromWords, getRandomNumber };