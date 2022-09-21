const notaCandidato = 42; // Testado anteriormente com 77 e agora com 42

if (notaCandidato >= 80) {
    console.log('Parabéns, você foi aprovada(o)"')
} 
else if (notaCandidato < 80 && notaCandidato >=60) {
    console.log("Você está na nossa lista de espera")
} 
else {
    console.log("Você foi reprovada(o)")
}
