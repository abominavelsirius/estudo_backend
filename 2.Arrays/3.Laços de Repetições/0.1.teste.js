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


exibeNomeENota("Caio")

// se listaDeAlunosEMedias na posição 0, que é a lista de alunos
// vai perguntar se ele inclui o aluno que foi passado para o parametro
// .includes(aluno)
// e dentro desse includes vou passar o aluno (parametro)

// exibeNomeENota("João") vai ver se ele tá incluso mesmo.



// // parâmetro
// padrão, regra, princípio etc. por intermédio do qual se estabelece uma relação ou comparação entre termos.
// variável de caráter secundário cuja finalidade é especificar os objetos de um conjunto ou de uma família [P.ex., na família de planos ax + by + cz + d = o ; a, b, c e d são parâmetros.].
