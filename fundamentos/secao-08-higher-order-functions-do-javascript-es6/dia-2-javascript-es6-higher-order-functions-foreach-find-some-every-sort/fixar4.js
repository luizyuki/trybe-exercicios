// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people1 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people1.sort((a, b) => a.age > b.age ? 1 : -1);
  
  console.log(people1);

//   Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people2.sort((a, b) => a.age < b.age ? 1 : -1);
  
  console.log(people2);