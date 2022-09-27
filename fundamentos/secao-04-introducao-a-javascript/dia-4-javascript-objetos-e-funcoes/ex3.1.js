function verifyPalindrome(palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        console.log(true);
    } else {
        console.log(false);
    }
}