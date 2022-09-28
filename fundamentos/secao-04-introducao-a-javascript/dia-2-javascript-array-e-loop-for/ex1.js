let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }
// let sumNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sumNumbers += numbers[index];
// }

// console.log(sumNumbers);

// let mediaNumbers = sumNumbers / numbers.length;

// console.log('A média dos números é de: ' + mediaNumbers)

// if (mediaNumbers > 20) {
//     console.log('valor maior que 20')
// } else {
//     console.log('valor menor ou igual a 20')
// }
// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if(numbers[index] > higherNumber) {
//         higherNumber = numbers[index];
//     }
// }

// console.log('O maior número do array é o: ' + higherNumber);

// let oddNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         oddNumbers += 1;
//     }
// }

// if (oddNumbers === 0) {
//     console.log('Nenum valor ímpar encontrado no array')
// } 
// else {
//     console.log('Há um total de ' + oddNumbers + ' números ímpares no array');
// }

// let lowerNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if(numbers[index] < lowerNumber) {
//         lowerNumber = numbers[index];
//     }
// }

// console.log('O menor número do array é o: ' + lowerNumber);

let numbers1to25 = [];

for (let index = 1; index <= 25; index += 1) {
    numbers1to25.push(index);
}

console.log(numbers1to25);

for (let index2 = 0; index2 < numbers1to25.length; index2 += 1) {
    console.log(numbers1to25[index2] / 2);
}