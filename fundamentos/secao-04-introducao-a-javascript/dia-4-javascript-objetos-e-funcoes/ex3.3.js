function maiorNome(nomes) {
    let nomeMaior = nomes[0];
    for (let index in nomes) {
        if (nomeMaior.length < nomes[index].length) {
            nomeMaior = nomes[index];
        }
    }

    console.log(nomeMaior);
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);