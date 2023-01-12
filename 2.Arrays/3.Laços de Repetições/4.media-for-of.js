const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// para cada elemento de notas, execute esse codigo dentro das chaves
for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

