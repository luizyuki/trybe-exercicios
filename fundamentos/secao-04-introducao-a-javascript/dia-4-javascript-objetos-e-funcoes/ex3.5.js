function somaNum (num) {
    let total = 0;
    for(let index = 1; index <= num; index += 1) {
        total += index;
    }
    console.log(total);
}

somaNum(5);