const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];




function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado`)
} else {
    console.log(`${aluno} não está cadastrado`)
}
}

exibeNomeENota("João")

// se listaDeAlunosEMedias na posição 0, que é a lista de alunos
// vai perguntar se ele inclui o aluno que foi passado para o parametro
// .includes(aluno)
// e dentro desse includes vou passar o aluno (parametro)

// exibeNomeENota("João") vai ver se ele tá incluso mesmo.