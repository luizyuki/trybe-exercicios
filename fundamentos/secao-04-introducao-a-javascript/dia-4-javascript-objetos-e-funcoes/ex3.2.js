// function maiorIndice(numeros) {
//     let indiceMaior = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMaior] < numeros[index]) {
//             indiceMaior = index;
//         }
//     }

//     console.log(indiceMaior);
// }

// maiorIndice([2, 3, 6, 7, 10, 1]); 


function menorIndice(numeros) {
    let indiceMenor = 0;
    for (let index in numeros) {
        if (numeros[indiceMenor] > numeros[index]) {
            indiceMenor = index;
        }
    }

    console.log(indiceMenor);
}

menorIndice([2, 4, 6, 7, 10, 0, -3]);