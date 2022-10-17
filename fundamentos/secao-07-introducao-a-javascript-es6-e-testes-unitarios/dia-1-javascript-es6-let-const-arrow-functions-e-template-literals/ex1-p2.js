const fatorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i += 1) {
        result *= i;
    }
    return result;
};

let funcao = fatorial(3);
console.log(`Èsse é o fatorial ${funcao}`);