const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
    for (let i = 1; i < array.length; i += 1) {
        for (let i2 = 0; i2 < i; i2 += 1) {
          if (array[i] < array[i2]) {
              let position = array[i];
              array[i] = array[i2];
              array[i2] = position;
            }
        }
    }
    return array
};

console.log(sortOddsAndEvens(oddsAndEvens));