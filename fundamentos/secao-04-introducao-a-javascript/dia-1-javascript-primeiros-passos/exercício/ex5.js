const angleA = 60;
const angleB = 60;
const angleC = -120;

let sumAngles = angleA + angleB + angleC;

let allPositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allPositive) {
    if (sumAngles === 180) {
        console.log(true)
    }
    else {
        console.log(false)
    };
} 
else {
    console.log('Ângulo inválido para realizar um triângulo')
}