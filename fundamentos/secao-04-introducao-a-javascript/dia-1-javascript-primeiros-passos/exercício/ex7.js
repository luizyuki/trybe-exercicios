const grade = 79;

if (grade >= 90) {
    console.log('Sua nota ' + grade + ' equivale a um A')
} else if (grade >= 80) {
    console.log('Sua nota ' + grade + ' equivale a um B')
} else if (grade >= 70) {
    console.log('Sua nota ' + grade + ' equivale a um C')
} else if (grade >= 60) {
    console.log('Sua nota ' + grade + ' equivale a um D')
} else if (grade >= 50) {
    console.log('Sua nota ' + grade + ' equivale a um E')
} else if (grade > 0 || grade > 100) {
    console.log('Erro: Sua nota não se enquadra na avaliação')
}