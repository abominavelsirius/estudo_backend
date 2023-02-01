const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// let nota of notas
// para cada elemento de notas, execute esse codigo dentro das chaves
for (let nota of notas) {
  somaDasNotas += nota;
}

// pra cada nota de notas, vou incrementar o valor da nota me questão

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);



// vai funcionar em casos que queremos um array do inicio ao fim ou de todos elementos
// a diferença do for
// for é mais flexivel em contextos mais complexos
// ex: querer pecorrer o array de trás pra frente, posso fazer decremento ao invés de incremento
// posso fazer de 2 em 2, de 3 em 3

// for of
// não e tão flexivel mas tem uma sinaxe mais sucita para as grandes maioria dos casos de array

//a proxima aula é uma outra estrutura de laço de repetição, vamos lá!


