const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(
  `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
  A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
  `
);


// ou seja, você pode criar listas dentro de uma lista (algo parecido como com o que acontece com o diretório)
// aí pra chamar determinado indice da lista, é usado aquela tática de "lista[0][1]" que daí pega a lista 0 e dentro da lista 0 pega o 1