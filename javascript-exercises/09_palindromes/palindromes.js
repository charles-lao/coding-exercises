const palindromes = function (randomWord) {
    randomWord = randomWord.replace(/[^0-9a-z]/gi, '');
    randomWord = (randomWord.trim()).toLowerCase();

    let reversedWord = randomWord.split("");
    reversedWord = reversedWord.reverse();
    reversedWord = reversedWord.join();
    reversedWord = reversedWord.replaceAll(',', '');

    if(reversedWord === randomWord) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
