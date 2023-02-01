const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// .includes(aluno)
// vai perguntar se ele inclui o aluno que foi passado para o parametro

// pra saber a média do aluno, primeiro precisa saber o indice dele
// joão tá no indice 0, então se eu tiver informação do indice dele
// eu irei descobrir a noa dele que tá no indice 0 de outra lista

// pra descobrir o indice de um elemento de uma array, posso fazer o seguinte:
// const indice recebe listaDeAlunosEMedias na posição 0.indexof e o parametro
// irá pesquisar dentro da lista de alunos
// indexof vai me retornar exatamente o valor do indice (indice de)

// com isso, dá pra pesquisar a nota dele agora na lista de medias
// const mediaDoAluno recebe listaDeAlunosEMedias na posição 1 porque agora é outra lista
// e irá acessar o [] com o indice que agora sabemos que é 0
 

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) { // verifica se o aluno tá cadastrado
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        console.log(indice);

        const mediaDoAluno = medias[indice];
        console.log(mediaDoAluno);

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João");

// agora é só deixar tudo mais bonitinho de se ver