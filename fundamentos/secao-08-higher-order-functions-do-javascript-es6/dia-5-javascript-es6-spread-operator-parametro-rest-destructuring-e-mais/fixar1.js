// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'melancia', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['doritos', 'batata frita', 'monster'];

const fruitSalad = (fruit, additional) => {
  return newList = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));