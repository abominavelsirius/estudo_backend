const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) { // verifica se o aluno tá cadastrado
    const [alunos, medias] = listaDeAlunosEMedias; // fica mais legivel

    const indice = alunos.indexOf(aluno); // quero pegar o indice do aluno que está na lista de alunos
    // fica bem mais claro oque estavamos fazendo
    //e o mesmo vai pra medias também

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Ana");


