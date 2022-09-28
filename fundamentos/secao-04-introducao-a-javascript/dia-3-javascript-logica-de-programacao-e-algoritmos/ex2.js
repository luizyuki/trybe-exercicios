let word = 'tryber';
let invertedWord = '';

for (let index = 0; index < word.length; index += 1) {
  invertedWord += word[word.length - 1 - index];
}

console.log(invertedWord);