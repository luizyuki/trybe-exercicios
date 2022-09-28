const chessPiece = 'rainha';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa para qualquer direção')
    break;

    case 'rainha':
        console.log('Rainha -> Quantas casas quiser para qualquer direção')
    break;

    case 'torre':
        console.log('Torre -> Quantas casas quiser para vertical ou horizontal')
    break;

    case 'bispo':
        console.log('Bispo -> Quantas casas quiser apenas para as diagonais')
    break;

    case 'cavalo':
        console.log('Cavalo -> Movimento de "L" para qualquer direção, passando por cima de peças')
    break;

    case 'peão':
        console.log('Peão -> Apenas uma casa para frente, mas no primeiro movimento podem ser duas casas, e pode andar nas diagonais pra frente caso tenha um inimigo ali')
    break;

    default:
        console.log('Peça inválida, não existente')
        break;
}