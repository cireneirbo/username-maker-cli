function selectRandomWordFromWords(array) {
    return array[getRandomNumber(array.length)];
}

function getRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

export { selectRandomWordFromWords, getRandomNumber };