let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log('Bem-vinda, ' + info.personagem)
// console.log('-----------')
  info.recorrente = 'Sim';
//   for (let index in info) {
//     console.log(index)
//   }
// console.log('-----------')
//   for (let index in info) {
//     console.log(info[index])
//   }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (let index in info, info2) {
    if ( index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[index], info2[index])
    }
  }