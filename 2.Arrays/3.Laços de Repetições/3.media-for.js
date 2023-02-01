const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


// pra somar todas elas
// tem que guardar o valor de cada uma delas somando em uma variavel separada
// let somaDasNotas = 0

// somaDasNotas += notas[i];
// vai começar na posição 0(10),
// na segunda iteração será posição 1(6,5)
// 10 + 6,5 = 16,5
// e por aí  vai até somar com o ultimo elemento do array de notas
