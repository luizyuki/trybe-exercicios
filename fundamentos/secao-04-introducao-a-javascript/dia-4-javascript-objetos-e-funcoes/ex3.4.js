function maisRepetido(numeros) {
    let num = {};

    for (let index = 0; index < numeros.length; index += 1) {
        let valor = numeros[index];
        if (num[valor] === undefined) {
            num[valor] = 1;
        } else {
            num[valor] = num[valor] + 1;
        }
    }

    let contagemRep = 0;
    let contagemNum = 0;

    for (let prop in num) {
        if (contagemRep < num[prop]) {
            contagemRep = num[prop];
            contagemNum = prop;
        }
    }

    console.log(contagemNum);
}

maisRepetido([2, 3, 2, 5, 8, 2, 3]);