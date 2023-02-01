const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// .includes(aluno)
// vai perguntar se ele inclui o aluno que foi passado para o parametro


function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ana");
