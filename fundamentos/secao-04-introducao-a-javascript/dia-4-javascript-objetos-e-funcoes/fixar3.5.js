function verifyAngles (angleOne, angleTwo, angleThree) {
    if (angleOne < 0 || angleTwo < 0 || angleThree < 0) {
        console.log('Ângulo inválido para um triângulo')
    } else if (angleOne + angleTwo + angleThree === 180) {
        console.log(true)
    } else if (angleOne + angleTwo + angleThree !== 180) {
        console.log(false)
    }
}
