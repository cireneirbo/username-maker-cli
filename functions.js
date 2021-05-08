function selectRandomWordFromWords(array) {
    return array[getRandomIndexOfArray(array)];
}

function getRandomIndexOfArray(array) {
    return Math.floor((Math.random() * array.length));
}

export { selectRandomWordFromWords };